"use client";
import React, { useState,useCallback } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import PageTitle from "@/components/Admin/Dashboard/PageTitle";
import TheLink from "@/components/Admin/Dashboard/Social/TheLink";
import { getItemStyle, getItems, getListStyle } from "@/lib/links/utils";
import TheDialog from "@/components/Admin/Dashboard/Social/TheDialog";


function Page() {
    
  type Link = {
    id: string;
    platform: string;
    socialLink: string;
    clicks: number;
    ctr: number;
  };

  const links: Link[] = [
    {
      id: '1',
      platform: "Slack",
      socialLink: "https://www.facebook.com/example1",
      clicks: 123,
      ctr: 5.6,
    },
    {
      id: '2',
      platform: "Facebook",
      socialLink: "https://www.facebook.com/example2",
      clicks: 456,
      ctr: 4.3,
    },
    {
      id: '3',
      platform: "Facebook",
      socialLink: "https://www.facebook.com/example3",
      clicks: 789,
      ctr: 3.2,
    }
  ];

  const [items, setItems] = useState<Link[]>(links);

  const handleOnDragEnd = (result: DropResult) => {
    // Implement your logic for handling drag end here
    console.log('Drag Ended');
    const { destination, source } = result;

    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }

    const itemsCopy: Link[] = Array.from(items);
    const [reorderedItem] = itemsCopy.splice(source.index, 1);
    itemsCopy.splice(destination.index, 0, reorderedItem);

    // Update the items state with the new order
    setItems(itemsCopy);
    console.log('Items Reordered:', itemsCopy);

  };
  
  const grid = items.length;
  
    
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center w-full">
        <PageTitle tittle="Social profiles" />
        <TheDialog />
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
                {items.map((link, index) => (
                  <Draggable key={link.id} draggableId={link.id} index={index}>
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
