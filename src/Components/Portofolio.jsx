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
                    techs={[
                        "Html",
                        "Css",
                        "Javascript",
                        "Tailwind",
                        "Bootstrap Icon",
                    ]}
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
        <div className="portofolio grid gap-4 w-full">
            <h1
                className="title text-3xl text-center font-medium before:left-[58px] before:w-[145px] scroll-mt-60 lg:scroll-mt-14"
                id="portofolio"
            >
                Portofolio
            </h1>
            <div className="porto-body w-full max-w-[80rem] mx-auto">
                <Tabs value="project">
                    <TabsHeader className="bg-gray-300 w-55 max-w-[400px] h-10 mx-auto z-0">
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, element }) => (
                            <TabPanel
                                key={value}
                                value={value}
                                className="flex flex-wrap justify-center mx-auto gap-4"
                            >
                                {element}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
};

export default Portofolio;
