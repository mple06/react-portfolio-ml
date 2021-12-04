import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import './Footer.css'

function Footer() {
    return (
        <div>
            <Nav className="justify-content-center footer">
                <Row>
                    <Col md="auto icon">
                        <Nav.Item>
                            <SocialIcon url="https://github.com/mple06" />
                        </Nav.Item>
                    </Col>
                    <Col md="auto icon">
                        <Nav.Item>
                            <SocialIcon url="https://www.linkedin.com/in/minhvanle06/" />
                        </Nav.Item>
                    </Col>
                </Row >
            </Nav>
        </div>
    )
}


export default Footer

// function Footer() {
//     return (
//         <div>
//             <nav>
//                 <div className="nav-wrapper white">
//                     <a href="#!" className="brand-logo2 black-text">Contact Me</a>
//                     <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
//                     <ul className="right hide-on-med-and-down">
//                         <li><a className="black-text">206.747.7003</a></li>
//                         <li>
//                             <a className="black-text" href="mailto: mple330@gmail.com">Message Me</a>
//                         </li>
//                         <li>
//                             <a className="black-text" href="https://github.com/mple06" target="_blank">GitHub</a>
//                         </li>
//                         <li>
//                             <a className="black-text" href="https://www.linkedin.com/in/minhvanle06/" target="_blank">LinkedIn</a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//             <ul className="sidenav" id="mobile-demo">
//                 <li><a href="#">206.747.7003</a></li>
//                 <li><a href="mailto: mple330@gmail.com">Email</a></li>
//                 <li><a href="https://github.com/mple06" target="_blank">GitHub</a></li>
//                 <li>
//                     <a href="https://www.linkedin.com/in/minhvanle06/" target="_blank">LinkedIn</a>
//                 </li>
//             </ul>
//         </div>)

// }