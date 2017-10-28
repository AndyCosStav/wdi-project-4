import React from 'react';


const FoodsSearch = ({handleChange, handleSubmit, food }) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={handleChange}
        value={food}
      />
      <button>submit</button>
    </form>
  );




};






export default FoodsSearch;
