import React from 'react'
import {AiOutlinePhone}  from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import { Link } from 'react-router-dom'
import {FiFacebook} from "react-icons/fi"
import {FiLinkedin}  from "react-icons/fi"
import {SlSocialInstagram} from "react-icons/sl"
import {ImWhatsapp} from "react-icons/im"
import {HiBuildingLibrary}  from "react-icons/hi2"
  
const MianFooter = () => {
  return (
    <div className='bg-[#e86f6f] text-white'>

    <div className='div-center-80 grid-22 py-[30px] mt-[100px]'>
        

      <div style={{display:"flex",flexDirection:"column",gap:"40px"}}>
        <div className='flex gap-[20px]' style={{alignItems:"center"}}>
         <HiBuildingLibrary/>
         <p className='form-font text-white'>Usman Bin Affan Colony Bwp </p>
        </div>
        <div className='flex gap-[20px] text-white' style={{alignItems:"center"}}>
         <AiOutlinePhone/>
         <p className='form-font text-white'>+923186881689</p>
        </div>
        <div className='flex gap-[20px]' style={{alignItems:"center"}}>
         <AiOutlineMail/>
         <p className='form-font text-white'>sardaralimuradali4@gmail.com</p>
        </div>
      </div>


      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <h2>Short Links</h2>
        <Link to="/about" className='label text-black-50 fancy-link' style={{color:"black"}}>About Us</Link>
        <Link to="/Properties" className='label fancy-link' style={{color:"black"}}>All Properties</Link>
        <Link to="#" className='label fancy-link' style={{color:'black'}}>Blogs</Link>
        <Link to="#" className='label fancy-link' style={{color:'black'}}>Pricing Plan</Link>
      </div>

      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <h2>Help Links</h2>
        <Link to="/Terms" className='label fancy-link' style={{color:'black'}}>Terms And Conditions</Link>
        <Link to="/Privacy" className='label fancy-link' style={{color:'black'}}>Privacy Policy</Link>
        <Link to="FAQ" className='label fancy-link' style={{color:'black'}}>FAQ</Link>
        <Link to="#" className='label fancy-link' style={{color:'black'}}>Contact</Link>
      </div>

      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <h2>Social Links</h2>
        <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
        <FiFacebook style={{fontSize:"40px",cursor:"pointer"}}/>
        <FiLinkedin style={{fontSize:"40px",cursor:"pointer"}}/>
        <SlSocialInstagram style={{fontSize:"40px",cursor:"pointer"}}/>
        <ImWhatsapp style={{fontSize:"40px",cursor:"pointer"}}/>
        </div>
      </div>


    </div>
    </div>
  )
}

export default MianFooter
