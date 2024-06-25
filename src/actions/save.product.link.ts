'use server';

import DbConnect from "@/lib/db";
import Product from "@/utils/models/product.model";

export const saveproductLinks = async (productLinks: any) => {
    const { _id,userid, enabled, title,  productUrl, section, avatarUrl, protection, animation, regularPrice, salePrice } = productLinks;
    try {
        // Connect to the database
        await DbConnect();
        if (_id !== undefined && _id !== null && _id !== "") {
            const findProductLink = await Product.findById(_id);
            if (findProductLink) {
                const updatedNormalLink = await Product.findByIdAndUpdate(_id, { enabled, title, productUrl, section, avatarUrl, protection, animation,  regularPrice, salePrice }, { new: true });
                console.log("Product updated with : ",updatedNormalLink);
                return;
            }
            console.log("No Product link found for ID: " + _id);
        }
        // Create a new video link
        const createdProductLink = await Product.create({
            userid,
            enabled, title, productUrl, section, avatarUrl, protection, animation, regularPrice, salePrice,
        });
        console.log("Product links created");
        return JSON.parse(JSON.stringify(createdProductLink));

        // return createdProductLink;
    } catch (error) {
        console.error("Error saving Product link:", error);
        throw error;
    }
};
