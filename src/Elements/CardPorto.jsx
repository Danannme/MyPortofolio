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
            className="w-full max-w-[21rem] bg-white border border-black/80 p-2.5 rounded-none transition-all duration-500 hover:border-winered page-turn-hover cursor-pointer"
            spotlightColor="rgba(128, 0, 0, 0.05)"
        >
            <Card className="w-full h-full shadow-none overflow-hidden bg-transparent rounded-none">
                <CardHeader
                    floated={false}
                    color="transparent"
                    className="group border border-black overflow-hidden rounded-none m-0 relative"
                >
                    {/* Visual overlap decoration */}
                    <div className="absolute inset-0 bg-winered/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    <img
                        src={imgSrc}
                        alt="Website preview image"
                        className="group-hover:scale-105 transition-transform duration-700 w-full h-44 object-cover"
                    />
                </CardHeader>
                <CardBody className="px-1 py-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <Typography
                            color="black"
                            className="font-serif font-black text-xl tracking-tight leading-tight hover:text-winered transition-colors duration-300"
                        >
                            {title}
                        </Typography>
                    </div>
                    <Typography color="black" className="font-sans text-sm text-darkgrey leading-relaxed">
                        {desc}
                    </Typography>
                    {techs.length != 0 ? (
                        <div className="mt-2 flex flex-wrap items-center gap-1.5">
                            {techs.map((tech) => {
                                return (
                                    <span
                                        key={tech}
                                        className="border border-black/30 bg-transparent text-black font-sans text-[9px] tracking-widest font-bold uppercase py-1 px-2.5 transition-colors duration-300 hover:border-winered hover:bg-beige/40"
                                    >
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )}
                </CardBody>
                <CardFooter className="px-1 pt-2 pb-1 mt-auto">
                    <a href={linkTo} target="_blank" rel="noopener noreferrer" className="block">
                        <Button
                            size="lg"
                            fullWidth={true}
                            className="flex gap-2 justify-center items-center cursor-pointer bg-winered hover:bg-black text-white hover:text-gold border border-transparent hover:border-gold rounded-none font-sans text-xs tracking-widest font-bold uppercase py-3 transition-all duration-500 shadow-none"
                        >
                            {btnText}{" "}
                            <FaExternalLinkAlt size={12} />
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </SpotlightCard>
    );
}
