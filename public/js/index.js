const introductionTop = document.querySelector('#introduction-top');
const introductionBottom = document.querySelector('#introduction-bottom');


onload = () => {
  introductionTop.style.marginTop = '40vh';
  introductionTop.style.opacity = 1;
  setTimeout(() => {
    introductionBottom.style.marginTop = '0vh';
    introductionBottom.style.opacity = 1;
  }, 1500)
}