import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import NavListDrawer from "./NavListDrawer"
import { useState } from "react"
import { Menu } from "@mui/icons-material"
import { NavLink } from "react-router-dom"

const NavBar = ({navLinks}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <AppBar>
      <Toolbar>
        <IconButton sx={{display: {xs: "flex", sm: "none"}}} edge="start" color="inherit" size="large" onClick={() => setOpen(true)}><Menu /></IconButton>
        <Typography variant="h6" sx={{flexGrow: 1}}>MUI</Typography>
        <Box sx={{display: {xs: "none", sm: "block"}}}>
          {navLinks.map(el => (<Button component={NavLink} key={crypto.randomUUID()} to={el.path} color="inherit">{el.title}</Button>))}
        </Box>
      </Toolbar>
    </AppBar>

    <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{display: {xs: "flex", sm: "none"}}}>
      <NavListDrawer navLinks={navLinks} setOpen={setOpen} /> 
    </Drawer>
    </>
  )
}

export default NavBar
