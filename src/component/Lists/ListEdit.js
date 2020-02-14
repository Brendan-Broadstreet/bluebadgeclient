import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Form, Label, Input, Button, FormGroup } from 'reactstrap'

const ListEdit = (props) => {
    const [editDesc, setEditDesc] = useState(props.listToUpdate.description);
    const [editWic, setEditWic] = useState(props.listToUpdate.wic);
    const itemUpdate = (event, item) => {
        event.preventDefault();
        fetch(`http://localhost:3500/user/list/update/${props.listToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ list: { description: editDesc, wic: editWic } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(res => {
            props.fetchExpItems();
            props.updateOff()
        }).catch(err=>console.log(err))
    }
    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit Your Item</ModalHeader>
            <ModalBody>
                <Form onSubmit={itemUpdate}>
                    <FormGroup>
                        <Label htmlFor="wic">Edit WIC:</Label>
                        <Input name="wic" value={editWic} onChange={(e) => setEditWic(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Edit Description:</Label>
                        <Input name="description" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Update the List!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ListEdit;