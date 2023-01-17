import FBNav from "../Components/FBNav/FBNav";
import FBPost from "../Components/FBPost/FBPost";
import FBRightSidebar from "../Components/FBRightSidebar/FBRightSidebar";
import FBSidebar from "../Components/FBSidebar/FBSidebar";
import FBStory from "../Components/FBStory/FBStory";
import FBUserPost from "../Components/FBUserPost/FBUserPost";
import './home.css'
function Home(){
    return(
        <>
        <FBNav />

        <div className="home_content">
            <FBSidebar />
            <div className="home_main_content">
                <div className="stories">
                    <FBStory />
                    <FBStory />
                    <FBStory />
                    <FBStory />
                    <FBStory />
                    <FBStory />
                </div>
               

                <FBPost />
                <FBUserPost />
                <FBUserPost />
                <FBUserPost />
                <FBUserPost />
                
                
            </div>
            
           
           
         
            <FBRightSidebar />

        </div>
        </>
    )
}
export default Home;