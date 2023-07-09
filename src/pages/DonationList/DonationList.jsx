import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import DonationListTable from "./DonationListTable";


const DonationList = () => {
    const {user} = useContext(AuthContext);
    const [data, setData] = useState([]);


    // const url = `localhost:5000//donationList?email=${user?.email}`;
   

    // specific data need url 
    const url = `http://localhost:5000/donationList?email=${user?.email}`;
    console.log(user?.email,'user');
    useEffect(()=>{
        fetch(`${url}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setData(data);

        })
    },[url]);

    return (
        <div className="m-5 p-5">
            <h3 className="text-3xl font-medium text-sky-400 text-center my-5">Specific Your Donation List Table</h3>
            <DonationListTable
            data={data}
            ></DonationListTable>
        </div>
    );
};

export default DonationList;