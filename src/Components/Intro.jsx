const Intro = ({ profileImage }) => {
  return (
    <section>
      <div className="container m-auto px-4 py-10 flex flex-col sm:flex-row gap-6">
        <div>
          <h1 className="font-bold text-4xl">Hello, I'm Pritam Dhaugoda,</h1>
          <h1 className="font-bold text-4xl mt-2 gradient-text running-text">
            Fullstack developer,
          </h1>
          <p className="mt-4 text-gray-400">
            A passionate Full Stack Developer with a knack for crafting
            innovative and efficient web applications. With experience spanning
            both front-end and back-end technologies, I specialize in building
            seamless, user-friendly solutions
          </p>
          <p className="mt-4 text-gray-400">
            I am constantly learning and evolving, staying ahead of industry
            trends, and always seeking opportunities to collaborate and bring
            ideas to life. Feel free to explore my work and get in touch if
            you'd like to connect!
          </p>
        </div>
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile Picture"
            className="rounded-full relative z-10 w-[520px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
