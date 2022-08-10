import React,{useState,useEffect} from 'react'
import"./style/style.css"
export default function ToTop() {
    const [open,setOpen]=useState(false)
    const [pageYoffset, setpageYoffset] = useState(0);
  
    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log("Open Status: " + window.pageYOffset)
            // window.pageYOffset <= 0 ? setOpen(false) : setOpen(true);
            setpageYoffset(  window.pageYOffset)
        });
        window.pageYOffset > 0 ? setOpen(true) : setOpen(false);
      }, [pageYoffset]);
    
  return (
    <div>
        {open &&   <button className="ScrollUp"  onClick={() =>
           window.scrollTo(0, 0)}> 
         <i className='fa fa-angle-up' aria-hidden="true"></i>
        </button>}
    </div>
  )
}
