const mongoose = require("mongoose");
const app = require("./app");

const DB =
    "mongodb+srv://username:slaptas@cluster0.vrsio13.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(DB, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("MongoDB connected");
    });

const port = 3005;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});








