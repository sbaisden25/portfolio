import React from "react";
import { FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
//test
const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "sbaisden25",
  title: "Software Engineer",
  social: {
    github: "https://github.com/SBaisden25",
    instagram: "https://instagram.com/CoffeePlusCode",
    email: "spbaisden@gmail.com"
  },
  about: {
    title: "My Background",
    description:
      "I'm a software engineer with a passion for learning and building things.  My interests include music, podcasts, american football, math, and earth sciences.  I'm a huge fan of the Javascript ecosystem and I'm always looking to learn more about it. ",
  },
  skills: [
    {
      skillName: "Python",
      skillIcon: <FaPython className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Javascript",
      skillIcon: <SiJavascript className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "SQL",
      skillIcon: <FaDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "Podcast Guest Directory",
      description: "🎙 A podcast guest directory built with Python and Django 🔋",
      tags: [
        "python",
        "django",
        "javascript",
        "postgresql"
      ],
      link: "https://github.com/sbaisden25/podcast-family"
    },
    {
      title: "Artist Popularity Game",
      description: "🎧 My portfolio built with NextJS and TailwindCSS 🪐",
      tags: [
        "javascript",
        "react",
        "spotify api",
        "tailwindcss"
      ],
      link: "https://github.com/sbaisden25/rap-battle"
    },
    {
      title: "Virtual MIDI Pad",
      description: "🎹 A virtual MIDI pad that lets you make beats like Kanye 🎼",
      tags: [
        "javascript",
        "react",
        "node",
        "express"
      ],
      link: "https://github.com/sbaisden25/kanye-play"
    },
    {
      title: "Curious Cure API",
      description: "🌎 An API that returns a random interesting wikipedia article 🚀",
      tags: [
        "javascript",
        "react",
        "node",
        "express"
      ],
      link: "https://github.com/sbaisden25/curious-cure-api"
    },
  ]
};
export default data;
