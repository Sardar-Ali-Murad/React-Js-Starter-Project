import React from 'react'
import {BsFillPersonPlusFill}  from "react-icons/bs"
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross}  from "react-icons/im"
import { useAppContext } from "../context/appContext"
import { Navigate } from 'react-router-dom';


const Navbar = () => {
    let {user}=useAppContext()
    let [ham,setHam]=React.useState(true)

    function loginHandler(){
        if(user===null){
            <Navigate to='/Register' />;
        }
        else{
            <Navigate to='/User' />;
        }
    }


  return (
    <div>
   {/* Big Screen Nav Start*/}
    <div className='nav-main'>
        <div className='nav-headers'>
             {/* <h3 className='mt-[15px]'>AL-Kabeer Estate</h3> */}
             {/* <Image src={Logo} height={60} width={60} alt="Image"/> */}
        </div>

    <div className='big-screen-nav'>
       <nav>
        <ul>
            <li> <Link to="/" className='label fancy-link text-[#475569]' >Home</Link></li>
            <li> <Link to="#"  className='label fancy-link'>About</Link></li>
            <li> <Link to="#"  className='label fancy-link'>Property</Link></li>
        </ul>
       </nav>
    </div> 
          

         <div className='nav-end'>
            <div className='nav-flex gap-[30px]'  style={{cursor:"pointer"}}>
                <Link to={user?"/User":"/Register"}>
                 <BsFillPersonPlusFill className='nav-icon text-white' style={{color:"white"}} />
                </Link>
            </div>
        </div> 

        <div>
            <GiHamburgerMenu className='ham text-white' onClick={()=>setHam(false)}/>
        </div>
 
    {/* End of the big screen nav */}
    </div>
    {/* small screen nav starts */}
      <div className={`small-screen-main ${!ham?"small-screen-nav-active":""}`}>
         <div className='small-nav-front'>
            <h3 className='label' style={{color:"black"}}>comfy Sloth</h3>
            <ImCross className='cross' onClick={()=>setHam(true)}/>
         </div>

         <div className='small-screen-nav-center div-center-80'>
            <li> <Link className='label fancy-link' style={{marginBottom:"30px",color:"black"}} to="/" onClick={()=>setHam(true)} >Home</Link></li>
            <li> <Link to="#"  className='label fancy-link' style={{marginBottom:"30px",color:"black"}} onClick={()=>setHam(true)}>About</Link></li>
            <li> <Link to="#"   className='label fancy-link'  style={{marginBottom:"30px",listStyle:"none",textDecoration:"none",color:"black"}} onClick={()=>setHam(true)}>Property</Link></li>    
            <div className='nav-flex gap-[30px]'  style={{cursor:"pointer"}}>
                <Link to={user?"/User":"/Register"}>
                 <BsFillPersonPlusFill className='nav-icon ' onClick={()=>setHam(true)} style={{color:"black"}} />
                </Link>
            </div> 
         </div>

         <div className='small-nav-end'>
        </div> 


    </div> 
    {/* small screen nav  ends*/}

    </div>
  )
}

export default Navbar