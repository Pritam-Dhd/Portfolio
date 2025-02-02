import { useState } from "react";
import Modal from "./Modal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="border border-gray-500 rounded-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
        <div onClick={handleImageClick}>
          <img
            src={project.image[0].image}
            alt={project.title[0].namme}
            className="w-full h-72 object-cover"
          />
          <h3 className="text-2xl font-semibold mt-5 px-4">{project.title}</h3>
          <p className="text-gray-400 text-sm mt-4 px-4">
            {project.description}
          </p>
        </div>
        <div className="flex justify-evenly mt-12 mb-5">
          <button className="px-6 py-3 border rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            <a
              href={project.livePreviewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </a>
          </button>
          <button className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github link
            </a>
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={project.image}
        title={project.title}
        description={project.description}
      />
    </>
  );
};

export default ProjectCard;
