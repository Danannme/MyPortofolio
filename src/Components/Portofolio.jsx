import { useState } from "react";

import CardPorto from "../Elements/CardPorto";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Portofolio = () => {
  const [isActive, setIsActive] = useState("project");

  const data = [
    {
      label: "Project",
      value: "project",
      element: [
        <CardPorto
          imgSrc={"/img/project image/websiteKelas10.webp"}
          title={"Website Kelas 10"}
          desc={
            "I created this website when I was in 10th grade of high school, to publish about my class."
          }
          techs={["Html", "Css", "Javascript"]}
          linkTo={"https://profilex-gclass.pages.dev"}
          btnText={"Visit"}
        />,
        <CardPorto
          imgSrc={"/img/project image/websiteKelas11.webp"}
          title={"Website Kelas 11"}
          desc={
            "I created this website when I was in 11th grade of high school, to publish about my class. There are improvements in the technology I use compared to the previous website."
          }
          techs={["Html", "Css", "Javascript", "Tailwind", "Bootstrap Icon"]}
          linkTo={"https://thegrotesque.my.id"}
          btnText={"Visit"}
        />,
        <CardPorto
          imgSrc={"/img/project image/noteAppRaect.webp"}
          title={"React Note App"}
          desc={
            "I created this Note App using React js with simple programming, and have implemented a search note."
          }
          techs={["Html", "Css", "Javascript", "React Js"]}
          linkTo={"https://note-app-snowy-mu.vercel.app"}
          btnText={"Visit"}
        />,
        <CardPorto
          imgSrc={"/img/project image/websiteTemplate-travelo.webp"}
          title={"Travelo"}
          desc={
            "This is a landing page template about travel website called Travelo"
          }
          techs={["React Js", "Tailwindcss", "DaisyUi"]}
          linkTo={"https://travelo-day.vercel.app"}
          btnText={"Visit"}
        />,
        <CardPorto
          imgSrc={"/img/project image/websiteTemplate-wnc.webp"}
          title={"WebNCraft"}
          desc={
            "This is a landing page template about website builder agency called WebNCraft"
          }
          techs={["React Js", "Tailwindcss", "Shadcn", "Framer Motion"]}
          linkTo={"https://webncraft-portfolio.vercel.app/"}
          btnText={"Visit"}
        />,
      ],
    },
    {
      label: "Certificate",
      value: "certificate",
      element: [
        <CardPorto
          imgSrc={"/img/project image/sertifikatReact.webp"}
          title={"Sertifikat React Js"}
          desc={
            "I got this certificate on December 11, 2024 after completing the React Js training at Dicoding."
          }
          techs={[]}
          linkTo={
            "https://drive.google.com/file/d/1gDIzgi-vzk5jGHX8qwtxXY3s3LsSlsqT/view?usp=sharing"
          }
          btnText={"See"}
        />,
      ],
    },
  ];

  return (
    <div className="w-full bg-[#FAF6F0]/50 border-y border-black/5 py-16 relative overflow-hidden my-4">
      {/* Background watermark text */}
      <div className="absolute -left-8 -bottom-10 font-serif text-[14rem] font-black text-black/[0.012] select-none pointer-events-none leading-none">
        WORK
      </div>
      <div className="portofolio grid gap-6 w-full relative z-1">
        <h1
          className="title text-4xl text-center font-serif font-black tracking-wide scroll-mt-60 lg:scroll-mt-14"
          id="portofolio"
        >
          Portofolio
        </h1>
        <div className="porto-body w-full max-w-[80rem] mx-auto px-4">
          <Tabs value="project">
          <TabsHeader
            className="bg-transparent border border-black w-64 max-w-[350px] h-11 mx-auto rounded-none p-0.5 z-0"
            indicatorProps={{
              className: "bg-winered rounded-none shadow-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className={`font-sans text-xs font-bold tracking-widest uppercase cursor-pointer transition-all duration-300 ${
                  isActive === value ? "text-white" : "text-black hover:text-winered"
                }`}
                onClick={() => setIsActive(value)}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="mt-8">
            {data.map(({ value, element }) => (
              <TabPanel
                key={value}
                value={value}
                className="flex flex-wrap justify-center mx-auto gap-8 p-0"
              >
                {element}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  </div>
  );
};

export default Portofolio;
