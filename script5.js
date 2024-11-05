const buttonContainer = document.getElementById('button-container');
const paginationContainer = document.getElementById('pagination');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const buttonsPerPage = 10;
let currentPage = 1;

// Массив с ссылками
const links = [
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/001",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/003",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/004",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/005",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/006",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/007",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/009",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/010",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/011",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/012",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/013",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/014",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/015",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/016",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/017",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/018",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/019",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/020",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/021",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/022",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/023",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/024",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/025",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/026",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/027",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/028",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/029",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/030",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/031",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/032",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/033",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/034",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/035",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/037",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/038",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/039",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/040",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/041",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/042",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/044",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/045",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/046",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/047",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/048",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/049",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/050",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/051",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/052",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/053",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1945/054",
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
  
    let buttonCount = 0; // Счетчик для подсчета реального количества кнопок
    const startIndex = (currentPage - 1) * buttonsPerPage;
  
    // Используем цикл while, чтобы проверить все номера кнопок
    let i = 0;
    while (buttonCount < startIndex + buttonsPerPage) {
      if (i >= links.length) {
        break; // Прерываем цикл, если достигли конца массива links
      }
  
      const link = links[i];
      // Извлекаем номер издания из ссылки
      const issueNumber = link.substring(link.lastIndexOf('/') + 1); 
      // Форматируем номер с добавлением ведущего нуля, если нужно
      const formattedIssueNumber = issueNumber.padStart(2, '0');
      buttonContainer.appendChild(createButton(link, `Издание №${formattedIssueNumber}`)); 
      
      buttonCount++;
      i++;
    }
  }
  
  function updatePaginationButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * buttonsPerPage >= links.length; 
  }
  
  function handlePageChange(newPage) {
    currentPage = newPage;
    renderButtons(); // Перерисовываем все кнопки
    updatePaginationButtons();
  }
  
  prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
  nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
  
  renderButtons();
  updatePaginationButtons();