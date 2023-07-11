import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import DonationListTable from "./DonationListTable";


const DonationList = () => {
    const { user} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const navigate = useNavigate()


    // const url = `localhost:5000//donationList?email=${user?.email}`;


    // specific data need url 
    const url = `https://volunteer-network-server-flax.vercel.app/donationList?email=${user?.email}`;
    useEffect(() => {


        // use the jwt api into the headers method and signIn page using 
        fetch(url, {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('access-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(!data.error){
                    setData(data);
                }else{
                    // logout and then navigate
                    navigate('/');
                }

            })
    }, [url, navigate]);



    // delete operations in the beck end....
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://volunteer-network-server-flax.vercel.app/donationList/${id}`,
                    {
                        method: 'DELETE',
                    }
                )
                    .then(res => res.json())
                    .then(data2 => {
                        console.log(data2, 'line-38');

                        const remaining = data.filter(res => res._id !== id);
                        setData(remaining);
                        Swal.fire(
                            'Deleted!',
                            'Your Donation has been deleted.',
                            'success'
                        )
                    });
            }
        })
    };


    // update a document 
    const handleUpdate = (id) => {
        console.log('handleUpdate', id) 
        fetch(`https://volunteer-network-server-flax.vercel.app/donationList/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'OKAY'}),
        })
        .then(res => res.json())
        .then(data3 => {
            console.log(data3);
                if (data3.modifiedCount > 0) {
                    // update state
                    const remaining = data.filter(res => res._id !== id);
                    const updated = data.find(res => res._id === id);
                    updated.status = 'OKAY';
                    const newBookings = [ updated, ...remaining];
                    setData(newBookings);
                }
        });
    }


    return (
        <div className="m-5 p-5">
            <h3 className="text-3xl font-medium text-sky-400 text-center my-5">Volunteer register list</h3>
            <DonationListTable
                data={data}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            ></DonationListTable>
        </div>
    );
};

export default DonationList;