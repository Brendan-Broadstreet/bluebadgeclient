import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody, Row, Col, Container, Table } from 'reactstrap';
import APIURL from '../../helpers/environment';

const style = {
    wrapper: {
        height: '50vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '1px 4px',
        margin: 'auto',
        backgroundColor: 'transparent'
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
                                            </CardText>
                                            <CardText>
                                                <br />
                                                <Button color="outline-warning" onClick={() => { props.editUpdateItem(item); props.updateOn() }}>Edit</Button>
                                                <Button color="outline-danger" onClick={() => { deleteItem(item) }}>Delete</Button>
                                                <br />
                                                <br />
                                                </CardText>
                                                <CardText></CardText>
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
            <h3 className="items">Your WAG List:</h3>
            <Container>
                <Row className='cardHolder'>
            <tr>
                <Card>
                    <CardTitle></CardTitle>
                    <CardText></CardText>
                    <CardBody>
                        {itemMapper()}
                    </CardBody>
                </Card>
            </tr>
            </Row>
            </Container>
        </>
    )
}
export default Example;