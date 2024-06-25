'use server';

import DbConnect from "@/lib/db";
import Setting from "@/utils/models/setting.model";

export const findUsername = async (userName: String) => {
  try {
    // Connect to the database
    await DbConnect();
    if (userName) {
      const findUsername = await Setting.findOne({userName});
      if (findUsername) {
        console.log("userName Founded");
        return JSON.parse(JSON.stringify("Username already exists"));
      }
      return JSON.parse(JSON.stringify("Username available"));
      console.log("userName not found");
    }
  }
  catch (error) {
    console.error("Error finding username:", error);
    throw error; // Rethrow the error to handle it elsewhere
  }
}

export const findUserIdbyName = async (userName: String) => {
  try {
    // Connect to the database
    await DbConnect();
    console.log("finding userName:", userName);
    if (userName) {
      const findUsername = await Setting.findOne({userName});
      if (findUsername) {
        console.log("userName Founded");
        return findUsername.userid;
      }
      return "error";
    }
  }
  catch (error) {
    console.error("Error finding username:", error);
    throw error; // Rethrow the error to handle it elsewhere
  }
}