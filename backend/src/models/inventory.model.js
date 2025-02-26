import  mongoose from 'mongoose'

const inventorySchema = new mongoose.Schema(
    {
        image:{
            type:String,
            // require:true,
        },
        nameOfProduct:{
            type:String,
        },
        price:{
            type:Number,
            required:true,
        },
        category:{
            type:String,
            required:true,
        }
    },
    {timestamps:true}
);

const Inventory = mongoose.model("inventory",inventorySchema);

export default Inventory;