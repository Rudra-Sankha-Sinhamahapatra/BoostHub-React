import { useNavigate } from 'react-router-dom'; // Use React Router for navigation
import Button from './Button'; // Import your Button component

const SignInStarted = () => {
  const navigate = useNavigate(); // Create navigate function

  return (
    <div className="flex justify-center">
      <div className="dark:text-white mt-2">
        Explore More
        <div>
          {/* Additional content can be added here */}
        </div>
        <Button
          content="Get Started"
          className="bg-purple-500 text-white py-2 px-3 rounded-md mt-2 hover:bg-purple-800"
          onClick={() => {
            navigate('/login'); // Navigate to /login route
          }}
        />
      </div>
    </div>
  );
};

export default SignInStarted;
