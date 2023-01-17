import { useState } from "react";

const Form = ( )=>{
    const [name,setName]=useState("")
    const [qte,setQte]=useState("")
    const [err,setErr]=useState("")
    const [prix,setPrix]=useState(0)

    const [page,setPage]=useState(1)
    const Achat=(e)=>{
        e.preventDefault();
        console.log(name)
        if (qte=="" || prix==0){
            setErr("qte ou prix vide")
            
        }
        else {
            setPage(2)
setErr("")
        }
        


    }
    return(
        <div>
        {/*&& =>if without else*/}
        {err!="" && err}

        {
page==1?

        <form onSubmit={Achat}>
        <input type="text" placeholder="nom produit" onChange={(e)=>{setName(e.target.value)}}/><br/>
        <input type="text" placeholder="qte produit" onChange={(e)=>{setQte(e.target.value)}}/><br/>
        <input type="text" placeholder="prix produit" onChange={(e)=>{setPrix(e.target.value)}}/><br/>
        <br/>
        <button type="submit" bgcolor="red">Acheter</button>
        </form>
        :
        <div>votre facture est:
        {name}:
        {qte*prix}DT
        <button onClick={()=>setPage(1)}>reAcheter</button>
        </div>
    }
        </div>
    )
}
export default Form;