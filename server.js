const express = require("express")
const app = express()
const propertyRoutes = require("./routes/propertyRoutes")

app.use(express.json())
app.use("/", propertyRoutes)

app.listen(3000, ()=> console.log("Listening on port 3000"))