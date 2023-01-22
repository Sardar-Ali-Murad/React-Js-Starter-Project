import React, { useReducer, useContext } from 'react'

import reducer from './reducer'

import axios from  "axios"

import {
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  UPLOAD_IMAGE,
   CLEAR_FILTERS,
   HANDLE_CHANGE,
   HANDLE_CHECK,
   UPDATE_PASSSOWRD_ERROR,
   UPDATE_PASSSOWRD_SUCCESS,
   UPLOAD_IMAGE_USER,
   FORGET_PASSWORD_ERROR,
   FORGET_PASSWORD_SUCCESS,
   RESET_PASSWORD_ERROR,
   RESET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_BEGIN
} from './actions'


const initialState = {
     
    //  For the api
    userLoading: true,
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    userLocation: '',
    Image:"",
    userImage:""
}

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  // For the development

  // For the production e.g
  // let BACK_END_URL="https:akbuilder.com"
  
  let BACK_END_URL="http://localhost:5000"

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `${BACK_END_URL}/api/v1/auth/${endPoint}`,
        currentUser,
        { withCredentials: true }
      );

      const { user, location } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, location, alertText },
      });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
 
  const logoutUser = async () => {
    await axios.get(`${BACK_END_URL}/api/v1/auth/logout`,{ withCredentials: true });
    dispatch({ type: LOGOUT_USER });
  };

  
  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await axios.get(`${BACK_END_URL}/api/v1/auth/getCurrentUser`,  { withCredentials: true });
      const { user, location } = data;

      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: { user, location },
      });
    } catch (error) {
      // if (error.response.status === 401) return;
      // logoutUser();
    }
  };


  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await axios.patch(`${BACK_END_URL}/api/v1/auth/updateUser`, currentUser,{ withCredentials: true });
      // const { user, location } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        // payload: { user, location },s
      });
      getCurrentUser()
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };


  
  
  // Imgage Upload
  const uploadImage=async (event)=>{
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append('image',imageFile)
    console.log(event.target.files[0])
    try {
     const {data:{image:{src}}} = await axios.post(`${BACK_END_URL}/api/v1/property/Image`,formData,{
      headers:{
       'Content-Type':'multipart/form-data'
      }
    }
    )
    dispatch({type:UPLOAD_IMAGE,
      payload:{
        image:src
      }
    })
    
  } catch (error) {
    console.log(error.response.data.msg);
  }
}
  const uploadImageUser=async (event)=>{
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append('image',imageFile)
    console.log(event.target.files[0])
    try {
     const {data:{image:{src}}} = await axios.post(`${BACK_END_URL}/api/v1/auth/uploadImage`,formData,{
      headers:{
       'Content-Type':'multipart/form-data'
      }
    }
    )
    dispatch({type:UPLOAD_IMAGE_USER,
      payload:{
        image:src
      }
    })
    
  } catch (error) {
    console.log(error.response.data.msg);
  }

}


  
  function clear(){
    dispatch({type:CLEAR_FILTERS})
  }
  
  
  function handleChange(name,value){
    dispatch({type:HANDLE_CHANGE,payload:{name:name,value:value}})
  }
  
  function handleCheck(name,checked){
    dispatch({type:HANDLE_CHECK,payload:{name:name,value:checked}})
  }
  


  
  const updatePassword=async ({password,confirmPassword})=>{
    try {
      let {data}=await  axios.post(`${BACK_END_URL}/api/v1/auth/updatePassword`,{password,confirmPassword},{withCredentials:true})
      dispatch({type:UPDATE_PASSSOWRD_SUCCESS,payload:{data:data.msg}})
    } catch (error) {
      dispatch({type:UPDATE_PASSSOWRD_ERROR,payload:{data:error.response.data.msg}})
    }
    clearAlert()
  }




  const Google=async({user,location})=>{
    try {
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, location, alertText:"Success Redirecting!" },
      });
    } catch (error) {
      console.log(error)
    }
    clearAlert()
  }


  const forgetPassword=async (email)=>{
     dispatch({type:FORGET_PASSWORD_BEGIN})
    try {
      let {data}=await axios.post(`${BACK_END_URL}/api/v1/auth/forgetPassword`,{email},{withCredentials:true})
      dispatch({type:FORGET_PASSWORD_SUCCESS,payload:{data:data.msg}})
    } catch (error) {
       dispatch({type:FORGET_PASSWORD_ERROR,payload:{data:error.response.data.msg}})
    }
    clearAlert()
  }


  const resetPasswordFun=async ({email,token,password})=>{
    try {
      let {data}=await axios.post(`${BACK_END_URL}/api/v1/auth/resetPassword`,{email,token,password})
      dispatch({type:RESET_PASSWORD_SUCCESS,payload:{data:data.msg}})
    } catch (error) {
       dispatch({type:RESET_PASSWORD_ERROR,payload:{data:error.response.data.msg}})
    }
    clearAlert()
  }

  React.useEffect(() => {
    getCurrentUser();
  }, []);
  
  return (
    <AppContext.Provider
    value={{
      ...state,
      setupUser,
      logoutUser,
      updateUser,
      getCurrentUser,
      uploadImage,
      handleChange,
       handleCheck,
       clear,
       updatePassword,
       uploadImageUser,
       Google,
       forgetPassword,
       resetPasswordFun
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
