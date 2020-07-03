var main = document.getElementById('main_section');
var target = document.getElementById('t_h_r');
var general = document.getElementById('g_f_r');
var interval = document.getElementById('i_h_r');

// button
var mainbtn = document.getElementById('main_section_btn');
var targetbtn = document.getElementById('t_h_r_btn');
var generalbtn = document.getElementById('g_f_r_btn');
var intervalbtn = document.getElementById('i_h_r_btn');
var targetback1 = document.getElementById('t_h_r_prev1');
var targetback2 = document.getElementById('t_h_r_prev2');

// hide other elements
target.classList.add('hide');general.classList.add('hide');interval.classList.add('hide');

function handleSection(btn,show,hide){
    btn.addEventListener('click',()=>{
        hide.classList.add('hide');
        show.classList.remove('hide');
    })
}

handleSection(targetbtn,target,main);handleSection(mainbtn,main,target);
handleSection(generalbtn,general,target);handleSection(targetback1,target,general);
handleSection(intervalbtn,interval,target);handleSection(targetback2,target,interval);


// MOBILE-NAV HEADER EFFECT
var navbtn = document.getElementsByClassName('nav_btn');
var join_us_btn = document.getElementsByClassName('outside_btn_nav_qobi');
var tp = document.getElementsByClassName('inside_btn_nav_qobi');
var nav = document.getElementsByClassName('main_nav_mb');


for(let i=0; i < nav.length; i++){
    if(window.innerWidth < 780){
        navbtn[i].addEventListener('click',()=>{
            setTimeout(()=>{
                if(nav[i].clientHeight > 520){
                join_us_btn[i].style.transition = ".4s ease-out";
                join_us_btn[i].style.opacity = 0;
                    tp[i].style.transition = ".4s ease-out";
                    tp[i].style.opacity = 1;
                }
                if(nav[i].clientHeight < 95){
                join_us_btn[i].style.transition = ".4s ease-in";            
                join_us_btn[i].style.opacity = 1;
                    tp[i].style.transition = ".4s ease-in";            
                    tp[i].style.opacity = 0;
                }
            },500)
        })
    }else{
        join_us_btn[i].style.transition = ".4s ease-in";            
        join_us_btn[i].style.opacity = 1;
    }
}
