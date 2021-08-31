import React from 'react';
import $ from 'jquery';
import '../libs/easing.js'

class BackToTop extends React.Component {
    componentDidMount(){
        $('.back-to-top').click(function(){
            $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
            return false;
          });
        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset > 100){
                document.querySelector('.back-to-top').classList.remove("fadeOut");
                document.querySelector('.back-to-top').style.display = "block";
                document.querySelector('.back-to-top').classList.add("fadeIn");
            }else {
                document.querySelector('.back-to-top').classList.remove("fadeIn");
                document.querySelector('.back-to-top').classList.add("fadeOut");
            }
        });
    }

    render(){
        return <a href="#" className="back-to-top animated"><i className="fa fa-chevron-up"></i></a>;
    }
}

export default BackToTop;


