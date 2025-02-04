import React, {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ScrolltoTop = () => {

    const  {pathname} = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])
    
  return null;
}

export default ScrolltoTop
