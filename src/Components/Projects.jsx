import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectList.js";

const Projects = () => {
  return (
    <section>
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
