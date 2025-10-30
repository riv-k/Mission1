import React, { useState } from "react";
import styles from "./Body.module.css";
import axios from "axios";

const MainContent = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState("");

  const API_URI = import.meta.env.VITE_API_URI;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); //real file
      setImage(URL.createObjectURL(file)); //for preview
    }
  };

  const handleIdentify = async () => {
    if (!imageFile) return;

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(`${API_URI}/azure`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": `${API_KEY}`,
        },
      });

      setResult(res.data);
    } catch (error) {
      console.error("Error identifying vehicle:", error);
      setResult("Error identifying vehicle");
    }
  };

  return (
    <main className={styles.main}>
      <h1>Calculate your Insurance Premium Today!</h1>
      <p>
        Upload a photo of your car and let our AI identify its type to help
        estimate your insurance premium.
      </p>

      <div className={styles.uploadBox}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className={styles.fileInput}
        />
        {image && <img src={image} alt="Uploaded" className={styles.preview} />}
      </div>

      {image && (
        <button onClick={handleIdentify} className={styles.button}>
          Identify Vehicle
        </button>
      )}

      {result && (
        <div className={styles.result}>
          <h2>Predictions:</h2>
          <ul>
            {result.predictions.map((pred, idx) => (
              <li key={idx}>
                {pred.tagName} ({(pred.probability * 100).toFixed(1)}%)
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default MainContent;
