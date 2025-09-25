import { useNavigate } from "react-router-dom";

export default function MovieIntro() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden">
    

   
      <motion.button
        onClick={() => navigate("/interview")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="mt-12 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold"
      >
        Start Interview
      </motion.button>
    </div>
  );
}