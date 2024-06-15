"use client";

import React, { useState, useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import PageTitle from "@/components/Admin/Dashboard/PageTitle";
import TheLink from "@/components/Admin/Dashboard/Social/TheLink";
import { getListStyle } from "@/lib/links/utils";
import TheDialog from "@/components/Admin/Dashboard/Social/TheDialog";
import { deleteSocialLinks } from "@/actions/delete.social.link";
import { saveSocialLinks } from "@/actions/save.social.links";
import toast from "react-hot-toast";
import NoProfileFound from "@/components/Admin/Dashboard/NoProfileFound";
import { useAtom } from "jotai";
import { socialLinksAtom } from "@/lib/store";
import { socialLinks as Link } from "@/lib/store";
import { useSession } from "next-auth/react";

function Page() {
  const [items, setItems] = useState<Link[]>([]);
  const [socialLinks, setSocialLinks] = useAtom<Link[]>(socialLinksAtom);
  const { data: session, status } = useSession();

  const handleOnDragEnd = (result: DropResult) => {
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

    setItems(itemsCopy);
  };

  useEffect(() => {
    if (socialLinks) {
      setItems(socialLinks);
    }
  }, [socialLinks]);

  const handleDeleteLink = async (platform: string) => {
    try {
      const userid = session?.user?.email || "";
      await deleteSocialLinks(platform, userid);
      const filteredItems = items.filter((item) => item.platform !== platform);
      setItems(filteredItems);
      setSocialLinks(filteredItems);
      toast.success("Link deleted successfully");
    } catch (err) {
      toast.error("Error deleting link");
    }
  };

  const handleCreateLink = async (newLink: Link) => {
    try {
      const toCreateLink = {
        ...newLink,
        userid: session?.user?.email || "",
      };
      const res = await saveSocialLinks(JSON.parse(JSON.stringify(toCreateLink)));
      const newItems = [...items, res];
      setItems(newItems);
      setSocialLinks(newItems);
      toast.success("Link created successfully");
    } catch (err) {
      toast.error("Error creating link");
    }
  };

  const handleUpdateLink = async (updatedLink: Link) => {
    try {
      const toUpdateLink = {
        ...updatedLink,
        userid: session?.user?.email || "",
      };
      const res = await saveSocialLinks(JSON.parse(JSON.stringify(toUpdateLink)));
      setItems((prev) => {
        return prev.map((item) => {
          if (item.platform === toUpdateLink.platform) {
            return toUpdateLink;
          }
          return item;
        });
      });
      setSocialLinks(
        items.map((item) => {
          if (item.platform === toUpdateLink.platform) {
            return toUpdateLink;
          }
          return item;
        })
      );
      console.log("social:", socialLinks);
      console.log("ites:", items);
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
                {items.length ? (
                  items.map((link, index) => (
                    <Draggable
                      key={link.platform} // Ensure unique key
                      draggableId={link.platform}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TheLink
                            key={link.platform} // Ensure unique key
                            platform={link.platform}
                            socialLink={link.socialLink}
                            clicks={link.clicks}
                            ctr={link.clickThroughRate}
                            enabled={link?.enabled}
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
