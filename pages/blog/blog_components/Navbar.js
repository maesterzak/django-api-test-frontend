import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch,
  faBars,
  faTimes,
  faHardHat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { logout } from "../../../actions/auth";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () =>{
    if (dispatch && dispatch !== null && dispatch!==undefined){
      dispatch(logout())
      
  }
  }
  const authlink = (
    <>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <a href="#" onClick={logoutHandler}>Logout</a>
      </div>
    </>
  );
  const guest = (
    <>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <button className="btn" disabled><Link href="/login">Login</Link></button><FontAwesomeIcon size="1x" className="faHardHat" icon={faHardHat} />
      </div>
      <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
        <button disabled className="btn"><Link href="/register">Register</Link></button><FontAwesomeIcon size="1x" className="faHardHat" icon={faHardHat} />
      </div>
    </>
  );

  const [Navbar1, setNavbar1] = useState(false);
  const ToggleNav1 = () => {
    setNavbar1(!Navbar1);
    
  };
  

  return (
    <div>
      <nav className={`position-sticky`} style={{"backgroundColor":`${props.background}`}}>
        <div className="row w-100">
          <div className="col-8 col-md-4 d-flex align-items-center">
          
          

          <div className="nav-header" style={{"color":`${props.header_color}`}}>
            <span>devMaesters.</span>
          </div>
        
          </div>
          <div className="col-6 col-md-5 d-none d-md-block ">
            <div style={{"color": `${props.links}`}} className="d-flex justify-content-between align-items-center h-100">
            <div><Link href={'/'}>Home</Link></div>
            <div><Link href={'/blog'}>Blog</Link></div>
            <div><Link href={'/portfolio'}>Portfolio</Link></div>
            <div className="d-flex align-items-center"><Link href={'/mini-mall'}>Mini-Mall</Link><FontAwesomeIcon size="1x" className="text-white" icon={faHardHat} /></div>
            <div><Link href={'/about'}>About</Link></div>
            
            </div>
            
            
            
          </div>
          <div className="col-4 col-md-3 ">
          <div className="d-flex ">
          <div className="d-flex w-100 align-items-center justify-content-around">
            <FontAwesomeIcon size="1x" style={{"color":`${props.icon}`}} icon={faUser} />
            
            <button disabled className="btn btn-outline-light d-none d-md-block"><Link href={'/login'}>Login</Link></button>
            <button disabled className="btn btn-outline-light d-none d-md-block"><Link href={'/register'}>Register</Link></button>
          </div>
          <div className="d-block d-sm-none" onClick={ToggleNav1}>
            <FontAwesomeIcon
              className="togg1"
              size="2x"
              style={{"color":`${props.icon}`}}
              icon={Navbar1 ? faTimes : faBars}
            />
          </div>
        </div>
          </div>

        </div>



        

        
      </nav>
      <div  className={Navbar1 ? "nav-background": "d-none"}>
        <div onClick={ToggleNav1} className="dark_overlay3"></div>
      <div className="nav-toggle-links1 blog-link d-flex  justify-content-center flex-wrap vh-80">
        
        <div className="nav-toggle-link-link d-flex align-items-center  justify-content-center">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>

        <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
          <Link href="/blog">Blog</Link>
        </div>
        <div className="nav-toggle-link-link d-flex align-items-center justify-content-center ">
          <Link href="/mini-mall">Mini-Mall </Link>
          <FontAwesomeIcon size="1x" className="faHardHat" icon={faHardHat} />
        </div>
        <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
          <Link href="/portfolio">Portfolio</Link>
          
        </div>
        <div className="nav-toggle-link-link d-flex align-items-center justify-content-center">
          <Link href="/about">About</Link>
          
        </div>
        
        {isAuthenticated ? authlink : guest}
        
      </div>

      </div>
      
      
      
    </div>
  );
};
export default Navbar;