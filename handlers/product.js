const productData = require("../database/product");

async function allproducts(req,res,next){
    const products = await productData.find();
    return res.send({
        data:products
    })
}

    async function postdata(req,res,next){
        const { products : productdata1 } = req.body;
        let products= new productData(productdata1)
        await products.save();
    
        return res.send({
            message:"movie has added"
        });
    
    }

    //patch
    async function updateData(req,res,next){
        const { products:productdata1} = req.body;
        const {id:productId} = req.params;
    
        // let movie = await movieData.updateOne({
        //     id:movieId
        // },movieData1)
    
        let products = await productData.findById(productId)
       for(const [key,value] of Object.entries(productdata1)){
        products[key] = value;
       }
       await products.save();
    
          return res.send({
            message:"updated",
            data:products,
        })
    
    }

    //delete

    async function deleteProduct(req, res, next) {
        const { id: productId } = req.params;
    
        await productData.findByIdAndDelete(productId)
    
        return res.send({
            message: "Product has been deleted."
        })
    }




module.exports = {
    allproducts,
    postdata,
    updateData,
    deleteProduct

}