const fs = require("fs");

//To get all Properties
exports.getAllProperty = (req, res) => {
  fs.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      return res.json({ error: "Failed to read data" });
    }
    res.json(JSON.parse(data));
  });
};

//To get a single property
exports.getSingleProperty = (req, res) => {
  const itemId = parseInt(req.params.id);

  fs.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      return res.json({ error: "Failed to read data" });
    }
    const items = JSON.parse(data);
    const item = items.find((item) => item.id === itemId);

    if (!item) {
      return res.json({ error: "Item not found" });
    }
    res.json(item);
  });
};
