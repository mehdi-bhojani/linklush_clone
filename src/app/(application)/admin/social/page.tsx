"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import PageTitle from "@/components/Admin/Dashboard/PageTitle";
import TheLink from "@/components/Admin/Dashboard/Social/TheLink";
import { getItemStyle, getItems, getListStyle } from "@/lib/links/utils";
import TheDialog from "@/components/Admin/Dashboard/Social/TheDialog";
import useSocialLinks from "@/shared/hooks/useSocialLinks";
import UseSocialLinks from "@/shared/hooks/useSocialLinks";
import { deleteSocialLinks } from "@/actions/delete.social.link";
import { saveSocialLinks } from "@/actions/save.social.links";
import toast from "react-hot-toast";
import NoProfileFound from "@/components/Admin/Dashboard/NoProfileFound";

function Page() {
  type Link = {
    userid: string;
    platform: string;
    socialLink: string;
    clicks: number;
    clickThroughRate: number;
    enabled: boolean;
  };

  const { data, loading } = UseSocialLinks();
  const [items, setItems] = useState<Link[]>(data);
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

    const itemsCopy: Link[] = Array.from(items);
    const [reorderedItem] = itemsCopy.splice(source.index, 1);
    itemsCopy.splice(destination.index, 0, reorderedItem);

    // Update the items state with the new order
    setItems(itemsCopy);
    console.log("Items Reordered:", itemsCopy);
  };

  const grid = 8;
  //child functions
  const handleDeleteLink = async (platform: string) => {
    try {
      const res = await deleteSocialLinks(JSON.parse(JSON.stringify(platform)));
      setItems([...items.filter((item) => item.platform !== platform)]);
      toast.success("Link deleted successfully");
    } catch (err) {
      toast.error("Error deleting link");
    }
  };

  const handleCreateLink = async (newLink: Link) => {
    try {
      const res = await saveSocialLinks(JSON.parse(JSON.stringify(newLink)));
      setItems([...items, newLink]);
      toast.success("Link created successfully");
    } catch (err) {
      toast.error("Error creating link");
    }
  };

  // const handleUpdateLink = async (updatedLink: Link) => {
  //   try {
  //     const res = await saveSocialLinks(
  //       JSON.parse(JSON.stringify(updatedLink))
  //     );
  //     const updatedData = items.map((element) => {
  //       if (element.platform === updatedLink.platform) {
  //         return updatedLink;
  //       }
  //       return element;
  //     });
  //     setItems(updatedData);
  //     toast.success("Link updated successfully");
  //   } catch (err) {
  //     toast.error("Error updating link");
  //   }
  //   setItems(data);
  // };

  const handleUpdateLink = async (updatedLink: Link) => {
    try {
      const res = await saveSocialLinks(JSON.parse(JSON.stringify(updatedLink)));
      setItems((prevItems) =>
        prevItems.map((element) =>
          element.platform === updatedLink.platform ? updatedLink : element
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
        <PageTitle tittle="Social profiles" />
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
                      key={link.userid}
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
                            platform={link.platform}
                            socialLink={link.socialLink}
                            clicks={link.clicks}
                            ctr={link.clickThroughRate}
                            enabled={link.enabled}
                            onDelete={handleDeleteLink}
                            onUpdate={handleUpdateLink}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <div>
                    <NoProfileFound />
                    <h1 className="text-xl">No Social Profile Found</h1>
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
