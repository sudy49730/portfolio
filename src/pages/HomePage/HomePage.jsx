import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import SkillsComponent from "../../common/SkillsComponent/SkillsComponent";
import NavbarComponent from '../../common/NavbarComponent/NavbarComponent';
import HeroContentComponent from '../../common/HeroContentComponent/HeroContentComponent';
import AboutComponent from '../../common/AboutComponent/AboutComponent';
import ResumeComponent from '../../common/ResumeComponent/ResunmeComponent';

import config from '../../configurations/app.json';

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
                            <Route exact path={config.isDev ? '/' : '/portfolio/'}>
                                <SkillsComponent />
                            </Route>
                            <Route exact path={config.isDev ? '/about' : '/portfolio/about'}>
                                <AboutComponent />
                            </Route>
                            <Route exact path={config.isDev ? '/resume' : '/portfolio/resume'}>
                                <ResumeComponent />
                            </Route>
                            <Redirect to={config.isDev ? '/' : '/portfolio/'} />
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