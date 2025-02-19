import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
} from "@material-tailwind/react";

import SpotlightCard from "./SpotlightCard";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CardPorto() {
    return (
        <SpotlightCard
            className="w-fit bg-white border-2"
            spotlightColor="gray"
        >
            <Card className="w-full max-w-[20rem] shadow-none overflow-hidden bg-transparent">
                <CardHeader floated={false} color="blue-gray">
                    <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardBody className="px-6 py-2">
                    <div className="mb-2 flex items-center justify-between">
                        <Typography
                            variant="h5"
                            color="black"
                            className="font-medium"
                        >
                            Wooden House, Florida
                        </Typography>
                    </div>
                    <Typography color="black">
                        Enter a freshly updated and thoughtfully furnished
                        peaceful home surrounded by ancient trees, stone walls,
                        and open meadows.
                    </Typography>
                    <div className="group mt-3 inline-flex flex-wrap items-center gap-3">
                        <Tooltip content="HTML">
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                <FaHtml5 size={20} />
                            </span>
                        </Tooltip>
                        <Tooltip content="CSS">
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                <FaCss3 size={20} />
                            </span>
                        </Tooltip>
                        <Tooltip content="Javascript">
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                <IoLogoJavascript size={20} />
                            </span>
                        </Tooltip>
                    </div>
                </CardBody>
                <CardFooter className="pt-2 pb-2">
                    <a href="https://profilex-gclass.pages.dev" target="_blank">
                        <Button
                            size="lg"
                            fullWidth={true}
                            className="flex gap-3 justify-center items-center cursor-pointer"
                        >
                            Visit <FaExternalLinkAlt color="white" size={15} />
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </SpotlightCard>
    );
}
