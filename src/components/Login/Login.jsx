import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    const handleLogin = (event) => {

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        event.preventDefault()
        console.log(email, password)



    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold mb-8">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  type="password" name='password' placeholder="password" required className="input input-bordered" />
                            
                        </div>

                        <p className=' '>
                       <Link  to="/register" className="label-text-alt link link-hover" >Forget password</Link>
                       </p>

                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>

                       <p className='text-center pt-6'>
                       <Link  to="/register" className="label-text-alt link link-hover" >Create account</Link>
                       </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;