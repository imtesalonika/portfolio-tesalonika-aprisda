import {Button} from "@/components/ui/button.tsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Menu} from "lucide-react";

export default function Navbar(){
    return(
        <nav className={"border-b h-12 flex items-center fixed bg-white w-full"}>
            <div className={"container mx-auto flex px-7 justify-between"}>
                <div className={"lobster-two-bold-italic text-3xl"}>
                    Tesalonika's Portfolio
                </div>

                <div className={"hidden md:flex"}>
                    <Button variant="ghost" asChild={true}>
                        <a href="#first-page">Home</a>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <a href="#second-page">About</a>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <a href="#third-page">Projects</a>
                    </Button>
                    <Button variant="ghost" asChild={true}>
                        <a href="#fourth-page">Contact</a>
                    </Button>
                </div>

                <div className={"md:hidden"}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild={true}><Button variant={"outline"}><Menu /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem asChild={true}><a href="#first-page">Home</a></DropdownMenuItem>
                            <DropdownMenuItem asChild={true}><a href="#second-page">About</a></DropdownMenuItem>
                            <DropdownMenuItem asChild={true}><a href="#third-page">Projects</a></DropdownMenuItem>
                            <DropdownMenuItem asChild={true}><a href="#fourth-page">Contact</a></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}