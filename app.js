// ******** Nav menu

const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const headerImage = document.querySelector('#header-image');
const modalLinks = document.querySelectorAll('.header__modal-body__links');
const modal = document.querySelector('#modal');

openBtn.onclick = () => {
  modal.classList.remove('hidden');
  openBtn.classList.add('hidden');
  headerImage.style.visibility= 'hidden';
}

closeBtn.onclick = () => {
  modal.classList.add('hidden');
  openBtn.classList.remove('hidden');
  headerImage.style.visibility= 'visible';
}

for (var i = 0; i < modalLinks.length; i++) {
  modalLinks[i].onclick = () => {
    modal.classList.add('hidden');
    openBtn.classList.remove('hidden');
    headerImage.style.visibility= 'visible';
  }
}

const footerList = document.querySelector('.footer');
const faqs = document.querySelector('.faqs');
const answers = document.querySelectorAll('.answer');
const options = document.querySelector('.options');
const tab = document.querySelector('.tab');

//************** HANDLING CHANGE OF TABS
///////// changing the tab content based on clicked option above it
const tabsContent = [
  {
    img: './images/illustration-features-tab-1.svg',
    heading2: 'Bookmark in one click',
    paragraph:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
  },
  {
    img: './images/illustration-features-tab-2.svg',
    heading2: 'Intelligent search',
    paragraph:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
  },
  {
    img: './images/illustration-features-tab-3.svg',
    heading2: 'Share your bookmarks',
    paragraph:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
  }
];

// initial tab,when page loads

const tabChanging = e => {
  // get the position of clicked option
  const index = e.target.dataset.position;
  // tab's related elements
  const { img, heading2, paragraph } = tabsContent[index];
  // making sure only one tab appears at the time
  tab.innerHTML = '';
  tab.insertAdjacentHTML(
    'beforeend',
    `<div class="image-container">
  <img
    src=${img}
    alt="Tab image"
    class="tab-image animate__animated animate__fadeIn"
  />
  <div class="blue-bg blue-bg--left"></div>
</div>
<div class="tab-text animate__animated animate__fadeInRight">
  <h2 class="heading2">${heading2}</h2>
  <p class="paragraph section-paragraph">
    ${paragraph}
  </p>
<button class="btn btn-dark">More info</button></div>`
  );
};

options.addEventListener('click', tabChanging);

options.addEventListener('mouseover', e => {
  e.target.style.boxShadow = `0 1px 0px 0px red`;
});

options.addEventListener('mouseout', e => {
  e.target.style.boxShadow = 'none';
});

// ******** FAQ
// when certain question is clicked, the answer of that question should appear
// arrow should rotate and turn red

faqs.addEventListener('click', e => {
  // get answer and arrow
  const { lastElementChild: arrow, nextElementSibling: answer } = e.target;
  arrow.classList.toggle('rotating');
  answer.classList.toggle('show');
  answer.classList.toggle('hide');
  answer.classList.toggle('animate__animated');
  answer.classList.toggle('animate__fadeIn');
});

// ******* CARDS
// when window width is less than 700px, cards should be at top=0;
function changeCardsTopPosition(x) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (x.matches) {
      card.style.top = `${card.dataset.top}rem`;
    } else {
      card.style.top = `0rem`;
    }
  });
}

let x = window.matchMedia('(min-width: 700px)');
changeCardsTopPosition(x); // Call listener function at run time
x.addListener(changeCardsTopPosition); // Attach listener function on state changes

answers.forEach(answer => answer.classList.toggle('hide'));
// answers[1].classList.add('show');