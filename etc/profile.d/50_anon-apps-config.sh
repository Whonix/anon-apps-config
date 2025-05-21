#!/bin/sh

## Copyright (C) 2012 - 2025 ENCRYPTED SUPPORT LLC <adrelanos@whonix.org>
## See the file COPYING for copying conditions.

#### meta start
#### project Whonix
#### category apps
#### description
## Add <code>/usr/share/anon-apps-config/</code> to
## <code>XDG_CONFIG_DIRS</code> environment variable.
#### meta end

if [ -z "$XDG_CONFIG_DIRS" ]; then
   XDG_CONFIG_DIRS="/etc/xdg"
fi
if ! printf '%s\n' "$XDG_CONFIG_DIRS" | grep -- "/usr/share/anon-apps-config/" >/dev/null 2>/dev/null ; then
   export XDG_CONFIG_DIRS="/usr/share/anon-apps-config/:$XDG_CONFIG_DIRS"
fi

if [ -z "$XDG_DATA_DIRS" ]; then
   XDG_DATA_DIRS="/usr/local/share/:/usr/share/"
fi
if ! printf '%s\n' "$XDG_DATA_DIRS" | grep -- "/usr/share/anon-apps-config/share/" >/dev/null 2>/dev/null ; then
   export XDG_DATA_DIRS="/usr/share/anon-apps-config/share/:$XDG_DATA_DIRS"
fi
