const { model, Schema } = require('mongoose');

const chatMessageSchema = new Schema({
    nombre: String,
    mensaje: String,



}, {
    versionKey: false, timestamps: true
});

// userSchema.virtual('amount').get(async function () {

//     const cart = (await this.populate('cart')).cart;


//     return cart.reduce((acc, product) => {
//         return acc + product.price;
//     }, 0)

// });



module.exports = model('chatmessage', chatMessageSchema);