import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";

export default function StickyNavbar() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    HOME
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >
                <a href="#about" className="flex items-center">
                    ABOUT
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >
                <a href="#skills" className="flex items-center">
                    SKILLS
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >
                <a href="#portofolio" className="flex items-center">
                    PORTOFOLIO
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    CONTACT
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className="sticky top-0 max-h-[768px] w-[100%] z-10">
            <Navbar className="bg-transparent border-none shadow-none h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-black">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium text-xl"
                    >
                        Robbi Zaidan A
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit cursor-pointer hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav} className="">
                    {navList}
                </MobileNav>
            </Navbar>
        </div>
    );
}
