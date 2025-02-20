import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import SpotlightCard from "./SpotlightCard";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function CardPorto({
    imgSrc,
    title,
    desc,
    techs,
    linkTo,
    btnText,
}) {
    return (
        <SpotlightCard
            className="w-fit bg-white border-2"
            spotlightColor="gray"
        >
            <Card className="w-full max-w-[20rem] h-full shadow-none overflow-hidden bg-transparent">
                <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="group border-2 border-black overflow-hidden"
                >
                    <img
                        src={imgSrc}
                        alt="Website preview image"
                        className="group-hover:scale-110 transition"
                    />
                </CardHeader>
                <CardBody className="px-6 py-2">
                    <div className="mb-2 flex items-center justify-between">
                        <Typography
                            variant="h5"
                            color="black"
                            className="font-medium"
                        >
                            {title}
                        </Typography>
                    </div>
                    <Typography color="black" className="leading-5">
                        {desc}
                    </Typography>
                    {techs.length != 0 ? (
                        <div className="group mt-3 inline-flex flex-wrap items-center gap-1">
                            {techs.map((tech) => {
                                return (
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="hover:bg-gray-500 "
                                    >
                                        {tech}
                                    </Button>
                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )}
                </CardBody>
                <CardFooter className="pt-2 pb-2 mt-auto">
                    <a href={linkTo} target="_blank">
                        <Button
                            size="lg"
                            fullWidth={true}
                            className="flex gap-3 justify-center items-center cursor-pointer bg-black"
                        >
                            {btnText}{" "}
                            <FaExternalLinkAlt color="white" size={15} />
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </SpotlightCard>
    );
}
