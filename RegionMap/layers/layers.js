var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CO_Freight_Corridors_1_1 = new ol.format.GeoJSON();
var features_CO_Freight_Corridors_1_1 = format_CO_Freight_Corridors_1_1.readFeatures(json_CO_Freight_Corridors_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CO_Freight_Corridors_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CO_Freight_Corridors_1_1.addFeatures(features_CO_Freight_Corridors_1_1);
var lyr_CO_Freight_Corridors_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CO_Freight_Corridors_1_1, 
                style: style_CO_Freight_Corridors_1_1,
                popuplayertitle: 'CO_Freight_Corridors_1',
                interactive: true,
                title: '<img src="styles/legend/CO_Freight_Corridors_1_1.png" /> CO_Freight_Corridors_1'
            });
var format_NHFNPrimary_2 = new ol.format.GeoJSON();
var features_NHFNPrimary_2 = format_NHFNPrimary_2.readFeatures(json_NHFNPrimary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHFNPrimary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHFNPrimary_2.addFeatures(features_NHFNPrimary_2);
var lyr_NHFNPrimary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHFNPrimary_2, 
                style: style_NHFNPrimary_2,
                popuplayertitle: 'NHFN Primary',
                interactive: true,
                title: '<img src="styles/legend/NHFNPrimary_2.png" /> NHFN Primary'
            });
var format_NHFNSecondary_3 = new ol.format.GeoJSON();
var features_NHFNSecondary_3 = format_NHFNSecondary_3.readFeatures(json_NHFNSecondary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHFNSecondary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHFNSecondary_3.addFeatures(features_NHFNSecondary_3);
var lyr_NHFNSecondary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHFNSecondary_3, 
                style: style_NHFNSecondary_3,
                popuplayertitle: 'NHFN Secondary',
                interactive: true,
                title: '<img src="styles/legend/NHFNSecondary_3.png" /> NHFN Secondary'
            });
var format_OversizeOverweightRestrictions_4 = new ol.format.GeoJSON();
var features_OversizeOverweightRestrictions_4 = format_OversizeOverweightRestrictions_4.readFeatures(json_OversizeOverweightRestrictions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OversizeOverweightRestrictions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OversizeOverweightRestrictions_4.addFeatures(features_OversizeOverweightRestrictions_4);
var lyr_OversizeOverweightRestrictions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OversizeOverweightRestrictions_4, 
                style: style_OversizeOverweightRestrictions_4,
                popuplayertitle: 'Oversize / Overweight Restrictions',
                interactive: true,
                title: '<img src="styles/legend/OversizeOverweightRestrictions_4.png" /> Oversize / Overweight Restrictions'
            });
var format_Landslides_5 = new ol.format.GeoJSON();
var features_Landslides_5 = format_Landslides_5.readFeatures(json_Landslides_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landslides_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landslides_5.addFeatures(features_Landslides_5);
var lyr_Landslides_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landslides_5, 
                style: style_Landslides_5,
                popuplayertitle: 'Landslides',
                interactive: true,
                title: '<img src="styles/legend/Landslides_5.png" /> Landslides'
            });
var format_RecordedAvalanches_7 = new ol.format.GeoJSON();
var features_RecordedAvalanches_7 = format_RecordedAvalanches_7.readFeatures(json_RecordedAvalanches_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecordedAvalanches_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecordedAvalanches_7.addFeatures(features_RecordedAvalanches_7);
var lyr_RecordedAvalanches_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecordedAvalanches_7, 
                style: style_RecordedAvalanches_7,
                popuplayertitle: 'Recorded Avalanches',
                interactive: true,
                title: '<img src="styles/legend/RecordedAvalanches_7.png" /> Recorded Avalanches'
            });
