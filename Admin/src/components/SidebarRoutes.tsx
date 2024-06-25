
import { FaSitemap } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import SidebarItem from './SidebarItem';

const SidebarRoutes = () => {
    const adminRoutes = [
        {
            title: "Dashboard",
            icon: MdDashboard,
            href: "/admin/dashboard"
        }
        , {
            title: "Quotes",
            icon: IoStatsChart,
            href: "/admin/quotes/all"
        }, {
            title: "Create",
            icon: FaSitemap,
            href: "/admin/quotes/create"
        }
    ]
    return (
        <nav className='flex h-full flex-col border-r bg-white shadow-sm'>
            {
                adminRoutes.map((route, index) => <SidebarItem title={route.title} icon={route.icon} href={route.href} key={index} />)
            }
        </nav>
    )
}

export default SidebarRoutes