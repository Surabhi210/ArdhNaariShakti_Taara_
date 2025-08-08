import React, { useContext, useState } from "react";
import "./create.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Context } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("https://taara-backend.onrender.com/upload", data);
      } catch (err) {
        console.error(err);
      }
    }

    try {
      await axios.post("https://taara-backend.onrender.com/posts", newPost);
      setSuccess(true);
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="newPost">
      <div className="create flexCenter">
        <form onSubmit={handleSubmit} className="form flexColStart">
          <h1 className="form-title">Create a New Post</h1>
          <h3 className="form-subtitle">Share your story with the world</h3>

          {submitted && <p className="submitted-msg">✅ Submitted!</p>}
          {success && <p className="success-msg">🎉 Post created successfully!</p>}

          <div className="inputfile flexCenter">
            <label htmlFor="fileInput">
              <IoIosAddCircleOutline /> Choose file
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <input
            type="text"
            placeholder="Enter a title..."
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Write your thoughts here..."
            onChange={(e) => setDesc(e.target.value)}
            required
          />

          <button className="button" type="submit">
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default Create;