import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import VersionsListContainer from './components/versionsPage/versionsListContainer'
import './App.css';

class App extends Component {
    render() {
        return (<Router>
                <div className="App">
                    <Route path="/" component={VersionsListContainer}/>
                </div>
            </Router>
        );
    }
}

export default App;
