"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import PageTitle from "@/components/Admin/Dashboard/PageTitle";
import TheLink from "@/components/Admin/Dashboard/Links/TheLink";
import { getListStyle } from "@/lib/links/utils";
import TheDialog from "@/components/Admin/Dashboard/Links/TheDialog";
import toast from "react-hot-toast";
import NoProfileFound from "@/components/Admin/Dashboard/NoProfileFound";
import { saveNormalLinks } from "@/actions/save.normal.links";
import UseNormalLinks from "@/shared/hooks/useNormalLinks";
import { normalLinks, normalLinksAtom, normalLinks as normalLinksType} from "@/lib/store";
import { ObjectId } from "mongoose";
import { deleteNormalLinks } from "@/actions/delete.normal.link";
import { useAtom } from "jotai";

function Page() {

  const { data, loading } = UseNormalLinks();
  const [normalLinks, setNormalLinks] = useAtom<normalLinks[]>(normalLinksAtom);
  const [items, setItems] = useState<normalLinksType[]>(data);
  useEffect(() => {
    setItems(data);
  }, [data]);

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

    const itemsCopy: normalLinksType[] = Array.from(items);
    const [reorderedItem] = itemsCopy.splice(source.index, 1);
    itemsCopy.splice(destination.index, 0, reorderedItem);

    // Update the items state with the new order
    setItems(itemsCopy);
    console.log("Items Reordered:", itemsCopy);
  };

  const grid = 8;
  // child functions
  const handleDeleteLink = async (_id: ObjectId) => {
    try {
      const res = await deleteNormalLinks(JSON.parse(JSON.stringify(_id)));
      setItems([...items.filter((item) => item._id !== _id)]);
      setNormalLinks([...normalLinks.filter((item) => item._id !== _id)]);
      toast.success("Link deleted successfully");
    } catch (err) {
      toast.error("Error deleting link");
    }
  };

  const handleCreateLink = async (newNormalLink:normalLinks) => {
    try {
      const res = await saveNormalLinks(JSON.parse(JSON.stringify(newNormalLink)));
      setItems([...items, newNormalLink]);
      setNormalLinks([...normalLinks, newNormalLink]);
      toast.success("Link created successfully");
    } catch (err) {
      toast.error("Error creating link");
    }
  };


  const handleUpdateLink = async (updatedLink: normalLinksType) => {
    try {
      const res = await saveNormalLinks(JSON.parse(JSON.stringify(updatedLink)));
      setItems((prevItems) =>
        prevItems.map((element) =>
          element._id === updatedLink._id ? updatedLink : element
        )
      );
      setNormalLinks((prevItems) =>
        prevItems.map((element) =>
          element._id === updatedLink._id ? updatedLink : element
        )
      );
      toast.success("Link updated successfully");
    } catch (err) {
      toast.error("Error updating link");
    }
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
                {items.length!=0 ? (
                  items.map((link, index) => (
                    <Draggable
                      key={index}
                      draggableId={link.userid}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TheLink
                            key={index}
                            normalLinks={link}
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
