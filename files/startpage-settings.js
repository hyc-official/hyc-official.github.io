var settings_save = function () {
    names = ["DarkMode", "DefaultEngine"], values = [document.getElementsByName("darkmode")[0].checked ? "1" : "0", document.getElementById("default-engine").selectedIndex.toString()];
    set_cookie(names, values);
    links_save();
    window.alert("设置已保存");
    location.reload();
};
var settings_read = function () {
    return [read_cookie("DarkMode"), read_cookie("DefaultEngine")];
};
var engine_upd = function () {
    engine = read_cookie("DefaultEngine");
    if (engine != null) {
        document.getElementById("select-engine").selectedIndex = engine;
    }
    searchengine_change();
};
var theme_upd = function () {
    if (read_cookie("DarkMode") == "1") {
        document.body.style.backgroundColor = "#35363a";
    }
};
var texttheme_upd = function () {
    if (read_cookie("DarkMode") == "1") {
        document.getElementById("main2").style.color = "#ffffff";
    }
};
var settings_load = function () {
    settings = settings_read();
    document.getElementsByName("darkmode")[0].checked = (settings[0] == "1");
    document.getElementById("default-engine").selectedIndex = settings[1];
};