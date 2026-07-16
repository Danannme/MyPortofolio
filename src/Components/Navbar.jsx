import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function StickyNavbar({ openNav, setOpenNav, navIconClicked }) {
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-sans text-xs font-bold tracking-widest cursor-pointer hover:text-winered transition-colors duration-300"
      >
        <a href="#" className="flex items-center" onClick={navIconClicked}>
          HOME
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-sans text-xs font-bold tracking-widest cursor-pointer hover:text-winered transition-colors duration-300"
      >
        <a href="#about" className="flex items-center" onClick={navIconClicked}>
          ABOUT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-sans text-xs font-bold tracking-widest cursor-pointer hover:text-winered transition-colors duration-300"
      >
        <a
          href="#skills"
          className="flex items-center"
          onClick={navIconClicked}
        >
          SKILLS
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-sans text-xs font-bold tracking-widest cursor-pointer hover:text-winered transition-colors duration-300"
      >
        <a
          href="#portofolio"
          className="flex items-center"
          onClick={navIconClicked}
        >
          PORTOFOLIO
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-sans text-xs font-bold tracking-widest cursor-pointer hover:text-winered transition-colors duration-300"
      >
        <a
          href="#contact"
          className="flex items-center"
          onClick={navIconClicked}
        >
          CONTACT
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky top-0 max-h-[768px] w-[100%] z-10">
      <Navbar className="border-none border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-none h-max max-w-full rounded-none px-4 py-3 lg:px-12 lg:py-5 transition-all duration-300">
        <div className="flex items-center justify-between text-black">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-serif font-black tracking-widest text-2xl hover:text-winered transition-colors duration-300 border-b-2 border-transparent hover:border-winered"
          >
            RZA
          </Typography>{" "}
          <div className="flex items-center gap-4">
            {" "}
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
                  className="h-6 w-6 stroke-black"
                  viewBox="0 0 24 24"
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
                  className="h-6 w-6 stroke-black"
                  fill="none"
                  viewBox="0 0 24 24"
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
        <MobileNav open={openNav} className="bg-white/95 backdrop-blur-md px-2 py-4 border-t border-gray-100 lg:hidden">
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}
