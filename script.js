// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

//Task 1.0
var mainEl = document.querySelector('main');

//Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';


//Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//Task 1.3
mainEl.classList.add('flex-ctr');

//Task2.0
let topMenuEl = document.getElementById('top-menu');

//Task2.1
topMenuEl.style.height = '100%';

//Task2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Task2.3
topMenuEl.classList.add('flex-around');

//Task 3.0


//Task3.1             WHY DOESN'T THIS WORK?
// for (let link in menuLinks) {
//   var linkElement = document.createElement('a');
//   linkElement.setAttribute('href', menuLinks[link].href);
//   linkElement.textContent = menuLinks[link].textContent;
//   topMenuEl.appendChild(linkElement)
// }

menuLinks.forEach(function(link) {
  var linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});