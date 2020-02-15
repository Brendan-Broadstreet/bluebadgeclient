import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody, Row, Col, Container, Table } from 'reactstrap';

const Example = (props) => {

    const deleteItem = (item) => {

        fetch(`http://localhost:3500/user/list/delete/${item.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetchExpItems())
    }
    const itemMapper = () => {
        return props.expItems.map((item, index) => {
            return (
                <div>
                    <Container >
                        <Col >
                            <tr key={index} id="cardCon">
                                <Row >
                                    <Card className="cardDude" className="card text-white bg-dark">
                                        <CardTitle id='wicBar'> * {item.wic} * </CardTitle>
                                        <CardText>{item.description}
                                            <br />
                                            <Button color="outline-warning" onClick={() => { props.editUpdateItem(item); props.updateOn() }}>Edit</Button>
                                            <Button color="outline-danger" onClick={() => { deleteItem(item) }}>Delete</Button></CardText>
                                    </Card>
                                </Row>
                            </tr>
                        </Col>
                    </Container>
                </div>
            );
        })
    }
    return (
        <>
            <h3 className="items">Your WAG List</h3>
            <hr />
            <tr>
                <Card>
                    <CardTitle></CardTitle>
                    <CardText></CardText>

                    <CardBody>
                        {itemMapper()}
                    </CardBody>
                </Card>
            </tr>
        </>
    )
}
export default Example;