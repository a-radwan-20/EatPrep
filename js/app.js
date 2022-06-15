//Set the current year in the footer
const yearElem = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElem.textContent = currentYear;

//Adding the click event to show the menu. 
const navBtnElem = document.querySelector('.btn-mobile-nav');
const headerElem = document.querySelector('.header');

navBtnElem.addEventListener('click', function () {
  headerElem.classList.toggle('nav-open');
})


// Fix: smooth scrolling not working with safari 
const linksElements = document.querySelectorAll('a:link');
linksElements.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    //get the href atrribute
    const hrefElem = link.getAttribute('href');

    //if the href the window scroll to  
    if (hrefElem === '#') window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    //Scroll to sections links
    if (hrefElem.startsWith('#') && hrefElem.length > 1) {
      const sectionElem = document.querySelector(hrefElem);
      sectionElem.scrollIntoView({
        behavior: "smooth"
      })
    }

    //Hide the mobile nav after click on any menu item
    if (link.classList.contains('main-nav-link')) {
      headerElem.classList.toggle('nav-open');
    }
  })
})

// Fix: flexbox gap property is missing in some Safari ver.
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();