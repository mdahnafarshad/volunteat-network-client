
import DonationListTableRow from "./DonationListTableRow";


const DonationListTable = ({data, handleDelete}) => {
   console.log(handleDelete,'line 6');
   
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <h3>Email</h3>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>item No</th>
                            <th>Donation Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map(res => <DonationListTableRow
                            key={res._id}
                            handleDelete={handleDelete}
                            data={res}
                            ></DonationListTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DonationListTable;