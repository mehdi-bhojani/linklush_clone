import { Schema } from "mongoose";
import mongoose from "mongoose";

const settingSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  seo: {
    type: {
      title: {
        type: String,
        default: null,
      },
      description: {
        type: String,
        default: null,
      },
    },
  },
  userName: {
    type: String,
    required: true,
  },
  subscription: {
    type: {
      enabled: {
        type: Boolean,
        default: false,
      },
      collectPhoneNumber: {
        type: Boolean,
        default: false,
      },
      subscribe: {
        type: String,
        default: null,
      },
      description: {
        type: String,
        default: null,
      },
      webhookurl: {
        type: String,
        default: null,
      },
    }
  }
}
, { timestamps: true });

const Setting = mongoose.models.Settings || mongoose.model("Settings", settingSchema);
export default Setting;
