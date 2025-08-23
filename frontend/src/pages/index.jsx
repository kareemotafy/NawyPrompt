import { useEffect, useMemo, useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import CardList from "../components/CardList";
import DetailsModal from "../components/DetailsModal";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProps() {
      try {
        const res = await fetch("http://localhost:5000/api/properties");
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        console.error("Failed to fetch properties", err);
      }
    }
    fetchProps();
  }, []);

  const filteredData = useMemo(
    () =>
      properties.filter(
        (item) => item?.name?.toLowerCase()?.includes(query.toLowerCase()) || ""
      ),
    [properties, query]
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
