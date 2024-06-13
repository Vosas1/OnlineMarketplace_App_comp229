const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,  // This field is required
        trim: true       // Trim whitespace from the name
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0            // Minimum value for price
    },
    quantity: {
        type: Number,
        required: true,
        min: 0            // Minimum value for quantity
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,    // URL to an image for the product
        required: false  // This field is not required
    }
});

// Create a model using the schema
const Product = mongoose.model('Product', productSchema);

// Export the model
module.exports = Product;
