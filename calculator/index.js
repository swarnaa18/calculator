const container = document.createElement('div');
    container.style.width = '250px';
    container.style.margin = '100px auto';
    container.style.padding = '20px';
    container.style.border = '1px black';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 0 10px rgba(0,0,0,0.8)';
    container.style.fontFamily = 'Arial';

    const display = document.createElement('input');
    display.type = 'text';
    display.id = 'display';
    display.disabled = true;
    display.style.width = '100%';
    display.style.height = '40px';
    display.style.fontSize = '20px';
    display.style.textAlign = 'right';
    display.style.marginBottom = '10px';
    display.style.paddingRight = '10px';
    container.appendChild(display);
    const buttons = [
           '1', '2', '3', 'C',
          '4', '5', '6', '+',
          '7', '8', '9', '-',
           '0', '*', '.','='
    ];

    const btnContainer = document.createElement('div');
    btnContainer.style.display = 'grid';
    btnContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    btnContainer.style.gap = '10px';

 
    buttons.forEach(value => {
      const btn = document.createElement('button');
      btn.innerText = value;
      btn.style.height = '50px';
      btn.style.fontSize = '18px';
      btn.onclick = () => handleClick(value);
      btnContainer.appendChild(btn);
    });

    container.appendChild(btnContainer);
    document.body.appendChild(container);

  
    function handleClick(value) {
      if (value === 'C') {
        display.value = '';
      } else if (value === '=') {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = 'Error';
        }
      } else {
        display.value += value;
      }
    }