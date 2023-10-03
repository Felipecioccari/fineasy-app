import express from "express";
import db from "./config/dbConnect.js";
import manipulate404 from "./middlewares/manipulate404.js";
import ErrorManipulation from "./middlewares/ErrorManipulation.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulate404);

// eslint-disable-next-line no-unused-vars
app.use(ErrorManipulation);

export default app;