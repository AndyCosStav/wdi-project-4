import React from 'react';


function FoodsForm({ handleSubmit, handleChange, exercise, errors }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">

      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className={errors.meal ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="meal">Meal Time</label>
          <input
            type="text"
            className="form-control"
            id="meal"
            name="meal"
            value={exercise.meal}
            onChange={handleChange}
          />
          {errors.meal && <small className="has-error">{errors.meal}</small>}
        </div>
        <div className={errors.item ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="item">Item</label>
          <input
            type="text"
            className="form-control"
            id="item"
            name="item"
            value={exercise.item}
            onChange={handleChange}
          />
          {errors.item && <small className="has-error">{errors.item}</small>}
        </div>
        <div className={errors.calories ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="calories">Calories (kCal)</label>
          <input
            type="text"
            className="form-control"
            id="calories"
            name="calories"
            value={exercise.sets}
            onChange={handleChange}
          />
          {errors.fat && <small className="has-error">{errors.protein}</small>}
        </div>
        <div className={errors.protein ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="protein">Protein (g)</label>
          <input
            type="text"
            className="form-control"
            id="protein"
            name="protein"
            value={exercise.sets}
            onChange={handleChange}
          />
          {errors.carbs && <small className="has-error">{errors.carbs}</small>}
        </div>
        <div className={errors.carbs ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="carbs">carbs (g)</label>
          <input
            type="text"
            className="form-control"
            id="carbs"
            name="carbs"
            value={exercise.sets}
            onChange={handleChange}
          />
          {errors.carbs && <small className="has-error">{errors.carbs}</small>}
        </div>
        <div className={errors.fat ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="fat">Fat (g)</label>
          <input
            type="text"
            className="form-control"
            id="fat"
            name="fat"
            value={exercise.sets}
            onChange={handleChange}
          />
          {errors.fat && <small className="has-error">{errors.fat}</small>}
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default FoodsForm;
