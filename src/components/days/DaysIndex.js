import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

import '../../scss/components/days/DaysIndex.scss';

class DaysIndex extends React.Component {

  state = {
    days: []
  }

  componentDidMount() {
    // get all the days
    Axios.get('/api/days', {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ days: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <section className="DaysIndex">
        <div className="Days">
          {this.state.days.map(day =>
            <div key={day.id}>
              <p>{day.date}</p>
              {/* Add more data -- totals etc. */}
            </div>
          )}
          <Link to="/foods/new"> Add New food </Link>
        </div>
      </section>
    );
  }

}




export default DaysIndex;
