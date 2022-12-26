baidu_url = "https://www.baidu.com/s?wd=\"%KeyWord%\"";
bing_url = "https://cn.bing.com/search?q=%KeyWord%";
fsou_url = "https://fsoufsou.com/search?q=%KeyWord%";
search_url = baidu_url;
placeholder_template = "使用 %Word% 搜索";
var baidu = function () {
    search_url = baidu_url;
    document.getElementById("search-box").placeholder = placeholder_template.replace(/%Word%/g, "百度");
};
var bing = function () {
    search_url = bing_url;
    document.getElementById("search-box").placeholder = placeholder_template.replace(/%Word%/g, "必应");
};
var fsou = function () {
    search_url = fsou_url;
    document.getElementById("search-box").placeholder = placeholder_template.replace(/%Word%/g, "F 搜");
};
var change = function () {
    selection = document.getElementById("select-engine").selectedIndex;
    if (selection == 0) {
        baidu();
    }
    if (selection == 1) {
        bing();
    }
    if (selection == 2) {
        fsou();
    }
};
var redirect = function () {
    search_val = document.getElementById("search-box").value;
    window.open(search_url.replace(/%KeyWord%/g, search_val));
};
document.onkeydown = function () {
    if (event.keyCode == 13) {
        redirect();
    }
};