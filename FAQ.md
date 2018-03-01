Frequently Asked Questions (F.A.Q.)
===


1. What is a tensegrity? 
---


 It is a structure that joins nodes (points) with inextendibile
cables and incompressible struts. The cable can be made from string,
wire, or rope, and struts can be made from tubes, dowel rods, or just sticks.
See [Wikipedia](http://en.wikipedia.org/wiki/Tensegrity)
for a reasonable definition.


2. What is the mathematical definition of a tensegrity?

It is a finite configuration of points, the nodes, in space or
the plane where some pairs of the nodes are designated cables,
constrained not to get further apart, and some pairs are designated
struts, constrained
not to get closer together. Note with this definition cables and
struts are allowed to intersect and cross.


3. Who first created a tensegrity?

If you don't count spider webs and constructions in nature, an
artist Kenneth Snelson is usually credited with the first
creations. He has an
interesting website [here](http://www.kennethsnelson.net/).


4. Who thought of the name tensegrity?

Buckminster Fuller. It combines the notion of "tension"
with "integrity", creating "tensional integrity. You can see Bucky's musings
[here](http://www.rwgrayprojects.com/rbfnotes/fpapers/tensegrity/tenseg01.html).

5. Where can I read more about this catalog and tensegrities?


* Allen Back and Bob Connelly have an article [here](http://www.math.cornell.edu/%7Econnelly/tensegrity.copy.pdf)
  in the March-April 1998 issue of the American Scientist that explains a
  lot of what goes into this catalog.
* There is the paper by Bob Connelly and Walter Whiteley [here](http://www.math.cornell.edu/%7Econnelly/second.order.pdf)
  that discusses some of the basic geometric principles for the
  stability of tensegrity structure.
* Bob Connelly and Maria Terrell have a paper, 1995.
  Globally rigid symmetric tensegrities. Structural Topology, 21, 59--78,
  that classifies a collection of super stable symmetric tensegrities.
  It is available [here](http://www-iri.upc.es/people/ros/StructuralTopology/).
* For engineering background see "Theory of Structures" by Timoshenko and Young.

6. What are some links to other sites that show tensegrities?

* There is the older catalog created by Allen Back and Bob
  Connelly [here](http://mathlab.cit.cornell.edu/visualization/tenseg/in_progress/short_top.html).
* There is a catalog created by Jingyao Zhang and Simon Guest
  of symmetric prismatic tensegrity structures [here](http://tensegrity.aistructure.com/prismatic/).
* There is a site [here](http://complexity.xozzox.de/tensegrity.html), where a
  few symmetric and non-symmetric tensegrities can be viewed and rotated.
  This seems to be a kind virtual tensegrity, where the configuration
  minimizes an energy functional on the cables.<br>

7. Can I build these tensegrities?


Why not? Once you have chosen a particular example, you
can read off the lengths of the cable relative to the strut lengths in the lower
right window. The picture should help you thread the cables and struts.
There is only one way to make the structure with those lengths if everything
is hooked up right. There are various materials that you can use.
Dowl rods with nails in them are popular as in [Pugh's book](http://www.amazon.com/Introduction-Tensegrity-Anthony-Pugh/dp/0520030559)
or George Hart's [page](http://www.georgehart.com/virtual-polyhedra/straw-tensegrity.html),
or Hugh Kenner, Geodesic Math and How to Use It, Univ. Cal Pr., 1976,
or René Motro's book
"[Tensegrity: Structural Systems for the Future](http://www.amazon.com/Tensegrity-Structural-Systems-Ren%E9-Motro/dp/1903996376)".


8. Can I look at the source code for the applet? 

Yes. It is <a href="ap.java"> here </a>. If you want to modify
the program and recompile, then you will also need to get the <i>render</i>
and <i>jama</i> packages listed in the references, or at least grab
the <a href="render.jar">render.jar</a> and <a href="Jama.jar">Jama.jar</a>
archives.


There is also a modified version of the applet which is used
to make the rotatable icons. For this you will need the source
<a href="tiny.java"> code </a>. For each rotatable icon you want to
make, run the main applet until you find an example you like, then read
the required parameters from the applet and its source code, copying
the example from
our Home page.


9. What is the "tracecode" button? 

It has two uses: a) If you want the coordinates of all the
vertices of the tensegrity currently displayed, those show up as the
centers of the "sphere" commands. You might need those if you are
planning to build it
three stories high, for example. b) If you want to make a really sharp
raytraced picture of the displayed tensegrity, copy and paste the
displayed code into a file. (This works best on some platforms if you
click at the bottom and drag upward.) Edit the file if you want to
change the colors and textures, and run [povray](http://www.povray.org) on it.
The nonrotatable picture on the Home page was made in this manner.


10. Will the structures shown in this catalog hold together?

Yes. They are all rigid, but not all choices give
interesting tensegrities. Some are very degenerate.


11. How are the structures chosen?

They must satisfy the following list of criteria: They
must have the <span style="font-style: italic;">symmetries</span> of one of the
six <span style="font-style: italic;">groups</span> A<sub>4</sub>, S<sub>4</sub>,
A<sub>5</sub>, A<sub>4</sub> x Z<sub>2</sub>, S<sub>4</sub> x Z<sub>2</sub>,
A<sub>5</sub> x Z<sub>2</sub>; There are two classes (each class
is designated by its own color, usually red and blue) of cables such that there is a
symmetry of the structure that takes takes any cable of one class to any other
cable of the same class; For any two struts (colored brown or green),
there is a symmetry of the structure that takes any strut onto any other;
The cables are connected as a set; The whole tensegrity structure must be <span
 style="font-style: italic;">super stable</span>.<br>


12. What does it mean that a tensegrity is super stable?

This is a very strong condition on the geometry of the
structure.   There is a particular calculation that can be made in terms of
the stress that exists in the structure. Certain numbers, called eigen
values, calculated.  If they are positive with altogether only 4 of them being 0, the
structure will be super stable. A consequence of this is that the structure
is <i>globally rigid</i> in all dimensions. This means that if there is any
other placement of the nodes satisfying the cable and strut conditions, then this
placement will be congruent to the original. It will be the same
configuration, possibly rotated or reflected and then rotated. Another consequence is
that if you build this structure it will stay stable and rigid, even when the
stress is increased relative to the stiffness. This is very handy for
these tensegrities, since the stiffness of the cables especially tends to be very soft.



13. If I have a tensegrity where all the nodes are the same,
and it holds together, will it be in this catalog? 


Not necessarily. It could be rigid, but not super
stable. Or it could have a different symmetry than one of the one of the six groups
in this catalog. For example, the symmetric tensegrids described
[here](http://tensegrity.aistructure.com/prismatic/) have a
symmetry group isomorphic a dihedral group.<br>


14. What is a group?


It is a set where any two elements g<sub>1</sub> and g<sub>2</sub>
of the set can be multiplied together to get another element g<sub>2</sub>g<sub>1</sub>of
the set. The multiplication operation (or group operation) must
satisfy the rules of associativity, inverses, and identity. See
[Wikipedia](http://en.wikipedia.org/wiki/Group_mathematics)
for more details. Presented this way, this is a definition of an
abstract group. There are tons and tons of many different kinds
of examples of groups. Here
we concentrate on, permutation groups, symmetry groups, and groups of
matrices.  (You can look at a book such as "Introduction to Modern Algebra" by
Birkhoff and Maclane for a nice introduction.) This approach greatly
simplifies the cataloging of the tensegrities we consider.


15. What is a permutation group?


This is a set of functions, called <i>permutations</i>, that
permute the elements of some set. To be a group, any composition
of these permutations in the group is another permutation in the group.
We use the disjoint cycle
notation for permutation groups considered here. Our groups
permute the symbols 1, 2, 3, ..., n. The symbol (a, b, c, ..., d) means a
-> b -> c > ... -> d -> a. In other words these symbols are
permuted cyclicly.  The product of these cycles means the composition of the
corresponding cycles. It is easy to see that any permutation can be written as
the product of such disjoint cycles. For example, (12)(345) means 1 and 2 are
switched, and 3 goes to 4, which goes to 5, which goes to three.


16. What are the groups A<sub>4</sub> and A<sub>5</sub>?


These are the alternating groups on 4 symbols and 5 symbols,
respectively. These are all the even permutations of 4 symbols
and 5 symbols, respectively. A permutation is <i>even</i> if
when it is written in disjoint cycle notation,
there are an even number of cycles of even length. For example,
(12) is not even, but (12)(34) and (123) are even permutations. The group
A<sub>4</sub> has 12 elements, and the group A<sub>5</sub> has 60 elements.

17. What is the group S<sub>4</sub>?


This is the group of all permutations of 4 symbols and has 24 elements.


18. What are the groups A<sub>4</sub> x Z<sub>2</sub>,
  S<sub>4</sub> x Z<sub>2</sub>, A<sub>5</sub> x Z<sub>2</sub>?


The G x Z<sub>2</sub> notation denotes the <i>cross product</i>
which means that you take two copies of the group G, where one copy has
a - sign attached. The group operation on the - acts like
multiplication by -1. For example, -(12) times -(34) in S<sub>4</sub>
x Z<sub>2</sub> is (12)(34). The G x Z<sub>2</sub> groups have twice as many groups
elements as G. So A<sub>4</sub> x Z<sub>2</sub> has 24 elements, S<sub>4</sub>
x Z<sub>2</sub> has 48 elements, and A<sub>5</sub> x Z<sub>2</sub> has 120 elements.


19. Why are these groups chosen?


These are isomorphic to groups of symmetries of the cube, regular
tetrahedron, and dodecahedron. A<sub>4</sub> is isomorphic to the
rotations of regular tetrahedron. S<sub>4</sub> is isomorphic to
the rotations of a cube.  A<sub>5</sub> is isomorphic to the rotations of the regular
dodecahedron. The groups A<sub>4</sub> x Z<sub>2</sub>, S<sub>4</sub>
x Z<sub>2</sub>, A<sub>5</sub> x Z<sub>2</sub> are the full group of
symmetries, including reflections, of the regular tetrahedron, cube and
regular dodecahedron, respectively. In the choices for the Java output in our program
subscripts and the cross "x" are suppressed.



20. What does isomorphic mean?


  If G<sub>1</sub> and G<sub>2</sub> are two groups, an <i>isomorphism</i>
is a <i>one-to-one</i> function f (when g is not h, f(g) is not
f(h)) defined on all the elements of G<sub>1</sub> with values in G<sub>2</sub>
such that for every g, h inG<sub>1</sub>, f(g)f(h)=f(gh), and every
element of G<sub>2</sub> is the image of some element in G<sub>1</sub>.
This means that from the point of view of formal group operations, G<sub>1</sub>
and G<sub>2</sub> are the same. If two groups are isomorphic they
must have the same number of elements, but, for example, A<sub>4</sub>
x Z<sub>2</sub> and S<sub>4</sub> both have 24 elements, yet they are not isomorphic.


21. What is a symmetry group?


It is a collection of rigid distance preserving functions of
all of space, where each function transforms some set to itself.
The group operation is the composition of these functions, and so
to be a group, the composition of any two such functions in the group
is also in the group. For example the rotations of regular
tetrahedron, cube or regular dodecahedron are symmetry groups.


22. Does the tensegrity always have a group of
symmetries isomorphic to the group in the group window?


Yes, but the tensegrity itself may have other larger groups of symmetries.


23. What is the order of a group element?


If g is a group element, then g<sup>n</sup> is g multiplied by
itself n times. The order of g is the smallest n = 1, 2, ... such
that g<sup>n</sup> = e the identity element. For example, the
permutation (12)(34) has order
is 2, and the element -(12345) in A<sub>4</sub> x Z<sub>2</sub>, has
order
is 10. It is particularly easy to figure the order of a
permutation when
it is written in disjoint cycle notation.<br>


24. What does the group inverse mean?


One of the defining properties of a group is that if g is a
group element, then there is a group element g<sup>-1</sup>, where gg<sup>-1</sup>
= g<sup>-1</sup>g = e, the identity element. g<sup>-1</sup> is
the inverse of g. For example, the inverse of (123) is (321).
If g is of order 2, then
g = g<sup>-1</sup>.


25. When I choose a group elements in the cable and
strut windows, what does that mean?


When the situation is not degenerate, there is a one-to-one
correspondence between the nodes of the tensegrity and the group
elements. Any node can
be identified with the identity element of the group, and the two group
elements in the cable window and the group element in the strut window are
identified with cables and struts that are connected to the identity node.
Note that if g is a group element corresponding to a strut or cable, then the
inverse element g<sup>-1</sup> also corresponds to the same cable or strut.


26. I want the struts not to touch each other.
How can I find examples where that happens?


If the order of a strut is greater than 2, then there are two
struts connected to each node. So you at least have to choose a
group element in the strut window that is of order 2. But it
still may happen that the
struts will cross somewhere in their middle. This tends to happen
for the groups with a Z<sub>2</sub> factor. (They have mirror reflection
symmetries, and the struts will intersect their mirror image, if the mirror
intersects the struts obliquely.) But in any case, you can look at the
picture and see if they intersect. If you try a different stress ratio in the
last window, that might pull some of the struts apart. In some cases, you might need
to use the "thinner" button and "zoom in" to decide whether there is
really an intersection or not.


27. What do those funny lines in the window on the
right in the program mean?


 Each curved line, or lines, of a given color corresponds to a
particular representation of the group chosen. When you click in
the right hand window, a vertical line appears through the point you clicked on. The
horizontal axis corresponds to the ratio between the stresses on the two cables
you have chosen in the cable window. The vertical axis corresponds to
the stress on the strut. When the strut stress is below the top horizontal
line, it is negative. When the strut stress crosses one of the curved
lines, the tensegrity becomes unstable, but right at that the point on the first
curved line, it corresponds to an equilibrium that it needs for its stability,
but the representation that corresponds to that line. We call that
first representation
the <i>winner</i>.


28. What is a representation of a group?


It is a function that assigns to each element g in the group G a
symmetry of some Euclidean space. But the Euclidean space may be of
dimension greater than 3. (This can happen for A<sub>5</sub> and A<sub>5</sub>
x Z<sub>2</sub>.) Suppose g goes to f(g), and h in G goes to f(h).
Then we insist that f(g)f(h)=f(gh). f is called a group <i>homomorphism</i>.
This is the same property as being an isomorphism, except that f may not be one-to-one
or onto. The representation f(g) may be the identity, for some g not
equal to e, the identity. If f is one-to-one, then we say f is <i>faithful</i>.
The faithful three-dimensional representations are labeled in the
right hand picture, and correspond to the black lines. If the winning
representation is faithful and three-dimensional, then you should get a
picture where the number of nodes is equal to the number of elements of
the group you chose in the first window.



