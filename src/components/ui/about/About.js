import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import Link from "next/link";
import DownloadButton from "../shared/DownloadButton";

const About = () => {
  return (
    <div className="my-20">
      <SectionTitle
        title="About Me"
        subTitle="More About Me And My Skills"
      ></SectionTitle>
      <div className="content-container grid lg:grid-cols-2 gap-5 mt-5">
        <div className="about-me-section text-light">
          <h3 className="text-2xl text-light font-medium drop-shadow">
            Get to Know Me!
          </h3>
          <div className="about-content mt-5 text-light font-medium drop-shadow text-xl">
            <p className="leading-normal">
              I&apos;m a Full stack developer, specializing in <span className="text-accent">React.js</span>,
            Express.js, Firebase Auth, <span className="text-accent">  Tailwind Css, Mongodb</span>, and Node.js.
              I&apos;m also  <span className="text-accent">comfortable</span> with technologies like Mongoose,
              Next.js, git-github, and have some familiarity with Next auth and
              Typescript.  <span className="block mt-2"> Outside of coding, I enjoy exploring new tech,</span>
              Traveling, and Gardening. <span className="block mt-2"> I&apos;m open to <span className="text-accent">exciting</span> collaboration
              opportunities that align with my skills. let&apos;s <span className="text-accent">connect</span> and
              build something <span className="text-accent">Awesome</span>!</span> 
            </p>
          </div>
          <div className="mt-5">
            <DownloadButton></DownloadButton>
          </div>
        </div>
        <div className="skill-section text-light">
          <h3 className="text-2xl text-light font-medium drop-shadow">
            Tech Stack
          </h3>
          <div className="skill-content text-light font-medium mt-5 drop-shadow">
            <div>
              <div>Front-End Development:</div>
              <div className="flex flex-wrap gap-3">
                <Image
                  src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"
                  alt="HTML"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"
                  alt="CSS"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
                  alt="JavaScript"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465"
                  alt="TypeScript"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/ec8056bddf659d21de39b358d9786e56731cd767117e091348411666a5e7eee6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465"
                  alt="Tailwind"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"
                  alt="REACT"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465"
                  alt="NEXT"
                  width={120}
                  height={40}
                />
              </div>
            </div>
            <div className="mt-5">
              <div>Back-End Development:</div>
              <div className="flex flex-wrap gap-3">
                <Image
                  src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642"
                  alt="Express"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"
                  alt="Node"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/b8461917fc768add9be8322c0549d8793830a941d32dc3b3d18fa5236b80768c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e4f44454d4f4e2d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64656d6f6e266c6f676f436f6c6f723d25424244454144"
                  alt="Nodemon"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/5b148e7e2d5fdb541ea3cae400ea95884b75202ebe9846d996a20971602a8f01/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f46697265626173652d3033394245353f7374796c653d666f722d7468652d6261646765266c6f676f3d4669726562617365266c6f676f436f6c6f723d7768697465"
                  alt="Firebase"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465"
                  alt="MongoDB"
                  width={120}
                  height={40}
                />
              </div>
            </div>
            <div className="mt-5">
              <div>Build and Development Tools:</div>
              <div className="flex flex-wrap gap-3">
                <Image
                  src="https://camo.githubusercontent.com/a65fcdf7030d79c00f4c3d8bab84de39107f5777fca4d12f0cb64440015183fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f66697265626173652d2532333033394245352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6669726562617365"
                  alt="Firebase"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/22547aa007860433c23771dfd59d184297d9433adcf3082be8515a28a16cd875/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f76657263656c2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76657263656c266c6f676f436f6c6f723d7768697465"
                  alt="Vercel"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/9f3a28edc6de22024258f46392152fff8c083b0fa69fb813be667fd08053c5fa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f67697468756225323070616765732d3132313031333f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"
                  alt="Github pages"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/34424849aa826b133406acdd126f455a7eb5d0369d2dac3d28ddbfcc40e054a9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4469676974616c4f6365616e2d2532333031363766662e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6469676974616c4f6365616e266c6f676f436f6c6f723d7768697465"
                  alt="Digital ocean"
                  width={120}
                  height={40}
                />
                <Image
                  src="https://camo.githubusercontent.com/2a3cdfca8e9ce9bce0aa243aabbb2a8c9b836065d973948b83581fafc33f7f2b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5472656c6c6f2d2532333032364141372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d5472656c6c6f266c6f676f436f6c6f723d7768697465"
                  alt="Trello"
                  width={120}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
