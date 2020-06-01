const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br/>Is <br/>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br/>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

let breakImg = document.getElementById("middle-img");
breakImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// end of updated img src

// start of nav data
let firstNav = document.querySelector('nav a:nth-of-type(1)');
firstNav.textContent = siteContent["nav"]["nav-item-1"];

let secNav = document.querySelector('nav a:nth-of-type(2)');
secNav.textContent = siteContent["nav"]["nav-item-2"];

let thirdNav = document.querySelector('nav a:nth-of-type(3)');
thirdNav.textContent = siteContent["nav"]["nav-item-3"];

let forthNav = document.querySelector('nav a:nth-of-type(4)');
forthNav.textContent = siteContent["nav"]["nav-item-4"];

let fifthNav = document.querySelector('nav a:nth-of-type(5)');
fifthNav.textContent = siteContent["nav"]["nav-item-5"];

let sixNav = document.querySelector('nav a:nth-of-type(6)');
sixNav.textContent = siteContent["nav"]["nav-item-6"];
// end of nav data

// start of cta section
let ctaHTag = document.querySelector('.cta-text h1');
ctaHTag.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];
// end of cta section

// start of main content
let featuresH = document.querySelector('.text-content:nth-of-type(1) h4');
featuresH.textContent = siteContent["main-content"]["features-h4"];

let featuresP = document.querySelector('.text-content:nth-of-type(1) p');
featuresP.textContent = siteContent["main-content"]["features-content"];

let aboutH = document.querySelector('.text-content:nth-of-type(2) h4');
aboutH.textContent = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelector('.text-content:nth-of-type(2) p');
aboutP.textContent = siteContent["main-content"]["about-content"];

let servicesH = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
servicesH.textContent = siteContent["main-content"]["services-h4"];

let servicesP = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
servicesP.textContent = siteContent["main-content"]["services-content"];

let productH = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productH.textContent = siteContent["main-content"]["product-h4"];

let productP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productP.textContent = siteContent["main-content"]["product-content"];

let visionH = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionH.textContent = siteContent["main-content"]["vision-h4"];

let visionP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionP.textContent = siteContent["main-content"]["vision-content"];
// end of main content

// start of contact section
let contactH = document.querySelector('.contact h4');
contactH.textContent = siteContent["contact"]["contact-h4"];

let address = document.querySelector('.contact p:nth-of-type(1)');
address.innerHTML = siteContent["contact"]["address"];

let phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = siteContent["contact"]["phone"];

let email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = siteContent["contact"]["email"];
// end of contact section

// start of copyright
let copyRight = document.querySelector('footer p');
copyRight.textContent = siteContent["footer"]["copyright"];
// end of copyright

// start of title change
let title = document.querySelector('head title');
title.textContent = "Great Idea!";
// end of title change

// start of added nav items
let naV = document.querySelector('nav');
let newAOne = document.createElement("a");
let newATwo = document.createElement("a");
naV.append(newAOne);
naV.prepend(newATwo);

let newFirst = document.querySelector('nav a:nth-of-type(1)');
newFirst.textContent = "Hello";
newFirst.setAttribute('href', '#');

let newLast = document.querySelector('nav a:nth-of-type(8)');
newLast.textContent = "Good-bye";
newLast.setAttribute('href', '#');
// end of added nav items

// start of fun style
naV.style.backgroundColor = 'black';
firstNav.style.color = 'lime';
newFirst.style.color = 'white';
secNav.style.color = 'white';
thirdNav.style.color = 'lime';
forthNav.style.color = 'white';
fifthNav.style.color = 'lime';
sixNav.style.color = 'white';
newLast.style.color = 'lime';