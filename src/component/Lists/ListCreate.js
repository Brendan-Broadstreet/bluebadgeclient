import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';

const ListCreate = (props) => {
    const [wic, setWic] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/user/list`, {
            method: 'POST',
            body: JSON.stringify({ list: { description: description, wic: wic } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((listData) => {
                console.log(listData);
                setWic('');
                setDescription('');
                props.fetchExpItems();
            })
    }

    return (
        <>
            <div className="container">

                <div className="row">
                    <Form onSubmit={handleSubmit}>

                        <div className="col-sm-12">
                            <h3 >Add an Item</h3></div>
                        <div className="col-xs-10">
                            <FormGroup className="add">
                                <Label htmlFor="description" />
                                <Input name="description" placeholder="Your Description" required value={description} onChange={(e) => setDescription(e.target.value)} />
                                <Label htmlFor="wic" />
                                <Input
                                    name="wic"
                                    type="number"
                                    minLength="6"
                                    required placeholder="WIC #"
                                    value={wic} onChange={(e) => setWic(e.target.value)} />
                            </FormGroup>
                        </div>
                        <div className="col-xs-12"></div>
                        <Button type="submit" style={{ backgroundColor: "#0d0cb5" }}>Add Item</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default ListCreate;



