import React from 'react';
import '../../scss/components/foods/FoodsSearch.scss';
class FoodsSearch extends React.Component {
  render() {
    console.log(this.props.foods);
    return (
      <div className="row all">
        <div className="row">
          {this.props.foods && this.props.foods.map((food, i) => {
            return (
              <div key={i} onClick={() => this.props.addFood(food)} className="col-md-4 col-sm-6 days-wrapper">
                <div className="result">
                  <div>
                    <h3 >{food.meal}</h3>
                    <h3>{food.name}</h3>
                    <p>{food.calories}kcal</p>
                    <p>Carbs = {food.carbs}g</p>
                    <p>Fat = {food.fat}g</p>
                    <p>Protein = {food.protein}g</p>
                    <p>Per{food.per}g</p>
                  </div>

                  <button className="btn btn-lg btn-primary">Add</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      // </div>
    );
  }

}






export default FoodsSearch;
