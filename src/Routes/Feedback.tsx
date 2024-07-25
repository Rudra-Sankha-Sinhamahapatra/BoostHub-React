import { AddFeedback } from "../components/AddFeedback";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Socials } from "../socials";

export default function AddFeedbackRoute(){
    return(
        <>
             <Nav/>
        <AddFeedback/>
        <Footer className="bg-purple-500 text-white" owner="BoostHub@2024" socials={Socials}/>
        </>
    )
}