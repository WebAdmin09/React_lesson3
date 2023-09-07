import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export class ContactItem extends Component {
    render() {
        const { id, lastName, firsName, category, done, doneFavourite } = this.props;

        return (
            <Alert
                variant={"info"}
                className="d-flex justify-content-between align-items-center"
            >
                <span>
                    {id}. ({category}) {lastName} {firsName}
                </span>

                {done ? (
                    <span>❤️</span>
                ) : (
                    <div>
                        <button className="btn btn-primary me-3">Edit {id}</button>
                        <button className="btn btn-success" onClick={() => doneFavourite(id)}>
                            Done
                        </button>
                    </div>
                )}
            </Alert>
        )
    }
}

export default ContactItem
