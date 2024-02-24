import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
// import {Link} from "react-router-dom"
import { authContext } from "../../contextApi/AuthContext";
import { useContext } from "react";


const Header=()=>{
 

  const {user,dispatch}=useContext(authContext)
  const handleLogOut=()=>{
    dispatch({type:"LOGOUT"})
   

}
    return(
        <>
       {/* <nav class="navbar navbar-expand-lg sticky-top text-light">
        <div class=" container">
            <a class="navbar-brand"  href="#"><span className="badge text-light bg-dark">DOKTORZ</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
</svg>
              </button>
              <div class="collapse navbar-collapse" id="main">
                <ul class="ms-auto navbar-nav mb-2 mb-lg-0 text-dark m-auto ">
                    <li class="nav-item"><Link  to={"/"} class="nav-link  activeee">Home</Link></li>
                    <li class="nav-item"><Link to={""}  class="nav-link ">Service</Link></li>
                    <li class="nav-item"><Link  to={"/findedoctore"}  class="nav-link ">Find a Doctore</Link></li>
                    <li class="nav-item"><a    class="nav-link " href="#">Contact</a></li>
                    
                </ul>
             
                
                {
                  user?(<><span className="me-3 text-dark">{user?.user.name}</span>
                  <ul class="navbar-nav">
    
      <li class="nav-item dropdown">
        <a
          data-mdb-dropdown-init
          class="nav-link dropdown-toggle d-flex align-items-center"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
            class="rounded-circle"
            height="22"
            alt="Portrait of a Woman"
            loading="lazy"
          />
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
                  </>
                  
                  ):(
                    <>
                    <Link href="" class="btn main-btn rounded-pill me-3 ms-3 btnlogin text-light  bg-dark"  to={"/Login"}>LogIn</Link>
                    <Link class="btn main-btn rounded-pill btnstarted text-light bg-dark" to={"/"}>Get Stared</Link>
                    
                    </>
                  )
                }
                
          
                
              </div>
              
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#"><span className="badge text-light bg-dark">DOKTORZ</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <Link to={'/'} class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to={'/'} class="nav-link" href="#">Service</Link>
        </li>
        <li class="nav-item">
          <Link  to={"/findedoctore"} class="nav-link" href="#">Find Doctor</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      
      </ul>
      {
        user?(<><span className="me-3 text-dark">{user?.user.name}</span>
        <ul class="navbar-nav">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
            class="rounded-circle"
            height="22"
            alt="Portrait of a Woman"
            loading="lazy"
          />
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to={'/user/profile/me'} class="dropdown-item" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg> My profile</Link></li>
            <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-range" viewBox="0 0 16 16">
  <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1M1 9h4a1 1 0 0 1 0 2H1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg> My Appointments</a></li>
            <li> <a class="dropdown-item" href="#" onClick={handleLogOut}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg> Logout</a></li>
          </ul>
        </li>
        </ul>
        </>):(<>
          <Link href="" class="btn main-btn rounded-pill me-3 ms-3 btnlogin text-light  bg-dark"  to={"/Login"}>LogIn</Link>
          <Link class="btn main-btn rounded-pill btnstarted text-light bg-dark" to={'/form/patient'}>Get Stared</Link>
          
          </>)
      }
      
    </div>
  </div>
</nav>
        </>
    );
}
export default Header;