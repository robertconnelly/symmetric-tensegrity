[Symmetric Tensegrity](https://robertconnelly.github.io/symmetric-tensegrity/)
===

![a5 - (15)(24),(14532) - (123)](https://raw.githubusercontent.com/abramconnelly/symmetric-tensegrity/master/img/a5_15.24.14532_123.png)

An interactive catalog of several hundred tensegrity structures that are held rigidly together with incompressible struts and inextendable cables connecting point nodes. These structures are highly symmetric in the sense that there is a symmetry of the structure that takes any node to any other, there is a symmetry of the structure that takes any strut to any other, and there are two classes of cables, where there is a symmetry of the structure that takes any cable to any other in the same class.

See the [FAQ](FAQ.md) for more details.

[Live page](https://robertconnelly.github.io/symmetric-tensegrity/)



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

License
---

Copyright Robert Connelly, Simon D. Guest

Unless noted, licensed under AGPLv3.

See individual packages for their licenses.

