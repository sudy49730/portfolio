import React, { Component } from 'react';
import content from '../../configurations/content.json';

class ResumeComponent extends Component {

    fetchFormattedDate() {
        const date = new Date();
        const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const today = date.getDate() + '-' + months[parseInt(date.getMonth())] + '-' + date.getUTCFullYear();
        return today;
    }
    render() {
        return (
            <>
                <h2><b>Sudershan Singh</b></h2>
                <p>
                    An inquisitive individual eager to learn and implement the knowledge possesed, ,assisting the organization add more value and profitabiity to the business.
                </p>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <section>
                            <h3><b>Education</b></h3>
                            <ul>
                                {
                                    content.resume.education.map((education, index) => {
                                        return (
                                            <li key={index}>
                                                <b>{education.title}</b>
                                                <p>{education.college}<br></br>{education.place}</p>
                                                <p>{education.degree}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                        <section>
                            <br />
                            <h3><b>Personal Projects</b></h3>
                            <ul>
                                {
                                    content.resume.projects.map((project, index) => {
                                        return (
                                            <li key={index}>
                                                <b>{project.title}</b>
                                                <p>{project.description}</p>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </section>
                    </div>
                    <div className="col-md-6">
                        <section>
                            <h3><b>Skills</b></h3>
                            {
                                content.resume.skills.map((skill, index) => {
                                    return (<span className="badge bg-danger resume-badge" key={index}>{skill}</span>)
                                })
                            }
                        </section>
                        <section>
                            <br />
                            <h3><b>Work Experience</b></h3>
                            <ul>
                                {
                                    content.resume.workExperience.map((experience, index) => {
                                        return (
                                            <li key={index}>
                                                <b>{experience.designation}</b>
                                                <p>{experience.company}</p>
                                                <p>
                                                    {experience.description}
                                                </p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                        <section>
                            <h3><b>Certifications</b></h3>
                            <ul>
                                {
                                    content.resume.certifications.map((certification, index) => {
                                        return (
                                            <li key={index}>
                                                <b>{certification.title}</b>
                                                <p>{certification.description}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Self Declaration</h4>
                        <p>I hereby declare that the above mentioned information is true
                            to the best of my knowledge and belief and nothing has been concealed therein.</p>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-10"><p className="mb-0">Dated: {this.fetchFormattedDate()}</p></div>
                            <div className="col-md-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Document Digitally Signed">Sudershan Singh</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ResumeComponent;