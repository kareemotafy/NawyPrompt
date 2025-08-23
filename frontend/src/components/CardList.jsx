import { Card, CardContent, Typography, Grid } from "@mui/material";
import PropertyCard from "./PropertyCard";

export default function CardList({ data, onSelect }) {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={12} md={4} key={item.id}>
          <PropertyCard item={item} onClick={() => onSelect(item)} />
        </Grid>
      ))}
    </Grid>
  );
}
