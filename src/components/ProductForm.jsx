import { useState } from "react";


function ProductForm() {

  const [name, setName] = useState('') 
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
  
    const product= {
      name,
      price: Number(price),
      image,
      description
    };

    alert(JSON.stringify(product,null,1))
  };





  return (
    <form className="post-form" onSubmit={handleSubmit}>
   
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Enter name here"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            value={image}
            placeholder="Enter image url here"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            placeholder="Enter price here"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            value={description}
            placeholder="Enter description here"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" >Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
