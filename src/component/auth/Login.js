import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import APIURL from '../../helpers/environment'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${APIURL}/wag/user/login`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    user: {
                        username: username,
                        password: password}
                    }),                   
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(response => response.json())
            .then(user => props.updateToken(user.sessionToken)
            )}
return(
    <div>
        <h1>Welcome to</h1>
        <h1>WAG List</h1>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label htmlFor='username'></Label>
            <Input onChange={(e) => setUsername(e.target.value)} 
            type='email' 
            placeholder='Email' 
            name='username' 
            value={username} />
        </FormGroup>
        <FormGroup>
            <Label htmlFor='password'></Label>
            <Input onChange={(e) => setPassword(e.target.value)} 
            type='password' 
            placeholder= 'Password' 
            name='password' 
            value={password}/>
        </FormGroup>
        <Button type='submit' style={{backgroundColor: "#0d0cb5"}}>Login</Button>
    </Form>
    </div>
)
}

export default Login











// import React, {useState} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

// const Login = (props) => {
//     const [username, setUserName] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) =>{
//         event.preventDefault();
//         fetch(`${APIURL}/wag/user/login`, {
//             method: 'POST',
//             body: JSON.stringify({user:{username:username, password:password}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//         })
//         }).then(
//             (response)=> response.json()
//         ).then((data)=>{
//             props.updateToken(data.sessionToken);
//         })
//     }

//     return(
//         <div>
//             <h1 className="text-primary">Login</h1>
//             <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor="username" className="text-primary">Username</Label>
//                     <Input onChange={(e)=> setUserName(e.target.value)} placeholder="Welcome" type="email" name="username" value={username}/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="password" className="text-primary" >Password</Label>
//                     <Input onChange={(e)=> setPassword(e.target.value)} placeholder="Back" type="password" name="password" value={password}/>
//                 </FormGroup>
//                 <Button type="submit" color="primary">Login</Button>
//             </Form>
//         </div>
//     )
// }
// export default Login;