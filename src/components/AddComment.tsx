import { BACKEND_URL } from "../conf";
import axios from "axios";
import  { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Button from "./Button";
import { useParams } from "react-router-dom";

interface Comment {
    id: number;
    courseId: number;
    comment: string;
    userId: number;
    user: {
        id: number;
        name: string;
    };
    createdAt: string;
    updatedAt: string;
}

const AddComment  = () => {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
   const params=useParams();
   const courseId=params.courseId;

    const fetchComments = useCallback(async () => {
        try {
            if (courseId) {
                const res = await axios.get(`${BACKEND_URL}/bh/v1/comment/${courseId}/comments`, {
                    withCredentials: true
                });
                setComments(res.data.comments);
            }
        } catch (error) {
            setError("Failed to fetch courses");
        }
    }, [courseId]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);


    const createComment = useCallback(async () => {
        if (comment.trim().length === 0) {
            toast.error("Comment cannot be empty");
            return;
        }
        try {
            const res = await axios.post(`${BACKEND_URL}/bh/v1/comment/create`, {
                courseId: Number(courseId),
                comment: comment
            }, {
                withCredentials: true,
            });
            if (res.status === 200) {
                toast.success("Commented Successfully");
                setComment("");
                fetchComments();
            }
        } catch (error) {
            toast.error("Failed to comment");
        }
    }, [comment, courseId, fetchComments]);


    if(error){
        return       <div className="dark:text-white dark:bg-black text-center flex justify-center pt-10">{error}</div>
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="dark:bg-black dark:text-white min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-5 text-2xl sm:text-3xl">Add Your Comment</div>
                <div className="flex flex-col w-full sm:w-4/5 lg:w-3/5 mx-auto gap-5">
                    <div className="">
                        <div className="">
                            <textarea
                                id="comment"
                                className="text-black border border-black w-full p-2 h-20"
                                value={comment}
                                placeholder="Write your comment(min 1 letter)"
                                onChange={(e) => {
                                    setComment(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button
                            className="text-white bg-violet-500 py-2 px-4 rounded-md mt-2 mb-4 hover:bg-violet-700"
                            content="Add Comment"
                            onClick={createComment}
                        />
                    </div>
                </div>
                {comments.length > 0 ? (
                    <div className="flex flex-col w-full sm:w-4/5 lg:w-3/5 mx-auto gap-5 mt-6">
                        <div className="text-xl mb-4 text-violet-500">
                            Comments
                        </div>
                        {comments.map((comm) => (
                            <div key={comm.id} className="p-4 mb-3 border border-gray-300 rounded-lg dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <div className="text-lg font-semibold">
                                        {comm.user ? comm.user.name : 'Anonymous'}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {new Date(comm.createdAt).toLocaleDateString()} {" "} {new Date(comm.createdAt).toLocaleTimeString()}
                                    </div>
                                </div>
                                <div className="mt-2 text-gray-800 dark:text-gray-300">{comm.comment}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col w-full sm:w-4/5 lg:w-3/5 mx-auto gap-5 mt-6">
                        <div className="text-xl mb-4 text-center">No Comments yet</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AddComment;
