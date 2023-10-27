import React from 'react';
import {useEffect} from 'react';
const ScrollTOTop = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
    return (
        <>
         <div>

      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: "10px 20px",
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <i className="fa fa-angle-up">
            
        </i>
        
      </button>
    </div>
        </>
    );
};

export default ScrollTOTop;