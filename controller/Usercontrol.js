const connection = require("../connection/connection")

const createuser = (req, res) => {
    const data = req.body;
    connection.query("INSERT INTO checkdata SET ?", data, (err, result, fields) => {
        if (err) {
            console.log(err.message);
        }
        else {
          return res.status(200).json({
            message:"user created successful",
            result:result
           })
        }
    })

}

const findall = (req,res) => {
    connection.query("SELECT * FROM test.checkdata",(err,result,fields)=>{
        if(err) throw err;
        else{
            return res.status(200).json({
                message:"data Find Successful",
                result:result
            })
        }
    })
}

const loginuser = (req,res) =>{
    const {name,password} = req.body
    connection.query("SELECT * FROM test.checkdata where name = ? ",[name],(err,result,fields)=>{
        if(err) throw err ;
        else if (result.length > 0){
            if(result[0].password === password){
                return res.status(200).json({
                    message:"login successful",
                    result :result
                })
            }else{
                return res.status(404).json({
                    message:"Incorrect password"
                })
            }
            
        }else{
            return res.status(404).json({
                message:"user not found"
            })
        }
    })
}

const deleteuser = (req,res) =>{
    const {id}  = req.params;
    connection.query("DELETE FROM test.checkdata WHERE id = ?",[id],(err,result,fields)=>{
        if(err) throw err.message;
        else{
             return res.status(200).json({
                message:"product deleted successful",
                result:result
            })
        }
    })
}

const update = (req,res) => {
    const {name,age,password} = req.body
    const {id} = req.params

    connection.query("UPDATE test.checkdata SET name=? , age=? , password= ? WHERE id = ?",[name,age,password,id],(err,result,fields)=>{
        if(err) throw err;
        else{
            return res.status(200).json({
                message:"update successful",
                result:result
            })
        }
    })
}

module.exports = {
    createuser,
    findall,
    loginuser,
    deleteuser,
    update
}