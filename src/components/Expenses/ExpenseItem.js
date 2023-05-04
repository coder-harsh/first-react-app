import React, { useState } from "react";  //useState is a hook. Hook start  with use
import './ExpenseDate.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />  {/*jahan hume 2 tag k bich kuchh pass nahi karna waha single tag use karenge */}
            <div className='expense-item__description'>
                <h2 id="head">
                    {props.title}
                </h2>
                <div className='expense-item__price'>
                    ₹{props.amount}
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;