'use server';

import DbConnect from "@/lib/db";
import Product from "@/utils/models/product.model";

export const getProductlLinks = async({userid}:{userid:string}) => {
    try {
        await DbConnect();
        const findProductLinks = await Product.find({
            userid,
        })
        return JSON.parse(JSON.stringify(findProductLinks));
    } catch (error) {
        console.log(error);
    }
}