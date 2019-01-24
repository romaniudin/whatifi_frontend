import React, {Component} from 'react';
import {Link} from 'react-router-dom'
// import Scenario from './Scenario'


class ScenarioList extends Component {
    render() {

        return (
            <div className='container scenarioHome'>
                <div className='row'>
                    <div className='col'>
                        <Link className='addButton' to='/newscenario'><img src='./images/round-circle.svg'/></Link>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col' id='list'>
                        <ul className="list-group ">
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Okanagan Relocation
                                            <Link to='/scenario'><img src='./images/chevron-right.svg' className='arrow'/></Link>
                                        </h6>
                                        <small className="card-text">
                                            <i>Move from Van to Kelowna</i>
                                        </small>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Scenario 1<Link to='/'><img src='./images/chevron-right.svg' className='arrow'/></Link>
                                        </h6>
                                        <small className="card-text">
                                            <i>Buy a cheap car</i>
                                        </small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Scenario 2<Link to='/'><img src='./images/chevron-right.svg' className='arrow'/></Link>
                                        </h6>
                                        <small className="card-text">
                                            <i>Find new job</i>
                                        </small>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Scenario 3<Link to='/'><img src='./images/chevron-right.svg' className='arrow'/></Link>
                                        </h6>
                                        <small className="card-text">
                                            <i>Rent a car for weekdays only</i>
                                        </small>
                                    </div>
                                </div>
                            </li>

                            {/* { finalScenarioList } */}

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScenarioList;