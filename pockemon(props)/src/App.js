import { type } from '@testing-library/user-event/dist/type';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardpockemon from './component/Cardpockemon';


function App() {
  const Pockemons = [{
      avatar:"Abra.webp",
       name:"Abra",
       power:"063",
       type:["Attention"],
       talent:"psy"
  },
  {
    avatar:"Arbok.webp",
     name:"Arbok",
     power:"063",
     type:["Mue","Intimidation"],
     talent:"psy"
},{
  avatar:"Beedrill.webp",
   name:"Abra",
   power:"015",
   type:["PUG","POISON"],
   talent:"Sniper"
},{
  avatar:"Bulbasaur.webp",
   name:"Bulbasaur",
   power:"001",
   type:["Grass","Poison"],
   talent:"overgrower"
},{
  avatar:"Butterfree.webp",
   name:"Butterfree",
   power:"012",
   type:["bug","flying"],
   talent:"	Butterfly Pokémon"
},{
  avatar:"Caterpie.webp",
   name:"Caterpie",
   power:"010",
   type:["BUG"],
   talent:"Worm Pokémon"

}]
  return (
    <div className="App">
    <Cardpockemon details={Pockemons[0]} />
    <Cardpockemon details={Pockemons[1]} />
    <Cardpockemon details={Pockemons[2]} />
    <Cardpockemon details={Pockemons[3]} />
    <Cardpockemon details={Pockemons[4]} />
    <Cardpockemon details={Pockemons[5]} />

    </div>
  );

}

export default App;
