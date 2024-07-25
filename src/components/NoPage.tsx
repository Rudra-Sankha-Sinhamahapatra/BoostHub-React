import { useNavigate } from 'react-router-dom';

interface NoPageProps {
  label: string;
  choice: string;
  route: string;
}

const NoPage = ({ label, choice, route }: NoPageProps) => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen  dark:bg-black dark:text-white'>
    <div className="flex justify-center pt-10">
      {label}{' '}
      <span
        className="text-violet-500 cursor-pointer ml-2"
        onClick={() => {
          navigate(`/${route}`);
        }}
      >
        {choice}
      </span>
    </div>
    </div>
  );
};

export default NoPage;
