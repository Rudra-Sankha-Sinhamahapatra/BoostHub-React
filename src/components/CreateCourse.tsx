import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button';
import { BACKEND_URL } from '../conf'; 

export function CreateCourse() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();

  const create = async () => {
    try {
      await axios.post(
        `${BACKEND_URL}/bh/v1/course/create`,
        { title, description, content },
        { withCredentials: true }
      );
      toast.success('Course created successfully!');
      setTimeout(() => {
        navigate('/home/mycourse');
      }, 4000);
    } catch (error) {
      toast.error('Failed to create course.');
    }
  };

  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-5 text-2xl sm:text-3xl">Create Your Course</div>
        <div className="flex flex-col w-full sm:w-4/5 lg:w-3/5 mx-auto gap-5">
          <div className="">
            <label htmlFor="title" className="ml-3 text-violet-500 mb-4 block">
              Title
            </label>
            <div className="">
              <textarea
                id="title"
                className="text-black border border-black w-full p-2 h-14"
                value={title}
                placeholder="Write the Title (Min 3 letters)"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="content" className="ml-3 text-violet-500 mb-4 block">
              Content
            </label>
            <div className="">
              <textarea
                id="content"
                className="text-black border border-black w-full p-2 h-20"
                value={content}
                placeholder="Write the Content (min 3 letters)"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="description" className="ml-3 text-violet-500 mb-4 block">
              Description
            </label>
            <div className="">
              <textarea
                id="description"
                className="text-black border border-black w-full p-2 h-52"
                value={description}
                placeholder="Write the Description (min 3 letters)"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              className="text-white bg-violet-500 py-2 px-4 rounded-md mt-2 mb-4 hover:bg-violet-700"
              content="Create"
              onClick={create}
            />
          </div>
        </div>
      </div>
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
    </>
  );
}
