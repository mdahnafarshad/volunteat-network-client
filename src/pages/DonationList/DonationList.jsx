import { useEffect, useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import DonationListTable from "./DonationListTable";


const DonationList = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);


    // const url = `localhost:5000//donationList?email=${user?.email}`;


    // specific data need url 
    const url = `http://localhost:5000/donationList?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data);

            })
    }, [url]);



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
                fetch(`http://localhost:5000/donationList/${id}`,
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




    return (
        <div className="m-5 p-5">
            <h3 className="text-3xl font-medium text-sky-400 text-center my-5">Specific Your Donation List Table</h3>
            <DonationListTable
                data={data}
                handleDelete={handleDelete}
            ></DonationListTable>
        </div>
    );
};

export default DonationList;