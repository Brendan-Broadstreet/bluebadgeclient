import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import APIURL from '../../helpers/environment'

const Signup = (props) => {
const[username, setUsername] = useState('')
const[password, setPassword] = useState('')

const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${APIURL}wag/user/createuser`, {
    method: 'POST',
    body: JSON.stringify(
        {
            user:{
                username:username, 
                password: password}
            }),
    headers: new Headers({
        'Content-Type': 'application/json'
    })
    }).then(response => response.json())
    .then(user => props.updateToken(user.sessionToken)
)}

return (
    <div>
        <h1>Welcome to</h1>
        <h1>WAG List</h1>

        

        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label htmlFor='username'></Label>
            <Input 
            onChange={(e) => setUsername(e.target.value)}
            type='email' 
            placeholder='Email' 
            name='username' 
            value={username} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor='password'></Label>
            <Input onChange={(e) => setPassword(e.target.value)}
            type='new-password' 
            placeholder= 'password' 
            name='password' 
            placeholder='Password'
            value={password}
            minLength="6"
            required />
        </FormGroup>
        <Button type='submit' style={{backgroundColor: '#c82121'}}>Create Account</Button>
    </Form>
    </div>  
    )
}

export default Signup











// import React, {useState, useEffect} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';


// const SignUp = (props) => {
//     const [username, setUserName] = useState('');
//     const [password, setPassword] = useState('');
    
//     let handleSubmit = (event)=>{
//         event.preventDefault();
//         fetch(`${APIURL}wag/user/createuser`, {
//             method: 'POST',
//             body: JSON.stringify({ user: { username: username, password: password} }),
//             headers: new Headers({
//                 "Content-Type": "application/json"
//             })
//         }).then(
//             (response) => response.json()
//         ).then((data)=> {
//             props.updateToken(data.sessionToken)
//         })
//     }
//     return(
//         <div>
//             <h1 className="text-danger">Sign Up</h1>
//             <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor="username" className="text-danger" >Username</Label>
//                     <Input onChange={(e)=> setUserName(e.target.value)} placeholder="Enter Email Here" type="email" name="username" value={username}/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="password" className="text-danger">Password</Label>
//                     <Input onChange={(e)=> setPassword(e.target.value)} placeholder="Choose Your Password" type="password" minLength="6" name="password" value={password}/>
//                 </FormGroup>
//                 <Button type="submit" color="danger">Sign UP</Button>
//             </Form>
//         </div>
//     )
// }
// export default SignUp;