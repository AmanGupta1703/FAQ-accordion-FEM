function generateAccordionCardHTML(data) {
	return data
		.map(
			(item) => `
				<div class="card card--accordion" data-qId=${item?.id}>
					<div class="card__header">
						<h2 class="card__question">${item?.question}</h2>
						<div class="button-container">
							<button class="btn btn--hide">
								<img
									src="./assets/images/icon-minus.svg"
									alt="icon-minus"
									class="card__icon card__icon--hide" />
							</button>
							<button class="btn btn--show">
								<img
									src="./assets/images/icon-plus.svg"
									alt="icon-plus"
									class="card__icon card__icon--show" />
							</button>
						</div>
					</div>
					<div class="card__body card__body--hide">
						<p class="card__answer">${item?.answer}</p>
					</div>
				</div>
			`
		)
		.join("");
}

function renderAccordionCard(element, data) {
	element.insertAdjacentHTML("afterbegin", generateAccordionCardHTML(data));
}

function toggleButton(btns) {
	btns.forEach((btn) => {
		btn.classList.toggle("btn--hide");
		btn.classList.toggle("btn--show");
	});
}

export { renderAccordionCard, toggleButton };
