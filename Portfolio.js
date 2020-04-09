var lastActive = "about";

function writeToOverlay(object) {
    $("#pfTitle").text(object.title);
    $("#pfDesc").text(object.desc);
    if (object.type == "heroku") {
        $("#pfHost").text("Heroku Page")
    } else if (object.type == "github") {
        $("#pfHost").text("GitHub Pages")
    }
    $("#pfHost").attr("href", object.pageUrl);
    $("#pfRepo").attr("href", object.hubUrl);
}

function closeOverlay(event) {
    if (event.target == event.currentTarget) {
        $("#overlayPortfolio").addClass("fadeOut");
        setTimeout(function () {
            $("#overlayPortfolio").removeClass("fadeOut");
            $("#overlayPortfolio").addClass("d-none");
        }, 300);
    }
}

$(".nav-item").click(function () {
    let selectedItem = this.id;
    if (selectedItem == lastActive) {
        return;
    }

    $(".container.main").removeClass("slideIn").addClass("slideOut");

    setTimeout(function () {
        $(".container.main").addClass("d-none");
        if (selectedItem == "about") {
            $("#profileDiv").removeClass("d-none").addClass("slideIn");
            lastActive = "about"
        } else if (selectedItem == "portfolio") {
            $("#portfolioDiv").removeClass("d-none").addClass("slideIn");
            lastActive = "portfolio"
        } else if (selectedItem == "contact") {
            $("#contactDiv").removeClass("d-none").addClass("slideIn");
            lastActive = "contact"
        }
    }, 300)


    $(".nav-item").removeClass("active")
    $(this).addClass("active");
})

$("#overlayPortfolio").click(() => {
    closeOverlay(event);
})

$("#closeBox").click(function () {
    closeOverlay(event);
})

$("button").click(function () {
    if (event.target.type == "submit") {
        return;
    }
    let projectName = $(this).attr("id");
    writeToOverlay(projectsArr[projectName]);

    $("#overlayPortfolio").removeClass("d-none");
    $("#overlayPortfolio").addClass("fadeIn");
    setTimeout(() => {
        $("#overlayPortfolio").removeClass("fadeIn");
    }, 300);

})