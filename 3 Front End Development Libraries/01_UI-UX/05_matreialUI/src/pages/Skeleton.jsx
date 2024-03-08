import { Container, Grid, Typography } from "@mui/material"
import Character from "../components/Character"
import CharacterSkeleton from "../components/CharacterSkeleton"
import { useEffect, useState } from "react"

const fakePromise = () => new Promise((resolve) => {
  setTimeout(resolve, 1000);
})

const SkeletonP = () => {
  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(true)
  const url = `https://rickandmortyapi.com/api/character`

  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    try {
      await fakePromise() // promesa falsa de "x" segundos
      const res = await fetch(url)
      const data = await res.json()
      setCharacter(data.results)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Typography variant="h3" component="h3" textAlign="center" mb={3}>Rick and Morty</Typography>
      <Grid container spacing={2} maxWidth="xl">
        {
          loading
            ? Array.from(new Array(8)).map( () => (<Grid item xs={12} sm={6} md={4} lg={3} key={crypto.randomUUID()}><CharacterSkeleton /></Grid>))
            : character.map((el) => (<Grid item xs={12} sm={6} md={4} lg={3} key={crypto.randomUUID()}><Character name={el.name} image={el.image} /></Grid>))
        }
      </Grid>
    </Container>
  )
}

export default SkeletonP
