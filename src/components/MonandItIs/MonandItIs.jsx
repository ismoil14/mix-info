import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Scss/MonandItIs.scss';
import Img1 from './images/person.png';
import star from './images/star.png';
import Jokc from './images/Group.png';

const MonandItIs = ({english, russian, uzbek}) => {

    // settings for slider carousel

    const [toShow, setToShow] = useState(3)

    useEffect(() => {
        if(window.innerWidth < 800){
            setToShow(2.5)            
        }        
    }, [])  

    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: toShow,
        slidesToScroll: 1,
        cssEase: "linear"
    };

    // persons's data

    const dataPersons = [
        {id: 1, date: "2021.03.09", name: "Michael Webb", proffesion: "Customer", image: Img1, description_uz: "", description_ru: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam.", description_en: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam." },
        {id: 2, date: "2021.03.09", name: "Michael Webb", proffesion: "Customer", image: Img1, description_uz: "", description_ru: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam.", description_en: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam." },
        {id: 3, date: "2021.03.09", name: "Michael Webb", proffesion: "Customer", image: Img1, description_uz: "", description_ru: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam.", description_en: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam." },
        {id: 4, date: "2021.03.09", name: "Michael Webb", proffesion: "Customer", image: Img1, description_uz: "", description_ru: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam.", description_en: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam." },
        {id: 5, date: "2021.03.09", name: "Michael Webb", proffesion: "Customer", image: Img1, description_uz: "", description_ru: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam.", description_en: "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam." }
    ]


    return (
        <div className='MonandItIs'>
            <div className="wrapper">                
                <h1 className="clients">What customers say</h1>
                <p className='info'>Faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <Slider {...settings}>
                    {dataPersons.map((data) => (
                        <div key={data.id} className="persons">
                           
                            <div className="body">
                            <div className='stars'>
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                                <p className='desc'>{english && data.description_en} {russian && data.description_ru} {uzbek && data.description_uz}</p>
                                <div className='col-md-12 img'>
                                    <img src={data.image} alt='...' />
                                    <p className='name'>{data.name} <br/> <span>{data.proffesion}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* <div className='it-isjock'><img  src={Jokc} alt="" /></div> */}
                
            </div>
        </div>
    );
};

export default MonandItIs;