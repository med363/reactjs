import Carousel from "./JumiaComponents/Carousel/Carousel";
import Category from "./JumiaComponents/Category.js/Category";
import CategoryCard from "./JumiaComponents/CategoryCard/CategoryCard";
import Header from "./JumiaComponents/Header/Header";


import './style.css'
export default function App(){
    return(
        <div className="app">
            <Header />

            <div className="bannerSection">
                <Category />
                <Carousel />
            </div>

            <div className="Categories-cards">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
            
        </div>
    )
}