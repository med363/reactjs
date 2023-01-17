
import './FBRadio.css'
function FBRadio({value , checked , handleRadio }) {
  return (
    <>
    <div className='gender_box'>
      <label> { value } </label>
      <input type={"radio"}  checked={checked}  onChange={ handleRadio }/>
    </div>
 
      
   
    </>
  );
}
export default FBRadio;