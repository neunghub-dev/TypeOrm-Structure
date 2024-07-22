import express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import dotenv from 'dotenv';
import router from "./routes";
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/api/v1", router);

app.get("*", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World" });
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});
// AppDataSource.initialize()
//     .then(async () => {
//         app.listen(port, () => {
//             console.log("Server is running on http://localhost:" + port);
//         });
//         console.log("Data Source has been initialized!");
//     }
//     ).catch((error) => console.log(error));