const express = require("express");
const fetch = require("node-fetch");
const capsuleRouter = express.Router();
require("dotenv").config();
const url = 'https://api.spacexdata.com/v3/capsules';



capsuleRouter.get("/capsules", async (req, res) => {
    let {page, status,type, original_launch}=req.query
     page=page-1;


     let querys= [] ;

     if(status) querys.push(`status=${status}`) ;
     if(type) querys.push(`type=${type}`) ;
     if(original_launch) querys.push(`original_launch=${original_launch}`)

     querys= querys.join("&")
    console.log(querys)



     // Filter 
     
    try {
        let  curr=page==0 ? 0 : 1  // 1-10   11-20   21-30  31-40  
        let offset= curr* 10 ;
        console.log(offset)
        // return
        let limit=10;

        const response = await fetch(`${url}?${querys}&offset=${offset}&limit=${limit}`);
        if (!response.ok) {
            res.status(400).json({msg:`Failed to fetch data: ${response.statusText}`});
        }

        let data = await response.json();
        if(data.length>10) data=data.slice(0,10)
        return res.status(200).json({length:data.length, data: data});
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = { capsuleRouter };








