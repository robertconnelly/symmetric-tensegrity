#include "colors.inc"
#include "shapes.inc"
#include "textures.inc"
#declare c1txr = pigment{White} 
#declare c2txr = texture{Ruby_Glass} 
#declare s1txr = Tinny_Brass 
#declare vertxr = Soft_Silver 
#declare c1rad = .015;
#declare c2rad = .015;
#declare s1rad = .03;
#declare vrad = .05;
background{ color Gray20}
light_source { <-10,8,-3> color White }
light_source { <5, 2,-4> color White }
light_source { <0, 2,-5> color White }
camera {location<-1.4,1.5,-1.8> look_at<0,-.2,0>}
cylinder{<0.512,-0.414,0.753>,<0.753,-0.512,0.414>,c1rad texture{c1txr}}
cylinder{<0.512,-0.414,0.753>,<-0.512,0.414,0.753>,c2rad texture{c2txr}}
cylinder{<0.512,-0.414,0.753>,<-0.512,-0.414,-0.753>,s1rad texture{s1txr}}
sphere{<0.512,-0.414,0.753>, vrad texture{vertxr}}
cylinder{<-0.414,-0.753,-0.512>,<-0.512,-0.414,-0.753>,c1rad texture{c1txr}}
cylinder{<-0.414,-0.753,-0.512>,<0.414,-0.753,0.512>,c2rad texture{c2txr}}
cylinder{<-0.414,-0.753,-0.512>,<-0.414,0.753,0.512>,s1rad texture{s1txr}}
sphere{<-0.414,-0.753,-0.512>, vrad texture{vertxr}}
cylinder{<-0.753,0.512,0.414>,<-0.414,0.753,0.512>,c1rad texture{c1txr}}
cylinder{<-0.753,0.512,0.414>,<-0.753,-0.512,-0.414>,c2rad texture{c2txr}}
cylinder{<-0.753,0.512,0.414>,<0.753,-0.512,0.414>,s1rad texture{s1txr}}
sphere{<-0.753,0.512,0.414>, vrad texture{vertxr}}
cylinder{<0.512,0.414,-0.753>,<0.753,0.512,-0.414>,c1rad texture{c1txr}}
cylinder{<0.512,0.414,-0.753>,<-0.512,-0.414,-0.753>,c2rad texture{c2txr}}
cylinder{<0.512,0.414,-0.753>,<-0.512,0.414,0.753>,s1rad texture{s1txr}}
sphere{<0.512,0.414,-0.753>, vrad texture{vertxr}}
cylinder{<0.414,0.753,-0.512>,<0.512,0.414,-0.753>,c1rad texture{c1txr}}
cylinder{<0.414,0.753,-0.512>,<-0.414,0.753,0.512>,c2rad texture{c2txr}}
cylinder{<0.414,0.753,-0.512>,<0.414,-0.753,0.512>,s1rad texture{s1txr}}
sphere{<0.414,0.753,-0.512>, vrad texture{vertxr}}
cylinder{<0.753,0.512,-0.414>,<0.414,0.753,-0.512>,c1rad texture{c1txr}}
cylinder{<0.753,0.512,-0.414>,<0.753,-0.512,0.414>,c2rad texture{c2txr}}
cylinder{<0.753,0.512,-0.414>,<-0.753,-0.512,-0.414>,s1rad texture{s1txr}}
sphere{<0.753,0.512,-0.414>, vrad texture{vertxr}}
cylinder{<-0.512,-0.414,-0.753>,<-0.753,-0.512,-0.414>,c1rad texture{c1txr}}
cylinder{<-0.512,-0.414,-0.753>,<0.512,0.414,-0.753>,c2rad texture{c2txr}}
cylinder{<-0.512,-0.414,-0.753>,<0.512,-0.414,0.753>,s1rad texture{s1txr}}
sphere{<-0.512,-0.414,-0.753>, vrad texture{vertxr}}
cylinder{<-0.414,0.753,0.512>,<-0.512,0.414,0.753>,c1rad texture{c1txr}}
cylinder{<-0.414,0.753,0.512>,<0.414,0.753,-0.512>,c2rad texture{c2txr}}
cylinder{<-0.414,0.753,0.512>,<-0.414,-0.753,-0.512>,s1rad texture{s1txr}}
sphere{<-0.414,0.753,0.512>, vrad texture{vertxr}}
cylinder{<0.753,-0.512,0.414>,<0.414,-0.753,0.512>,c1rad texture{c1txr}}
cylinder{<0.753,-0.512,0.414>,<0.753,0.512,-0.414>,c2rad texture{c2txr}}
cylinder{<0.753,-0.512,0.414>,<-0.753,0.512,0.414>,s1rad texture{s1txr}}
sphere{<0.753,-0.512,0.414>, vrad texture{vertxr}}
cylinder{<-0.512,0.414,0.753>,<-0.753,0.512,0.414>,c1rad texture{c1txr}}
cylinder{<-0.512,0.414,0.753>,<0.512,-0.414,0.753>,c2rad texture{c2txr}}
cylinder{<-0.512,0.414,0.753>,<0.512,0.414,-0.753>,s1rad texture{s1txr}}
sphere{<-0.512,0.414,0.753>, vrad texture{vertxr}}
cylinder{<0.414,-0.753,0.512>,<0.512,-0.414,0.753>,c1rad texture{c1txr}}
cylinder{<0.414,-0.753,0.512>,<-0.414,-0.753,-0.512>,c2rad texture{c2txr}}
cylinder{<0.414,-0.753,0.512>,<0.414,0.753,-0.512>,s1rad texture{s1txr}}
sphere{<0.414,-0.753,0.512>, vrad texture{vertxr}}
cylinder{<-0.753,-0.512,-0.414>,<-0.414,-0.753,-0.512>,c1rad texture{c1txr}}
cylinder{<-0.753,-0.512,-0.414>,<-0.753,0.512,0.414>,c2rad texture{c2txr}}
cylinder{<-0.753,-0.512,-0.414>,<0.753,0.512,-0.414>,s1rad texture{s1txr}}
sphere{<-0.753,-0.512,-0.414>, vrad texture{vertxr}}
