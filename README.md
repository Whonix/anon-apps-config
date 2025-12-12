# anonymity, privacy and security settings pre-configuration #

Most settings take effect for newly created user account onlys, and not
for existing user accounts.

Sets timezone to UTC.

Enables Menubar in Dolphin by default.

gnupg configuration for Anonymity Distributions:
* Sets `use-tor` in `/etc/skel/.gnupg/dirmngr.conf`.
* Ships Thunderbird torbirdy configuration file
`/etc/thunderbird/pref/30_whonix.js` that allows torified keyserver access.
* Deactivates KGpg's first run wizard. Disables tip of the day.
Disables KGpg's systray. Disables key server. Reference:
"High-risk users should stop using the keyserver network immediately."

Double click instead of single click in KDE.

Deactivates maximize windows when moved to the top.
In context of anonymity it might be better not to maximize the browser window
(https://trac.torproject.org/projects/tor/ticket/7255).
To prevent users from accidentally maximizing their browser window, it is
better when KDE's feature to maximize windows when moved to the top is
disabled.

Deactivates KDE's system sounds.

Disables KDE graphics effects. Disables some background processes.

Stream Isolation (proxy) settings for KDE apps for Anonymity Distributions
Configures global proxy settings, which acts as a fallback if no other proxy
settings are set, for KDE applications to socks 10.152.152.10:9122.
IP HARDCODED above but no need to change since it is description only.
Otherwise unconfigured KDE applications would use no proxy settings
(Transparent Proxying) if the anonymity distribution features a transparent
proxy.
Useful to improve stream isolation.
On the other hand, anonymity distributions not featuring transparent proxying
should probably not install this package by default, because then unconfigured
KDE applications should by default not be able to connect.

Sets Unlimited Scrollback in Konsole.

Disables klipper clipboard history.

Deactivates automatic updates for Package Manager APT and Apper
Useful in context of networks with limited traffic quota, slow networks and
anonymity distributions.
In latter case, the default automatic updates interval would be too
predictable (expectable amount of traffic every X), thus eventually be
vulnerable for traffic fingerprinting.
Disabling Apper automatic updates only takes effect for newly created user
accounts. Not for existing user accounts. This is most useful to help Linux
distribution maintainers setting divergent defaults.

Longer Timeouts for Package Manager APT
Raising timeout and retries using configuration snippet. Useful in context of
slow networks and anonymity distributions.

Ships a configuration file /etc/apt/apt.conf.d/90longer-timeouts to configure
apt-get.

Ships a configuration file /etc/skel/.config/vlc/vlcrc to configure VLC to not
ask for network policy at start.

Disabled gajim update manager by default for better security since it does not
verify software signatures by hiding file
/usr/share/gajim/plugins/plugin_installer/__init__.py using
'config-package-dev' 'hide'.

Disables systemd-resolved during boot unless file /etc/dns-enable exists.

Disables systemd-resolved fallback DNS (which by default is set to Google).

Removes capabilities from `/bin/ping` if
[security-misc](https://github.com/Whonix/security-misc) is
installed as ping doesn't work with Tor anyway and its capabilities are just
unneeded attack surface.

Create a dummy Tor binary '/home/user/.local/share/Bisq/btc_mainnet/tor/tor'
to avoid Tor over Tor.

Improves HexChat Privacy Settings
* As per:
https://gitlab.torproject.org/legacy/trac/-/wikis/doc/TorifyHOWTO/XChat
* Moves the following files:
- `/usr/lib/xchat/plugins/python.so`
- `/usr/lib/xchat/plugins/tcl.so`
- `/usr/lib/xchat/plugins/perl.so`
to `/usr/share/anon-apps-config`, so these plugins get disabled by
default.

Due to technical limitations some settings only take effect for applications
being started for the very first time, i.e. when the user config of that
application in the user's home folder does not exist yet. Works best for new
user accounts.

This package is most useful to help Linux distribution maintainers setting
divergent defaults.

## How to install `anon-apps-config` using apt-get ##

1\. Download the APT Signing Key.

```
wget https://www.whonix.org/keys/derivative.asc
```

Users can [check the Signing Key](https://www.whonix.org/wiki/Signing_Key) for better security.

2\. Add the APT Signing Key.

```
sudo cp ~/derivative.asc /usr/share/keyrings/derivative.asc
```

3\. Add the derivative repository.

```
echo "deb [signed-by=/usr/share/keyrings/derivative.asc] https://deb.whonix.org trixie main contrib non-free" | sudo tee /etc/apt/sources.list.d/derivative.list
```

4\. Update your package lists.

```
sudo apt-get update
```

5\. Install `anon-apps-config`.

```
sudo apt-get install anon-apps-config
```

## How to Build deb Package from Source Code ##

Can be build using standard Debian package build tools such as:

```
dpkg-buildpackage -b
```

See instructions.

NOTE: Replace `generic-package` with the actual name of this package `anon-apps-config`.

* **A)** [easy](https://www.whonix.org/wiki/Dev/Build_Documentation/generic-package/easy), _OR_
* **B)** [including verifying software signatures](https://www.whonix.org/wiki/Dev/Build_Documentation/generic-package)

## Contact ##

* [Free Forum Support](https://forums.whonix.org)
* [Premium Support](https://www.whonix.org/wiki/Premium_Support)

## Donate ##

`anon-apps-config` requires [donations](https://www.whonix.org/wiki/Donate) to stay alive!
