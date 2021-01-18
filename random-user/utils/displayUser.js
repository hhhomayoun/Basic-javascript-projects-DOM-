import get from './getElement.js';
const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];
const displayUser = (person) => {
 img.src = person.image;
 value.textContent = person.name;
 title.textContent = `my name is`;
 btns.forEach((btn) => {
  btn.classList.remove('active')
 })
 btns[0].classList.add('active');
 btns.forEach((btn) => {
  const label = btn.dataset.label;
  btn.addEventListener('click', () => {
   title.textContent = `my ${label} is`;
   value.textContent = person[label]
   btns.forEach((btn) => {
    btn.classList.remove('active')
   })
   btn.classList.add('active')
  })
 })

}
export default displayUser