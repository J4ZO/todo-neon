import React from 'react';
import '../styles/LogoProfile.css';


function LogoProfile() {
    return (
        <div className='images-container'>
            {/* <div className="box">

                <div className="content">
                    <a href='https://www.linkedin.com/in/jaider-zapata-686470208/' className='link-image'>
                        <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360" alt='linkedin-Jazo' className='linkedin-image image' />
                    </a>
                </div>
            </div > */}

            <div className='circle'>
                <a href='https://www.linkedin.com/in/jaider-zapata-686470208/' className='link-image'>
                    <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360" alt='linkedin-Jazo' className='linkedin-image image ' />
                </a>
            </div>
            <div className='circle'>
                <a href='https://github.com/J4ZO?tab=repositories' className='link-image'>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='github-Jazo' className='github-image image ' />
                </a>
            </div>
            {/* <div className="box">
                <span></span>
                <div className='content'>
                </div>
                <a href='https://www.linkedin.com/in/jaider-zapata-686470208/'>
                    <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360" alt='linkedin-Jazo' className='linkedin-image image' />
                </a>
            </div>
            <div className="box" >
                <span></span>
                <div className='content'>
                    <a href='https://github.com/J4ZO?tab=repositories'>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='github-Jazo' className='github-image image ' />
                    </a>
                </div>
            </div > */}
        </div >

    )
}

export { LogoProfile }