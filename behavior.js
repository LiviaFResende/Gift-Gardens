document.addEventListener("DOMContentLoaded", function (event) {

    // alert("Hello");

    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function () {
        // alert("I saw you click!");
        thumbnailElement.className;
        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
        }
        else if (thumbnailElement.className = "small") {
            thumbnailElement.className = "";
        }
    });



});