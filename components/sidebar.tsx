"use client"

import { cn } from "@/lib/utils";
import { ImageIcon, LayoutDashboard, MessageSquare, Settings } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets:["latin"]

});
const routes= [
    {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
    },
    {
        label: "Blog Genrator",
        icon: MessageSquare,
        href: "/blog",
        color: "text-violet-500",
    },
    {
        label: "Image generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-amber-400",
    }, {
        label: "Settings",
        icon: Settings,
        href: "/setting",
        color: "text-red-400",
    }
];

const Sidebar=()=>{
    const pathname = usePathname();
    return (
        <div className= "space-y-4 py-4 flex clex-xol h-full bg-[#111827] text-white">
                <div className=" px-3 py-2 flex-1">
                    <Link href="/dashboard" className=" flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                        fill
                        alt="logo"
                        src="/logo.png"/>
                    </div>
                    <div className={cn("text-2xl font-bold", montserrat.className)}>
                            Bloggy
                        </div>
                        </Link>
                        <div className = "space-y-1">
                            {routes.map((route)=>(
                                <Link 
                                href={route.href}
                                key={route.href}
                                className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition" , 
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400" )}
                                >
                                    <div className= "flex items-center flex-1">
                                        <route.icon className={cn("h-5 w-5 mr-3 ", route.color)}/>
                                    {route.label}
                                    </div>
                                </Link>
                            ))}

                        </div>
                </div>
        </div>
    );
}
export default Sidebar;