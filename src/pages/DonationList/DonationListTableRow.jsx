

const DonationListTableRow = ({data}) => {

    
    const {title, img, name, email, _id} = data;

    const handleDelete = (_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/donationList/${_id}`,
        {
            method: 'DELETE',
        }
        )
        .then(res => res.json())
        .then(data => console.log(data));
    };

    return (
        <>
            <tr>
                <th>
                    <label>
                        <p>{email}</p>
                    </label>
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
            </tr>
        </>
    );
};

export default DonationListTableRow;