import { Socials } from "../socials"
import Courses from "./Courses"
import Footer from "./Footer"
import Nav from "./Nav"


export default function Home(){
 
    return(
        <>
        <div>
            <Nav/>
           <div>
            <Courses/>
           </div>
           <Footer className="bg-purple-500 text-white" owner="BoostHub@2024" socials={Socials}/>
        </div>
        </>
    )
}