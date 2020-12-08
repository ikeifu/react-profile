import React from "react";
import notetaker from "../images/notetaker.png";
import weather from "../images/weather.png";
import team from "../images/team.png";
import budget from "../images/budget.png";
function Profile() {
  const projects = [
    {
      name: "Progressive Budget",
      image: budget,
      description:
        "Helps you keep track of your budget in a fun and visual way",
      url: "https://github.com/ikeifu/progressive-budget",
    },
    {
      name: "Team Manager",
      image: team,
      description:
        "Can set up and manage your employees to see who is in which department and what they do, can also add new departments.",
      url: "https://github.com/ikeifu/team-profile-generator",
    },
    {
      name: "Weather Dashboard",
      image: weather,
      description: "Can track the weather",
      url: "https://github.com/ikeifu/Weather-DashBoard",
    },
    {
      name: "Note taker",
      image: notetaker,
      description: "Helps you keep track of your notes",
      url: "https://github.com/ikeifu/note-taker",
    },
  ];
  return (
    <div className="row">
      {projects.map((project, i) => {
        return (
          <div className="col-lg-6 mb-3" key={i}>
            <img
              src={project.image}
              alt={project.name}
              className="portfolio-image"
            />
            <h4>{project.name}</h4>
            <a href={project.url} target="_blank" rel="noreferrer">
              Link to github repo
            </a>
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Profile;
