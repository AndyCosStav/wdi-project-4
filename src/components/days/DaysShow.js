import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class DaysShow extends React.Component {

    state = {
      foods: []

    }


    componentDidMount() {

      Axios.get('/api/days', {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
        .then(res => this.setState({ days: res.data }))
        .catch(err => console.log(err));
    }

    render() {
      return (
        <p>Show page</p>
      );
    }



}











export default DaysShow;
