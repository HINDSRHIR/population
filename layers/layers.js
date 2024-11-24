var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_province_marrakech_safi_1 = new ol.format.GeoJSON();
var features_province_marrakech_safi_1 = format_province_marrakech_safi_1.readFeatures(json_province_marrakech_safi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_province_marrakech_safi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_province_marrakech_safi_1.addFeatures(features_province_marrakech_safi_1);
var lyr_province_marrakech_safi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_province_marrakech_safi_1, 
                style: style_province_marrakech_safi_1,
                popuplayertitle: "province_marrakech_safi",
                interactive: true,
    title: 'province_marrakech_safi<br />\
    <img src="styles/legend/province_marrakech_safi_1_0.png" /> Province de Youssoufia<br />\
    <img src="styles/legend/province_marrakech_safi_1_1.png" /> Province de Rehama<br />\
    <img src="styles/legend/province_marrakech_safi_1_2.png" /> Province deChichaoua<br />\
    <img src="styles/legend/province_marrakech_safi_1_3.png" /> Province de d\'Essaouira<br />\
    <img src="styles/legend/province_marrakech_safi_1_4.png" /> Province de EL Kalaa Des Srgana <br />\
    <img src="styles/legend/province_marrakech_safi_1_5.png" /> Province de de d AL Houaz<br />\
    <img src="styles/legend/province_marrakech_safi_1_6.png" /> Province de Safi<br />\
    <img src="styles/legend/province_marrakech_safi_1_7.png" /> Province de Marrakech<br />'
        });
var format_Cheflieu_2 = new ol.format.GeoJSON();
var features_Cheflieu_2 = format_Cheflieu_2.readFeatures(json_Cheflieu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cheflieu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cheflieu_2.addFeatures(features_Cheflieu_2);
var lyr_Cheflieu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cheflieu_2, 
                style: style_Cheflieu_2,
                popuplayertitle: "Chef-lieu",
                interactive: true,
                title: 'Chef-lieu'
            });
var format_FrontiereMaroc_3 = new ol.format.GeoJSON();
var features_FrontiereMaroc_3 = format_FrontiereMaroc_3.readFeatures(json_FrontiereMaroc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrontiereMaroc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrontiereMaroc_3.addFeatures(features_FrontiereMaroc_3);
var lyr_FrontiereMaroc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrontiereMaroc_3, 
                style: style_FrontiereMaroc_3,
                popuplayertitle: "Frontiere-Maroc",
                interactive: true,
                title: '<img src="styles/legend/FrontiereMaroc_3.png" /> Frontiere-Maroc'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_province_marrakech_safi_1.setVisible(true);lyr_Cheflieu_2.setVisible(true);lyr_FrontiereMaroc_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_province_marrakech_safi_1,lyr_Cheflieu_2,lyr_FrontiereMaroc_3];
lyr_province_marrakech_safi_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Data_Devoir_Carte_Thematique — Data_provinces_long', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_Cheflieu_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_FrontiereMaroc_3.set('fieldAliases', {'fid': 'fid', });
lyr_province_marrakech_safi_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_Cheflieu_2.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'Hidden', 'Population_2024': 'Hidden', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_FrontiereMaroc_3.set('fieldImages', {'fid': 'Hidden', });
lyr_province_marrakech_safi_1.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', });
lyr_Cheflieu_2.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_FrontiereMaroc_3.set('fieldLabels', {});
lyr_FrontiereMaroc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});