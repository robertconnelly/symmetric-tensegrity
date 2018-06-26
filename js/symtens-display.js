var g_detgraph = {
  "two" : {},
  "vert_line" : {},
  "x_intercept" : 0.5,
  "paths" : []
};


var g_render = {
  "state" : {},
  "renderer" : {},
  "geometry" : {},
  "scene" : {},
  "material" : {},
  "camera" : {},
  "controls" : {},
  "objs" : {},
  "geoms" : {},
  "takeScreenshot" : false,
  "screenshot" : {},

  "lines" : {},

  "background" :  [ 0x000000, 0xffffff, 0x006666 ],
  "material_color" : [ [ 0xffffff, 0xffaa00, 0xff00aa, 0xdddddd ],
                       [ 0x3333e6, 0xcc3333, 0xb2994c, 0xdddddd ] ],

  "default_color" : {
    "background" : 0xffffff,
    "c1" : 0x3333e6,
    "c2" : 0xcc3333,
    "s1" : 0xb2994c,
    "v" : 0xdddddd
  },

  "color" : {
    "background" : 0xffffff,
    "c1" : 0x3333e6,
    "c2" : 0xcc3333,
    "s1" : 0xb2994c,
    "v" : 0xdddddd
  },

  "vertex_radius" : {
    "scale_min": 0.125,
    "scale_max" : 5,
    "scale_value" : 1,
    "scale_default": 1,
    "cylinder": 0.05,
    "line" : 0.025
  },

  "default_vertex_radius" : {
    "cylinder": 0.05,
    "line" : 0.025
  },

  "cylinder_thickness": 0.025,
  "default_cylinder_thickness": 0.025,

  "cylinder_values" : {
    "scale_default": 1,
    "c1_scale_thick" : 1,
    "c2_scale_thick" : 1,
    "s1_scale_thick" : 1,
    "scale_min" : 0.125,
    "scale_max" : 5
  },

  "canvas_width" : 412,
  "canvas_height" : 412,

  "detgraph" : g_detgraph
}


