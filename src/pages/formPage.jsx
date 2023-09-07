import React, { Component,} from 'react';
import style from './formPage.module.css'
import { Fragment } from 'react';
import ContactForm from '../components/form/ContactForm';
import Navbar from '../components/navbar/navbar';
import ContactFilter from '../components/filter/ContactFilter';
import { Form, FormControl, } from 'react-bootstrap';
// import ContactItem from '../components/contactitem/ContactItem';

export class FormPage extends Component {
  render() {
  
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
        {/* <Tabs defaultActiveKey="all" variant="pills" className="my-3" justify>
          <Tab eventKey="all" title="All todos">
            {todos.map((todo, i) => (
              <ContactItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
          <Tab eventKey="undone" title="Undone todos">
            {undoneTodos.map((todo, i) => (
              <ContactItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
          <Tab eventKey="done" title="Done todos">
            {doneTodos.map((todo, i) => (
              <ContactItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
            ))}
          </Tab>
        </Tabs> */}
      </Fragment>
    )
  }
}

export default FormPage
