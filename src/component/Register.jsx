
import { use } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";

import { MdOutlineFormatIndentIncrease } from "react-icons/md";
import axios from "axios";
import { auth, AuthContext } from "../Context/Authprovider";
import Swal from "sweetalert2";
import UseaxiosSecure from "../hooks/UseAxiosSecure";


const Register = () => {
    const { register,
        handleSubmit, formState: { errors } } = useForm()
    const { googleauth, createUser, updateuserprofile, setUser } = use(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    

   const axiosSecure=UseaxiosSecure()

    const handleRegistration = (data, e) => {

        const profileImage = data.photo[0]
        createUser(data.email, data.password)
            .then(() => {
                const formData = new FormData()
                formData.append("image", profileImage)
                const ImageUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host}`
                navigate("/");
                
                axios.post(ImageUrl, formData)
                    .then(res => {
                        const photoURL= res.data.data.url
                        // create user in the database
                        const userInfo={
                            email:data.email,
                            displayName:data.name,
                            photoURL: photoURL
                        }
                        axiosSecure.post('/users',userInfo)
                        .then(res=>{
                            if(res.data.insertedId){
                                console.log('user created in the database')
                            }
                        })

                        const userProfile = {
                            displayName: data.name,
                            photoURL:photoURL
                        }
                        updateuserprofile(userProfile)
                            .then(() => {
                                setUser({
                                    ...auth.currentUser,
                                    displayName: userProfile.displayName,
                                    photoURL: userProfile.photoURL
                                });
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your account has been created successfully.",
                                    showConfirmButton: false,
                                    timer: 1500
                                });

                                navigate(location.state ? location.state : '/');

                            })
                            .catch(err => {
                                console.log(err.message)
                            })
                    })
                e.target.reset()
            })
            .catch(err => {
                console.log(err.message)
            })


    }
    const handlegoogle = () => {
        googleauth()
            .then(result => {
                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL
                }
                axiosSecure.post('/users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        console.log('user created in the database')
                    }
                })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state ? location.state : '/');


            })
            .catch(err => {
                console.log(err.message)
            })

    }

    return (
        <div data-aos="fade-up" className="text-white flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-sm p-4 border-1 border-green-500 rounded-2xl mt-4 ">
                <h1 className="text-4xl font-bold mb-1">Create Account</h1>
                <p className="text-[16px] text-gray-300 mb-2">Register with ZapShift</p>

                <form onSubmit={handleSubmit(handleRegistration)} action="">
                    <label className="text-sm font-medium"> Name</label>
                    <input
                        type="text"
                        {...register('name', { required: true })}
                        placeholder="Enter full name"
                        className="w-full  mb-1 p-2 border border-gray-300 rounded-md outline-none"
                    />
                    {errors.name?.type === "required" && (
                        <p className="text-red-500 text-sm">name is required</p>
                    )}
                    <label className="text-sm font-medium"> Photo</label>
                    <input type="file" {...register("photo", { required: true })} className=" bg-[#0A102F] file-input w-full  mb-1 p-2 border border-gray-300 rounded-md outline-none" />
                    {errors.photo?.type === "required" && (
                        <p className="text-red-500 text-sm">photo is required</p>
                    )}
                    <label className="text-sm font-medium">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        placeholder="Email"
                        className="w-full  mb-1 p-2 border border-gray-300 rounded-md outline-none"
                    />
                    {errors.email?.type === "required" && (
                        <p className="text-red-500 text-sm">email is required</p>
                    )}

                    <label className="text-sm font-medium">Password</label>
                    <input
                        type="password"
                        {...register('password', { required: true, minLength: 6 })}
                        placeholder="Password"
                        className="w-full  p-2 border border-gray-300 rounded-md outline-none"
                    />
                    {errors.password?.type === "required" && (
                        <p className="text-red-500 text-sm">password is required</p>
                    )}

                    {
                        errors.password?.type === "minLength" && (
                            <p className="text-red-500 font-semibold text-sm">password must be 6 characters or longer</p>
                        )
                    }



                    <button className="w-full bg-lime-300 hover:bg-lime-400 text-black font-semibold py-2 rounded-md mt-2 mb-2">
                        Register
                    </button>

                    <p className="text-sm text-gray-300 text-center mb-2 ">
                        Already have an account?
                        <Link to="/login" state={location.state} className="text-green-600 hover:underline cursor-pointer underline font-semibold"> Login</Link>
                    </p>

                    <div className="flex items-center mb-2">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-3 text-sm text-gray-500">Or</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    <button type="button" onClick={handlegoogle} className="w-full text-black flex justify-center items-center gap-2 border border-gray-200 py-2 bg-[#E9ECF1] rounded-md  hover:bg-gray-100">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                            alt="google"
                            className="w-5"
                        />
                        Sign up with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
