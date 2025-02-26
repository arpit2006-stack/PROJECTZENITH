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
            type:String,
            require:true,
        },
        category:{
            type:String,
            require:true,
        }
    },
    {timestamps:true}
);

const Inventory = mongoose.model("inventory",inventorySchema);

export default Inventory;