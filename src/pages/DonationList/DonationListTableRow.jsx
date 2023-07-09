

const DonationListTableRow = ({data}) => {

    console.log(data);
    const {title, img, name, email, _id} = data;

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
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};

export default DonationListTableRow;