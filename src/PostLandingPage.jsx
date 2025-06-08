import React, { useState } from 'react';

function PostLandingPage() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSubmitted(false);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && description.trim() !== '') {
      setSubmitted(true);
    } else {
      alert('Please select an image and enter a description.');
    }
  };

  return (
    <div>
      <h1>Admin Post Landing Page</h1>
      <p>Welcome, admin! Manage your posts here.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Upload Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea value={description} onChange={handleDescriptionChange} rows={4} cols={50} />
          </label>
        </div>
        <button type="submit">Submit Post</button>
      </form>
      {submitted && (
        <div>
          <h2>Uploaded Post</h2>
          <img src={image} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} />
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default PostLandingPage;
