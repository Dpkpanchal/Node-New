const ProductModel = require('./product.model');

module.exports = {

    create:(data)=>{
        return ProductModel.create(data);
    },
    list:()=>{
        return ProductModel.find();
    },
    getProductById:(id)=>{
        return ProductModel.findById(id);
    },
    updateProduct:(id,data)=>{
        return ProductModel.findByIdAndUpdate(id,data);
    },
    deleteProduct:(id)=>{
        return ProductModel.deleteOne({_id:id});
    }


}