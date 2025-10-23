import React, { useState } from "react";
import styles from "./Body.module.css";

const MainContent = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleIdentify = () => {
    setResult("SUV"); // placeholder
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
          <h3>Detected Vehicle Type:</h3>
          <p>{result}</p>
        </div>
      )}
    </main>
  );
};

export default MainContent;
