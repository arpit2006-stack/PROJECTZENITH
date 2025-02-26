import cart from '../models/cart.model';

import products from '../models/inventory-model'

export const addtocart = async (req,res)=>{
       try{if(!Product)
       {
        return res.status(404).json({
            success : false,
            message : "product not found",
        });

       }
      
       const cart = await cart.findOne(userId);
       if(!cart){
        const newcart = new cart({
            userId,
            ProductIds: [{ ProductIds}],
            total: Product.price,
        });
        
       }

       const cartProduct = cart.products.find((p) => p.ProductIds.toString()===products);
       
       if(cartProduct) {
        cartProduct.quantity += 1;  //x=x+1
       }
       else{
        cart.products.push({ productID });
        cart.total += Product.price;
       }
       await cart.save();
       res.status(200).json({
        success: true,
        message:"product added to cart",
        cart,
       });

    }catch(error){
        res.status(400).json({
            success: false,
            message:error.message,
        });
       }   
};