import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chat = () => {
  const [genAI] = useState(new GoogleGenerativeAI("AIzaSyDF8N_x2as_psMF3qwEKMU8qqXD57_uIno"));
  const [fileInput, setFileInput] = useState(null);

  // Function to convert file to GenerativeAI.Part object
  const fileToGenerativePart = async (file) => {
    try {
      const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
      });
      const data = await base64EncodedDataPromise;
      return { inlineData: { data, mimeType: file.type } };
    } catch (error) {
      console.error("Error converting file:", error);
      return null;
    }
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileInput(files[0]);
    }
  };

  const run = async () => {
    // For text-and-images input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "What's different between these pictures?";

    const imageParts = await fileToGenerativePart(fileInput);

    const result = await model.generateContent([prompt, imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  };

  // This useEffect hook ensures that the run function is called when the component mounts
  useEffect(() => {
    run();
  }, []);

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
    </div>
  );
};

export default Chat;
