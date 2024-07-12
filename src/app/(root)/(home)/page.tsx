"use client";
import Navbar from "@/components/global/navbar";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Chat from "./_components/chat";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Page = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      autoSaveId="persistence"
      className="grid md:grid-cols-[0.5fr_2fr] w-full grid-rows-[auto] [grid-auto-columns:fr]"
    >
      <ResizablePanel className="relative border-r min-w-[330px] max-w-[50vw]">
        <Navbar />
        <div className="flex flex-1 flex-col">
          <div>
            <div className="space-y-2">
              <div className="flex flex-col sticky space-y-2 px-5">
                <span className="font-bold text-3xl">Chat</span>
                <Input
                  placeholder="Search"
                  className="!ring-0"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </div>
              {isLoading ? (
                <div className="px-5 flex flex-col space-y-2">
                  {[...Array(25)].map((item, index) => (
                    <div
                      className="flex w-full h-fit space-x-2 items-center p-1"
                      key={index}
                    >
                      <Skeleton className="w-10 h-10 rounded-full" />
                      <div className="flex flex-col w-full flex-1">
                        <Skeleton className="w-1/2 h-5 rounded-xl" />
                        <div className="flex w-full items-end space-x-2">
                          <Skeleton className="w-full h-3 rounded-xl" />
                          <Skeleton className=" rounded-full w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-1 relative px-5 overflow-y-auto flex flex-col w-full overscroll-contain h-[calc(100vh-10rem)] scrollbar-h-2 scrollbar scrollbar-w-2 scrollbar-thumb-muted scrollbar-thumb-rounded-full p-2">
                  {[...Array(25)].map((item, index) => (
                    <div
                      key={index}
                      className={`flex w-full h-fit space-x-2 items-center hover:bg-muted px-2 rounded-xl justify-start select-none ${
                        selectedChat !== null && Number(selectedChat) === index
                          ? "bg-muted"
                          : "bg-transparent"
                      }`}
                      onClick={() => {
                        setSelectedChat(String(index));
                      }}
                    >
                      <Image
                        src="/static/profile-placeholder.png"
                        width={25}
                        height={25}
                        alt="image placeholder"
                        className="w-10 h-10 rounded-full object-cover object-top"
                      />
                      <div className="flex flex-col py-2 max-w-[60%]">
                        <span className="font-bold text-ellipsis overflow-hidden">
                          Aaron P Saji
                        </span>
                        <span className="text-ellipsis overflow-hidden">
                          aousgcpoauscpoaspocposapogcpolablsacjb;lsjbcl
                        </span>
                      </div>
                      <div className="flex-1 items-end flex flex-col space-y-2">
                        <span className="text-xs">Yesterday</span>
                        <div className="text-xs bg-green-800 rounded-full w-6 h-6 flex items-center justify-center object-center">
                          <span>99+</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        {selectedChat !== null ? (
          <div className="flex w-full h-full">
            <Chat
              chatID={selectedChat}
              closeChat={() => setSelectedChat(null)}
            />
          </div>
        ) : (
          <div className="text-white">hello</div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Page;
