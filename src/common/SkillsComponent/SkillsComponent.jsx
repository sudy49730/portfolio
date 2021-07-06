import React, { Component } from 'react';
import content from '../../configurations/content.json';

class SkillsComponent extends Component {
    render() {
        return (
            <>
                <h2 className="mb-3">What I Do</h2>
                {
                    content.skills.map((skill, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                {
                                    skill.svg.map((svg, index) => {
                                        return (
                                            <>
                                                <img
                                                    alt={skill.altText}
                                                    key={index}
                                                    className="logo"
                                                    src={require(`../../assets/logos/${svg.name}`).default}
                                                />
                                            </>
                                        )
                                    })
                                }
                                <br />
                                <b>{skill.name}</b>
                                <p className="description">
                                    {
                                        skill.description
                                    }
                                </p>
                            </div>
                        );
                    })
                }
            </>
        );
    }
}

export default SkillsComponent;