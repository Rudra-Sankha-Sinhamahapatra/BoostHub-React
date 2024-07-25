import  AddComment  from "../components/AddComment";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Socials } from "../socials";


export default function AddCommentRoute(){
    return(
        <>
        <Nav/>
        <AddComment/>
        <Footer className="bg-purple-500 text-white" owner="BoostHub@2024" socials={Socials}/>
        </>
    )
}