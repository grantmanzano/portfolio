import React from 'react';
import { Quicklinks } from './Quicklinks';
import Typical from 'react-typical';
import './GitTerminal.css'

class GitTerminal extends React.Component {
    state = {};

    render() {
        return (
            <div id="gitTerminal">
                <div className="fullSection git-section">
                    <div className="card border-0 terminalSize center">
                        <span className="card-header gitWindow">grantmanzano.exe</span>
                        <div className="card-body gitTerminal">
                            <div>
                                <span className="computerNameColor">User@Desktop-Number</span> <span className="pink">MINGW64</span> <span className="yellow">~/Desktop/Projects/website/relaunch</span> <span className="branchColor">(branch2021)</span><br />
                                $ npm start<br /><br />
                                > relaunch@0.1.0 start C:\Users\Grant\Desktop\Projects\website\relaunch<br />
                                > react-scripts start

                                <Typical
                                    className="typedSection"
                                    steps={['Compiled Successfully!', 4000,
                                        'Welcome to my website!', 6000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />

                                <p>$ git --help</p>
                                <div>
                                    <Quicklinks />
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GitTerminal;