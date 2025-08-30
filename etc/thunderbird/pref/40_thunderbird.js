// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/thunderbird/pref directory, override any preference that is
// present in /usr/lib/thunderbird/defaults/pref directory.
// While your changes will be kept on upgrade if you modify files in
// /etc/thunderbird/pref, please note that they won't be kept if you
// do them in /usr/lib/thunderbird/defaults/pref.

/**
 * Most of these are copied from Tor Browser or Tails. 
 * 
 * Some of the Tor Browser changes don't apply to Thunderbird 
 * since the browser surface is limited (Gmail/Twitter) but we set them out of an abundance of caution
 * because including a useless preference is better than missing an important one.
 * 
 * Including all of them and their comments would make this file massive, so most comments are omitted 
 * and we've excluded anything that's obviously irrelevant or is exclusive to non-Linux operating systems
 * 
 * Tor Browser and Tails sources:
 * https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/b66d9c9736de7a3dd25f1cc2e85c51f4da1c9743/browser/app/profile/000-tor-browser.js
 * https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/b66d9c9736de7a3dd25f1cc2e85c51f4da1c9743/browser/app/profile/001-base-profile.js
 * https://gitlab.tails.boum.org/tails/tails/-/blob/3ce2e655f98601c3930d954dba8dbf4945a8fad9/config/chroot_local-includes/etc/thunderbird/pref/aa_tails.js
 * https://gitlab.tails.boum.org/tails/tails/-/blob/632201d579dfbce9c940d17f80b49f8be8d6eb89/config/chroot_local-includes/usr/share/thunderbird/defaults/pref/autoconfig.js
 * 
 * Related topic: https://forums.whonix.org/t/torbirdy-deprecated-replacement-required/8782/6
 */

// https://gitlab.tails.boum.org/tails/tails/-/blob/632201d579dfbce9c940d17f80b49f8be8d6eb89/config/chroot_local-includes/usr/share/thunderbird/defaults/pref/autoconfig.js
// Loading the lock file unobfuscated: http://kb.mozillazine.org/Lock_Prefs
pref("general.config.filename", "thunderbird.cfg");
pref("general.config.obscure_value", 0);

// Use LANG environment variable to choose locale from system
// The old environment setting 'pref("intl.locale.matchOS", true);' is
// currently not working anymore. The new introduced setting
// 'intl.locale.requested' is now used for this. Setting an empty string is
// pulling the system locale into Thunderbird.
pref("intl.locale.requested", "");

// Disable default mail checking (gnome).
pref("mail.shell.checkDefaultMail", false);

// if you are not using gnome
pref("network.protocol-handler.app.http", "x-www-browser");
pref("network.protocol-handler.app.https", "x-www-browser");

// Disable mail indexing
pref("mailnews.database.global.indexer.enabled", false);

// Hide the "Know your rights" message
pref("mail.rights.version", 1);

// Disable updates of extensions to have control over versions used
pref("extensions.update.enabled", false);
// Disable 'extension blocklist' which might leak the OS information.
// See https://trac.torproject.org/projects/tor/ticket/6734
pref("extensions.blocklist.enabled", false);
// Disable system addons
pref("extensions.autoDisableScopes", 3);
pref("extensions.enabledScopes", 4);

// Only show the tab bar if there's more than one tab to display
pref("mail.tabs.autoHide", true);

// Disable automatic configuration methods that could be serving
// configurations without authentication.
pref("mailnews.auto_config.fetchFromExchange.enabled", false);
pref("mailnews.auto_config.mx.enabled", false);

// The timeout (in seconds) for each guess
pref("mailnews.auto_config.guess.timeout", 30);

// Drop auto-fetched configurations using Oauth2 -- they do not work
// since we disable needed functionality (like JavaScript and cookies)
// in the embedded browser.
pref("mailnews.auto_config.account_constraints.allow_oauth2", false);

// Disable Autocrypt by default for new accounts (#16222).
// This does not change anything for accounts that were created before.
pref("mail.server.default.enableAutocrypt", false);

// Sanitize mime headers
pref("mail.suppress_content_language", true);
pref("mail.sanitize_date_header", true);

