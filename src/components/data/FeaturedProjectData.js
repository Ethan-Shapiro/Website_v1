import project1Pic from "../../assets/gamer_time.png";
import project3Pic from "../../assets/tg-lol-recommender.png";
import project2Pic from "../../assets/champion-recommender.png";

export const FeaturedProjectData = [
  {
    id: 1,
    title: "Gamer Time",
    picture: project1Pic,
    description:
      "A minimal web app for managing computer spaces. View how long someone has spent at a computer, queue players when computers are full, and see which computers will open up next.",
    tags: ["ReactJS", "Rest API", "Postgres", "CI/CD", "GCP"],
    liveLink: "https://gamertime.app/",
    github: "https://github.com/Ethan-Shapiro/GamerTime2.0",
  },
  {
    id: 2,
    title: "MOBA Win Prediction",
    picture: project2Pic,
    description:
      "Massive Online Battle Arena (MOBA) games are some of my favorite. What makes them so fun is the teamwork and strategy that comes into play. My friends and I wanted to see how accurately we could predict whether we would win and so that's why we created this project.",
    tags: ["Python", "Sci-kit Learn", "Pandas", "Research Paper"],
    liveLink:
      "https://docs.google.com/document/d/1qvErZ5fMJguErqYroj5gUgQK3CBtRJYK-SP5FYc-dXM/edit?usp=sharing",
    github: "https://github.com/Ethan-Shapiro/GamerTime2.0",
  },
  {
    id: 3,
    title: "Graph Database Recommendation",
    picture: project3Pic,
    description:
      "With over 160 different characters each with their own unique abilities and playstyles, it's hard to know who you might enjoy playing next. This tool I created over a two week period as my internship application to Tigergraph is just the beginning of potentially using graph databases for recommendations.",
    tags: ["Python", "Graph Databases", "Plotly", "Heroku"],
    liveLink: "https://www.youtube.com/watch?v=cWimBCOeE6U",
    github:
      "https://github.com/Ethan-Shapiro/Tiger-Graph-LoL-Champion-Recommender",
  },
];
