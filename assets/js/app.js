const adviceUrl = 'https://api.adviceslip.com/advice';

const adviceId = document.querySelector('.advice__id');
const adviceText = document.querySelector('.advice__text');
const iconContainer = document.querySelector('.icon__container');

const setAdviceToHtml = (id, text) => {
  adviceId.innerText = id;
  adviceText.innerText = text;
}

const getAdvice = async () => {
  const resp = await fetch(adviceUrl);

  const advice = await resp.json();

  let {id, advice:text} = advice.slip;

  setAdviceToHtml(id, text);
}

iconContainer.addEventListener('click', () => init());

const init = () => {
  getAdvice();
};

init();