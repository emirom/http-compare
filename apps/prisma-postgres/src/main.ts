import bodyParser from "body-parser";
import express from "express";
import { createPrismaConnection } from "./database/connection";
import restRoutes from "./routes";
import cors from "cors"

try {
  const app = express();

  const SERVER_PORT = process.env.SERVER_PORT || 9900;

  (async () => {
    await createPrismaConnection();
  })

  app.use(cors())

  restRoutes(app);
  app.use(express.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.listen(SERVER_PORT, () => {
    console.log(`Express server ( prisma + rest ) is up at http://localhost:${SERVER_PORT}`);
  });

} catch (error) {
  process.on('SIGINT', () => {
    console.info("exit process ...")
    process.exit(0)
  })
}
