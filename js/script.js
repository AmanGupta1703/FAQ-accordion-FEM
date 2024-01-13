import { accordionFAQData } from "./data.js";
import { renderAccordionCard, toggleButton } from "./helper.js";

function init() {
	const accordionListEl = document.querySelector(".accordion-list");
	renderAccordionCard(accordionListEl, accordionFAQData);

	handleAccordionClick();
}

function handleAccordionClick() {
	const cardsEl = document.querySelectorAll(".card");

	let prevSelectedQuestion;

	cardsEl.forEach((cardEl) => {
		cardEl.addEventListener("click", (e) => {
			const cardEl = e.target.closest(".card");
			const cardBodyEl = cardEl.querySelector(".card__body");
			const btnsEl = cardEl.querySelectorAll(".btn");

			const { qid } = cardEl.dataset;

			document.querySelectorAll(".card__body").forEach((cardBodyEl) => {
				cardBodyEl.classList.add("card__body--hide");
				cardBodyEl.classList.remove("card__body--show");
			});

			if (prevSelectedQuestion === Number(qid)) {
				cardBodyEl.classList.add("card__body--hide");
				cardBodyEl.classList.remove("card__body--show");

				toggleButton(btnsEl);
				prevSelectedQuestion = null;
				return;
			}
			// show answer
			cardBodyEl.classList.remove("card__body--hide");
			cardBodyEl.classList.add("card__body--show");

			// button
			toggleButton(btnsEl);

			prevSelectedQuestion = Number(qid);
		});
	});
}

init();
