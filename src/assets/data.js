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
      title: "Ezbulk.org",
      description: "💪 Explore the cost efficiency of food products 💵",
      tags: [
        "javascript",
        "react",
        "node",
        "mongodb"
      ],
      link: "https://www.ezbulk.org/"
    },
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
      description: "🎧 Guess the artist with more listeners 🪐",
      tags: [
        "javascript",
        "react",
        "spotify api",
        "tailwindcss"
      ],
      link: "https://github.com/sbaisden25/rap-battle"
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
