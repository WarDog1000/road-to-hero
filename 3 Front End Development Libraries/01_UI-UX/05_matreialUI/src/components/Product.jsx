import styled from "@emotion/styled"
import { Add } from "@mui/icons-material"
import { Box, Button, Paper, Typography } from "@mui/material"

const Product = () => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  })
  return (
    <Paper sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      overflow: "hidden",
      mt: 5,
      }}>
      
      <Img src="https://via.placeholder.com/200" alt="imagen con styled" />
      <Box sx={{flexGrow: 1, display: "grid", gap: 2}}>
        <Typography variant="h4" component="h4">Product Name</Typography>
        <Typography>Product Description</Typography>
        <Button variant="contained" startIcon={<Add />}>Add Cart</Button>
      </Box>
      <Box sx={{mr: 2}} component="p">
        $19.99
      </Box>
    </Paper>
  )
}

export default Product
