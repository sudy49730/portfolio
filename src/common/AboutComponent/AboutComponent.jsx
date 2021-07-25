import React, { Component } from 'react';
import content from '../../configurations/content.json';

class AboutComponent extends Component {
    render() {
        return (
            <>
                <h2 className="mb-3">Something about me</h2>
                <h5>
                    {
                        content.salutation
                    }
                    <br />
                    {
                        content.about
                    }
                </h5>
                <h2 className="mt-3 mb-1">Clients I've worked with</h2>
                <div className="row">
                    {
                        content.clients.map((client, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <img style={{ objectFit: 'contain', width: '50%' }} className="img img-responsive"
                                        src={require(`../../assets/images/${client.logoName}`).default} />
                                    <p className="description">
                                        {
                                            client.description
                                        }
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    }
}

export default AboutComponent;