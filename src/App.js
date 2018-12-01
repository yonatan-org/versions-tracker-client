import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import VersionsListContainer from './components/versionsPage/versionsListContainer'
import FeaturesReleaseContainer from './components/featuresRelease/featuresReleaseContainer'
import './App.css';

class App extends Component {
    render() {
        return (<Router>
                <div className="App">
                    <Route exact path="/" component={VersionsListContainer}/>
                    <Route exact path="/features-release" component={FeaturesReleaseContainer}/>
                </div>
            </Router>
        );
    }
}

export default App;
