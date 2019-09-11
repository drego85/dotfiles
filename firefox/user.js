/**
 * My custom preferences for Mozilla Firefox.
 *
 * For Firefox 66.
 *
 * WARNING: this file must be appended after ghacks-user.js file, because I use
 * these settings, but I also overwrite some of these.
 */

user_pref("_user.js.parrot", "syntax error @ BEGIN USER CUSTOMIZATIONS");

/**
 * 0100: STARTUP
 */

/** 0102: set start page to a custom URL. **/
user_pref("browser.startup.page", 1);

/** 0103: custom URL for start page. **/
user_pref("browser.startup.homepage", "https://start.duckduckgo.com/");


/**
 * 0200: GEOLOCALIZATION
 */

/** 0201: disable geolocalization. **/
user_pref("geo.enabled", false);

/** 0202: disable geolocalization for search results. **/
user_pref("browser.search.countryCode", "UK");
user_pref("browser.search.region", "UK");

/** 0205: set OS & APP locale. **/
user_pref("intl.locale.requested", "en-UK");

/** 0207: set language to match. **/
user_pref("intl.accept_languages", "it-IT, it, en-UK, en");


/**
 * 0300: AUTO UPDATING
 */

/** 0301b: enable auto-update checks for Firefox. **/
user_pref("app.update.enabled", true);

/* 0301b: enable auto-update checks for extensions. **/
user_pref("extensions.update.enabled", true);

/* 0302b: enable auto update installing for extensions. **/
user_pref("extensions.update.autoUpdateDefault", true);


/**
 * 0700: HTTP* / TCP/IP / DNS / PROXY / SOCKS etc
 */

/** 0707: disable DoH. **/
user_pref("network.trr.mode", 5);


/**
 * 0800: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS [SETUP]
 */

/* 0801: enable location bar using search. **/
user_pref("keyword.enabled", true);

/** 0850a: enable location bar autocomplete and suggestion types. **/
user_pref("browser.urlbar.autocomplete.enabled", true);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.suggest.openpage", true);

/** 0850d: enable location bar autofill. **/
user_pref("browser.urlbar.autoFill", true);
user_pref("browser.urlbar.autoFill.typed", true);


/**
 * 0900: PASSWORDS
 */

/** 0901: disable saving passwords. **/
user_pref("signon.rememberSignons", false);


/**
 * 1000: CACHE [SETUP]
 */

/** 1003: RAM cache capacity. **/
user_pref("browser.cache.memory.capacity", 30000);
user_pref("browser.cache.memory.max_entry_size", 30000);

/** 1020: enable the Session Restore service. **/
user_pref("browser.sessionstore.max_tabs_undo", 10);
user_pref("browser.sessionstore.max_windows_undo", 3);


/**
 * 1400: FONTS
 */

/** 1401: enable websites choosing fonts.
 * Note: I use uBlock Origin to block by default all fonts.
 */
user_pref("browser.display.use_document_fonts", 1);


/**
 * 2200: WINDOW MEDDLING & LEAKS / POPUPS
 */

/** 2204: enable Fullscreen API (YouTube). **/
user_pref("full-screen-api.enabled", true);


/**
 * 2500: HARDWARE FINGERPRINTING
 */

/** 2508: enable hardware acceleration (for performances). **/
user_pref("layers.acceleration.disabled", false);


/**
 * 2600: MISCELLANEOUS
 */

/** 2650: default downloads folder. **/
user_pref("browser.download.folderList", 1);

/** 2651: do not ask everytime where to download a file. **/
user_pref("browser.download.useDownloadDir", true);

/** 2652: add downloads to the system's "recent documents" list.
 * Note: thist list is cleared on exiting Firefox!
 */
user_pref("browser.download.manager.addToRecentDocs", true);

/** 2654: enable "open with" in download dialog. **/
user_pref("browser.download.forbid_open_with", false);


/**
 * 2700: PERSISTENT STORAGE
 */

/** 2701: enable cookies only for the same host. **/
user_pref("network.cookie.cookieBehavior", 1);


/**
 * 2800: SHUTDOWN [SETUP]
 */

/** 2803: set what history items to clear on shutdown. **/
user_pref("privacy.clearOnShutdown.cache", false);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.offlineApps", false);
user_pref("privacy.clearOnShutdown.sessions", false);


/**
 * 4500: RFP (RESIST FINGERPRINTING)
 */

/** 4504: disable letterboxing, so no space is wasted. **/
user_pref("privacy.resistFingerprinting.letterboxing", false);


/**
 * 5000: PERSONAL [SETUP]
 */

/** WARNINGS **/
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("general.warnOnAboutConfig", false);

/** Disable autocopy default. **/
user_pref("clipboard.autocopy", false);


/**
 * Not documented by ghacks-userjs
 */

/** Set DuckDuckGo as default search engine. **/
user_pref("browser.search.defaultenginename", "DuckDuckGo");
user_pref("browser.search.order.1", "DuckDuckGo");

/** Disable syncronization of some personal informations. **/
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.tabs", false);

/** Disable UI-element-popup-tips. **/
user_pref("browser.chrome.toolbar_tips", false);

/** Increase mouse scroll speed. **/
user_pref("mousewheel.default.delta_multiplier_y", 200);


user_pref("_user.js.parrot", "user settings loaded");
