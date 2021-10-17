
function SelectBooks(text) {
    window.location.href = 'livros.html' + '#' + text;
    SwitchVisibillity();
}

function ResetSelection() {
    window.location.href = 'livros.html';
    SwitchVisibillity();
}

window.onload = function Load(){
    SwitchVisibillity();
}

function SwitchVisibillity() {
    if (!window.location.href.includes('livros')) {
        return;
    }

    let filter = window.location.hash.substring(1);

    let Containers = [
        document.querySelector("#Romance"),
        document.querySelector("#Aventura"),
        document.querySelector("#Ficcao"),
        document.querySelector("#Drama"),
        document.querySelector("#Terror"),
    ];

    let btnMostrar = document.querySelector("#VerTudo");

    Containers.forEach(element => {
        element.classList = "hideC";
    });

    if (filter == "Romance") {
        Containers[0].classList = "showC";
        btnMostrar.classList.remove("hideC");
        btnMostrar.classList.add("showC");
    }
    else if (filter == "Aventura") {
        Containers[1].classList = "showC";
        btnMostrar.classList.remove("hideC");
        btnMostrar.classList.add("showC");
    }
    else if (filter == "Ficcao") {
        Containers[2].classList = "showC";
        btnMostrar.classList.remove("hideC");
        btnMostrar.classList.add("showC");
    }
    else if (filter == "Drama") {
        Containers[3].classList = "showC";
        btnMostrar.classList.remove("hideC");
        btnMostrar.classList.add("showC");
    }
    else if (filter == "Terror") {
        Containers[4].classList = "showC";
        btnMostrar.classList.remove("hideC");
        btnMostrar.classList.add("showC");
    }
    else {
        Containers.forEach(element => {
            element.classList = "showC";
        });
    }
}