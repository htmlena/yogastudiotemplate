const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('.main-navbar__container');
navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('closed');
});

const navElmAll = document.querySelectorAll('.nav-links');

for (let i = 0; i < navElmAll.length; i++) {
  navElmAll[i].addEventListener('click', () => {
    navElm.classList.add('closed');
  });
}
