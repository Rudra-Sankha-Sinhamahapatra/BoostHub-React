import Footer from "../components/Footer";
import  MyCourses from "../components/MyCourses";
import Nav from "../components/Nav";
import { Socials } from "../socials";

export default function MyCoursesRoute(){
  
 
    return(
        <>
        <Nav/>
       <MyCourses/>
       <Footer className="bg-purple-500 text-white" owner="BoostHub@2024" socials={Socials}/>
        </>
    )
}