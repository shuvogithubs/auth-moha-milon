import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const Login = () => {

const {singInUser,signInWithGoogle}=useContext(AuthContext);
const navigate=useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        singInUser(email,password)
        .then((result)=>{
            console.log(result.user)
            e.target.reset();
            navigate('/');
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
            console.error(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New here? Please   <Link className="text-green-600 underline" to="/register">register!</Link></p>
                        <p className="flex justify-center items-center"><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;