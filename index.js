const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const route = require("./routes/UserRoute")
const connection = require("./connection/connection")
const {createTable} = require("./Tables/Usertable")



app.use(bodyparser.json({ extended: true, limit: "5mb" }));
app.use(bodyparser.urlencoded({ extended: true, limit: "5mb" }))
app.use(cors())
app.use(express.json({ extended: true, limit: "5mb" }))


connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        app.listen(4000, () => {
            console.log(`server is up and running 4000`);
            console.log(`Database is connected`);
        })
        connection.query(createTable,(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("create db");
            }
        })
    }
})

app.use("/user",route )
