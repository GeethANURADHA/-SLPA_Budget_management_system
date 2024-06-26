import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";

//data imports
import User from "./models/User.js";
import Staff from "./models/Staff.js";
import { dataUser , dataStaff } from "./data/index.js";

/*CONFIGURATION*/
dotenv.config();
const app = express(); 
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));
app.use(cors());

/*Routes*/
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    /*only add data one time */
   // User.insertMany(dataUser);
    //Staff.insertMany(dataStaff);

  })
  .catch((error) => console.log(`${error} did not connect`));
