import React, { Component } from 'react'
import style from "./ContactForm.module.css"
import { categories } from '../data/categories'

export class ContactForm extends Component {
  render() {
    return (
      <div className='container'>
        <div className={style['form']}>
          <div className={style['fullname']}>
            <label htmlFor="name" className={style['input__label']}>
              <span className={style['name__span']}>FirstName</span>
              <input className={style['input__name']} type="name"required />
            </label>
            <label htmlFor="name" className={style['input__label']}>
              <span className={style['name__span']}>LastName</span>
              <input className={style['input__name']} type="name" required />
            </label>
          </div>
          <div className={style['selectphone']}>
            <label htmlFor="phone" className={style['input__label']}>
              <span className={style['name__span']}>Phone</span>
              <input className={style['input__name']} type="number" required />
            </label>
            <label htmlFor="name" className={style['input__labelsection']}>
              <span className={style['name__span']}>Contact catigory</span>
              <select className={style['select__btn']} required>
                {categories.map((el) => (
                  <option className={style['option']} key={el} value={el}>{el}</option>
                ))}
              </select>
            </label>
          </div>
          <button className={style['add__btn']}>Add person</button>
        </div>
      </div>
    )
  }
}

export default ContactForm
