
/**
 * My custom preferences that are appended after ghacks-user.js.
 *
 * Every option that is overrided has a number that explain the purpose of that
 * option.
 */

user_pref("_user.js.parrot", "syntax error @ BEGIN USER CUSTOMIZATIONS");

user_pref("browser.startup.page", 1); // 0102
user_pref("browser.startup.homepage", "https://start.duckduckgo.com/"); // 0103

user_pref("browser.search.countryCode", "IT"); // 0202
user_pref("browser.search.region", "IT"); // 0202

user_pref("intl.locale.matchOS", true); // 0203

user_pref("intl.accept_languages", "it-IT, it, en-US, en"); // 0207

user_pref("javascript.use_us_english_locale", false); // 0208

user_pref("browser.safebrowsing.malware.enabled", false); // 0410
user_pref("browser.safebrowsing.phishing.enabled", false); // 0410

user_pref("privacy.trackingprotection.enabled", true); // 0420

user_pref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256,content-track-digest256"); // 0422

user_pref("places.history.enabled", false); // 0862

user_pref("browser.urlbar.autocomplete.enabled", true); // 0850a
user_pref("browser.urlbar.suggest.bookmark", true); // 0850a
user_pref("browser.urlbar.suggest.history", true); // 0850a

user_pref("browser.urlbar.autoFill", true); // 0850d
user_pref("browser.urlbar.autoFill.typed", true); // 0850d

user_pref("signon.rememberSignons", false); // 0901

user_pref("browser.sessionstore.max_tabs_undo", 10); // 1020
user_pref("browser.sessionstore.max_windows_undo", 3); // 1020

user_pref("full-screen-api.enabled", true); // 2418

user_pref("layers.acceleration.disabled", false); // 2508

user_pref("browser.download.folderList", 1); // 2602

user_pref("browser.download.useDownloadDir", true); // 2603

user_pref("browser.download.forbid_open_with", false); // 2662

user_pref("network.cookie.cookieBehavior", 1); // 2701

user_pref("network.cookie.thirdparty.sessionOnly", false); // 2702

user_pref("privacy.clearOnShutdown.cache", false); // 2803
user_pref("privacy.clearOnShutdown.sessions", false); //  2803

user_pref("clipboard.autocopy", false); // 5005

user_pref("alerts.showFavicons", true); // 1031

user_pref("browser.newtabpage.directory.ping", "data:text/plain,"); // 0360

user_pref("security.ssl3.dhe_rsa_aes_128_sha", false); // 1263
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false); // 1263

user_pref("clipboard.autocopy", false); // 5005

user_pref("privacy.userContext.enabled", true); // 1702

user_pref("keyword.enabled", true); // 0801

// Prefs not documented.

// Set the default search engine to DuckDuckGo.
user_pref("browser.search.defaultenginename", "DuckDuckGo");
user_pref("browser.search.order.1", "DuckDuckGo");

user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.tabs", false);

// UI-element-popup-tips.
user_pref("browser.chrome.toolbar_tips", false);

// Mouse scroll speed.
user_pref("mousewheel.default.delta_multiplier_y", 200);

user_pref("_user.js.parrot", "user settings loaded");
