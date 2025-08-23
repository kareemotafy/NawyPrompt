import { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import CardList from "../components/CardList";
import DetailsModal from "../components/DetailsModal";

const sampleData = [
  {
    id: 1,
    title: "Luxury Villa",
    category: "House",
    description: "A beautiful villa with sea view.",
  },
  {
    id: 2,
    title: "Downtown Apartment",
    category: "Apartment",
    description: "Modern apartment in city center.",
  },
  {
    id: 3,
    title: "Suburban Home",
    category: "House",
    description: "Cozy home with garden.",
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredData = sampleData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained">Order By</Button>
        <Button variant="outlined">Filter by Category</Button>
      </Box>

      <CardList data={filteredData} onSelect={setSelected} />

      <DetailsModal
        open={!!selected}
        onClose={() => setSelected(null)}
        item={selected}
      />
    </Container>
  );
}
