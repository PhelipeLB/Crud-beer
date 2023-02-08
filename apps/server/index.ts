import app from "./server";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3333;

app.listen(port, async () => {
  console.log(`🍺 Server is running on http://localhost:${port}/graphql`);
});
