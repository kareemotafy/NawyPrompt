import { useEffect, useMemo, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Box,
  MenuItem,
  Chip,
  Stack,
} from "@mui/material";
import CardList from "../components/CardList";
import DetailsModal from "../components/DetailsModal";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [properties, setProperties] = useState([]);
  const [orderBy, setOrderBy] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

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

  const filteredData = useMemo(() => {
    let data = [...properties];

    if (query) {
      data = data.filter((item) =>
        item?.name?.toLowerCase()?.includes(query.toLowerCase())
      );
    }

    if (filterCategory) {
      data = data.filter((item) => item.consumptionType === filterCategory);
    }

    if (orderBy === "price") {
      data.sort((a, b) => a.price - b.price);
    } else if (orderBy === "stars") {
      data.sort((a, b) => b.stars - a.stars);
    }

    return data;
  }, [properties, query, orderBy, filterCategory]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        bgcolor: "#f8f9fa",
        overflow: "hidden",
        m: -1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: 400,
          height: 400,
          borderRadius: "50%",
          bgcolor: "rgba(121, 198, 188, 0.6)", // teal
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "200px",
          right: "-200px",
          width: 450,
          height: 450,
          borderRadius: "50%",
          bgcolor: "rgba(247, 92, 0, 0.6)", // orange
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-180px",
          left: "100px",
          width: 400,
          height: 400,
          borderRadius: "50%",
          bgcolor: "rgba(0, 184, 201, 0.6)", // cyan
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "50px",
          right: "50px",
          width: 300,
          height: 300,
          borderRadius: "50%",
          bgcolor: "rgba(1, 89, 150, 0.6)", // deep blue
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <img
        src="/logo.png"
        alt="Caramel Real Estate"
        style={{
          width: 100,
          height: 100,
          position: "relative",
          top: 20,
          left: 20,
          zIndex: 1,
        }}
      />
      <Container sx={{ mt: 4, position: "relative", zIndex: 1 }}>
        {/* Controls */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mb={3}
          alignItems={{ xs: "stretch", sm: "center" }}
        >
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
          />

          <TextField
            select
            label="Order By"
            size="small"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
            sx={{ minWidth: 160 }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="stars">Stars</MenuItem>
          </TextField>

          <TextField
            select
            label="Category"
            size="small"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            sx={{ minWidth: 160 }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="RENT">Rent</MenuItem>
            <MenuItem value="PURCHASE">Purchase</MenuItem>
          </TextField>
        </Stack>

        {/* Active Filter Indicators */}
        <Stack direction="row" spacing={1} mb={2}>
          {orderBy && (
            <Chip
              label={`Ordered by: ${orderBy}`}
              onDelete={() => setOrderBy("")}
              color="primary"
              variant="outlined"
            />
          )}
          {filterCategory && (
            <Chip
              label={`Category: ${filterCategory}`}
              onDelete={() => setFilterCategory("")}
              color="secondary"
              variant="outlined"
            />
          )}
        </Stack>

        {/* Properties */}
        <CardList data={filteredData} onSelect={setSelected} />
        <DetailsModal
          open={!!selected}
          onClose={() => setSelected(null)}
          item={selected}
        />
      </Container>
    </Box>
  );
}
