import { Button } from "@/components/ui/button"
import { GrMenu } from "react-icons/gr";
import { ImMenu } from "react-icons/im";
import { SlMenu } from "react-icons/sl";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideBar from "./SideBar";

const MobileSideBar = () => {
    return (
        <div className="">


            <Sheet>
                <SheetTrigger asChild className="md:hidden m-5 hover:opacity-75 transition">
                    <SlMenu size={30} />
                </SheetTrigger >
                <SheetContent side={"left"} className="p-0 bg-white">
                    <SideBar />
                </SheetContent>
            </Sheet>
        </div>
    )
}
export default MobileSideBar