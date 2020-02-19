import React, { useState } from 'react'
import Signup from './SignUp'
import Login from './Login'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col } from 'reactstrap'
import classnames from 'classnames'
let bgImg = '/bg.jpg'

const style = {
    wrapper: {
        height: '75vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1px 4px',
        backgroundImage: 'url(' + bgImg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:'center',
        backgroundAttachment: 'fixed',
        
    }
}

const Auth = (props) => {
    const [activeTab, setActiveTab] = useState('1')

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab)
    }
    return (
        <div style={style.wrapper}>
            <Nav style={{backgroundColor: '#778899'}} tabs>
                <NavItem id="authCard">
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >L O G I N
                    </NavLink>

                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >S I G N U P
                    </NavLink>
                </NavItem>
            </Nav >
            <TabContent style={{backgroundColor: '#B0C4DE'}} activeTab={activeTab} >
                <TabPane  tabId='1'>
                    <Row>
                        <Col style={{paddingRight: '40px'}}>
                            <Card body>
                                <Login updateToken={props.updateToken} />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId='2'>
                    <Row>
                        <Col md='12'>
                            <Card body>
                                <Signup updateToken={props.updateToken} />
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}
export default Auth














// import React from 'react';
// import {Container, Row, Col} from 'reactstrap';
// import SignUp from './SignUp';
// import Login from './Login';

// const Auth = (props) => {
//     return(
//         <Container className="auth-container">
//             <Row>
//                 <Col md="6">
//                     <SignUp updateToken={props.updateToken} />
//                 </Col>
//                 <Col md="6" className="login-col">
//                     <Login updateToken={props.updateToken} />
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Auth;