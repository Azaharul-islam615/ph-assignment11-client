import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../Context/Authprovider';
import Swal from 'sweetalert2';
import UseaxiosSecure from '../hooks/UseAxiosSecure';

const Login = () => {
    const { googleauth, login } = use(AuthContext)
    const axiosSecure = UseaxiosSecure()

    const navigate = useNavigate()
    const location = useLocation()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const handlelogin = (data, e) => {
        login(data.email, data.password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfull.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state ? location.state : "/")
                e.target.reset()
            })
            .catch(err => console.log(err.message))
    }

    const handlegoogle = () => {
        googleauth()
            .then(result => {
                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL
                }
                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user created in the database')
                        }
                    })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfull.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state ? location.state : "/")
            })
            .catch(err => console.log(err.message))
    }

    // Demo + Admin buttons
    const handleDemoLogin = () => {
        setValue("email", "junayedahmmed@gmail.com")
        setValue("password", "1234qwer")
    }

    const handleAdminLogin = () => {
        setValue("email", "azaharul@gmail.com")
        setValue("password", "123qwe")
    }

    return (
        <div data-aos="fade-up" className="text-white pt-20 flex justify-center items-center min-h-screen">
            <title>contestHub-Login</title>
            <div className="w-full max-w-sm p-4 border-1 border-green-600 rounded-2xl">
                <h1 className="text-4xl font-bold mb-1">Welcome Back</h1>
                <p className="text-[18px] text-white mb-2 font-medium">Login with ContestHub</p>

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
                    {errors.password?.type === "minLength" && (
                        <p className="text-red-500 font-semibold text-sm">password must be 6 characters or longer</p>
                    )}

                    <p className="text-sm text-white cursor-pointer mt-2 mb-2 hover:underline font-semibold">
                        Forget Password?
                    </p>

                    <button  type='submit' className="w-full bg-lime-300 hover:bg-lime-400 font-semibold text-black py-2 rounded-md text-[20px] mb-4">
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

                    <button
                        type="button"
                        onClick={handlegoogle}
                        className="w-full text-black flex justify-center items-center gap-2 border border-gray-200 py-2 rounded-md bg-gray-50 hover:bg-gray-100 mb-4"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                            alt="google"
                            className="w-5"
                        />
                        Login with Google
                    </button>

                    {/* --------- Demo + Admin Horizontal Buttons --------- */}
                    <div className="flex justify-between gap-4">
                        <button
                            type="button"
                            onClick={handleDemoLogin}
                            className="flex-1 bg-blue-500 hover:bg-blue-600 font-semibold text-white py-2 rounded-md text-[16px]"
                        >
                            Demo Creator
                        </button>
                        <button
                            type="button"
                            onClick={handleAdminLogin}
                            className="flex-1 bg-red-500 hover:bg-red-600 font-semibold text-white py-2 rounded-md text-[16px]"
                        >
                            Admin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
