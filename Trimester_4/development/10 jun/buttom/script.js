

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('button-container');

    
    const handleButtonClick = (event) => {
       
        event.target.remove();

        
        const newButton1 = document.createElement('button');
        newButton1.className = 'dynamic-button';
        newButton1.textContent = 'Click me';
        newButton1.addEventListener('click', handleButtonClick);

        const newButton2 = document.createElement('button');
        newButton2.className = 'dynamic-button';
        newButton2.textContent = 'Click me';
        newButton2.addEventListener('click', handleButtonClick);

        
        container.appendChild(newButton1);
        container.appendChild(newButton2);
    };

    
    const initialButton = document.querySelector('.dynamic-button');
    initialButton.addEventListener('click', handleButtonClick);
});



