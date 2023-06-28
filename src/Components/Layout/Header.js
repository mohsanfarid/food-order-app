import React from "react";
import foodImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1 >React Food Ordering App</h1>
       <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={foodImage} alt="Table full of food!"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
