import Sidebar from './components/sidebar/Sidebar.js'
import GitTerminal from './components/main/GitTerminal.js';
import Education from './components/main/Education.js';
import WorkExp from './components/main/WorkExp.js';
import {Photography} from './components/main/Photography.js';
import Landing from './components/main/Landing.js';


export const App = () => {
  return (
    <div className="">
      <Landing/>
      {/**<Sidebar />**/}
      <GitTerminal/>
      {/**<Education/>
      <WorkExp/> **/}
      <Photography/>
    </div>
  );
}

export default App;
