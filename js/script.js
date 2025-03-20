const listaUsuarios = document.getElementById('listaUsuarios');

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((data) => {
        data.forEach((user, i) => {
            const {name, username, phone, email} = user;
            const {street, suite, city} = user.address;
            listaUsuarios.innerHTML += 
            `<li>
                <div class="user-card">
                    <div class="user-info">
                        <p><span>Nombre:</span> ${name}</p>
                        <p><span>Username:</span> ${username}</p>
                        <p><span>Teléfono:</span> ${phone}</p>
                        <p><span>Email:</span> ${email}</p>
                    </div>
                    <div>
                        <img src=./assets/img/${i+1}.jpeg alt="Imagen de usuario">
                    </div>
                </div>
                <div>
                    <p>Compañía: ${user.company.name}</p>
                    <p>Dirección: ${street}, ${suite}, ${city}</p>
                </div>
            </li>`;
        })
    });
