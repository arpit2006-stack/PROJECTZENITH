// import User from "../models/user.model";
import Inventory from "../models/inventory.model.js";
import User from "../models/user.model.js";

export const adminLogin = async (req, res, next) => {
  try {
    const loggedInUser = req.user._id;

    const roller = await User.find({ _id: { $ne: loggedInUser } }).select(
      "role"
    );
    console.log(roller);
    if (roller === "admin") {
      res.status(200).json("Hello Admin");
    }
  } catch (error) {
    next(error);
  }
};

export const addProducts = async (req, res, next) => {
  try {
    const { image, nameOfProduct, price, category } = req.body;
    const adding = await Inventory.create({
      image,
      nameOfProduct,
      price,
      category,
    });

    res.status(201).json(adding);
  } catch (error) {
    next(error);
  }
};
