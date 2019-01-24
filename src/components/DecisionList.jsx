import React from 'react';
import {Link} from 'react-router-dom'

const DecisionList = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link className='addButton' to='/newscenario'><img className='plusSign' src='./images/round-circle.svg'/></Link>
                </div>
            </div>
            <div className='row align-items-center'>
                <div className='col' id='list'>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">$4620</h6>
                        </div>
                    </div>
                </div>
            </div>
            <img src='./images/graph.gif' id='graph' />
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
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DecisionList;