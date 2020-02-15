import React, { useState, useEffect, } from 'react';
import { Container, Row, Col } from 'reactstrap'
import ListCreate from './ListCreate'
// import ItemTable from './ListTable'
import ListEdit from './ListEdit'
import Example from './ListCard'
import APIURL from '../../helpers/environment';

const ListIndex = (props) => {
    const [expItems, setExpItems] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [listToUpdate, setListToUpdate] = useState('')

    const editUpdateItem = (item) => {
        setListToUpdate(item);
        console.log(item);
    }
    const updateOn = () => {
        setUpdateActive(true)
    }
    const updateOff = () => {
        setUpdateActive(false)
    }


    const fetchExpItems = () => {
        fetch(`${APIURL}user/list`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((listData) => {
                setExpItems(listData)
            })
    }
    useEffect(() => {
        fetchExpItems();
    }, [])

    return (
        <Container>
            <Row>
                <Col sm="3"></Col>
                <Col className="create" md="6">
                    <ListCreate fetchExpItems={fetchExpItems} token={props.token} />
                </Col>
                <Col sm="3"></Col>
            </Row>
            <Row>
                <Col sm="3"></Col>
                <Col md="6">
                    <Example expItems={expItems} editUpdateItem={editUpdateItem} updateOn={updateOn} fetchExpItems={fetchExpItems} token={props.token} />
                </Col>
                <Col sm="3"></Col>
            </Row>
            <Row>
                {updateActive ? <ListEdit listToUpdate={listToUpdate} updateOff={updateOff} token={props.token} fetchExpItems={fetchExpItems} /> : <></>}
            </Row>
        </Container>
    )
}
export default ListIndex;