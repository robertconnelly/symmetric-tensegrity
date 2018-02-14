Symmetric Tensegrity
===

Copyright Robert Connelly, Simon D. Guest

Unless noted, licensed under AGPLv3

See individual packages for their licenses.



Running Locally
---

You can run the web application locally by starting
a web server in the root directory of this repo.

```
$ sudo npm install http-server -g
$ chromium-browser "http://localhost:8080" & http-server
```



Historical
---

```
$ cd old
$ javac -classpath Jama.jar:render.jar ap.java
$ appletviewer pro.html
```

notes
---

Algebrite can apparently find roots.

```
> var a = require("./lib/algebrite.js");
> a.run("nroots( x^2 + 1)")
'[-1.0 i,1.0 i]'
> a.run("nroots( x^2 - 1)")
'[-1.0,1.0]'
```

note that the Algebrite package needs 'big-integer' to work.

