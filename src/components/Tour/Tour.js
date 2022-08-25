import React, { useState } from 'react';
import Iframe from 'react-iframe';
import './Scss/Tour.scss';
import Img1 from './images/360icon.png'
import { CloseOutlined } from '@material-ui/icons';
import {t} from 'i18next'
const Tour = () => {

    const [showTour, setShowTour] = useState(false)

    return (
        <div className='Tour'>
            <div className={`contr-tour ${showTour && 'd-none'}`} onClick={() => setShowTour(true)} >
                {/* <h1 >SHOWR  OOM</h1> */}
                <h1 >{t('130')}</h1>
                <img src={Img1} alt='...' />
                <h1>
                    {/* FACTORY */}
                    {t('131')}
                </h1>
            </div>
            <CloseOutlined className={`close ${!showTour && 'd-none'}`} onClick={() => setShowTour(false)} />
            {/* <Iframe className="virtual-iframe" url="https://momento360.com/e/u/a191f52d867440538c7490a5ed39724f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"
                id="myId"
                display="initial"
                position="relative"/> */}
             
                <iframe 
                width='100%'
                 height='100%'
                  src='https://roundme.com/embed/892068/2798893' 
                  frameBorder='0'
                //    webkitallowfullscreen={true}
                    // mozallowfullscreen={true} 
                    // allowFullScreen
                    ></iframe>
        </div>
    );
};

export default Tour;