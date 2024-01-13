import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";
import { Tooltip } from "../material_tailwind";
import Image from "next/image";
import { TbView360 } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import SkillItem from "../shared/skillItem";

const Projects = () => {
  const projects = [
    {
      name: "AI Genie - Generative AI Application",
      description:
        "AI Genie is a generative AI, Will help you generate image, audio, and more.",
      skills: [
        "Next Js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Strip",
        "NextAuth",
      ],
      source_code: "https://github.com/CodeWithRashed/next-ai-genie",
      live_link: "https://next-ai-genie.vercel.app/",
      intro_video: "https://next-ai-genie.vercel.app/",
      thumbnail:
        "https://i.ibb.co/qdGPGs5/screencapture-next-ai-genie-vercel-app2.png",
    },
    {
      name: "Zero Hunger — A Food Donation App",
      description: "Food donation and request system for Community",
      skills: ["React Js", "Tailwind CSS", "MongoDB", "Firebase Auth"],
      source_code: "https://github.com/CodeWithRashed/zero-hunger-client-side",
      live_link: "https://zero-hunger-client-five.vercel.app/",
      intro_video: "https://zero-hunger-client-five.vercel.app/",
      thumbnail: "https://i.ibb.co/0DLq4w7/zero.png",
    },
    {
      name: "Event Pros | All-in-one event Solution",
      description: "Event-Pro is an all-in-one event management website.",
      skills: ["React Js", "Tailwind CSS", "Firebase Auth"],
      source_code: "https://github.com/CodeWithRashed/event-pros",
      live_link: "https://event-pros.web.app/",
      intro_video: "https://event-pros.web.app/",
      thumbnail: "https://i.ibb.co/TBjcYPq/event.png",
    },
  ];
  return (
    <div className=" py-20 max-w-[1240px]  px-[20px] mx-auto">
      <SectionTitle
        title="Projects"
        subTitle="Projects I Have Worked On"
      ></SectionTitle>

      <div className="projects flex flex-col gap-20 mt-5">
        {
          projects.map((project, index) =>(

        <div key={index} className="project grid md:grid-cols-5 bg-dark rounded-lg overflow-hidden shadow-md shadow-accentRgb ">
          <div className="text-content order-last md:order-first lg:col-span-2 md:col-span-2 text-light font-medium drop-shadow space-y-3 p-5">
            <h1 className="text-2xl ">{project.name}</h1>
            <p>
            {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {
                project.skills.map((skill, index) => (
                    <div key={index}>
                      <SkillItem>{skill}</SkillItem>
                    </div>
                ))
              }
              
            </div>
            <div className="cta">
              <h3 className="text-lg font-medium">Source and Links</h3>
              <div className="mt-3 flex flex-wrap gap-2 items-center">
                <Link
                  href={project?.source_code}
                  className="bg-accentRgb text-dark w-fit px-4 py-2 rounded hover:bg-accent transition-all ease-in-out"
                >
                  <div className="flex gap-2 justify-center items-center">
                    <FaCode /> <span>Github</span>
                  </div>
                </Link>

                <Link
                  href={project?.live_link}
                  className="bg-accentRgb text-dark w-fit px-4 py-2 rounded hover:bg-accent transition-all ease-in-out"
                >
                  <div className="flex gap-2 justify-center items-center">
                    <TbView360 /> <span>Live Site</span>
                  </div>
                </Link>
                <Tooltip content="Watch Project Intro">
                  <Link
                   href={project?.intro_video}
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded hover:bg-accent transition-all ease-in-out"
                  >
                    <div className="flex gap-2 justify-center items-center">
                      <CiYoutube /> <span>Video</span>
                    </div>
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="image-content lg:col-span-3 md:col-span-3 ">
            <Image
              src={project.thumbnail}
              alt="thumbnail"
              width={500}
              height={400}
              className="w-full h-full object-fill"
            ></Image>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
