import React, { useState } from "react";
import FancyInput from "./ui/FancyInput";

interface AddNewFAQProps {
  setIsNewFaq: (val: boolean) => void;
  setIsNewFaqOnHomePage: (val: boolean) => void;
}

const AddNewFAQ: React.FC<AddNewFAQProps> = ({
  setIsNewFaq,
  setIsNewFaqOnHomePage,
}) => {
  const [platform, setPlatform] = useState("");
  const [title, setTitle] = useState("");
  const [homepage, setHomepage] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const isFormFilled =
    platform !== "" ||
    title !== "" ||
    homepage === true ||
    question !== "" ||
    answer !== "";

  const buttonText = isFormFilled ? "Clear All" : "Back";

  const clearForm = () => {
    setPlatform("");
    setTitle("");
    setHomepage(false);
    setQuestion("");
    setAnswer("");
  };

  const handleButtonClick = () => {
    if (isFormFilled) {
      // CLEAR ALL CASE
      clearForm();
      console.log("Form cleared");
    } else {
      setIsNewFaq(false);
    }
  };

  const handleSubmit = () => {
    if (!isFormFilled) return;
    if (homepage) {
      console.log(homepage);
      setIsNewFaqOnHomePage(true);
    }
    setIsNewFaq(false);
    clearForm();
    console.log({
      platform,
      title,
      homepage,
      question,
      answer,
    });
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm mt-4">
      <h2 className="text-xl font-semibold mb-6">Add New FAQ</h2>

      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FancyInput
          label="Select Platform *"
          type="select"
          placeholder="Select a Platform"
          value={platform}
          onChange={setPlatform}
          options={["Consumer Web", "Admin Web", "Mobile App"]}
        />

        <FancyInput
          label="Select Title *"
          placeholder="Enter Title"
          value={title}
          onChange={setTitle}
        />
      </div>

      {/* Homepage Toggle */}
      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={() => setHomepage(!homepage)}
          className={`h-4 w-4 rounded-full border-2 flex items-center justify-center transition
            ${homepage ? "bg-green-800 border-green-800" : "border-green-800"}
          `}
        >
          {homepage && <div className="h-2 w-2 bg-white rounded-full" />}
        </button>

        <span className="text-gray-800 text-sm">Add to homepage as well</span>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Question */}
        <div className="w-full relative">
          <div className="absolute -top-3 left-4 px-1 bg-white z-10 flex items-center gap-1">
            <label className="font-semibold text-sm text-black">
              Add Question
            </label>
            <span className="text-red-500">*</span>
          </div>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-32 border-2 border-[#c0c0cdc4] rounded-2xl px-4 py-2 text-gray-700 outline-none bg-transparent resize-none"
            placeholder="Write your question…"
          />
        </div>

        {/* Answer */}
        <div className="w-full relative">
          <div className="absolute -top-3 left-4 px-1 bg-white z-10 flex items-center gap-1">
            <label className="font-semibold text-sm text-black">
              Add Answer
            </label>
            <span className="text-red-500">*</span>
          </div>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full h-32 border-2 border-[#c0c0cdc4] rounded-2xl px-4 py-2 text-gray-700 outline-none bg-transparent resize-none"
            placeholder="Write the answer…"
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-end gap-4 mt-8">
        <button
          onClick={handleButtonClick}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg"
        >
          {buttonText}
        </button>

        <button
          onClick={handleSubmit}
          className="px-8 py-2 bg-green-800 text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddNewFAQ;
