const product = require('../models/productmodel');

// bussiness logic start here 

const getproducts= async(req,res) =>{
    try {
        const allproducts = await product.find();
        if(!allproducts || allproducts.length === 0) {
            res.json({
                message : "there is no product"
            })
        }
        // if aapke ke pass product hye us case me 
        res.status(200).json ({
            success : true,
            product: allproducts,
        })
}
    catch (err) {
        res.status(500).json( {
            success : false,
            message : "internal server eeror"
        })
    }
}

const createproduct = async(req,res) => {
    try { const {name,price,discription,
        category} = req.body;
        const newproduct = new product ({name,price,discription ,category});
        await newproduct.save();
        res.status(200).json ({
            success : true,
            product : newproduct,
})
}
    catch (err) { res.status(500).json( {
            success : false,
            message : "internal server eeror"
        })
}
}

const updateproduct = async (req,res) => {
    try {
        const {id} = req.params;
        const { name , price ,discription , category } = req.body;
        const updateproduct = await product.findByIdAndUpdate(id,{name, price, discription, category},{new :true});
        res.status(200).json ({
            success : true,
            product : updateproduct

        })
    }catch(err) {
        res.status(500).json( {
            success : false,
            message : "internal server eeror"
        })
    }
}

const deleteproduct = async(req,res) => {
    try { 
        const{id} = req.params;
        // const{name,price,discription,category} = req.body;
        const deleteproduct = await product.findByIdAndDelete(id);
        if(! deleteproduct) {
            res.json ({
                message : "product cannot found , cannot be delete "
            })
        }

        res.status(200).json({
            success : true,
            message : "product delete successfully",
            product : deleteproduct
        })
}
    catch (err) {
         res.status(500).json( {
            success : false,
            message : "internal server eeror"
        })
        }
}

module.exports = {getproducts,updateproduct,createproduct,deleteproduct };