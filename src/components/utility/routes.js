import React from 'react';
import { Switch  } from 'react-router-dom';
import ProtectedRoute from '../utility/ProtectedRoute';

import FoodsNew from '../components/foods/FoodsNew';
import FoodsEdit from  '../components/foods/FoodsEdit';
import FoodsSearch from '../components/foods/FoodsSearch';
import ExerciseNew from '../components/exercise/ExerciseNew';
import ExerciseEdit from '../components/exercise/ExerciseEdit';
import DaysIndex from '../components/days/DaysIndex';
import DaysShow from '../components/days/DaysShow';

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={DaysIndex} />
      <ProtectedRoute path="/days/:date" component={DaysShow} />
      <ProtectedRoute path="/fatsecret" component={FoodsSearch} />
      <ProtectedRoute path="/searchFood" component={FoodsNew} />
      <ProtectedRoute path="/days/:date/food/:id" component={FoodsEdit} />
      <ProtectedRoute path="/days/:date/exercise" component={ExerciseNew} />
      <ProtectedRoute path="/days/:date/exercise/:id" component={ExerciseEdit} />
    </Switch>
  );
};

export default Routes;
