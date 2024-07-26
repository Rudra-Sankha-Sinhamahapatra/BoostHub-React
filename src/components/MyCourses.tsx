
import { BACKEND_URL } from "../conf";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

interface Teacher {
  name: string;
  role: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  content: string;
  teacherId: number;
  teacher: Teacher;
  updatedAt: string;
  createdAt: string;
}

interface CoursesResponse {
  courses: Course[];
}

const MyCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCourses = async () => {
    try {
      const response = await axios.get<CoursesResponse>(`${BACKEND_URL}/bh/v1/user/courses`, {
        withCredentials: true,
      });
      setCourses(response.data.courses);
    } catch (error) {
      setError("Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="dark:text-white dark:bg-black text-center flex justify-center pt-10">
        Loading ...
      </div>
    );
  }

  if (error) {
    return (
      <div className="dark:text-white dark:bg-black text-center flex justify-center pt-10">
        Error Occurred: {error}
      </div>
    );
  }

  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      <div className="flex justify-center mb-5">My Courses</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg p-4 pr-1 border border-t-2 max-h-80"
            >
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-violet-500 max-h-10 overflow-hidden overflow-ellipsis">
                  {course.title}
                </h2>
                <p className="font-bold mt-2 text-violet-500">About</p>
                <p className="text-gray-600 mt-1 max-h-18 overflow-hidden overflow-ellipsis">
                  {course.description}
                </p>
                <p className="font-bold mt-2 text-violet-500">Content</p>
                <p className="text-gray-500 mt-1 max-h-12 w-full overflow-hidden overflow-ellipsis">
                  {course.content}
                </p>
              </div>
              <div className="mt-4">
                <Link to={`/home/course/${course.id}`}>
                  <Button
                    content="View Details"
                    className="bg-violet-500 text-white rounded px-3 py-1 hover:bg-violet-700"
                  />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center mt-6 md:relative md:-right-2/3 md:mr-24 lg:-right-full lg:ml-28 xl:ml-28">
            <p className="dark:text-white">No courses available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
