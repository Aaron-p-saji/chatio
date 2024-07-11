"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AudioWaveformIcon,
  CheckCheckIcon,
  EllipsisVertical,
  FileIcon,
  ImageIcon,
  LockIcon,
  MicIcon,
  Paperclip,
  SendIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import ScrollToBottom from "react-scroll-to-bottom";

type Props = {
  chatID: string;
  closeChat: any;
};

type message = {
  isCurrent_User: boolean;
  message: string;
  sentUser: string;
};

const Chat = ({ chatID, closeChat }: Props) => {
  const [message, setMessage] = useState<string>("");
  const [chatMessage, setChatMessage] = useState<message[]>([
    {
      isCurrent_User: true,
      message: "Hello",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "jagkjvl;akjsvlckas;kjvclkvaslkcvl;ksvcl;kjavslkjcvlkj",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message:
        "lkjb;'alkjvb;kjav;kjbsa.kjvb;lkjasvlk;jasl;kjva;skjbv;kjasbl;vkjas;kjvbkbk",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "Hello",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message: "Hello",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "jagkjvl;akjsvlckas;kjvclkvaslkcvl;ksvcl;kjavslkjcvlkj",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message:
        "lkjb;'alkjvb;kjav;kjbsa.kjvb;lkjasvlk;jasl;kjva;skjbv;kjasbl;vkjas;kjvbkbk",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "Hello",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message: "Hello",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "jagkjvl;akjsvlckas;kjvclkvaslkcvl;ksvcl;kjavslkjcvlkj",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message:
        "lkjb;'alkjvb;kjav;kjbsa.kjvb;lkjasvlk;jasl;kjva;skjbv;kjasbl;vkjas;kjvbkbk",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "Hello",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message: "Hello",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "jagkjvl;akjsvlckas;kjvclkvaslkcvl;ksvcl;kjavslkjcvlkj",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message:
        "lkjb;'alkjvb;kjav;kjbsa.kjvb;lkjasvlk;jasl;kjva;skjbv;kjasbl;vkjas;kjvbkbk",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "Hello",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message: "Hello",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "jagkjvl;akjsvlckas;kjvclkvaslkcvl;ksvcl;kjavslkjcvlkj",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message:
        "lkjb;'alkjvb;kjav;kjbsa.kjvb;lkjasvlk;jasl;kjva;skjbv;kjasbl;vkjas;kjvbkbk",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "Hello",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message: "Hello",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "jagkjvl;akjsvlckas;kjvclkvaslkcvl;ksvcl;kjavslkjcvlkj",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message:
        "lkjb;'alkjvb;kjav;kjbsa.kjvb;lkjasvlk;jasl;kjva;skjbv;kjasbl;vkjas;kjvbkbk",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "Hello",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message: "Hello",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "jagkjvl;akjsvlckas;kjvclkvaslkcvl;ksvcl;kjavslkjcvlkj",
      sentUser: "Bull",
    },
    {
      isCurrent_User: true,
      message:
        "lkjb;'alkjvb;kjav;kjbsa.kjvb;lkjasvlk;jasl;kjva;skjbv;kjasbl;vkjas;kjvbkbk",
      sentUser: "Akash",
    },
    {
      isCurrent_User: false,
      message: "Hello",
      sentUser: "Bull",
    },
  ]);
  const chatContainer = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    setChatMessage((prevMessages) => [
      ...prevMessages,
      {
        isCurrent_User: true,
        message: message,
        sentUser: "hailey",
      },
    ]);
    setMessage("");
  };

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
          <div className="absolute z-[1] bg-[url(/static/doodle-bg.png)] inset-0 w-[100vw] bg-muted bg-repeat bg-contain"></div>
          <div className="absolute flex flex-col w-full h-full z-10 space-y-2 text-white justify-end">
            <ScrollToBottom
              className="w-full h-full"
              scrollViewClassName="scrollbar scrollbar-thumb-black dark:scrollbar-thumb-white/50 scrollbar-w-2 scrollbar-thumb-rounded-full px-2"
            >
              {chatMessage.length > 0 && (
                <div className="flex flex-col space-y-2 max-h-[90%] h-fit w-full">
                  <div className="flex space-x-2 h-fit max-w-[50%] dark:bg-white dark:text-black font-bold items-center p-2 rounded-xl self-center">
                    <LockIcon size={15} />
                    <span className="text-xs whitespace-nowrap text-nowrap break-words">
                      Messages are end to end Encryted
                    </span>
                  </div>
                  {chatMessage.map((message, index) =>
                    message.isCurrent_User ? (
                      <div
                        key={index}
                        className="max-w-[75%] w-fit h-fit flex flex-col p-2 select-text dark:bg-[#ededed] bg-[#333] dark:text-black text-white  self-end overflow-visible whitespace-wrap leading-snug break-words rounded-lg mb-2 rounded-tr-none"
                      >
                        <span>{message.message}</span>
                        <div className="flex items-center justify-end space-x-2">
                          <span className="text-xs">11.37 am</span>
                          <CheckCheckIcon size={15} color="blue" />
                        </div>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="max-w-[75%] flex flex-col select-text w-fit h-fit p-2 dark:bg-[#ededed] bg-[#333] dark:text-black text-white overflow-visible whitespace-wrap leading-snug break-words rounded-lg mb rounded-tl-none"
                      >
                        <span>{message.message}</span>
                      </div>
                    )
                  )}
                </div>
              )}
            </ScrollToBottom>
          </div>
        </div>
        <div className="w-full h-full flex space-x-2 items-center px-2 z-[2] bg-background">
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
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <div className="flex flex-col overflow-hidden w-fit relative h-full justify-center">
            <AnimatePresence>
              {message !== "" ? (
                <motion.div
                  onClick={handleSendMessage}
                  key="send"
                  className="dark:hover:bg-muted p-2 rounded-full transition-all flex"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.1, ease: "backInOut" }}
                >
                  <SendIcon />
                </motion.div>
              ) : (
                <motion.div
                  key="mic"
                  className="dark:hover:bg-muted p-2 rounded-full transition-all flex"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.1, ease: "backInOut" }}
                >
                  <MicIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
