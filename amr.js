fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(data => x(data));
const x = h => {
    const set = document.getElementById('tmr');
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
    <img src="${h.results[0].picture.large}" alt="${h.results[0].name.title} ${h.results[0].name.first} ${h.results[0].name.last}">
    <h4>${h.results[0].name.title} ${h.results[0].name.first} ${h.results[0].name.last}</h4>
    <p>${h.results[0].dob.date} ${h.results[0].dob.age}</p>
    <p>${h.results[0].email}</p>
    <p>${h.results[0].location.city}, ${h.results[0].location.state} ${h.results[0].location.country}</p>
    `
    set.appendChild(div);
    
}