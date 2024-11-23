import { skillsData } from "./SkillsList";

const Skills = () => {
  return (
    <section className="mt-12 mb-4">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {skillsData?.map((skill) => (
            <div
              key={skill?.id}
              className="flex items-center border border-blue-500 rounded-full px-6 py-2 font-semibold hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer"
            >
              <div className="bg-white p-2 rounded-full">
                <img className="h-8 w-8" src={skill?.image} alt={skill?.name} />
              </div>
              <span className="ml-2">{skill?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