var format_Region1Mask_8 = new ol.format.GeoJSON();
var features_Region1Mask_8 = format_Region1Mask_8.readFeatures(json_Region1Mask_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region1Mask_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region1Mask_8.addFeatures(features_Region1Mask_8);
var lyr_Region1Mask_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region1Mask_8, 
                style: style_Region1Mask_8,
                popuplayertitle: 'Region 1 Mask',
                interactive: true,
                title: '<img src="styles/legend/Region1Mask_8.png" /> Region 1 Mask'
            });
var format_Region2Mask_9 = new ol.format.GeoJSON();
var features_Region2Mask_9 = format_Region2Mask_9.readFeatures(json_Region2Mask_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region2Mask_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region2Mask_9.addFeatures(features_Region2Mask_9);
var lyr_Region2Mask_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region2Mask_9, 
                style: style_Region2Mask_9,
                popuplayertitle: 'Region 2 Mask',
                interactive: true,
                title: '<img src="styles/legend/Region2Mask_9.png" /> Region 2 Mask'
            });
var format_Region3Mask_10 = new ol.format.GeoJSON();
var features_Region3Mask_10 = format_Region3Mask_10.readFeatures(json_Region3Mask_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region3Mask_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region3Mask_10.addFeatures(features_Region3Mask_10);
var lyr_Region3Mask_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region3Mask_10, 
                style: style_Region3Mask_10,
                popuplayertitle: 'Region 3 Mask',
                interactive: true,
                title: '<img src="styles/legend/Region3Mask_10.png" /> Region 3 Mask'
            });
var format_Region4Mask_11 = new ol.format.GeoJSON();
var features_Region4Mask_11 = format_Region4Mask_11.readFeatures(json_Region4Mask_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region4Mask_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region4Mask_11.addFeatures(features_Region4Mask_11);
var lyr_Region4Mask_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region4Mask_11, 
                style: style_Region4Mask_11,
                popuplayertitle: 'Region 4 Mask',
                interactive: true,
                title: '<img src="styles/legend/Region4Mask_11.png" /> Region 4 Mask'
            });
var format_Region5Mask_12 = new ol.format.GeoJSON();
var features_Region5Mask_12 = format_Region5Mask_12.readFeatures(json_Region5Mask_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region5Mask_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region5Mask_12.addFeatures(features_Region5Mask_12);
var lyr_Region5Mask_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region5Mask_12, 
                style: style_Region5Mask_12,
                popuplayertitle: 'Region 5 Mask',
                interactive: true,
                title: '<img src="styles/legend/Region5Mask_12.png" /> Region 5 Mask'
            });
var group_Regions = new ol.layer.Group({
                                layers: [lyr_Region1Mask_8,lyr_Region2Mask_9,lyr_Region3Mask_10,lyr_Region4Mask_11,lyr_Region5Mask_12,],
                                fold: 'close',
                                title: 'Regions'});
var group_RegionsInvertedPolygon = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Regions - Inverted Polygon'});
var group_Hazards = new ol.layer.Group({
                                layers: [lyr_Landslides_5,lyr_CO_Fires_2011_2020_6,lyr_RecordedAvalanches_7,],
                                fold: 'open',
                                title: 'Hazards'});

