import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FetchProfile, LoginUser } from '@/redux/slices/LoginSlice'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!email || !password) {
                toast.error("Please fill all the credentials")
                return
            }
            await dispatch(LoginUser({ email, password }))
            toast.success("logged in successfully")
            await dispatch(FetchProfile())
            navigate("/admin/dashboard")
        } catch (error) {
            console.log("error while sending the data to redux in logging : " + error)
        }
    }
    return (

        <div className='flex h-screen items-center flex-col w-[80vw]  p-10 gap-5 justify-center'>
            <div className='bg-[azure] p-10 rounded-md'>

                <h1 className='text-xl mb-3 text-center font-semibold   '>Please Login</h1>
                <form className='flex flex-col items-center gap-10 '>

                    <Input type='text' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <Input type='text' placeholder='Password'
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant={'outline'} onClick={handleSubmit}>Submit</Button>

                </form>
            </div>

        </div>

    )
}

export default LoginForm