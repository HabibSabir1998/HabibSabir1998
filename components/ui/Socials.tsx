"use client";

import React from "react";
import { socialMedia } from "@/data";

export const Socials = (): JSX.Element => (
  <div className="flex items-center">
    {socialMedia.map(({ id, name, link, img }) => (
      <a
        key={id}
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label={name}
        className="w-10 h-10 cursor-pointer flex justify-center items-center transform transition-all duration-300 ease-in-out hover:scale-110"
      >
        <img src={img} alt={name} width={20} height={20} />
      </a>
    ))}
  </div>
);
