import React from 'react';
import {Link} from 'react-router-dom'

const Scenario = () => {
    return (
        <div className='container scenarioHome'>
            <div className='row'>
                <div className='col'>
                    <Link className='addButton' to='/scenariodetails'><img className='plusSign' src='./images/round-circle.svg'/></Link>
                </div>
            </div>
            <div className='row basicScenarioText'>
                <div className='col'>
                    <p>To add your first Income or Expense Event, click the
                        <img src='./images/round-circle.svg'/>symbol</p>
                </div>
            </div>
        </div>
    )
}

export default Scenario;