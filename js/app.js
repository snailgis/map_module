/*
* token
* */
function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
}

function getToken() {
    return localStorage.getItem(TOKEN_KEY) || null
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY)
}

/*
* 初始化axios配置
* */
(function initHttpRequest(){
    axios.defaults.headers.common['Authorization'] = getToken()
})()

/**
 * 地图
 */
function setMap() {
    require([
        "MapModule/MapJS",
        "dojo/domReady!"
    ],function (
        MapJS
    ) {
        MapJS.mapping();
        MapJS.pointCluster();
        MapJS.markerCluster();
        MapJS.flareCluster();
    })
}

