import React from 'react';

const DaysForm = ({months, days, date }) => {
  return (
    <form>
      <input disabled type="Number" name="year" value={date.year} />
      <select
        name="month"
        value={date.month}
      >
        {months.map((month, i)=> {
          return (
            <option key={i}>{month}</option>
          );
        })}
      </select>

      <select
        name="day"
        value={date.day}
      >
        {days.map((day => {
          return (
            <option key={day}>{day}</option>
          );
        }))}
      </select>
      <button>New Entry</button>
    </form>
  );
};

export default DaysForm;
