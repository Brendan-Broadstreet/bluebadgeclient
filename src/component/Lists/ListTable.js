import React from 'react'
import { Table, Button } from 'reactstrap'
import APIURL from '../../helpers/environment'

const ItemTable = (props) => {

    const deleteItem = (item) =>{
        
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
        return  props.expItems.map((item, index) =>{
            return (
                    <tr key={index}>
                        <td  className="align-middle"className="cells" id='wicBar'> * {item.wic} * </td>
                        {/* <td>{item.wic}</td> */}
                        <td className="cells" id="description">{item.description}
                        <br />
                        <br />
                            <Button color="outline-warning" onClick={() => {props.editUpdateItem(item); props.updateOn() }}>Edit</Button>
                            <Button color="outline-danger" onClick={() => {deleteItem(item)}}>Delete</Button>
                        
                        </td>
                        {/* <td className="cells">
                            </td>    
                        <td className="cells">
                        </td> */}
                        
                    </tr>
                )

            })
    }
    return (
        <>
            <h3 className="items">Your WAG List</h3>
            <hr />
            <Table striped hover dark>
                <thead>
                    <tr>
                        {/* <th></th>
                        <th>Barcode</th>
                        <th>Description</th> */}
                        {/* <th>WIC</th> */}
                    </tr>
                </thead>
                <tbody>
                    {itemMapper()}
                </tbody>
            </Table>
        </>
    )
}

export default ItemTable