import React from 'react';
import './Education.css';
import { EduComp } from './EduComp';

class Education extends React.Component {
    state = {};

    render() {
        return (
            <div id="education" className="fullSection education-section">
                <h3>Education</h3>
                <div className="card">
                    <div className="card-body">
                        <EduComp name="Dawson College" year="2016-2020" description="Computer Science, D.E.C." location="Montreal, Canada" />
                        <div className="container">
                            <h5>Relevant coursework</h5>
                            <ul>
                                <li>Object Oriented Programming</li>
                                <li>Event Driven Programming</li>
                                <li>Computer Fundamentals</li>
                                <li>Computer Infrastructures - Linux</li>
                                <li>Database Programming and Management</li>
                                <li>Web Application Programming (Client and Server-side)</li>
                                <li>Mobile Application Development - Android</li>
                                <li>Data Communications and Networking</li>
                            </ul>
                        </div>
                        <EduComp name="Collège Notre-Dame" year="2010-2015" description="High school studies, Science and Technology path" location="Montreal, Canada" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;