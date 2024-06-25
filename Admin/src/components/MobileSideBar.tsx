import { SlMenu } from "react-icons/sl";

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
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