import {
  Modal,
  Box,
  Typography,
  Button,
  Rating,
  Chip,
  Stack,
} from "@mui/material";

export default function DetailsModal({ open, onClose, item }) {
  if (!item) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          width: 450,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {item.name}
        </Typography>

        <img
          src={item.photo}
          alt={item.name}
          style={{
            width: "100%",
            maxHeight: 220,
            objectFit: "cover",
            borderRadius: 8,
            marginBottom: 12,
          }}
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Chip
            label={item.consumptionType}
            color={item.consumptionType === "RENT" ? "primary" : "secondary"}
            size="small"
          />
          <Rating value={item.stars || 0} precision={0.5} readOnly />
        </Stack>

        <Typography variant="body1" gutterBottom>
          {item.description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Size: {item.sizeM2} m²
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          Price: {item.price} EGP
        </Typography>

        {/* Lat / Long */}
        <Typography variant="body2" color="text.secondary">
          Latitude: {item.lat}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Longitude: {item.long}
        </Typography>
      </Box>
    </Modal>
  );
}
