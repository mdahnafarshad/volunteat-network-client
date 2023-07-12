import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../../hook/useTitle";
import { AuthContext } from "../../../../Provider/AuthProvider";


const Registration = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();
    useTitle('Registration');
    // const location = useLocation();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const value = { name, email, password }
        console.log(value);
        createUser(email, password)
            .then(res => {
                console.log(res + "line 22");
                updateUser(name, photoUrl)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: `Oops...${err.message}`,
                    text: 'Something went wrong!',
                });

            });
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200 border rounded-2xl" >
                <div onSubmit={handleRegister} className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body">
                            <h1 className="text-5xl font-bold">Register-now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Display Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" required>Photo URL</span>
                                </label>
                                <input type="url" name="photoUrl" placeholder="Photo-Url" className="input input-bordered" />
                            </div>
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to={`/login`} className="label-text-alt link link-hover">Already have an account</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='registration-Now' className="btn btn-info text-white" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;