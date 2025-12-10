

import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../Context/Authprovider';

const Login = () => {
    const { googleauth, login } = use(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const { register,
        handleSubmit, formState: { errors } } = useForm()

    const handlelogin = (data, e) => {
        login(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate(location.state ? location.state : "/")
                e.target.reset()
            })
            .catch(err => console.log(err.message))

    }

    const handlegoogle = () => {
        googleauth()
            .then(result => {
                console.log(result.user)
                navigate(location.state ? location.state : "/")
            })
            .catch(err => {
                console.log(err.message)
            })

    }
    return (
        <div className="text-white flex justify-center items-center min-h-screen">
            <div className="w-full max-w-sm p-4 border-1 border-green-600 rounded-2xl">
                <h1 className="text-4xl font-bold mb-1">Welcome Back</h1>
                <p className="text-[18px] text-white mb-2 font-medium ">Login with ZapShift</p>

                <form onSubmit={handleSubmit(handlelogin)} action="">
                    <label className="text-sm font-medium">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="Email"
                        className="w-full mt-1 mb-2 p-2 border border-gray-300 rounded-md outline-none"
                    />

                    <label className="text-sm font-medium">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true, minLength: 6 })}
                        placeholder="Password"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-none"
                    />
                    {errors.password?.type === "required" && (
                        <p className="text-red-500 text-sm">password is required</p>
                    )}
                    {
                        errors.password?.type === "minLength" && (
                            <p className="text-red-500 font-semibold text-sm">password must be 6 characters or longer</p>
                        )
                    }

                    <p className="text-sm text-white  cursor-pointer mt-2 mb-2 hover:underline font-semibold">
                        Forget Password?
                    </p>

                    <button type='submit' className="w-full bg-lime-300 hover:bg-lime-400 font-semibold text-black  py-2 rounded-md text-[20px] mb-4">
                        Login
                    </button>

                    <p className="text-sm text-white text-center mb-2">
                        Don’t have any account?
                        <Link to="/register" state={location.state} className="text-green-600 hover:underline cursor-pointer underline font-semibold"> Register</Link>
                    </p>

                    <div className="flex items-center mb-2">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-3 text-sm text-gray-500">Or</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    <button onClick={handlegoogle} className="w-full text-black flex justify-center items-center gap-2 border border-gray-200 py-2 rounded-md bg-gray-50 hover:bg-gray-100">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                            alt="google"
                            className="w-5"
                        />
                        Login with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;