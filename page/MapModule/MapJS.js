/***
 * creator woniugis
 */
var info = [];
define([
        "dojo/parser",//  Dom/Widget解析包
        "esri/map",
        "esri/geometry/Extent",
        "dojo/on",
        "dijit/form/CheckBox",
        "dijit/layout/TabContainer",
        "dijit/layout/ContentPane",
        "esri/dijit/HomeButton",
        "esri/dijit/Scalebar",
        "dojo/dom",
        "dojo/dom-construct",
        "dojo/dom-style",
        "dojo/dom-attr",
        "dojo/fx",
        "dojo/_base/array",
        "esri/request",
        "esri/SpatialReference",
        "esri/layers/ArcGISTiledMapServiceLayer",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/layers/FeatureLayer",
        "esri/layers/GraphicsLayer",
        "esri/renderers/HeatmapRenderer",
        "esri/toolbars/navigation",
        "esri/dijit/PopupTemplate",
        "esri/InfoTemplate",
        "esri/geometry/Point",
        "esri/graphic",
        "esri/geometry/webMercatorUtils",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleFillSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/PictureMarkerSymbol",
        "esri/symbols/TextSymbol",
        "esri/symbols/Font",
        "esri/Color",
        "esri/renderers/ClassBreaksRenderer",
        "MapModule/TDTTilesLayer",
        "MapModule/ClusterLayer",
        "MapModule/FlareClusterLayer_v3",
        "dojo/domReady!"
    ], function (parser,
                 Map,
                 Extent,
                 on,
                 CheckBox,
                 TabContainer,
                 ContentPane,
                 HomeButton,
                 Scalebar,
                 dom,
                 domConstruct,
                 DomStyle,
                 Domattr,
                 fx,
                 arrayUtils,
                 esriRequest,
                 SpatialReference,
                 ArcGISTiledMapServiceLayer,
                 ArcGISDynamicMapServiceLayer,
                 FeatureLayer,
                 GraphicsLayer,
                 HeatmapRenderer,
                 navigation,
                 PopupTemplate,
                 InfoTemplate,
                 Point,
                 Graphic,
                 webMercatorUtils,
                 SimpleMarkerSymbol,
                 SimpleFillSymbol,
                 SimpleLineSymbol,
                 PictureMarkerSymbol,
                 TextSymbol,
                 Font,
                 Color,
                 ClassBreaksRenderer,
                 TDTTilesLayer,
                 ClusterLayer,
                 FlareClusterLayer) {
        return {
            /**
             * 地图初始化及地图部件
             */
            map: 0,
            mapping: function () {
                map = new Map("map", {
                    zoom: 13,
                    maxZoom: 17,
                    sliderPosition: "bottom-right",
                    center: [108.723959, 34.356672],
                    logo: false
                });
                let homeBtn = new HomeButton({
                    map: map
                }, "HomeButton");
                homeBtn.startup();
                // let tiledLayer=new ArcGISTiledMapServiceLayer("http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer");
                // map.addLayer(tiledLayer);
                /**
                 * 加载天地图底图服务(TDTTilesLayer.js)
                 * "img"表示加载影像数据，"cia"为影像标注，"vec"为矢量地图,"cva"为矢量标注
                 */
                let tiledvec_c = new TDTTilesLayer("vec");//矢量
                let tiledimg_c = new TDTTilesLayer("img");//影像
                let tiledcva_c = new TDTTilesLayer("cva");//矢量标注
                let tiledcia_c = new TDTTilesLayer("cia");//影像标注
                map.addLayers([tiledvec_c, tiledcva_c]);
                map.addLayers([tiledimg_c, tiledcia_c]);
                tiledimg_c.hide();
                tiledcia_c.hide();
                //咸阳市2.5D都市圈地图
                let xy_25D1 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url01);
                let xy_25D2 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url02);
                let xy_25D3 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url03);
                let xy_25D4 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url04);
                let xy_25D5 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url05);
                let xy_25D6 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url06);
                let xy_25D7 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url07);
                let xy_25D8 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url08);
                let xy_25D9 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url09);
                let xy_25D10 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url10);
                let xy_25D11 = new ArcGISTiledMapServiceLayer(xyMap.xy25D[0].services.url11);
                map.addLayers([xy_25D1, xy_25D2, xy_25D3, xy_25D4, xy_25D5, xy_25D6, xy_25D7, xy_25D8, xy_25D9, xy_25D10, xy_25D11]);

                //本地咸阳市遥感影像切片
                let xy_TDTImg1 = new ArcGISTiledMapServiceLayer(xyMap.basemap.img2.url, {displayLevels: [8, 9, 10, 11]});
                let xy_TDTImg = new ArcGISTiledMapServiceLayer(xyMap.basemap.img.url, {displayLevels: [12, 13, 14, 15, 16, 17, 18]});
                let xy_TDTImgLabel = new ArcGISTiledMapServiceLayer(xyMap.basemap.imglable.url);
                map.addLayers([xy_TDTImg1, xy_TDTImg, xy_TDTImgLabel]);
                xy_TDTImg1.hide();
                xy_TDTImg.hide();
                xy_TDTImgLabel.hide();
                //咸阳市本地矢量地图
                let xy_TDTVec = new ArcGISTiledMapServiceLayer(xyMap.basemap.vec.url);
                map.addLayer(xy_TDTVec);
                xy_TDTVec.hide();


                /**
                 * 地图底图切换
                 * @param layer
                 */
                showMap = function (layer) {
                    switch (layer) {
                        case "vec": {
                            $("#vec").addClass("on");
                            $("#img").removeClass("on");
                            $("#ter").removeClass("on");
                            $("#25d").removeClass("on");
                            tiledvec_c.show();
                            tiledcva_c.show();
                            xy_TDTVec.show();
                            tiledimg_c.hide();
                            tiledcia_c.hide();
                            xy_TDTImg1.hide();
                            xy_TDTImg.hide();
                            xy_TDTImgLabel.hide();
                            xy_25D1.hide();
                            xy_25D2.hide();
                            xy_25D3.hide();
                            xy_25D4.hide();
                            xy_25D5.hide();
                            xy_25D6.hide();
                            xy_25D7.hide();
                            xy_25D8.hide();
                            xy_25D9.hide();
                            xy_25D10.hide();
                            xy_25D11.hide();
                            break;
                        }
                        case "img": {
                            $("#vec").removeClass("on");
                            $("#img").addClass("on");
                            $("#ter").removeClass("on");
                            $("#25d").removeClass("on");
                            tiledimg_c.show();
                            tiledcia_c.show();
                            tiledvec_c.hide();
                            tiledcva_c.hide();
                            xy_TDTImg1.show();
                            xy_TDTImg.show();
                            xy_TDTImgLabel.show();
                            xy_TDTVec.hide();
                            xy_25D1.hide();
                            xy_25D2.hide();
                            xy_25D3.hide();
                            xy_25D4.hide();
                            xy_25D5.hide();
                            xy_25D6.hide();
                            xy_25D7.hide();
                            xy_25D8.hide();
                            xy_25D9.hide();
                            xy_25D10.hide();
                            xy_25D11.hide();
                            break;
                        }
                        case "ter": {
                            $("#vec").removeClass("on");
                            $("#img").removeClass("on");
                            $("#ter").addClass("on");
                            $("#25d").removeClass("on");
                            tiledimg_c.hide();
                            tiledcia_c.hide();
                            xy_TDTImg1.hide();
                            xy_TDTImg.hide();
                            xy_TDTImgLabel.hide();
                            xy_TDTVec.show();
                            tiledvec_c.show();
                            tiledcva_c.show();
                            xy_25D1.hide();
                            xy_25D2.hide();
                            xy_25D3.hide();
                            xy_25D4.hide();
                            xy_25D5.hide();
                            xy_25D6.hide();
                            xy_25D7.hide();
                            xy_25D8.hide();
                            xy_25D9.hide();
                            xy_25D10.hide();
                            xy_25D11.hide();
                            map.centerAndZoom(new Point({
                                "x": 108.4,
                                "y": 34.8,
                                "spatialReference": {"wkid": 4326}
                            }), 8);
                            break;
                        }
                        default : {
                            $("#vec").removeClass("on");
                            $("#img").removeClass("on");
                            $("#ter").removeClass("on");
                            $("#25d").addClass("on");
                            xy_25D1.show();
                            xy_25D2.show();
                            xy_25D3.show();
                            xy_25D4.show();
                            xy_25D5.show();
                            xy_25D6.show();
                            xy_25D7.show();
                            xy_25D8.show();
                            xy_25D9.show();
                            xy_25D10.show();
                            xy_25D11.show();
                            tiledvec_c.show();
                            tiledcva_c.show();
                            xy_TDTImg1.hide();
                            xy_TDTImg.hide();
                            xy_TDTImgLabel.hide();
                            xy_TDTVec.hide();
                            tiledimg_c.hide();
                            tiledcia_c.hide();
                            map.centerAndZoom(new Point({
                                "x": 108.723959,
                                "y": 34.356672,
                                "spatialReference": {"wkid": 4326}
                            }), 13);
                            break;
                        }
                    }
                }
            },
            /**
             * 基于arcgis api的点聚类功能（调用ClusterLayer）
             */
            pointCluster: function () {
                let clusterLayer = null;
                on(dom.byId("cy_cluster"), "click", function () {
                    let tempUrl = "../data/test/产业总体.json";
                    if (clusterLayer != null) {
                        map.removeLayer(clusterLayer);
                        clusterLayer = null;
                    } else {
                        pointCluster(tempUrl);
                    }
                });

                function pointCluster(tempUrl) {

                    let data = getDataByJson(tempUrl);

                    // 调用聚类构造函数创建图层
                    clusterLayer = new ClusterLayer({
                        "data": data,
                        "distance": 50,
                        "id": "clusters",
                        "labelColor": "#000000",
                        "labelOffset": 10,
                        "singleColor": "#888",
                        "showSingles": false,
                        "spatialReference": new SpatialReference({"wkid": 4326})
                    });
                    var defaultSym = new SimpleMarkerSymbol().setSize(4);
                    var renderer = new ClassBreaksRenderer(defaultSym, "clusterCount");
                    var blue = new PictureMarkerSymbol("../img/clusterimg/Blue.png", 42, 42).setOffset(0, 10);
                    var green = new PictureMarkerSymbol("../img/clusterimg/Pick.png", 56, 56).setOffset(0, 10);
                    var red = new PictureMarkerSymbol("../img/clusterimg/Red.png", 64, 64).setOffset(0, 10);
                    renderer.addBreak(0, 2, blue);
                    renderer.addBreak(2, 50, green);
                    renderer.addBreak(50, 1000000, red);
                    clusterLayer.setRenderer(renderer);
                    map.addLayer(clusterLayer);
                }

                /**
                 * 设置聚类点的样式（公共方法）
                 * 其中defaultSym是在break断层（如果一开始是从2到20的话，那么0到2的渲染符号就是defaultSym）时的渲染图形，
                 * 也是定义ClassBreaksRenderer必须要有的参数。
                 */
                function getDataByJson(tempUrl) {
                    let json = getJson(tempUrl);
                    let temp = json.RECORDS;
                    let markers = [];
                    for (let i = 0; i < temp.length; i++) {
                        let latlng = new Point(parseFloat(temp[i].CGCSLNG), parseFloat(temp[i].CGCSLAT), new SpatialReference({"wkid": 4326}));
                        let webMercator = webMercatorUtils.geographicToWebMercator(latlng);
                        markers[i] = {
                            "attributes": {
                                '村主导产业类型': temp[i].村主导产业类型,
                                '村名': temp[i].VILLAGE_NAME,
                                '市县镇': temp[i].AREA_DESC,
                            },
                            'x': webMercator.x,
                            'y': webMercator.y
                        };
                    }
                    return markers;
                }
            },
            /**
             * 统计聚类功能
             */
            markerCluster: function () {
                var markerLayer = null;
                var pointLayer = null;

                on(dom.byId("tj_cluster"), "click", function () {
                    if (markerLayer != null && pointLayer != null) {
                        map.removeLayer(markerLayer);
                        map.removeLayer(pointLayer);
                        markerLayer = null;
                        pointLayer = null
                    } else {
                        countAndCluster();
                    }
                });

                function countAndCluster() {
                    //统计聚类marker图层
                    markerLayer = new GraphicsLayer();
                    map.addLayer(markerLayer);
                    //所有产业点的显示图层
                    pointLayer = new GraphicsLayer();
                    map.addLayer(pointLayer);

                    //let markers = getDataByExtent(map.getZoom(), "groupList");
                    let markers = getDataByJson(map.getZoom(), "../data/test/markerLayers.json");
                    addPoint(markers);

                    //"extent-change"事件与click事件存在冲突，可临时更改事件为zoom-end
                    map.on("zoom-end", function () {
                        let zoomLevel = map.getZoom();
                        if (zoomLevel < 16) {
                            pointLayer.clear();
                            // let markers = getDataByExtent(zoomLevel, "groupList");
                            let markers = getDataByJson(zoomLevel, "../data/test/markerLayers.json");
                            addPoint(markers);
                        } else {
                            markerLayer.clear();
                            // let markers = getDataByExtent(zoomLevel, "list");
                            let markers = getDataByJson(zoomLevel, "../data/test/pointLayers.json");
                            addPoint(markers);
                        }
                    });
                    // 点击marker地图缩放
                    markerLayer.on("click", function (e) {
                        let graphic = e.graphic;
                        let zoomLevel = map.getZoom();
                        if (zoomLevel < 16) {
                            if (graphic) {
                                map.centerAndZoom(graphic.geometry, zoomLevel + 2);
                            } else {
                                map.setZoom(zoomLevel + 2);
                            }
                        }
                    });

                    pointLayer.on("click", function (e) {
                        let graphic = e.graphic;
                        let key = graphic.attributes.id;
                        let iframeData = ''
                        //点击marker是通过key查询相应的信息
                        $.ajax({
                            async: false,
                            url: "http://61.185.20.20:5001/cyDp/cyVillageList?",
                            type: "get",
                            dataType: "json",
                            success: function (data) {
                                iframeData = data.data
                                console.log(iframeData)
                            },
                            error: function (err) {
                                console.log(err);
                            }
                        })
                        /**
                         * 使用layer的弹窗功能，在传参上遇到了
                         1. 父页面给子页面传参；这个可以在url后拼接，比如test.html?a=1
                         2. 父页面获取子页面操作DOM
                         * 我是想直接将父页面获取到的json数据串传到子页面sj-Infomation.html中,不在父页面操作子页面dom,
                         * 而是在子页面中使用vue拼数据，尚未实现
                         */
                        layer.open({
                            type: 2,
                            title: "事件信息",
                            shadeClose: true,
                            shade: false,
                            //maxmin: true, //开启最大化最小化按钮
                            area: ['600px', '400px'],
                            content: "sj-Infomation.html",
                            success: function (dom) {
                                let iframeDom = $(dom[0]).find("iframe").eq(0).contents();
                                iframeDom.find("#addr").html(iframeData[0].villageName)
                            }
                        });
                    })

                    function getData(base, callback) {
                        let pointArray = [];
                        let baseUrl = "http://10.48.240.216:8080/msjb/screen";
                        baseUrl = baseUrl + "/" + base;
                        $.ajax({
                            async: false,
                            url: baseUrl,
                            type: "get",
                            dataType: "json",
                            success: function (data) {
                                if (data) {
                                    callback(data);
                                }
                            },
                            error: function (err) {
                                console.log(err);
                            }
                        });
                        return pointArray;
                    }

                    function getDataByJson(zoomLevel, url) {
                        let markers = [];
                        var data = getJson(url);
                        if (zoomLevel < 16) {
                            for (let i = 0; i < data.data.length; i++) {
                                markers[i] = {
                                    "count": data.data[i].countNum,
                                    "area": data.data[i].area,
                                    "lng": data.data[i].lng,
                                    "lat": data.data[i].lat,
                                    "level": 0
                                }
                            }
                        } else {
                            for (let i = 0; i < data.data.length; i++) {
                                markers[i] = {
                                    "area": data.data[i].area,
                                    "lng": data.data[i].lng,
                                    "lat": data.data[i].lat,
                                    "id": data.data[i].id,
                                    "title": data.data[i].title,
                                    "content": data.data[i].content,
                                    "date": data.data[i].data,
                                    "status": data.data[i].status,
                                    "type": data.data[i].type,
                                    "level": 1
                                }
                            }
                        }
                        return markers;
                    }

                    function getDataByExtent(zoomLevel, key) {
                        var markers = [];
                        if (zoomLevel < 16) {
                            getData(key, function (data) {
                                for (let i = 0; i < data.data.length; i++) {
                                    markers[i] = {
                                        "count": data.data[i].countNum,
                                        "area": data.data[i].area,
                                        "lng": data.data[i].lng,
                                        "lat": data.data[i].lat,
                                        "level": 0
                                    }
                                }
                            })
                        } else {
                            getData(key, function (data) {
                                for (let i = 0; i < data.data.length; i++) {
                                    markers[i] = {
                                        "area": data.data[i].area,
                                        "lng": data.data[i].lng,
                                        "lat": data.data[i].lat,
                                        "id": data.data[i].id,
                                        "title": data.data[i].title,
                                        "content": data.data[i].content,
                                        "date": data.data[i].data,
                                        "status": data.data[i].status,
                                        "type": data.data[i].type,
                                        "level": 1
                                    }
                                }
                            })
                        }
                        return markers;
                    }

                    function addPoint(markers) {
                        map.graphics.clear();
                        for (let i in markers) {
                            let currentX = parseFloat(markers[i].lng);
                            let currentY = parseFloat(markers[i].lat);
                            let point = new Point([currentX, currentY], new SpatialReference({wkid: 4326}));
                            if (markers[i].level == 0) {
                                let icon = "../img/clusterimg/Pick.png";
                                let pictureMarkerSymbol = new PictureMarkerSymbol(icon, 56, 56);
                                pictureMarkerSymbol.setOffset(0, 18);
                                let pt = new Graphic(point, pictureMarkerSymbol);
                                let font = new Font("14px", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_NORMAL, "Microsoft YaHei");
                                let label = new TextSymbol(markers[i].count, font, new Color([0, 0, 0])).setOffset(0, 20);
                                let text = new Graphic(point, label);
                                markerLayer.add(pt);
                                markerLayer.add(text);
                            } else {
                                var attr = {
                                    "id": markers[i].id,
                                    "type": markers[i].type,
                                    "area": markers[i].area
                                };
                                var icon = "../img/clusterimg/things.png";
                                var pictureMarkerSymbol = new PictureMarkerSymbol(icon, 28, 28);
                                pictureMarkerSymbol.setOffset(0, 10);
                                var pt = new Graphic(point, pictureMarkerSymbol, attr);
                                pointLayer.add(pt);
                            }
                        }
                    }

                }

            },
            /**
             * 基于FlareClusterLayer开源项目的地图点聚类
             */
            flareCluster: function () {
                var clusterLayer;
                //set some defaults
                var preClustered = false;
                var displaySingleFlaresAtCount = 10;
                var areaDisplayMode = "hover";
                on(dom.byId("flare_cluster"), "click", function () {
                    let allData = getJson("../data/data.json");
                    DataManager.setData(allData);
                    //clearLayer();
                    initLayer()
                });

                function initLayer() {

                    //init the layer, more options are available and explained in the cluster layer constructor
                    clusterLayer = new FlareClusterLayer({
                        id: "flare-cluster-layer",
                        spatialReference: new esri.SpatialReference({"wkid": 4326}),
                        subTypeFlareProperty: "facilityType",
                        singleFlareTooltipProperty: "name",
                        displaySubTypeFlares: true,
                        displaySingleFlaresAtCount: displaySingleFlaresAtCount,
                        flareShowMode: "mouse",
                        preClustered: preClustered,
                        clusterRatio: 75,
                        clusterAreaDisplay: areaDisplayMode,
                        clusteringBegin: function () {
                            console.log("clustering begin");
                        },
                        clusteringComplete: function () {
                            console.log("clustering complete");
                        }
                    });

                    //set up a class breaks renderer to render different symbols based on the cluster count. Use the required clusterCount property to break on.
                    var defaultSym = new SimpleMarkerSymbol().setSize(6).setColor("#FF0000").setOutline(null)
                    var renderer = new ClassBreaksRenderer(defaultSym, "clusterCount");
                    var xlSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 32, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([200, 52, 59, 0.8]), 1), new dojo.Color([250, 65, 74, 0.8]));
                    var lgSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 28, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([41, 163, 41, 0.8]), 1), new dojo.Color([51, 204, 51, 0.8]));
                    var mdSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 24, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([82, 163, 204, 0.8]), 1), new dojo.Color([102, 204, 255, 0.8]));
                    var smSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 22, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([230, 184, 92, 0.8]), 1), new dojo.Color([255, 204, 102, 0.8]));
                    renderer.addBreak(0, 19, smSymbol);
                    renderer.addBreak(20, 150, mdSymbol);
                    renderer.addBreak(151, 1000, lgSymbol);
                    renderer.addBreak(1001, Infinity, xlSymbol);

                    if (areaDisplayMode) {
                        //if area display mode is set. Create a renderer to display cluster areas. Use SimpleFillSymbols as the areas are polygons
                        var defaultAreaSym = new SimpleFillSymbol().setStyle(SimpleFillSymbol.STYLE_SOLID).setColor(new dojo.Color([0, 0, 0, 0.2])).setOutline(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([0, 0, 0, 0.3]), 1));
                        var areaRenderer = new ClassBreaksRenderer(defaultAreaSym, "clusterCount");
                        var xlAreaSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([200, 52, 59, 0.8]), 1), new dojo.Color([250, 65, 74, 0.8]));
                        var lgAreaSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([41, 163, 41, 0.8]), 1), new dojo.Color([51, 204, 51, 0.8]));
                        var mdAreaSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([82, 163, 204, 0.8]), 1), new dojo.Color([102, 204, 255, 0.8]));
                        var smAreaSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([230, 184, 92, 0.8]), 1), new dojo.Color([255, 204, 102, 0.8]));

                        areaRenderer.addBreak(0, 19, smAreaSymbol);
                        areaRenderer.addBreak(20, 150, mdAreaSymbol);
                        areaRenderer.addBreak(151, 1000, lgAreaSymbol);
                        areaRenderer.addBreak(1001, Infinity, xlAreaSymbol);

                        //use the custom overload of setRenderer to include the renderer for areas.
                        clusterLayer.setRenderer(renderer, areaRenderer);
                    }
                    else {
                        clusterLayer.setRenderer(renderer); //use standard setRenderer.
                    }


                    /*//set up a popup template
                    var template = new PopupTemplate({
                        title: "{name}",
                        fieldInfos: [
                            {fieldName: "facilityType", label: "Facility Type", visible: true},
                            {fieldName: "postcode", label: "Post Code", visible: true},
                            {fieldName: "isOpen", label: "Opening Hours", visible: true}
                        ]
                    });
                    clusterLayer.infoTemplate = template;
                    map.infoWindow.titleInBody = false;*/

                    map.addLayer(clusterLayer);

                    //get the first set of data
                    if (preClustered) {
                        getPreClusteredGraphics();
                    }
                    else {
                        //not preclustered - just add the raw data to be clusted within the layer.
                        var data = DataManager.getData();
                        clusterLayer.addData(data);
                    }
                }

                function clearLayer() {
                    map.removeLayer(clusterLayer);
                    clusterLayer = null;
                }

                function getPreClusteredGraphics() {

                    var maxSingleFlareCount = displaySingleFlaresAtCount;

                    var clusterRatio = 75;
                    var clusteredData = DataManager.fakeServerSideClustering(clusterRatio, maxSingleFlareCount, areaDisplayMode, map);
                    clusterLayer.addPreClusteredData(clusteredData);

                }

            }
        }
    }
)

/**
 * 通用方法
 */
//Ajax访问本地json
function getJson(url) {
    if (url == null)
        return;
    let json;
    $.ajaxSettings.async = false;
    $.getJSON(url, function (data) {
        json = data;
    });
    $.ajaxSettings.async = true;
    return json;
}

function test() {
    let vv = ["张三", "李四", "王麻子"];
    return vv;
}

function test2() {
    var clickdata = info;
    return clickdata;
}





