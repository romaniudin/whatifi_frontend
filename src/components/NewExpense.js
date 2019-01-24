import React from 'react';
import {Link} from 'react-router-dom'

const NewExpense = () => {
    return (
        <div className='container scenarioHome'>
            <form>
                <div className="form-row justify-content-center">
                    <div className="form-group col-sm-3 incomeColumnSize">
                        <input
                            type="email"
                            className="form-control form-control-sm"
                            placeholder="Expense Name"/>
                    </div>
                    <div className="form-group col-sm-3 incomeColumnSize">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                One Time Expense?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <div className="form-group col-sm-6">
                        <input
                            type="password"
                            className="form-control form-control-sm"
                            id="inputPassword4"
                            placeholder="Expense Description"/>
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <div className="form-group col-sm-3 incomeColumnSize">
                        <select
                            id="inputState"
                            className="form-control form-control-sm"
                            placeholder="Expense Frequency">
                            <option>Bi-weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-3 incomeColumnSize">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Amount"/>
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <div className="form-group col-sm-3 incomeColumnSize">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Start Date"/>
                    </div>
                    <div className="form-group col-sm-3 incomeColumnSize">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="End Date"/>
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <Link to='/decisionlist'>
                        <button type="submit" className="btn btn-warning">Add Event</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default NewExpense;