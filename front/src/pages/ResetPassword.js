import FormRow from '../components/FormRow'
import React from 'react'
import {useAppContext} from "../context/appContext"
import Alert from "../components/Alert"

import { useLocation} from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ResetPassword = () => {
  let [resetPassword,setResetPassword]=React.useState("")
  let {resetPasswordFun,showAlert}=useAppContext()
  const query = useQuery();
  let token=query.get('token')
  let email=query.get('email')
    
  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>       
    <div>
     {showAlert && <Alert/>}
      <FormRow name="password" labelText="Reset Password" value={resetPassword} handleChange={(e)=>setResetPassword(e.target.value)} placeholder="Enter Your New Password"/>
       <button className='btn' onClick={()=>resetPasswordFun({password:resetPassword,email,token})} >Submit</button>
       </div>
     </div>
  )
}

export default ResetPassword


