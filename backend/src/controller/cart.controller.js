import CartModel from '../models/cart.model.js';
import Inventory from '../models/inventory.model.js';
import User from "../models/user.model.js";


export const addtocart = async (req, res) => {
    try {
        const userid = req.user._id;
        // const productid = req.inventory._id;
        // const { userId, productId } = req.body;// Get user ID & product ID from request

        //  Find the product
        const product = await Inventory.findById(productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

         //  Find the user's cart
        const userCart = await CartModel.findOne({ userId });

        if (!userCart) {
            // Create new cart if it not exist
            userCart = new CartModel({
                userId,
                products: [{ productId, quantity: 1 }],
                total: product.price,
            });
        } else {
            // Check if the product already exists in cart
            const cartProduct = userCart.products.find((p) => p.productId.toString() === productId);

            if (cartProduct) {
                cartProduct.quantity += 1;//Increase quantity if product exists
            } else {
                userCart.products.push({ productId, quantity: 1 });  //Add new product
            }

            // Update total price
            userCart.total += product.price;
        }

        await userCart.save();

        res.status(200).json({
            success: true,
            message: "Product added to cart",
            cart: userCart,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
