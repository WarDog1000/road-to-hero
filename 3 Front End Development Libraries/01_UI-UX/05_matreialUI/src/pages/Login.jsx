import { useState } from "react"
import { AddReaction } from "@mui/icons-material"
import { Alert, AlertTitle, Button, Collapse, Divider, Snackbar, Stack, Typography } from "@mui/material"
import { useSnackbar } from "notistack"

const Login = () => {
  const [alertStatus, setAlertStatus] = useState(true)
  const [snackbarStatus, setSnackbarStatus] = useState(false)
  const {enqueueSnackbar} = useSnackbar()
  const handleClick = () => {
    enqueueSnackbar("enqueueSnackbar", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    })
  }

  return (
    <>
    <Stack spacing={2} sx={{mb: 3}}>

      <Typography variant="h4" component="h4">Alert [severity]</Typography>
      <Alert severity="error">Mi Alert!</Alert>
      <Alert severity="warning">Mi Alert!</Alert>
      <Alert severity="info">Mi Alert!</Alert>
      <Alert severity="success">Mi Alert!</Alert>
      <Divider />

      <Typography variant="h4" component="h4">Alert [variant]</Typography>
      <Alert severity="error" variant="filled">Mi Alert! - filled</Alert>
      <Alert severity="warning" variant="outlined">Mi Alert! - autlined</Alert>
      <Alert severity="info" variant="standard">Mi Alert! - standard</Alert>
      <Divider />
      
      <Typography variant="h4" component="h4">Alert [icon]</Typography>
      <Alert severity="info" icon={<AddReaction />}>Mi Alert!</Alert>
      
      <Divider />
      <Typography variant="h4" component="h4">Alert Title</Typography>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Mi Alert!</Alert>
      <Divider />

      <Typography variant="h4" component="h4">Alert [action]</Typography>
      <Alert severity="warning" action={<Button color="inherit">Delete</Button>}>Mi Alert!</Alert>
      <Alert severity="error" action={
        <>
          <Button color="inherit">Delete</Button>
          <Button color="inherit">Accept</Button>
        </>
      }>Mi Alert!</Alert>
      <Divider />

      <Typography variant="h4" component="h4">Collapse [in] & Alerts [onClose()]</Typography>
      <Collapse in={alertStatus} sx={{mb: 5}}>
        <Alert severity="success" onClose={() => {setAlertStatus(false)}}>Success - click to delete</Alert>
      </Collapse>
      <Divider />
      
      <Typography variant="h4" component="h4">Snackbar</Typography>
      <Button variant="contained" onClick={() => setSnackbarStatus(true)}>Launch Snackbar</Button>
      <Snackbar open={snackbarStatus} autoHideDuration={1000} onClose={() => setSnackbarStatus(false)}>
        <Alert severity="info">Snackbar ...</Alert>
      </Snackbar>
      <Divider />

      <Typography variant="h4" component="h4">notistack useSnackbar()</Typography>
      <Button variant="contained" onClick={handleClick}>Open</Button>


    </Stack>

    {/* <Snackbar 
      open={alertStatus}
      message="Alert Snackbar"
    ></Snackbar> */}
    </>
  )
}

export default Login
 