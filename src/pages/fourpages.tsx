import {Button} from "@/components/ui/button.tsx";
import {CircleUserRound, LocateFixed, Mail} from "lucide-react";

export default function Fourpages(){
    return (
        <div id={"fourth-page"}
             className={"container mx-auto flex lg:h-screen  items-center justify-center bg-sky-100 py-10 px-5"}>
            <div className={"flex flex-wrap justify-center items-center flex-col gap-5"}>
                <h1 className={"text-2xl font-bold"}>Contact Me</h1>

                <div id={'page-content'} className={'flex flex-col gap-5'}>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything
                        that you want to run past me. You can contact me anytime</p>

                    <div className={'flex justify-center w-full'}>
                        <Button className={'max-w-sm'}>
                            <a href="mailto:tesalonilaaprisdasitopu@gmail.com" target={'_blank'}>
                                Contact Me From Email
                            </a>
                        </Button>
                    </div>

                    <div className={'flex justify-center px-5'}>
                        <div className={'flex flex-col gap-3'}>
                            <div className={"font-bold"}>Contact Info</div>
                            <div>Always available for freelance work if the right project comes along, Feel free to
                                contact
                                me!
                            </div>
                            <div className={"flex flex-grow gap-3"}>
                                <div className={"flex flex-col justify-center gap-9"}>
                                    <CircleUserRound/>
                                    <LocateFixed/>
                                    <Mail/>
                                </div>

                                <div className={"flex flex-col"}>
                                    <div className={"h-full bg-black w-[2px]"}></div>
                                </div>
                                <div className={"flex flex-col gap-3"}>
                                    <div className={"flex flex-col"}>
                                        <span>Name</span>
                                        <span>Tesalonika Aprisda Sitopu</span>
                                    </div>

                                    <div className={"flex flex-col"}>
                                        <span>Location</span>
                                        <span>Medan,Indonesia</span>
                                    </div>

                                    <div className={"flex flex-col"}>
                                        <span>Email</span>
                                        <span>tesalonilaaprisdasitopu@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
