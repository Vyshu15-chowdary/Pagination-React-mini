import React,{useState}from "react";
import{motion} from "framer-motion";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/ai-brain.json";
import{generateQuestion,analyzeAnswer} from"../api";

export default function Interview(){
    const [category,setCategory] = useState("Technical");
    const [topic,setTopic]=useState("React");
    const [question,setQuestion] = useState("");
    const [answer,setAnswer] = useState("");
    const [analysis,setAnalysis] = useState("");
    const [loading,setLoading] = useState(false);
  
    // Fetch dynamic question
  const handleGenerateQuestion = async () => {
    setLoading(true);
    try {
      const res = await generateQuestion(category, topic);
      setQuestion(res.data.question);
      setAnswer("");
      setAnalysis("");
    } catch (err) {
      console.error(err);
      alert("Failed to generate question");
    }
    setLoading(false);
}
 // Submit answer and get AI analysis
  const handleSubmitAnswer = async () => {
    if (!answer) return;
    setLoading(true);
    try {
      const res = await analyzeAnswer(answer, category, topic);
      setAnalysis(res.data.analysis);
    } catch (err) {
      console.error(err);
      alert("Failed to analyze answer");
    }
    setLoading(false);
  };
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white p-4">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-bold mb-6"
      >
        AI Interview Simulator
      </motion.h1>

      {/* Category & Topic */}
      <div className="flex gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded bg-gray-800"
        >
          <option value="Technical">Technical</option>
          <option value="HR">HR</option>
        </select>
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic"
          className="p-2 rounded bg-gray-800"
        />
        <button
          onClick={handleGenerateQuestion}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
        >
          Generate Question
        </button>
      </div>

      {/* Question */}
      {question && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 p-4 bg-gray-800 rounded w-full max-w-xl"
        >
          <p>{question}</p>
        </motion.div>
      )}

      {/* Answer input */}
      {question && (
        <div className="flex flex-col gap-2 w-full max-w-xl mb-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            rows={4}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleSubmitAnswer}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-500"
          >
            Submit Answer
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="w-32 mb-4">
          <Lottie animationData={loaderAnimation} loop={true} />
        </div>
      )}

      {/* Analysis */}
      {analysis && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-gray-800 rounded w-full max-w-xl"
        >
          <h2 className="text-xl font-semibold mb-2">AI Feedback:</h2>
          <p>{analysis}</p>
        </motion.div>
      )}
    </div>
  );

}