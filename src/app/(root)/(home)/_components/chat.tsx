"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AudioWaveformIcon,
  EllipsisVertical,
  FileIcon,
  ImageIcon,
  MicIcon,
  Paperclip,
  SendIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "@/components/ui/input";

type Props = {
  chatID: string;
  closeChat: any;
};

const Chat = ({ chatID, closeChat }: Props) => {
  const [message, setMessage] = useState<string>("");
  return (
    <div className="grid grid-rows-[minmax(3rem,4rem),1fr] [grid-auto-columns:1fr] grid-cols-[auto] h-full w-full select-none">
      <div className="w-full h-full flex items-center z-[2] justify-between px-4 space-x-2 transition-all">
        <div className="flex space-x-2 items-center justify-center flex-1">
          <Image
            src="/static/profile-placeholder.png"
            width={25}
            height={25}
            alt="image placeholder"
            className="w-10 h-10 rounded-full object-cover object-top"
          />
          <div className="flex flex-col items-start justify-center w-fit flex-1 active:bg-muted px-2 transition-all">
            <p className="font-bold">Aaron P Saji</p>
            <p className="text-xs">Last Online 5 min</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="rounded-full p-2 hover:bg-muted">
              <EllipsisVertical />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="hidden md:block" onClick={closeChat}>
              Close Chat
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full h-full grid grid-cols-[auto] z-[2] grid-rows-[1fr_minmax(3rem,4rem)]">
        <div className="w-full h-full relative">
          <div className="absolute z-[1] bg-[url(/static/doodle-bg.png)] inset-0 bg-muted w-full max-h-full bg-contain"></div>
          <div className="absolute z-[2] bg-repeat w-full h-full bg-contain"></div>
        </div>
        <div className="w-full h-full flex space-x-2 items-center px-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="dark:hover:bg-muted p-2 rounded-full transition-all">
                <Paperclip size={20} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start">
              <DropdownMenuItem className="space-x-2 relative">
                <ImageIcon size={20} />
                <span>Image</span>
                <input
                  className="absolute w-full h-full opacity-0"
                  type="file"
                  accept=".png| .jpeg| .jpg| .mp4| .mov, .avi| .3pg| .wmv| .mkv| .webm"
                />
              </DropdownMenuItem>
              <DropdownMenuItem className="space-x-2 relative">
                <FileIcon size={20} />
                <span>Document</span>
                <input
                  className="absolute w-full h-full opacity-0"
                  type="file"
                />
              </DropdownMenuItem>
              <DropdownMenuItem className="space-x-2 relative">
                <AudioWaveformIcon size={20} />
                <span>Audio</span>
                <input
                  className="absolute w-full h-full opacity-0"
                  type="file"
                  accept="audio/*"
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Input
            className="!ring-0"
            placeholder="Type a message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message !== "" ? message : ""}
          />
          <AnimatePresence>
            <motion.div
              key={message !== "" ? 1 : 0}
              className={`dark:hover:bg-muted p-2 rounded-full transition-all ${
                message !== "" ? "flex" : "hidden"
              }`}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <SendIcon />
            </motion.div>
          </AnimatePresence>
          <div className="dark:hover:bg-muted p-2 rounded-full transition-all">
            <MicIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
