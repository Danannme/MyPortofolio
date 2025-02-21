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
                        "Website ini saya buat ketika saya kelas 2 SMA, untuk mempublish tentang kelas saya"
                    }
                    techs={["Html", "Css", "Javascript"]}
                    linkTo={"https://profilex-gclass.pages.dev"}
                    btnText={"Visit"}
                />,
                <CardPorto
                    imgSrc={"/img/project image/websiteKelas11.webp"}
                    title={"Website Kelas 11"}
                    desc={
                        "Website ini saya buat ketika saya kelas 2 SMA, untuk mempublish tentang kelas saya. Mungkin ada perbedaan teknologi yang saya pakai dibanding dengan website yang sebelumnya."
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
                        "Note App ini saya buat menggunakan React js dengan pemorgramman yang sederhana dimana, dan sudah menerapkan search note."
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
                        "Sertifikat ini saya dapatkan setelah penyelesaikan pelatihan React Js di Dicoding."
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
                className="title text-3xl text-center font-medium before:left-[58px] before:w-[145px] scroll-mt-60"
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
