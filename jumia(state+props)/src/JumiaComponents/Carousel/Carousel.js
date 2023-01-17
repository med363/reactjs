

import { useEffect } from 'react';
import { useState } from 'react';
import './Carousel.css'

export default function Carousel(){
    const [compteur , setCompteur] = useState(0);
    function changeImage(indice){
        if ( indice <= 3 ){
            //console.log(indice);
            setCurrentImage(images[indice].src)
            setCompteur(indice+1);
            //console.log(compteur);
        }else{
            console.log(indice);
            setCompteur(0); 
        }
        
    }
    useEffect( () => {
        setTimeout(()=>changeImage(compteur), 5000);
       
    } ,[compteur])
    const images = [
            {
                id : '1',
                src : "https://tn.jumia.is/cms/0000_Refresh2022/Octobre/W40/UND/Hightech/TN-Automne_Hightech_Slider.jpg"
            },
            {
                id : '2',
                src : "https://tn.jumia.is/cms/0000_Refresh2022/Octobre/W40/UND/ModeFemme/TN-Automne_ModeFemme_Slider.jpg"
            }
            ,
            {
                id : '3',
                src : "https://tn.jumia.is/cms/0000_Refresh2022/Octobre/W40/UND/ModeHomme/TN-Automne_ModeHomme_Slider.jpg"
            },
            {
                id : '4',
                src : "https://tn.jumia.is/cms/0000_Refresh2022/Septembre/W39/UND/Mouled/TN-SemaineSuperette_Mouled_Slider.jpg"
            }
    ];

   const [currentImage,setCurrentImage] = useState("https://tn.jumia.is/cms/0000_Refresh2022/Octobre/W40/UND/ModeFemme/TN-Automne_ModeFemme_Slider.jpg")

    return(
        <>
      
            <div className='carousel'>
                    <img src={currentImage} />
            </div>
            
        </>
    )
}