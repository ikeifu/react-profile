import React from "react";
function Profile() {
  const projects = [
    {
      name: "Progressive Budget",
      image: "",
      description:
        "Helps you keep track of your budget in a fun and visual way",
      url: "https://github.com/ikeifu/progressive-budget",
    },
    {
      name: "Employee Management",
      image: "",
      description:
        "Can set up and manage your employees to see who is in which department and what they do, can also add new departments.",
      url: "https://github.com/ikeifu/employee-management",
    },
    {
      name: "Eat Da Burger",
      image: "",
      description:
        "Dynamically keeping track of what burgers you've had and what burgers you want to eat",
      url: "https://eat-da-burger-1088.herokuapp.com/",
    },
    {
      name: "Note taker",
      image: "",
      description: "Helps you keep track of your notes",
      url: "https://github.com/ikeifu/note-taker",
    },
  ];
  return (
    <div className="row">
      {projects.map((project, i) => {
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
        </div>;
      })}
    </div>
  );
}
export default Profile;
