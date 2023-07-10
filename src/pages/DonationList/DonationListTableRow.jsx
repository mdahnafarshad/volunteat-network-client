

const DonationListTableRow = ({data, handleDelete, handleUpdate}) => {

    
    const {title, img, name, email, _id, status, Date} = data;
    console.log(data);
    return (
        <>
            <tr>
                <th>
                    <label>
                        <p>{email}</p>
                    </label>
                </th>
                <th>
                    {
                        Date
                    }
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {
                        title
                    }
                    <br />
                </td>
                <td>{_id}</td>
                <th>
                    <button onClick={()=>{handleDelete(_id)}} className="btn btn-ghost btn-xs">delete</button>
                </th>
                <th>
                    {
                        status && status === "OKAY"? <h1 className="text-orange-400">OKAY</h1> : <button onClick={()=>{handleUpdate(_id)}} className="btn btn-ghost btn-xs">update</button>
                    }
                </th>
            </tr>
        </>
    );
};

export default DonationListTableRow;