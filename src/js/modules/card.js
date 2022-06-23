export default {
  init() {
    const card = document.querySelectorAll('.card');
    const cardWrap = document.querySelectorAll('.card__wrap');
    const cardActionBtn = document.querySelectorAll('.card__action-btn');

    cardWrap.forEach(el => {
      el.addEventListener('click', onCardClick);
    });
    cardActionBtn.forEach(el => {
      el.addEventListener('click', onCardClick);
    });
    card.forEach(el => {
      el.addEventListener('mouseleave', onCardMouseLeave);
    });

    function onCardClick(e) {
      const card = e.target.closest('.card:not(.card--disabled)');
      if (card === null) return;
      if (card.matches('.card--selected')) {
        card.classList.remove('card--selected');
        card.classList.remove('card--hover');
      } else {
        card.classList.add('card--selected');
      }
    }

    function onCardMouseLeave(e) {
      const card = e.target.closest('.card:not(.card--disabled)');
      if (card === null) return;
      if (card.matches('.card--selected')) {
        card.classList.add('card--hover');
      }
    }
  },
};
