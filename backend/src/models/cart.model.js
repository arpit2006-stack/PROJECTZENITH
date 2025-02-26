import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
   
   
    userId: {
        type: mongoose.Schema.type.objectId,
        require: true,
      },
      ProductIds: [{
        type: mongoose.Schema.type.ProductIds,
        require: true,
      }],
      quantity: {
        type: number,
        require: true,
      }
})


{
    timestamps : true
}


const cart = mongoose.nmodel("cart",CartSchema);

export default cart