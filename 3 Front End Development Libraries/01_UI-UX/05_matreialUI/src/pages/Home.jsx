import { Add, Delete } from "@mui/icons-material"
import { Box, Button, Grid, Typography } from "@mui/material"
import Product from "../components/Product"
import MyCard from "../components/MyCard"

const Home = () => {
  return (
    <div>
      <h1>App Ejample</h1>
      <Button variant="contained">Mi primer button </Button>
      <Typography variant="h1" component="h1">H1 as MUI</Typography>
      <Typography variant="h1" component="span">H1 as an span</Typography>
      <Typography variant="h2" component="p">H2 rendered as an p</Typography>
      <Typography variant="body1" textAlign="center" mt={2}>Text Align Center</Typography>
      <Box sx={{border: 2, p: 5, borderColor: "peru", bgcolor: "#111", color: "white"}}
      component="section">
        Component Box
      </Box>
      <Button color="warning" variant="text">Button Text</Button>
      <Button color="secondary" variant="contained">Button Contained</Button>
      <Button color="secondary" variant="outlined">Button Outlined</Button>
      <Button color="primary" variant="contained" startIcon={<Add />}>Button with Icon</Button>
      <Button color="primary" variant="contained" endIcon={<Delete />}>Button with Icon</Button>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur velit odio. Ipsum dicta consequatur iste fuga saepe ducimus voluptatibus minus ea. Architecto vitae autem consectetur officia praesentium tempora cum.</p></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur velit odio. Ipsum dicta consequatur iste fuga saepe ducimus voluptatibus minus ea. Architecto vitae autem consectetur officia praesentium tempora cum.</p></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur velit odio. Ipsum dicta consequatur iste fuga saepe ducimus voluptatibus minus ea. Architecto vitae autem consectetur officia praesentium tempora cum.</p></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur velit odio. Ipsum dicta consequatur iste fuga saepe ducimus voluptatibus minus ea. Architecto vitae autem consectetur officia praesentium tempora cum.</p></Grid>
        <Grid item xs={12} sm={6} md={4} lg={12}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur velit odio. Ipsum dicta consequatur iste fuga saepe ducimus voluptatibus minus ea. Architecto vitae autem consectetur officia praesentium tempora cum.</p></Grid>
      </Grid>
      <Product />
      <MyCard />
    </div>
  )
}

export default Home