function demo_resize(renderer, camera){
  var callback  = function(){
    // notify the renderer of the size change
    renderer.setSize( window.innerWidth, window.innerHeight );
    // update the camera
    camera.aspect  = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  // bind the resize event
  window.addEventListener('resize', callback, false);
  // return .stop() the function to stop watching window resize
  return {
    /**
     * Stop watching window resize
    */
    stop  : function(){
      window.removeEventListener('resize', callback);
    }
  };
}

function animate() {
  requestAnimationFrame( animate );
  g_render.controls.update();
  g_render.renderer.render( g_render.scene, g_render.camera );

  // See:
  // https://stackoverflow.com/questions/30628064/how-to-toggle-preservedrawingbuffer-in-three-js/30647502#30647502
  // https://stackoverflow.com/questions/3749231/download-file-using-javascript-jquery
  // https://stackoverflow.com/questions/8126623/downloading-canvas-element-to-an-image
  //
  if (g_render.takeScreenshot) {
    g_render.takeScreenshot = false;
    g_render.screenshot = g_render.renderer.domElement.toDataURL("image/png").replace("image/png", "image/octet-stream");
    setTimeout(download, 10);
  }
}

function display_init() {
  var scene = new THREE.Scene();
  var canvas_ele = document.getElementById("canvas_id");
  var renderer = new THREE.WebGLRenderer( { canvas: canvas_ele, antialias: true });

  // trying to cut down on extraneous console output.
  // see: https://github.com/mrdoob/three.js/issues/9716
  //
  renderer.context.getShaderInfoLog = function () { return '' };

  var innerWidth = 400;
  var innerHeight = innerWidth;

  renderer.setSize( innerWidth, innerHeight );

  var camera = new THREE.PerspectiveCamera( 45, innerWidth / innerHeight, .01, 100 );
  var controls = new THREE.OrbitControls( camera, canvas_ele );

  camera.position.set( -2.0, 2.0, 1.5 );
  controls.update();

  g_render.scene = scene;
  g_render.renderer = renderer;
  g_render.camera = camera;
  g_render.controls = controls;

  g_render.scene.background = new THREE.Color( g_render.default_color.background );

  var tens = new symtensWeb.symtens;
  tens.init();

  //--

  tens.omeg1 = 0.7277777777777777;
  tens.omeg_1 = -0.19558098532523652;

  tens.c1 = 4;
  tens.c2 = 7;
  tens.s1 = 1;
  g_render["symtens"] = tens;

  var tenz = tens.realize_symmetric_tensegrity();
  g_render["prev_tenz"] = tenz;

  render(tenz);

  animate();
}

//----------------------------------------
//----------------------------------------
//
// render updates
//
//----------------------------------------
//----------------------------------------

function clear_scene() {
  var scene = g_render.scene;
  var camera = g_render.camera;
  if (typeof(scene) !== "undefined") {
    while(camera.children.length > 0){
      camera.remove(camera.children[0]);
    }
    while(scene.children.length > 0){ 
      scene.remove(scene.children[0]); 
    }
  }
}

function render_update(tenz) {

  for (var ii=0; ii<tenz.C1.length; ii++) {

    var p = tenz.C1[ii].length-1;
    if (p<2) { continue; }
    var midpoint = tenz.C1[ii][1];
    if (p!=2) {
      midpoint = numeric.add(tenz.C1[ii][0], numeric.mul( numeric.sub(tenz.C1[ii][p], tenz.C1[ii][0]), 0.5 ) );
    }

    var lookat = numeric.sub(tenz.C1[ii][p], tenz.C1[ii][0]);

    len = numeric.norm2(numeric.sub(tenz.C1[ii][p], tenz.C1[ii][0]));

    var axis = new THREE.Vector3(0,1,0);
    var lvec = new THREE.Vector3( lookat[0], lookat[1], lookat[2] );

    var mesh = g_render["geom_c1"][ii];

    mesh.rotation.set(0,0,0);
    mesh.scale.set(1,1,1);
    mesh.position.set(0,0,0);

    mesh.scale.y = len;
    mesh.scale.x = g_render.cylinder_values.c1_scale_thick;
    mesh.scale.z = g_render.cylinder_values.c1_scale_thick;

    mesh.translateX( midpoint[0] );
    mesh.translateY( midpoint[1] );
    mesh.translateZ( midpoint[2] );

    mesh.quaternion.setFromUnitVectors(axis, lvec.clone().normalize());
  }


  for (var ii=0; ii<tenz.C2.length; ii++) {

    var p = tenz.C2[ii].length-1;
    if (p<2) { continue; }
    var midpoint = tenz.C2[ii][1];
    if (p!=2) {
      midpoint = numeric.add(tenz.C2[ii][0], numeric.mul( numeric.sub(tenz.C2[ii][p], tenz.C2[ii][0]), 0.5 ) );
    }

    var lookat = numeric.sub(tenz.C2[ii][p], tenz.C2[ii][0]);

    len = numeric.norm2(numeric.sub(tenz.C2[ii][p], tenz.C2[ii][0]));

    var axis = new THREE.Vector3(0,1,0);
    var lvec = new THREE.Vector3( lookat[0], lookat[1], lookat[2] );

    var mesh = g_render["geom_c2"][ii];

    mesh.rotation.set(0,0,0);
    mesh.scale.set(1,1,1);
    mesh.position.set(0,0,0);

    mesh.scale.y = len;
    mesh.scale.x = g_render.cylinder_values.c2_scale_thick;
    mesh.scale.z = g_render.cylinder_values.c2_scale_thick;

    mesh.translateX( midpoint[0] );
    mesh.translateY( midpoint[1] );
    mesh.translateZ( midpoint[2] );

    mesh.quaternion.setFromUnitVectors(axis, lvec.clone().normalize());
  }

  for (var ii=0; ii<tenz.S1.length; ii++) {

    var p = tenz.S1[ii].length-1;
    if (p<2) { continue; }
    var midpoint = tenz.S1[ii][1];
    if (p!=2) {
      midpoint = numeric.add(tenz.S1[ii][0], numeric.mul( numeric.sub(tenz.S1[ii][p], tenz.S1[ii][0]), 0.5 ) );
    }

    var lookat = numeric.sub(tenz.S1[ii][p], tenz.S1[ii][0]);

    len = numeric.norm2(numeric.sub(tenz.S1[ii][p], tenz.S1[ii][0]));

    var axis = new THREE.Vector3(0,1,0);
    var lvec = new THREE.Vector3( lookat[0], lookat[1], lookat[2] );

    var mesh = g_render["geom_s1"][ii];

    mesh.rotation.set(0,0,0);
    mesh.scale.set(1,1,1);
    mesh.position.set(0,0,0);

    mesh.scale.y = len;
    mesh.scale.x = g_render.cylinder_values.s1_scale_thick;
    mesh.scale.z = g_render.cylinder_values.s1_scale_thick;

    mesh.translateX( midpoint[0] );
    mesh.translateY( midpoint[1] );
    mesh.translateZ( midpoint[2] );

    mesh.quaternion.setFromUnitVectors(axis, lvec.clone().normalize());
  }

  for (var ii=0; ii<tenz.V.length; ii++) {
    g_render["geom_v"][ii].scale.x = g_render.vertex_radius.scale_value;
    g_render["geom_v"][ii].scale.y = g_render.vertex_radius.scale_value;
    g_render["geom_v"][ii].scale.z = g_render.vertex_radius.scale_value;

    g_render["geom_v"][ii].position.x = tenz.V[ii][0];
    g_render["geom_v"][ii].position.y = tenz.V[ii][1];
    g_render["geom_v"][ii].position.z = tenz.V[ii][2];
  }

    // display lengths of cables and struts
    if (tenz.C1.length > 0) {
	var len = numeric.norm2(numeric.sub(tenz.C1[0][0], tenz.C1[0][2]));
	$("#c1_length").text(len.toString().substr(0,6));
    }
    if (tenz.C2.length > 0) {
	var len = numeric.norm2(numeric.sub(tenz.C2[0][0], tenz.C2[0][2]));
	$("#c2_length").text(len.toString().substr(0,6));
    }
    if (tenz.S1.length > 0) {
	var len = numeric.norm2(numeric.sub(tenz.S1[0][0], tenz.S1[0][2]));
	$("#s1_length").text(len.toString().substr(0,6));
    }

}

//----------------------------------------
//----------------------------------------
//
// render initialization
//
//----------------------------------------
//----------------------------------------

function render(tenz) {
  g_render.scene.background = new THREE.Color( g_render.color.background );
  var light = new THREE.PointLight( 0xffffff, 2 );
  g_render.camera.add( light );
  g_render.scene.add( g_render.camera );

  var geom_c2 = new THREE.Geometry();
  var geom_s1 = new THREE.Geometry();

  g_render["geom_c1"] = [];
  g_render["geom_c2"] = [];
  g_render["geom_s1"] = [];
  g_render["geom_v"] = [];

  //cthk = 0.025;
  var cthk = g_render.cylinder_thickness;

  c1_color = g_render.default_color.c1;
  c2_color = g_render.default_color.c2;
  s1_color = g_render.default_color.s1;
  v_color  = g_render.default_color.v;

  for (var ii=0; ii<tenz.C1.length; ii++) {

    var p = tenz.C1[ii].length-1;
    if (p<2) { continue; }
    var midpoint = tenz.C1[ii][1];
    if (p!=2) {
      midpoint = numeric.add(tenz.C1[ii][0], numeric.mul( numeric.sub(tenz.C1[ii][p], tenz.C1[ii][0]), 0.5 ) );
    }

    var lookat = numeric.sub(tenz.C1[ii][p], tenz.C1[ii][0]);

    len = numeric.norm2(numeric.sub(tenz.C1[ii][p], tenz.C1[ii][0]));

    var cgeom = new THREE.CylinderGeometry( cthk, cthk, 1, 10 );
    cgeom.computeFaceNormals();
    cgeom.mergeVertices();

    cgeom.computeVertexNormals();


    var v_material = new THREE.MeshPhongMaterial( {color: c1_color, specular: 0, shininess: 0, flatShading: false } );
    var mesh = new THREE.Mesh( cgeom, v_material );
    var axis = new THREE.Vector3(0,1,0);
    var lvec = new THREE.Vector3( lookat[0], lookat[1], lookat[2] );

    mesh.scale.y = len;

    mesh.translateX( midpoint[0] );
    mesh.translateY( midpoint[1] );
    mesh.translateZ( midpoint[2] );

    mesh.quaternion.setFromUnitVectors(axis, lvec.clone().normalize());
    g_render.scene.add( mesh );

    g_render["geom_c1"].push(mesh);
  }


  for (var ii=0; ii<tenz.C2.length; ii++) {

    var p = tenz.C2[ii].length-1;
    if (p<2) { continue; }
    var midpoint = tenz.C2[ii][1];
    if (p!=2) {
      midpoint = numeric.add(tenz.C2[ii][0], numeric.mul( numeric.sub(tenz.C2[ii][p], tenz.C2[ii][0]), 0.5 ) );
    }

    var lookat = numeric.sub(tenz.C2[ii][p], tenz.C2[ii][0]);

    len = numeric.norm2(numeric.sub(tenz.C2[ii][p], tenz.C2[ii][0]));

    var cgeom = new THREE.CylinderGeometry( cthk, cthk, 1, 10 );
    var v_material = new THREE.MeshPhongMaterial( {color: c2_color, specular: 0, shininess: 0, flatShading: false } );
    var mesh = new THREE.Mesh( cgeom, v_material );

    var axis = new THREE.Vector3(0,1,0);
    var lvec = new THREE.Vector3( lookat[0], lookat[1], lookat[2] );

    mesh.scale.y = len;

    mesh.translateX( midpoint[0] );
    mesh.translateY( midpoint[1] );
    mesh.translateZ( midpoint[2] );

    mesh.quaternion.setFromUnitVectors(axis, lvec.clone().normalize());
    g_render.scene.add( mesh );

    g_render["geom_c2"].push(mesh);
  }

  for (var ii=0; ii<tenz.S1.length; ii++) {

    var p = tenz.S1[ii].length-1;
    if (p<2) { continue; }
    var midpoint = tenz.S1[ii][1];
    if (p!=2) {
      midpoint = numeric.add(tenz.S1[ii][0], numeric.mul( numeric.sub(tenz.S1[ii][p], tenz.S1[ii][0]), 0.5 ) );
    }

    var lookat = numeric.sub(tenz.S1[ii][p], tenz.S1[ii][0]);

    len = numeric.norm2(numeric.sub(tenz.S1[ii][p], tenz.S1[ii][0]));

    var cgeom = new THREE.CylinderGeometry( cthk, cthk, 1, 10 );
    var v_material = new THREE.MeshPhongMaterial( {color: s1_color, specular: 0, shininess: 0, flatShading: false } );
    var mesh = new THREE.Mesh( cgeom, v_material );

    var axis = new THREE.Vector3(0,1,0);
    var lvec = new THREE.Vector3( lookat[0], lookat[1], lookat[2] );

    mesh.scale.y = len;

    mesh.translateX( midpoint[0] );
    mesh.translateY( midpoint[1] );
    mesh.translateZ( midpoint[2] );

    mesh.quaternion.setFromUnitVectors(axis, lvec.clone().normalize());
    g_render.scene.add( mesh );

    g_render["geom_s1"].push(mesh);

  }

  var vert_rad = g_render.vertex_radius.cylinder;

  for (var ii=0; ii<tenz.V.length; ii++) {
    var sgeom = new THREE.SphereGeometry(vert_rad, 32,32);
    var v_material = new THREE.MeshPhongMaterial( {color: v_color, specular: 0, shininess: 0, flatShading: false } );
    var sphere = new THREE.Mesh( sgeom, v_material );
    sphere.position.x = tenz.V[ii][0];
    sphere.position.y = tenz.V[ii][1];
    sphere.position.z = tenz.V[ii][2];
    g_render.scene.add( sphere );

    g_render["geom_v"].push(sphere);
  }

    // display lengths of cables and struts
    if (tenz.C1.length > 0) {
	var len = numeric.norm2(numeric.sub(tenz.C1[0][0], tenz.C1[0][2]));
	$("#c1_length").text(len.toString().substr(0,6));
    }
    if (tenz.C2.length > 0) {
	var len = numeric.norm2(numeric.sub(tenz.C2[0][0], tenz.C2[0][2]));
	$("#c2_length").text(len.toString().substr(0,6));
    }
    if (tenz.S1.length > 0) {
	var len = numeric.norm2(numeric.sub(tenz.S1[0][0], tenz.S1[0][2]));
	$("#s1_length").text(len.toString().substr(0,6));
    }
}

function take_screenshot() {
  g_render.takeScreenshot = true;
}

function download(){
  document.getElementById("dlfile_iframe").src = g_render.screenshot;
}


//----------------------------------------
//----------------------------------------
//
// change grupo, cable or struct dropdown
// select
//
//----------------------------------------
//----------------------------------------

function change_group_select() {

  var group_name = document.getElementById("group_select").value;
  var st = g_render.symtens;

  var group_idx=0;
  for (group_idx=0; group_idx<st.grpname.length; group_idx++) {
    if (st.grpname[group_idx] == group_name) { break; }
  }

  if (group_idx==st.grpname.length) {
    console.log("ERROR: grp_name", grp_name, "not found when updating cables select element");
    return;
  }

  $('#cable_select').empty();
  for (var ii=0; ii<st.cables[group_idx].length; ii++) {
    var cables_txt = st.cables[group_idx][ii];
    $("#cable_select").append($('<option>', { value: ii, text: cables_txt } ));
  }
  var cable_idx=0;
  $("#cable_select option[value='" + cable_idx.toString() + "']").attr("selected", "selected");

  $("#strut_select").empty();
  for (var ii=0; ii<st.struts[group_idx][cable_idx].length; ii++) {
    var strut_txt = st.struts[group_idx][cable_idx][ii];
    $("#strut_select").append($('<option>', { value: ii, text: strut_txt } ));
  }
  var strut_idx=0;
  $("#strut_select option[value='" + strut_idx.toString() + "']").attr("selected", "selected");

  change_strut_select();
}

function change_cable_select() {
  var st = g_render.symtens;

  var group_name = document.getElementById("group_select").value;
  var group_idx=0;
  for (group_idx=0; group_idx<st.grpname.length; group_idx++) {
    if (st.grpname[group_idx] == group_name) { break; }
  }
  if (group_idx==st.grpname.length) {
    console.log("ERROR: grp_name", grp_name, "not found when updating cables select element");
    return;
  }


  var cable_idx = parseInt(document.getElementById("cable_select").value);
  if ((cable_idx<0) || (cable_idx>=st.cables[group_idx].length)) {
    console.log("ERROR: cable_name", cable_name, "not found when updating cable select element");
    return;
  }

  $("#strut_select").empty();
  for (var ii=0; ii<st.struts[group_idx][cable_idx].length; ii++) {
    var strut_txt = st.struts[group_idx][cable_idx][ii];
    $("#strut_select").append($('<option>', { value: ii, text: strut_txt } ));
  }
  var strut_idx=0;
  $("#strut_select option[value='" + strut_idx.toString() + "']").attr("selected", "selected");


  change_strut_select();
}

function change_strut_select() {
  var st = g_render.symtens;

  var group_name = document.getElementById("group_select").value;
  var group_idx=0;
  for (group_idx=0; group_idx<st.grpname.length; group_idx++) {
    if (st.grpname[group_idx] == group_name) { break; }
  }
  if (group_idx==st.grpname.length) {
    console.log("ERROR: grp_name", grp_name, "not found when updating cables select element");
    return;
  }


  var cable_idx = parseInt(document.getElementById("cable_select").value);
  if ((cable_idx<0) || (cable_idx>=st.cables[group_idx].length)) {
    console.log("ERROR: cable_name", cable_name, "not found when updating cable select element");
    return;
  }

  var strut_idx = parseInt(document.getElementById("strut_select").value);
  if ((strut_idx<0) || (strut_idx>=st.struts[group_idx][cable_idx].length)) {
    console.log("ERROR: strut_name", strut_name, "not found when updating strut select element");
    return;
  }


  var scene = g_render.scene;
  var camera = g_render.camera;
  if (typeof(scene) !== "undefined") {
    while(camera.children.length > 0){
      camera.remove(camera.children[0]);
    }
    while(scene.children.length > 0){ 
      scene.remove(scene.children[0]); 
    }
  }

  st.omeg1 = 0.35;
  st.grp = group_idx;
  st.c   = cable_idx;
  st.c1 = st.cablnumb3rs[st.grp][st.c][0];
  st.c2 = st.cablnumb3rs[st.grp][st.c][1];
  st.s1 = st.strutnumb3rs[st.grp][st.c][strut_idx];
  var val = st.find0(g_render.detgraph.x_intercept);

  var tenz = st.realize_symmetric_tensegrity();

  g_render["prev_tenz"] = tenz;

  render(tenz);

  process_detgraph_update();
}

//----------------------------------------
//----------------------------------------

// We get 'raw' mouse x/y position relative to
// element that we're drawing into.
//
//function process_detgraph_update(mouse_x, mouse_y) {
function process_detgraph_update() {
  var two = g_render.detgraph.two;

  var win_h = two.height;
  var win_w = two.width;

  var dg = g_render.detgraph;

  var lines = g_render.symtens.getlines();
  g_render.lines = lines;

  for (var ii=0; ii<dg.paths.length; ii++) {
    two.scene.remove(dg.paths[ii]);
  }
  dg.paths = [];

  var graph_view = {
    "x": [0,1],
    "y":[-1,0],
    "dx" : 1,
    "dy" : 1
  };
  var gv = graph_view;

  for (var path_idx=0; path_idx<lines.length; path_idx++) {

    var two_path = [];
    for (var x_idx=0; x_idx<(lines[path_idx].length-1); x_idx++) {
      var tx = x_idx / lines[path_idx].length;
      var ty = lines[path_idx][x_idx];

      var w_x = ((tx * gv.dx) - gv.x[0]) * win_w;
      var w_y = ((ty * gv.dy) - gv.y[0]) * win_h;

      // scren co-ords have y increasing downwards
      //
      w_y = win_h - w_y;

      var pnt = new Two.Anchor(w_x, w_y);
      two_path.push(pnt);
    }

    // Create our curve, make the fill
    // transparent and remember it so we
    // can delete it later
    //
    var p = two.makePath(two_path, true);
    p.fill = "rgba(0,0,0,0.0)";
    dg.paths.push(p);
  }

  two.update();
}




function tensegrity_sanity(tenz, prev) {
  if (tenz.C1.length != prev.C1.length) { console.log("C1 mismatch!"); }
  if (tenz.C2.length != prev.C2.length) { console.log("C2 mismatch!"); }
  if (tenz.S1.length != prev.S1.length) { console.log("S1 mismatch!"); }

  for (var ii=0; ii<tenz.C1.length; ii++) {
    if (tenz.C1[ii].length != prev.C1[ii].length) { console.log("C1", ii, "mismatch!"); }
  }

  for (var ii=0; ii<tenz.C2.length; ii++) {
    if (tenz.C2[ii].length != prev.C2[ii].length) { console.log("C2", ii, "mismatch!"); }
  }

  for (var ii=0; ii<tenz.S1.length; ii++) {
    if (tenz.S1[ii].length != prev.S1[ii].length) { console.log("S1", ii, "mismatch!"); }
  }
}


function update_detgraph_intercept(mouse_x, mouse_y) {
  var x = mouse_x / g_render.detgraph.two.width;
  var y = (g_render.detgraph.two.height - mouse_y) / g_render.detgraph.two.height;

  g_render.detgraph.x_intercept = x;

  // clamp to [0,1]
  //
  if (x<0) { x=0; } else if (x>1) { x=1; }
  if (y<0) { y=0; } else if (y>1) { y=1; }

  var two = g_render.detgraph.two;

  var win_h = two.height;
  var win_w = two.width;
  var win_x = mouse_x;
  var win_y = mouse_y;
  if (win_x < 0) { win_x=0; } else if (x>=two.width)  { win_x = two.width-1; }
  if (win_y < 0) { win_y=0; } else if (y>=two.height) { win_y = two.height-1; }

  var vl = g_render.detgraph.vert_line;
  vl.translation.x = win_x;
  vl.visible = true;

  two.update();

  var st = g_render.symtens;
  var val = st.find0(x);

  var tenz = st.realize_symmetric_tensegrity();

  tensegrity_sanity(tenz, g_render["prev_tenz"]);

  g_render["prev_tenz"] = tenz;

  render_update(tenz);
}

function detgraph_mouse_drag(e) {
  var parentOffset = $(this).parent().offset();
  var offset = $(this).offset();
  var top = offset.top;
  var left = offset.left;

  var x = e.clientX - left;
  var y = e.clientY - top;

  update_detgraph_intercept(x,y);
}

function detgraph_mouse_drag_end(e) {
  var w = $("#detgraph_canvas");
  w.unbind('mousemove', detgraph_mouse_drag);
  w.unbind('mouseup', detgraph_mouse_drag_end);
  w.unbind('mouseleave', detgraph_mouse_drag_end);
}

function setup_detgraph() {

  var detgraph_size = 200;

  // Make an instance of two and place it on the page.
  //
  var elem = document.getElementById('detgraph');
  var params = { width: detgraph_size, height: detgraph_size};
  var two = new Two(params).appendTo(elem);

  var vl = two.makeLine(0, 0, 0, two.height);
  vl.visible = false;

  g_render.detgraph.two = two;
  g_render.detgraph.vert_line = vl;

  elem = document.getElementById('detgraph');
  var canvas_detgraph = elem.children[0];
  canvas_detgraph.setAttribute("id", "detgraph_canvas");

  two.update();

  var win_det = $("#detgraph_canvas");
  win_det.bind('mousedown', function(e) {

    var offset = $(this).offset();
    var top = offset.top;
    var left = offset.left;

    var x = e.clientX - left;
    var y = e.clientY - top;

    update_detgraph_intercept(x, y);

    var w = $("#detgraph_canvas");
    w.bind('mousemove', detgraph_mouse_drag);
    w.bind('mouseup', detgraph_mouse_drag_end);
    w.bind('mouseleave', detgraph_mouse_drag_end);
  });

}

var g_fullscreen = false;


function resizeCanvas() {

  if (g_fullscreen) {
    var cam = g_render.camera;
    cam.aspect = window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();
    g_render.renderer.setSize( window.innerWidth, window.innerHeight );
  }
  else {
    var cam = g_render.camera;
    var w = g_render.canvas_width;
    var h = g_render.canvas_height;
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
    g_render.renderer.setSize( w, h );
  }
}



function fullscreenEvent() {

  //toggle
  //
  g_fullscreen = ( g_fullscreen ? false : true );
  resizeCanvas();
}

function setup_fullscreen() {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  if (!isFirefox) {
    var ele = document.getElementById("canvas_id");

    if (ele.addEventListener) {
      ele.addEventListener('webkitfullscreenchange', fullscreenEvent, false);
      ele.addEventListener('mozfullscreenchange', fullscreenEvent, false);
      ele.addEventListener('fullscreenchange', fullscreenEvent, false);
      ele.addEventListener('MSFullscreenChange', fullscreenEvent, false);
    }
  }
  else {
    document.addEventListener('mozfullscreenchange', fullscreenEvent, false);
  }

}

function go_fullscreen() {
  var ele = document.getElementById("canvas_id");
  THREEx.FullScreen.request(ele);
}

function bg_color_change(e,c) {
  g_render.color.background = parseInt("0x" + c.toHex());
  g_render.scene.background = new THREE.Color( g_render.color.background );
}

function c1_color_change(e,c) {
  g_render.color.c1 = parseInt("0x" + c.toHex());

  for (var ii=0; ii<g_render.geom_c1.length; ii++) {
    g_render.geom_c1[ii].material.color.setHex( g_render.color.c1 );
  }
}

function c2_color_change(e,c) {
  g_render.color.c2 = parseInt("0x" + c.toHex());

  for (var ii=0; ii<g_render.geom_c2.length; ii++) {
    g_render.geom_c2[ii].material.color.setHex( g_render.color.c2 );
  }
}

function s1_color_change(e,c) {
  g_render.color.s1 = parseInt("0x" + c.toHex());

  for (var ii=0; ii<g_render.geom_s1.length; ii++) {
    g_render.geom_c2[ii].material.color.setHex( g_render.color.s1 );
  }
}

function c1_thickness_change(v) {
  var thick_min = g_render.cylinder_values.scale_min;
  var thick_max = g_render.cylinder_values.scale_max;
  var range = (thick_max - thick_min);
  var val = ((v/100)*range) + thick_min;

  var text_val = val.toString().substr(0,4);

  $("#c1_thickness_slider_val_id").text(text_val);

  g_render.cylinder_values.c1_scale_thick = val;
  render_update(g_render.prev_tenz);
}

function c2_thickness_change(v) {
  var thick_min = g_render.cylinder_values.scale_min;
  var thick_max = g_render.cylinder_values.scale_max;
  var range = (thick_max - thick_min);
  var val = ((v/100)*range) + thick_min;

  var text_val = val.toString().substr(0,4);

  $("#c2_thickness_slider_val_id").text(text_val);

  g_render.cylinder_values.c2_scale_thick = val;
  render_update(g_render.prev_tenz);
}

function s1_thickness_change(v) {
  var thick_min = g_render.cylinder_values.scale_min;
  var thick_max = g_render.cylinder_values.scale_max;
  var range = (thick_max - thick_min);
  var val = ((v/100)*range) + thick_min;

  var text_val = val.toString().substr(0,4);

  $("#s1_thickness_slider_val_id").text(text_val);

  g_render.cylinder_values.s1_scale_thick = val;
  render_update(g_render.prev_tenz);
}

function thickness_change(v) {
  var thick_min = g_render.cylinder_values.scale_min;
  var thick_max = g_render.cylinder_values.scale_max;
  var range = (thick_max - thick_min);
  var val = ((v/100)*range) + thick_min;

  var text_val = val.toString().substr(0,4);

  $("#thickness_slider_val_id").text(text_val);

  g_render.cylinder_values.scale_thick = val;
  render_update(g_render.prev_tenz);
}

function vertex_radius_change(v) {
  var mn = g_render.vertex_radius.scale_min;
  var mx = g_render.vertex_radius.scale_max;
  var range = (mx - mn);
  var val = ((v/100)*range) + mn;

  var text_val = val.toString().substr(0,4);

  $("#vertex_radius_slider_val_id").text(text_val);

  g_render.vertex_radius.scale_value = val;
  render_update(g_render.prev_tenz);
}

function restore_defaults() {

  var c = g_render.default_color.background;
  g_render.color.background = c;
  g_render.scene.background = new THREE.Color(c);
  $("#background_color_id").spectrum("set", c.toString(16));

  for (var ii=0; ii<g_render.geom_c1.length; ii++) {
  c = g_render.default_color.c1;
    g_render.geom_c1[ii].material.color.setHex( c );
  }
  $("#c1_color_id").spectrum("set", c.toString(16));

  c = g_render.default_color.c2;
  for (var ii=0; ii<g_render.geom_c2.length; ii++) {
    g_render.geom_c2[ii].material.color.setHex( c );
  }
  $("#c2_color_id").spectrum("set", c.toString(16));

  c = g_render.default_color.s1;
  for (var ii=0; ii<g_render.geom_s1.length; ii++) {
    g_render.geom_s1[ii].material.color.setHex( c );
  }
  $("#s1_color_id").spectrum("set", c.toString(16));

  $("#thickness_slider_id").slider("value", g_render.cylinder_values.scale_default );
  $("#vertex_radius_slider_id").slider("value", g_render.vertex_radius.scale_default );

  $("#thickness_id").val( g_render.cylinder_values.scale_default );

  g_render.cylinder_values.c1_scale_thick = g_render.cylinder_values.scale_default;
  g_render.cylinder_values.c2_scale_thick = g_render.cylinder_values.scale_default;
  g_render.cylinder_values.s1_scale_thick = g_render.cylinder_values.scale_default;
  var t = g_render.cylinder_values.scale_default;
  var mn = g_render.cylinder_values.scale_min;
  var mx = g_render.cylinder_values.scale_max;
  var range = (mx - mn);
  $("#c1_thickness_slider_val_id").text( t );
  $("#c1_thickness_slider_id").slider("value", Math.floor( ((t-mn)/(range))*100) );

  $("#c2_thickness_slider_val_id").text( t );
  $("#c2_thickness_slider_id").slider("value", Math.floor( ((t-mn)/(range))*100) );

  $("#s1_thickness_slider_val_id").text( t );
  $("#s1_thickness_slider_id").slider("value", Math.floor( ((t-mn)/(range))*100) );

  g_render.vertex_radius.scale_value = g_render.vertex_radius.scale_default;
  var t = g_render.vertex_radius.scale_default;
  var mn = g_render.vertex_radius.scale_min;
  var mx = g_render.vertex_radius.scale_max;
  var range = (mx - mn);
  $("#vertex_radius_slider_val_id").text( t );
  $("#vertex_radius_slider_id").slider("value", Math.floor( ((t-mn)/(range))*100) );

  render_update(g_render.prev_tenz);
}

function setup_color_picker() {
  $("#background_color_id").spectrum({ color: g_render.color.background.toString(16) });
  $("#c1_color_id").spectrum({ color: g_render.color.c1.toString(16) });
  $("#c2_color_id").spectrum({ color: g_render.color.c2.toString(16) });
  $("#s1_color_id").spectrum({ color: g_render.color.s1.toString(16) });

  $("#background_color_id").on('change.spectrum', bg_color_change);
  $("#c1_color_id").on('change', c1_color_change);
  $("#c2_color_id").on('change', c2_color_change);
  $("#s1_color_id").on('change', s1_color_change);
}

function setup_config() {
  var t = g_render.cylinder_values.scale_default;
  var mn = g_render.cylinder_values.scale_min;
  var mx = g_render.cylinder_values.scale_max;
  var range = (mx - mn);
  $("#c1_thickness_slider_id").slider({ slide: function(e,ui) { c1_thickness_change(ui.value); } });
  $("#c1_thickness_slider_val_id").text( t );
  $("#c1_thickness_slider_id").slider("value", Math.floor( ((t-mn)/(range))*100) );

  $("#c2_thickness_slider_id").slider({ slide: function(e,ui) { c2_thickness_change(ui.value); } });
  $("#c2_thickness_slider_val_id").text( t );
  $("#c2_thickness_slider_id").slider("value", Math.floor( ((t-mn)/(range))*100) );

  $("#s1_thickness_slider_id").slider({ slide: function(e,ui) { s1_thickness_change(ui.value); } });
  $("#s1_thickness_slider_val_id").text( t );
  $("#s1_thickness_slider_id").slider("value", Math.floor( ((t-mn)/(range))*100) );

  var t = g_render.vertex_radius.scale_default;
  var mn = g_render.vertex_radius.scale_min;
  var mx = g_render.vertex_radius.scale_max;
  var range = (mx - mn);
  $("#vertex_radius_slider_id").slider({ slide: function(e,ui) { vertex_radius_change(ui.value); } } );
  $("#vertex_radius_slider_val_id").text( t );
  $("#vertex_radius_slider_id").slider("value", Math.floor( ((t-mn)/(range))*100) );
}

function init() {
  display_init();

  setup_detgraph();
  process_detgraph_update();
  update_detgraph_intercept(g_render.detgraph.two.width/2, g_render.detgraph.two.height/2);

  change_group_select();

  $('#configModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
  });

  setup_fullscreen();
  setup_color_picker();

  setup_config();

  restore_defaults();
}
