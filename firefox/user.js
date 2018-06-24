/**
 * Custom preferences for Mozilla Firefox.
 *
 * WARNING: this file must be appended before ghacks-userjs, because these are
 * only personal settings, but I use also default settings.
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

/** 0301a: enable auto-update checks for Firefox. **/
user_pref("app.update.enabled", true);

/* 0301b: enable auto-update checks for extensions. **/
user_pref("extensions.update.enabled", true);

/* 0302b: enable auto update installing for extensions. **/
user_pref("extensions.update.autoUpdateDefault", true);


/**
 * 0800: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS [SETUP]
 */

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
 * 1700: CONTAINERS [SETUP]
 */

/** 1701: enable Container Tabs setting in preferences. **/
user_pref("privacy.userContext.ui.enabled", true);

/** 1702: enable Container Tabs. **/
user_pref("privacy.userContext.enabled", true);


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

/** 2652: adds downloads to the system's "recent documents" list.
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
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.offlineApps", false);


/**
 * 5000: PERSONAL [SETUP]
 */

/** WARNINGS **/
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);

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
