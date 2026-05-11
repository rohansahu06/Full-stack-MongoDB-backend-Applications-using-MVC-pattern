// restructure shema and model
const {Schema,model} = require("mongoose");

//  making schema using schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  price: {
    type: Number,
    required: true,
    maxlength: 50
  },
  discription: {
    type: String,
    required: true,
    maxlength: 50
  },
  category: {
    type: String,
    required: true,
    maxlength: 50
  },
});

// creating model 
const productmodel = model("product", productSchema);
// import model
module.exports = productmodel



