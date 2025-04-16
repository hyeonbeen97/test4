import React, { useEffect, useState } from 'react'
import './ScrollText.css'

const ScrollText = () => {
    const [idx, setIdx] = useState(0);
    const txtScroll = () => { 
        const scrollY = window.scrollY;
        const height = window.innerHeight;

        if (scrollY < height * 0.8) {
            setIdx(0);
        } else if (scrollY < height * 1.8) {
            setIdx(1);
        } else { 
            setIdx(2);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", txtScroll);
        txtScroll();
        return () => window.removeEventListener("scroll", txtScroll);
     }, [])
    
    return (
        <div className='scroll-text'>
            <section className={`scrollt ${idx === 0 ? 'on' :'' }`}>
                <h1>첫번째 페이지입니다.</h1>
            </section>
            <section className={`scrollt ${idx === 1 ? 'on' :'' }`}>
                <h1>두번째 페이지로 변했습니다.</h1>
            </section>
            <section className={`scrolli ${idx === 2 ? 'on' : ''}`}>
                <img
                    className='scroll-img'
                    src={process.env.PUBLIC_URL + '/images/image1.jpg'}
                    alt="img1" />
            </section>
        </div>
  )
}

export default ScrollText