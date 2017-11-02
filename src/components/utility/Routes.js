import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import ProtectedRoute from '../utility/ProtectedRoute';

import DaysIndex from '../days/DaysIndex';
import LandingPage from '../utility/LandingPage';
import FoodsNew from '../foods/FoodsNew';
// import FoodsEdit from  '../foods/FoodsEdit';
// import FoodsSearch from '../foods/FoodsSearch';
// import ExerciseNew from '../exercise/ExerciseNew';
// import ExerciseEdit from '../exercise/ExerciseEdit';
import DaysShow from '../days/DaysShow';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <ProtectedRoute exact path="/days" component={DaysIndex} />
      <ProtectedRoute path="/days/:date" component={DaysShow} />
      {/* <ProtectedRoute path="/search" component={FoodsSearch} /> */}
      <ProtectedRoute path="/foods/new" component={FoodsNew} />
      {/* <ProtectedRoute path="/days/:date/food/:id" component={FoodsEdit} /> */}
      {/* <ProtectedRoute path="/days/:date/exercise" component={ExerciseNew} /> */}
      {/* <ProtectedRoute path="/days/:date/exercise/:id" component={ExerciseEdit} />  */}
    </Switch>
  );
};

export default Routes;
