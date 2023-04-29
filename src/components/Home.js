import React, { } from 'react'
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs"
import appstore from '../assets/appstore.webp'
import playstore from '../assets/playstore.webp'
import demoImg from '../assets/phone.png'
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div>
            <Container fluid>
                <Row>
                    <div className="left-col-wrapper">
                        <Col style={{ backgroundColor: 'black', height: '100vh' }}>
                            <div className="main-div">
                                <div className="sub-div head">
                                    <h3>BLACK</h3>
                                </div>
                                <div class="about">
                                    <div>
                                        <span className='aboutText'>Earn. Bid. Shop.</span>
                                    </div>
                                    <div class="appDownload">
                                        <a target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/black-shopping/id6447339083">
                                            <img src={appstore} alt="Download it on Appstore" className='appstore' ></img>
                                        </a>
                                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.getblack.shopping">
                                            <img src={playstore} alt="Get it on Playstore" className='playstore' style={{ borderRadius: '0.5rem', border: '2px solid white' }} ></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="sub-div socialMedia">
                                    <ul>
                                        <li><a className='socialIcon' target="_blank" rel="noreferrer" href="https://www.instagram.com/getblack_in/">
                                            <BsInstagram className="rotate-left" />
                                        </a></li>
                                        <li><a className='socialIcon' target="_blank" rel="noreferrer" href="https://twitter.com/getblack_in">
                                            <BsTwitter className="rotate-left" />
                                        </a></li>
                                        <li><a className='socialIcon' target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/getblackapp/">
                                            <BsLinkedin className="rotate-left" />
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="sub-div docs">
                                    <div class="docLinks">
                                        <Link className='link' to={'/privacy'}>Privacy policies</Link>
                                        <Link className='link' to={'/terms'}>Terms of service</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                    <div className="right-col-wrapper">
                        <Col style={{ backgroundColor: '#2c2c2c', height: '100vh' }}>
                            <div className='right-main'>
                                <div className='image'>
                                    <img src={demoImg} alt="DemoImage" className='image-fluid demo'></img>
                                </div>
                                <div className='black'>
                                    <h3 id='black'>BLACK</h3>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home