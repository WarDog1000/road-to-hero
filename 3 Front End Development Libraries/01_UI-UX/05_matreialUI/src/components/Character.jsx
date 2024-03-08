import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Character = ({name, image}) => {
  return (
    <Card>
      <CardMedia
        title={name}
        image={image}
        sx={{ height: 250}}
      ></CardMedia>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default Character;
