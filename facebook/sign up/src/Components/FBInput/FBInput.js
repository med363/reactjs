import './FBInput.css'
function FBInput(props){
    return(
        <>
        {
            !props.valid ? 
            <input style={{ border:"1px solid red" }} className="Fb_input" placeholder={props.placeholder} value={props.value} onChange={props.onChange} /> :
            <input style={{ border:"1px solid green" }}  className="Fb_input" placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        }
            
        </>
    )
}
    
export default FBInput;