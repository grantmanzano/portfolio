import './App.css';
import Sidebar from './components/sidebar/Sidebar.js'
import GitTerminal from './components/main/GitTerminal.js';
import Education from './components/main/Education.js';
import WorkExp from './components/main/WorkExp.js';
import Photography from './components/main/Photography.js';


export const App = () => {
  return (
    <div className="">
      <Sidebar/>
      <GitTerminal/>
      <Education/>
      <WorkExp/>
      <Photography/>
    </div>
  );
}

export default App;
