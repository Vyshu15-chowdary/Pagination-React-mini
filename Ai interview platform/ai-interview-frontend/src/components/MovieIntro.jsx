import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aiAnimation from "../assets/ai-brain.json";
export default function MovieIntro() {
 return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="text-6xl font-extrabold">
        AI Interview Prep
      </motion.h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
        <Lottie animationData={aiAnimation} loop={true} />
      </motion.div>
    </div>
 )
}