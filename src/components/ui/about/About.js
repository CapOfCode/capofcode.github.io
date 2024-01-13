import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import DownloadButton from "../shared/DownloadButton";
import SkillItem from "../shared/skillItem";

const About = () => {
  return (
    <div className="my-20 max-w-[1240px]  px-[20px] mx-auto">
      <SectionTitle
        title="About Me"
        subTitle="More About Me And My Skills"
      ></SectionTitle>
      <div className="content-container grid lg:grid-cols-2 gap-5 mt-5">
        <div className="about-me-section text-light">
          <h3 className="text-2xl text-light font-medium drop-shadow">
            Get to Know Me!
          </h3>
          <div className="about-content mt-5 text-light font-medium drop-shadow text-lg lg:text-xl">
            <p className="leading-normal text-justify">
              I&apos;m a Full stack developer, specializing in{" "}
              <span className="text-accent">React.js</span>, Express.js,
              Firebase Auth,{" "}
              <span className="text-accent"> Tailwind Css, Mongodb</span>, and
              Node.js. I&apos;m also{" "}
              <span className="text-accent">comfortable</span> with technologies
              like Mongoose, Next.js, git-github, and have some familiarity with
              Next auth and Typescript.{" "}
              <span className="block mt-2">
                {" "}
                Outside of coding, I enjoy exploring new tech,
              </span>
              Traveling, and Gardening.{" "}
              <span className="block mt-2">
                {" "}
                I&apos;m open to <span className="text-accent">
                  exciting
                </span>{" "}
                collaboration opportunities that align with my skills.
                let&apos;s <span className="text-accent">connect</span> and
                build something <span className="text-accent">Awesome</span>!
              </span>
            </p>
          </div>
          <div className="mt-5">
            <DownloadButton></DownloadButton>
          </div>
        </div>
        <div className="skill-section text-light mt-5 md:mt-0">
          <h3 className=" text-2xl text-light font-medium drop-shadow">
            Tech Stack
          </h3>
          <div className="skill-content text-light font-medium mt-5 drop-shadow">
            <div>
              <div>Front-End Development:</div>
              <div className="flex flex-wrap gap-3">
                <SkillItem>HTML</SkillItem>
                <SkillItem>CSS</SkillItem>
                <SkillItem>JavaScript</SkillItem>
                <SkillItem>TypeScript</SkillItem>
                <SkillItem>Tailwind</SkillItem>
                <SkillItem>React JS</SkillItem>
                <SkillItem>Next JS</SkillItem>
              </div>
            </div>
            <div className="mt-5">
              <div>Back-End Development:</div>
              <div className="flex flex-wrap gap-3">
                <SkillItem>Express JS</SkillItem>
                <SkillItem>Node JS</SkillItem>
                <SkillItem>Nodemon</SkillItem>
                <SkillItem>Firebase Auth</SkillItem>
                <SkillItem>MongoDB</SkillItem>
              </div>
            </div>
            <div className="mt-5">
              <div>Build and Development Tools:</div>
              <div className="flex flex-wrap gap-3">
                <SkillItem>Firebase</SkillItem>
                <SkillItem>Vercel</SkillItem>
                <SkillItem>Digital Ocean</SkillItem>
                <SkillItem>Github Pages</SkillItem>
                <SkillItem>Trello</SkillItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
