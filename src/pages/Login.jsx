import { Link, Form, useNavigate } from "react-router-dom"
import { FormInput, SubmitBtn } from "../components"
import { useDispatch } from "react-redux"
import { customFetch } from "../utils"
import { logInUser } from "../feactures/user/userSlice"
import { toast } from "react-toastify"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post('auth/local', {
                identifier: 'test@test.com',
                password: 'secret'
            })
            dispatch(logInUser(response.data.user))
            toast.success('Welcome Guest User')
            navigate('/')
        } catch (error) {
            console.log(error);
            toast.error('Guest User Login Failed, Please Try Again')
        }
    }

    return (
        <section className="h-screen grid place-items-center">
            <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput name="identifier" type="email" label="email" />
                <FormInput name="password" type="password" label="password" />
                <div className="mt-4">
                    <SubmitBtn text="login" />
                </div>
                <button type="button" className="btn btn-secondary btn-block uppercase" onClick={loginAsGuestUser}>guest user</button>
                <p className="text-center">Not a member yet? <Link to='/register' className="ml-2 link-hover link-primary capitalize">register</Link> </p>
            </Form>
        </section>
    )
}
export default Login