import ScrollOpacity from "@/common/components/ScrollOpacity";

import Project from "./Project";

const ProjectsList = () => {
  return (
    <section className="mt-32 flex w-screen justify-center md:mt-0" id="projects">
      <ScrollOpacity>
        <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          <Project
            title="GitHub User Search"
            description="Built a GitHub User Search web app enabling users to search and view GitHub profiles dynamically. Utilized debounced search functionality, reducing unnecessary API calls by ~60%, enhancing performance and efficiency."
            github="https://github.com/Goutham7675/github-user-search"
            demo="nil"
          />
          <Project
            title="Internshala Automation"
            description="Engineered a scalable automation tool using Node.js to streamline interactions with the Internshala platform, reducing manual application workflows and improving operational efficiency by over 90%."
            github="https://github.com/Goutham7675/internshala-automation"
            demo="nil"
          />
          <Project
            title="Fake News Detection"
            description="Designed a fake news detection system combining NLP, Machine Learning, and Deep Learning, capable of analyzing both text and image-based news content. Achieved 95.75% accuracy on benchmark fake news dataset."
            github="https://github.com/Goutham7675/fake-news-detection"
            demo="nil"
          />
          <Project
            title="PDF Outline Extractor"
            description="Designed a PDF outline extractor as a part of Adobe India Hackathon 2025.
                        The tool automates the extraction of structured outlines from PDF documents, enhancing document navigation and accessibility."
            github="https://github.com/Goutham7675/Adobe-India-Hackathon25/tree/main/Challenge_1a"
            demo="nil"
          />
          <Project
            title="Persona-Driven Document Intelligence"
            description="Developed a persona-driven document intelligence tool that analyzes user interactions and preferences to deliver personalized content recommendations within documents."
            github="https://github.com/Goutham7675/Adobe-India-Hackathon25/tree/main/Challenge_1b"
            demo="nil"
          />
          <Project
            title="Personal Portfolio"
            description="Developed a personal portfolio website showcasing my projects, skills, and experience. The website is built with React and Tailwind CSS, featuring a responsive design and smooth animations."
            github="https://github.com/Goutham7675/personal-portfolio"
            demo="https://ssgouthamreddy.netlify.app/"
          />
        </div>
        <br />
        {/* <br /> */}
        {/* <br />
        <br /> */}
        <br />
        <p className="mt-10 px-10 text-center text-2xl">
          For more projects checkout my{" "}
          <a
            className="text-gradient hover:hover-gradient"
            href="https://github.com/Goutham7675/Portfolio"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          .
        </p>
      </ScrollOpacity>
    </section>
  );
};

export default ProjectsList;
