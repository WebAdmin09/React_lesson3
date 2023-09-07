import React, { Component, } from 'react';
import style from './formPage.module.css'
import { Fragment } from 'react';
import ContactForm from '../components/form/ContactForm';
import Navbar from '../components/navbar/navbar';
import ContactFilter from '../components/filter/ContactFilter';
import { Form, FormControl, Tabs, Tab } from 'react-bootstrap';
import ContactItem from '../components/contactitem/ContactItem';

export class FormPage extends Component {
  state = {
    persons: [
      {
        id: 0,
        lastName: 'John',
        firstName: 'Brown',
        phone: '4161616130',
        category: "family",
        favourite: false,
      },
      {
        id: 2,
        lastName: 'Jackie',
        firstName: 'Chan',
        phone: '545550',
        category: "friend",
        favourite: false,
      },
    ],
    person: {
      name: "",
      date: "",
      category: "family",
    },
    search: "",
    category: "all",
  };
  render() {
    let { persons, search, category, person } = this.state;
    persons = persons.filter((person) => person.lastName.toLowerCase().includes(search));


    if (category !== "all") {
      persons = person.filter((person) => person.category === category);
    }
    const doneFavourite = persons.filter((person) => person.done);
    const undoneFavourite = persons.filter((person) => !person.done);
    return (
      <Fragment>
        <Navbar />
        <ContactForm />
        <ContactFilter />
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className={style['search']}
          />
        </Form>
        <div className={style['tabs__wrapper']}>
        <Tabs defaultActiveKey="all" variant="pills" className='my-3' justify>
          <Tab eventKey="all" title="All">
            {persons.map((person, i) => (
              <ContactItem doneTodo={doneFavourite} key={i} no={i + 1} {...person} />
            ))}
          </Tab>
          <Tab eventKey="favourite" title="favourite">
            {undoneFavourite.map((person, i) => (
              <ContactItem doneTodo={doneFavourite} key={i} no={i + 1} {...person} />
            ))}
          </Tab>
        </Tabs>
        </div>
      </Fragment>
    )
  }
}

export default FormPage
