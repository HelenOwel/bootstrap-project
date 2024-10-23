import React from 'react'
import "./App.css"
import logo from "./images/demo-logo.png"
import play from "./images/play.png"
import home from "./images/home2.png"
import service from "./images/service1.png"
import service2 from "./images/service2.png"
import service3 from "./images/service3.png"
import wave from "./images/wave1.png"
import wave2 from "./images/wave2.png"
import network from "./images/network.png"
import user1 from "./images/user1.jpg"
import user2 from "./images/user2.jpg"
import fb from "./images/facebook-icon.png"
import x from "./images/twitter-icon.png"
import sc from "./images/snapchat-icon.png"
import wa from "./images/whatsapp-icon.png"
import ig from "./images/instagram-icon.png"
import demo from "./images/demo-logo.png"
import lk from "./images/linkedin-icon.png"
import {Link} from 'react-router-dom'

function App() {
  return (
   <>
    <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <Link class="navbar-brand" to="#"><img src={logo} alt=""/></Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" >
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="#">HOME</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="#">SERVICES</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="#">ABOUT US</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-disabled="true">TESTIMONIALS</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-disabled="true">CONTACT</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </section>
    <section id="banner">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="promo">BEST DIGITAL AGENCY</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque ipsa mollitia, ducimus tenetur consectetur? Pariatur nulla sint aliquam non!</p>
                    <Link href="#"><img src={play} class="play-byn"/>Watch Video</Link>

                </div>
                <div class="col-md-6 text-center">
                    <img src={home} class="img-fluid"/>
                </div>
            </div>
        </div>
        <img src={wave} class="bottom-img"/>
    </section>
    <section id="services">
        <div class="container text-center">
            <h1 class="title">WHAT WE DO?</h1>
            <div class="row text-center">
                <div class="col-md-4 services">
                    <img src={service} class="service-img"/>
                    <h4>Growth Marketing</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt repellendus ea, maiores odio sed libero quisquam expedita doloribus corporis!</p>
                </div>
                <div class="col-md-4 services">
                    <img src={service2} class="service-img"/>
                    <h4>Online Branding</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt repellendus ea, maiores odio sed libero quisquam expedita doloribus corporis!</p>
                </div>
                <div class="col-md-4 services">
                    <img src={service3} class="service-img"/>
                    <h4>Animated Ads</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt repellendus ea, maiores odio sed libero quisquam expedita doloribus corporis!</p>
                </div>
            </div>
            <button class="btn btn-primary">All Services</button>
        </div>
    </section>
    <section id="about-us">
        <div class="container">
            <h1 class="title text-center">WHY CHOOSE US?</h1>
            <div class="row">
                <div class="col-md-6 about-us">
                    <p class="about-title">Why we're different</p>
                    <ul>
                        <li>Believer in doing business with honesty</li>
                        <li>Believer in doing business with honesty</li>
                        <li>Believer in doing business with honesty</li>
                        <li>Believer in doing business with honesty</li>
                        <li>Believer in doing business with honesty</li>
                        <li>Believer in doing business with honesty</li>
                        <li>Believer in doing business with honesty</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <img src={network} class="image-fluid"/>
                </div>
            </div>
        </div>
    </section>
    <section id="testimonials">
        <div class="container">
            <h1 class="title text-center">WHAT CLIENTS SAY</h1>
            <div class="row offset-1">
                <div class="col-md-5 testimonials">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, fugit? Sint distinctio impedit eum, iusto facilis consequuntur voluptatibus. Nisi, ea?</p>
                    <img src={user1}/>
                    <p class="user-details"><b>Angelina <br/>Co-founder at xyz</b></p>
                </div>
                <div class="col-md-5 testimonials">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, fugit? Sint distinctio impedit eum, iusto facilis consequuntur voluptatibus. Nisi, ea?</p>
                    <img src={user2}/>
                    <p class="user-details"><b>John Doe <br/>Director at xyz</b></p>
                </div>
            </div>
        </div>

    </section>
    <section id="social-media">
        <div class="container text-center">
            <p>FIND US ON SOCIAL MEDIA</p>
            <div class="social-icons">
                <Link to="#"><img src={fb}/></Link>
                <Link to="#"><img src={ig}/></Link>
                <Link to="#"><img src={x}/></Link>
                <Link to="#"><img src={wa}/></Link>
                <Link to="#"><img src={lk}/></Link>
                <Link to="#"><img src={sc}/></Link>
            </div>
        </div>
    </section>
    <footer id="footer">
        <img src={wave2} class="footer-img"/>
        <div class="container">
            <div class="row">
                <div class="col-md-4 footer-box">
                    <img src={demo}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maiores magnam in? Harum enim soluta est accusamus iure itaque, a fuga architecto officiis nam placeat!</p>
                </div>
                <div class="col-md-4 footer-box">
                    <p>CONTACT US <br/></p>
                    <p><i class="fa fa-map-marker"></i>World Trade Center, Nigeria</p>
                    <p><i class="fa fa-phone" aria-hidden="true"></i>+1 0123456789</p>
                    <p><i class="fa fa-envelope-o" aria-hidden="true"></i>xyz@gmail.com</p>

                </div>
                <div class="col-md-4 footer-box">
                    <p>CONTACT US <br/></p>
                    <p><i class="fa fa-map-marker"></i>World Trade Center, Nigeria</p>
                    <p><i class="fa fa-phone" aria-hidden="true"></i>+1 0123456789</p>
                    <p><i class="fa fa-envelope-o" aria-hidden="true"></i>xyz@gmail.com</p>

                </div>
            </div>
        </div>

    </footer>
   </>
  )
}

export default App