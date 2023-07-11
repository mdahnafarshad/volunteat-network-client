import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Provider/AuthProvider";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';
    const testLocation = location?.state?.from
    console.log(testLocation , 'line 12 login');
    const { logInUser } = useContext(AuthContext);
    const [see, setSee] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(res => {
                console.log(res, 'line 23');
                const loggedUser = {email: res.user?.email};
                console.log(loggedUser);
                
                // create the jwt token  store the local storage 
                fetch('http://localhost:5000/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data, 'line30')
                    localStorage.setItem('access-token', data.token);
                    navigate(from, { replace: true });
                    // form.reset();
                });
                

            })
            .catch(err => {
                console.log(err);
                if (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${err.message}`
                    })

                }
            })
    };


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={see ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered my-5" />
                                <input onClick={() => { setSee(!see) }} type="checkbox" className="toggle toggle-sm" />
                                <label className="label">
                                    <Link to={'/register'} className="label-text-alt link link-hover">if you are new!</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type={'submit'} className="btn btn-primary" value='login' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;