import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
import FBFooter from "../Components/FBFooter/FBFooter";
import FBInput from "../Components/FBInput/FBInput";
import FBRadio from "../Components/FBRadio/FBSelect";
import FBSelect from "../Components/FBSelect/FBSelect";
import { Link } from 'react-router-dom'
import './SignUp.css'
import FBButton from "../Components/FBButton/FBButton";
function SignUp() {
   
    const [ radio , setRadio] = useState(1); 
    const [ custom , setCustom] = useState(false); 

    const [ firstname , setFirstname] = useState(""); 
    const [ surname , setSurname] = useState("");
    const [ email , setEmail] = useState(""); 
    const [ password , setPassword] = useState("");

    const [ error , setError] = useState(""); 

    const showRadio = (id) => {
      if (id == 1 ){
        setRadio(1)
        setCustom(false)
      }else if(id == 2) {
        setRadio(2)
        setCustom(false)
      }else{
        setCustom(true)
        setRadio(3)
      }
     

    }
   
    const getDays = () => {
        tab = []
        for(let i=1;i<32;i++) tab.push(i)
        console.log(tab)
        return tab
        
    }
    const getYears = () => {
        tab = []
        for(let i=1800;i<2022;i++) tab.push(i)
        console.log(tab)
        return tab
        
    }
    const months = [ "JAN" , "FEV" , "MAR" , "AVR" , "MAI" , "JUI" , "JUL" , "AOT" , "SEP" , "OCT" , "NOV" , "DEC"]
    const registerUser = (e) => {
      e.preventDefault();

      if (firstname == ""){
        console.log("firstname required ...")
        setError("firstname")
        return false;  // arreter la fonction 
      }

      if (surname == ""){
        setError("surname")
        return false; // arreter la fonction 
      }

      if (email == ""){
        setError("email")
        return false;  // arreter la fonction 
      }

      if (password == ""){
        setError("password")
        return false;  // arreter la fonction 
      }
      setError("")

      // action ajout 

    }
  return (
    <>
    <form onSubmit={ registerUser }>
      <div className="register_page">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          className="logo"
        />
        <div className="FBshadow">
          <h3 style={{ color: "rgba(0,0,0,.6)" }}>Create new Account</h3>
          <p> It's quick and easy </p>

          <div className="w100">
            <div className="inputs_inline">
              <div>
                 {
                  error && error == "firstname" ? 
                  <FBInput placeholder="first name" valid={false} value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
                  : <FBInput placeholder="first name" valid={true}  style={{ marginRight : "5px"}} value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
               
                }
                
              </div>
              <div>
                 
                 {
                  error && error == "surname" ?
                   <FBInput placeholder="surname " valid={false} value={surname} onChange={(e)=>setSurname(e.target.value)} /> :
                   <FBInput placeholder="surname " valid={true} value={surname} onChange={(e)=>setSurname(e.target.value)} />
                }
              </div>
            
            </div>
            <div >    
            {
                  error && error == "email" ? 
                     <FBInput placeholder="mobile number or email adress... " valid={false} value={email} onChange={(e)=>setEmail(e.target.value)} />
                   : <FBInput placeholder="mobile number or email adress... " valid={true} value={email} onChange={(e)=>setEmail(e.target.value)} />
                } </div>
            <div>   
            {
                  error && error == "password"
                   ?
                   <>
                   <FBInput  placeholder="New password .. " value={password} valid={false} onChange={(e)=>setPassword(e.target.value)} />  
                  <p style={{ color : "red" }}>Surname required ... </p>
                  </> 
                  : <FBInput valid={true}  placeholder="New password .. " value={password} onChange={(e)=>setPassword(e.target.value)} />  
                }</div>
            <div className="label">
                <label> Date of birth </label>
                
            </div>
            <div className="inputs_select">
               
                <FBSelect data={ getDays() } />
                <FBSelect data={months} />
                <FBSelect data={getYears()} /> 
            </div>
            <div className="label">
                <label> Gender </label>
                
            </div>
            <div className="inputs_radio">
               
               { radio == 1   ?   
                            <>
                                <FBRadio  handleRadio={ ()=> showRadio(1) } value="Female"   checked={ true } />
                                <FBRadio handleRadio={ ()=> showRadio(2) } value="Male"  checked={ false} />
                                <FBRadio handleRadio={ ()=> showRadio(3)} value="Custom"   checked={ false } /> 
                            </> : radio == 2  ?   <>
                            <FBRadio handleRadio={()=> showRadio(1)} value="Female"   checked={ false } />
                            <FBRadio handleRadio={()=> showRadio(2)} value="Male"  checked={ true} />
                            <FBRadio handleRadio={()=> showRadio(3)} value="Custom"   checked={ false } /> 
                            </> :

                            <>
                            <FBRadio handleRadio={()=> showRadio(1)} value="Female"   checked={ false } />
                            <FBRadio handleRadio={()=> showRadio(2)} value="Male"  checked={ false} />
                            <FBRadio handleRadio={()=> showRadio(3)} value="Custom"   checked={ true } /> 
                            </>

                            
                            }
                          
              
                 

            </div>
            <div>
                           {
                            /** custom (  ) */
                            custom &&  <>
                                 <div className="input_select">
                                        <FBSelect data={["She: 'Wish her a happy birthday!'" , "He: 'Wish him a happy birthday!'" , "They: 'Wish them a happy birthday!'"]} />
                                        </div>
                                        <div className="custom_label"> <label> Your pronoun is visible to everyone. </label></div>
                                        <div>
                                         
                                          <FBInput placeholder="Gender (optional) " />
                                        </div>
                                        
                                        </> 
                            }
            </div>

            <div className="footer_para">
              <p>
            People who use our service may have uploaded your contact information to Facebook.<Link to={"/"} >Learn more.</Link> 
            </p>
            <p>
By clicking Sign Up, you agree to our <Link to={"/"} >Terms</Link>, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
</p>
            </div>

            <div>
              <FBButton bgColor="green" width="large" type="submit" title="Sign UP" />
            </div>

<div style={{ marginTop:"20px" , marginBottom:"20px" }}>
<Link to={'/login'}> Already Have Account ? </Link>
</div>
            
         
          
          </div>
        </div>
      </div>
      </form>
      <FBFooter />
      
    </>
  );
}
export default SignUp;
