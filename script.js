require([
    "esri/Map",
    "esri/layers/FeatureLayer",
    "esri/views/MapView",
    "dojo/domReady!"
], function(
    Map,
    FeatureLayer,
    MapView
) {
    // Create  map
    var map = new Map({
        basemap: "gray"
    });

    // Create MapView
    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-90.1994, 38.6270],
        zoom: 12
    });
    var template = { 
        title: "Neighborhood: {NHD_NAME}",
        content: [{
            type: "fields",
            fieldInfos: [{
                fieldName: "NHD_NUM",
                label: "Neighborhood Number: ",
                visible: true
            }, {
                fieldName: "NHD_NUMTXT",
                label: "Neighborhood Text Number: ",
                visible: true,
                format: {
                    digitSeparator: true,
                    places: 0
                }
            }, {
                fieldName: "NHD_NAME",
                label: "Neighborhood Name: ",
                visible: true
            }, {
                fieldName: "ANGLE",
                label: "Angle of Orientation: ",
                visible: true,
                format: {
                    digitSeparator: true,
                    places: 2
                }
            }, {
                fieldName: "NHD_NUM_ST",
                label: "Neighborhood Street Number: ",
                visible: true
            }, {
                fieldName: "Shape__Area",
                label: "Outline Area: ",
                visible: true,
                format: {
                    digitSeparator: true,
                    places: 2
                }
            }, {
                fieldName: "Shape__Length",
                label: "Outline Length: ",
                visible: true,
                format: {
                    digitSeparator: true,
                    places: 2
                }
            }]
        }]
    };

    var renderer = {
        type: "simple", 
        symbol: {
            type: "simple-fill", 
            color: [0, 0, 0, 0.1], 
            outline: {
                width: 0.4, 
                color: [255, 0, 0, 0.9] 
            }
        }
    };

    // Reference the popupTemplate 
    var featureLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
        outFields: ["*"],
        popupTemplate: template,
        renderer: renderer
    });

    map.add(featureLayer);
});
