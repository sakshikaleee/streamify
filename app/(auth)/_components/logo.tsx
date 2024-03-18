import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins ({
    subsets: ["latin"],
    weight: ["200", "300","400","500","600","700","800"]
});

export const Logo = () => {
    return (
        <div className="Flex flex-col items-center gap-y-4">
            <div className="bg-white rounded-full p-1">
                <Image  
                src="/spooky.svg"
                alt="Stremify"
                height="80"
                width="80"
                />
            </div>
            <div className={cn("flex flex-col items-center", font.className)}>
                <p className= {cn(
                    "text-xl font-semibold", 
                    font.className
                )}>
                    Streamify
                </p>
                <p className= {cn(
                    "text-sm text-muted-foreground", 
                    font.className
                )}>
                    Go Live
                </p>

            </div>
        </div>
    );
};