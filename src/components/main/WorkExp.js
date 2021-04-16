import React from 'react';
import './WorkExp.css';
import { WorkExpComp } from './WorkExpComp';

class WorkExp extends React.Component {
    state = {};

    render() {
        return (
            <div id="workexperience" className="fullSectionForWork workexp-section">
                <h1 className="title text-center">Work Experience</h1>
                <div className="card border-0 workExpSize center">
                    <div className="card-body">
                        <div className="container">
                            <WorkExpComp
                                name="National Bank of Canada"
                                date="2020 - Present"
                                title="Technical Support Agent"
                                description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            />
                            <WorkExpComp
                                name="LiaLaProf"
                                date="Winter 2020"
                                title="Internship"
                                description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            />
                            <WorkExpComp
                                name="Crew Collective & Café"
                                date="2019-2020"
                                title="Weekend Barista Lead"
                                other="true"
                                description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkExp;