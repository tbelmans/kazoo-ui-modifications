function loadScript(e) {
    $LAB.script(e)
}

function loadLanguages(e) {
    for (var t = 0; t < langUrls.length; t++) loadScript(langUrls[t] + "/lang/" + e + ".js")
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

window.translate = [];
var language = "nl";
language == "auto" && (language = navigator.language), window.language = language, _t = function(e, t) {
    return e && t ? response = window.translate[e][t] : (console.log("i18n field missing: " + e + "." + t), response = ""), response
};

var ui_lang = getParameterByName("lang");
if (ui_lang == "") {
	ui_lang = language;
}

var langUrls = ["config", "whapps/accounts/accounts_manager", "whapps/auth/auth", "whapps/auth/onboarding", "whapps/call_center/dashboard", "whapps/call_center/queue", "whapps/core/layout", "whapps/core/linknav", "whapps/core/whappnav", "whapps/developer/api", "whapps/myaccount/app_store", "whapps/myaccount/billing", "whapps/myaccount/credits", "whapps/myaccount/myaccount", "whapps/myaccount/nav", "whapps/myaccount/personal_info", "whapps/myaccount/report", "whapps/myaccount/statistics", "whapps/numbers/numbers_manager", "whapps/pbxs/pbxs_manager", "whapps/userportal/portal_manager", "whapps/voip/account", "whapps/voip/bulk", "whapps/voip/callflow", "whapps/voip/cdr", "whapps/voip/conference", "whapps/voip/device", "whapps/voip/directory", "whapps/voip/featurecode", "whapps/voip/groups", "whapps/voip/media", "whapps/voip/prompt", "whapps/voip/blacklist", "whapps/voip/menu", "whapps/voip/queue", "whapps/voip/registration", "whapps/voip/resource", "whapps/voip/timeofday", "whapps/voip/user", "whapps/voip/vmbox", "whapps/voip/faxbox", "whapps/voip/voip"];
loadLanguages(ui_lang), window.language !== ui_lang && loadLanguages(ui_lang), $LAB.script("config/config.js").wait().script("config/loadFavicon.js");
