import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LoginForm from './LoginForm'

const PrivateSecreen = () => {
    const dispatch = useDispatch()

    const isAdmin = useSelector(state => state.LoginCredential.isAdmin)
    return (
        <div>
            {
                !isAdmin ? <LoginForm /> : <Outlet />
            }

        </div>
    )
}

export default PrivateSecreen