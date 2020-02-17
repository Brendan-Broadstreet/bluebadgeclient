import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody, Row, Col, Container, Table } from 'reactstrap';
import APIURL from '../../helpers/environment';

const style = {
    wrapper: {
        height: '75vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1px 4px',
    }
}

const Example = (props) => {

    const deleteItem = (item) => {

        fetch(`${APIURL}user/list/delete/${item.id}`, {
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
                <div style={style.wrapper} className="itemCards">
                    <Container >
                        <Row>
                            <Col sm="1"></Col>
                            <Col sm="10">
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
                            <Col sm="1"></Col>
                        </Row>
                    </Container>
                </div>
            );
        })
    }
    return (
        <>
            <h3 className="items">Your WAG List</h3>
            <hr />
            <Container>
                <Row>
                    <Col sm='1'></Col>
                    <Col small='10'>
            <tr>
                <Card>
                    <CardTitle></CardTitle>
                    <CardText></CardText>

                    <CardBody>
                        {itemMapper()}
                    </CardBody>
                </Card>
            </tr>
            </Col>
            <Col sm='1'></Col>

            </Row>
            </Container>
        </>
    )
}
export default Example;