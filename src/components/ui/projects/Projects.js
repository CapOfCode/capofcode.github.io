import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";
import { Tooltip } from "../material_tailwind";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-darkLighter py-20">
      <SectionTitle
        title="Projects"
        subTitle="Projects I Have Worked On"
      ></SectionTitle>

      <div className="projects flex flex-col gap-20">
        <div className="project-one h-[400px] grid grid-cols-3 bg-dark rounded-lg overflow-hidden shadow-md shadow-accentRgb ">
          <div className="text-content text-light font-medium drop-shadow space-y-3 p-5">
            <h1 className="text-2xl ">E-Tutor | Learn From Anywhere</h1>
            <p>E-Tutor is an online learning platform for teachers and students..</p>
            <div className="flex flex-wrap gap-3">
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                React.js
              </div>
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                Tailwind CSS
              </div>
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                MongoDB
              </div>
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                Strip
              </div>
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                Vercel
              </div>
            </div>
            <div className="cta">
              <h3 className="text-lg font-medium">Source and Live Links</h3>
              <div className="mt-3 flex flex-wrap gap-2 items-center">
                <Tooltip content="Server Side Source Code">
                  <Link
                    href="https://github.com/programming-hero-web-course1/b8a12-server-side-CodeWithRashed"
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded"
                  >
                    Server
                  </Link>
                </Tooltip>
                <Tooltip content="React Source Code">
                  <Link
                    href="https://github.com/CodeWithRashed/e-tutor-client-side"
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded"
                  >
                    Source Code
                  </Link>
                </Tooltip>

                <Tooltip content="Next Js Source Code (Coming Soon)">
                  <Link
                    href=""
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded cursor-not-allowed"
                  >
                    Source Code 
                  </Link>
                </Tooltip>

                <Tooltip content="Same App With React">
                  <Link
                    href="https://e-tutor-client.vercel.app/"
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded"
                  >
                    Live Site V1
                  </Link>
                </Tooltip>
                <Tooltip content="Same App With Next Js (Coming Soon)">
                  <Link 
                
                    href=""
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded cursor-not-allowed"
                  >
                    Live Site V2 
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="image-content col-span-2  h-[500px]">
            <Image
              src="https://i.ibb.co/QJJnF0m/thumb.png"
              alt="thumbnail"
              width={500}
              height={400}
             
              className="w-full  h-[500px] object-fill"
            ></Image>
          </div>
        </div>

         <div className="project-two h-[400px] grid grid-cols-3 bg-dark rounded-lg overflow-hidden shadow-md shadow-accentRgb ">
          <div className="text-content order-last text-light font-medium drop-shadow space-y-3 p-5">
            <h1 className="text-2xl ">Zero Hunger — A Food Donation App</h1>
            <p>Food donation and request system for Community</p>
            <div className="flex flex-wrap gap-3">
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                React.js
              </div>
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                Tailwind CSS
              </div>
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                MongoDB
              </div>
             
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                Vercel
              </div>
            </div>
            <div className="cta">
              <h3 className="text-lg font-medium">Source and Live Links</h3>
              <div className="mt-3 flex flex-wrap gap-2 items-center">
                <Tooltip content="Server Side Source Code">
                  <Link
                    href="https://github.com/CodeWithRashed/zero-hunger-server"
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded"
                  >
                    Server
                  </Link>
                </Tooltip>
                <Tooltip content="React Source Code">
                  <Link
                    href="https://github.com/CodeWithRashed/zero-hunger-client-side"
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded"
                  >
                    Source Code
                  </Link>
                </Tooltip>

                <Tooltip content="Next Js Source Code (Coming Soon)">
                  <Link
                    href=""
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded cursor-not-allowed"
                  >
                    Source Code 
                  </Link>
                </Tooltip>

                <Tooltip content="Same App With React">
                  <Link
                    href="https://zero-hunger-client-five.vercel.app/"
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded"
                  >
                    Live Site V1
                  </Link>
                </Tooltip>
                <Tooltip content="Same App With Next Js (Coming Soon)">
                  <Link 
                
                    href=""
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded cursor-not-allowed"
                  >
                    Live Site V2 
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="image-content col-span-2  h-[500px]">
            <Image
              src="https://i.ibb.co/0DLq4w7/zero.png"
              alt="thumbnail"
              width={500}
              height={400}
             
              className="w-full  h-[500px] object-fill"
            ></Image>
          </div>
        </div>

        <div className="project-three h-[400px] grid grid-cols-3 bg-dark rounded-lg overflow-hidden shadow-md shadow-accentRgb ">
          <div className="text-content text-light font-medium drop-shadow space-y-3 p-5">
            <h1 className="text-2xl ">Event Pros | All-in-one event Solution</h1>
            <p>Event-Pro is an all-in-one event management website.</p>
            <div className="flex flex-wrap gap-3">
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                React.js
              </div>
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                Tailwind CSS
              </div>
             
             
              <div className="skill bg-darkLighter w-fit px-4 py-2 rounded-lg">
                Vercel
              </div>
            </div>
            <div className="cta">
              <h3 className="text-lg font-medium">Source and Live Links</h3>
              <div className="mt-3 flex flex-wrap gap-2 items-center">
                
                <Tooltip content="React Source Code">
                  <Link
                    href="https://github.com/CodeWithRashed/event-pros"
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded"
                  >
                    Source Code
                  </Link>
                </Tooltip>

                <Tooltip content="Next Js Source Code (Coming Soon)">
                  <Link
                    href=""
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded cursor-not-allowed"
                  >
                    Source Code 
                  </Link>
                </Tooltip>

                <Tooltip content="Same App With React">
                  <Link
                    href="https://event-pros.web.app/"
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded"
                  >
                    Live Site V1
                  </Link>
                </Tooltip>
                <Tooltip content="Same App With Next Js (Coming Soon)">
                  <Link 
                
                    href=""
                    className="bg-accentRgb text-dark w-fit px-4 py-2 rounded cursor-not-allowed"
                  >
                    Live Site V2 
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="image-content col-span-2  h-[500px]">
            <Image
              src="https://i.ibb.co/TBjcYPq/event.png"
              alt="thumbnail"
              width={500}
              height={400}
             
              className="w-full  h-[500px] object-fill"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
