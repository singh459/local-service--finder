const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let services = [
  { id: 1, name: "Plumber" },
  { id: 2, name: "Electrician" },
  { id: 3, name: "Mechanic" }
];

let bookings = [];

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.get("/services", (req, res) => {
  res.json(services);
});

app.post("/book", (req, res) => {
  bookings.push(req.body);
  res.json({ message: "Service booked", data: req.body });
});

app.get("/bookings", (req, res) => {
  res.json(bookings);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});