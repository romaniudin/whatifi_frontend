import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import NewScenario from './components/NewScenario.jsx';
import NewExpense from './components/NewExpense.jsx';
import NewIncome from './components/NewIncome.jsx';
import Scenario from './components/Scenario.jsx';
import ScenarioDetails from './components/ScenarioDetails.jsx';
import ScenarioList from './components/ScenarioList.jsx';
import Profile from './components/Profile.jsx';
import Footer from './components/Footer.jsx';
import DecisionList from './components/DecisionList.jsx';

class App extends Component {

    render() {
        return (
            <div className="App">

                <Nav/>
                <Switch>

                    <Route path="/" exact render ={() => <Home/>}/>
                    <Route path="/profile" render ={() => <Profile/>}/>
                    <Route path="/newscenario" render ={() => <NewScenario/>}/>
                    <Route path="/scenariolist" render ={() => <ScenarioList/>}/>
                    <Route path="/scenario" render ={() => <Scenario/>}/>
                    <Route path="/scenariodetails" render ={() => <ScenarioDetails/>}/>
                    <Route path="/newincome" render ={() => <NewIncome/>}/>
                    <Route path="/newexpense" render ={() => <NewExpense/>}/>
                    <Route path="/decisionlist" render ={() => <DecisionList/>}/>

                </Switch>

                <Footer/>

            </div>
        );
    }
}

export default App;
