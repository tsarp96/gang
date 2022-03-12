let map;


var satoCafeMaltepe = { lat: 40.930315, lng:29.122049  };

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.930315, lng:29.122049  },
        zoom: 17,
    });

    //region Icons
    var martiIcon = {
        url: "marti-marker.png", // url
        scaledSize: new google.maps.Size(100, 100), // scaled size
    };

    var linkIcon = {
        url: "link-icon.png", // url
        scaledSize: new google.maps.Size(100, 100), // scaled size
    };

    var hopIcon = {
        url: "hop-marker.png", // url
        scaledSize: new google.maps.Size(100, 100), // scaled size
    };

    var binbinIcon = {
        url: "binbin-marker.png", // url
        scaledSize: new google.maps.Size(100, 100), // scaled size
    };

    var isbikeIcon = {
        url: "isbike-marker.png", // url
        scaledSize: new google.maps.Size(100, 100), // scaled size
    };

    var esarjIcon = {
        url: "esarj-marker.png", // url
        scaledSize:new google.maps.Size(100, 100), // scaled size
    };
    //endregion

    //region MarkerCoordinates
    var martiCoordinate_01 = { lat: 40.930315, lng:29.122049  }
    var linkCoordinate_01 = { lat: 40.931315, lng:29.122049  };
    var hopCoordinate_01 = { lat: 40.931315, lng:29.124049  };
    var binbinCoordinate_01 = { lat: 40.932315, lng:29.124049  };
    var isbikeCoordinate_01 = { lat: 40.929, lng:29.120049  };
    var isbikeCoordinate_02 = { lat: 40.930, lng:29.119049  };
    var esarjCoordinate_01 = { lat: 40.930, lng:29.120049  };
    //endregion

    const tuna = new google.maps.Marker({
        position: martiCoordinate_01,
        map,
        title: "Hello World!",
        icon : martiIcon
    });

    const contentString =
        '<div id="content">' +
        '   <h1 id="firstHeading" class="firstHeading">Martı e-Scooter</h1>' +
            '<div id="bodyContent">' +
                '<div id="battery-container">' +
                    '<img id="battery-image-container"  style="margin-right: 5%" width="50%" height="50%" src="50battery.png">' +
                '       <div class="info-window-text"><h3>52%</h3></div>'+ '</br>' +
                '</div>' +
                '<div id="battery-container">' +
                '<img id="battery-image-container" style="margin-right: 3%" width="20%" height="20%" src="price-icon.png">' +
                '       <div class="info-window-text"><h3>3.75</h3></div>'+ '</br>' +
                '</div>' + '<br>' +
                '<div id="battery-container">' +
                '<button class="kirala-button" >Kirala</button>'+
                '</div>' +
            "</div>" +
        "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    tuna.addListener("click", () => {
        infowindow.open({
            anchor: tuna,
            map,
            shouldFocus: false,
        });
    });

    new google.maps.Marker({
        position: linkCoordinate_01,
        map,
        title: "Hello World!",
        icon : linkIcon
    });

    new google.maps.Marker({
        position: hopCoordinate_01,
        map,
        title: "Hello World!",
        icon : hopIcon
    });

    new google.maps.Marker({
        position: binbinCoordinate_01,
        map,
        title: "Hello World!",
        icon : binbinIcon
    });


    new google.maps.Marker({
        position: isbikeCoordinate_01,
        map,
        title: "Hello World!",
        icon : isbikeIcon
    });

    new google.maps.Marker({
        position: isbikeCoordinate_02,
        map,
        title: "Hello World!",
        icon : isbikeIcon
    });

    new google.maps.Marker({
        position: esarjCoordinate_01,
        map,
        title: "Hello World!",
        icon : esarjIcon
    });

}