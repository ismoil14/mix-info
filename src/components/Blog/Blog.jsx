import React, { useEffect, useState } from 'react';
import './Scss/Blog.scss';
// import Img1 from './images/b1.png';
// import Img2 from './images/b2.png';
// import Img3 from './images/b3.png';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Blog = ({dataBlogs, english, russian, uzbek, main, one, name, desc, image}) => {

    // data of blogs

    // const dataBlogs = [
    //     {id: 1, image: Img1, date: "10.09.2022", name_uz: "The 9 best homes in New York", name_en: "The 9 best homes in New York", name_ru: "The 9 best homes in New York", description_uz: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_en: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_ru: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec."},
    //     {id: 2, image: Img2, date: "10.09.2022", name_uz: "The 9 best homes in New York", name_en: "The 9 best homes in New York", name_ru: "The 9 best homes in New York", description_uz: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_en: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_ru: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec."},
    //     {id: 3, image: Img3, date: "10.09.2022", name_uz: "The 9 best homes in New York", name_en: "The 9 best homes in New York", name_ru: "The 9 best homes in New York", description_uz: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_en: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_ru: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec."},
    //     {id: 4, image: Img2, date: "10.09.2022", name_uz: "The 9 best homes in New York", name_en: "The 9 best homes in New York", name_ru: "The 9 best homes in New York", description_uz: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_en: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_ru: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec."},
    //     {id: 5, image: Img3, date: "10.09.2022", name_uz: "The 9 best homes in New York", name_en: "The 9 best homes in New York", name_ru: "The 9 best homes in New York", description_uz: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_en: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_ru: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec."},
    //     {id: 6, image: Img1, date: "10.09.2022", name_uz: "The 9 best homes in New York", name_en: "The 9 best homes in New York", name_ru: "The 9 best homes in New York", description_uz: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_en: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.", description_ru: "Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec."}
    // ]

    // settings for slider carousel

    const [toShow, setToShow] = useState(3)

    useEffect(() => {
        if(window.innerWidth < 700){
            setToShow(2)            
        }        
    }, [])  

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: toShow,
        slidesToScroll: 1,
        cssEase: "linear"
    };

    return (
        <div className='Blog'>
            <div className="wrapper">
                {one &&
<>   
                    <div className='one-blog'>
                    <Link to='/blog'><button className='ToBack'> <i className="fa fa-long-arrow-left"   aria-hidden="true"></i> BACK</button></Link> 
                        <h1 className="title">{name}</h1>
                        <p className="desc1">{desc}</p>
                        <div className="col-md-12 one-img">
                            <img src={image} alt="..." />
                        </div>
                    </div></>
            
                }
                {main && 
                    <h1 className="title">Blog</h1>
                }
                {one && 
                    <h1 className="title">Other Blogs</h1>
                }
                <Slider {...settings}>
                    {dataBlogs.map((data) => (
                        <div key={data.id} className="blog">
                            <div className="body">
                                <div className="img">
                                    <img src={data.image} alt='...' />
                                </div>
                                <div className="text">
                                    <div className='date-cont'><div className="day">Trends</div> <p className="date">{data.date}</p></div>
                                   
                                    <h5 className="name">{uzbek && data.name_uz} {english && data.name_en} {russian && data.name_ru}</h5>
                                    <p className="desc">{uzbek && data.description_uz} {english && data.description_en} {russian && data.description_ru}</p>
                                    <Link to={`/blog/${data.id}`} className="nav-link read">Read More <i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                            
                        </div>
                        
                    ))}
                </Slider>

<div className="read-more">
    
    
    <Link to="/blog"><button className="btn  btn-default">Explore All <i className="fa fa-long-arrow-right"></i></button></Link>
      
</div>
              
            </div>
        </div>
    );
};

export default Blog;