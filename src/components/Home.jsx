import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='container mainPage' data-spy="scroll">
            <div className='row justify-content-center'>
                <div className='col-4 logo'>
                    <img src='./images/logo.png' id='logo'/>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"/>
                        </div>
                    </form>
                    <div className='row justify-content-center'>
                        <div className='col-4 login'>
                            <Link to='/profile'>
                                <button type="submit" className="btn btn-warning">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center' id='trial'>
                <div className='col-6'>
                    <Link to='/profile'>
                        <button type="submit" className="btn btn-warning">Trial Version</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Home;