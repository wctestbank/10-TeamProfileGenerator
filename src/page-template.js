function generateCard (role, name, id, email, other) {
    
    let option = '';

    if (role == 'manager'){
        option = `Github: <a href="https://github.com/${email}"> Github</a>`
    }
    else if (role == 'engineer'){

    }
    else if (role == 'intern'){

    }

    return `
    <!-- Card Start -->
    <div class="card" style="width: 18rem;">
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
                    Github: <a href="https://github.com/${email}"> Github</a>
                </li>
            </ul>
        </div>
    </div>
    <!-- Card End -->
    `
}

module.exports = templateData => {

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


        
    </div>
</body>

</html>
    `
};