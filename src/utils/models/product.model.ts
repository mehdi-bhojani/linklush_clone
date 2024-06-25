import { Schema } from "mongoose";
import mongoose from "mongoose";

const productSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  productUrl: {
    type: String,
    required: true,
  },
  click: {
    type: Number,
    default: 0,
    required: false,
  },
  clickThroughRate: {
    type: Number,
    default: 0,
    required: false,
  },
  enabled: {
    type: Boolean,
    default: true,
    required: false,
  },
  animation: {
    type: {
      animationType: {
        type: String,
        required: false,
      },
      iterationCount: {
        type: Number,
        required: false,
      },
    },
    default: null,
    required: false,
  },
  avatarUrl: {
    type: String,
    default: null,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: false,
  },
  regularPrice: {
    type: Number,
    default: 0,
  },
  salePrice: {
    type: Number,
    default: 0,
  },
  protection: {
    type: {
      protectionType: {
        type: String,
        required: false,
      },
      code: {
        type: String,
        required: false,
      },
    },
    default: null,
    required: false,
  },
}, { timestamps: true });

const Product = mongoose.models.Products || mongoose.model("Products", productSchema);
export default Product;
