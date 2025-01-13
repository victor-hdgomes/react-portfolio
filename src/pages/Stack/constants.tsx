import React from "react";
import { Stack } from "./types";
import { SiFigma, SiFramer, SiNodedotjs, SiReact } from "react-icons/si";

export const stacks: Stack[] = [
  {
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-emerald-200",
  },
  {
    name: "Figma",
    icon: <SiFigma size={100} />,
    color: "text-emerald-200",
  },
  {
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-emerald-200",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-emerald-200",
  },
  {
    name: "React Native",
    icon: <SiReact size={100} />,
    color: "text-emerald-200",
  },
];