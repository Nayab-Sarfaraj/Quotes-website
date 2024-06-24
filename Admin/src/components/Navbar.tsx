import {
    Menubar,
    MenubarMenu,
    MenubarTrigger
} from "@/components/ui/menubar"

const Navbar = () => {
    return (
        <div className="flex items-center justify-center pt-10">
            <Menubar className=" bg-[#414753]">
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
              
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                  
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Profiles</MenubarTrigger>
              
                </MenubarMenu>
            </Menubar>
        </div>
    )
}
export default Navbar
