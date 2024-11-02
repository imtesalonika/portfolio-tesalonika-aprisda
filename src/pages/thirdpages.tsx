import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function Thirdpages() {
    return (
        <div id={"third-page"}
             className={"container mx-auto flex  items-center justify-center  py-10"}>
            <div className={"flex flex-wrap justify-center items-center flex-col"}>
                <h1 className={"text-2xl font-bold mb-7"}>My Projects</h1>
                <div className={"flex flex-wrap px-5 gap-5 lg:gap-10  justify-center"}>
                    <Card className={"max-w-xs"}>
                        <CardHeader>
                            <CardTitle>FRK & FED</CardTitle>
                            <CardDescription>FRK and FED are work plan forms and self-evaluation forms used for lecturers at IT Del. Websites are created using 3 microservices, namely &nbsp;
                                <a className={"text-blue-500"}
                                href="https://github.com/kangphp/FRK-FED-Authentication-Service" target={"_blank"}>Service Authentication
                                </a>,&nbsp;

                                <a className={"text-blue-500"}
                                href="https://github.com/boysitorus/FrontEnd-FRK/tree/scrum_team_1" target={"_blank"}>Service Front-end
                                </a> dan&nbsp;

                                <a className={"text-blue-500"}
                                href="https://github.com/boysitorus/FRK_Service" target={"_blank"}>Service Back-end
                                </a>
                            </CardDescription>

                        </CardHeader>
                        <CardContent>
                            <img src={"https://tesaportfolio.vercel.app/assets/FRK%20and%20FED.png"} alt={"gambar frk fed"}/>
                        </CardContent>
                        <CardFooter>
                            <Button asChild={true}>
                                <a href={"https://github.com/boysitorus/FrontEnd-FRK/tree/scrum_team_1"} target={"_blank"}>
                                    See More
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className={"max-w-xs"}>
                        <CardHeader>
                            <CardTitle>SPMB IT Del</CardTitle>
                            <CardDescription>SPMB is a website that new students use to register and find information on new student registration at IT Del. For more details&nbsp;
                                <a className={"text-blue-500"} href={"https://semat.del.ac.id/"} target={"_blank"}>
                                    click the following link
                                </a>
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <img src={"https://tesaportfolio.vercel.app/assets/Admisi%20SPMB.png"} alt={"gambar spmb"}/>
                        </CardContent>
                        <CardFooter>
                            <Button asChild={true}>
                                <a href={"https://github.com/boysitorus/FrontEnd-FRK/tree/scrum_team_1"} target={"_blank"}>
                                    See More
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className={"max-w-xs"}>
                        <CardHeader>
                            <CardTitle>Raelsa Library</CardTitle>
                            <CardDescription>Raelsa Library is an application created in Java to help manage the Raelsa library.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={"https://github.com/gabrielhtg/gabrielhtg.github.io/blob/master/src/raelsa.jpg?raw=true"} alt={"gambar raelsa library"}/>
                        </CardContent>
                        <CardFooter>
                            <Button asChild={true}>
                                <a href={"https://github.com/gabrielhtg/raelsaLibraryApp"} target={"_blank"}>
                                    See More
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className={"max-w-xs"}>
                        <CardHeader>
                            <CardTitle>Log Perpustakaan Raelsa</CardTitle>
                            <CardDescription>Library Log is an application created in Java to monitor the incoming and outgoing logs of Raelsa library members</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={"https://tesaportfolio.vercel.app/assets/logperpus.png"} alt={"gambar log perputakaan"}/>
                        </CardContent>
                        <CardFooter>
                            <Button asChild={true}>
                                <a href={"https://github.com/gabrielhtg/LogPerpustakaanRaelsa"} target={"_blank"}>
                                    See More
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className={"max-w-xs"}>
                        <CardHeader>
                            <CardTitle>Web E-Groceries</CardTitle>
                            <CardDescription>Create E-groceries web components according to the criteria.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={"https://tesaportfolio.vercel.app/assets/web%20e-groceries.jpeg"} alt={"gambar web groceries"}/>
                        </CardContent>
                        <CardFooter>
                            <Button asChild={true}>
                                <a href={"https://thetesalonika.github.io/"} target={"_blank"}>
                                    See More
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className={"max-w-xs"}>
                        <CardHeader>
                            <CardTitle>Redesign Website Del</CardTitle>
                            <CardDescription>Redesigned the IT Del website by changing several components to make it simpler and more attractive.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={"https://tesaportfolio.vercel.app/assets/redesign-imk.jpg"} alt={"gambar redesign web del"}/>
                        </CardContent>
                        <CardFooter>
                            <Button asChild={true}>
                                <a href={"https://www.figma.com/proto/wPi5lkIdTIBxulAgUontDN/IMK_S1-IF_11S21005_Tesalonika-Aprisda-Sitopu?page-id=0%3A1&type=design&node-id=34-744&viewport=-58%2C696%2C0.26&scaling=min-zoom&starting-point-node-id=34%3A744&mode=design&t=eaVXYV9dD6JZyfHl-1"} target={"_blank"}>
                                    See More
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className={"max-w-xs"}>
                        <CardHeader>
                            <CardTitle>Quick Redesign Aplikasi Pro Sehat</CardTitle>
                            <CardDescription>Redesign the ProSehat application with predetermined components.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={"https://tesaportfolio.vercel.app/assets/ProSehat.jpeg"} alt={"gambar quick redesign"}/>
                        </CardContent>
                        <CardFooter>
                            <Button asChild={true}>
                                <a href={"https://www.figma.com/file/BKNa4f9E8pCOcRdyfFo6Xf/Quick-Redesign-Pro-Sehat?type=design&node-id=110%3A748&mode=design&t=YBGGShdVKEUv4j00-1"} target={"_blank"}>
                                    See More
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )

}