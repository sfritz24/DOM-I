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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
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

let ctaHTag = document.querySelector('.cta-text h1');
ctaHTag.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

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