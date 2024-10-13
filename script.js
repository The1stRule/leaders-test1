
const form = document.getElementById('myForm');
const tbody = document.getElementById('tbody');
const signIn = document.getElementById('sign-in');
const mainDiv = document.getElementById('main-div');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    validateForm();
})

function validateForm() {
    const fullname = form.fullname.value;
    const pass = form.pass.value;
    const role = form.role.value;

    if(fullname === '' || pass === '' || role === '') {
        alert('Please fill out all filds');
        return;
    }

    if(pass !== 'goa123') {
        alert('Invalid password');
        return;
    }

    let moderator = true;

    if(role === 'viewer') {
        moderator = false;
    } else {
        moderator = true;
    }

    for(let i = 0; i < 6; i++) {
        const row = document.createElement('tr')

        row.innerHTML = `
                <td contenteditable="${moderator}">Nika Kvaratskhelia</td>
                <td contenteditable="${moderator}"><a href="https://www.facebook.com/nika.kvaracxelia.94214">Facebook</a></td>
                <td contenteditable="${moderator}">16</td>
                <td contenteditable="${moderator}">Eliso Dzimtseishvili</td>
                <td contenteditable="${moderator}"><a https://www.facebook.com/eliso.dzimtseishvili.3">Facebook</a></td>`
        tbody.appendChild(row);
    }

    signIn.style.display = 'none';
    mainDiv.style.display = 'block';
}