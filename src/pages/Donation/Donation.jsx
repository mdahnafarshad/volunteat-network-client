import { useContext, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


//  React day picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";


const Donation = () => {

    const { user } = useContext(AuthContext);
    const { title, _id, photoURL } = useLoaderData();
    const [Date, setStartDate] = useState(null)
    const location = useLocation();
    const from = location.pathname;
    const navigate = useNavigate();
    console.log(from);

    const handleDataSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const title = form.title.value;
        const photo = form.photo.value;

        const registerUser = { email, name, img: photo, title, Date};

        // create a new data object registered user data...
        fetch('https://volunteer-network-server-flax.vercel.app/registerUser/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registerUser)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data?.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Donation has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                     navigate(from);
                }
            });


    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-300 rounded-xl">
                <div className="w-1/2 flex-col ">
                    <div className="card-side bg-base-100 shadow-xl">
                        <form onSubmit={handleDataSubmit} className="card-body  my-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">your id is</span>
                                </label>
                                <input type="text" placeholder="id" name="id" defaultValue={_id} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">item</span>
                                </label>
                                <input type="text" placeholder="Title" name="title" defaultValue={title} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">picture</span>
                                </label>
                                <input type="text" placeholder="photo" name="photo" defaultValue={photoURL} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Event date</span>
                                </label>
                                <DatePicker
                                    className="w-full border p-2 rounded-lg "
                                    placeholderText="Pick your Date"
                                    selected={Date}
                                    onChange={(date) => setStartDate(date)}
                                    captionLayout="dropdown-buttons"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-info text-white" value={`Donate`} />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;