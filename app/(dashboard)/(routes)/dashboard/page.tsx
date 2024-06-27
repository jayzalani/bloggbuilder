"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, ImageIcon, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const Tools = [
  {
    label:"Blog Generation",
    icon:MessageSquare,
    color: "text-violet-500",
    bgcolor:"bg-violet-500/10",
    href: "/blog"//this is the problem
  },{
    label:"Image generation",
    icon: ImageIcon,
    color: "text-amber-400",
    bgcolor:"bg-amber-400/10",
    href: "/image"//this is the problem
  }
]


const DashboardPage=() =>{
  const router = useRouter();
  return (
    <div>
      <div className = "mb-8 space-y-4">
        <h2 className = "text-2xl md:text-4xl font-bold text-center"> 
          Explore the bloggy AI
        </h2>
        <p className = "text-muted-foreground font-light text-sm md:text-lg text-center">
          Generate The vlog at fingertips With chatGPT most powerfull model
        </p>
      </div>
      <div className=" px-4 md:px-20 lg:px-32 space-y-4">
      {Tools.map((tool) =>(
        <Card 
        onClick={()=>router.push(tool.href)}
        key = {
          tool.href}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
        >
          <div className=" flex items-cneter gap-x-4">
            <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
              <tool.icon  className={cn("w-8 h-8", tool.color)}/>
            </div>
            <div className= " font-semibold">
              {tool.label}

            </div>
          </div>
          <ArrowRight className = " w-5 h-5"/>
        </Card>
      ))}
      </div>
    </div>   
  )
}
export default DashboardPage;
