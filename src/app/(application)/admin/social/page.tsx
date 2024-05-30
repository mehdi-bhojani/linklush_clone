"use client"

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

// Sample data
const initialItems = [
    { id: '1', content: 'WhatsApp' },
    { id: '2', content: 'Facebook' },
];

const App: React.FC = () => {
    const [items, setItems] = useState(initialItems);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }

        const newItems = Array.from(items);
        const [movedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, movedItem);

        setItems(newItems);
    };

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="rounded-md border border-default p-3 flex flex-col gap-3"
                        >
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 border border-default rounded-md p-3 overflow-hidden ${snapshot.isDragging ? 'opacity-50' : ''
                                                }`}
                                            title={item.content}
                                            role="button"
                                            tabIndex={0}
                                            aria-disabled="false"
                                            aria-roledescription="sortable"
                                        >
                                            <div className="grid grid-cols-[24px_42px_auto_42px] items-center gap-3 p-0">
                                                <div className="cursor-grab touch-none">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="tabler-icon tabler-icon-grip-vertical"
                                                    >
                                                        <path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                        <path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                        <path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                        <path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                        <path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                        <path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                    </svg>
                                                </div>
                                                <h3 className="text-base font-medium truncate">{item.content}</h3>
                                            </div>
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
    );
};

export default App;
