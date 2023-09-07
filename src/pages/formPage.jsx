import React, { Component } from 'react';
import style from './formPage.module.css';
import ContactForm from '../components/form/ContactForm';
import Navbar from '../components/navbar/navbar';
import ContactFilter from '../components/filter/ContactFilter';
import { Form, Tabs, Tab } from 'react-bootstrap';
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
      lastName: 'John',
      date: "",
      category: "family",
    },
    search: "",
    category: "all",
  };

  render() {
    let { persons, search, category, person } = this.state;

    persons = persons.filter((e) =>
      e.lastName.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "all") {
      persons = persons.filter((e) => e.category === category);
    }

    const searching = (e) => {
      this.setState({ search: e.target.value.trim().toLowerCase() });
    };

    const categorysort = (e) => {
      this.setState({ category: e.target.value });
    };

    const submit = (e) => {
      e.preventDefault();
      let newpersons = [...persons, { ...person, }];
      this.setState({
        persons: newpersons,
        person: { lastName: 'John', category: "family" },
      });
    };

    const handleperson = (e) => {
      let newperson = { ...person, [e.target.id]: e.target.value };
      this.setState({ person: newperson });
    };

    // const doneFavourite = persons.filter((e) => e.favourite);
    const undoneFavourite = persons.filter((e) => !e.favourite);

    return (
      <div>
        <Navbar />
        <ContactForm person={person} submit={submit} handleperson={handleperson} />
        <ContactFilter
          categorysort={categorysort}
          category={category}
          search={search}
          searching={searching}
        />
        <Form inline></Form>
        <div className={style['tabs__wrapper']}>
          <Tabs defaultActiveKey="all" variant="pills" className='my-3' justify>
            <Tab className={style['tab']} eventKey="all" title="All">
              {persons.map((person, i) => (
                <ContactItem key={i} no={i + 1} {...person} />
              ))}
            </Tab>
            <Tab className={style['tab']} eventKey="favourite" title="Favourite">
              {undoneFavourite.map((person, i) => (
                <ContactItem key={i} no={i + 1} {...person} />
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default FormPage;
