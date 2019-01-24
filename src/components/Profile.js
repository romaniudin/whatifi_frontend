import React from 'react';
import {Link} from 'react-router-dom'

const Profile = () => {
    return (
        <div className='container home'>
            <div className='row'>
                <div className='col'>
                    <Link className='addButton' to='/newscenario'><img src='./images/round-circle.svg' className='plusSign'/></Link>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h3 className='profilePage'>You have saved 0 scenarios</h3>
                    <h3>To create your first Scenario, click the
                        <img src='./images/round-circle.svg'/>
                        symbol</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus urna,
                        ullamcorper et euismod euismod, varius nec felis. Nam varius ultrices nisl,
                        mollis porta nibh lacinia quis. Mauris lobortis metus diam, at mollis nisi
                        fringilla sit amet. Nulla convallis eu lectus id fringilla. Maecenas
                        pellentesque fringilla ultrices. Ut vel sapien vel ligula dignissim pulvinar.
                        Proin ullamcorper pulvinar erat, eu laoreet lectus convallis nec. Praesent dui
                        risus, placerat nec dictum sit amet, lacinia a nulla. Mauris cursus justo nec
                        auctor dictum. Morbi id ex in lectus congue varius sed nec nunc.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;