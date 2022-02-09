const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const desktop_nav = document.querySelector('.desktop-nav');

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.container .desktop-nav ul li a');

const mobile_thresh = 768;


//open and close mobile menu

//Enables hamburger functionality
hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
})


//Shuts off mobile menu if screen too wide
window.addEventListener('resize', function () {
    const view = getViewport();

    if (view[0] > mobile_thresh){
        mobile_menu.classList.remove('is-active');
        hamburger.classList.remove('is-active');
    }

})




//Handle scroll highlighting for navbar
window.addEventListener('scroll', function () {
    
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    desktop_nav.classList.remove('is-scrolled');
    navLi.forEach(li => {
        li.classList.remove('is-scrolled');
    })
    
    if(scrollTop > 0) {
        desktop_nav.classList.add('is-scrolled');
        
        navLi.forEach(li => {
            li.classList.add('is-scrolled');
        })
    }

    let current = '';

    const view = getViewport()

    
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 0.1 * view[1]) {
            current = section.getAttribute('id');
        }

    })

    navLi.forEach(li => {
        li.classList.remove('is-active');

        const href = li.attributes.href.nodeValue;
        
        if(href.includes(current)){
            li.classList.add('is-active');
        }

    })

    //Exit mobile menu on scroll
    mobile_menu.classList.remove('is-active');
    hamburger.classList.remove('is-active');

})





//helper
function getViewport() {

    var viewPortWidth;
    var viewPortHeight;
   
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
      viewPortWidth = window.innerWidth,
      viewPortHeight = window.innerHeight
    }
   
   // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0) {
       viewPortWidth = document.documentElement.clientWidth,
       viewPortHeight = document.documentElement.clientHeight
    }
   
    // older versions of IE
    else {
      viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
   }