import  Info  from "../components/Info";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Socials } from "../socials";

export default function InfoRoute(){
  
 
    return(
        <>
        <Nav/>
      <Info/>
      <Footer className="bg-purple-500 text-white" owner="BoostHub@2024" socials={Socials}/>
        </>
    )
}