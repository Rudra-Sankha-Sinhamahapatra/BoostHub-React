
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Button from "./Button";
import { BACKEND_URL } from "../conf";
import Cookies from "universal-cookie";

const Nav: React.FC = () => {
    const navigate = useNavigate();


    const homeHandler = useCallback(() => {
        navigate(`/home`);
    }, [navigate]);

    const createHandler = useCallback(() => {
        navigate(`/home/create`);
    }, [navigate]);

    const myCoursesHandler = useCallback(() => {
        navigate(`/home/mycourse`);
    }, [navigate]);

    const infoHandler = useCallback(() => {
        navigate(`/home/info`);
    }, [navigate]);

    const logout = useCallback(async () => {
        try {
            const res = await axios.post(`${BACKEND_URL}/bh/v1/user/logout`, {}, {
                withCredentials: true,
            });

            if (res.status === 200) {
                const cookies=new Cookies();
                toast.success("Logged out Successfully!");
                cookies.remove('token');

                setTimeout(() => {
                    navigate('/');
                }, 3200);
            } else {
                toast.error("Logout Failed");
            }
        } catch (error) {
            toast.error("Logout Failed", {
                autoClose: 2000
            });
        }
    }, [navigate]);

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                closeOnClick
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <div className="sm:grid flex flex-col justify-center items-center sm:grid-cols-4 md:flex md:flex-row md:justify-center md:gap-5 gap-3 dark:bg-black text-violet-500 pb-8 pl-3 pt-2">
                <div className="cursor-pointer hover:text-violet-700" onClick={myCoursesHandler}>My Courses</div>
                <div className="cursor-pointer hover:text-violet-700" onClick={homeHandler}>Home</div>
                <div className="cursor-pointer hover:text-violet-700" onClick={createHandler}>Create Course</div>
                <div className="cursor-pointer hover:text-violet-700" onClick={infoHandler}>Rules</div>
                <Button content="Logout" className="text-white bg-violet-500 py-2 px-3 rounded-md hover:bg-violet-700" onClick={logout} />
            </div>
        </>
    );
}

export default Nav;
