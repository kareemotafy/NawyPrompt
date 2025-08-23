import { Modal, Box, Typography, Button } from "@mui/material";

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
          width: 400,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body1">{item.description}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Category: {item.category}
        </Typography>
        <Button variant="contained" onClick={onClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