lyr_OSMStandard_0.setVisible(true);lyr_CO_Freight_Corridors_1_1.setVisible(true);lyr_NHFNPrimary_2.setVisible(true);lyr_NHFNSecondary_3.setVisible(true);lyr_OversizeOverweightRestrictions_4.setVisible(true);lyr_Landslides_5.setVisible(true);lyr_CO_Fires_2011_2020_6.setVisible(true);lyr_RecordedAvalanches_7.setVisible(true);lyr_Region1Mask_8.setVisible(false);lyr_Region2Mask_9.setVisible(true);lyr_Region3Mask_10.setVisible(false);lyr_Region4Mask_11.setVisible(false);lyr_Region5Mask_12.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_CO_Freight_Corridors_1_1,lyr_NHFNPrimary_2,lyr_NHFNSecondary_3,lyr_OversizeOverweightRestrictions_4,group_Hazards,group_Regions];
lyr_CO_Freight_Corridors_1_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FREIGHT_ON': 'FREIGHT_ON', 'FREIGHT__1': 'FREIGHT__1', 'FREIGHT__2': 'FREIGHT__2', 'FREIGHT__3': 'FREIGHT__3', 'Length': 'Length', 'Shape_Leng': 'Shape_Leng', 'Shape__Length': 'Shape__Length', });
lyr_NHFNPrimary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'LENGTH': 'LENGTH', 'DIR': 'DIR', 'DATA': 'DATA', 'VERSION': 'VERSION', 'Class': 'Class', 'Class_Desc': 'Class_Desc', 'Road_Name': 'Road_Name', 'Sign_Rte': 'Sign_Rte', 'Rte_Type': 'Rte_Type', 'Rte_Number': 'Rte_Number', 'Rte_Qualif': 'Rte_Qualif', 'Country': 'Country', 'STATE': 'STATE', 'STFIPS': 'STFIPS', 'County_Nam': 'County_Nam', 'CTFIPS': 'CTFIPS', 'Urban_Code': 'Urban_Code', 'FAFZONE': 'FAFZONE', 'Status': 'Status', 'F_Class': 'F_Class', 'Facility_T': 'Facility_T', 'NHS': 'NHS', 'STRAHNET': 'STRAHNET', 'NHFN': 'NHFN', 'Truck': 'Truck', 'AB_Lanes': 'AB_Lanes', 'BA_Lanes': 'BA_Lanes', 'Speed_Limi': 'Speed_Limi', 'Toll_Type': 'Toll_Type', 'Toll_Name': 'Toll_Name', 'Toll_Link': 'Toll_Link', 'Toll_Link_': 'Toll_Link_', 'HPMS_USA_R': 'HPMS_USA_R', 'HPMS_Begin': 'HPMS_Begin', 'HPMS_End_P': 'HPMS_End_P', 'BorderStat': 'BorderStat', 'BorderSt_1': 'BorderSt_1', 'BorderFAF1': 'BorderFAF1', 'BorderFAF2': 'BorderFAF2', 'TRUCKTOLL': 'TRUCKTOLL', 'BorderLink': 'BorderLink', 'AddedBorde': 'AddedBorde', 'AdjustSpee': 'AdjustSpee', 'AdjustReas': 'AdjustReas', 'AB_FinalSp': 'AB_FinalSp', 'BA_FinalSp': 'BA_FinalSp', 'AB_Combine': 'AB_Combine', 'BA_Combine': 'BA_Combine', 'AB_FreeFlo': 'AB_FreeFlo', 'BA_FreeFlo': 'BA_FreeFlo', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_NHFNSecondary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'LENGTH': 'LENGTH', 'DIR': 'DIR', 'DATA': 'DATA', 'VERSION': 'VERSION', 'Class': 'Class', 'Class_Desc': 'Class_Desc', 'Road_Name': 'Road_Name', 'Sign_Rte': 'Sign_Rte', 'Rte_Type': 'Rte_Type', 'Rte_Number': 'Rte_Number', 'Rte_Qualif': 'Rte_Qualif', 'Country': 'Country', 'STATE': 'STATE', 'STFIPS': 'STFIPS', 'County_Nam': 'County_Nam', 'CTFIPS': 'CTFIPS', 'Urban_Code': 'Urban_Code', 'FAFZONE': 'FAFZONE', 'Status': 'Status', 'F_Class': 'F_Class', 'Facility_T': 'Facility_T', 'NHS': 'NHS', 'STRAHNET': 'STRAHNET', 'NHFN': 'NHFN', 'Truck': 'Truck', 'AB_Lanes': 'AB_Lanes', 'BA_Lanes': 'BA_Lanes', 'Speed_Limi': 'Speed_Limi', 'Toll_Type': 'Toll_Type', 'Toll_Name': 'Toll_Name', 'Toll_Link': 'Toll_Link', 'Toll_Link_': 'Toll_Link_', 'HPMS_USA_R': 'HPMS_USA_R', 'HPMS_Begin': 'HPMS_Begin', 'HPMS_End_P': 'HPMS_End_P', 'BorderStat': 'BorderStat', 'BorderSt_1': 'BorderSt_1', 'BorderFAF1': 'BorderFAF1', 'BorderFAF2': 'BorderFAF2', 'TRUCKTOLL': 'TRUCKTOLL', 'BorderLink': 'BorderLink', 'AddedBorde': 'AddedBorde', 'AdjustSpee': 'AdjustSpee', 'AdjustReas': 'AdjustReas', 'AB_FinalSp': 'AB_FinalSp', 'BA_FinalSp': 'BA_FinalSp', 'AB_Combine': 'AB_Combine', 'BA_Combine': 'BA_Combine', 'AB_FreeFlo': 'AB_FreeFlo', 'BA_FreeFlo': 'BA_FreeFlo', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_OversizeOverweightRestrictions_4.set('fieldAliases', {'Route': 'Route', 'BeginRefPo': 'BeginRefPo', 'EndRefPoin': 'EndRefPoin', 'HighwayNum': 'HighwayNum', 'Full_Closu': 'Full_Closu', 'Direction': 'Direction', 'Restrictio': 'Restrictio', 'Highway_Ty': 'Highway_Ty', 'LOC_ERROR': 'LOC_ERROR', 'OBJECTID': 'OBJECTID', 'Shape__Len': 'Shape__Len', });
lyr_Landslides_5.set('fieldAliases', {'FID': 'FID', 'Sheet_Sour': 'Sheet_Sour', 'Route': 'Route', 'Event_Type': 'Event_Type', 'Slope_Dire': 'Slope_Dire', 'Begin_MP': 'Begin_MP', 'End_MP': 'End_MP', 'F10th_MP': 'F10th_MP', 'VLookUp_ID': 'VLookUp_ID', 'Lat': 'Lat', 'Long': 'Long', 'GeoHaz_ID': 'GeoHaz_ID', 'Notes': 'Notes', });
lyr_CO_Fires_2011_2020_6.set('fieldAliases', {'FID': 'FID', 'objectid': 'objectid', 'Incident_n': 'Incident_n', 'Incident_P': 'Incident_P', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_RecordedAvalanches_7.set('fieldAliases', {'OBJECTID': 'FID', 'pathName': 'Path Name', 'pathCode': 'Path Code', 'pathAlias': 'Path Alias', 'pathComments': 'Path Comments', 'GlobalID': 'GlobalID', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'MilePost': 'MilePost', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Region1Mask_8.set('fieldAliases', {'Boundary': 'Boundary', });
lyr_Region2Mask_9.set('fieldAliases', {'Boundary': 'Boundary', });
lyr_Region3Mask_10.set('fieldAliases', {'Boundary': 'Boundary', });
lyr_Region4Mask_11.set('fieldAliases', {'Boundary': 'Boundary', });
lyr_Region5Mask_12.set('fieldAliases', {'Boundary': 'Boundary', });
lyr_CO_Freight_Corridors_1_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'FREIGHT_ON': 'TextEdit', 'FREIGHT__1': 'TextEdit', 'FREIGHT__2': 'TextEdit', 'FREIGHT__3': 'TextEdit', 'Length': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NHFNPrimary_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'LENGTH': 'TextEdit', 'DIR': 'TextEdit', 'DATA': 'TextEdit', 'VERSION': 'TextEdit', 'Class': 'TextEdit', 'Class_Desc': 'TextEdit', 'Road_Name': 'TextEdit', 'Sign_Rte': 'TextEdit', 'Rte_Type': 'TextEdit', 'Rte_Number': 'TextEdit', 'Rte_Qualif': 'TextEdit', 'Country': 'TextEdit', 'STATE': 'TextEdit', 'STFIPS': 'TextEdit', 'County_Nam': 'TextEdit', 'CTFIPS': 'TextEdit', 'Urban_Code': 'TextEdit', 'FAFZONE': 'TextEdit', 'Status': 'TextEdit', 'F_Class': 'TextEdit', 'Facility_T': 'TextEdit', 'NHS': 'TextEdit', 'STRAHNET': 'TextEdit', 'NHFN': 'TextEdit', 'Truck': 'TextEdit', 'AB_Lanes': 'TextEdit', 'BA_Lanes': 'TextEdit', 'Speed_Limi': 'TextEdit', 'Toll_Type': 'TextEdit', 'Toll_Name': 'TextEdit', 'Toll_Link': 'TextEdit', 'Toll_Link_': 'TextEdit', 'HPMS_USA_R': 'TextEdit', 'HPMS_Begin': 'TextEdit', 'HPMS_End_P': 'TextEdit', 'BorderStat': 'TextEdit', 'BorderSt_1': 'TextEdit', 'BorderFAF1': 'TextEdit', 'BorderFAF2': 'TextEdit', 'TRUCKTOLL': 'TextEdit', 'BorderLink': 'TextEdit', 'AddedBorde': 'TextEdit', 'AdjustSpee': 'TextEdit', 'AdjustReas': 'TextEdit', 'AB_FinalSp': 'TextEdit', 'BA_FinalSp': 'TextEdit', 'AB_Combine': 'TextEdit', 'BA_Combine': 'TextEdit', 'AB_FreeFlo': 'TextEdit', 'BA_FreeFlo': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_NHFNSecondary_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'LENGTH': 'TextEdit', 'DIR': 'TextEdit', 'DATA': 'TextEdit', 'VERSION': 'TextEdit', 'Class': 'TextEdit', 'Class_Desc': 'TextEdit', 'Road_Name': 'TextEdit', 'Sign_Rte': 'TextEdit', 'Rte_Type': 'TextEdit', 'Rte_Number': 'TextEdit', 'Rte_Qualif': 'TextEdit', 'Country': 'TextEdit', 'STATE': 'TextEdit', 'STFIPS': 'TextEdit', 'County_Nam': 'TextEdit', 'CTFIPS': 'TextEdit', 'Urban_Code': 'TextEdit', 'FAFZONE': 'TextEdit', 'Status': 'TextEdit', 'F_Class': 'TextEdit', 'Facility_T': 'TextEdit', 'NHS': 'TextEdit', 'STRAHNET': 'TextEdit', 'NHFN': 'TextEdit', 'Truck': 'TextEdit', 'AB_Lanes': 'TextEdit', 'BA_Lanes': 'TextEdit', 'Speed_Limi': 'TextEdit', 'Toll_Type': 'TextEdit', 'Toll_Name': 'TextEdit', 'Toll_Link': 'TextEdit', 'Toll_Link_': 'TextEdit', 'HPMS_USA_R': 'TextEdit', 'HPMS_Begin': 'TextEdit', 'HPMS_End_P': 'TextEdit', 'BorderStat': 'TextEdit', 'BorderSt_1': 'TextEdit', 'BorderFAF1': 'TextEdit', 'BorderFAF2': 'TextEdit', 'TRUCKTOLL': 'TextEdit', 'BorderLink': 'TextEdit', 'AddedBorde': 'TextEdit', 'AdjustSpee': 'TextEdit', 'AdjustReas': 'TextEdit', 'AB_FinalSp': 'TextEdit', 'BA_FinalSp': 'TextEdit', 'AB_Combine': 'TextEdit', 'BA_Combine': 'TextEdit', 'AB_FreeFlo': 'TextEdit', 'BA_FreeFlo': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_OversizeOverweightRestrictions_4.set('fieldImages', {'Route': '', 'BeginRefPo': '', 'EndRefPoin': '', 'HighwayNum': '', 'Full_Closu': '', 'Direction': '', 'Restrictio': '', 'Highway_Ty': '', 'LOC_ERROR': '', 'OBJECTID': '', 'Shape__Len': '', });
lyr_Landslides_5.set('fieldImages', {'FID': 'TextEdit', 'Sheet_Sour': 'TextEdit', 'Route': 'TextEdit', 'Event_Type': 'TextEdit', 'Slope_Dire': 'TextEdit', 'Begin_MP': 'TextEdit', 'End_MP': 'TextEdit', 'F10th_MP': 'TextEdit', 'VLookUp_ID': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'GeoHaz_ID': 'TextEdit', 'Notes': 'TextEdit', });
lyr_CO_Fires_2011_2020_6.set('fieldImages', {'FID': '', 'objectid': '', 'Incident_n': '', 'Incident_P': '', 'Shape__Area': '', 'Shape__Length': '', });
lyr_RecordedAvalanches_7.set('fieldImages', {'OBJECTID': '', 'pathName': '', 'pathCode': '', 'pathAlias': '', 'pathComments': '', 'GlobalID': '', 'CENTROID_X': '', 'CENTROID_Y': '', 'MilePost': '', 'Shape__Area': '', 'Shape__Length': '', });
lyr_Region1Mask_8.set('fieldImages', {'Boundary': 'TextEdit', });
lyr_Region2Mask_9.set('fieldImages', {'Boundary': 'TextEdit', });
lyr_Region3Mask_10.set('fieldImages', {'Boundary': 'TextEdit', });
lyr_Region4Mask_11.set('fieldImages', {'Boundary': 'TextEdit', });
lyr_Region5Mask_12.set('fieldImages', {'Boundary': 'TextEdit', });
lyr_CO_Freight_Corridors_1_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'FREIGHT_ON': 'no label', 'FREIGHT__1': 'no label', 'FREIGHT__2': 'no label', 'FREIGHT__3': 'no label', 'Length': 'no label', 'Shape_Leng': 'no label', 'Shape__Length': 'no label', });
lyr_NHFNPrimary_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'LENGTH': 'no label', 'DIR': 'no label', 'DATA': 'no label', 'VERSION': 'no label', 'Class': 'no label', 'Class_Desc': 'no label', 'Road_Name': 'no label', 'Sign_Rte': 'no label', 'Rte_Type': 'no label', 'Rte_Number': 'no label', 'Rte_Qualif': 'no label', 'Country': 'no label', 'STATE': 'no label', 'STFIPS': 'no label', 'County_Nam': 'no label', 'CTFIPS': 'no label', 'Urban_Code': 'no label', 'FAFZONE': 'no label', 'Status': 'no label', 'F_Class': 'no label', 'Facility_T': 'no label', 'NHS': 'no label', 'STRAHNET': 'no label', 'NHFN': 'no label', 'Truck': 'no label', 'AB_Lanes': 'no label', 'BA_Lanes': 'no label', 'Speed_Limi': 'no label', 'Toll_Type': 'no label', 'Toll_Name': 'no label', 'Toll_Link': 'no label', 'Toll_Link_': 'no label', 'HPMS_USA_R': 'no label', 'HPMS_Begin': 'no label', 'HPMS_End_P': 'no label', 'BorderStat': 'no label', 'BorderSt_1': 'no label', 'BorderFAF1': 'no label', 'BorderFAF2': 'no label', 'TRUCKTOLL': 'no label', 'BorderLink': 'no label', 'AddedBorde': 'no label', 'AdjustSpee': 'no label', 'AdjustReas': 'no label', 'AB_FinalSp': 'no label', 'BA_FinalSp': 'no label', 'AB_Combine': 'no label', 'BA_Combine': 'no label', 'AB_FreeFlo': 'no label', 'BA_FreeFlo': 'no label', 'SHAPE_Leng': 'no label', });
lyr_NHFNSecondary_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'LENGTH': 'no label', 'DIR': 'no label', 'DATA': 'no label', 'VERSION': 'no label', 'Class': 'no label', 'Class_Desc': 'no label', 'Road_Name': 'no label', 'Sign_Rte': 'no label', 'Rte_Type': 'no label', 'Rte_Number': 'no label', 'Rte_Qualif': 'no label', 'Country': 'no label', 'STATE': 'no label', 'STFIPS': 'no label', 'County_Nam': 'no label', 'CTFIPS': 'no label', 'Urban_Code': 'no label', 'FAFZONE': 'no label', 'Status': 'no label', 'F_Class': 'no label', 'Facility_T': 'no label', 'NHS': 'no label', 'STRAHNET': 'no label', 'NHFN': 'no label', 'Truck': 'no label', 'AB_Lanes': 'no label', 'BA_Lanes': 'no label', 'Speed_Limi': 'no label', 'Toll_Type': 'no label', 'Toll_Name': 'no label', 'Toll_Link': 'no label', 'Toll_Link_': 'no label', 'HPMS_USA_R': 'no label', 'HPMS_Begin': 'no label', 'HPMS_End_P': 'no label', 'BorderStat': 'no label', 'BorderSt_1': 'no label', 'BorderFAF1': 'no label', 'BorderFAF2': 'no label', 'TRUCKTOLL': 'no label', 'BorderLink': 'no label', 'AddedBorde': 'no label', 'AdjustSpee': 'no label', 'AdjustReas': 'no label', 'AB_FinalSp': 'no label', 'BA_FinalSp': 'no label', 'AB_Combine': 'no label', 'BA_Combine': 'no label', 'AB_FreeFlo': 'no label', 'BA_FreeFlo': 'no label', 'SHAPE_Leng': 'no label', });
lyr_OversizeOverweightRestrictions_4.set('fieldLabels', {'Route': 'no label', 'BeginRefPo': 'no label', 'EndRefPoin': 'no label', 'HighwayNum': 'no label', 'Full_Closu': 'no label', 'Direction': 'no label', 'Restrictio': 'no label', 'Highway_Ty': 'no label', 'LOC_ERROR': 'no label', 'OBJECTID': 'no label', 'Shape__Len': 'no label', });
lyr_Landslides_5.set('fieldLabels', {'FID': 'no label', 'Sheet_Sour': 'no label', 'Route': 'no label', 'Event_Type': 'no label', 'Slope_Dire': 'no label', 'Begin_MP': 'no label', 'End_MP': 'no label', 'F10th_MP': 'no label', 'VLookUp_ID': 'no label', 'Lat': 'no label', 'Long': 'no label', 'GeoHaz_ID': 'no label', 'Notes': 'no label', });
lyr_CO_Fires_2011_2020_6.set('fieldLabels', {'FID': 'no label', 'objectid': 'no label', 'Incident_n': 'no label', 'Incident_P': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_RecordedAvalanches_7.set('fieldLabels', {'OBJECTID': 'no label', 'pathName': 'no label', 'pathCode': 'no label', 'pathAlias': 'no label', 'pathComments': 'no label', 'GlobalID': 'no label', 'CENTROID_X': 'no label', 'CENTROID_Y': 'no label', 'MilePost': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_Region1Mask_8.set('fieldLabels', {'Boundary': 'no label', });
lyr_Region2Mask_9.set('fieldLabels', {'Boundary': 'no label', });
lyr_Region3Mask_10.set('fieldLabels', {'Boundary': 'no label', });
lyr_Region4Mask_11.set('fieldLabels', {'Boundary': 'no label', });
lyr_Region5Mask_12.set('fieldLabels', {'Boundary': 'no label', });
lyr_Region5Mask_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
