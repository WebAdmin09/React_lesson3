import React, { Component } from 'react'
import { Form, InputGroup } from "react-bootstrap";
import { categories } from '../data/categories';
import style from './ContactFilter.module.css';

export class ContactFilter extends Component {
    render() {
        const { searching, search, catigorysort, category } = this.props;
        return (
            <InputGroup className="my-3">
                <Form.Control
                    className={style['search']}
                    value={search}
                    onChange={searching}
                    placeholder="Search person......."
                />
                <InputGroup.Text className={style['inputText']}>
                    <Form.Select value={category} onChange={catigorysort}>
                        <option value="all">All</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </Form.Select>
                </InputGroup.Text>
            </InputGroup>
        )
    }
}

export default ContactFilter
