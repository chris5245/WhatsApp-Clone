import './App.css';
import Sidebar from './SideBar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import {useStateValue} from './StateProvider';



function App() {

  
  // eslint-disable-next-line no-unused-vars
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
        {!user ? (
          <Login/>
        ):(
          <div className="app_body">
            <Router>
              <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat></Chat>
                </Route>
                <Route path="/">
                  <Chat></Chat>
                </Route>              
              </Switch>            
            </Router>
          </div>
        )}
        
    </div>
  );
}

export default App;
