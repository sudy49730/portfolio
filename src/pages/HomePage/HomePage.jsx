import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SkillsComponent from "../../common/SkillsComponent/SkillsComponent";
import NavbarComponent from '../../common/NavbarComponent/NavbarComponent';
import HeroContentComponent from '../../common/HeroContentComponent/HeroContentComponent';
import content from '../../configurations/content.json';

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 container-padding pt-4">
                        <NavbarComponent />
                        <div className="row mt-4">
                            <HeroContentComponent />
                        </div>
                        <div className="row mt-5">
                            <Route exact path="/portfolio/">
                                <SkillsComponent />
                            </Route>
                            <Route exact path="/portfolio/about">
                                <h1>Something about me</h1>
                                <div className="row">
                                    <div className="col-md-4 p-0 m-0">
                                        <img style={{ width: '100%' }} src={require('../../assets/images/4.jpg').default} />
                                    </div>
                                    <div className="col-md-8 p-0 mt-5">
                                        <h5>{content.salutation}</h5>
                                        <h5>{content.about}</h5>
                                        <h4><b>My social handles</b></h4>
                                        <div className="row">
                                            <div class="d-grid gap-2 d-md-block">
                                                <button class="btn facebook" type="button">
                                                    <span>
                                                        <img className="logo" src={require('../../assets/logos/facebook.svg').default} />
                                                    </span>
                                                    <span>
                                                        Facebook
                                                    </span>
                                                </button>
                                                <button class="btn instagram" type="button">
                                                    <span>
                                                        <img className="logo" src={require('../../assets/logos/instagram.svg').default} />
                                                    </span>
                                                    <span>
                                                        Instagram
                                                    </span>
                                                </button>
                                                <button class="btn whatsapp" type="button">
                                                    <span>
                                                        <img className="logo" src={require('../../assets/logos/whatsapp.svg').default} />
                                                    </span>
                                                    <span>
                                                        Whatsapp
                                                    </span>
                                                </button>
                                                <button class="btn linkedin" type="button">
                                                    <span>
                                                        <img className="logo" src={require('../../assets/logos/linkedin.svg').default} />
                                                    </span>
                                                    <span>
                                                        LinkedIn
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Route>
                        </div>
                    </div>
                    <div className="col-md-5 no-padding  d-none d-xs-none d-sm-none d-md-block">
                        <img alt="welcome to my portfolio"
                            className="side-image"
                            src={require('../../assets/images/1.jpg').default} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;