// Make all system-wide dictionaries available
pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// RSS
pref("rss.display.prefer_plaintext", true);
pref("rss.display.disallow_mime_handlers", 3);
pref("rss.display.html_as", 1);
pref("rss.show.content-base", 1);

// Override the user agent by setting it to an empty string.
pref("general.useragent.override", "");

// Disable third-party images.
pref("permissions.default.image", 3);

// https://forums.whonix.org/t/canning-thunderbirds-startpage/13007
pref("mailnews.start_page.enabled", false);

// Change default encryption policy to "Require encryption by
// default". Otherwise users must opt-in to encryption for each mail
// they compose, so they are just a "Send" away from leaking the
// plaintext if they forget.
pref("mail.identity.default.encryptionpolicy", 2);

// Don't automatically attach public key when sending signed
// email. Attaching the key bloats the email (especially keys that
// have many signatures) but also leaks who sent email when using Schleuder's remailing functionality.
pref("mail.identity.default.attachPgpKey", false);

// Disable end-of-year donation banner
pref("app.donation.eoy.version.viewed", 999999);

// downloadable fonts are NOT disabled: disabling them cause bug #17328: "Find in Message" stops working
//pref("gfx.downloadable_fonts.enabled", false);


/**
 * Telemetry
 */

// Try to disable "Would you like to help Thunderbird Mail/News by automatically reporting memory usage, performance, and responsiveness to Mozilla"
pref("toolkit.telemetry.prompted", 2);
pref("toolkit.telemetry.rejected", true);

