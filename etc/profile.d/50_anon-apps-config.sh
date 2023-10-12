#!/bin/sh

## Copyright (C) 2012 - 2023 ENCRYPTED SUPPORT LP <adrelanos@whonix.org>
## See the file COPYING for copying conditions.

#### meta start
#### project Whonix
#### category apps
#### description
## Add <code>/usr/share/anon-apps-config/</code> to
## <code>XDG_CONFIG_DIRS</code> environment variable.
#### meta end

if [ -z "$XDG_CONFIG_DIRS" ]; then
   XDG_CONFIG_DIRS=/etc/xdg
fi
if ! echo "$XDG_CONFIG_DIRS" | grep --quiet /usr/share/anon-apps-config/ ; then
   export XDG_CONFIG_DIRS=/usr/share/anon-apps-config/:$XDG_CONFIG_DIRS
fi

if [ -z "$XDG_DATA_DIRS" ]; then
   XDG_DATA_DIRS=/usr/local/share/:/usr/share/
fi
if ! echo "$XDG_DATA_DIRS" | grep --quiet /usr/share/anon-apps-config/share/ ; then
   export XDG_DATA_DIRS=/usr/share/anon-apps-config/share/:$XDG_DATA_DIRS
fi
