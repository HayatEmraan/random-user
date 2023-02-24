fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => x(data));
const x = y => {
    const z = document.getElementById('amr');    
    console.log(y);
    const h2 = document.createElement('h2');
    h2.className = 'amr';
    h2.textContent = y.quote;
    z.appendChild(h2);
}