import {
  Card,
  CardContent,
  Typography,
  Rating,
  Chip,
  Stack,
} from "@mui/material";

export default function PropertyCard({ item, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}
    >
      <CardContent>
        <img
          src={item.photo}
          alt={item.name}
          style={{
            width: "100%",
            maxHeight: 180,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Typography variant="h6">{item.name}</Typography>
          <Chip
            label={item.consumptionType}
            color={item.consumptionType === "RENT" ? "primary" : "secondary"}
            size="small"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.sizeM2} m²
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          {item.price} EGP
        </Typography>

        {/* Stars */}
        <Rating
          name="property-rating"
          value={item.stars || 0}
          precision={0.5}
          readOnly
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
}
