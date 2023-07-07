import { Link } from "react-router-dom";


const BannerCard = ({data}) => {
    const {_id,title, photoURL} = data;
    console.log(_id,title, photoURL);
    return (
        <>
            <div className=" w-96 bg-base-100 mx-auto my-5 shadow-xl">
                <figure className="px-10 pt-10"><img src={photoURL} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className="border w-full bg-sky-300 rounded-xl p-5 ">
                        <Link to={`/donations/${_id}`} className="text-white text-center text-3xl font-bold">{title}</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerCard;