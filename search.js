urls = ["https://www.baidu.com/s?wd=\"%KeyWord%\"", "https://cn.bing.com/search?q=%KeyWord%", "https://fsoufsou.com/search?q=%KeyWord%", "https://zh.moegirl.org.cn/index.php?title=%KeyWord%"];
names = ["百度", "必应", "F 搜", "萌娘百科"];
search_url = urls[0];
placeholder_template = "使用 %Word% 搜索";
var searchengine_change = function () {
    index = document.getElementById("select-engine").selectedIndex;
    search_url = urls[index];
    document.getElementById("search-box").placeholder = placeholder_template.replace(/%Word%/g, names[index]);
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

var setcolor = function (color) {
    document.getElementById("main").style.color = color;
}
Chtholly_times = 0;
var searchtext_change = function () {
    st = document.getElementById("search-box").value;
    if (st == "珂朵莉" || st == "Chtholly") {
        setcolor("#55c8fb");
        document.getElementById("main-header").innerHTML = "Chtholly is so cute!";
        if (++Chtholly_times >= 5) {
            window.alert("珂朵莉是世界上最幸福最可爱的女孩子！\n出现此弹窗的原因：你已经输入了至少 5 次珂朵莉，这是起始页的彩蛋！");
        }
    }
    else {
        setcolor("#68e8bd");
        document.getElementById("main-header").innerHTML = "Heyc's Startpage";
    }
};