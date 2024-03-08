import { Drafts, Inbox } from "@mui/icons-material"
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { NavLink } from "react-router-dom"

const NavListDrawer = ({navLinks, setOpen}) => {
  return (
    <Box sx={{width: 250}}>
      {/* <nav>
        <List>
          <ListItem>
            <ListItemIcon><Inbox /></ListItemIcon>
            <ListItemText primary="Imbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Drafts /></ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </nav> 
      <Divider /> */}
      <nav>
        <List>
          {navLinks.map(el => (
            <ListItem disablePadding key={crypto.randomUUID()}>
              <ListItemButton component={NavLink} to={el.path} onClick={() => setOpen(false)}>
                <ListItemText>{el.title}</ListItemText>
              </ListItemButton>
            </ListItem>

          ))}
        </List>
      </nav>
    </Box>
  )
}

export default NavListDrawer
