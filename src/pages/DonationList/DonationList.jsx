import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import DonationListTable from "./DonationListTable";


const DonationList = () => {
    const {user} = useContext(AuthContext);
    const [data, setData] = useState([]);


    // const url = `localhost:5000//donationList?email=${user?.email}`;
   
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

    console.log(data);

    return (
        <div>
            <DonationListTable
            data={data}
            ></DonationListTable>
        </div>
    );
};

export default DonationList;