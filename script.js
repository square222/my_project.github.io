const buttonContainer = document.getElementById('button-container');
const paginationContainer = document.getElementById('pagination');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const buttonsPerPage = 10;
let currentPage = 1;

// Массив с ссылками
const links = [
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/002',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/003',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/004',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/005',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/006',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/007',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/008',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/009',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/010',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/011',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/012',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/013',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/014',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/015',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/016',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/018',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/019',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/020',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/021',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/024',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/025',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/026',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/027',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/028',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/029',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/030',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/031',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/032',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/033',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/034',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/035',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/036',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/037',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/038',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/039',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/040',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/041',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/042',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/043',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/045',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/047',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/048',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/049',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/051',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/052',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/053',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/054',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/055',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/056',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/057',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/058',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/059',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/060',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/061',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/062',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/063',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/065',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/066',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/067',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/068',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/069',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/070',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/071',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/072',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/073',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/074',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/076',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/077',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/078',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/079',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/081',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/083',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/084',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/085',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/086',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/087',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/088',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/089',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/091',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/092',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/093',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/094',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/095',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/096',
  'https://poisk.ngonb.ru/flip/nso/maslyanino/soc_lnovodstvo/1941/098'
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