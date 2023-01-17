
import FBButton from '../Components/FBButton/FBButton';
import FBFooter from '../Components/FBFooter/FBFooter';
import FBInput from '../Components/FBInput/FBInput';
import './SignIn.css';

function SignIn(){


    return(
        <>
        <div className='signin_page' >
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className='logo' />
            <div className="FBshadow">
                <h3 style={{ color: "rgba(0,0,0,.6)" }}>Log in to Facebook</h3>
                <FBInput placeholder="Email ... "  />
                <FBInput placeholder="Password ... " />


                <FBButton title={"Log in"} width="large" bgColor="blue"  />
                <a> Forgotten account? </a>
                <div style={{ display:"flex" }} className="OrBlock">
                    <hr />
                    <span> OR </span>
                    <hr />
                </div> 
                <FBButton title={"Create New Account"} width="small" bgColor="green" link="/register" />

            </div>
            
        </div>
        <FBFooter />
        </>
    )

}

export default SignIn;