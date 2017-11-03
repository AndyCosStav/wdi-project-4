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
      <section className="container DaysIndex">
        <div className="Days">
          <h3> Your Logged Days</h3>
          <Link to="/foods/new" className="topOfBox"> New Entry </Link>
          <div className="row">
            {this.state.days.map(day =>
              <div key={day.id} className="col-md-4 card">
                <div className="card-body indexDay">
                  <Link to={ `/days/${day.date}` } >{day.date}</Link>
                </div>
              </div>

            )}
          </div>
        </div>

      </section>
    );
  }

}




export default DaysIndex;
