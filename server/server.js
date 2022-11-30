import express from "express";
import mongoose from 'mongoose';
import cors from "cors"

const PORT=4000;
const app=express();

app.use(cors());

await mongoose.connect("mongodb://lramos31:Sabiduria26@ac-ddgrn0t-shard-00-00.at18yki.mongodb.net:27017,ac-ddgrn0t-shard-00-01.at18yki.mongodb.net:27017,ac-ddgrn0t-shard-00-02.at18yki.mongodb.net:27017/?ssl=true&replicaSet=atlas-k34t6v-shard-0&authSource=admin&retryWrites=true&w=majority")
 console.log("MongoDB connection is succesfull");

app.get("/",(req, res)=>{

    res.send("Hello World");
});
app.post("/transaction",(req, res)=>{
    console.log(rq.body);
    res.json({ message: "Hello World"});
});

app.listen(PORT,()=>{

    console.log("Server is running");
});