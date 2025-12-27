import mongoose from "mongoose";

const ConnectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log(`MongoDB connected !!!  ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("connection DB failed", error);
        process.exit(1)
    }
}


export default ConnectDB;