import React, { useEffect } from "react";
import MainHeading from "../../components/MainHeading";
import Project from "../../components/Project";
import budget from "../../images/budget.png";
import notetaker from "../../images/notetaker.png";
import weather from "../../images/weather.png";
import team from "../../images/team.png";
function Portfolio() {
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
  useEffect(() => {
    document.title = "Keith's Portfolio";
  }, []);

  return (
    <>
      <MainHeading>Portfolio</MainHeading>
      <div className="row">
        {projects.map((project, i) => (
          <Project {...project} key={i} />
        ))}
      </div>
    </>
  );
}
export default Portfolio;