// Actually disable telemetry altogether
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.server", "data:,");
// toolkit.telemetry.enabled is deprecated, will be removed, and controls a diminishing number of things: 
// https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/internals/preferences.html#preferences
pref("toolkit.telemetry.enabled", false);
// https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/b66d9c9736de7a3dd25f1cc2e85c51f4da1c9743/browser/app/profile/001-base-profile.js#L220-256
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("toolkit.coverage.endpoint.base", "");
pref("browser.tabs.crashReporting.sendReport", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.coverage.opt-out", true);
// https://bugs.torproject.org/10367
pref("datareporting.healthreport.service.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");

/**
 * Network settings, mostly adopted from TorBirdy
**/

// Use a manual proxy configuration.
pref("network.proxy.type", 1);
// Block direct connections to localhost
pref("network.proxy.allow_hijacking_localhost", true);
pref("network.proxy.failover_direct", false);
// The Tails Thunderbird profile and the Tor Browser profile both state:
// "Connections to localhost are blocked by
// setting network.proxy.allow_hijacking_localhost = true,
// so we don't need to ban specific ports, which can be fingerprinted."
// Doesn't matter as much here, but whatever.
pref("network.security.ports.banned", "");
// Number of seconds to wait before attempting to recontact an unresponsive proxy server.
pref("network.proxy.failover_timeout", 1800);

// Configure Thunderbird to use the SOCKS5 proxy.
pref("network.proxy.socks", "127.0.0.1");
pref("network.proxy.socks_port", 9102);
pref("network.proxy.socks_version", 5);

// Set DNS proxying through SOCKS5.
pref("network.proxy.socks_remote_dns", true);
// Disable DNS prefetching.
pref("network.dns.disablePrefetch", true);

// https://lists.torproject.org/pipermail/tor-talk/2011-September/021398.html
// "Towards a Tor-safe Mozilla Thunderbird"
// These options enable a warning that tagnaq suggests.

// Warn when an application is to be launched.
pref("network.protocol-handler.warn-external.http", true);
pref("network.protocol-handler.warn-external.https", true);
pref("network.protocol-handler.warn-external.ftp", true);
pref("network.protocol-handler.warn-external.file", true);
pref("network.protocol-handler.warn-external-default", true);

// Likely privacy violations
// https://blog.torproject.org/blog/experimental-defense-website-traffic-fingerprinting
// https://bugs.torproject.org/3914
pref("network.http.pipelining", true);
pref("network.http.pipelining.aggressive", true);
pref("network.http.pipelining.maxrequests", 12);
pref("network.http.connection-retry-timeout", 0);
pref("network.http.max-persistent-connections-per-proxy", 256);
pref("network.http.pipelining.reschedule-timeout", 15000);
pref("network.http.pipelining.read-timeout", 60000);

// We do not fully understand the privacy issues of the SPDY protocol
// We have no reason to believe that anyone would actually use it with
// Thunderbird but we fail closed to keep users safe out of an abundance of
// caution.
pref("network.http.spdy.enabled", false);
// We want pipelined requests and a bunch of them, as is explained in the
// experimental-defense-website-traffic-fingerprinting blog post by Torbutton
// author Mike Perry.
pref("network.http.pipelining.ssl", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.sendRefererHeader", 2);
// https://bugs.torproject.org/16673
pref("network.http.altsvc.enabled", false);
pref("network.http.altsvc.oe", false);

// Disable proxy bypass issue.
// Websockets have no use in Thunderbird over Tor; some versions of the
// underlying Mozilla networking code allowed websockets to bypass the proxy
// settings - this is deadly to Tor users:
// https://blog.torproject.org/blog/firefox-security-bug-proxy-bypass-current-tbbs
// We don't want user's of Thunderbird to even come close to such a bypass
// issue and so we have disabled websockets out of an abundance of caution.
// We previously set network.websocket.enabled to false, but that setting was removed some years ago: https://bugzilla.mozilla.org/show_bug.cgi?id=1091016
// Setting network.websocket.max-connections to 0 is a workaround: https://bugzilla.mozilla.org/show_bug.cgi?id=1091016#c24
pref("network.websocket.max-connections", 0);
// Cookies are allowed, but not third-party cookies. For Gmail and Twitter.
pref("network.cookie.cookieBehavior", 1);
// http://kb.mozillazine.org/Network.cookie.lifetimePolicy
// 2: cookie expires at the end of the session.
pref("network.cookie.lifetimePolicy", 2);
// Disable link prefetching.
pref("network.prefetch-next", false);

/**
 * General security improvements
*/

// Don't decrypt subordinate message parts that otherwise might reveal
// decrypted content to the attacker, i.e. the optional part of the fixes
// for EFAIL.
// Reference: https://www.thunderbird.net/en-US/thunderbird/52.9.1/releasenotes/
pref("mailnews.p7m_subparts_external", true);

// Only allow SSL channels when fetching from the ISP.
pref("mailnews.auto_config.fetchFromISP.sslOnly", true);
// Only allow Thunderbird's automatic configuration wizard to use and
// configure secure protocols.
pref("mailnews.auto_config.sslOnly", true);
pref("mailnews.auto_config.guess.sslOnly", true);
// Disable insecure TLS protocols
// https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/b66d9c9736de7a3dd25f1cc2e85c51f4da1c9743/browser/app/profile/001-base-profile.js#L158-168
pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
pref("security.ssl3.dhe_rsa_aes_128_sha", false);
pref("security.ssl3.dhe_rsa_aes_256_sha", false);
pref("security.tls.version.enable-deprecated", false);

// Default is always false for OCSP.
// OCSP servers may log information about a user as they use the internet
// generally; it's everything we hate about CRLs and more.
pref("security.OCSP.enabled", 1);
pref("security.OCSP.GET.enabled", false);
// XXX: Couldn't find this setting in the Thunderbird source code or on
//      http://kb.mozillazine.org
pref("security.OCSP.require", false);
// Disable TLS Session Ticket.
// See https://trac.torproject.org/projects/tor/ticket/4099
// We previously used security.enable_tls_session_tickets, which was removed
// "security.ssl.disable_session_identifiers" seems to be a replacement:
// https://bugzilla.mozilla.org/show_bug.cgi?id=967977
pref("security.ssl.disable_session_identifiers", true);
// Enable SSL3?
// We do not want to enable a known weak protocol; users should use only use TLS
pref("security.enable_ssl3", false);
// Thunderbird 23.0 uses the following preference.
// https://bugs.torproject.org/11253
// March 2017: See https://bugs.torproject.org/20751
pref("security.tls.version.min", 3);
// Display a dialog warning the user when entering an insecure site from a secure one.
pref("security.warn_entering_weak", true);
// Display a dialog warning the user when submtting a form to an insecure site.
pref("security.warn_submit_insecure", true);
// Enable SSL FalseStart.
// This should be safe and improve TLS performance
pref("security.ssl.enable_false_start", true);
// Reject all connection attempts to servers using the old SSL/TLS protocol.
pref("security.ssl.require_safe_negotiation", true);
// Warn when connecting to a server that uses an old protocol version.
pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// Strict: certificate pinning is always enforced.
pref("security.cert_pinning.enforcement_level", 2);

/**
 * Mail
*/

// Prevent hostname leaks.
pref("mail.smtpserver.default.hello_argument", "[127.0.0.1]");
// Compose messages in plain text (by default).
pref("mail.html_compose", false);
pref("mail.identity.default.compose_html", false);
// Send message as plain text.
pref("mail.default_html_action", 1);
// Disable Thunderbird's 'Get new account' wizard.
pref("mail.provider.enabled", false);
// Don't ask to be the default client.
pref("mail.shell.checkDefaultClient", false);
pref("mail.shell.checkDefaultMail", false);
// Disable inline attachments.
pref("mail.inline_attachments", false);
// Disable IMAP IDLE
// See https://trac.torproject.org/projects/tor/ticket/6337
// XXX: We might want to enable this useful feature in Tails
pref("mail.server.default.use_idle", false);
// Thunderbird's autoconfig wizard is designed to enable an initial
// mail fetch (by setting login_at_start) for the first account it
// creates (which will become the "default" account, see
// msgMail3PaneWindow.js for details) which side-steps the settings
// we apply in fixupTorbirdySettingsOnNewAccount(). Hence, fool
// Thunderbird to think that this initial mail fetch has already
// been done so we get the settings we want.
// XXX: We can probably remove this in Tails
pref("mail.startup.enabledMailCheckOnce", true);

/**
 * Browser and HTML
*/
pref("javascript.enabled", false);
pref("webgl.disabled", true);
pref("layout.css.visited_links_enabled", false);

// JavaScript hardening, copied from Tails
// Tails states they originally copied this from https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/tor-browser-115.10.0esr-13.5-1/browser/components/securitylevel/content/securityLevel.js?ref_type=heads
// on the "high" security option
pref("javascript.options.ion", false);
pref("javascript.options.baselinejit", false);
pref("javascript.options.native_regexp", false);
pref("media.webaudio.enabled", false);
pref("mathml.disabled", true);
pref("gfx.font_rendering.opentype_svg.enabled",  false);
pref("svg.disabled",  true);

// "Misc privacy: Remote"
// https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/b66d9c9736de7a3dd25f1cc2e85c51f4da1c9743/browser/app/profile/001-base-profile.js#L170
pref("browser.send_pings", false);
pref("webchannel.allowObject.urlWhitelist", "");
pref("geo.enabled", false);
pref("geo.provider.network.url", "");
pref("geo.provider.use_corelocation", false);
pref("geo.provider.use_gpsd", false);
pref("geo.provider.use_geoclue", false);

// Disable WebM, WAV, Ogg, PeerConnection.
pref("media.navigator.enabled", false);
pref("media.peerconnection.enabled", false);
//pref("media.cache_size", 0); // probably interferes with in-memory caching?

// https://bugs.torproject.org/16254
pref("browser.search.countryCode", "US");
pref("browser.search.region", "US");
pref("browser.search.geoip.url", "");

// Disable Google Safe Browsing
pref("browser.safebrowsing.enabled", false);
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.blockedURIs.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.provider.google.updateURL", "");
pref("browser.safebrowsing.provider.google.gethashURL", "");
pref("browser.safebrowsing.provider.google4.updateURL", "");
pref("browser.safebrowsing.provider.google4.gethashURL", "");
pref("browser.safebrowsing.provider.mozilla.updateURL", "");
pref("browser.safebrowsing.provider.mozilla.gethashURL", "");

// Disable Microsoft Family Safety (From TBB: #21686).
pref("security.family_safety.mode", 0);


/**
 * Local data storage
 */

// Disables most caching
// Memory caching is still enabled
// https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/b66d9c9736de7a3dd25f1cc2e85c51f4da1c9743/browser/app/profile/001-base-profile.js#L51-56
pref("browser.cache.disk.enable", false);
pref("browser.cache.memory.enable", true);
pref("browser.chrome.site_icons", false);
pref("browser.chrome.favicons", false);
pref("permissions.memory_only", true);
pref("security.nocertdb", true);
pref("media.aboutwebrtc.hist.enabled", false);
// https://bugs.torproject.org/11817, https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/b66d9c9736de7a3dd25f1cc2e85c51f4da1c9743/browser/app/profile/001-base-profile.js#L275
pref("extensions.getAddons.cache.enabled", false);
// https://bugs.torproject.org/22944
pref("browser.chrome.site_icons", false);
pref("browser.chrome.favicons", false);
pref("signon.autofillForms", false);
// https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/b66d9c9736de7a3dd25f1cc2e85c51f4da1c9743/browser/app/profile/001-base-profile.js#L92-94
// Improves in-memory caching
pref("browser.privatebrowsing.forceMediaMemoryCache", true);
pref("media.memory_cache_max_size", 65536);

// Forms
pref("signon.rememberSignons", false);
pref("browser.formfill.enable", false);
pref("signon.formlessCapture.enabled", false); // Added with tor-browser#41496
pref("extensions.formautofill.available", "");
pref("extensions.formautofill.addresses.enabled", false);
pref("extensions.formautofill.creditCards.enabled", false);

// https://gitlab.torproject.org/tpo/applications/tor-browser/-/blob/tor-browser-140.2.0esr-15.0-1/browser/app/profile/001-base-profile.js#L81
// Do not store extra data (form, scrollbar positions, cookies, POST data) for
// the session restore functionality.
pref("browser.sessionstore.privacy_level", 2);
pref("browser.sessionstore.resume_from_crash", false);
pref("browser.pagethumbnails.capturing_disabled", true);

// Disable client-side session and persistent storage.
// XXX: Tor Browser 9.0 has this setting set to "true"
pref("dom.storage.enabled", false);
// https://bugs.torproject.org/15758
pref("device.sensors.enabled", false);
// https://bugs.torproject.org/5293
// XXX: Tor Browser 9.0 has this setting set to "true"
pref("dom.battery.enabled", false);
// https://bugs.torproject.org/6204
pref("dom.enable_performance", false);
// https://bugs.torproject.org/13023
pref("dom.gamepad.enabled", false);
// https://bugs.torproject.org/8382
// XXX: Tor Browser 9.0 has this setting set to "true"
pref("dom.indexedDB.enabled", false);
// https://bugs.torproject.org/13024
pref("dom.enable_resource_timing", false);
// https://bugs.torproject.org/16336
pref("dom.enable_user_timing", false);
// https://bugs.torproject.org/17046
pref("dom.event.highrestimestamp.enabled", true);

/**
 * Chat and Calendar
*/

// Disable chat
pref("mail.chat.enabled", false);

// Thunderbird 15 introduces the chat feature so disable the preferences below.
pref("purple.logging.log_chats", false);
pref("purple.logging.log_ims", false);
pref("purple.logging.log_system", false);
pref("purple.conversations.im.send_typing", false);

// Messenger related preferences.
// Do not report idle.
pref("messenger.status.reportIdle", false);
pref("messenger.status.awayWhenIdle", false);
// Set the following preferences to empty strings.
pref("messenger.status.defaultIdleAwayMessage", "");
pref("messenger.status.userDisplayName", "");
// Do not connect automatically.
pref("messenger.startup.action", 0);
// Ignore invitations; do not automatically accept them.
pref("messenger.conversations.autoAcceptChatInvitations", 0);
// Do not format incoming messages.
pref("messenger.options.filterMode", 0);
// On copying the content in the chat window, remove the time information.
// See `comm-central/chat/locales/conversations.properties' for more information.
pref("messenger.conversations.selections.systemMessagesTemplate", "%message%");
pref("messenger.conversations.selections.contentMessagesTemplate", "%sender%: %message%");
pref("messenger.conversations.selections.actionMessagesTemplate", "%sender% %message%");

// Mozilla Lightning.
pref("calendar.useragent.extra", "");

