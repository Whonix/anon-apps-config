# anonymity, privacy and security settings pre-configuration #

Most settings take effect for newly created user account onlys, and not
for existing user accounts.

Enables Menubar in Dolphin by default.

Deactivates KGpg's first run wizard. Uses hkp://qdigse2yzvuglcix.onion as
default keyserver. Disables tip of the day. Disables KGpg's systray.

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
ask for network policy at start and sets vout=xcb_x11 to enable VM
compatibility out-of-the-box.

Disabled gajim update manager by default for better security since it does not
verify software signatures by hiding file
/usr/share/gajim/plugins/plugin_installer/__init__.py using
'config-package-dev' 'hide'.

Disables systemd-resolved during boot unless file /etc/dns-enable exists.

Disables systemd-resolved fallback DNS (which by default is set to Google).

Due to technical limitations some settings only take effect for applications
being started for the very first time, i.e. when the user config of that
application in the user's home folder does not exist yet. Works best for new
user accounts.

This package is most useful to help Linux distribution maintainers setting
divergent defaults.
## How to install `anon-apps-config` using apt-get ##

1\. Download [Whonix's Signing Key]().

```
wget https://www.whonix.org/patrick.asc
```

Users can [check Whonix Signing Key](https://www.whonix.org/wiki/Whonix_Signing_Key) for better security.

2\. Add Whonix's signing key.

```
sudo apt-key --keyring /etc/apt/trusted.gpg.d/whonix.gpg add ~/patrick.asc
```

3\. Add Whonix's APT repository.

```
echo "deb https://deb.whonix.org buster main contrib non-free" | sudo tee /etc/apt/sources.list.d/whonix.list
```

4\. Update your package lists.

```
sudo apt-get update
```

5\. Install `anon-apps-config`.

```
sudo apt-get install anon-apps-config
```

## How to Build deb Package ##

Replace `apparmor-profile-torbrowser` with the actual name of this package with `anon-apps-config` and see [instructions](https://www.whonix.org/wiki/Dev/Build_Documentation/apparmor-profile-torbrowser).

## Contact ##

* [Free Forum Support](https://forums.whonix.org)
* [Professional Support](https://www.whonix.org/wiki/Professional_Support)

## Donate ##

`anon-apps-config` requires [donations](https://www.whonix.org/wiki/Donate) to stay alive!
