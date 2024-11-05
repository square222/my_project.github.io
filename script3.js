const buttonContainer = document.getElementById('button-container');
const paginationContainer = document.getElementById('pagination');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const buttonsPerPage = 10;
let currentPage = 1;

// Массив с ссылками
const links = [
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/001",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/002",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/003",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/004",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/005",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/006",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/007",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/008",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/009",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/011",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/012",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/013",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/015",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/016",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/017",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/018",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/019",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/020",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/021",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/022",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/023",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/024",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/027",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/028",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/029",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/030",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/031",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/032",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/033",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/034",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/035",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/036",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/038",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/039",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/040",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/041",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/042",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/043",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/044",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/045",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/046",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/047",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/048",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/049",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/050",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/051",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/052",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/053",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/054",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/055",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/056",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/057",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/058",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/059",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/060",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/061",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/063",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/064",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/065",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/066",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/067",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/068",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/069",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/070",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/071",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/072",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/073",
  "https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1943/074"
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