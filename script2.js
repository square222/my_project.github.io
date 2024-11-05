const buttonContainer = document.getElementById('button-container');
const paginationContainer = document.getElementById('pagination');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const buttonsPerPage = 10;
let currentPage = 1;

// Массив с ссылками
const links = [
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/001",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/002",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/003",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/005",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/006",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/007",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/008",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/009",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/010",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/011",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/012",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/014",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/015",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/016",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/017",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/018",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/019",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/020",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/023",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/024",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/025",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/026",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/027",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/028",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/029",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/030",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/031",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/032",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/033",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/034",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/035",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/036",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/037",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/038",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/039",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/040",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/041",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/042",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/043",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/044",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/045",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/046",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/047",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/048",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/049",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/050",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/051",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/052",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/053",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/054",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/055",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/056",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/057",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/058",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/059",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/060",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/061",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/062",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/063",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/064",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/065",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/066",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/067",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/068",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/069",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/070",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/071",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/072",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/073",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/074",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/075",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/076",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/077",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/078",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/079",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/080",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/081",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/082",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/083",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/084",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/085",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/086",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/087",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/088",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/089",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/090",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/091",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/092",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/093",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/094",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/095",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/096",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/097",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/098",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/099",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/100",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/101",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/102",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/103",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/104",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/105",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/106",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/107",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/108",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/109",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/110",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/112",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/113",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/114",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1942/115"
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