import React from 'react';

const Form = () => {
  <div>
    <form action="">
      <input type="text" id="title" name="title" placeholder="Book Title" />
      <select name="author" id="author">
        <option value="joyce">Joyce</option>
        <option value="meyer">Meyer</option>
        <option value="myles">Myles</option>
        <option value="munroe">Munroe</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </div>;
};

export default Form;
