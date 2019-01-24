import React from 'react';
import {Link} from 'react-router-dom'

const ScenarioDetails = () => {
    return (
        <div className='container' id='scenarioDetails'>
            <div className='row'>
                <div className='col'>
                    <Link to='/newincome'>
                        <button type="button" className="btn btn-warning">Add Income Event</button>
                    </Link>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Link to='/newexpense'>
                        <button type="button" className="btn btn-warning">Add Expense Event</button>
                    </Link>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ScenarioDetails;