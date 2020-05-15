const ProductService = require('./product.service');
//Export model
module.exports = {
    create:(req,res)=>{
       const body = req.body;
       ProductService.create(body).then(result=>{
           if(result){
                res.json({
                    success:1,
                    message:"Data insered successfully...",
                    data:result
                })
           } else{
                res.json({
                    success:0,
                    message:"failed to insered data..."
                })
           }
           
       })
    }
}