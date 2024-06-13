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
import TheDialog from "@/components/Admin/Dashboard/Links/TheDialog";
import { getItemStyle, getItems, getListStyle } from "@/lib/links/utils";
import { getSocialLinks } from "@/actions/get.social.links";
import useSocialLinks from "@/shared/hooks/useSocialLinks";

function Page() {
  type Link = {
    id: string;
    name: string;
    facebookLink: string;
    clicks: number;
    ctr: number;
  };

  const links: Link[] = [
    {
      id: '1',
      name: "Example Link 1",
      facebookLink: "https://www.facebook.com/example1",
      clicks: 123,
      ctr: 5.6,
    },
    {
      id: '2',
      name: "Example Link 2",
      facebookLink: "https://www.facebook.com/example2",
      clicks: 456,
      ctr: 4.3,
    },
    {
      id: '3',
      name: "Example Link 3",
      facebookLink: "https://www.facebook.com/example3",
      clicks: 789,
      ctr: 3.2,
    }
  ];

  const [items, setItems] = useState<Link[]>(links);

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

  // const { data, loading } = useSocialLinks();
  const grid = 8;

  // useEffect(() => {
  //   setItems(data);
  // }, [data]);

  return (
    <section className="flex-1 w-full gap-5">
      <div className="flex flex-row justify-between items-center">
        <PageTitle tittle="Links (1)" />
        <TheDialog />
      </div>

      <div className="flex flex-wrap gap-6 lg:gap-2 transition-all p-3 border">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {items.map((link, index) => (
                  <Draggable key={link.id} draggableId={link.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TheLink
                          name={link.name}
                          facebookLink={link.facebookLink}
                          clicks={link.clicks}
                          ctr={link.ctr}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
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
