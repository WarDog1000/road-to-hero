import styled from 'styled-components'
import {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components'
export default function StyledComponent() {
  let mainColor = "#db7093",
  mainColorAlpha80 = "#db709380"
  const setTransitionTime = (time) => `background ${time} ease-in-out`

  // styled-component {keyframes} ANIMATIONS
  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

  const MyH3 = styled.h3`
  padding:2rem;
  text-aling:center;
  background-color:${mainColor};
  color:${props => props.color || "white"};
  transition: ${setTransitionTime(".1s")};
  animation: ${fadeIn} 5s ease-out;
  ${(props) => props.isButton && 
    css `
      margin:auto;
      max-width:50%;
      border-radius:0.25rem;
      cursor:pointer;`}
  &:hover {
    background-color:${mainColorAlpha80};
  }` // concatenacion de estilos styled=-component {css}

  const light = {
    color: "#222",
    bgColor: "#ddd"
  }

  const dark = {
    color: "#ddd",
    bgColor: "#222"
  }

  // styled-components PROPS
  const Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.bgColor};
  `

  // styled-components HERENCIA
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `

  return(
    <>
      <h2>Styled Components</h2>
      <MyH3>Hola soy un componente estilizado con styled-components</MyH3>
      <MyH3 color="#61dafb">Hola soy un componente estilizado con styled-components</MyH3>
      <MyH3 isButton={true}>Hola soy un H3 estilizado como Button</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja theme light</Box>
      </ThemeProvider>
      {/* styled-component CONTAINER/WRAPER */}
      <ThemeProvider theme={dark}>
        <Box>Soy una caja theme dark</Box>
      </ThemeProvider>
      <ThemeProvider theme={light}>
        <BoxRounded>Herencia de Box</BoxRounded>
      </ThemeProvider>
    </>
  )
}