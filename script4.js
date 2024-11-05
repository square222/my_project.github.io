const buttonContainer = document.getElementById('button-container');
const paginationContainer = document.getElementById('pagination');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const buttonsPerPage = 10;
let currentPage = 1;

// Массив с ссылками
const links = [
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/002",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/003",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/004",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/005",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/006",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/007",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/008",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/009",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/010",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/011",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/012",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/013",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/014",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/017",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/018",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/019",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/020",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/021",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/022",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/023",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/024",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/025",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/027",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/028",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/029",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/030",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/031",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/032",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/033",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/034",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/035",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/036",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/037",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/038",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/039",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/040",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/042",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/043",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/044",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/045",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/046",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/048",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/049",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/050",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/051",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/052",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/053",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/056",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/057",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/058",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/059",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/060",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1944/061"
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