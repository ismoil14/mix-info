import React from 'react';
import './Scss/Blog.scss';
import { Link } from 'react-router-dom';

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: toShow,
    slidesToScroll: 1,
    cssEase: "linear"
};
const OneBlog = ({dataBlogs, english, russian, uzbek}) => {
    return (
        <div className='Blog OneBlog'>
            <div className="wrapper">
            <div className="OneBlog" >
                    {dataBlogs.map((data) => (
                        <div key={data.id} className="blog">
                            <div className="body">
                                <div className="img">
                                    <img src={data.photo} alt='...' />
                                </div>
                                <div className="text">
                                    <div className='date-cont'><div className="day">{data.author}</div> <p className="date">{data.date}</p></div>
                                   
                                    <h5 className="name">{uzbek && data.name_uz} {english && data.name_en} {russian && data.name_ru}</h5>
                                    <p className="desc">{uzbek && data.text_uz} {english && data.text_en} {russian && data.text_ru}</p>
                                    <Link to={`/blog/${data.id}`} className="nav-link read">Read More <i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                            
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OneBlog;