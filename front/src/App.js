import {BrowserRouter,Route,Routes} from "react-router-dom"
import {FAQS,ForgetPassword,ResetPassword,Register,Login,Terms,Privacy,User,Home,ProtectedRouteUser}  from "./pages/index"
import Navbar from "./components/Navbar"
import MainFooter from "./components/MainFooter"
function App() {
  return (
    <div style={{overflowX:"hidden"}}>
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route
          path='/User'
          element={
            <ProtectedRouteUser>
              <User/>
            </ProtectedRouteUser>
          }
        />
        <Route path='/' element={<Home/>}/>
        <Route path="/FAQ" element={<FAQS/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="Terms" element={<Terms/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
      </Routes>
      <MainFooter/>
    </BrowserRouter>
    </div>
  );
}

export default App;
