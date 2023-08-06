import './App.css'
import React, { useState, useEffect } from 'react';
export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition((prev) => {setLastScrollPosition(prev); position});
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  useEffect(() => {
    console.log(lastScrollPosition + " -> " + scrollPosition)
    var name = document.getElementById('name')
    var dispose = document.getElementById('disposeName')
    var nav = document.getElementById('nav')
    if(scrollPosition < 1){
      dispose.style.opacity = 1;
      name.style.fontSize = "100%";
    }
    if(scrollPosition > 300 && scrollPosition < 301){
      dispose.style.opacity = 0;
      name.style.fontSize = "60%";
    }
    if(scrollPosition > 450){
      nav.style.opacity = 1
    }
    if(scrollPosition > 0 && scrollPosition < 300){
      nav.style.opacity = 0
      if(lastScrollPosition < scrollPosition && (parseFloat(dispose.style.opacity) > 0 || dispose.style.opacity == "")){
        name.style.fontSize = (parseFloat(name.style.fontSize.substring(0,name.style.fontSize.indexOf("%"))) - 0.7) + "%";
        //console.log(name.style.fontSize)
        if(dispose.style.opacity == ""){
          dispose.style.opacity = 1
        }
        dispose.style.opacity = dispose.style.opacity-0.03;
        //console.log(dispose.style.opacity)
      }
      if(lastScrollPosition > scrollPosition && parseFloat(dispose.style.opacity) < 1){
        name.style.fontSize = (parseFloat(name.style.fontSize.substring(0,name.style.fontSize.indexOf("%"))) + 0.7) + "%";
        //console.log(parseFloat(name.style.fontSize.substring(0,name.style.fontSize.indexOf("%"))))
        if(dispose.style.opacity == ""){
          dispose.style.opacity = 0
        }
        dispose.style.opacity = parseFloat(dispose.style.opacity)+0.03;
        //console.log(dispose.style.opacity)
      }
    }
    if(scrollPosition >= 350 && scrollPosition <= 450){
      if(scrollPosition >= 350 && scrollPosition <= 351){
        nav.style.opacity = 0
      }
      if(scrollPosition >= 430 && scrollPosition <= 450){
        nav.style.opacity = 1
      }
      if(lastScrollPosition < scrollPosition && (parseFloat(nav.style.opacity) < 1 || nav.style.opacity == "")){
        if(nav.style.opacity == ""){
          nav.style.opacity = 0
        }
        nav.style.opacity = parseFloat(nav.style.opacity) + 0.1;
        console.log(nav.style.opacity)
      }
      if(lastScrollPosition > scrollPosition && parseFloat(nav.style.opacity) > 0){
        if(nav.style.opacity == ""){
          nav.style.opacity = 1
        }
        nav.style.opacity = parseFloat(nav.style.opacity) - 0.1;
        console.log(nav.style.opacity)
      }
    }
}, [scrollPosition]);
  return (
    <div>
      <div className="nav disposeReversed" id="nav">
        <h1 className="gradientName nameNav">Rohan</h1>
        <div className="navItemWrap">
        <div className="navItem">About</div>
        <div className="navItem">Skills</div>
        <div className="navItem">Projects</div>
        <div className="navItem">Contact</div>
        </div>
      </div>
      <div>
        <h1 className="name dispose" id="disposeName" ><span>I am </span><span className="gradientName" id="name" style={{fontSize: "100%"}}>Rohan</span></h1>
        <div style={{height: "100vh"}}></div>
      </div>
    </div>
  )
}
