const buttonContainer = document.getElementById('button-container');
const paginationContainer = document.getElementById('pagination');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const buttonsPerPage = 10;
const totalButtons = 88;
let currentPage = 1;

// Массив с ссылками (замените на свои ссылки)
const links = [
    'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/002/',
    'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/003/',
    'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/004/',
    'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/005/',
    'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/006/',
    'https://ссылка6.com',
    'https://ссылка7.com',
    'https://ссылка8.com',
    'https://ссылка9.com',
    'https://ссылка10.com',
    'https://ссылка11.com',
    'https://ссылка12.com',
    'https://ссылка13.com',
    'https://ссылка14.com',
    'https://ссылка15.com',
    'https://ссылка16.com',
    'https://ссылка17.com',
    'https://ссылка18.com',
    'https://ссылка19.com',
    'https://ссылка20.com',
    'https://ссылка21.com',
    'https://ссылка22.com',
    'https://ссылка23.com',
    'https://ссылка24.com',
    'https://ссылка25.com',
    'https://ссылка26.com',
    'https://ссылка27.com',
    'https://ссылка28.com',
    'https://ссылка29.com',
    'https://ссылка30.com',
    'https://ссылка31.com',
    'https://ссылка32.com',
    'https://ссылка33.com',
    'https://ссылка34.com',
    'https://ссылка35.com',
    'https://ссылка36.com',
    'https://ссылка37.com',
    'https://ссылка38.com',
    'https://ссылка39.com',
    'https://ссылка40.com',
    'https://ссылка41.com',
    'https://ссылка42.com',
    'https://ссылка43.com',
    'https://ссылка44.com',
    'https://ссылка45.com',
    'https://ссылка46.com',
    'https://ссылка47.com',
    'https://ссылка48.com',
    'https://ссылка49.com',
    'https://ссылка50.com',
    'https://ссылка51.com',
    'https://ссылка52.com',
    'https://ссылка53.com',
    'https://ссылка54.com',
    'https://ссылка55.com',
    'https://ссылка56.com',
    'https://ссылка57.com',
    'https://ссылка58.com',
    'https://ссылка59.com',
    'https://ссылка60.com',
    'https://ссылка61.com',
    'https://ссылка62.com',
    'https://ссылка63.com',
    'https://ссылка64.com',
    'https://ссылка65.com',
    'https://ссылка66.com',
    'https://ссылка67.com',
    'https://ссылка68.com',
    'https://ссылка69.com',
    'https://ссылка70.com',
    'https://ссылка71.com',
    'https://ссылка72.com',
    'https://ссылка73.com',
    'https://ссылка74.com',
    'https://ссылка75.com',
    'https://ссылка76.com',
    'https://ссылка77.com',
    'https://ссылка78.com',
    'https://ссылка79.com',
    'https://ссылка80.com',
    'https://ссылка81.com',
    'https://ссылка82.com',
    'https://ссылка83.com',
    'https://ссылка84.com',
    'https://ссылка85.com',
    'https://ссылка86.com',
    'https://ссылка87.com',
    'https://ссылка88.com',
];

function createButton(link, title) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = title;
    button.addEventListener('click', () => {
        window.location.href = link;
    });
    return button;
}

function renderButtons() {
    buttonContainer.innerHTML = ''; // Очищаем предыдущие кнопки

    const startIndex = (currentPage - 1) * buttonsPerPage;
    const endIndex = Math.min(startIndex + buttonsPerPage, totalButtons);

    for (let i = startIndex; i < endIndex; i++) {
        buttonContainer.appendChild(createButton(links[i], `Издание №${i + 1}`));
    }
}

function updatePaginationButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(totalButtons / buttonsPerPage);
}

function handlePageChange(newPage) {
    currentPage = newPage;
    renderButtons();
    updatePaginationButtons();
}

prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));

renderButtons();
updatePaginationButtons();