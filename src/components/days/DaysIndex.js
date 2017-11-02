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
      // .then(res => console.log(res))
      .then(res => this.setState({ days: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return(
      <section className="DaysIndex">
        <div className="Days">
          <h3> Your Logged Days</h3>
          {this.state.days.map(day =>
            <div key={day.id}>
              <Link to={ `/days/${day.date}` } className="card">{day.date}</Link>
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
