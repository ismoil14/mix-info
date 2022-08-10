import React from 'react';
import Blog from '../Blog/Blog';
import FAQ from '../FAQ/FAQ';
import Header from '../Header/Header';
import MonandItIs from '../MonandItIs/MonandItIs';
import Products from '../Product';
import Tour from '../Tour/Tour';
import InfoGlobal from '../InfoGlobal';
import About from '../About/About';
import Category from '../Category';

const RouterHeader = ({ dataBlogs, allResult, addCountAdd, addCountLike, deletCountLike, deletCountAdd, urlLikes, dataProducts, english, uzbek, russian, changeCategories, subTips }) => {
    return (
        <div className='RouterHeader'>
            <Header english={english} russian={russian} uzbek={uzbek} /> 
            <Category changeCategories={changeCategories} english={english} russian={russian} uzbek={uzbek} />                       
            <Products allResult={allResult} addCountLike={addCountLike} addCountAdd={addCountAdd} deletCountLike={deletCountLike} deletCountAdd={deletCountAdd} subTips={subTips} changeTips={changeCategories} english={english} russian={russian} uzbek={uzbek} urlLikes={urlLikes} top={true} saved={false} all={false} oneProd={false} card={false} CardData={dataProducts} />            
            <FAQ english={english} russian={russian} uzbek={uzbek} />
           
            <About gallery={false} english={english} russian={russian} uzbek={uzbek} />
            <Blog dataBlogs={dataBlogs} main={true} one={false} english={english} russian={russian} uzbek={uzbek} />
            <InfoGlobal />
            <Tour />
            <MonandItIs english={english} russian={russian} uzbek={uzbek} />
        </div>
    );
};

export default RouterHeader;