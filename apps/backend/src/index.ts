import express from "express";
import {BACKEND_URL} from "@repo/common/config";
// import { add } from "@repo/math/add";

const {add}=require("@repo/math/add");

const app=express();
console.log(add(1,2));
app.get("/",(req,res)=>{
    console.log(`backend url is ${BACKEND_URL}`)
    res.send("hello world ")
})

app.listen("3003",()=>{
    
    console.log("server is running on port 3003")
})