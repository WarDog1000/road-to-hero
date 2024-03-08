import { Card, CardContent, Skeleton } from "@mui/material";

const CharacterSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" height={250} />
      <CardContent>
        <Skeleton height={25} />
      </CardContent>
    </Card>
  );
};

export default CharacterSkeleton;
