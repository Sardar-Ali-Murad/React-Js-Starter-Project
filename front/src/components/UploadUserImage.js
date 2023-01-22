import React from 'react'
import Card from "@mui/material/Card";
import { useAppContext } from '../context/appContext';
import {FiCamera}  from "react-icons/fi"
import axios from 'axios';

const UploadUserImage = () => {
    let props=useAppContext()
    function handleimage(event){
       props.uploadImageUser(event)
      }

      React.useEffect(()=>{
        if(props.userImage){
            let start=async ()=>{
                let data=await axios.post("https://localhost:3000/api/v1/auth/updateImage",{image:props.userImage},{withCredentials:true})
                props.getCurrentUser();
            }   
            start()  
        }
      },[props.userImage])

  return (
    <Card className='div-center-80 p-[20px] flex justify-between User-Image-Card'>
        <div>

      {/* <h2>Change Image</h2> */}
      <div class="form-row">
        <input type="file" className='form-font' id="image" accept="image/*" onChange={handleimage} />
      </div>
        </div>


      <div className='w-[100px] h-[100px] relative flex justify-center Image-box' style={{borderRadius:"50%",background:"brown",alignItems:"center",color:"white"}}>
        {/* <div className='image-overlay'></div> */}
        {/* <FiCamera className='camera'/> */}
        {!props.user?.image ?
            <h3 className='form-font'>{props.user?.name.substring(0,1)}</h3>:
            <img alt="Image" src={props.user?.image}  className="absolute w-[100%] h-[100%] border-r-[50%]" style={{borderRadius:"50%"}}/>
        }
      </div>
    </Card>
  )
}

export default UploadUserImage
