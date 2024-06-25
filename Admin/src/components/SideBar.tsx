import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SidebarRoutes from './SidebarRoutes';

const SideBar = () => {
    const profile = useSelector(state => state?.LoginCredential?.data?.user)
    return (
        <aside className='min-h-screen max-h-max md:w-64 bg-white z-50 w-full border-gray-400 border-r-2 flex flex-col '>
            <div className='w-full flex items-center justify-center py-5'>
                <img alt="Logo" src={'../../public/logo.svg'} height={130} width={130} />
            </div>
            <SidebarRoutes />

            <Link to={profile ? "/admin/profile" : "/admin/dashboard"}>

                <div className='border-t h-10 rounded-md  flex md:mb-10  p-2 '>
                    <div className='bg-pink-200 w-10 h-10 rounded-md flex items-center justify-center'>

                        <FaUser size={20} />
                    </div>
                    <div className={`flex justify-between items-center w-52 ml-3 pt-5`}>
                        <div className='loading-4'>
                            <h4 className='font-semibold capitalize'>{profile ? profile.username : "John Doe"}</h4>
                            <span className='text-xs text-grey-600'>{profile ? profile.email : "Johndoe@gmail.com"}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </aside>
    )
}

export default SideBar