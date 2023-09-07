import React, { Component } from 'react';
import style from "./ContactForm.module.css";
import { categories } from '../data/categories';

export class ContactForm extends Component {
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.props.submit} className={style['form']}>
          <div className={style['fullname']}>
            <label htmlFor="firstName" className={style['input__label']}>
              <span className={style['name__span']}>FirstName</span>
              <input id="firstName" name="firstName" className={style['input__name']} type="text" required />
            </label>
            <label htmlFor="lastName" className={style['input__label']}>
              <span className={style['name__span']}>LastName</span>
              <input id="lastName" name="lastName" className={style['input__name']} type="text" required />
            </label>
          </div>
          <div className={style['selectphone']}>
            <label htmlFor="phone" className={style['input__label']}>
              <span className={style['name__span']}>Phone</span>
              <input id="phone" name="phone" className={style['input__name']} type="number" required />
            </label>
            <label htmlFor="category" className={style['input__labelsection']}>
              <span className={style['name__span']}>Contact Category</span>
              <select id="category" name="category" className={style['select__btn']} required defaultValue="family">
                {categories.map((el) => (
                  <option className={style['option']} key={el} value={el}>{el}</option>
                ))}
              </select>
            </label>
          </div>
          <button type="submit" className={style['add__btn']}>Add person</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
