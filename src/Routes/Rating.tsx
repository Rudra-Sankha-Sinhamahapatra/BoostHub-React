import  AddRating  from "../components/AddRating";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Socials } from "../socials";

export default function AddRatingRoute(){
    return(
        <>
        <Nav/>
        <AddRating/>
        <Footer className="bg-purple-500 text-white" owner="BoostHub@2024" socials={Socials}/>
        </>
    )
}