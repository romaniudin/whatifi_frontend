import React from 'react';
import {Link} from 'react-router-dom'

const newScenario = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col newScenarioLayout'>
                    <form >
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Scenario Name</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Type Scenario name here..."/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Scenario Description</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Type Description here..."/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Range (in years)</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-row justify-content-center">
                            <Link to='/list'>
                                <button type="submit" className="btn btn-warning loginButton ">Add Scenario</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default newScenario;