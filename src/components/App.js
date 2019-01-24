import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Nav from './Nav';
import Home from './Home';
import NewScenario from './NewScenario';
import NewExpense from './NewExpense';
import NewIncome from './NewIncome';
import Scenario from './Scenario';
import ScenarioDetails from './ScenarioDetails';
import ScenarioList from './ScenarioList';
import Profile from './Profile';
import Footer from './Footer';
import DecisionList from './DecisionList';

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
