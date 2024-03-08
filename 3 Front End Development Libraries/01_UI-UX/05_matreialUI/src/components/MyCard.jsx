import { Add, Delete } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const MyCard = () => {
  return (
    <Card sx={{mt: 5}}> 
      <CardMedia
        component="img"
        image="https://via.placeholder.com/1000x200"
        alt="a description"
        height="200"
      />

      <CardContent>
        <Typography variant="h5">Card Title</Typography>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque iure aut quia asperiores ipsum obcaecati suscipit, animi itaque a. Obcaecati, dolores explicabo animi itaque consectetur dolorem perspiciatis beatae rerum. </p>
      </CardContent>

      <CardActions>
        <Button variant="contained" startIcon={<Add />}>Add</Button>
        <Button color="error" startIcon={<Delete />}>Remove</Button>
      </CardActions>
    </Card>
  )
}

export default MyCard
