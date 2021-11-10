import React from 'react';
import './Landing.css'

class Landing extends React.Component {
    state = {};

    render() {
        return (
            <div id="landing">
                <div className="container-fluid fullHeightContainer">
                    <div className="row fullHeightContainer align-items-center">
                        <div className="col">
                            <div className="name">
                                <p className="flexEnd">Grant</p>
                                <p className="flexEnd">Manzano</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-6 bio">
                                <p>
                                Student at Concordia University in Science and Technology located in Montreal.
                                Spin instructor and bike hobbyist. Passion for music, photography and technology.
                                </p>
                                <button type="button" className="btn btn-outline-light welcome">Welcome to my website</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;