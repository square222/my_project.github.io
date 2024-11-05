document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelector('.block_button1'); 
    const button2 = document.querySelector('.block_button2');
  
    if (button1 && button2) { 
        const audio = new Audio('joy1.wav'); 
  
        button1.addEventListener('click', () => { 
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
  
        button2.addEventListener('click', () => { 
            window.location.href = 'pdf_catalog1941.html', '_blank'; 
        });
    } else {
        console.error('Одна или обе кнопки не найдены');
    }
  });