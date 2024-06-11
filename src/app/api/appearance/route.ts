import DbConnect from "@/lib/db";
import Appearance from "@/utils/models/appearance.model";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

export const GET = async (request: Request) => {
    try {
      await DbConnect();
  
      const { searchParams } = new URL(request.url);
      const userid = searchParams.get("id");
  
      if (userid) {
        // Validating user ID
        // if (!Types.ObjectId.isValid(userid)) {
        //   return new NextResponse(
        //     JSON.stringify({ message: "Invalid User ID" }),
        //     { status: 400 }
        //   );
        // }
  
        // Fetch by user ID
        const appearance = await Appearance.findOne({ userid });
  
        // If appearance not found
        if (!appearance) {
          return new NextResponse(
            JSON.stringify({ message: "Appearance not found" }),
            { status: 404 }
          );
        }
  
        return new NextResponse(
          JSON.stringify(appearance),
          { status: 200 }
        );
      } else {
        // No user ID provided
        return new NextResponse(
          JSON.stringify({ message: "User ID not provided" }),
          { status: 400 }
        );
      }
    } catch (error) {
      return new NextResponse(
        "Error in fetching appearances: " + error,
        { status: 500 }
      );
    }
  };
  

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await DbConnect();
    const newAppearance = new Appearance(body);
    await newAppearance.save();

    return new NextResponse(
      JSON.stringify({
        message: "Appearance saved successfully",
        data: newAppearance
      }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in saving appearance",
        error: error
      }),
      { status: 500 }
    );
  }
};

export const PUT = async (request: Request) => {
  try {
    const body = await request.json();
    const { userid, id, updatedAppearance } = body;

    await DbConnect();

    // User ID not provided
    if (!userid) {
      return new NextResponse(
        JSON.stringify({
          message: "User ID is required"
        }),
        { status: 400 }
      );
    }

    // ID not found
    if (!Types.ObjectId.isValid(id)) {
      return new NextResponse(
        JSON.stringify({
          message: "Invalid ID"
        }),
        { status: 400 }
      );
    }

    // Find and update
    const updatedAppearanceDocument = await Appearance.findOneAndReplace(
      { _id: new Types.ObjectId(id) },
      updatedAppearance,
      { new: true, upsert: false } // Ensure new: true to return the updated document and upsert: false to not create a new document if not found
    );

    if (!updatedAppearanceDocument) {
      return new NextResponse(
        JSON.stringify({
          message: "Appearance not found or update unsuccessful"
        }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Appearance updated successfully",
        data: updatedAppearanceDocument
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error updating appearance",
        error
      }),
      { status: 500 }
    );
  }
};
