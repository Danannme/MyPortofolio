import { Typography } from "@material-tailwind/react";

export function Footer() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center border-t border-blue-gray-50 py-4 text-center">
            <Typography color="black" className="font-normal">
                &copy; 2025 Robbi Zaidan A
            </Typography>
        </footer>
    );
}
