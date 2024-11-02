import {Button} from "@/components/ui/button.tsx";
import {Facebook, Github, Instagram, Linkedin} from "lucide-react";

export default function Firstpage (){
    return(
        <div id={"first-page"} className={"container mx-auto flex py-10 min-h-[calc(100vh-50px)] items-center justify-center"}>
            <div className={"flex flex-wrap justify-center items-center gap-10 mt-10"}>
                <div className={"p-10 border-4 border-black"}>
                    <img className={" w-52 md:w-72"} src="src/assets/formal cv.jpg" alt="Photo"/>
                </div>

                <div className={"flex flex-col px-10 md:px-0 gap-3.5"}>
                    <span className={"text-4xl font-bold"}>Hi, I'm Tesalonika Sitopu</span>
                    <span className={"text-2xl"}>Based In Medan</span>
                    <span className={"text-xl"}>I have an interest in IT Quality Assurance</span>

                    <div className={"flex gap-3"}>
                        <Button className={"rounded-full bg-sky-100 hover:bg-sky-100"} asChild={true}>
                            <a href={"https://web.facebook.com/tesalonikaaprisdasitopu.sitopu"}>  <Facebook className={"text-black"} /> </a>
                        </Button>

                        <Button className={"rounded-full bg-sky-100 hover:bg-sky-100"} asChild={true}>
                            <a href={"https://www.instagram.com/i.m.tesalonika/profilecard/?igsh=MWhxY2I4ZWsxeTg3cA=="}> <Instagram className={"text-black"} /> </a>
                        </Button>

                        <Button className={"rounded-full bg-sky-100 hover:bg-sky-100"}asChild={true}>
                            <a href={"https://github.com/imtesalonika"}> <Github className={"text-black"} /></a>
                        </Button>

                        <Button className={"rounded-full bg-sky-100 hover:bg-sky-100"}>
                            <a href={"https://www.linkedin.com/in/tesalonika-aprisda-sitopu/"}> <Linkedin className={"text-black"} /></a>
                        </Button>





                    </div>
                </div>


            </div>

        </div>
    )
}