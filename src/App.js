import './App.css';
import Blank from './components/blank';
import Components from './components/components';
import Friends from './components/friends';
import Groups from './components/groups';
import Jindex from './components/jindex';
import Marketplace from './components/marketplace';
import Messages from './components/messages';

function App() {
  return (
    <div className="App">
      <Blank />
      <Components />
      <Friends />
      <Groups />
      <Jindex />
      <Marketplace />
      <Messages />
    </div>
  );
}

export default App;
