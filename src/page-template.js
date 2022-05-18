function generateCard (role, name, id, email, last) {
    
    let option = '';

    if (role == 'Manager'){
        option = `Office: ${last}`;
    }
    else if (role == 'Engineer'){
        option = `Github: <a href="https://github.com/${last}"> Github</a>`;
    }
    else if (role == 'Intern'){
        option = `School: ${last}`
    }

    return `
    <!-- Card Start -->
    <div class="card col-3" style="width: 18rem;">
        <div class="card-header bg-primary text-light">
            <h2>${name}</h2>
            <h2>${role}</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${email}">${email}</a>
                </li>
                <li class="list-group-item">
                    ${option}
                </li>
            </ul>
        </div>
    </div>
    <!-- Card End -->
    `
}

module.exports = templateData => {

    //console.log(templateData);

    let cards = '';

    let {manager, engineers, interns} = templateData;

    // goes through each employee and addes cards
    cards += generateCard('Manager', manager.name, manager.id, manager.email, manager.officeNumber);

    for (let x = 0; x < engineers.length; x++) {
        cards += generateCard('Engineer', engineers[x].name, engineers[x].id, engineers[x].email, engineers[x].github);
    }

    for (let x = 0; x < interns.length; x++) {
        cards += generateCard('Engineer', interns[x].name, interns[x].id, interns[x].email, interns[x].school);
    }

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">

</head>

<body class="container">
    <header class="bg-danger text-light">
        <h1 class="text-center">My Team</h1>
    </header>

    <div class="row">

    ${cards}
        
    </div>
</body>

</html>
    `
};