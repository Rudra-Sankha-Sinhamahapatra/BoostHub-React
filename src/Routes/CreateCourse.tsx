import { CreateCourse } from "../components/CreateCourse";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Socials } from "../socials";






export default function CreateCourseRoute(){
  
 
    return(
        <>
        <Nav/>
       <CreateCourse/>
       <Footer className="bg-purple-500 text-white" owner="BoostHub@2024" socials={Socials}/>
        </>
    )
}