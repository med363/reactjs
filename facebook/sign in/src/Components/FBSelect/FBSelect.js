
import './FBSelect.css'
function FBSelect({data}) {
  return (
    <>
     <select >
         { data.map( opt => 
                <option> { opt } </option>
                 )}
     </select>
   
    </>
  );
}
export default FBSelect;