
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/Group1329.png';
import { AuthContext } from '../../Provider/AuthProvider';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(()=>{
                localStorage.removeItem('access-token');
            })
            .catch(error => console.error(error))
    };

    const menubarItems =
        <><li><Link to={`/`}>Home</Link></li>
            {
                user?.email && <><li ><Link to={`/donationList`}>My donation</Link></li>
                    <li><Link>Events</Link></li></>
            }
            <li><Link to='/blog'>blog</Link ></li>
            <li>{user ? <button onClick={handleLogOut} className='btn btn-sm btn-gos'>Log-Out</button>: <Link to='/login'>Login</Link >}</li>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menubarItems
                        }
                    </ul>
                </div>
                <a><img className='w-1/3' src={logo} alt="logo-group" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menubarItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? ' ': <Link to={`/register`} className="btn btn-info text-white mx-3">Registration</Link>
                }
                <a className="btn btn-neutral mx-3">Admin</a>
                {
                    user?.photoURL && <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default NavBar;