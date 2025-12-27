import dotenv from "dotenv"; 
import ConnectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

const startServer =  async () => {
    try {
        await ConnectDB();

        app.on("error", (error) => {
            console.log("Error", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("mongoDB connect fails ", err)
    }
}


startServer();