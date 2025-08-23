import { Card, CardContent, Typography } from "@mui/material";

export default function PropertyCard({ item, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
    >
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item.category}
        </Typography>
      </CardContent>
    </Card>
  );
}
