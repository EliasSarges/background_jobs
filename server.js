import app from "./src/index";

const port = process.env.PORT || 5555;

app.listen(port, () => console.log("server running!"));
