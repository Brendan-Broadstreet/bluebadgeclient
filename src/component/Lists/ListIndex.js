import React, { useState, useEffect, } from 'react';
import { Container, Row, Col } from 'reactstrap'
import ListCreate from './ListCreate'
// import ItemTable from './ListTable'
import ListEdit from './ListEdit'
import Example from './ListCard'
import APIURL from '../../helpers/environment';


const ListIndex = (props) => {
    const [sessionToken, setSessionToken]= useState(props.token)
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
                <Col xs='1' sm='2' md='3' lg='4'></Col>
                <Col className="create" xs='10' sm='8' md='6' lg='4'>
                    <ListCreate fetchExpItems={fetchExpItems} token={props.token} />
                </Col>
                <Col xs='1' sm='2' md='3' lg='4'></Col>
            </Row>
            <Row>
            <Col xs='2' sm='2' md='3' lg='3' ></Col>
            <Col xs='10' sm='8' md='6' lg='6'>
            <hr />
            </Col>
            <Col xs='2' sm='2' md='3' lg='3' ></Col>
            </Row>
            <Row>
                <Col sm="1"></Col>
                <Col md="10">
                    <Example expItems={expItems} editUpdateItem={editUpdateItem} updateOn={updateOn} fetchExpItems={fetchExpItems} token={props.token} />
                </Col>
                <Col sm="1"></Col>
            </Row>
            <Row>
                {updateActive ? <ListEdit listToUpdate={listToUpdate} updateOff={updateOff} token={props.token} fetchExpItems={fetchExpItems} /> : <></>}
            </Row>
        </Container>
    )
}
export default ListIndex;