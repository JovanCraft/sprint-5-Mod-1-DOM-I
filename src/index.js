const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const logoImage = document.querySelector('#logo-img')
logoImage.src = siteContent['images']['logo-img']

const roundImage = document.querySelector('#cta-img')
roundImage.src = siteContent['images']['cta-img']

const codingStrip = document.querySelector('#middle-img')
codingStrip.src = siteContent['images']['accent-img']


const links = document.querySelectorAll('nav a')
links[0].textContent = siteContent['nav']['nav-item-1']
links[1].textContent = siteContent['nav']['nav-item-2']
links[2].textContent = siteContent['nav']['nav-item-3']
links[3].textContent = siteContent['nav']['nav-item-4']
links[4].textContent = siteContent['nav']['nav-item-5']
links[5].textContent = siteContent['nav']['nav-item-6']

links.forEach(link => link.classList.add('italic'))

const ctaText = document.querySelector('.cta-text')

const newHOne = document.createElement('h1')
newHOne.textContent = siteContent['cta']['h1']
newHOne.style.fontFamily = 'Bangers'
newHOne.style.letterSpacing = '1px'
newHOne.style.margin = '0'

const button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

ctaText.prepend(newHOne)

const topContent = document.querySelector('.top-content')
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4']
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content']

topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4']
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content']

const bottomContent = document.querySelector('.bottom-content')
const bottomHFours = bottomContent.querySelectorAll('h4')
bottomHFours[0].textContent = siteContent['main-content']['services-h4']
bottomHFours[1].textContent = siteContent['main-content']['product-h4']
bottomHFours[2].textContent = siteContent['main-content']['vision-h4']

const bottomPs = bottomContent.querySelectorAll('p')
bottomPs[0].textContent = siteContent['main-content']['services-content']
bottomPs[1].textContent = siteContent['main-content']['product-content']
bottomPs[2].textContent = siteContent['main-content']['vision-content']

const contact = document.querySelector('section.contact')
contact.children[0].textContent = siteContent['contact']['contact-h4']
contact.children[1].textContent = siteContent['contact']['address']
contact.children[2].textContent = siteContent['contact']['phone']
contact.children[3].textContent = siteContent['contact']['email']

const footerLink = document.querySelector('footer a')
footerLink.textContent = siteContent.footer.copyright
footerLink.classList.add('bold')
