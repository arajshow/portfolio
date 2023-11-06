import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="StudyNotion"
          des=" StudyNotion is a fully functional ed-tech platform that enables users to create, consume,
          and rate educational content. The platform is built using the MERN stack, which includes
          ReactJS, NodeJS, MongoDB, and ExpressJS.
          "
          src={projectOne}
          gith= "https://github.com/arajshow/Ed_Tech_StudyNotion"
          webh= "https://studynotion-edtech-project.vercel.app"
        />
        <ProjectsCard
          title="Nimbus 2k23"
          des="The annual technical fest of NIMBUS IS organized by the NITH each year in the even semester 
          to celebrate and encourage the technical aspect of the college "
          src={projectTwo}
          webh= "https://festnimbus.nith.ac.in/"
        />
        <ProjectsCard
          title="Hill'ffair 2k22"
          des="The cultural fest of Hillffair is organized by Nith each year in the odd semester to show culture and tradition"
          src={projectThree}
          webh = "https://www.hillffairnith.com/"
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects