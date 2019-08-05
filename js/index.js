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

const nav1 = document.querySelector('nav a:nth-child(1)');
// nav1.setAttribute(textContent, siteContent["nav"]["nav-item-1"]);
nav1.textContent =  siteContent["nav"]["nav-item-1"];

const nav2 = document.querySelector('nav a:nth-child(2)');
nav2.textContent =  siteContent["nav"]["nav-item-2"];

const nav3 = document.querySelector('nav a:nth-child(3)');
nav3.textContent =  siteContent["nav"]["nav-item-3"];

const nav4 = document.querySelector('nav a:nth-child(4)');
nav4.textContent =  siteContent["nav"]["nav-item-4"];

const nav5 = document.querySelector('nav a:nth-child(5)');
nav5.textContent =  siteContent["nav"]["nav-item-5"];

const nav6 = document.querySelector('nav a:nth-child(6)');
nav6.textContent =  siteContent["nav"]["nav-item-6"];

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Nav Working ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ CTA Working ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const mainFeaturesHeading = document.querySelector
('.main-content .top-content .text-content:nth-child(1) h4');
mainFeaturesHeading.textContent = siteContent["main-content"]["features-h4"];
const mainFeaturesBody = document.querySelector
('.main-content .top-content .text-content:nth-child(1) p');
mainFeaturesBody.textContent = siteContent["main-content"]["features-content"];


const mainAboutHeading = document.querySelector
('.main-content .top-content .text-content:nth-child(2) h4');
mainAboutHeading.textContent = siteContent["main-content"]["about-h4"];
const mainAboutBody = document.querySelector
('.main-content .top-content .text-content:nth-child(2) p');
mainAboutBody.textContent = siteContent["main-content"]["about-content"];

const mainImg = document.querySelector('#middle-img');
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const mainServicesHeading = document.querySelector
('.main-content .bottom-content .text-content:nth-child(1) h4');
mainServicesHeading.textContent = siteContent["main-content"]["services-h4"];
const mainServicesBody = document.querySelector
('.main-content .bottom-content .text-content:nth-child(1) p');
mainServicesBody.textContent = siteContent["main-content"]["services-content"];

const mainProductHeading = document.querySelector
('.main-content .bottom-content .text-content:nth-child(2) h4');
mainProductHeading.textContent = siteContent["main-content"]["product-h4"];
const mainProducuctBody = document.querySelector
('.main-content .bottom-content .text-content:nth-child(2) p');
mainProducuctBody.textContent = siteContent["main-content"]["product-content"];

const mainVisionHeading = document.querySelector
('.main-content .bottom-content .text-content:nth-child(3) h4');
mainVisionHeading.textContent = siteContent["main-content"]["vision-h4"];
const mainVisionBody = document.querySelector
('.main-content .bottom-content .text-content:nth-child(3) p');
mainVisionBody.textContent = siteContent["main-content"]["vision-content"];

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Main Body Working ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelector('.contact p:nth-child(2)');
const contactPhone = document.querySelector('.contact p:nth-child(3)');
const contactEmail = document.querySelector('.contact p:nth-child(4)');

contactAddress.textContent = siteContent["contact"]["address"];
contactPhone.textContent = siteContent["contact"]["phone"];
contactEmail.textContent = siteContent["contact"]["email"];