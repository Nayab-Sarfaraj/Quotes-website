import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger
} from "./ui/menubar";
const navbarRoutes = [
    {
        title: "Home", href: "/"
    },
    {
        title: "Category", href: "/category"
    },
    {
        title: "Search", href: "/search"
    },
    {
        title: "Favourite", href: "/favourite"
    }
]
const Navbar = () => {
    const location = useLocation()
    const pathname = location.pathname
    return (
        <div className="flex items-center justify-center pt-8 w-full ">
            <Menubar className=" bg-[#414753]">
                {
                    navbarRoutes?.map((route, index) => {
                        return (
                            <MenubarMenu key={index}>
                                <Link to={route.href} className={cn(pathname === route.href && "bg-white rounded-sm")} >

                                    <MenubarTrigger>{route.title}</MenubarTrigger>
                                </Link>

                            </MenubarMenu>

                        )
                    })
                }



            </Menubar>
        </div>
    )
}
export default Navbar;
