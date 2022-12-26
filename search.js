baidu_url = "https://www.baidu.com/s?wd=\"%KeyWord%\"&ie=UTF-8";
var redirect = function () {
    search_val = document.getElementById("search-box").value;
    if (search_val == "")
        window.open("https://www.baidu.com");
    else
        window.open(baidu_url.replace(/%KeyWord%/g, search_val));
};
document.getElementById("search-button").onclick = redirect;
document.onkeydown = function () {
    if (event.keyCode == 13) {
        redirect();
    }
};