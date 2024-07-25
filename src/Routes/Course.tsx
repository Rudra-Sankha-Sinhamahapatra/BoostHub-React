import Footer from "../components/Footer";
import Nav from "../components/Nav";
import  ViewCourseDetails  from "../components/ViewCourseDetails";
import { Socials } from "../socials";


export default function  ViewCourseDetailsRoute(){
    return(
        <>
        <div>
            <Nav/>
            <ViewCourseDetails/>
            <Footer className="bg-purple-500 text-white" owner="BoostHub@2024" socials={Socials}/>
        </div>
        </>
    )
}