import React from "react";
import './ExpenseItem.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-us', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-us', { day: '2-digit' });
    return (
        <div className='expense-date'>
            <div>{month}</div>
            <div>{year}</div>
            <div id='expense-day'>{day}</div>
        </div>
    )
}
export default ExpenseDate;