import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBasketShopping, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'


export default function Header(){
    return(
        <>
            <div className='header'>
                <h1 className='logo'>JUMIA</h1>

                <div className='searchBox'>
                    <form>
                        <input type={"search"}  placeholder="Cherchez un produit, une marque ou une catégorie ..." />
                        <button> Rechercher </button>

                    </form>
                </div>


                <div className='navigation'>
                    <a> <FontAwesomeIcon icon={faUser} /> Se connecter</a>
                    <a> <FontAwesomeIcon icon={faInfoCircle} /> Aide</a>
                    <a> <FontAwesomeIcon icon={faBasketShopping} /> Panier </a>
                </div>

            </div>
        </>
    )
}