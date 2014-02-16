var weight_slider = $('#weight').slider({
    min: 0,
    value: 150,
    max: 300,
    tooltip: "show"
});

$("#save-btn").click(function(e) {
    var configuration = {
        weight: weight_slider.data().sliderValue,
        gender: $("#male").hasClass("active")
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