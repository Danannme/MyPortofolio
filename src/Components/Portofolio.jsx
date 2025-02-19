import { useState } from "react";

import CardPorto from "../Elements/CardPorto";
import SpotlightCard from "../Elements/SpotlightCard";

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
                <CardPorto />,
                <CardPorto />,
                <CardPorto />,
                <CardPorto />,
                <CardPorto />,
                <CardPorto />,
            ],
        },
        {
            label: "Certificate",
            value: "certificate",
            element: [<CardPorto />, <CardPorto />, <CardPorto />],
        },
    ];

    return (
        <div className="portofolio grid gap-4">
            <h1
                className="title text-3xl text-center font-medium before:left-[58px] before:w-[145px]"
                id="portofolio\
                "
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
