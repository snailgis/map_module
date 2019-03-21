/**
 * Created by woniugis on 2019/1/16.
 * 咸阳市通用地图服务封装
 */
var xyMap = {
    "name": "咸阳市通用性地图服务",
    "center": {
        "lng": 108.43,
        "lat": 34.80,
        "level": 8,
        "maxzoom": 18,
        "minzoom": 7
    },
    "extent": {
        "initialExtent": {
            "xmin": null,
            "ymin": null,
            "xmax":null,
            "ymax":null
        },
        "fullExtent":{
            "xmin": null,
            "ymin": null,
            "xmax":null,
            "ymax":null
        }
    },
    "xy25D":[
        {
            "uniqueID":"2.5d",
            "title":"咸阳市都市圈2.5维地图",
            "copyrightText":"陕西省未来数据技术有限公司[原图为都市圈提供]",
            "thumbnail":null,
            "optional": false,
            "services":{
                "text":"ArcGIS Server提供的rest服务（MapServer）",
                "url01":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/001/MapServer",
                "url02":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/002/MapServer",
                "url03":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/003/MapServer",
                "url04":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/004/MapServer",
                "url05":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0021/MapServer",
                "url06":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0022/MapServer",
                "url07":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/new0023/MapServer",
                "url08":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0024/MapServer",
                "url09":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0031/MapServer",
                "url10":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0032/MapServer",
                "url11":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0033/MapServer",
            }
        },
        {
            "uniqueID":"2.5d_wmts_restful",
            "title":"咸阳市都市圈2.5维地图",
            "copyrightText":"陕西省未来数据技术有限公司[原图为都市圈提供]",
            "thumbnail":null,
            "optional": false,
            "services":{
                "text":"ArcGIS Server WMTS RestFul服务",
                "url01":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/001/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url02":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/002/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url03":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/003/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url04":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/004/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url05":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0021/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url06":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0022/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url07":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/new0023/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url08":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0024/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url09":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0031/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url10":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0032/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
                "url11":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0033/MapServer/WMTS/tile/1.0.0/instest/default/default/{z}/{y}/{x}.png",
            }
        },
        {
            "uniqueID":"2.5d_wmts_kvp",
            "title":"咸阳市都市圈2.5维地图",
            "copyrightText":"陕西省未来数据技术有限公司[原图为都市圈提供]",
            "thumbnail":null,
            "optional": false,
            "services":{
                "text":"ArcGIS Server WMTS RestFul服务",
                "url01":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/001/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_001&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url02":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/002/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_002&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url03":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/003/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_003&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url04":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/004/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_004&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url05":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0021/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_0021&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url06":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0022/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_0022&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url07":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/new0023/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_new0023&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url08":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0024/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_0024&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url09":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0031/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_0031&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url10":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0032/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_0032&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                "url11":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/0033/MapServer/WMTS?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=Tiled_0033&STYLE=default&FORMAT=image/png&serviceMode=KVP&TILEMATRIXSET=default&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
            }
        },
        {
            "uniqueID":"2.5d_wms",
            "title":"咸阳市都市圈2.5维地图",
            "copyrightText":"陕西省未来数据技术有限公司[原数据由都市圈提供]",
            "thumbnail":null,
            "optional": false,
            "services":{
                "text":"ArcGIS Server WMS服务",
                "url01":"http://10.63.22.16:6080/arcgis/services/Tiled/001/MapServer/WMSServer",
                "url02":"http://10.63.22.16:6080/arcgis/services/Tiled/002/MapServer/WMSServer",
                "url03":"http://10.63.22.16:6080/arcgis/services/Tiled/003/MapServer/WMSServer",
                "url04":"http://10.63.22.16:6080/arcgis/services/Tiled/004/MapServer/WMSServer",
                "url05":"http://10.63.22.16:6080/arcgis/services/Tiled/0021/MapServer/WMSServer",
                "url06":"http://10.63.22.16:6080/arcgis/services/Tiled/0022/MapServer/WMSServer",
                "url07":"http://10.63.22.16:6080/arcgis/services/Tiled/new0023/MapServer/WMSServer",
                "url08":"http://10.63.22.16:6080/arcgis/services/Tiled/0024/MapServer/WMSServer",
                "url09":"http://10.63.22.16:6080/arcgis/services/Tiled/0031/MapServer/WMSServer",
                "url10":"http://10.63.22.16:6080/arcgis/services/Tiled/0032/MapServer/WMSServer",
                "url11":"http://10.63.22.16:6080/arcgis/services/Tiled/0033/MapServer/WMSServer",
            }
        }
    ],
    "basemap":{
        "uniqueID":"2d",
        "title":"咸阳市基础底图服务",
        "copyrightText":"陕西未来数据信息科技有限公司[基础数据由陕西省地理信息局提供]",
        "thumbnail":null,
        "vec":{
            "text":"咸阳市矢量底图",
            "type": "tiled",
            "optional": false,
            "url":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/XY_VecMap/MapServer"
        },
        "img":{
            "text":"咸阳市遥感底图（L12-L18）",
            "type": "tiled",
            "optional": false,
            "url":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/XY_ImgMap/MapServer"
        },
        "img2":{
            "text":"咸阳市遥感底图（L7-L11）",
            "type": "tiled",
            "optional": false,
            "url":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/XY_ImgMapL7L11/MapServer"
        },
        "imglable":{
            "text":"咸阳市遥感底图标注（L7-L18）",
            "type": "tiled",
            "optional": false,
            "url":"http://10.63.22.16:6080/arcgis/rest/services/Tiled/XY_ImgMapLabel/MapServer"
        }
    },
    "boundary":{
        "uniqueID":"boundary_layer",
        "title":"咸阳市行政区划边界图层服务",
        "copyrightText":"陕西未来数据信息科技有限公司[地理信息局提供]",
        "thumbnail":null,
        "xy_boundary":{
            "text": "咸阳市边界（动态图层）",
            "type": "layer",
            "optional": false,
            "url": "http://10.63.48.169/server/rest/services/JZFP/XY_Region/MapServer/2"
        },
        "city":{
            "text": "咸阳市市级边界",
            "type": "layer",
            "optional": false,
            "url": "http://10.63.22.16:6080/arcgis/rest/services/Tiled/XY_cityline/MapServer"
        },
        "county":{
            "text": "咸阳市县区级边界",
            "type": "layer",
            "optional": false,
            "url": "http://10.63.48.169/server/rest/services/JZFP/XY_Region/MapServer/2"
        },
        "town":{
            "text": "咸阳市乡村级边界",
            "type": "layer",
            "optional": false,
            "url": "http://10.63.48.169/server/rest/services/JZFP/XY_Region/MapServer/2"
        }
    },
    "applayerServer":{
        "uniqueID":"application_layer",
        "title":"咸阳市应用要素图层服务",
        "copyrightText":"陕西未来数据信息科技有限公司",
        "thumbnail":null,
        "1": {
            "url": "",
            "text": ""
        },
        "2": {
            "url": "",
            "text": ""
        },
        "3": {
            "url": "",
            "text": ""
        },
        "4": {
            "url": "",
            "text": ""
        },
    }
};
