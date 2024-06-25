import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { LogoutUser } from '@/redux/slices/LoginSlice';
// import { FetchProfile } from '@/redux/slices/ProfileSlice';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const profile = useSelector(state => state?.LoginCredential?.data?.user)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    useState(() => {
        if (profile) setIsLoading(false)
    }, [profile])
    const handleLogut = async () => {
        try {
            setIsLoading(true)
       
            const response = dispatch(LogoutUser())
            toast.success(response.message)
            setIsLoading(false)
            navigate("/")
        } catch (error) {
            console.log("error while logging out : " + error)
            setIsLoading(false)
            toast.error(error.response.data.message)

        }
    }
    return (
        isLoading ? <Loader /> : <div className='h-screen w-[80vw] flex items-center justify-center '>
            <div className='bg-pink-100 p-10  rounded-sm'>
                <div className=' bg-white w-40 h-40 rounded-full flex items-center justify-center'>
                    <FaUser size={80} className='text-slate-500' />
                </div>
                <h1 className='capitalize text-lg font-semibold text-center mt-2 '>{profile.username}</h1>
                <p className='text-md  mt-2 text-center'>{profile.email}</p>
                <div className='text-center mt-3'>

                    <Button variant={'destructive'} onClick={handleLogut}>Logout</Button>
                </div>
            </div>

        </div>
    )
}

export default Profile