$(document).ready(function() {
    var weight_slider = $('#weight').slider({
        min: 0,
        tooltip: false,
        max: 300,
    }).on("slide", function(ev) {
        $("#weight_val").text(weight_slider.data().value);
    }).on("slideStop", function(ev) {
        $("#weight_val").text(weight_slider.data().value);
    });

    $("#weight_val").text(weight_slider.data().sliderValue);

    $("#save-btn").click(function(e) {
        var configuration = {
            weight: parseInt($("#weight_val").text()),
            gender: $("#male").hasClass("active") ? "male" : "female"
        };
        console.log(configuration);
        window.location.href = "pebblejs://close#" + encodeURIComponent(JSON.stringify(configuration));

        // Pebble.addEventListener("webviewclosed",
        //   function(e) {
        //     var configuration = JSON.parse(decodeURIComponent(e.response));
        //     console.log("Configuration window returned: ", JSON.stringify(configuration));
        //   }
        // );
    });
});