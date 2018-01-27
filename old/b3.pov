#include "colors.inc"
#include "shapes.inc"
#include "textures.inc"
#declare c2txr = texture{pigment{Red}}
#declare c1txr = texture{pigment{Sapphire_Agate}} 
#declare s1txr = texture{pigment{NewTan*0.6}}
#declare vertxr = texture{pigment{White}}
#declare c1rad = .013;
#declare c2rad = .013;
#declare s1rad = .016;
#declare vrad = .025;
global_settings{max_trace_level 8}
light_source { <-10,8,-3> color White }
light_source { <5, 2,-4> color White }
light_source { <0, 2,-5> color White }
background{colour Gray60}
camera {location<1.2,.1,-2> look_at<0,0,.2>}
cylinder{<0.636,-0.709,-0.306>,<0.149,0.224,-0.963>,c1rad texture{c1txr}}
cylinder{<0.636,-0.709,-0.306>,<0.289,-0.923,-0.255>,c2rad texture{c2txr}}
cylinder{<0.636,-0.709,-0.306>,<-0.709,-0.306,0.636>,s1rad texture{s1txr}}
sphere{<0.636,-0.709,-0.306>, vrad texture{vertxr}}
cylinder{<-0.709,-0.306,0.636>,<0.224,-0.963,0.149>,c1rad texture{c1txr}}
cylinder{<-0.709,-0.306,0.636>,<-0.923,-0.255,0.289>,c2rad texture{c2txr}}
cylinder{<-0.709,-0.306,0.636>,<-0.306,0.636,-0.709>,s1rad texture{s1txr}}
sphere{<-0.709,-0.306,0.636>, vrad texture{vertxr}}
cylinder{<-0.306,0.636,-0.709>,<-0.963,0.149,0.224>,c1rad texture{c1txr}}
cylinder{<-0.306,0.636,-0.709>,<-0.255,0.289,-0.923>,c2rad texture{c2txr}}
cylinder{<-0.306,0.636,-0.709>,<0.636,-0.709,-0.306>,s1rad texture{s1txr}}
sphere{<-0.306,0.636,-0.709>, vrad texture{vertxr}}
cylinder{<-0.636,0.709,-0.306>,<-0.149,-0.224,-0.963>,c1rad texture{c1txr}}
cylinder{<-0.636,0.709,-0.306>,<-0.289,0.923,-0.255>,c2rad texture{c2txr}}
cylinder{<-0.636,0.709,-0.306>,<0.709,0.306,0.636>,s1rad texture{s1txr}}
sphere{<-0.636,0.709,-0.306>, vrad texture{vertxr}}
cylinder{<0.709,-0.306,-0.636>,<-0.224,-0.963,-0.149>,c1rad texture{c1txr}}
cylinder{<0.709,-0.306,-0.636>,<0.923,-0.255,-0.289>,c2rad texture{c2txr}}
cylinder{<0.709,-0.306,-0.636>,<0.306,0.636,0.709>,s1rad texture{s1txr}}
sphere{<0.709,-0.306,-0.636>, vrad texture{vertxr}}
cylinder{<-0.306,-0.636,0.709>,<-0.963,-0.149,-0.224>,c1rad texture{c1txr}}
cylinder{<-0.306,-0.636,0.709>,<-0.255,-0.289,0.923>,c2rad texture{c2txr}}
cylinder{<-0.306,-0.636,0.709>,<0.636,0.709,0.306>,s1rad texture{s1txr}}
sphere{<-0.306,-0.636,0.709>, vrad texture{vertxr}}
cylinder{<0.636,0.709,0.306>,<0.149,-0.224,0.963>,c1rad texture{c1txr}}
cylinder{<0.636,0.709,0.306>,<0.289,0.923,0.255>,c2rad texture{c2txr}}
cylinder{<0.636,0.709,0.306>,<-0.709,0.306,-0.636>,s1rad texture{s1txr}}
sphere{<0.636,0.709,0.306>, vrad texture{vertxr}}
cylinder{<0.709,0.306,0.636>,<-0.224,0.963,0.149>,c1rad texture{c1txr}}
cylinder{<0.709,0.306,0.636>,<0.923,0.255,0.289>,c2rad texture{c2txr}}
cylinder{<0.709,0.306,0.636>,<0.306,-0.636,-0.709>,s1rad texture{s1txr}}
sphere{<0.709,0.306,0.636>, vrad texture{vertxr}}
cylinder{<0.306,0.636,0.709>,<0.963,0.149,-0.224>,c1rad texture{c1txr}}
cylinder{<0.306,0.636,0.709>,<0.255,0.289,0.923>,c2rad texture{c2txr}}
cylinder{<0.306,0.636,0.709>,<-0.636,-0.709,0.306>,s1rad texture{s1txr}}
sphere{<0.306,0.636,0.709>, vrad texture{vertxr}}
cylinder{<-0.636,-0.709,0.306>,<-0.149,0.224,0.963>,c1rad texture{c1txr}}
cylinder{<-0.636,-0.709,0.306>,<-0.289,-0.923,0.255>,c2rad texture{c2txr}}
cylinder{<-0.636,-0.709,0.306>,<0.709,-0.306,-0.636>,s1rad texture{s1txr}}
sphere{<-0.636,-0.709,0.306>, vrad texture{vertxr}}
cylinder{<-0.709,0.306,-0.636>,<0.224,0.963,-0.149>,c1rad texture{c1txr}}
cylinder{<-0.709,0.306,-0.636>,<-0.923,0.255,-0.289>,c2rad texture{c2txr}}
cylinder{<-0.709,0.306,-0.636>,<-0.306,-0.636,0.709>,s1rad texture{s1txr}}
sphere{<-0.709,0.306,-0.636>, vrad texture{vertxr}}
cylinder{<0.306,-0.636,-0.709>,<0.963,-0.149,0.224>,c1rad texture{c1txr}}
cylinder{<0.306,-0.636,-0.709>,<0.255,-0.289,-0.923>,c2rad texture{c2txr}}
cylinder{<0.306,-0.636,-0.709>,<-0.636,0.709,-0.306>,s1rad texture{s1txr}}
sphere{<0.306,-0.636,-0.709>, vrad texture{vertxr}}
cylinder{<0.289,0.923,0.255>,<-0.774,0.347,0.530>,c1rad texture{c1txr}}
cylinder{<0.289,0.923,0.255>,<0.224,0.963,-0.149>,c2rad texture{c2txr}}
cylinder{<0.289,0.923,0.255>,<0.255,-0.289,-0.923>,s1rad texture{s1txr}}
sphere{<0.289,0.923,0.255>, vrad texture{vertxr}}
cylinder{<0.923,0.255,0.289>,<0.347,0.530,-0.774>,c1rad texture{c1txr}}
cylinder{<0.923,0.255,0.289>,<0.963,-0.149,0.224>,c2rad texture{c2txr}}
cylinder{<0.923,0.255,0.289>,<-0.289,-0.923,0.255>,s1rad texture{s1txr}}
sphere{<0.923,0.255,0.289>, vrad texture{vertxr}}
cylinder{<0.255,0.289,0.923>,<0.530,-0.774,0.347>,c1rad texture{c1txr}}
cylinder{<0.255,0.289,0.923>,<-0.149,0.224,0.963>,c2rad texture{c2txr}}
cylinder{<0.255,0.289,0.923>,<-0.923,0.255,-0.289>,s1rad texture{s1txr}}
sphere{<0.255,0.289,0.923>, vrad texture{vertxr}}
cylinder{<-0.289,-0.923,0.255>,<0.774,-0.347,0.530>,c1rad texture{c1txr}}
cylinder{<-0.289,-0.923,0.255>,<-0.224,-0.963,-0.149>,c2rad texture{c2txr}}
cylinder{<-0.289,-0.923,0.255>,<-0.255,0.289,-0.923>,s1rad texture{s1txr}}
sphere{<-0.289,-0.923,0.255>, vrad texture{vertxr}}
cylinder{<-0.923,0.255,-0.289>,<-0.347,0.530,0.774>,c1rad texture{c1txr}}
cylinder{<-0.923,0.255,-0.289>,<-0.963,-0.149,-0.224>,c2rad texture{c2txr}}
cylinder{<-0.923,0.255,-0.289>,<0.289,-0.923,-0.255>,s1rad texture{s1txr}}
sphere{<-0.923,0.255,-0.289>, vrad texture{vertxr}}
cylinder{<0.255,-0.289,-0.923>,<0.530,0.774,-0.347>,c1rad texture{c1txr}}
cylinder{<0.255,-0.289,-0.923>,<-0.149,-0.224,-0.963>,c2rad texture{c2txr}}
cylinder{<0.255,-0.289,-0.923>,<-0.923,-0.255,0.289>,s1rad texture{s1txr}}
sphere{<0.255,-0.289,-0.923>, vrad texture{vertxr}}
cylinder{<0.289,-0.923,-0.255>,<-0.774,-0.347,-0.530>,c1rad texture{c1txr}}
cylinder{<0.289,-0.923,-0.255>,<0.224,-0.963,0.149>,c2rad texture{c2txr}}
cylinder{<0.289,-0.923,-0.255>,<0.255,0.289,0.923>,s1rad texture{s1txr}}
sphere{<0.289,-0.923,-0.255>, vrad texture{vertxr}}
cylinder{<-0.923,-0.255,0.289>,<-0.347,-0.530,-0.774>,c1rad texture{c1txr}}
cylinder{<-0.923,-0.255,0.289>,<-0.963,0.149,0.224>,c2rad texture{c2txr}}
cylinder{<-0.923,-0.255,0.289>,<0.289,0.923,0.255>,s1rad texture{s1txr}}
sphere{<-0.923,-0.255,0.289>, vrad texture{vertxr}}
cylinder{<-0.255,0.289,-0.923>,<-0.530,-0.774,-0.347>,c1rad texture{c1txr}}
cylinder{<-0.255,0.289,-0.923>,<0.149,0.224,-0.963>,c2rad texture{c2txr}}
cylinder{<-0.255,0.289,-0.923>,<0.923,0.255,0.289>,s1rad texture{s1txr}}
sphere{<-0.255,0.289,-0.923>, vrad texture{vertxr}}
cylinder{<-0.289,0.923,-0.255>,<0.774,0.347,-0.530>,c1rad texture{c1txr}}
cylinder{<-0.289,0.923,-0.255>,<-0.224,0.963,0.149>,c2rad texture{c2txr}}
cylinder{<-0.289,0.923,-0.255>,<-0.255,-0.289,0.923>,s1rad texture{s1txr}}
sphere{<-0.289,0.923,-0.255>, vrad texture{vertxr}}
cylinder{<0.923,-0.255,-0.289>,<0.347,-0.530,0.774>,c1rad texture{c1txr}}
cylinder{<0.923,-0.255,-0.289>,<0.963,0.149,-0.224>,c2rad texture{c2txr}}
cylinder{<0.923,-0.255,-0.289>,<-0.289,0.923,-0.255>,s1rad texture{s1txr}}
sphere{<0.923,-0.255,-0.289>, vrad texture{vertxr}}
cylinder{<-0.255,-0.289,0.923>,<-0.530,0.774,0.347>,c1rad texture{c1txr}}
cylinder{<-0.255,-0.289,0.923>,<0.149,-0.224,0.963>,c2rad texture{c2txr}}
cylinder{<-0.255,-0.289,0.923>,<0.923,-0.255,-0.289>,s1rad texture{s1txr}}
sphere{<-0.255,-0.289,0.923>, vrad texture{vertxr}}
cylinder{<0.065,-0.784,0.617>,<-0.065,-0.784,-0.617>,c1rad texture{c1txr}}
cylinder{<0.065,-0.784,0.617>,<-0.306,-0.636,0.709>,c2rad texture{c2txr}}
cylinder{<0.065,-0.784,0.617>,<-0.530,0.774,0.347>,s1rad texture{s1txr}}
sphere{<0.065,-0.784,0.617>, vrad texture{vertxr}}
cylinder{<-0.784,0.617,0.065>,<-0.784,-0.617,-0.065>,c1rad texture{c1txr}}
cylinder{<-0.784,0.617,0.065>,<-0.636,0.709,-0.306>,c2rad texture{c2txr}}
cylinder{<-0.784,0.617,0.065>,<0.774,0.347,-0.530>,s1rad texture{s1txr}}
sphere{<-0.784,0.617,0.065>, vrad texture{vertxr}}
cylinder{<0.617,0.065,-0.784>,<-0.617,-0.065,-0.784>,c1rad texture{c1txr}}
cylinder{<0.617,0.065,-0.784>,<0.709,-0.306,-0.636>,c2rad texture{c2txr}}
cylinder{<0.617,0.065,-0.784>,<0.347,-0.530,0.774>,s1rad texture{s1txr}}
sphere{<0.617,0.065,-0.784>, vrad texture{vertxr}}
cylinder{<-0.065,0.784,0.617>,<0.065,0.784,-0.617>,c1rad texture{c1txr}}
cylinder{<-0.065,0.784,0.617>,<0.306,0.636,0.709>,c2rad texture{c2txr}}
cylinder{<-0.065,0.784,0.617>,<0.530,-0.774,0.347>,s1rad texture{s1txr}}
sphere{<-0.065,0.784,0.617>, vrad texture{vertxr}}
cylinder{<0.784,0.617,-0.065>,<0.784,-0.617,0.065>,c1rad texture{c1txr}}
cylinder{<0.784,0.617,-0.065>,<0.636,0.709,0.306>,c2rad texture{c2txr}}
cylinder{<0.784,0.617,-0.065>,<-0.774,0.347,0.530>,s1rad texture{s1txr}}
sphere{<0.784,0.617,-0.065>, vrad texture{vertxr}}
cylinder{<0.617,-0.065,0.784>,<-0.617,0.065,0.784>,c1rad texture{c1txr}}
cylinder{<0.617,-0.065,0.784>,<0.709,0.306,0.636>,c2rad texture{c2txr}}
cylinder{<0.617,-0.065,0.784>,<0.347,0.530,-0.774>,s1rad texture{s1txr}}
sphere{<0.617,-0.065,0.784>, vrad texture{vertxr}}
cylinder{<0.065,0.784,-0.617>,<-0.065,0.784,0.617>,c1rad texture{c1txr}}
cylinder{<0.065,0.784,-0.617>,<-0.306,0.636,-0.709>,c2rad texture{c2txr}}
cylinder{<0.065,0.784,-0.617>,<-0.530,-0.774,-0.347>,s1rad texture{s1txr}}
sphere{<0.065,0.784,-0.617>, vrad texture{vertxr}}
cylinder{<0.784,-0.617,0.065>,<0.784,0.617,-0.065>,c1rad texture{c1txr}}
cylinder{<0.784,-0.617,0.065>,<0.636,-0.709,-0.306>,c2rad texture{c2txr}}
cylinder{<0.784,-0.617,0.065>,<-0.774,-0.347,-0.530>,s1rad texture{s1txr}}
sphere{<0.784,-0.617,0.065>, vrad texture{vertxr}}
cylinder{<-0.617,0.065,0.784>,<0.617,-0.065,0.784>,c1rad texture{c1txr}}
cylinder{<-0.617,0.065,0.784>,<-0.709,-0.306,0.636>,c2rad texture{c2txr}}
cylinder{<-0.617,0.065,0.784>,<-0.347,-0.530,-0.774>,s1rad texture{s1txr}}
sphere{<-0.617,0.065,0.784>, vrad texture{vertxr}}
cylinder{<-0.065,-0.784,-0.617>,<0.065,-0.784,0.617>,c1rad texture{c1txr}}
cylinder{<-0.065,-0.784,-0.617>,<0.306,-0.636,-0.709>,c2rad texture{c2txr}}
cylinder{<-0.065,-0.784,-0.617>,<0.530,0.774,-0.347>,s1rad texture{s1txr}}
sphere{<-0.065,-0.784,-0.617>, vrad texture{vertxr}}
cylinder{<-0.784,-0.617,-0.065>,<-0.784,0.617,0.065>,c1rad texture{c1txr}}
cylinder{<-0.784,-0.617,-0.065>,<-0.636,-0.709,0.306>,c2rad texture{c2txr}}
cylinder{<-0.784,-0.617,-0.065>,<0.774,-0.347,0.530>,s1rad texture{s1txr}}
sphere{<-0.784,-0.617,-0.065>, vrad texture{vertxr}}
cylinder{<-0.617,-0.065,-0.784>,<0.617,0.065,-0.784>,c1rad texture{c1txr}}
cylinder{<-0.617,-0.065,-0.784>,<-0.709,0.306,-0.636>,c2rad texture{c2txr}}
cylinder{<-0.617,-0.065,-0.784>,<-0.347,0.530,0.774>,s1rad texture{s1txr}}
sphere{<-0.617,-0.065,-0.784>, vrad texture{vertxr}}
cylinder{<0.774,0.347,-0.530>,<-0.289,0.923,-0.255>,c1rad texture{c1txr}}
cylinder{<0.774,0.347,-0.530>,<0.617,0.065,-0.784>,c2rad texture{c2txr}}
cylinder{<0.774,0.347,-0.530>,<-0.224,-0.963,-0.149>,s1rad texture{s1txr}}
sphere{<0.774,0.347,-0.530>, vrad texture{vertxr}}
cylinder{<0.347,-0.530,0.774>,<0.923,-0.255,-0.289>,c1rad texture{c1txr}}
cylinder{<0.347,-0.530,0.774>,<0.065,-0.784,0.617>,c2rad texture{c2txr}}
cylinder{<0.347,-0.530,0.774>,<-0.963,-0.149,-0.224>,s1rad texture{s1txr}}
sphere{<0.347,-0.530,0.774>, vrad texture{vertxr}}
cylinder{<-0.530,0.774,0.347>,<-0.255,-0.289,0.923>,c1rad texture{c1txr}}
cylinder{<-0.530,0.774,0.347>,<-0.784,0.617,0.065>,c2rad texture{c2txr}}
cylinder{<-0.530,0.774,0.347>,<-0.149,-0.224,-0.963>,s1rad texture{s1txr}}
sphere{<-0.530,0.774,0.347>, vrad texture{vertxr}}
cylinder{<-0.774,-0.347,-0.530>,<0.289,-0.923,-0.255>,c1rad texture{c1txr}}
cylinder{<-0.774,-0.347,-0.530>,<-0.617,-0.065,-0.784>,c2rad texture{c2txr}}
cylinder{<-0.774,-0.347,-0.530>,<0.224,0.963,-0.149>,s1rad texture{s1txr}}
sphere{<-0.774,-0.347,-0.530>, vrad texture{vertxr}}
cylinder{<-0.347,-0.530,-0.774>,<-0.923,-0.255,0.289>,c1rad texture{c1txr}}
cylinder{<-0.347,-0.530,-0.774>,<-0.065,-0.784,-0.617>,c2rad texture{c2txr}}
cylinder{<-0.347,-0.530,-0.774>,<0.963,-0.149,0.224>,s1rad texture{s1txr}}
sphere{<-0.347,-0.530,-0.774>, vrad texture{vertxr}}
cylinder{<-0.530,-0.774,-0.347>,<-0.255,0.289,-0.923>,c1rad texture{c1txr}}
cylinder{<-0.530,-0.774,-0.347>,<-0.784,-0.617,-0.065>,c2rad texture{c2txr}}
cylinder{<-0.530,-0.774,-0.347>,<-0.149,0.224,0.963>,s1rad texture{s1txr}}
sphere{<-0.530,-0.774,-0.347>, vrad texture{vertxr}}
cylinder{<0.774,-0.347,0.530>,<-0.289,-0.923,0.255>,c1rad texture{c1txr}}
cylinder{<0.774,-0.347,0.530>,<0.617,-0.065,0.784>,c2rad texture{c2txr}}
cylinder{<0.774,-0.347,0.530>,<-0.224,0.963,0.149>,s1rad texture{s1txr}}
sphere{<0.774,-0.347,0.530>, vrad texture{vertxr}}
cylinder{<-0.347,0.530,0.774>,<-0.923,0.255,-0.289>,c1rad texture{c1txr}}
cylinder{<-0.347,0.530,0.774>,<-0.065,0.784,0.617>,c2rad texture{c2txr}}
cylinder{<-0.347,0.530,0.774>,<0.963,0.149,-0.224>,s1rad texture{s1txr}}
sphere{<-0.347,0.530,0.774>, vrad texture{vertxr}}
cylinder{<0.530,0.774,-0.347>,<0.255,-0.289,-0.923>,c1rad texture{c1txr}}
cylinder{<0.530,0.774,-0.347>,<0.784,0.617,-0.065>,c2rad texture{c2txr}}
cylinder{<0.530,0.774,-0.347>,<0.149,-0.224,0.963>,s1rad texture{s1txr}}
sphere{<0.530,0.774,-0.347>, vrad texture{vertxr}}
cylinder{<-0.774,0.347,0.530>,<0.289,0.923,0.255>,c1rad texture{c1txr}}
cylinder{<-0.774,0.347,0.530>,<-0.617,0.065,0.784>,c2rad texture{c2txr}}
cylinder{<-0.774,0.347,0.530>,<0.224,-0.963,0.149>,s1rad texture{s1txr}}
sphere{<-0.774,0.347,0.530>, vrad texture{vertxr}}
cylinder{<0.347,0.530,-0.774>,<0.923,0.255,0.289>,c1rad texture{c1txr}}
cylinder{<0.347,0.530,-0.774>,<0.065,0.784,-0.617>,c2rad texture{c2txr}}
cylinder{<0.347,0.530,-0.774>,<-0.963,0.149,0.224>,s1rad texture{s1txr}}
sphere{<0.347,0.530,-0.774>, vrad texture{vertxr}}
cylinder{<0.530,-0.774,0.347>,<0.255,0.289,0.923>,c1rad texture{c1txr}}
cylinder{<0.530,-0.774,0.347>,<0.784,-0.617,0.065>,c2rad texture{c2txr}}
cylinder{<0.530,-0.774,0.347>,<0.149,0.224,-0.963>,s1rad texture{s1txr}}
sphere{<0.530,-0.774,0.347>, vrad texture{vertxr}}
cylinder{<-0.149,0.224,0.963>,<-0.636,-0.709,0.306>,c1rad texture{c1txr}}
cylinder{<-0.149,0.224,0.963>,<-0.347,0.530,0.774>,c2rad texture{c2txr}}
cylinder{<-0.149,0.224,0.963>,<0.065,0.784,-0.617>,s1rad texture{s1txr}}
sphere{<-0.149,0.224,0.963>, vrad texture{vertxr}}
cylinder{<0.224,0.963,-0.149>,<-0.709,0.306,-0.636>,c1rad texture{c1txr}}
cylinder{<0.224,0.963,-0.149>,<0.530,0.774,-0.347>,c2rad texture{c2txr}}
cylinder{<0.224,0.963,-0.149>,<0.784,-0.617,0.065>,s1rad texture{s1txr}}
sphere{<0.224,0.963,-0.149>, vrad texture{vertxr}}
cylinder{<0.963,-0.149,0.224>,<0.306,-0.636,-0.709>,c1rad texture{c1txr}}
cylinder{<0.963,-0.149,0.224>,<0.774,-0.347,0.530>,c2rad texture{c2txr}}
cylinder{<0.963,-0.149,0.224>,<-0.617,0.065,0.784>,s1rad texture{s1txr}}
sphere{<0.963,-0.149,0.224>, vrad texture{vertxr}}
cylinder{<0.149,-0.224,0.963>,<0.636,0.709,0.306>,c1rad texture{c1txr}}
cylinder{<0.149,-0.224,0.963>,<0.347,-0.530,0.774>,c2rad texture{c2txr}}
cylinder{<0.149,-0.224,0.963>,<-0.065,-0.784,-0.617>,s1rad texture{s1txr}}
sphere{<0.149,-0.224,0.963>, vrad texture{vertxr}}
cylinder{<-0.224,0.963,0.149>,<0.709,0.306,0.636>,c1rad texture{c1txr}}
cylinder{<-0.224,0.963,0.149>,<-0.530,0.774,0.347>,c2rad texture{c2txr}}
cylinder{<-0.224,0.963,0.149>,<-0.784,-0.617,-0.065>,s1rad texture{s1txr}}
sphere{<-0.224,0.963,0.149>, vrad texture{vertxr}}
cylinder{<0.963,0.149,-0.224>,<0.306,0.636,0.709>,c1rad texture{c1txr}}
cylinder{<0.963,0.149,-0.224>,<0.774,0.347,-0.530>,c2rad texture{c2txr}}
cylinder{<0.963,0.149,-0.224>,<-0.617,-0.065,-0.784>,s1rad texture{s1txr}}
sphere{<0.963,0.149,-0.224>, vrad texture{vertxr}}
cylinder{<-0.149,-0.224,-0.963>,<-0.636,0.709,-0.306>,c1rad texture{c1txr}}
cylinder{<-0.149,-0.224,-0.963>,<-0.347,-0.530,-0.774>,c2rad texture{c2txr}}
cylinder{<-0.149,-0.224,-0.963>,<0.065,-0.784,0.617>,s1rad texture{s1txr}}
sphere{<-0.149,-0.224,-0.963>, vrad texture{vertxr}}
cylinder{<-0.224,-0.963,-0.149>,<0.709,-0.306,-0.636>,c1rad texture{c1txr}}
cylinder{<-0.224,-0.963,-0.149>,<-0.530,-0.774,-0.347>,c2rad texture{c2txr}}
cylinder{<-0.224,-0.963,-0.149>,<-0.784,0.617,0.065>,s1rad texture{s1txr}}
sphere{<-0.224,-0.963,-0.149>, vrad texture{vertxr}}
cylinder{<-0.963,-0.149,-0.224>,<-0.306,-0.636,0.709>,c1rad texture{c1txr}}
cylinder{<-0.963,-0.149,-0.224>,<-0.774,-0.347,-0.530>,c2rad texture{c2txr}}
cylinder{<-0.963,-0.149,-0.224>,<0.617,0.065,-0.784>,s1rad texture{s1txr}}
sphere{<-0.963,-0.149,-0.224>, vrad texture{vertxr}}
cylinder{<0.149,0.224,-0.963>,<0.636,-0.709,-0.306>,c1rad texture{c1txr}}
cylinder{<0.149,0.224,-0.963>,<0.347,0.530,-0.774>,c2rad texture{c2txr}}
cylinder{<0.149,0.224,-0.963>,<-0.065,0.784,0.617>,s1rad texture{s1txr}}
sphere{<0.149,0.224,-0.963>, vrad texture{vertxr}}
cylinder{<0.224,-0.963,0.149>,<-0.709,-0.306,0.636>,c1rad texture{c1txr}}
cylinder{<0.224,-0.963,0.149>,<0.530,-0.774,0.347>,c2rad texture{c2txr}}
cylinder{<0.224,-0.963,0.149>,<0.784,0.617,-0.065>,s1rad texture{s1txr}}
sphere{<0.224,-0.963,0.149>, vrad texture{vertxr}}
cylinder{<-0.963,0.149,0.224>,<-0.306,0.636,-0.709>,c1rad texture{c1txr}}
cylinder{<-0.963,0.149,0.224>,<-0.774,0.347,0.530>,c2rad texture{c2txr}}
cylinder{<-0.963,0.149,0.224>,<0.617,-0.065,0.784>,s1rad texture{s1txr}}
sphere{<-0.963,0.149,0.224>, vrad texture{vertxr}}
