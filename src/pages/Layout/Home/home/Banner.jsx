import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../hook/useTitle";
import BannerCard from "./BannerCard";


const Banner = () => {
    const data = useLoaderData();

    useTitle('Home')
    
    
        return (<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                data.map(res => <BannerCard
                    key={res._id}
                    data={res}
                ></BannerCard>)
            }
        </div>)
    



    
};

export default Banner;