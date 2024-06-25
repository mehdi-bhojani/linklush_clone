"use client";
import React, { useState, useCallback, useEffect, use } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import PageTitle from "@/components/Admin/Dashboard/PageTitle";
import TheLink from "@/components/Admin/Dashboard/products/TheLink";
import { getListStyle } from "@/lib/links/utils";
import TheDialog from "@/components/Admin/Dashboard/products/TheDialog";
import toast from "react-hot-toast";
import NoProfileFound from "@/components/Admin/Dashboard/NoProfileFound";
import { productLinksAtom, productLinks as productLinksType } from "@/lib/store";
import { ObjectId } from "mongoose";
import { useAtom } from "jotai";
import { useSession } from "next-auth/react";
import { deleteProductLinks } from "@/actions/delete.product.link";
import { saveproductLinks } from "@/actions/save.product.link";

function Page() {
  const [productLinks, setProductLinks] = useAtom(productLinksAtom);
  const [items, setItems] = useState<productLinksType[]>([]);
  const { data: session, status } = useSession();
  const handleOnDragEnd = (result: DropResult) => {
    // Implement your logic for handling drag end here
    console.log("Drag Ended");
    const { destination, source } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const itemsCopy: productLinksType[] = Array.from(items);
    const [reorderedItem] = itemsCopy.splice(source.index, 1);
    itemsCopy.splice(destination.index, 0, reorderedItem);

    // Update the items state with the new order
    setItems(itemsCopy);
    console.log("Items Reordered:", itemsCopy);
  };

  // reload if chnages atom
  useEffect(() => {
    if (productLinks) {
      setItems(productLinks);
    }
  }, [productLinks]);

  const userid = session?.user?.email;
  const grid = 8;

  // child functions
  const handleDeleteLink = async (_id: ObjectId) => {
    try {
      const res = await deleteProductLinks(
        JSON.parse(JSON.stringify(_id)),
        JSON.parse(JSON.stringify(userid))
      );
      setItems([...items.filter((item) => item._id !== _id)]);
      setProductLinks([...productLinks.filter((item) => item._id !== _id)]);
      toast.success("Link deleted successfully");
    } catch (err) {
      toast.error("Error deleting link");
    }
  };

  const handleCreateLink = async (newProductLink: productLinksType) => {
    newProductLink.userid = userid || "";
    try {
      const res = await saveproductLinks(
        JSON.parse(JSON.stringify(newProductLink))
      );
      setItems([...items, res]);
      setProductLinks([...productLinks, res]);
      toast.success("Link created successfully");
    } catch (err) {
      toast.error("Error creating link");
    }
  };

  const handleUpdateLink = async (updatedLink: productLinksType) => {
    updatedLink.userid = userid || "";
    try {
      const res = await saveproductLinks(
        JSON.parse(JSON.stringify(updatedLink))
      );
      setItems((prevItems) =>
        prevItems.map((element) =>
          element._id === updatedLink._id ? updatedLink : element
        )
      );
      setProductLinks((prevItems) =>
        prevItems.map((element) =>
          element._id === updatedLink._id ? updatedLink : element
        )
      );
      toast.success("Link updated successfully");
    } catch (err) {
      toast.error("Error updating link");
    }
    console.log("Updated Link: ", updatedLink);
  };

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center w-full">
        <PageTitle tittle={`Links (${items?.length || 0})`} />
        <TheDialog onCreate={handleCreateLink} />
      </div>

      <div className="container-fluid">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                className="w-full flex flex-col gap-3 border p-3"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {items.length != 0 ? (
                  items.map((link, index) => (
                    <Draggable
                      key={index}
                      draggableId={(index + 1).toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TheLink
                            key={index + 1}
                            productLinks={link}
                            onUpdate={handleUpdateLink}
                            onDelete={handleDeleteLink}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <div>
                    <NoProfileFound />
                    <h1 className="text-xl">No Link Found</h1>
                  </div>
                )}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </section>
  );
}

export default Page;
