import React from 'react';


function ExerciseForm({ handleSubmit, handleChange, exercise, errors }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">

      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className={errors.name ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="name">Name of Exercise</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={exercise.name}
            onChange={handleChange}
          />
          {errors.name && <small className="has-error">{errors.name}</small>}
        </div>
        <div className={errors.reps ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="reps">Reps</label>
          <input
            type="text"
            className="form-control"
            id="reps"
            name="reps"
            value={exercise.reps}
            onChange={handleChange}
          />
          {errors.reps && <small className="has-error">{errors.reps}</small>}
        </div>
        <div className={errors.sets ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="sets">Sets</label>
          <input
            type="text"
            className="form-control"
            id="sets"
            name="sets"
            value={exercise.sets}
            onChange={handleChange}
          />
          {errors.category && <small className="has-error">{errors.weight}</small>}
        </div>
        <div className={errors.weight ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="weight">Weight(kg)</label>
          <input
            type="text"
            className="form-control"
            id="weight"
            name="weight"
            value={exercise.sets}
            onChange={handleChange}
          />
          {errors.weight && <small className="has-error">{errors.weight}</small>}
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default ExerciseForm;
