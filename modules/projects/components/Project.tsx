import { BsGithub, BsGlobe } from "react-icons/bs";
interface Props {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  scrollTo?: boolean;
}

const Project = ({ title, demo, description, github, scrollTo }: Props) => {
  return (
    <div
      className={`flex h-max w-72 flex-col rounded-3xl p-5 md:h-64 lg:h-[21rem] lg:w-96 lg:p-10 ${
        (typeof window !== 'undefined' && document.body.classList.contains('light'))
          ? 'bg-[#f4f6fa] text-gray-900'
          : 'bg-[#1f1f1f] text-white'
      }`}
      id={scrollTo ? "projects" : undefined}
    >

      <p className={`text-lg lg:text-2xl font-bold ${
        (typeof window !== 'undefined' && document.body.classList.contains('light'))
          ? 'text-gray-900'
          : 'text-white'
      }`}>{title}</p>
      <hr className="my-4 border-t border-zinc-500 w-full" />

      <p className={`flex-1 font-sans text-sm lg:text-base ${
        (typeof window !== 'undefined' && document.body.classList.contains('light'))
          ? 'text-gray-700'
          : 'text-zinc-400'
      }`}>
        {description}
      </p>

      <div className="flex gap-3 mt-6">
        {github && (
          <a
            className="project-btn"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
            Github
          </a>
        )}

        {demo && (
          <a
            className={`project-btn ${
              demo === "nil"
                ? "pointer-events-none cursor-no-drop opacity-50"
                : ""
            }`}
            href={demo}
            target="_blank"
            rel="noreferrer"
          >
            <BsGlobe />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
