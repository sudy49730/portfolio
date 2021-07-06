import React, { Component } from 'react';

import content from '../../configurations/content.json';

class HeroContentComponent extends Component {
    render() {
        return (
            <>
                <h1>
                    Hello<br />
                    Thanks for stopping by!<br />
                    My name is <span className="emphasis">{content.name}</span> and <br />I'am an <span className="emphasis">{content.designation}</span>
                </h1>
                <div className="d-grid gap-2 d-md-block mt-4">
                    <button className="btn btn-warning white-text" type="button">Let's Get In Touch</button>
                </div>
            </>
        );
    }
}

export default HeroContentComponent;