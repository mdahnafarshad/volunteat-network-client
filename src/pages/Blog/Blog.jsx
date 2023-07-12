import useTitle from "../../hook/useTitle";


const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            this is blog pages
            <div className=" text-center"><span className="loading w-10 loading-bars  text-secondary "></span></div>
        </div>
    );
};

export default Blog;