(function(v,nt){typeof exports=="object"&&typeof module<"u"?nt(exports):typeof define=="function"&&define.amd?define(["exports"],nt):nt((v=typeof globalThis<"u"?globalThis:v||self).THREE={})})(this,function(v){"use strict";Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52)),Number.isInteger===void 0&&(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}),Math.sign===void 0&&(Math.sign=function(e){return e<0?-1:e>0?1:+e}),!("name"in Function.prototype)&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}}),Object.assign===void 0&&(Object.assign=function(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),t=1;t<arguments.length;t++){var n=arguments[t];if(n!=null)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=n[r])}return i});var nt=100,Bn=300,Yt=301,zn=302,ti=303,wn=304,an=306,Ut=307,Gn=1e3,Dt=1001,Fe=1002,dt=1003,Hi=1004,$=1005,X=1006,fe=1007,ue=1008,ze=1009,ot=1012,pt=1014,Rt=1015,on=1016,It=1020,bt=1022,St=1023,Ve=1026,tn=1027,sn=33776,mn=33777,vi=33778,gi=33779,yi=35840,cn=35841,Un=35842,ki=35843,br=37492,_r=37496,xi=2300,Vi=2301,Wi=2302,Fn=2400,ni=2401,ji=2402,wr=2500,oa=2501,Hn=3e3,Mr=3001,sa=3007,Sr=3002,qi=3004,Xi=3005,ca=3006,Yi=7680,nn=35044,ii=35048,Tr="300 es";function Ct(){}Object.assign(Ct.prototype,{addEventListener:function(e,i){this._listeners===void 0&&(this._listeners={});var t=this._listeners;t[e]===void 0&&(t[e]=[]),t[e].indexOf(i)===-1&&t[e].push(i)},hasEventListener:function(e,i){if(this._listeners===void 0)return!1;var t=this._listeners;return t[e]!==void 0&&t[e].indexOf(i)!==-1},removeEventListener:function(e,i){if(this._listeners!==void 0){var t=this._listeners[e];if(t!==void 0){var n=t.indexOf(i);n!==-1&&t.splice(n,1)}}},dispatchEvent:function(e){if(this._listeners!==void 0){var i=this._listeners[e.type];if(i!==void 0){e.target=this;for(var t=i.slice(0),n=0,r=t.length;n<r;n++)t[n].call(this,e)}}}});for(var Tt=[],et=0;et<256;et++)Tt[et]=(et<16?"0":"")+et.toString(16);var Er=1234567,be={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var e=4294967295*Math.random()|0,i=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Tt[255&e]+Tt[e>>8&255]+Tt[e>>16&255]+Tt[e>>24&255]+"-"+Tt[255&i]+Tt[i>>8&255]+"-"+Tt[i>>16&15|64]+Tt[i>>24&255]+"-"+Tt[63&t|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[255&n]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toUpperCase()},clamp:function(e,i,t){return Math.max(i,Math.min(t,e))},euclideanModulo:function(e,i){return(e%i+i)%i},mapLinear:function(e,i,t,n,r){return n+(e-i)*(r-n)/(t-i)},lerp:function(e,i,t){return(1-t)*e+t*i},smoothstep:function(e,i,t){return e<=i?0:e>=t?1:(e=(e-i)/(t-i))*e*(3-2*e)},smootherstep:function(e,i,t){return e<=i?0:e>=t?1:(e=(e-i)/(t-i))*e*e*(e*(6*e-15)+10)},randInt:function(e,i){return e+Math.floor(Math.random()*(i-e+1))},randFloat:function(e,i){return e+Math.random()*(i-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){return e!==void 0&&(Er=e%2147483647),((Er=16807*Er%2147483647)-1)/2147483646},degToRad:function(e){return e*be.DEG2RAD},radToDeg:function(e){return e*be.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)==0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,i,t,n,r){var a=Math.cos,o=Math.sin,s=a(t/2),c=o(t/2),l=a((i+n)/2),u=o((i+n)/2),h=a((i-n)/2),p=o((i-n)/2),d=a((n-i)/2),f=o((n-i)/2);switch(r){case"XYX":e.set(s*u,c*h,c*p,s*l);break;case"YZY":e.set(c*p,s*u,c*h,s*l);break;case"ZXZ":e.set(c*h,c*p,s*u,s*l);break;case"XZX":e.set(s*u,c*f,c*d,s*l);break;case"YXY":e.set(c*d,s*u,c*f,s*l);break;case"ZYZ":e.set(c*f,c*d,s*u,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};function la(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Zi(e,i,t){return i&&la(e.prototype,i),t&&la(e,t),e}function ge(e,i){e.prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i}function q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ne,I=function(){function e(t,n){t===void 0&&(t=0),n===void 0&&(n=0),Object.defineProperty(this,"isVector2",{value:!0}),this.x=t,this.y=n}var i=e.prototype;return i.set=function(t,n){return this.x=t,this.y=n,this},i.setScalar=function(t){return this.x=t,this.y=t,this},i.setX=function(t){return this.x=t,this},i.setY=function(t){return this.y=t,this},i.setComponent=function(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this},i.getComponent=function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}},i.clone=function(){return new this.constructor(this.x,this.y)},i.copy=function(t){return this.x=t.x,this.y=t.y,this},i.add=function(t,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this)},i.addScalar=function(t){return this.x+=t,this.y+=t,this},i.addVectors=function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this},i.addScaledVector=function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this},i.sub=function(t,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this)},i.subScalar=function(t){return this.x-=t,this.y-=t,this},i.subVectors=function(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this},i.multiply=function(t){return this.x*=t.x,this.y*=t.y,this},i.multiplyScalar=function(t){return this.x*=t,this.y*=t,this},i.divide=function(t){return this.x/=t.x,this.y/=t.y,this},i.divideScalar=function(t){return this.multiplyScalar(1/t)},i.applyMatrix3=function(t){var n=this.x,r=this.y,a=t.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this},i.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},i.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},i.clamp=function(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this},i.clampScalar=function(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this},i.clampLength=function(t,n){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))},i.floor=function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},i.ceil=function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},i.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},i.roundToZero=function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},i.negate=function(){return this.x=-this.x,this.y=-this.y,this},i.dot=function(t){return this.x*t.x+this.y*t.y},i.cross=function(t){return this.x*t.y-this.y*t.x},i.lengthSq=function(){return this.x*this.x+this.y*this.y},i.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},i.manhattanLength=function(){return Math.abs(this.x)+Math.abs(this.y)},i.normalize=function(){return this.divideScalar(this.length()||1)},i.angle=function(){var t=Math.atan2(-this.y,-this.x)+Math.PI;return t},i.distanceTo=function(t){return Math.sqrt(this.distanceToSquared(t))},i.distanceToSquared=function(t){var n=this.x-t.x,r=this.y-t.y;return n*n+r*r},i.manhattanDistanceTo=function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},i.setLength=function(t){return this.normalize().multiplyScalar(t)},i.lerp=function(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this},i.lerpVectors=function(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this},i.equals=function(t){return t.x===this.x&&t.y===this.y},i.fromArray=function(t,n){return n===void 0&&(n=0),this.x=t[n],this.y=t[n+1],this},i.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this.x,t[n+1]=this.y,t},i.fromBufferAttribute=function(t,n,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this},i.rotateAround=function(t,n){var r=Math.cos(n),a=Math.sin(n),o=this.x-t.x,s=this.y-t.y;return this.x=o*r-s*a+t.x,this.y=o*a+s*r+t.y,this},i.random=function(){return this.x=Math.random(),this.y=Math.random(),this},Zi(e,[{key:"width",get:function(){return this.x},set:function(t){this.x=t}},{key:"height",get:function(){return this.y},set:function(t){this.y=t}}]),e}(),ae=function(){function e(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}var i=e.prototype;return i.set=function(t,n,r,a,o,s,c,l,u){var h=this.elements;return h[0]=t,h[1]=a,h[2]=c,h[3]=n,h[4]=o,h[5]=l,h[6]=r,h[7]=s,h[8]=u,this},i.identity=function(){return this.set(1,0,0,0,1,0,0,0,1),this},i.clone=function(){return new this.constructor().fromArray(this.elements)},i.copy=function(t){var n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this},i.extractBasis=function(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this},i.setFromMatrix4=function(t){var n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this},i.multiply=function(t){return this.multiplyMatrices(this,t)},i.premultiply=function(t){return this.multiplyMatrices(t,this)},i.multiplyMatrices=function(t,n){var r=t.elements,a=n.elements,o=this.elements,s=r[0],c=r[3],l=r[6],u=r[1],h=r[4],p=r[7],d=r[2],f=r[5],g=r[8],m=a[0],y=a[3],_=a[6],x=a[1],b=a[4],w=a[7],E=a[2],S=a[5],P=a[8];return o[0]=s*m+c*x+l*E,o[3]=s*y+c*b+l*S,o[6]=s*_+c*w+l*P,o[1]=u*m+h*x+p*E,o[4]=u*y+h*b+p*S,o[7]=u*_+h*w+p*P,o[2]=d*m+f*x+g*E,o[5]=d*y+f*b+g*S,o[8]=d*_+f*w+g*P,this},i.multiplyScalar=function(t){var n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this},i.determinant=function(){var t=this.elements,n=t[0],r=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],h=t[8];return n*s*h-n*c*u-r*o*h+r*c*l+a*o*u-a*s*l},i.getInverse=function(t,n){n!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");var r=t.elements,a=this.elements,o=r[0],s=r[1],c=r[2],l=r[3],u=r[4],h=r[5],p=r[6],d=r[7],f=r[8],g=f*u-h*d,m=h*p-f*l,y=d*l-u*p,_=o*g+s*m+c*y;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);var x=1/_;return a[0]=g*x,a[1]=(c*d-f*s)*x,a[2]=(h*s-c*u)*x,a[3]=m*x,a[4]=(f*o-c*p)*x,a[5]=(c*l-h*o)*x,a[6]=y*x,a[7]=(s*p-d*o)*x,a[8]=(u*o-s*l)*x,this},i.transpose=function(){var t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this},i.getNormalMatrix=function(t){return this.setFromMatrix4(t).getInverse(this).transpose()},i.transposeIntoArray=function(t){var n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this},i.setUvTransform=function(t,n,r,a,o,s,c){var l=Math.cos(o),u=Math.sin(o);this.set(r*l,r*u,-r*(l*s+u*c)+s+t,-a*u,a*l,-a*(-u*s+l*c)+c+n,0,0,1)},i.scale=function(t,n){var r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=n,r[4]*=n,r[7]*=n,this},i.rotate=function(t){var n=Math.cos(t),r=Math.sin(t),a=this.elements,o=a[0],s=a[3],c=a[6],l=a[1],u=a[4],h=a[7];return a[0]=n*o+r*l,a[3]=n*s+r*u,a[6]=n*c+r*h,a[1]=-r*o+n*l,a[4]=-r*s+n*u,a[7]=-r*c+n*h,this},i.translate=function(t,n){var r=this.elements;return r[0]+=t*r[2],r[3]+=t*r[5],r[6]+=t*r[8],r[1]+=n*r[2],r[4]+=n*r[5],r[7]+=n*r[8],this},i.equals=function(t){for(var n=this.elements,r=t.elements,a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0},i.fromArray=function(t,n){n===void 0&&(n=0);for(var r=0;r<9;r++)this.elements[r]=t[r+n];return this},i.toArray=function(t,n){t===void 0&&(t=[]),n===void 0&&(n=0);var r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t},e}(),Le={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;var i;if(e instanceof HTMLCanvasElement)i=e;else{ne===void 0&&(ne=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),ne.width=e.width,ne.height=e.height;var t=ne.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),i=ne}return i.width>2048||i.height>2048?i.toDataURL("image/jpeg",.6):i.toDataURL("image/png")}},mt=0;function Te(e,i,t,n,r,a,o,s,c,l){Object.defineProperty(this,"id",{value:mt++}),this.uuid=be.generateUUID(),this.name="",this.image=e!==void 0?e:Te.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=i!==void 0?i:Te.DEFAULT_MAPPING,this.wrapS=t!==void 0?t:Dt,this.wrapT=n!==void 0?n:Dt,this.magFilter=r!==void 0?r:X,this.minFilter=a!==void 0?a:ue,this.anisotropy=c!==void 0?c:1,this.format=o!==void 0?o:St,this.internalFormat=null,this.type=s!==void 0?s:ze,this.offset=new I(0,0),this.repeat=new I(1,1),this.center=new I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:Hn,this.version=0,this.onUpdate=null}Te.DEFAULT_IMAGE=void 0,Te.DEFAULT_MAPPING=Bn,Te.prototype=Object.assign(Object.create(Ct.prototype),{constructor:Te,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){var i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];var t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){var n=this.image;if(n.uuid===void 0&&(n.uuid=be.generateUUID()),!i&&e.images[n.uuid]===void 0){var r;if(Array.isArray(n)){r=[];for(var a=0,o=n.length;a<o;a++)r.push(Le.getDataURL(n[a]))}else r=Le.getDataURL(n);e.images[n.uuid]={uuid:n.uuid,url:r}}t.image=n.uuid}return i||(e.textures[this.uuid]=t),t},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==Bn)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case Fe:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case Fe:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}}),Object.defineProperty(Te.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});var de=function(){function e(t,n,r,a){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),a===void 0&&(a=1),Object.defineProperty(this,"isVector4",{value:!0}),this.x=t,this.y=n,this.z=r,this.w=a}var i=e.prototype;return i.set=function(t,n,r,a){return this.x=t,this.y=n,this.z=r,this.w=a,this},i.setScalar=function(t){return this.x=t,this.y=t,this.z=t,this.w=t,this},i.setX=function(t){return this.x=t,this},i.setY=function(t){return this.y=t,this},i.setZ=function(t){return this.z=t,this},i.setW=function(t){return this.w=t,this},i.setComponent=function(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this},i.getComponent=function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}},i.clone=function(){return new this.constructor(this.x,this.y,this.z,this.w)},i.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this},i.add=function(t,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)},i.addScalar=function(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this},i.addVectors=function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this},i.addScaledVector=function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this},i.sub=function(t,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)},i.subScalar=function(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this},i.subVectors=function(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this},i.multiplyScalar=function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},i.applyMatrix4=function(t){var n=this.x,r=this.y,a=this.z,o=this.w,s=t.elements;return this.x=s[0]*n+s[4]*r+s[8]*a+s[12]*o,this.y=s[1]*n+s[5]*r+s[9]*a+s[13]*o,this.z=s[2]*n+s[6]*r+s[10]*a+s[14]*o,this.w=s[3]*n+s[7]*r+s[11]*a+s[15]*o,this},i.divideScalar=function(t){return this.multiplyScalar(1/t)},i.setAxisAngleFromQuaternion=function(t){this.w=2*Math.acos(t.w);var n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this},i.setAxisAngleFromRotationMatrix=function(t){var n,r,a,o,s=.01,c=.1,l=t.elements,u=l[0],h=l[4],p=l[8],d=l[1],f=l[5],g=l[9],m=l[2],y=l[6],_=l[10];if(Math.abs(h-d)<s&&Math.abs(p-m)<s&&Math.abs(g-y)<s){if(Math.abs(h+d)<c&&Math.abs(p+m)<c&&Math.abs(g+y)<c&&Math.abs(u+f+_-3)<c)return this.set(1,0,0,0),this;n=Math.PI;var x=(u+1)/2,b=(f+1)/2,w=(_+1)/2,E=(h+d)/4,S=(p+m)/4,P=(g+y)/4;return x>b&&x>w?x<s?(r=0,a=.707106781,o=.707106781):(a=E/(r=Math.sqrt(x)),o=S/r):b>w?b<s?(r=.707106781,a=0,o=.707106781):(r=E/(a=Math.sqrt(b)),o=P/a):w<s?(r=.707106781,a=.707106781,o=0):(r=S/(o=Math.sqrt(w)),a=P/o),this.set(r,a,o,n),this}var C=Math.sqrt((y-g)*(y-g)+(p-m)*(p-m)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(y-g)/C,this.y=(p-m)/C,this.z=(d-h)/C,this.w=Math.acos((u+f+_-1)/2),this},i.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this},i.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this},i.clamp=function(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this},i.clampScalar=function(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this},i.clampLength=function(t,n){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))},i.floor=function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},i.ceil=function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},i.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},i.roundToZero=function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},i.negate=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},i.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},i.lengthSq=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},i.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},i.manhattanLength=function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},i.normalize=function(){return this.divideScalar(this.length()||1)},i.setLength=function(t){return this.normalize().multiplyScalar(t)},i.lerp=function(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this},i.lerpVectors=function(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this},i.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w},i.fromArray=function(t,n){return n===void 0&&(n=0),this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this},i.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t},i.fromBufferAttribute=function(t,n,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this},i.random=function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this},Zi(e,[{key:"width",get:function(){return this.z},set:function(t){this.z=t}},{key:"height",get:function(){return this.w},set:function(t){this.w=t}}]),e}();function He(e,i,t){this.width=e,this.height=i,this.scissor=new de(0,0,e,i),this.scissorTest=!1,this.viewport=new de(0,0,e,i),t=t||{},this.texture=new Te(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=i,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:X,this.depthBuffer=t.depthBuffer===void 0||t.depthBuffer,this.stencilBuffer=t.stencilBuffer!==void 0&&t.stencilBuffer,this.depthTexture=t.depthTexture!==void 0?t.depthTexture:null}function Ke(e,i,t){He.call(this,e,i,t),this.samples=4}He.prototype=Object.assign(Object.create(Ct.prototype),{constructor:He,isWebGLRenderTarget:!0,setSize:function(e,i){this.width===e&&this.height===i||(this.width=e,this.height=i,this.texture.image.width=e,this.texture.image.height=i,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Ke.prototype=Object.assign(Object.create(He.prototype),{constructor:Ke,isWebGLMultisampleRenderTarget:!0,copy:function(e){return He.prototype.copy.call(this,e),this.samples=e.samples,this}});var Ze=function(){function e(t,n,r,a){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),a===void 0&&(a=1),Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=t,this._y=n,this._z=r,this._w=a}e.slerp=function(t,n,r,a){return r.copy(t).slerp(n,a)},e.slerpFlat=function(t,n,r,a,o,s,c){var l=r[a+0],u=r[a+1],h=r[a+2],p=r[a+3],d=o[s+0],f=o[s+1],g=o[s+2],m=o[s+3];if(p!==m||l!==d||u!==f||h!==g){var y=1-c,_=l*d+u*f+h*g+p*m,x=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){var w=Math.sqrt(b),E=Math.atan2(w,_*x);y=Math.sin(y*E)/w,c=Math.sin(c*E)/w}var S=c*x;if(l=l*y+d*S,u=u*y+f*S,h=h*y+g*S,p=p*y+m*S,y===1-c){var P=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=P,u*=P,h*=P,p*=P}}t[n]=l,t[n+1]=u,t[n+2]=h,t[n+3]=p},e.multiplyQuaternionsFlat=function(t,n,r,a,o,s){var c=r[a],l=r[a+1],u=r[a+2],h=r[a+3],p=o[s],d=o[s+1],f=o[s+2],g=o[s+3];return t[n]=c*g+h*p+l*f-u*d,t[n+1]=l*g+h*d+u*p-c*f,t[n+2]=u*g+h*f+c*d-l*p,t[n+3]=h*g-c*p-l*d-u*f,t};var i=e.prototype;return i.set=function(t,n,r,a){return this._x=t,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this},i.clone=function(){return new this.constructor(this._x,this._y,this._z,this._w)},i.copy=function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this},i.setFromEuler=function(t,n){if(!t||!t.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var r=t._x,a=t._y,o=t._z,s=t._order,c=Math.cos,l=Math.sin,u=c(r/2),h=c(a/2),p=c(o/2),d=l(r/2),f=l(a/2),g=l(o/2);switch(s){case"XYZ":this._x=d*h*p+u*f*g,this._y=u*f*p-d*h*g,this._z=u*h*g+d*f*p,this._w=u*h*p-d*f*g;break;case"YXZ":this._x=d*h*p+u*f*g,this._y=u*f*p-d*h*g,this._z=u*h*g-d*f*p,this._w=u*h*p+d*f*g;break;case"ZXY":this._x=d*h*p-u*f*g,this._y=u*f*p+d*h*g,this._z=u*h*g+d*f*p,this._w=u*h*p-d*f*g;break;case"ZYX":this._x=d*h*p-u*f*g,this._y=u*f*p+d*h*g,this._z=u*h*g-d*f*p,this._w=u*h*p+d*f*g;break;case"YZX":this._x=d*h*p+u*f*g,this._y=u*f*p+d*h*g,this._z=u*h*g-d*f*p,this._w=u*h*p-d*f*g;break;case"XZY":this._x=d*h*p-u*f*g,this._y=u*f*p-d*h*g,this._z=u*h*g+d*f*p,this._w=u*h*p+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this},i.setFromAxisAngle=function(t,n){var r=n/2,a=Math.sin(r);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(r),this._onChangeCallback(),this},i.setFromRotationMatrix=function(t){var n=t.elements,r=n[0],a=n[4],o=n[8],s=n[1],c=n[5],l=n[9],u=n[2],h=n[6],p=n[10],d=r+c+p;if(d>0){var f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-u)*f,this._z=(s-a)*f}else if(r>c&&r>p){var g=2*Math.sqrt(1+r-c-p);this._w=(h-l)/g,this._x=.25*g,this._y=(a+s)/g,this._z=(o+u)/g}else if(c>p){var m=2*Math.sqrt(1+c-r-p);this._w=(o-u)/m,this._x=(a+s)/m,this._y=.25*m,this._z=(l+h)/m}else{var y=2*Math.sqrt(1+p-r-c);this._w=(s-a)/y,this._x=(o+u)/y,this._y=(l+h)/y,this._z=.25*y}return this._onChangeCallback(),this},i.setFromUnitVectors=function(t,n){var r=t.dot(n)+1;return r<1e-6?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()},i.angleTo=function(t){return 2*Math.acos(Math.abs(be.clamp(this.dot(t),-1,1)))},i.rotateTowards=function(t,n){var r=this.angleTo(t);if(r===0)return this;var a=Math.min(1,n/r);return this.slerp(t,a),this},i.identity=function(){return this.set(0,0,0,1)},i.inverse=function(){return this.conjugate()},i.conjugate=function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},i.dot=function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},i.lengthSq=function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},i.length=function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},i.normalize=function(){var t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this},i.multiply=function(t,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,n)):this.multiplyQuaternions(this,t)},i.premultiply=function(t){return this.multiplyQuaternions(t,this)},i.multiplyQuaternions=function(t,n){var r=t._x,a=t._y,o=t._z,s=t._w,c=n._x,l=n._y,u=n._z,h=n._w;return this._x=r*h+s*c+a*u-o*l,this._y=a*h+s*l+o*c-r*u,this._z=o*h+s*u+r*l-a*c,this._w=s*h-r*c-a*l-o*u,this._onChangeCallback(),this},i.slerp=function(t,n){if(n===0)return this;if(n===1)return this.copy(t);var r=this._x,a=this._y,o=this._z,s=this._w,c=s*t._w+r*t._x+a*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=s,this._x=r,this._y=a,this._z=o,this;var l=1-c*c;if(l<=Number.EPSILON){var u=1-n;return this._w=u*s+n*this._w,this._x=u*r+n*this._x,this._y=u*a+n*this._y,this._z=u*o+n*this._z,this.normalize(),this._onChangeCallback(),this}var h=Math.sqrt(l),p=Math.atan2(h,c),d=Math.sin((1-n)*p)/h,f=Math.sin(n*p)/h;return this._w=s*d+this._w*f,this._x=r*d+this._x*f,this._y=a*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this},i.equals=function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},i.fromArray=function(t,n){return n===void 0&&(n=0),this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this},i.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t},i.fromBufferAttribute=function(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this},i._onChange=function(t){return this._onChangeCallback=t,this},i._onChangeCallback=function(){},Zi(e,[{key:"x",get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},{key:"y",get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},{key:"z",get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},{key:"w",get:function(){return this._w},set:function(t){this._w=t,this._onChangeCallback()}}]),e}(),M=function(){function e(t,n,r){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),Object.defineProperty(this,"isVector3",{value:!0}),this.x=t,this.y=n,this.z=r}var i=e.prototype;return i.set=function(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this},i.setScalar=function(t){return this.x=t,this.y=t,this.z=t,this},i.setX=function(t){return this.x=t,this},i.setY=function(t){return this.y=t,this},i.setZ=function(t){return this.z=t,this},i.setComponent=function(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this},i.getComponent=function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},i.clone=function(){return new this.constructor(this.x,this.y,this.z)},i.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},i.add=function(t,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},i.addScalar=function(t){return this.x+=t,this.y+=t,this.z+=t,this},i.addVectors=function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this},i.addScaledVector=function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this},i.sub=function(t,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},i.subScalar=function(t){return this.x-=t,this.y-=t,this.z-=t,this},i.subVectors=function(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this},i.multiply=function(t,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,n)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},i.multiplyScalar=function(t){return this.x*=t,this.y*=t,this.z*=t,this},i.multiplyVectors=function(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this},i.applyEuler=function(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Bt.setFromEuler(t))},i.applyAxisAngle=function(t,n){return this.applyQuaternion(Bt.setFromAxisAngle(t,n))},i.applyMatrix3=function(t){var n=this.x,r=this.y,a=this.z,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6]*a,this.y=o[1]*n+o[4]*r+o[7]*a,this.z=o[2]*n+o[5]*r+o[8]*a,this},i.applyNormalMatrix=function(t){return this.applyMatrix3(t).normalize()},i.applyMatrix4=function(t){var n=this.x,r=this.y,a=this.z,o=t.elements,s=1/(o[3]*n+o[7]*r+o[11]*a+o[15]);return this.x=(o[0]*n+o[4]*r+o[8]*a+o[12])*s,this.y=(o[1]*n+o[5]*r+o[9]*a+o[13])*s,this.z=(o[2]*n+o[6]*r+o[10]*a+o[14])*s,this},i.applyQuaternion=function(t){var n=this.x,r=this.y,a=this.z,o=t.x,s=t.y,c=t.z,l=t.w,u=l*n+s*a-c*r,h=l*r+c*n-o*a,p=l*a+o*r-s*n,d=-o*n-s*r-c*a;return this.x=u*l+d*-o+h*-c-p*-s,this.y=h*l+d*-s+p*-o-u*-c,this.z=p*l+d*-c+u*-s-h*-o,this},i.project=function(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)},i.unproject=function(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)},i.transformDirection=function(t){var n=this.x,r=this.y,a=this.z,o=t.elements;return this.x=o[0]*n+o[4]*r+o[8]*a,this.y=o[1]*n+o[5]*r+o[9]*a,this.z=o[2]*n+o[6]*r+o[10]*a,this.normalize()},i.divide=function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},i.divideScalar=function(t){return this.multiplyScalar(1/t)},i.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},i.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},i.clamp=function(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this},i.clampScalar=function(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this},i.clampLength=function(t,n){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))},i.floor=function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},i.ceil=function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},i.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},i.roundToZero=function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},i.negate=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},i.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},i.lengthSq=function(){return this.x*this.x+this.y*this.y+this.z*this.z},i.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},i.manhattanLength=function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},i.normalize=function(){return this.divideScalar(this.length()||1)},i.setLength=function(t){return this.normalize().multiplyScalar(t)},i.lerp=function(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this},i.lerpVectors=function(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this},i.cross=function(t,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,n)):this.crossVectors(this,t)},i.crossVectors=function(t,n){var r=t.x,a=t.y,o=t.z,s=n.x,c=n.y,l=n.z;return this.x=a*l-o*c,this.y=o*s-r*l,this.z=r*c-a*s,this},i.projectOnVector=function(t){var n=t.lengthSq();if(n===0)return this.set(0,0,0);var r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)},i.projectOnPlane=function(t){return _t.copy(this).projectOnVector(t),this.sub(_t)},i.reflect=function(t){return this.sub(_t.copy(t).multiplyScalar(2*this.dot(t)))},i.angleTo=function(t){var n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;var r=this.dot(t)/n;return Math.acos(be.clamp(r,-1,1))},i.distanceTo=function(t){return Math.sqrt(this.distanceToSquared(t))},i.distanceToSquared=function(t){var n=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return n*n+r*r+a*a},i.manhattanDistanceTo=function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},i.setFromSpherical=function(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)},i.setFromSphericalCoords=function(t,n,r){var a=Math.sin(n)*t;return this.x=a*Math.sin(r),this.y=Math.cos(n)*t,this.z=a*Math.cos(r),this},i.setFromCylindrical=function(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)},i.setFromCylindricalCoords=function(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this},i.setFromMatrixPosition=function(t){var n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this},i.setFromMatrixScale=function(t){var n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=a,this},i.setFromMatrixColumn=function(t,n){return this.fromArray(t.elements,4*n)},i.setFromMatrix3Column=function(t,n){return this.fromArray(t.elements,3*n)},i.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},i.fromArray=function(t,n){return n===void 0&&(n=0),this.x=t[n],this.y=t[n+1],this.z=t[n+2],this},i.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t},i.fromBufferAttribute=function(t,n,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this},i.random=function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this},e}(),_t=new M,Bt=new Ze,Pt=function(){function e(t,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=t!==void 0?t:new M(1/0,1/0,1/0),this.max=n!==void 0?n:new M(-1/0,-1/0,-1/0)}var i=e.prototype;return i.set=function(t,n){return this.min.copy(t),this.max.copy(n),this},i.setFromArray=function(t){for(var n=1/0,r=1/0,a=1/0,o=-1/0,s=-1/0,c=-1/0,l=0,u=t.length;l<u;l+=3){var h=t[l],p=t[l+1],d=t[l+2];h<n&&(n=h),p<r&&(r=p),d<a&&(a=d),h>o&&(o=h),p>s&&(s=p),d>c&&(c=d)}return this.min.set(n,r,a),this.max.set(o,s,c),this},i.setFromBufferAttribute=function(t){for(var n=1/0,r=1/0,a=1/0,o=-1/0,s=-1/0,c=-1/0,l=0,u=t.count;l<u;l++){var h=t.getX(l),p=t.getY(l),d=t.getZ(l);h<n&&(n=h),p<r&&(r=p),d<a&&(a=d),h>o&&(o=h),p>s&&(s=p),d>c&&(c=d)}return this.min.set(n,r,a),this.max.set(o,s,c),this},i.setFromPoints=function(t){this.makeEmpty();for(var n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this},i.setFromCenterAndSize=function(t,n){var r=vt.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this},i.setFromObject=function(t){return this.makeEmpty(),this.expandByObject(t)},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){return this.min.copy(t.min),this.max.copy(t.max),this},i.makeEmpty=function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},i.isEmpty=function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},i.getCenter=function(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new M),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},i.getSize=function(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new M),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)},i.expandByPoint=function(t){return this.min.min(t),this.max.max(t),this},i.expandByVector=function(t){return this.min.sub(t),this.max.add(t),this},i.expandByScalar=function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},i.expandByObject=function(t){t.updateWorldMatrix(!1,!1);var n=t.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),Pe.copy(n.boundingBox),Pe.applyMatrix4(t.matrixWorld),this.union(Pe));for(var r=t.children,a=0,o=r.length;a<o;a++)this.expandByObject(r[a]);return this},i.containsPoint=function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)},i.containsBox=function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z},i.getParameter=function(t,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new M),n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))},i.intersectsBox=function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},i.intersectsSphere=function(t){return this.clampPoint(t.center,vt),vt.distanceToSquared(t.center)<=t.radius*t.radius},i.intersectsPlane=function(t){var n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant},i.intersectsTriangle=function(t){if(this.isEmpty())return!1;this.getCenter(ua),$a.subVectors(this.max,ua),it.subVectors(t.a,ua),gt.subVectors(t.b,ua),Ar.subVectors(t.c,ua),bi.subVectors(gt,it),_i.subVectors(Ar,gt),Ji.subVectors(it,Ar);var n=[0,-bi.z,bi.y,0,-_i.z,_i.y,0,-Ji.z,Ji.y,bi.z,0,-bi.x,_i.z,0,-_i.x,Ji.z,0,-Ji.x,-bi.y,bi.x,0,-_i.y,_i.x,0,-Ji.y,Ji.x,0];return!!Zt(n,it,gt,Ar,$a)&&!!Zt(n=[1,0,0,0,1,0,0,0,1],it,gt,Ar,$a)&&(eo.crossVectors(bi,_i),Zt(n=[eo.x,eo.y,eo.z],it,gt,Ar,$a))},i.clampPoint=function(t,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new M),n.copy(t).clamp(this.min,this.max)},i.distanceToPoint=function(t){return vt.copy(t).clamp(this.min,this.max).sub(t).length()},i.getBoundingSphere=function(t){return t===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=.5*this.getSize(vt).length(),t},i.intersect=function(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this},i.union=function(t){return this.min.min(t.min),this.max.max(t.max),this},i.applyMatrix4=function(t){return this.isEmpty()||(Ft[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ft[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ft[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ft[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ft[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ft[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ft[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ft[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ft)),this},i.translate=function(t){return this.min.add(t),this.max.add(t),this},i.equals=function(t){return t.min.equals(this.min)&&t.max.equals(this.max)},e}();function Zt(e,i,t,n,r){for(var a=0,o=e.length-3;a<=o;a+=3){Qi.fromArray(e,a);var s=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),c=i.dot(Qi),l=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}var Ft=[new M,new M,new M,new M,new M,new M,new M,new M],vt=new M,Pe=new Pt,it=new M,gt=new M,Ar=new M,bi=new M,_i=new M,Ji=new M,ua=new M,$a=new M,eo=new M,Qi=new M,oh=new Pt,ri=function(){function e(t,n){this.center=t!==void 0?t:new M,this.radius=n!==void 0?n:-1}var i=e.prototype;return i.set=function(t,n){return this.center.copy(t),this.radius=n,this},i.setFromPoints=function(t,n){var r=this.center;n!==void 0?r.copy(n):oh.setFromPoints(t).getCenter(r);for(var a=0,o=0,s=t.length;o<s;o++)a=Math.max(a,r.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){return this.center.copy(t.center),this.radius=t.radius,this},i.isEmpty=function(){return this.radius<0},i.makeEmpty=function(){return this.center.set(0,0,0),this.radius=-1,this},i.containsPoint=function(t){return t.distanceToSquared(this.center)<=this.radius*this.radius},i.distanceToPoint=function(t){return t.distanceTo(this.center)-this.radius},i.intersectsSphere=function(t){var n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n},i.intersectsBox=function(t){return t.intersectsSphere(this)},i.intersectsPlane=function(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius},i.clampPoint=function(t,n){var r=this.center.distanceToSquared(t);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new M),n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n},i.getBoundingBox=function(t){return t===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new Pt),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)},i.applyMatrix4=function(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this},i.translate=function(t){return this.center.add(t),this},i.equals=function(t){return t.center.equals(this.center)&&t.radius===this.radius},e}(),ai=new M,gs=new M,to=new M,wi=new M,ys=new M,no=new M,xs=new M,Lr=function(){function e(t,n){this.origin=t!==void 0?t:new M,this.direction=n!==void 0?n:new M(0,0,-1)}var i=e.prototype;return i.set=function(t,n){return this.origin.copy(t),this.direction.copy(n),this},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},i.at=function(t,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new M),n.copy(this.direction).multiplyScalar(t).add(this.origin)},i.lookAt=function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},i.recast=function(t){return this.origin.copy(this.at(t,ai)),this},i.closestPointToPoint=function(t,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new M),n.subVectors(t,this.origin);var r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(r).add(this.origin)},i.distanceToPoint=function(t){return Math.sqrt(this.distanceSqToPoint(t))},i.distanceSqToPoint=function(t){var n=ai.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ai.copy(this.direction).multiplyScalar(n).add(this.origin),ai.distanceToSquared(t))},i.distanceSqToSegment=function(t,n,r,a){gs.copy(t).add(n).multiplyScalar(.5),to.copy(n).sub(t).normalize(),wi.copy(this.origin).sub(gs);var o,s,c,l,u=.5*t.distanceTo(n),h=-this.direction.dot(to),p=wi.dot(this.direction),d=-wi.dot(to),f=wi.lengthSq(),g=Math.abs(1-h*h);if(g>0)if(s=h*p-d,l=u*g,(o=h*d-p)>=0)if(s>=-l)if(s<=l){var m=1/g;c=(o*=m)*(o+h*(s*=m)+2*p)+s*(h*o+s+2*d)+f}else s=u,c=-(o=Math.max(0,-(h*s+p)))*o+s*(s+2*d)+f;else s=-u,c=-(o=Math.max(0,-(h*s+p)))*o+s*(s+2*d)+f;else s<=-l?c=-(o=Math.max(0,-(-h*u+p)))*o+(s=o>0?-u:Math.min(Math.max(-u,-d),u))*(s+2*d)+f:s<=l?(o=0,c=(s=Math.min(Math.max(-u,-d),u))*(s+2*d)+f):c=-(o=Math.max(0,-(h*u+p)))*o+(s=o>0?u:Math.min(Math.max(-u,-d),u))*(s+2*d)+f;else s=h>0?-u:u,c=-(o=Math.max(0,-(h*s+p)))*o+s*(s+2*d)+f;return r&&r.copy(this.direction).multiplyScalar(o).add(this.origin),a&&a.copy(to).multiplyScalar(s).add(gs),c},i.intersectSphere=function(t,n){ai.subVectors(t.center,this.origin);var r=ai.dot(this.direction),a=ai.dot(ai)-r*r,o=t.radius*t.radius;if(a>o)return null;var s=Math.sqrt(o-a),c=r-s,l=r+s;return c<0&&l<0?null:c<0?this.at(l,n):this.at(c,n)},i.intersectsSphere=function(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius},i.distanceToPlane=function(t){var n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;var r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null},i.intersectPlane=function(t,n){var r=this.distanceToPlane(t);return r===null?null:this.at(r,n)},i.intersectsPlane=function(t){var n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0},i.intersectBox=function(t,n){var r,a,o,s,c,l,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(r=(t.min.x-d.x)*u,a=(t.max.x-d.x)*u):(r=(t.max.x-d.x)*u,a=(t.min.x-d.x)*u),h>=0?(o=(t.min.y-d.y)*h,s=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,s=(t.min.y-d.y)*h),r>s||o>a?null:((o>r||r!=r)&&(r=o),(s<a||a!=a)&&(a=s),p>=0?(c=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(c=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),r>l||c>a?null:((c>r||r!=r)&&(r=c),(l<a||a!=a)&&(a=l),a<0?null:this.at(r>=0?r:a,n)))},i.intersectsBox=function(t){return this.intersectBox(t,ai)!==null},i.intersectTriangle=function(t,n,r,a,o){ys.subVectors(n,t),no.subVectors(r,t),xs.crossVectors(ys,no);var s,c=this.direction.dot(xs);if(c>0){if(a)return null;s=1}else{if(!(c<0))return null;s=-1,c=-c}wi.subVectors(this.origin,t);var l=s*this.direction.dot(no.crossVectors(wi,no));if(l<0)return null;var u=s*this.direction.dot(ys.cross(wi));if(u<0||l+u>c)return null;var h=-s*wi.dot(xs);return h<0?null:this.at(h/c,o)},i.applyMatrix4=function(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this},i.equals=function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)},e}(),Ne=function(){function e(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}var i=e.prototype;return i.set=function(t,n,r,a,o,s,c,l,u,h,p,d,f,g,m,y){var _=this.elements;return _[0]=t,_[4]=n,_[8]=r,_[12]=a,_[1]=o,_[5]=s,_[9]=c,_[13]=l,_[2]=u,_[6]=h,_[10]=p,_[14]=d,_[3]=f,_[7]=g,_[11]=m,_[15]=y,this},i.identity=function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},i.clone=function(){return new e().fromArray(this.elements)},i.copy=function(t){var n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this},i.copyPosition=function(t){var n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this},i.extractBasis=function(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this},i.makeBasis=function(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this},i.extractRotation=function(t){var n=this.elements,r=t.elements,a=1/Rr.setFromMatrixColumn(t,0).length(),o=1/Rr.setFromMatrixColumn(t,1).length(),s=1/Rr.setFromMatrixColumn(t,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*s,n[9]=r[9]*s,n[10]=r[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this},i.makeRotationFromEuler=function(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var n=this.elements,r=t.x,a=t.y,o=t.z,s=Math.cos(r),c=Math.sin(r),l=Math.cos(a),u=Math.sin(a),h=Math.cos(o),p=Math.sin(o);if(t.order==="XYZ"){var d=s*h,f=s*p,g=c*h,m=c*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=f+g*u,n[5]=d-m*u,n[9]=-c*l,n[2]=m-d*u,n[6]=g+f*u,n[10]=s*l}else if(t.order==="YXZ"){var y=l*h,_=l*p,x=u*h,b=u*p;n[0]=y+b*c,n[4]=x*c-_,n[8]=s*u,n[1]=s*p,n[5]=s*h,n[9]=-c,n[2]=_*c-x,n[6]=b+y*c,n[10]=s*l}else if(t.order==="ZXY"){var w=l*h,E=l*p,S=u*h,P=u*p;n[0]=w-P*c,n[4]=-s*p,n[8]=S+E*c,n[1]=E+S*c,n[5]=s*h,n[9]=P-w*c,n[2]=-s*u,n[6]=c,n[10]=s*l}else if(t.order==="ZYX"){var C=s*h,T=s*p,D=c*h,N=c*p;n[0]=l*h,n[4]=D*u-T,n[8]=C*u+N,n[1]=l*p,n[5]=N*u+C,n[9]=T*u-D,n[2]=-u,n[6]=c*l,n[10]=s*l}else if(t.order==="YZX"){var F=s*l,k=s*u,B=c*l,W=c*u;n[0]=l*h,n[4]=W-F*p,n[8]=B*p+k,n[1]=p,n[5]=s*h,n[9]=-c*h,n[2]=-u*h,n[6]=k*p+B,n[10]=F-W*p}else if(t.order==="XZY"){var Q=s*l,G=s*u,H=c*l,V=c*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=Q*p+V,n[5]=s*h,n[9]=G*p-H,n[2]=H*p-G,n[6]=c*h,n[10]=V*p+Q}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this},i.makeRotationFromQuaternion=function(t){return this.compose(sh,t,ch)},i.lookAt=function(t,n,r){var a=this.elements;return ln.subVectors(t,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(r,ln),Mi.lengthSq()===0&&(Math.abs(r.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(r,ln)),Mi.normalize(),io.crossVectors(ln,Mi),a[0]=Mi.x,a[4]=io.x,a[8]=ln.x,a[1]=Mi.y,a[5]=io.y,a[9]=ln.y,a[2]=Mi.z,a[6]=io.z,a[10]=ln.z,this},i.multiply=function(t,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,n)):this.multiplyMatrices(this,t)},i.premultiply=function(t){return this.multiplyMatrices(t,this)},i.multiplyMatrices=function(t,n){var r=t.elements,a=n.elements,o=this.elements,s=r[0],c=r[4],l=r[8],u=r[12],h=r[1],p=r[5],d=r[9],f=r[13],g=r[2],m=r[6],y=r[10],_=r[14],x=r[3],b=r[7],w=r[11],E=r[15],S=a[0],P=a[4],C=a[8],T=a[12],D=a[1],N=a[5],F=a[9],k=a[13],B=a[2],W=a[6],Q=a[10],G=a[14],H=a[3],V=a[7],ee=a[11],he=a[15];return o[0]=s*S+c*D+l*B+u*H,o[4]=s*P+c*N+l*W+u*V,o[8]=s*C+c*F+l*Q+u*ee,o[12]=s*T+c*k+l*G+u*he,o[1]=h*S+p*D+d*B+f*H,o[5]=h*P+p*N+d*W+f*V,o[9]=h*C+p*F+d*Q+f*ee,o[13]=h*T+p*k+d*G+f*he,o[2]=g*S+m*D+y*B+_*H,o[6]=g*P+m*N+y*W+_*V,o[10]=g*C+m*F+y*Q+_*ee,o[14]=g*T+m*k+y*G+_*he,o[3]=x*S+b*D+w*B+E*H,o[7]=x*P+b*N+w*W+E*V,o[11]=x*C+b*F+w*Q+E*ee,o[15]=x*T+b*k+w*G+E*he,this},i.multiplyScalar=function(t){var n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this},i.determinant=function(){var t=this.elements,n=t[0],r=t[4],a=t[8],o=t[12],s=t[1],c=t[5],l=t[9],u=t[13],h=t[2],p=t[6],d=t[10],f=t[14];return t[3]*(+o*l*p-a*u*p-o*c*d+r*u*d+a*c*f-r*l*f)+t[7]*(+n*l*f-n*u*d+o*s*d-a*s*f+a*u*h-o*l*h)+t[11]*(+n*u*p-n*c*f-o*s*p+r*s*f+o*c*h-r*u*h)+t[15]*(-a*c*h-n*l*p+n*c*d+a*s*p-r*s*d+r*l*h)},i.transpose=function(){var t,n=this.elements;return t=n[1],n[1]=n[4],n[4]=t,t=n[2],n[2]=n[8],n[8]=t,t=n[6],n[6]=n[9],n[9]=t,t=n[3],n[3]=n[12],n[12]=t,t=n[7],n[7]=n[13],n[13]=t,t=n[11],n[11]=n[14],n[14]=t,this},i.setPosition=function(t,n,r){var a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=r),this},i.getInverse=function(t,n){n!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");var r=this.elements,a=t.elements,o=a[0],s=a[1],c=a[2],l=a[3],u=a[4],h=a[5],p=a[6],d=a[7],f=a[8],g=a[9],m=a[10],y=a[11],_=a[12],x=a[13],b=a[14],w=a[15],E=g*b*d-x*m*d+x*p*y-h*b*y-g*p*w+h*m*w,S=_*m*d-f*b*d-_*p*y+u*b*y+f*p*w-u*m*w,P=f*x*d-_*g*d+_*h*y-u*x*y-f*h*w+u*g*w,C=_*g*p-f*x*p-_*h*m+u*x*m+f*h*b-u*g*b,T=o*E+s*S+c*P+l*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);var D=1/T;return r[0]=E*D,r[1]=(x*m*l-g*b*l-x*c*y+s*b*y+g*c*w-s*m*w)*D,r[2]=(h*b*l-x*p*l+x*c*d-s*b*d-h*c*w+s*p*w)*D,r[3]=(g*p*l-h*m*l-g*c*d+s*m*d+h*c*y-s*p*y)*D,r[4]=S*D,r[5]=(f*b*l-_*m*l+_*c*y-o*b*y-f*c*w+o*m*w)*D,r[6]=(_*p*l-u*b*l-_*c*d+o*b*d+u*c*w-o*p*w)*D,r[7]=(u*m*l-f*p*l+f*c*d-o*m*d-u*c*y+o*p*y)*D,r[8]=P*D,r[9]=(_*g*l-f*x*l-_*s*y+o*x*y+f*s*w-o*g*w)*D,r[10]=(u*x*l-_*h*l+_*s*d-o*x*d-u*s*w+o*h*w)*D,r[11]=(f*h*l-u*g*l-f*s*d+o*g*d+u*s*y-o*h*y)*D,r[12]=C*D,r[13]=(f*x*c-_*g*c+_*s*m-o*x*m-f*s*b+o*g*b)*D,r[14]=(_*h*c-u*x*c-_*s*p+o*x*p+u*s*b-o*h*b)*D,r[15]=(u*g*c-f*h*c+f*s*p-o*g*p-u*s*m+o*h*m)*D,this},i.scale=function(t){var n=this.elements,r=t.x,a=t.y,o=t.z;return n[0]*=r,n[4]*=a,n[8]*=o,n[1]*=r,n[5]*=a,n[9]*=o,n[2]*=r,n[6]*=a,n[10]*=o,n[3]*=r,n[7]*=a,n[11]*=o,this},i.getMaxScaleOnAxis=function(){var t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,a))},i.makeTranslation=function(t,n,r){return this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this},i.makeRotationX=function(t){var n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this},i.makeRotationY=function(t){var n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this},i.makeRotationZ=function(t){var n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this},i.makeRotationAxis=function(t,n){var r=Math.cos(n),a=Math.sin(n),o=1-r,s=t.x,c=t.y,l=t.z,u=o*s,h=o*c;return this.set(u*s+r,u*c-a*l,u*l+a*c,0,u*c+a*l,h*c+r,h*l-a*s,0,u*l-a*c,h*l+a*s,o*l*l+r,0,0,0,0,1),this},i.makeScale=function(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this},i.makeShear=function(t,n,r){return this.set(1,n,r,0,t,1,r,0,t,n,1,0,0,0,0,1),this},i.compose=function(t,n,r){var a=this.elements,o=n._x,s=n._y,c=n._z,l=n._w,u=o+o,h=s+s,p=c+c,d=o*u,f=o*h,g=o*p,m=s*h,y=s*p,_=c*p,x=l*u,b=l*h,w=l*p,E=r.x,S=r.y,P=r.z;return a[0]=(1-(m+_))*E,a[1]=(f+w)*E,a[2]=(g-b)*E,a[3]=0,a[4]=(f-w)*S,a[5]=(1-(d+_))*S,a[6]=(y+x)*S,a[7]=0,a[8]=(g+b)*P,a[9]=(y-x)*P,a[10]=(1-(d+m))*P,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this},i.decompose=function(t,n,r){var a=this.elements,o=Rr.set(a[0],a[1],a[2]).length(),s=Rr.set(a[4],a[5],a[6]).length(),c=Rr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),t.x=a[12],t.y=a[13],t.z=a[14],Mn.copy(this);var l=1/o,u=1/s,h=1/c;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,n.setFromRotationMatrix(Mn),r.x=o,r.y=s,r.z=c,this},i.makePerspective=function(t,n,r,a,o,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var c=this.elements,l=2*o/(n-t),u=2*o/(r-a),h=(n+t)/(n-t),p=(r+a)/(r-a),d=-(s+o)/(s-o),f=-2*s*o/(s-o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this},i.makeOrthographic=function(t,n,r,a,o,s){var c=this.elements,l=1/(n-t),u=1/(r-a),h=1/(s-o),p=(n+t)*l,d=(r+a)*u,f=(s+o)*h;return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=-2*h,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this},i.equals=function(t){for(var n=this.elements,r=t.elements,a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0},i.fromArray=function(t,n){n===void 0&&(n=0);for(var r=0;r<16;r++)this.elements[r]=t[r+n];return this},i.toArray=function(t,n){t===void 0&&(t=[]),n===void 0&&(n=0);var r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t},e}(),Rr=new M,Mn=new Ne,sh=new M(0,0,0),ch=new M(1,1,1),Mi=new M,io=new M,ln=new M,ro=function(){function e(t,n,r,a){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),a===void 0&&(a=e.DefaultOrder),Object.defineProperty(this,"isEuler",{value:!0}),this._x=t,this._y=n,this._z=r,this._order=a}var i=e.prototype;return i.set=function(t,n,r,a){return this._x=t,this._y=n,this._z=r,this._order=a||this._order,this._onChangeCallback(),this},i.clone=function(){return new this.constructor(this._x,this._y,this._z,this._order)},i.copy=function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this},i.setFromRotationMatrix=function(t,n,r){var a=be.clamp,o=t.elements,s=o[0],c=o[4],l=o[8],u=o[1],h=o[5],p=o[9],d=o[2],f=o[6],g=o[10];switch(n=n||this._order){case"XYZ":this._y=Math.asin(a(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-a(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(a(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-a(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(a(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-a(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r!==!1&&this._onChangeCallback(),this},i.setFromQuaternion=function(t,n,r){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,n,r)},i.setFromVector3=function(t,n){return this.set(t.x,t.y,t.z,n||this._order)},i.reorder=function(t){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,t)},i.equals=function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},i.fromArray=function(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this},i.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t},i.toVector3=function(t){return t?t.set(this._x,this._y,this._z):new M(this._x,this._y,this._z)},i._onChange=function(t){return this._onChangeCallback=t,this},i._onChangeCallback=function(){},Zi(e,[{key:"x",get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},{key:"y",get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},{key:"z",get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},{key:"order",get:function(){return this._order},set:function(t){this._order=t,this._onChangeCallback()}}]),e}();ro.DefaultOrder="XYZ",ro.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Yc=new Ne,Zc=new Ze,bs=function(){function e(){this.mask=1}var i=e.prototype;return i.set=function(t){this.mask=1<<t|0},i.enable=function(t){this.mask|=1<<t|0},i.enableAll=function(){this.mask=-1},i.toggle=function(t){this.mask^=1<<t|0},i.disable=function(t){this.mask&=~(1<<t|0)},i.disableAll=function(){this.mask=0},i.test=function(t){return(this.mask&t.mask)!=0},e}(),lh=0,Jc=new M,Cr=new Ze,oi=new Ne,ao=new M,ha=new M,uh=new M,hh=new Ze,Qc=new M(1,0,0),Kc=new M(0,1,0),$c=new M(0,0,1),dh={type:"added"},ph={type:"removed"};function ye(){Object.defineProperty(this,"id",{value:lh++}),this.uuid=be.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DefaultUp.clone();var e=new M,i=new ro,t=new Ze,n=new M(1,1,1);i._onChange(function(){t.setFromEuler(i,!1)}),t._onChange(function(){i.setFromQuaternion(t,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ne},normalMatrix:{value:new ae}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}ye.DefaultUp=new M(0,1,0),ye.DefaultMatrixAutoUpdate=!0,ye.prototype=Object.assign(Object.create(Ct.prototype),{constructor:ye,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,i){this.quaternion.setFromAxisAngle(e,i)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.multiply(Cr),this},rotateOnWorldAxis:function(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.premultiply(Cr),this},rotateX:function(e){return this.rotateOnAxis(Qc,e)},rotateY:function(e){return this.rotateOnAxis(Kc,e)},rotateZ:function(e){return this.rotateOnAxis($c,e)},translateOnAxis:function(e,i){return Jc.copy(e).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(i)),this},translateX:function(e){return this.translateOnAxis(Qc,e)},translateY:function(e){return this.translateOnAxis(Kc,e)},translateZ:function(e){return this.translateOnAxis($c,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(oi.getInverse(this.matrixWorld))},lookAt:function(e,i,t){e.isVector3?ao.copy(e):ao.set(e,i,t);var n=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ha,ao,this.up):oi.lookAt(ao,ha,this.up),this.quaternion.setFromRotationMatrix(oi),n&&(oi.extractRotation(n.matrixWorld),Cr.setFromRotationMatrix(oi),this.quaternion.premultiply(Cr.inverse()))},add:function(e){if(arguments.length>1){for(var i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(var i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}var t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ph)),this},attach:function(e){return this.updateWorldMatrix(!0,!1),oi.getInverse(this.matrixWorld),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,i){if(this[e]===i)return this;for(var t=0,n=this.children.length;t<n;t++){var r=this.children[t].getObjectByProperty(e,i);if(r!==void 0)return r}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new M),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new Ze),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,uh),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new M),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,hh,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new M),this.updateWorldMatrix(!0,!1);var i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()},raycast:function(){},traverse:function(e){e(this);for(var i=this.children,t=0,n=i.length;t<n;t++)i[t].traverse(e)},traverseVisible:function(e){if(this.visible!==!1){e(this);for(var i=this.children,t=0,n=i.length;t<n;t++)i[t].traverseVisible(e)}},traverseAncestors:function(e){var i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);for(var i=this.children,t=0,n=i.length;t<n;t++)i[t].updateMatrixWorld(e)},updateWorldMatrix:function(e,i){var t=this.parent;if(e===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0)for(var n=this.children,r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)},toJSON:function(e){var i=e===void 0||typeof e=="string",t={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var n={};function r(b,w){return b[w.uuid]===void 0&&(b[w.uuid]=w.toJSON(e)),w.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON()),this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);var a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){var o=a.shapes;if(Array.isArray(o))for(var s=0,c=o.length;s<c;s++){var l=o[s];r(e.shapes,l)}else r(e.shapes,o)}}if(this.material!==void 0)if(Array.isArray(this.material)){for(var u=[],h=0,p=this.material.length;h<p;h++)u.push(r(e.materials,this.material[h]));n.material=u}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(var d=0;d<this.children.length;d++)n.children.push(this.children[d].toJSON(e).object)}if(i){var f=x(e.geometries),g=x(e.materials),m=x(e.textures),y=x(e.images),_=x(e.shapes);f.length>0&&(t.geometries=f),g.length>0&&(t.materials=g),m.length>0&&(t.textures=m),y.length>0&&(t.images=y),_.length>0&&(t.shapes=_)}return t.object=n,t;function x(b){var w=[];for(var E in b){var S=b[E];delete S.metadata,w.push(S)}return w}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,i){if(i===void 0&&(i=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(var t=0;t<e.children.length;t++){var n=e.children[t];this.add(n.clone())}return this}});var _s=new M,fh=new M,mh=new ae,kn=function(){function e(t,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=t!==void 0?t:new M(1,0,0),this.constant=n!==void 0?n:0}var i=e.prototype;return i.set=function(t,n){return this.normal.copy(t),this.constant=n,this},i.setComponents=function(t,n,r,a){return this.normal.set(t,n,r),this.constant=a,this},i.setFromNormalAndCoplanarPoint=function(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this},i.setFromCoplanarPoints=function(t,n,r){var a=_s.subVectors(r,n).cross(fh.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},i.normalize=function(){var t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},i.negate=function(){return this.constant*=-1,this.normal.negate(),this},i.distanceToPoint=function(t){return this.normal.dot(t)+this.constant},i.distanceToSphere=function(t){return this.distanceToPoint(t.center)-t.radius},i.projectPoint=function(t,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new M),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)},i.intersectLine=function(t,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new M);var r=t.delta(_s),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):void 0;var o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?void 0:n.copy(r).multiplyScalar(o).add(t.start)},i.intersectsLine=function(t){var n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0},i.intersectsBox=function(t){return t.intersectsPlane(this)},i.intersectsSphere=function(t){return t.intersectsPlane(this)},i.coplanarPoint=function(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new M),t.copy(this.normal).multiplyScalar(-this.constant)},i.applyMatrix4=function(t,n){var r=n||mh.getNormalMatrix(t),a=this.coplanarPoint(_s).applyMatrix4(t),o=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(o),this},i.translate=function(t){return this.constant-=t.dot(this.normal),this},i.equals=function(t){return t.normal.equals(this.normal)&&t.constant===this.constant},e}(),Sn=new M,si=new M,ws=new M,ci=new M,Pr=new M,Or=new M,el=new M,Ms=new M,Ss=new M,Ts=new M,Tn=function(){function e(t,n,r){this.a=t!==void 0?t:new M,this.b=n!==void 0?n:new M,this.c=r!==void 0?r:new M}e.getNormal=function(t,n,r,a){a===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),a=new M),a.subVectors(r,n),Sn.subVectors(t,n),a.cross(Sn);var o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)},e.getBarycoord=function(t,n,r,a,o){Sn.subVectors(a,n),si.subVectors(r,n),ws.subVectors(t,n);var s=Sn.dot(Sn),c=Sn.dot(si),l=Sn.dot(ws),u=si.dot(si),h=si.dot(ws),p=s*u-c*c;if(o===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),o=new M),p===0)return o.set(-2,-1,-1);var d=1/p,f=(u*l-c*h)*d,g=(s*h-c*l)*d;return o.set(1-f-g,g,f)},e.containsPoint=function(t,n,r,a){return this.getBarycoord(t,n,r,a,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1},e.getUV=function(t,n,r,a,o,s,c,l){return this.getBarycoord(t,n,r,a,ci),l.set(0,0),l.addScaledVector(o,ci.x),l.addScaledVector(s,ci.y),l.addScaledVector(c,ci.z),l},e.isFrontFacing=function(t,n,r,a){return Sn.subVectors(r,n),si.subVectors(t,n),Sn.cross(si).dot(a)<0};var i=e.prototype;return i.set=function(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this},i.setFromPointsAndIndices=function(t,n,r,a){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[a]),this},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this},i.getArea=function(){return Sn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),.5*Sn.cross(si).length()},i.getMidpoint=function(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new M),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},i.getNormal=function(t){return e.getNormal(this.a,this.b,this.c,t)},i.getPlane=function(t){return t===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new kn),t.setFromCoplanarPoints(this.a,this.b,this.c)},i.getBarycoord=function(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)},i.getUV=function(t,n,r,a,o){return e.getUV(t,this.a,this.b,this.c,n,r,a,o)},i.containsPoint=function(t){return e.containsPoint(t,this.a,this.b,this.c)},i.isFrontFacing=function(t){return e.isFrontFacing(this.a,this.b,this.c,t)},i.intersectsBox=function(t){return t.intersectsTriangle(this)},i.closestPointToPoint=function(t,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new M);var r,a,o=this.a,s=this.b,c=this.c;Pr.subVectors(s,o),Or.subVectors(c,o),Ms.subVectors(t,o);var l=Pr.dot(Ms),u=Or.dot(Ms);if(l<=0&&u<=0)return n.copy(o);Ss.subVectors(t,s);var h=Pr.dot(Ss),p=Or.dot(Ss);if(h>=0&&p<=h)return n.copy(s);var d=l*p-h*u;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(o).addScaledVector(Pr,r);Ts.subVectors(t,c);var f=Pr.dot(Ts),g=Or.dot(Ts);if(g>=0&&f<=g)return n.copy(c);var m=f*u-l*g;if(m<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(o).addScaledVector(Or,a);var y=h*g-f*p;if(y<=0&&p-h>=0&&f-g>=0)return el.subVectors(c,s),a=(p-h)/(p-h+(f-g)),n.copy(s).addScaledVector(el,a);var _=1/(y+m+d);return r=m*_,a=d*_,n.copy(o).addScaledVector(Pr,r).addScaledVector(Or,a)},i.equals=function(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)},e}(),tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Es(e,i,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(i-e)*t:t<.5?i:t<2/3?e+6*(i-e)*(2/3-t):e}function As(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function Ls(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}var pe=function(){function e(t,n,r){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&r===void 0?this.set(t):this.setRGB(t,n,r)}var i=e.prototype;return i.set=function(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this},i.setScalar=function(t){return this.r=t,this.g=t,this.b=t,this},i.setHex=function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,this},i.setRGB=function(t,n,r){return this.r=t,this.g=n,this.b=r,this},i.setHSL=function(t,n,r){if(t=be.euclideanModulo(t,1),n=be.clamp(n,0,1),r=be.clamp(r,0,1),n===0)this.r=this.g=this.b=r;else{var a=r<=.5?r*(1+n):r+n-r*n,o=2*r-a;this.r=Es(o,a,t+1/3),this.g=Es(o,a,t),this.b=Es(o,a,t-1/3)}return this},i.setStyle=function(t){function n(d){d!==void 0&&parseFloat(d)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}var r;if(r=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){var a,o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,n(a[5]),this;if(a=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,n(a[5]),this;break;case"hsl":case"hsla":if(a=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)){var c=parseFloat(a[1])/360,l=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100;return n(a[5]),this.setHSL(c,l,u)}}}else if(r=/^\#([A-Fa-f0-9]+)$/.exec(t)){var h=r[1],p=h.length;if(p===3)return this.r=parseInt(h.charAt(0)+h.charAt(0),16)/255,this.g=parseInt(h.charAt(1)+h.charAt(1),16)/255,this.b=parseInt(h.charAt(2)+h.charAt(2),16)/255,this;if(p===6)return this.r=parseInt(h.charAt(0)+h.charAt(1),16)/255,this.g=parseInt(h.charAt(2)+h.charAt(3),16)/255,this.b=parseInt(h.charAt(4)+h.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this},i.setColorName=function(t){var n=tl[t];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+t),this},i.clone=function(){return new this.constructor(this.r,this.g,this.b)},i.copy=function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},i.copyGammaToLinear=function(t,n){return n===void 0&&(n=2),this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this},i.copyLinearToGamma=function(t,n){n===void 0&&(n=2);var r=n>0?1/n:1;return this.r=Math.pow(t.r,r),this.g=Math.pow(t.g,r),this.b=Math.pow(t.b,r),this},i.convertGammaToLinear=function(t){return this.copyGammaToLinear(this,t),this},i.convertLinearToGamma=function(t){return this.copyLinearToGamma(this,t),this},i.copySRGBToLinear=function(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this},i.copyLinearToSRGB=function(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this},i.convertSRGBToLinear=function(){return this.copySRGBToLinear(this),this},i.convertLinearToSRGB=function(){return this.copyLinearToSRGB(this),this},i.getHex=function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},i.getHexString=function(){return("000000"+this.getHex().toString(16)).slice(-6)},i.getHSL=function(t){t===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});var n,r,a=this.r,o=this.g,s=this.b,c=Math.max(a,o,s),l=Math.min(a,o,s),u=(l+c)/2;if(l===c)n=0,r=0;else{var h=c-l;switch(r=u<=.5?h/(c+l):h/(2-c-l),c){case a:n=(o-s)/h+(o<s?6:0);break;case o:n=(s-a)/h+2;break;case s:n=(a-o)/h+4}n/=6}return t.h=n,t.s=r,t.l=u,t},i.getStyle=function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},i.offsetHSL=function(t,n,r){return this.getHSL(En),En.h+=t,En.s+=n,En.l+=r,this.setHSL(En.h,En.s,En.l),this},i.add=function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},i.addColors=function(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this},i.addScalar=function(t){return this.r+=t,this.g+=t,this.b+=t,this},i.sub=function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},i.multiply=function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},i.multiplyScalar=function(t){return this.r*=t,this.g*=t,this.b*=t,this},i.lerp=function(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this},i.lerpHSL=function(t,n){this.getHSL(En),t.getHSL(oo);var r=be.lerp(En.h,oo.h,n),a=be.lerp(En.s,oo.s,n),o=be.lerp(En.l,oo.l,n);return this.setHSL(r,a,o),this},i.equals=function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},i.fromArray=function(t,n){return n===void 0&&(n=0),this.r=t[n],this.g=t[n+1],this.b=t[n+2],this},i.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t},i.fromBufferAttribute=function(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},i.toJSON=function(){return this.getHex()},e}();pe.NAMES=tl,pe.prototype.r=1,pe.prototype.g=1,pe.prototype.b=1;var da=function(){function e(t,n,r,a,o,s){this.a=t,this.b=n,this.c=r,this.normal=a&&a.isVector3?a:new M,this.vertexNormals=Array.isArray(a)?a:[],this.color=o&&o.isColor?o:new pe,this.vertexColors=Array.isArray(o)?o:[],this.materialIndex=s!==void 0?s:0}var i=e.prototype;return i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(var n=0,r=t.vertexNormals.length;n<r;n++)this.vertexNormals[n]=t.vertexNormals[n].clone();for(var a=0,o=t.vertexColors.length;a<o;a++)this.vertexColors[a]=t.vertexColors[a].clone();return this},e}(),vh=0;function Ee(){Object.defineProperty(this,"id",{value:vh++}),this.uuid=be.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=nt,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}function vn(e){Ee.call(this),this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}Ee.prototype=Object.assign(Object.create(Ct.prototype),{constructor:Ee,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(var i in e){var t=e[i];if(t!==void 0)if(i!=="shading"){var n=this[i];n!==void 0?n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[i]=t:console.warn("THREE."+this.type+": '"+i+"' is not a property of this material.")}else console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===1;else console.warn("THREE.Material: '"+i+"' parameter is undefined.")}},toJSON:function(e){var i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});var t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function n(o){var s=[];for(var c in o){var l=o[c];delete l.metadata,s.push(l)}return s}if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(e).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(e).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(e).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(e).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(e).uuid,t.reflectivity=this.reflectivity,t.refractionRatio=this.refractionRatio,this.combine!==void 0&&(t.combine=this.combine),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(t.size=this.size),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(t.blending=this.blending),this.flatShading===!0&&(t.flatShading=this.flatShading),this.side!==0&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData),i){var r=n(e.textures),a=n(e.images);r.length>0&&(t.textures=r),a.length>0&&(t.images=a)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;var i=e.clippingPlanes,t=null;if(i!==null){var n=i.length;t=new Array(n);for(var r=0;r!==n;++r)t[r]=i[r].clone()}return this.clippingPlanes=t,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(Ee.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),vn.prototype=Object.create(Ee.prototype),vn.prototype.constructor=vn,vn.prototype.isMeshBasicMaterial=!0,vn.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};var rt=new M,so=new I;function Me(e,i,t){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=t===!0,this.usage=nn,this.updateRange={offset:0,count:-1},this.version=0}function pa(e,i,t){Me.call(this,new Int8Array(e),i,t)}function fa(e,i,t){Me.call(this,new Uint8Array(e),i,t)}function ma(e,i,t){Me.call(this,new Uint8ClampedArray(e),i,t)}function va(e,i,t){Me.call(this,new Int16Array(e),i,t)}function Ki(e,i,t){Me.call(this,new Uint16Array(e),i,t)}function ga(e,i,t){Me.call(this,new Int32Array(e),i,t)}function $i(e,i,t){Me.call(this,new Uint32Array(e),i,t)}function se(e,i,t){Me.call(this,new Float32Array(e),i,t)}function ya(e,i,t){Me.call(this,new Float64Array(e),i,t)}Object.defineProperty(Me.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),Object.assign(Me.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,i,t){e*=this.itemSize,t*=i.itemSize;for(var n=0,r=this.itemSize;n<r;n++)this.array[e+n]=i.array[t+n];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){for(var i=this.array,t=0,n=0,r=e.length;n<r;n++){var a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),a=new pe),i[t++]=a.r,i[t++]=a.g,i[t++]=a.b}return this},copyVector2sArray:function(e){for(var i=this.array,t=0,n=0,r=e.length;n<r;n++){var a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),a=new I),i[t++]=a.x,i[t++]=a.y}return this},copyVector3sArray:function(e){for(var i=this.array,t=0,n=0,r=e.length;n<r;n++){var a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),a=new M),i[t++]=a.x,i[t++]=a.y,i[t++]=a.z}return this},copyVector4sArray:function(e){for(var i=this.array,t=0,n=0,r=e.length;n<r;n++){var a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),a=new de),i[t++]=a.x,i[t++]=a.y,i[t++]=a.z,i[t++]=a.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(var i=0,t=this.count;i<t;i++)so.fromBufferAttribute(this,i),so.applyMatrix3(e),this.setXY(i,so.x,so.y);else if(this.itemSize===3)for(var n=0,r=this.count;n<r;n++)rt.fromBufferAttribute(this,n),rt.applyMatrix3(e),this.setXYZ(n,rt.x,rt.y,rt.z);return this},applyMatrix4:function(e){for(var i=0,t=this.count;i<t;i++)rt.x=this.getX(i),rt.y=this.getY(i),rt.z=this.getZ(i),rt.applyMatrix4(e),this.setXYZ(i,rt.x,rt.y,rt.z);return this},applyNormalMatrix:function(e){for(var i=0,t=this.count;i<t;i++)rt.x=this.getX(i),rt.y=this.getY(i),rt.z=this.getZ(i),rt.applyNormalMatrix(e),this.setXYZ(i,rt.x,rt.y,rt.z);return this},transformDirection:function(e){for(var i=0,t=this.count;i<t;i++)rt.x=this.getX(i),rt.y=this.getY(i),rt.z=this.getZ(i),rt.transformDirection(e),this.setXYZ(i,rt.x,rt.y,rt.z);return this},set:function(e,i){return i===void 0&&(i=0),this.array.set(e,i),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,i){return this.array[e*this.itemSize]=i,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,i){return this.array[e*this.itemSize+1]=i,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,i){return this.array[e*this.itemSize+2]=i,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,i){return this.array[e*this.itemSize+3]=i,this},setXY:function(e,i,t){return e*=this.itemSize,this.array[e+0]=i,this.array[e+1]=t,this},setXYZ:function(e,i,t,n){return e*=this.itemSize,this.array[e+0]=i,this.array[e+1]=t,this.array[e+2]=n,this},setXYZW:function(e,i,t,n,r){return e*=this.itemSize,this.array[e+0]=i,this.array[e+1]=t,this.array[e+2]=n,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}}),pa.prototype=Object.create(Me.prototype),pa.prototype.constructor=pa,fa.prototype=Object.create(Me.prototype),fa.prototype.constructor=fa,ma.prototype=Object.create(Me.prototype),ma.prototype.constructor=ma,va.prototype=Object.create(Me.prototype),va.prototype.constructor=va,Ki.prototype=Object.create(Me.prototype),Ki.prototype.constructor=Ki,ga.prototype=Object.create(Me.prototype),ga.prototype.constructor=ga,$i.prototype=Object.create(Me.prototype),$i.prototype.constructor=$i,se.prototype=Object.create(Me.prototype),se.prototype.constructor=se,ya.prototype=Object.create(Me.prototype),ya.prototype.constructor=ya;var gh=function(){function e(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}var i=e.prototype;return i.computeGroups=function(t){var n,r,a=[],o=void 0,s=t.faces;for(r=0;r<s.length;r++){var c=s[r];c.materialIndex!==o&&(o=c.materialIndex,n!==void 0&&(n.count=3*r-n.start,a.push(n)),n={start:3*r,materialIndex:o})}n!==void 0&&(n.count=3*r-n.start,a.push(n)),this.groups=a},i.fromGeometry=function(t){var n,r=t.faces,a=t.vertices,o=t.faceVertexUvs,s=o[0]&&o[0].length>0,c=o[1]&&o[1].length>0,l=t.morphTargets,u=l.length;if(u>0){n=[];for(var h=0;h<u;h++)n[h]={name:l[h].name,data:[]};this.morphTargets.position=n}var p,d=t.morphNormals,f=d.length;if(f>0){p=[];for(var g=0;g<f;g++)p[g]={name:d[g].name,data:[]};this.morphTargets.normal=p}var m=t.skinIndices,y=t.skinWeights,_=m.length===a.length,x=y.length===a.length;a.length>0&&r.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(var b=0;b<r.length;b++){var w=r[b];this.vertices.push(a[w.a],a[w.b],a[w.c]);var E=w.vertexNormals;if(E.length===3)this.normals.push(E[0],E[1],E[2]);else{var S=w.normal;this.normals.push(S,S,S)}var P=w.vertexColors;if(P.length===3)this.colors.push(P[0],P[1],P[2]);else{var C=w.color;this.colors.push(C,C,C)}if(s===!0){var T=o[0][b];T!==void 0?this.uvs.push(T[0],T[1],T[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",b),this.uvs.push(new I,new I,new I))}if(c===!0){var D=o[1][b];D!==void 0?this.uvs2.push(D[0],D[1],D[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",b),this.uvs2.push(new I,new I,new I))}for(var N=0;N<u;N++){var F=l[N].vertices;n[N].data.push(F[w.a],F[w.b],F[w.c])}for(var k=0;k<f;k++){var B=d[k].vertexNormals[b];p[k].data.push(B.a,B.b,B.c)}_&&this.skinIndices.push(m[w.a],m[w.b],m[w.c]),x&&this.skinWeights.push(y[w.a],y[w.b],y[w.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},e}();function nl(e){if(e.length===0)return-1/0;for(var i=e[0],t=1,n=e.length;t<n;++t)e[t]>i&&(i=e[t]);return i}var yh=1,Vn=new Ne,Rs=new ye,Nr=new M,un=new Pt,xa=new Pt,zt=new M;function _e(){Object.defineProperty(this,"id",{value:yh+=2}),this.uuid=be.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}_e.prototype=Object.assign(Object.create(Ct.prototype),{constructor:_e,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){return Array.isArray(e)?this.index=new(nl(e)>65535?$i:Ki)(e,1):this.index=e,this},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,i){return this.attributes[e]=i,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,i,t){this.groups.push({start:e,count:i,materialIndex:t!==void 0?t:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,i){this.drawRange.start=e,this.drawRange.count=i},applyMatrix4:function(e){var i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);var t=this.attributes.normal;if(t!==void 0){var n=new ae().getNormalMatrix(e);t.applyNormalMatrix(n),t.needsUpdate=!0}var r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this},rotateY:function(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this},rotateZ:function(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this},translate:function(e,i,t){return Vn.makeTranslation(e,i,t),this.applyMatrix4(Vn),this},scale:function(e,i,t){return Vn.makeScale(e,i,t),this.applyMatrix4(Vn),this},lookAt:function(e){return Rs.lookAt(e),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this},setFromObject:function(e){var i=e.geometry;if(e.isPoints||e.isLine){var t=new se(3*i.vertices.length,3),n=new se(3*i.colors.length,3);if(this.setAttribute("position",t.copyVector3sArray(i.vertices)),this.setAttribute("color",n.copyColorsArray(i.colors)),i.lineDistances&&i.lineDistances.length===i.vertices.length){var r=new se(i.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(i.lineDistances))}i.boundingSphere!==null&&(this.boundingSphere=i.boundingSphere.clone()),i.boundingBox!==null&&(this.boundingBox=i.boundingBox.clone())}else e.isMesh&&i&&i.isGeometry&&this.fromGeometry(i);return this},setFromPoints:function(e){for(var i=[],t=0,n=e.length;t<n;t++){var r=e[t];i.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(i,3)),this},updateFromObject:function(e){var i=e.geometry;if(e.isMesh){var t=i.__directGeometry;if(i.elementsNeedUpdate===!0&&(t=void 0,i.elementsNeedUpdate=!1),t===void 0)return this.fromGeometry(i);t.verticesNeedUpdate=i.verticesNeedUpdate,t.normalsNeedUpdate=i.normalsNeedUpdate,t.colorsNeedUpdate=i.colorsNeedUpdate,t.uvsNeedUpdate=i.uvsNeedUpdate,t.groupsNeedUpdate=i.groupsNeedUpdate,i.verticesNeedUpdate=!1,i.normalsNeedUpdate=!1,i.colorsNeedUpdate=!1,i.uvsNeedUpdate=!1,i.groupsNeedUpdate=!1,i=t}if(i.verticesNeedUpdate===!0){var n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(i.vertices),n.needsUpdate=!0),i.verticesNeedUpdate=!1}if(i.normalsNeedUpdate===!0){var r=this.attributes.normal;r!==void 0&&(r.copyVector3sArray(i.normals),r.needsUpdate=!0),i.normalsNeedUpdate=!1}if(i.colorsNeedUpdate===!0){var a=this.attributes.color;a!==void 0&&(a.copyColorsArray(i.colors),a.needsUpdate=!0),i.colorsNeedUpdate=!1}if(i.uvsNeedUpdate){var o=this.attributes.uv;o!==void 0&&(o.copyVector2sArray(i.uvs),o.needsUpdate=!0),i.uvsNeedUpdate=!1}if(i.lineDistancesNeedUpdate){var s=this.attributes.lineDistance;s!==void 0&&(s.copyArray(i.lineDistances),s.needsUpdate=!0),i.lineDistancesNeedUpdate=!1}return i.groupsNeedUpdate&&(i.computeGroups(e.geometry),this.groups=i.groups,i.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new gh().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){var i=new Float32Array(3*e.vertices.length);if(this.setAttribute("position",new Me(i,3).copyVector3sArray(e.vertices)),e.normals.length>0){var t=new Float32Array(3*e.normals.length);this.setAttribute("normal",new Me(t,3).copyVector3sArray(e.normals))}if(e.colors.length>0){var n=new Float32Array(3*e.colors.length);this.setAttribute("color",new Me(n,3).copyColorsArray(e.colors))}if(e.uvs.length>0){var r=new Float32Array(2*e.uvs.length);this.setAttribute("uv",new Me(r,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){var a=new Float32Array(2*e.uvs2.length);this.setAttribute("uv2",new Me(a,2).copyVector2sArray(e.uvs2))}for(var o in this.groups=e.groups,e.morphTargets){for(var s=[],c=e.morphTargets[o],l=0,u=c.length;l<u;l++){var h=c[l],p=new se(3*h.data.length,3);p.name=h.name,s.push(p.copyVector3sArray(h.data))}this.morphAttributes[o]=s}if(e.skinIndices.length>0){var d=new se(4*e.skinIndices.length,4);this.setAttribute("skinIndex",d.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){var f=new se(4*e.skinWeights.length,4);this.setAttribute("skinWeight",f.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Pt);var e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(var t=0,n=i.length;t<n;t++){var r=i[t];un.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ri);var e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new M,1/0);if(e){var t=this.boundingSphere.center;if(un.setFromBufferAttribute(e),i)for(var n=0,r=i.length;n<r;n++){var a=i[n];xa.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(un.min,xa.min),un.expandByPoint(zt),zt.addVectors(un.max,xa.max),un.expandByPoint(zt)):(un.expandByPoint(xa.min),un.expandByPoint(xa.max))}un.getCenter(t);for(var o=0,s=0,c=e.count;s<c;s++)zt.fromBufferAttribute(e,s),o=Math.max(o,t.distanceToSquared(zt));if(i)for(var l=0,u=i.length;l<u;l++)for(var h=i[l],p=this.morphTargetsRelative,d=0,f=h.count;d<f;d++)zt.fromBufferAttribute(h,d),p&&(Nr.fromBufferAttribute(e,d),zt.add(Nr)),o=Math.max(o,t.distanceToSquared(zt));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){var e=this.index,i=this.getAttribute("position");if(i!==void 0){var t=this.getAttribute("normal");if(t===void 0)t=new Me(new Float32Array(3*i.count),3),this.setAttribute("normal",t);else for(var n=0,r=t.count;n<r;n++)t.setXYZ(n,0,0,0);var a=new M,o=new M,s=new M,c=new M,l=new M,u=new M,h=new M,p=new M;if(e)for(var d=0,f=e.count;d<f;d+=3){var g=e.getX(d+0),m=e.getX(d+1),y=e.getX(d+2);a.fromBufferAttribute(i,g),o.fromBufferAttribute(i,m),s.fromBufferAttribute(i,y),h.subVectors(s,o),p.subVectors(a,o),h.cross(p),c.fromBufferAttribute(t,g),l.fromBufferAttribute(t,m),u.fromBufferAttribute(t,y),c.add(h),l.add(h),u.add(h),t.setXYZ(g,c.x,c.y,c.z),t.setXYZ(m,l.x,l.y,l.z),t.setXYZ(y,u.x,u.y,u.z)}else for(var _=0,x=i.count;_<x;_+=3)a.fromBufferAttribute(i,_+0),o.fromBufferAttribute(i,_+1),s.fromBufferAttribute(i,_+2),h.subVectors(s,o),p.subVectors(a,o),h.cross(p),t.setXYZ(_+0,h.x,h.y,h.z),t.setXYZ(_+1,h.x,h.y,h.z),t.setXYZ(_+2,h.x,h.y,h.z);this.normalizeNormals(),t.needsUpdate=!0}},merge:function(e,i){if(e&&e.isBufferGeometry){i===void 0&&(i=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var t=this.attributes;for(var n in t)if(e.attributes[n]!==void 0)for(var r=t[n].array,a=e.attributes[n],o=a.array,s=a.itemSize*i,c=Math.min(o.length,r.length-s),l=0,u=s;l<c;l++,u++)r[u]=o[l];return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e)},normalizeNormals:function(){for(var e=this.attributes.normal,i=0,t=e.count;i<t;i++)zt.fromBufferAttribute(e,i),zt.normalize(),e.setXYZ(i,zt.x,zt.y,zt.z)},toNonIndexed:function(){function e(y,_){for(var x=y.array,b=y.itemSize,w=y.normalized,E=new x.constructor(_.length*b),S=0,P=0,C=0,T=_.length;C<T;C++){S=_[C]*b;for(var D=0;D<b;D++)E[P++]=x[S++]}return new Me(E,b,w)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var i=new _e,t=this.index.array,n=this.attributes;for(var r in n){var a=e(n[r],t);i.setAttribute(r,a)}var o=this.morphAttributes;for(var s in o){for(var c=[],l=o[s],u=0,h=l.length;u<h;u++){var p=e(l[u],t);c.push(p)}i.morphAttributes[s]=c}i.morphTargetsRelative=this.morphTargetsRelative;for(var d=this.groups,f=0,g=d.length;f<g;f++){var m=d[f];i.addGroup(m.start,m.count,m.materialIndex)}return i},toJSON:function(){var e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){var i=this.parameters;for(var t in i)i[t]!==void 0&&(e[t]=i[t]);return e}e.data={attributes:{}};var n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});var r=this.attributes;for(var a in r){var o=r[a],s=o.toJSON(e.data);o.name!==""&&(s.name=o.name),e.data.attributes[a]=s}var c={},l=!1;for(var u in this.morphAttributes){for(var h=this.morphAttributes[u],p=[],d=0,f=h.length;d<f;d++){var g=h[d],m=g.toJSON(e.data);g.name!==""&&(m.name=g.name),p.push(m)}p.length>0&&(c[u]=p,l=!0)}l&&(e.data.morphAttributes=c,e.data.morphTargetsRelative=this.morphTargetsRelative);var y=this.groups;y.length>0&&(e.data.groups=JSON.parse(JSON.stringify(y)));var _=this.boundingSphere;return _!==null&&(e.data.boundingSphere={center:_.center.toArray(),radius:_.radius}),e},clone:function(){return new _e().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;var i={};this.name=e.name;var t=e.index;t!==null&&this.setIndex(t.clone(i));var n=e.attributes;for(var r in n){var a=n[r];this.setAttribute(r,a.clone(i))}var o=e.morphAttributes;for(var s in o){for(var c=[],l=o[s],u=0,h=l.length;u<h;u++)c.push(l[u].clone(i));this.morphAttributes[s]=c}this.morphTargetsRelative=e.morphTargetsRelative;for(var p=e.groups,d=0,f=p.length;d<f;d++){var g=p[d];this.addGroup(g.start,g.count,g.materialIndex)}var m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());var y=e.boundingSphere;return y!==null&&(this.boundingSphere=y.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var il=new Ne,er=new Lr,Cs=new ri,Si=new M,Ti=new M,Ei=new M,Ps=new M,Os=new M,Ns=new M,co=new M,lo=new M,uo=new M,Dr=new I,Ir=new I,Br=new I,ba=new M,ho=new M;function st(e,i){ye.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new _e,this.material=i!==void 0?i:new vn,this.updateMorphTargets()}function rl(e,i,t,n,r,a,o,s){if((i.side===1?n.intersectTriangle(o,a,r,!0,s):n.intersectTriangle(r,a,o,i.side!==2,s))===null)return null;ho.copy(s),ho.applyMatrix4(e.matrixWorld);var c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:e}}function po(e,i,t,n,r,a,o,s,c,l,u,h){Si.fromBufferAttribute(r,l),Ti.fromBufferAttribute(r,u),Ei.fromBufferAttribute(r,h);var p=e.morphTargetInfluences;if(i.morphTargets&&a&&p){co.set(0,0,0),lo.set(0,0,0),uo.set(0,0,0);for(var d=0,f=a.length;d<f;d++){var g=p[d],m=a[d];g!==0&&(Ps.fromBufferAttribute(m,l),Os.fromBufferAttribute(m,u),Ns.fromBufferAttribute(m,h),o?(co.addScaledVector(Ps,g),lo.addScaledVector(Os,g),uo.addScaledVector(Ns,g)):(co.addScaledVector(Ps.sub(Si),g),lo.addScaledVector(Os.sub(Ti),g),uo.addScaledVector(Ns.sub(Ei),g)))}Si.add(co),Ti.add(lo),Ei.add(uo)}e.isSkinnedMesh&&(e.boneTransform(l,Si),e.boneTransform(u,Ti),e.boneTransform(h,Ei));var y=rl(e,i,t,n,Si,Ti,Ei,ba);if(y){s&&(Dr.fromBufferAttribute(s,l),Ir.fromBufferAttribute(s,u),Br.fromBufferAttribute(s,h),y.uv=Tn.getUV(ba,Si,Ti,Ei,Dr,Ir,Br,new I)),c&&(Dr.fromBufferAttribute(c,l),Ir.fromBufferAttribute(c,u),Br.fromBufferAttribute(c,h),y.uv2=Tn.getUV(ba,Si,Ti,Ei,Dr,Ir,Br,new I));var _=new da(l,u,h);Tn.getNormal(Si,Ti,Ei,_.normal),y.face=_}return y}st.prototype=Object.assign(Object.create(ye.prototype),{constructor:st,isMesh:!0,copy:function(e){return ye.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){var e=this.geometry;if(e.isBufferGeometry){var i=e.morphAttributes,t=Object.keys(i);if(t.length>0){var n=i[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var r=0,a=n.length;r<a;r++){var o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{var s=e.morphTargets;s!==void 0&&s.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,i){var t,n=this.geometry,r=this.material,a=this.matrixWorld;if(r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(a),e.ray.intersectsSphere(Cs)!==!1&&(il.getInverse(a),er.copy(e.ray).applyMatrix4(il),n.boundingBox===null||er.intersectsBox(n.boundingBox)!==!1))){if(n.isBufferGeometry){var o=n.index,s=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,p=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(r))for(var f=0,g=p.length;f<g;f++)for(var m=p[f],y=r[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(m.start+m.count,d.start+d.count);_<x;_+=3){var b=o.getX(_),w=o.getX(_+1),E=o.getX(_+2);(t=po(this,y,e,er,s,c,l,u,h,b,w,E))&&(t.faceIndex=Math.floor(_/3),t.face.materialIndex=m.materialIndex,i.push(t))}else for(var S=Math.max(0,d.start),P=Math.min(o.count,d.start+d.count);S<P;S+=3){var C=o.getX(S),T=o.getX(S+1),D=o.getX(S+2);(t=po(this,r,e,er,s,c,l,u,h,C,T,D))&&(t.faceIndex=Math.floor(S/3),i.push(t))}else if(s!==void 0)if(Array.isArray(r))for(var N=0,F=p.length;N<F;N++)for(var k=p[N],B=r[k.materialIndex],W=Math.max(k.start,d.start),Q=Math.min(k.start+k.count,d.start+d.count);W<Q;W+=3)(t=po(this,B,e,er,s,c,l,u,h,W,W+1,W+2))&&(t.faceIndex=Math.floor(W/3),t.face.materialIndex=k.materialIndex,i.push(t));else for(var G=Math.max(0,d.start),H=Math.min(s.count,d.start+d.count);G<H;G+=3)(t=po(this,r,e,er,s,c,l,u,h,G,G+1,G+2))&&(t.faceIndex=Math.floor(G/3),i.push(t))}else if(n.isGeometry){var V,ee=Array.isArray(r),he=n.vertices,we=n.faces,R=n.faceVertexUvs[0];R.length>0&&(V=R);for(var L=0,j=we.length;L<j;L++){var z=we[L],J=ee?r[z.materialIndex]:r;if(J!==void 0){var O=he[z.a],K=he[z.b],ie=he[z.c];if(t=rl(this,J,e,er,O,K,ie,ba)){if(V&&V[L]){var ce=V[L];Dr.copy(ce[0]),Ir.copy(ce[1]),Br.copy(ce[2]),t.uv=Tn.getUV(ba,O,K,ie,Dr,Ir,Br,new I)}t.face=z,t.faceIndex=L,i.push(t)}}}}}}});var _a=function(e){function i(t,n,r,a,o,s){var c;t===void 0&&(t=1),n===void 0&&(n=1),r===void 0&&(r=1),a===void 0&&(a=1),o===void 0&&(o=1),s===void 0&&(s=1),(c=e.call(this)||this).type="BoxBufferGeometry",c.parameters={width:t,height:n,depth:r,widthSegments:a,heightSegments:o,depthSegments:s};var l=q(c);a=Math.floor(a),o=Math.floor(o),s=Math.floor(s);var u=[],h=[],p=[],d=[],f=0,g=0;function m(y,_,x,b,w,E,S,P,C,T,D){for(var N=E/C,F=S/T,k=E/2,B=S/2,W=P/2,Q=C+1,G=T+1,H=0,V=0,ee=new M,he=0;he<G;he++)for(var we=he*F-B,R=0;R<Q;R++){var L=R*N-k;ee[y]=L*b,ee[_]=we*w,ee[x]=W,h.push(ee.x,ee.y,ee.z),ee[y]=0,ee[_]=0,ee[x]=P>0?1:-1,p.push(ee.x,ee.y,ee.z),d.push(R/C),d.push(1-he/T),H+=1}for(var j=0;j<T;j++)for(var z=0;z<C;z++){var J=f+z+Q*j,O=f+z+Q*(j+1),K=f+(z+1)+Q*(j+1),ie=f+(z+1)+Q*j;u.push(J,O,ie),u.push(O,K,ie),V+=6}l.addGroup(g,V,D),g+=V,f+=H}return m("z","y","x",-1,-1,r,n,t,s,o,0),m("z","y","x",1,-1,r,n,-t,s,o,1),m("x","z","y",1,1,t,r,n,a,s,2),m("x","z","y",1,-1,t,r,-n,a,s,3),m("x","y","z",1,-1,t,n,r,a,o,4),m("x","y","z",-1,-1,t,n,-r,a,o,5),c.setIndex(u),c.setAttribute("position",new se(h,3)),c.setAttribute("normal",new se(p,3)),c.setAttribute("uv",new se(d,2)),c}return ge(i,e),i}(_e);function zr(e){var i={};for(var t in e)for(var n in i[t]={},e[t]){var r=e[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?i[t][n]=r.clone():Array.isArray(r)?i[t][n]=r.slice():i[t][n]=r}return i}function Vt(e){for(var i={},t=0;t<e.length;t++){var n=zr(e[t]);for(var r in n)i[r]=n[r]}return i}var al={clone:zr,merge:Vt};function Jt(e){Ee.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}function Wn(){ye.call(this),this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne}function Et(e,i,t,n){Wn.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=t!==void 0?t:.1,this.far=n!==void 0?n:2e3,this.focus=10,this.aspect=i!==void 0?i:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Jt.prototype=Object.create(Ee.prototype),Jt.prototype.constructor=Jt,Jt.prototype.isShaderMaterial=!0,Jt.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this},Jt.prototype.toJSON=function(e){var i=Ee.prototype.toJSON.call(this,e);for(var t in i.glslVersion=this.glslVersion,i.uniforms={},this.uniforms){var n=this.uniforms[t].value;n&&n.isTexture?i.uniforms[t]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?i.uniforms[t]={type:"c",value:n.getHex()}:n&&n.isVector2?i.uniforms[t]={type:"v2",value:n.toArray()}:n&&n.isVector3?i.uniforms[t]={type:"v3",value:n.toArray()}:n&&n.isVector4?i.uniforms[t]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?i.uniforms[t]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?i.uniforms[t]={type:"m4",value:n.toArray()}:i.uniforms[t]={value:n}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader;var r={};for(var a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(i.extensions=r),i},Wn.prototype=Object.assign(Object.create(ye.prototype),{constructor:Wn,isCamera:!0,copy:function(e,i){return ye.prototype.copy.call(this,e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new M),this.updateMatrixWorld(!0);var i=this.matrixWorld.elements;return e.set(-i[8],-i[9],-i[10]).normalize()},updateMatrixWorld:function(e){ye.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(e,i){ye.prototype.updateWorldMatrix.call(this,e,i),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}}),Et.prototype=Object.assign(Object.create(Wn.prototype),{constructor:Et,isPerspectiveCamera:!0,copy:function(e,i){return Wn.prototype.copy.call(this,e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){var i=.5*this.getFilmHeight()/e;this.fov=2*be.RAD2DEG*Math.atan(i),this.updateProjectionMatrix()},getFocalLength:function(){var e=Math.tan(.5*be.DEG2RAD*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return 2*be.RAD2DEG*Math.atan(Math.tan(.5*be.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,i,t,n,r,a){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=t,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=this.near,i=e*Math.tan(.5*be.DEG2RAD*this.fov)/this.zoom,t=2*i,n=this.aspect*t,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){var o=a.fullWidth,s=a.fullHeight;r+=a.offsetX*n/o,i-=a.offsetY*t/s,n*=a.width/o,t*=a.height/s}var c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,i,i-t,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){var i=ye.prototype.toJSON.call(this,e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}});var Gr=90;function Ur(e,i,t){if(ye.call(this),this.type="CubeCamera",t.isWebGLCubeRenderTarget===!0){this.renderTarget=t;var n=new Et(Gr,1,e,i);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new M(1,0,0)),this.add(n);var r=new Et(Gr,1,e,i);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new M(-1,0,0)),this.add(r);var a=new Et(Gr,1,e,i);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new M(0,1,0)),this.add(a);var o=new Et(Gr,1,e,i);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new M(0,-1,0)),this.add(o);var s=new Et(Gr,1,e,i);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new M(0,0,1)),this.add(s);var c=new Et(Gr,1,e,i);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new M(0,0,-1)),this.add(c),this.update=function(l,u){this.parent===null&&this.updateMatrixWorld();var h=l.xr.enabled,p=l.getRenderTarget();l.xr.enabled=!1;var d=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,l.setRenderTarget(t,0),l.render(u,n),l.setRenderTarget(t,1),l.render(u,r),l.setRenderTarget(t,2),l.render(u,a),l.setRenderTarget(t,3),l.render(u,o),l.setRenderTarget(t,4),l.render(u,s),t.texture.generateMipmaps=d,l.setRenderTarget(t,5),l.render(u,c),l.setRenderTarget(p),l.xr.enabled=h},this.clear=function(l,u,h,p){for(var d=l.getRenderTarget(),f=0;f<6;f++)l.setRenderTarget(t,f),l.clear(u,h,p);l.setRenderTarget(d)}}else console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.")}function jn(e,i,t,n,r,a,o,s,c,l){e=e!==void 0?e:[],i=i!==void 0?i:Yt,o=o!==void 0?o:bt,Te.call(this,e,i,t,n,r,a,o,s,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}function Ai(e,i,t){Number.isInteger(i)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),i=t),He.call(this,e,e,i),i=i||{},this.texture=new jn(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture._needsFlipEnvMap=!1}function tr(e,i,t,n,r,a,o,s,c,l,u,h){Te.call(this,null,a,o,s,c,l,n,r,u,h),this.image={data:e||null,width:i||1,height:t||1},this.magFilter=c!==void 0?c:dt,this.minFilter=l!==void 0?l:dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Ur.prototype=Object.create(ye.prototype),Ur.prototype.constructor=Ur,jn.prototype=Object.create(Te.prototype),jn.prototype.constructor=jn,jn.prototype.isCubeTexture=!0,Object.defineProperty(jn.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}}),Ai.prototype=Object.create(He.prototype),Ai.prototype.constructor=Ai,Ai.prototype.isWebGLCubeRenderTarget=!0,Ai.prototype.fromEquirectangularTexture=function(e,i){this.texture.type=i.type,this.texture.format=St,this.texture.encoding=i.encoding,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;var t={tEquirect:{value:null}},n=`

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`,r=`

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`,a=new _a(5,5,5),o=new Jt({name:"CubemapFromEquirect",uniforms:zr(t),vertexShader:n,fragmentShader:r,side:1,blending:0});o.uniforms.tEquirect.value=i;var s=new st(a,o),c=i.minFilter;return i.minFilter===ue&&(i.minFilter=X),new Ur(1,10,this).update(e,s),i.minFilter=c,s.geometry.dispose(),s.material.dispose(),this},tr.prototype=Object.create(Te.prototype),tr.prototype.constructor=tr,tr.prototype.isDataTexture=!0;var Fr=new ri,fo=new M,wa=function(){function e(t,n,r,a,o,s){this.planes=[t!==void 0?t:new kn,n!==void 0?n:new kn,r!==void 0?r:new kn,a!==void 0?a:new kn,o!==void 0?o:new kn,s!==void 0?s:new kn]}var i=e.prototype;return i.set=function(t,n,r,a,o,s){var c=this.planes;return c[0].copy(t),c[1].copy(n),c[2].copy(r),c[3].copy(a),c[4].copy(o),c[5].copy(s),this},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){for(var n=this.planes,r=0;r<6;r++)n[r].copy(t.planes[r]);return this},i.setFromProjectionMatrix=function(t){var n=this.planes,r=t.elements,a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],u=r[5],h=r[6],p=r[7],d=r[8],f=r[9],g=r[10],m=r[11],y=r[12],_=r[13],x=r[14],b=r[15];return n[0].setComponents(c-a,p-l,m-d,b-y).normalize(),n[1].setComponents(c+a,p+l,m+d,b+y).normalize(),n[2].setComponents(c+o,p+u,m+f,b+_).normalize(),n[3].setComponents(c-o,p-u,m-f,b-_).normalize(),n[4].setComponents(c-s,p-h,m-g,b-x).normalize(),n[5].setComponents(c+s,p+h,m+g,b+x).normalize(),this},i.intersectsObject=function(t){var n=t.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)},i.intersectsSprite=function(t){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)},i.intersectsSphere=function(t){for(var n=this.planes,r=t.center,a=-t.radius,o=0;o<6;o++)if(n[o].distanceToPoint(r)<a)return!1;return!0},i.intersectsBox=function(t){for(var n=this.planes,r=0;r<6;r++){var a=n[r];if(fo.x=a.normal.x>0?t.max.x:t.min.x,fo.y=a.normal.y>0?t.max.y:t.min.y,fo.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(fo)<0)return!1}return!0},i.containsPoint=function(t){for(var n=this.planes,r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0},e}();function ol(){var e=null,i=!1,t=null,n=null;function r(a,o){t(a,o),n=e.requestAnimationFrame(r)}return{start:function(){i!==!0&&t!==null&&(n=e.requestAnimationFrame(r),i=!0)},stop:function(){e.cancelAnimationFrame(n),i=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function xh(e,i){var t=i.isWebGL2,n=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),n.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);var a=n.get(r);a&&(e.deleteBuffer(a.buffer),n.delete(r))},update:function(r,a){if(r.isGLBufferAttribute){var o=n.get(r);(!o||o.version<r.version)&&n.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version})}else{r.isInterleavedBufferAttribute&&(r=r.data);var s=n.get(r);s===void 0?n.set(r,function(c,l){var u=c.array,h=c.usage,p=e.createBuffer();e.bindBuffer(l,p),e.bufferData(l,u,h),c.onUploadCallback();var d=5126;return u instanceof Float32Array?d=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?d=5123:u instanceof Int16Array?d=5122:u instanceof Uint32Array?d=5125:u instanceof Int32Array?d=5124:u instanceof Int8Array?d=5120:u instanceof Uint8Array&&(d=5121),{buffer:p,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}(r,a)):s.version<r.version&&(function(c,l,u){var h=l.array,p=l.updateRange;e.bindBuffer(u,c),p.count===-1?e.bufferSubData(u,0,h):(t?e.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):e.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}(s.buffer,r,a),s.version=r.version)}}}}var mo=function(e){function i(t,n,r,a){var o;(o=e.call(this)||this).type="PlaneBufferGeometry",o.parameters={width:t,height:n,widthSegments:r,heightSegments:a};for(var s=(t=t||1)/2,c=(n=n||1)/2,l=Math.floor(r)||1,u=Math.floor(a)||1,h=l+1,p=u+1,d=t/l,f=n/u,g=[],m=[],y=[],_=[],x=0;x<p;x++)for(var b=x*f-c,w=0;w<h;w++){var E=w*d-s;m.push(E,-b,0),y.push(0,0,1),_.push(w/l),_.push(1-x/u)}for(var S=0;S<u;S++)for(var P=0;P<l;P++){var C=P+h*S,T=P+h*(S+1),D=P+1+h*(S+1),N=P+1+h*S;g.push(C,T,N),g.push(T,D,N)}return o.setIndex(g),o.setAttribute("position",new se(m,3)),o.setAttribute("normal",new se(y,3)),o.setAttribute("uv",new se(_,2)),o}return ge(i,e),i}(_e),De={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float fogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(		0, 1,		0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,normal_fragment_begin:`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
							f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
							f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,	1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmissionmap_fragment:`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,transmissionmap_pars_fragment:`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,normal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,normal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`},le={common:{diffuse:{value:new pe(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ae},uv2Transform:{value:new ae},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ae}},sprite:{diffuse:{value:new pe(15658734)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ae}}},An={basic:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new pe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Vt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Vt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new pe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Vt([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Vt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Vt([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.normal_vert,fragmentShader:De.normal_frag},sprite:{uniforms:Vt([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:Vt([le.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Vt([le.common,le.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Vt([le.lights,le.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};function bh(e,i,t,n,r){var a,o,s=new pe(0),c=0,l=null,u=0,h=null;function p(d,f){t.buffers.color.setClear(d.r,d.g,d.b,f,r)}return{getClearColor:function(){return s},setClearColor:function(d,f){s.set(d),p(s,c=f!==void 0?f:1)},getClearAlpha:function(){return c},setClearAlpha:function(d){p(s,c=d)},render:function(d,f,g,m){var y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=i.get(y));var _=e.xr,x=_.getSession&&_.getSession();x&&x.environmentBlendMode==="additive"&&(y=null),y===null?p(s,c):y&&y.isColor&&(p(y,1),m=!0),(e.autoClear||m)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),y&&(y.isCubeTexture||y.isWebGLCubeRenderTarget||y.mapping===an)?(o===void 0&&((o=new st(new _a(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:zr(An.cube.uniforms),vertexShader:An.cube.vertexShader,fragmentShader:An.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(b,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),y.isWebGLCubeRenderTarget&&(y=y.texture),o.material.uniforms.envMap.value=y,o.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y._needsFlipEnvMap?-1:1,l===y&&u===y.version&&h===e.toneMapping||(o.material.needsUpdate=!0,l=y,u=y.version,h=e.toneMapping),d.unshift(o,o.geometry,o.material,0,0,null)):y&&y.isTexture&&(a===void 0&&((a=new st(new mo(2,2),new Jt({name:"BackgroundMaterial",uniforms:zr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),a.material.uniforms.uvTransform.value.copy(y.matrix),l===y&&u===y.version&&h===e.toneMapping||(a.material.needsUpdate=!0,l=y,u=y.version,h=e.toneMapping),d.unshift(a,a.geometry,a.material,0,0,null))}}}function _h(e,i,t,n){var r=e.getParameter(34921),a=n.isWebGL2?null:i.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,s={},c=p(null),l=c;function u(b){return n.isWebGL2?e.bindVertexArray(b):a.bindVertexArrayOES(b)}function h(b){return n.isWebGL2?e.deleteVertexArray(b):a.deleteVertexArrayOES(b)}function p(b){for(var w=[],E=[],S=[],P=0;P<r;P++)w[P]=0,E[P]=0,S[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:E,attributeDivisors:S,object:b,attributes:{},index:null}}function d(){for(var b=l.newAttributes,w=0,E=b.length;w<E;w++)b[w]=0}function f(b){g(b,0)}function g(b,w){var E=l.newAttributes,S=l.enabledAttributes,P=l.attributeDivisors;E[b]=1,S[b]===0&&(e.enableVertexAttribArray(b),S[b]=1),P[b]!==w&&((n.isWebGL2?e:i.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,w),P[b]=w)}function m(){for(var b=l.newAttributes,w=l.enabledAttributes,E=0,S=w.length;E<S;E++)w[E]!==b[E]&&(e.disableVertexAttribArray(E),w[E]=0)}function y(b,w,E,S,P,C){n.isWebGL2!==!0||E!==5124&&E!==5125?e.vertexAttribPointer(b,w,E,S,P,C):e.vertexAttribIPointer(b,w,E,P,C)}function _(){x(),l!==c&&u((l=c).object)}function x(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(b,w,E,S,P){var C=!1;if(o){var T=function(N,F,k){var B=k.wireframe===!0,W=s[N.id];W===void 0&&(W={},s[N.id]=W);var Q=W[F.id];Q===void 0&&(Q={},W[F.id]=Q);var G=Q[B];return G===void 0&&(G=p(n.isWebGL2?e.createVertexArray():a.createVertexArrayOES()),Q[B]=G),G}(S,E,w);l!==T&&u((l=T).object),(C=function(N,F){var k=l.attributes,B=N.attributes;if(Object.keys(k).length!==Object.keys(B).length)return!0;for(var W in B){var Q=k[W],G=B[W];if(Q===void 0||Q.attribute!==G||Q.data!==G.data)return!0}return l.index!==F}(S,P))&&function(N,F){var k={},B=N.attributes;for(var W in B){var Q=B[W],G={};G.attribute=Q,Q.data&&(G.data=Q.data),k[W]=G}l.attributes=k,l.index=F}(S,P)}else{var D=w.wireframe===!0;l.geometry===S.id&&l.program===E.id&&l.wireframe===D||(l.geometry=S.id,l.program=E.id,l.wireframe=D,C=!0)}b.isInstancedMesh===!0&&(C=!0),P!==null&&t.update(P,34963),C&&(function(N,F,k,B){if(!(n.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&i.get("ANGLE_instanced_arrays")===null)){d();var W=B.attributes,Q=k.getAttributes(),G=F.defaultAttributeValues;for(var H in Q){var V=Q[H];if(V>=0){var ee=W[H];if(ee!==void 0){var he=ee.normalized,we=ee.itemSize,R=t.get(ee);if(R===void 0)continue;var L=R.buffer,j=R.type,z=R.bytesPerElement;if(ee.isInterleavedBufferAttribute){var J=ee.data,O=J.stride,K=ee.offset;J&&J.isInstancedInterleavedBuffer?(g(V,J.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)):f(V),e.bindBuffer(34962,L),y(V,we,j,he,O*z,K*z)}else ee.isInstancedBufferAttribute?(g(V,ee.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)):f(V),e.bindBuffer(34962,L),y(V,we,j,he,0,0)}else if(H==="instanceMatrix"){var ie=t.get(N.instanceMatrix);if(ie===void 0)continue;var ce=ie.buffer,te=ie.type;g(V+0,1),g(V+1,1),g(V+2,1),g(V+3,1),e.bindBuffer(34962,ce),e.vertexAttribPointer(V+0,4,te,!1,64,0),e.vertexAttribPointer(V+1,4,te,!1,64,16),e.vertexAttribPointer(V+2,4,te,!1,64,32),e.vertexAttribPointer(V+3,4,te,!1,64,48)}else if(H==="instanceColor"){var me=t.get(N.instanceColor);if(me===void 0)continue;var Se=me.buffer,We=me.type;g(V,1),e.bindBuffer(34962,Se),e.vertexAttribPointer(V,3,We,!1,12,0)}else if(G!==void 0){var Qe=G[H];if(Qe!==void 0)switch(Qe.length){case 2:e.vertexAttrib2fv(V,Qe);break;case 3:e.vertexAttrib3fv(V,Qe);break;case 4:e.vertexAttrib4fv(V,Qe);break;default:e.vertexAttrib1fv(V,Qe)}}}}m()}}(b,w,E,S),P!==null&&e.bindBuffer(34963,t.get(P).buffer))},reset:_,resetDefaultState:x,dispose:function(){for(var b in _(),s){var w=s[b];for(var E in w){var S=w[E];for(var P in S)h(S[P].object),delete S[P];delete w[E]}delete s[b]}},releaseStatesOfGeometry:function(b){if(s[b.id]!==void 0){var w=s[b.id];for(var E in w){var S=w[E];for(var P in S)h(S[P].object),delete S[P];delete w[E]}delete s[b.id]}},releaseStatesOfProgram:function(b){for(var w in s){var E=s[w];if(E[b.id]!==void 0){var S=E[b.id];for(var P in S)h(S[P].object),delete S[P];delete E[b.id]}}},initAttributes:d,enableAttribute:f,disableUnusedAttributes:m}}function wh(e,i,t,n){var r,a=n.isWebGL2;this.setMode=function(o){r=o},this.render=function(o,s){e.drawArrays(r,o,s),t.update(s,r,1)},this.renderInstances=function(o,s,c){if(c!==0){var l,u;if(a)l=e,u="drawArraysInstanced";else if(u="drawArraysInstancedANGLE",(l=i.get("ANGLE_instanced_arrays"))===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[u](r,o,s,c),t.update(s,r,c)}}}function Mh(e,i,t){var n;function r(x){if(x==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}var a=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&e instanceof WebGL2ComputeRenderingContext,o=t.precision!==void 0?t.precision:"highp",s=r(o);s!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",s,"instead."),o=s);var c=t.logarithmicDepthBuffer===!0,l=e.getParameter(34930),u=e.getParameter(35660),h=e.getParameter(3379),p=e.getParameter(34076),d=e.getParameter(34921),f=e.getParameter(36347),g=e.getParameter(36348),m=e.getParameter(36349),y=u>0,_=a||!!i.get("OES_texture_float");return{isWebGL2:a,getMaxAnisotropy:function(){if(n!==void 0)return n;var x=i.get("EXT_texture_filter_anisotropic");return n=x!==null?e.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:y&&_,maxSamples:a?e.getParameter(36183):0}}function Sh(e){var i=this,t=null,n=0,r=!1,a=!1,o=new kn,s=new ae,c={value:null,needsUpdate:!1};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),i.numPlanes=n,i.numIntersection=0}function u(h,p,d,f){var g=h!==null?h.length:0,m=null;if(g!==0){if(m=c.value,f!==!0||m===null){var y=d+4*g,_=p.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<y)&&(m=new Float32Array(y));for(var x=0,b=d;x!==g;++x,b+=4)o.copy(h[x]).applyMatrix4(_,s),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return i.numPlanes=g,i.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p,d){var f=h.length!==0||p||n!==0||r;return r=p,t=u(h,d,0),n=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,l()},this.setState=function(h,p,d){var f=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,y=e.get(h);if(!r||f===null||f.length===0||a&&!m)a?u(null):l();else{var _=a?0:n,x=4*_,b=y.clippingState||null;c.value=b,b=u(f,p,x,d);for(var w=0;w!==x;++w)b[w]=t[w];y.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}}}function Th(e){var i=new WeakMap;function t(n,r){return r===ti?n.mapping=Yt:r===wn&&(n.mapping=zn),n}return{get:function(n){if(n&&n.isTexture){var r=n.mapping;if(r===ti||r===wn){if(i.has(n))return t(i.get(n).texture,n.mapping);var a=n.image;if(a&&a.height>0){var o=e.getRenderList(),s=e.getRenderTarget(),c=e.getRenderState(),l=new Ai(a.height/2);return l.fromEquirectangularTexture(e,n),i.set(n,l),e.setRenderTarget(s),e.setRenderList(o),e.setRenderState(c),t(l.texture,n.mapping)}return null}}return n},dispose:function(){i=new WeakMap}}}function Eh(e){var i={};return{has:function(t){if(i[t]!==void 0)return i[t]!==null;var n;switch(t){case"WEBGL_depth_texture":n=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=e.getExtension(t)}return i[t]=n,n!==null},get:function(t){return this.has(t)||console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),i[t]}}}function Ah(e,i,t,n){var r=new WeakMap,a=new WeakMap;function o(c){var l=c.target,u=r.get(l);for(var h in u.index!==null&&i.remove(u.index),u.attributes)i.remove(u.attributes[h]);l.removeEventListener("dispose",o),r.delete(l);var p=a.get(u);p&&(i.remove(p),a.delete(u)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function s(c){var l=[],u=c.index,h=c.attributes.position,p=0;if(u!==null){var d=u.array;p=u.version;for(var f=0,g=d.length;f<g;f+=3){var m=d[f+0],y=d[f+1],_=d[f+2];l.push(m,y,y,_,_,m)}}else{var x=h.array;p=h.version;for(var b=0,w=x.length/3-1;b<w;b+=3){var E=b+0,S=b+1,P=b+2;l.push(E,S,S,P,P,E)}}var C=new(nl(l)>65535?$i:Ki)(l,1);C.version=p;var T=a.get(c);T&&i.remove(T),a.set(c,C)}return{get:function(c,l){var u=r.get(l);return u||(l.addEventListener("dispose",o),l.isBufferGeometry?u=l:l.isGeometry&&(l._bufferGeometry===void 0&&(l._bufferGeometry=new _e().setFromObject(c)),u=l._bufferGeometry),r.set(l,u),t.memory.geometries++,u)},update:function(c){var l=c.attributes;for(var u in l)i.update(l[u],34962);var h=c.morphAttributes;for(var p in h)for(var d=h[p],f=0,g=d.length;f<g;f++)i.update(d[f],34962)},getWireframeAttribute:function(c){var l=a.get(c);if(l){var u=c.index;u!==null&&l.version<u.version&&s(c)}else s(c);return a.get(c)}}}function Lh(e,i,t,n){var r,a,o,s=n.isWebGL2;this.setMode=function(c){r=c},this.setIndex=function(c){a=c.type,o=c.bytesPerElement},this.render=function(c,l){e.drawElements(r,l,a,c*o),t.update(l,r,1)},this.renderInstances=function(c,l,u){if(u!==0){var h,p;if(s)h=e,p="drawElementsInstanced";else if(p="drawElementsInstancedANGLE",(h=i.get("ANGLE_instanced_arrays"))===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[p](r,l,a,c*o,u),t.update(l,r,u)}}}function Rh(e){var i={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:i,programs:null,autoReset:!0,reset:function(){i.frame++,i.calls=0,i.triangles=0,i.points=0,i.lines=0},update:function(t,n,r){switch(i.calls++,n){case 4:i.triangles+=r*(t/3);break;case 1:i.lines+=r*(t/2);break;case 3:i.lines+=r*(t-1);break;case 2:i.lines+=r*t;break;case 0:i.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Ch(e,i){return e[0]-i[0]}function Ph(e,i){return Math.abs(i[1])-Math.abs(e[1])}function Oh(e){for(var i={},t=new Float32Array(8),n=[],r=0;r<8;r++)n[r]=[r,0];return{update:function(a,o,s,c){var l=a.morphTargetInfluences,u=l===void 0?0:l.length,h=i[o.id];if(h===void 0){h=[];for(var p=0;p<u;p++)h[p]=[p,0];i[o.id]=h}for(var d=0;d<u;d++){var f=h[d];f[0]=d,f[1]=l[d]}h.sort(Ph);for(var g=0;g<8;g++)g<u&&h[g][1]?(n[g][0]=h[g][0],n[g][1]=h[g][1]):(n[g][0]=Number.MAX_SAFE_INTEGER,n[g][1]=0);n.sort(Ch);for(var m=s.morphTargets&&o.morphAttributes.position,y=s.morphNormals&&o.morphAttributes.normal,_=0,x=0;x<8;x++){var b=n[x],w=b[0],E=b[1];w!==Number.MAX_SAFE_INTEGER&&E?(m&&o.getAttribute("morphTarget"+x)!==m[w]&&o.setAttribute("morphTarget"+x,m[w]),y&&o.getAttribute("morphNormal"+x)!==y[w]&&o.setAttribute("morphNormal"+x,y[w]),t[x]=E,_+=E):(m&&o.getAttribute("morphTarget"+x)!==void 0&&o.deleteAttribute("morphTarget"+x),y&&o.getAttribute("morphNormal"+x)!==void 0&&o.deleteAttribute("morphNormal"+x),t[x]=0)}var S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(e,"morphTargetBaseInfluence",S),c.getUniforms().setValue(e,"morphTargetInfluences",t)}}}function Nh(e,i,t,n){var r=new WeakMap;return{update:function(a){var o=n.render.frame,s=a.geometry,c=i.get(a,s);return r.get(c)!==o&&(s.isGeometry&&c.updateFromObject(a),i.update(c),r.set(c,o)),a.isInstancedMesh&&(t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),c},dispose:function(){r=new WeakMap}}}function Hr(e,i,t,n){Te.call(this,null),this.image={data:e||null,width:i||1,height:t||1,depth:n||1},this.magFilter=dt,this.minFilter=dt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}function kr(e,i,t,n){Te.call(this,null),this.image={data:e||null,width:i||1,height:t||1,depth:n||1},this.magFilter=dt,this.minFilter=dt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}An.physical={uniforms:Vt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new I(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new pe(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},Hr.prototype=Object.create(Te.prototype),Hr.prototype.constructor=Hr,Hr.prototype.isDataTexture2DArray=!0,kr.prototype=Object.create(Te.prototype),kr.prototype.constructor=kr,kr.prototype.isDataTexture3D=!0;var sl=new Te,Dh=new Hr,Ih=new kr,cl=new jn,ll=[],ul=[],hl=new Float32Array(16),dl=new Float32Array(9),pl=new Float32Array(4);function Vr(e,i,t){var n=e[0];if(n<=0||n>0)return e;var r=i*t,a=ll[r];if(a===void 0&&(a=new Float32Array(r),ll[r]=a),i!==0){n.toArray(a,0);for(var o=1,s=0;o!==i;++o)s+=t,e[o].toArray(a,s)}return a}function gn(e,i){if(e.length!==i.length)return!1;for(var t=0,n=e.length;t<n;t++)if(e[t]!==i[t])return!1;return!0}function hn(e,i){for(var t=0,n=i.length;t<n;t++)e[t]=i[t]}function fl(e,i){var t=ul[i];t===void 0&&(t=new Int32Array(i),ul[i]=t);for(var n=0;n!==i;++n)t[n]=e.allocateTextureUnit();return t}function Bh(e,i){var t=this.cache;t[0]!==i&&(e.uniform1f(this.addr,i),t[0]=i)}function zh(e,i){var t=this.cache;if(i.x!==void 0)t[0]===i.x&&t[1]===i.y||(e.uniform2f(this.addr,i.x,i.y),t[0]=i.x,t[1]=i.y);else{if(gn(t,i))return;e.uniform2fv(this.addr,i),hn(t,i)}}function Gh(e,i){var t=this.cache;if(i.x!==void 0)t[0]===i.x&&t[1]===i.y&&t[2]===i.z||(e.uniform3f(this.addr,i.x,i.y,i.z),t[0]=i.x,t[1]=i.y,t[2]=i.z);else if(i.r!==void 0)t[0]===i.r&&t[1]===i.g&&t[2]===i.b||(e.uniform3f(this.addr,i.r,i.g,i.b),t[0]=i.r,t[1]=i.g,t[2]=i.b);else{if(gn(t,i))return;e.uniform3fv(this.addr,i),hn(t,i)}}function Uh(e,i){var t=this.cache;if(i.x!==void 0)t[0]===i.x&&t[1]===i.y&&t[2]===i.z&&t[3]===i.w||(e.uniform4f(this.addr,i.x,i.y,i.z,i.w),t[0]=i.x,t[1]=i.y,t[2]=i.z,t[3]=i.w);else{if(gn(t,i))return;e.uniform4fv(this.addr,i),hn(t,i)}}function Fh(e,i){var t=this.cache,n=i.elements;if(n===void 0){if(gn(t,i))return;e.uniformMatrix2fv(this.addr,!1,i),hn(t,i)}else{if(gn(t,n))return;pl.set(n),e.uniformMatrix2fv(this.addr,!1,pl),hn(t,n)}}function Hh(e,i){var t=this.cache,n=i.elements;if(n===void 0){if(gn(t,i))return;e.uniformMatrix3fv(this.addr,!1,i),hn(t,i)}else{if(gn(t,n))return;dl.set(n),e.uniformMatrix3fv(this.addr,!1,dl),hn(t,n)}}function kh(e,i){var t=this.cache,n=i.elements;if(n===void 0){if(gn(t,i))return;e.uniformMatrix4fv(this.addr,!1,i),hn(t,i)}else{if(gn(t,n))return;hl.set(n),e.uniformMatrix4fv(this.addr,!1,hl),hn(t,n)}}function Vh(e,i,t){var n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(i||sl,r)}function Wh(e,i,t){var n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(i||Dh,r)}function jh(e,i,t){var n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(i||Ih,r)}function qh(e,i,t){var n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(i||cl,r)}function Xh(e,i){var t=this.cache;t[0]!==i&&(e.uniform1i(this.addr,i),t[0]=i)}function Yh(e,i){var t=this.cache;gn(t,i)||(e.uniform2iv(this.addr,i),hn(t,i))}function Zh(e,i){var t=this.cache;gn(t,i)||(e.uniform3iv(this.addr,i),hn(t,i))}function Jh(e,i){var t=this.cache;gn(t,i)||(e.uniform4iv(this.addr,i),hn(t,i))}function Qh(e,i){var t=this.cache;t[0]!==i&&(e.uniform1ui(this.addr,i),t[0]=i)}function Kh(e,i){e.uniform1fv(this.addr,i)}function $h(e,i){e.uniform1iv(this.addr,i)}function ed(e,i){e.uniform2iv(this.addr,i)}function td(e,i){e.uniform3iv(this.addr,i)}function nd(e,i){e.uniform4iv(this.addr,i)}function id(e,i){var t=Vr(i,this.size,2);e.uniform2fv(this.addr,t)}function rd(e,i){var t=Vr(i,this.size,3);e.uniform3fv(this.addr,t)}function ad(e,i){var t=Vr(i,this.size,4);e.uniform4fv(this.addr,t)}function od(e,i){var t=Vr(i,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function sd(e,i){var t=Vr(i,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function cd(e,i){var t=Vr(i,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function ld(e,i,t){var n=i.length,r=fl(t,n);e.uniform1iv(this.addr,r);for(var a=0;a!==n;++a)t.safeSetTexture2D(i[a]||sl,r[a])}function ud(e,i,t){var n=i.length,r=fl(t,n);e.uniform1iv(this.addr,r);for(var a=0;a!==n;++a)t.safeSetTextureCube(i[a]||cl,r[a])}function hd(e,i,t){this.id=e,this.addr=t,this.cache=[],this.setValue=function(n){switch(n){case 5126:return Bh;case 35664:return zh;case 35665:return Gh;case 35666:return Uh;case 35674:return Fh;case 35675:return Hh;case 35676:return kh;case 5124:case 35670:return Xh;case 35667:case 35671:return Yh;case 35668:case 35672:return Zh;case 35669:case 35673:return Jh;case 5125:return Qh;case 35678:case 36198:case 36298:case 36306:case 35682:return Vh;case 35679:case 36299:case 36307:return jh;case 35680:case 36300:case 36308:case 36293:return qh;case 36289:case 36303:case 36311:case 36292:return Wh}}(i.type)}function ml(e,i,t){this.id=e,this.addr=t,this.cache=[],this.size=i.size,this.setValue=function(n){switch(n){case 5126:return Kh;case 35664:return id;case 35665:return rd;case 35666:return ad;case 35674:return od;case 35675:return sd;case 35676:return cd;case 5124:case 35670:return $h;case 35667:case 35671:return ed;case 35668:case 35672:return td;case 35669:case 35673:return nd;case 35678:case 36198:case 36298:case 36306:case 35682:return ld;case 35680:case 36300:case 36308:case 36293:return ud}}(i.type)}function vl(e){this.id=e,this.seq=[],this.map={}}ml.prototype.updateCache=function(e){var i=this.cache;e instanceof Float32Array&&i.length!==e.length&&(this.cache=new Float32Array(e.length)),hn(i,e)},vl.prototype.setValue=function(e,i,t){for(var n=this.seq,r=0,a=n.length;r!==a;++r){var o=n[r];o.setValue(e,i[o.id],t)}};var Ds=/([\w\d_]+)(\])?(\[|\.)?/g;function gl(e,i){e.seq.push(i),e.map[i.id]=i}function dd(e,i,t){var n=e.name,r=n.length;for(Ds.lastIndex=0;;){var a=Ds.exec(n),o=Ds.lastIndex,s=a[1],c=a[2]==="]",l=a[3];if(c&&(s|=0),l===void 0||l==="["&&o+2===r){gl(t,l===void 0?new hd(s,e,i):new ml(s,e,i));break}var u=t.map[s];u===void 0&&gl(t,u=new vl(s)),t=u}}function Li(e,i){this.seq=[],this.map={};for(var t=e.getProgramParameter(i,35718),n=0;n<t;++n){var r=e.getActiveUniform(i,n);dd(r,e.getUniformLocation(i,r.name),this)}}function yl(e,i,t){var n=e.createShader(i);return e.shaderSource(n,t),e.compileShader(n),n}Li.prototype.setValue=function(e,i,t,n){var r=this.map[i];r!==void 0&&r.setValue(e,t,n)},Li.prototype.setOptional=function(e,i,t){var n=i[t];n!==void 0&&this.setValue(e,t,n)},Li.upload=function(e,i,t,n){for(var r=0,a=i.length;r!==a;++r){var o=i[r],s=t[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,n)}},Li.seqWithValue=function(e,i){for(var t=[],n=0,r=e.length;n!==r;++n){var a=e[n];a.id in i&&t.push(a)}return t};var pd=0;function xl(e){switch(e){case Hn:return["Linear","( value )"];case Mr:return["sRGB","( value )"];case Sr:return["RGBE","( value )"];case qi:return["RGBM","( value, 7.0 )"];case Xi:return["RGBM","( value, 16.0 )"];case ca:return["RGBD","( value, 256.0 )"];case sa:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function bl(e,i,t){var n=e.getShaderParameter(i,35713),r=e.getShaderInfoLog(i).trim();return n&&r===""?"":"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+function(a){for(var o=a.split(`
`),s=0;s<o.length;s++)o[s]=s+1+": "+o[s];return o.join(`
`)}(e.getShaderSource(i))}function Ma(e,i){var t=xl(i);return"vec4 "+e+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function fd(e,i){var t;switch(i){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",i),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sa(e){return e!==""}function _l(e,i){return e.replace(/NUM_DIR_LIGHTS/g,i.numDirLights).replace(/NUM_SPOT_LIGHTS/g,i.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,i.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,i.numPointLights).replace(/NUM_HEMI_LIGHTS/g,i.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,i.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,i.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,i.numPointLightShadows)}function wl(e,i){return e.replace(/NUM_CLIPPING_PLANES/g,i.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,i.numClippingPlanes-i.numClipIntersection)}var md=/^[ \t]*#include +<([\w\d./]+)>/gm;function Is(e){return e.replace(md,vd)}function vd(e,i){var t=De[i];if(t===void 0)throw new Error("Can not resolve #include <"+i+">");return Is(t)}var gd=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,yd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(e){return e.replace(yd,Sl).replace(gd,xd)}function xd(e,i,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Sl(e,i,t,n)}function Sl(e,i,t,n){for(var r="",a=parseInt(i);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Tl(e){var i="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?i+=`
#define HIGH_PRECISION`:e.precision==="mediump"?i+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(i+=`
#define LOW_PRECISION`),i}function bd(e,i,t,n){var r,a,o,s,c,l=e.getContext(),u=t.defines,h=t.vertexShader,p=t.fragmentShader,d=function(G){var H="SHADOWMAP_TYPE_BASIC";return G.shadowMapType===1?H="SHADOWMAP_TYPE_PCF":G.shadowMapType===2?H="SHADOWMAP_TYPE_PCF_SOFT":G.shadowMapType===3&&(H="SHADOWMAP_TYPE_VSM"),H}(t),f=function(G){var H="ENVMAP_TYPE_CUBE";if(G.envMap)switch(G.envMapMode){case Yt:case zn:H="ENVMAP_TYPE_CUBE";break;case an:case Ut:H="ENVMAP_TYPE_CUBE_UV"}return H}(t),g=function(G){var H="ENVMAP_MODE_REFLECTION";if(G.envMap)switch(G.envMapMode){case zn:case Ut:H="ENVMAP_MODE_REFRACTION"}return H}(t),m=function(G){var H="ENVMAP_BLENDING_NONE";if(G.envMap)switch(G.combine){case 0:H="ENVMAP_BLENDING_MULTIPLY";break;case 1:H="ENVMAP_BLENDING_MIX";break;case 2:H="ENVMAP_BLENDING_ADD"}return H}(t),y=e.gammaFactor>0?e.gammaFactor:1,_=t.isWebGL2?"":function(G){return[G.extensionDerivatives||G.envMapCubeUV||G.bumpMap||G.tangentSpaceNormalMap||G.clearcoatNormalMap||G.flatShading||G.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(G.extensionFragDepth||G.logarithmicDepthBuffer)&&G.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",G.extensionDrawBuffers&&G.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(G.extensionShaderTextureLOD||G.envMap)&&G.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sa).join(`
`)}(t),x=function(G){var H=[];for(var V in G){var ee=G[V];ee!==!1&&H.push("#define "+V+" "+ee)}return H.join(`
`)}(u),b=l.createProgram(),w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?((r=[x].filter(Sa).join(`
`)).length>0&&(r+=`
`),(a=[_,x].filter(Sa).join(`
`)).length>0&&(a+=`
`)):(r=[Tl(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+y,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),a=[_,Tl(t),"#define SHADER_NAME "+t.shaderName,x,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?De.tonemapping_pars_fragment:"",t.toneMapping!==0?fd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",De.encodings_pars_fragment,t.map?Ma("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ma("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ma("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ma("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Ma("lightMapTexelToLinear",t.lightMapEncoding):"",(o="linearToOutputTexel",s=t.outputEncoding,c=xl(s),"vec4 "+o+"( vec4 value ) { return LinearTo"+c[0]+c[1]+"; }"),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),h=wl(h=_l(h=Is(h),t),t),p=wl(p=_l(p=Is(p),t),t),h=Ml(h),p=Ml(p),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,r=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+r,a=["#define varying in",t.glslVersion===Tr?"":"out highp vec4 pc_fragColor;",t.glslVersion===Tr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+a);var E,S,P=w+a+p,C=yl(l,35633,w+r+h),T=yl(l,35632,P);if(l.attachShader(b,C),l.attachShader(b,T),t.index0AttributeName!==void 0?l.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b),e.debug.checkShaderErrors){var D=l.getProgramInfoLog(b).trim(),N=l.getShaderInfoLog(C).trim(),F=l.getShaderInfoLog(T).trim(),k=!0,B=!0;if(l.getProgramParameter(b,35714)===!1){k=!1;var W=bl(l,C,"vertex"),Q=bl(l,T,"fragment");console.error("THREE.WebGLProgram: shader error: ",l.getError(),"35715",l.getProgramParameter(b,35715),"gl.getProgramInfoLog",D,W,Q)}else D!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",D):N!==""&&F!==""||(B=!1);B&&(this.diagnostics={runnable:k,programLog:D,vertexShader:{log:N,prefix:r},fragmentShader:{log:F,prefix:a}})}return l.deleteShader(C),l.deleteShader(T),this.getUniforms=function(){return E===void 0&&(E=new Li(l,b)),E},this.getAttributes=function(){return S===void 0&&(S=function(G,H){for(var V={},ee=G.getProgramParameter(H,35721),he=0;he<ee;he++){var we=G.getActiveAttrib(H,he).name;V[we]=G.getAttribLocation(H,we)}return V}(l,b)),S},this.destroy=function(){n.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.name=t.shaderName,this.id=pd++,this.cacheKey=i,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=T,this}function _d(e,i,t,n,r,a){var o=[],s=n.isWebGL2,c=n.logarithmicDepthBuffer,l=n.floatVertexTextures,u=n.maxVertexUniforms,h=n.vertexTextures,p=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},f=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function g(m){var y;return m?m.isTexture?y=m.encoding:m.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),y=m.texture.encoding):y=Hn,y}return{getParameters:function(m,y,_,x,b){var w,E,S=x.fog,P=m.isMeshStandardMaterial?x.environment:null,C=i.get(m.envMap||P),T=d[m.type],D=b.isSkinnedMesh?function(k){var B=k.skeleton.bones;if(l)return 1024;var W=u,Q=Math.floor((W-20)/4),G=Math.min(Q,B.length);return G<B.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+B.length+" bones. This GPU supports "+G+"."),0):G}(b):0;if(m.precision!==null&&(p=n.getMaxPrecision(m.precision))!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."),T){var N=An[T];w=N.vertexShader,E=N.fragmentShader}else w=m.vertexShader,E=m.fragmentShader;var F=e.getRenderTarget();return{isWebGL2:s,shaderID:T,shaderName:m.type,vertexShader:w,fragmentShader:E,defines:m.defines,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,instancing:b.isInstancedMesh===!0,instancingColor:b.isInstancedMesh===!0&&b.instanceColor!==null,supportsVertexTextures:h,outputEncoding:F!==null?g(F.texture):e.outputEncoding,map:!!m.map,mapEncoding:g(m.map),matcap:!!m.matcap,matcapEncoding:g(m.matcap),envMap:!!C,envMapMode:C&&C.mapping,envMapEncoding:g(C),envMapCubeUV:!!C&&(C.mapping===an||C.mapping===Ut),lightMap:!!m.lightMap,lightMapEncoding:g(m.lightMap),aoMap:!!m.aoMap,emissiveMap:!!m.emissiveMap,emissiveMapEncoding:g(m.emissiveMap),bumpMap:!!m.bumpMap,normalMap:!!m.normalMap,objectSpaceNormalMap:m.normalMapType===1,tangentSpaceNormalMap:m.normalMapType===0,clearcoatMap:!!m.clearcoatMap,clearcoatRoughnessMap:!!m.clearcoatRoughnessMap,clearcoatNormalMap:!!m.clearcoatNormalMap,displacementMap:!!m.displacementMap,roughnessMap:!!m.roughnessMap,metalnessMap:!!m.metalnessMap,specularMap:!!m.specularMap,alphaMap:!!m.alphaMap,gradientMap:!!m.gradientMap,sheen:!!m.sheen,transmissionMap:!!m.transmissionMap,combine:m.combine,vertexTangents:m.normalMap&&m.vertexTangents,vertexColors:m.vertexColors,vertexUvs:!!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatMap||m.clearcoatRoughnessMap||m.clearcoatNormalMap||m.displacementMap||m.transmissionMap),uvsVertexOnly:!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatNormalMap||m.transmissionMap||!m.displacementMap),fog:!!S,useFog:m.fog,fogExp2:S&&S.isFogExp2,flatShading:m.flatShading,sizeAttenuation:m.sizeAttenuation,logarithmicDepthBuffer:c,skinning:m.skinning&&D>0,maxBones:D,useVertexTexture:l,morphTargets:m.morphTargets,morphNormals:m.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&_.length>0,shadowMapType:e.shadowMap.type,toneMapping:m.toneMapped?e.toneMapping:0,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:m.premultipliedAlpha,alphaTest:m.alphaTest,doubleSided:m.side===2,flipSided:m.side===1,depthPacking:m.depthPacking!==void 0&&m.depthPacking,index0AttributeName:m.index0AttributeName,extensionDerivatives:m.extensions&&m.extensions.derivatives,extensionFragDepth:m.extensions&&m.extensions.fragDepth,extensionDrawBuffers:m.extensions&&m.extensions.drawBuffers,extensionShaderTextureLOD:m.extensions&&m.extensions.shaderTextureLOD,rendererExtensionFragDepth:s||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:s||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:s||t.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){var y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.fragmentShader),y.push(m.vertexShader)),m.defines!==void 0)for(var _ in m.defines)y.push(_),y.push(m.defines[_]);if(m.isRawShaderMaterial===!1){for(var x=0;x<f.length;x++)y.push(m[f[x]]);y.push(e.outputEncoding),y.push(e.gammaFactor)}return y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){var y,_=d[m.type];if(_){var x=An[_];y=al.clone(x.uniforms)}else y=m.uniforms;return y},acquireProgram:function(m,y){for(var _,x=0,b=o.length;x<b;x++){var w=o[x];if(w.cacheKey===y){++(_=w).usedTimes;break}}return _===void 0&&(_=new bd(e,y,m,r),o.push(_)),_},releaseProgram:function(m){if(--m.usedTimes==0){var y=o.indexOf(m);o[y]=o[o.length-1],o.pop(),m.destroy()}},programs:o}}function wd(){var e=new WeakMap;return{get:function(i){var t=e.get(i);return t===void 0&&(t={},e.set(i,t)),t},remove:function(i){e.delete(i)},update:function(i,t,n){e.get(i)[t]=n},dispose:function(){e=new WeakMap}}}function Md(e,i){return e.groupOrder!==i.groupOrder?e.groupOrder-i.groupOrder:e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.program!==i.program?e.program.id-i.program.id:e.material.id!==i.material.id?e.material.id-i.material.id:e.z!==i.z?e.z-i.z:e.id-i.id}function Sd(e,i){return e.groupOrder!==i.groupOrder?e.groupOrder-i.groupOrder:e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.z!==i.z?i.z-e.z:e.id-i.id}function El(e){var i=[],t=0,n=[],r=[],a={id:-1};function o(s,c,l,u,h,p){var d=i[t],f=e.get(l);return d===void 0?(d={id:s.id,object:s,geometry:c,material:l,program:f.program||a,groupOrder:u,renderOrder:s.renderOrder,z:h,group:p},i[t]=d):(d.id=s.id,d.object=s,d.geometry=c,d.material=l,d.program=f.program||a,d.groupOrder=u,d.renderOrder=s.renderOrder,d.z=h,d.group=p),t++,d}return{opaque:n,transparent:r,init:function(){t=0,n.length=0,r.length=0},push:function(s,c,l,u,h,p){var d=o(s,c,l,u,h,p);(l.transparent===!0?r:n).push(d)},unshift:function(s,c,l,u,h,p){var d=o(s,c,l,u,h,p);(l.transparent===!0?r:n).unshift(d)},finish:function(){for(var s=t,c=i.length;s<c;s++){var l=i[s];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.program=null,l.group=null}},sort:function(s,c){n.length>1&&n.sort(s||Md),r.length>1&&r.sort(c||Sd)}}}function Td(e){var i=new WeakMap;return{get:function(t,n){var r,a=i.get(t);return a===void 0?(r=new El(e),i.set(t,new WeakMap),i.get(t).set(n,r)):(r=a.get(n))===void 0&&(r=new El(e),a.set(n,r)),r},dispose:function(){i=new WeakMap}}}function Ed(){var e={};return{get:function(i){if(e[i.id]!==void 0)return e[i.id];var t;switch(i.type){case"DirectionalLight":t={direction:new M,color:new pe};break;case"SpotLight":t={position:new M,direction:new M,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new M,halfWidth:new M,halfHeight:new M}}return e[i.id]=t,t}}}var Ad=0;function Ld(e,i){return(i.castShadow?1:0)-(e.castShadow?1:0)}function Rd(){for(var e,i=new Ed,t=(e={},{get:function(c){if(e[c.id]!==void 0)return e[c.id];var l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case"PointLight":l={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3}}return e[c.id]=l,l}}),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},r=0;r<9;r++)n.probe.push(new M);var a=new M,o=new Ne,s=new Ne;return{setup:function(c,l,u){for(var h=0,p=0,d=0,f=0;f<9;f++)n.probe[f].set(0,0,0);var g=0,m=0,y=0,_=0,x=0,b=0,w=0,E=0,S=u.matrixWorldInverse;c.sort(Ld);for(var P=0,C=c.length;P<C;P++){var T=c[P],D=T.color,N=T.intensity,F=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=D.r*N,p+=D.g*N,d+=D.b*N;else if(T.isLightProbe)for(var B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],N);else if(T.isDirectionalLight){var W=i.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),W.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),W.direction.sub(a),W.direction.transformDirection(S),T.castShadow){var Q=T.shadow,G=t.get(T);G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=k,n.directionalShadowMatrix[g]=T.shadow.matrix,b++}n.directional[g]=W,g++}else if(T.isSpotLight){var H=i.get(T);if(H.position.setFromMatrixPosition(T.matrixWorld),H.position.applyMatrix4(S),H.color.copy(D).multiplyScalar(N),H.distance=F,H.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),H.direction.sub(a),H.direction.transformDirection(S),H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,T.castShadow){var V=T.shadow,ee=t.get(T);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=k,n.spotShadowMatrix[y]=T.shadow.matrix,E++}n.spot[y]=H,y++}else if(T.isRectAreaLight){var he=i.get(T);he.color.copy(D).multiplyScalar(N),he.position.setFromMatrixPosition(T.matrixWorld),he.position.applyMatrix4(S),s.identity(),o.copy(T.matrixWorld),o.premultiply(S),s.extractRotation(o),he.halfWidth.set(.5*T.width,0,0),he.halfHeight.set(0,.5*T.height,0),he.halfWidth.applyMatrix4(s),he.halfHeight.applyMatrix4(s),n.rectArea[_]=he,_++}else if(T.isPointLight){var we=i.get(T);if(we.position.setFromMatrixPosition(T.matrixWorld),we.position.applyMatrix4(S),we.color.copy(T.color).multiplyScalar(T.intensity),we.distance=T.distance,we.decay=T.decay,T.castShadow){var R=T.shadow,L=t.get(T);L.shadowBias=R.bias,L.shadowNormalBias=R.normalBias,L.shadowRadius=R.radius,L.shadowMapSize=R.mapSize,L.shadowCameraNear=R.camera.near,L.shadowCameraFar=R.camera.far,n.pointShadow[m]=L,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=T.shadow.matrix,w++}n.point[m]=we,m++}else if(T.isHemisphereLight){var j=i.get(T);j.direction.setFromMatrixPosition(T.matrixWorld),j.direction.transformDirection(S),j.direction.normalize(),j.skyColor.copy(T.color).multiplyScalar(N),j.groundColor.copy(T.groundColor).multiplyScalar(N),n.hemi[x]=j,x++}}_>0&&(n.rectAreaLTC1=le.LTC_1,n.rectAreaLTC2=le.LTC_2),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;var z=n.hash;z.directionalLength===g&&z.pointLength===m&&z.spotLength===y&&z.rectAreaLength===_&&z.hemiLength===x&&z.numDirectionalShadows===b&&z.numPointShadows===w&&z.numSpotShadows===E||(n.directional.length=g,n.spot.length=y,n.rectArea.length=_,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotShadowMatrix.length=E,z.directionalLength=g,z.pointLength=m,z.spotLength=y,z.rectAreaLength=_,z.hemiLength=x,z.numDirectionalShadows=b,z.numPointShadows=w,z.numSpotShadows=E,n.version=Ad++)},state:n}}function Al(){var e=new Rd,i=[],t=[];return{init:function(){i.length=0,t.length=0},state:{lightsArray:i,shadowsArray:t,lights:e},setupLights:function(n){e.setup(i,t,n)},pushLight:function(n){i.push(n)},pushShadow:function(n){t.push(n)}}}function Cd(){var e=new WeakMap;return{get:function(i,t){var n;return e.has(i)===!1?(n=new Al,e.set(i,new WeakMap),e.get(i).set(t,n)):e.get(i).has(t)===!1?(n=new Al,e.get(i).set(t,n)):n=e.get(i).get(t),n},dispose:function(){e=new WeakMap}}}function Ri(e){Ee.call(this),this.type="MeshDepthMaterial",this.depthPacking=3200,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}function Ci(e){Ee.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}Ri.prototype=Object.create(Ee.prototype),Ri.prototype.constructor=Ri,Ri.prototype.isMeshDepthMaterial=!0,Ri.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this},Ci.prototype=Object.create(Ee.prototype),Ci.prototype.constructor=Ci,Ci.prototype.isMeshDistanceMaterial=!0,Ci.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};function Ll(e,i,t){var n=new wa,r=new I,a=new I,o=new de,s=[],c=[],l={},u={0:1,1:0,2:2},h=new Jt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=h.clone();p.defines.HORIZONAL_PASS=1;var d=new _e;d.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var f=new st(d,h),g=this;function m(w,E){var S=i.update(f);h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(E,null,S,h,f,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(E,null,S,p,f,null)}function y(w,E,S){var P=w<<0|E<<1|S<<2,C=s[P];return C===void 0&&(C=new Ri({depthPacking:3201,morphTargets:w,skinning:E}),s[P]=C),C}function _(w,E,S){var P=w<<0|E<<1|S<<2,C=c[P];return C===void 0&&(C=new Ci({morphTargets:w,skinning:E}),c[P]=C),C}function x(w,E,S,P,C,T,D){var N=null,F=y,k=w.customDepthMaterial;if(P.isPointLight===!0&&(F=_,k=w.customDistanceMaterial),k===void 0){var B=!1;S.morphTargets===!0&&(B=E.morphAttributes&&E.morphAttributes.position&&E.morphAttributes.position.length>0);var W=!1;w.isSkinnedMesh===!0&&(S.skinning===!0?W=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w)),N=F(B,W,w.isInstancedMesh===!0)}else N=k;if(e.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0){var Q=N.uuid,G=S.uuid,H=l[Q];H===void 0&&(H={},l[Q]=H);var V=H[G];V===void 0&&(V=N.clone(),H[G]=V),N=V}return N.visible=S.visible,N.wireframe=S.wireframe,N.side=D===3?S.shadowSide!==null?S.shadowSide:S.side:S.shadowSide!==null?S.shadowSide:u[S.side],N.clipShadows=S.clipShadows,N.clippingPlanes=S.clippingPlanes,N.clipIntersection=S.clipIntersection,N.wireframeLinewidth=S.wireframeLinewidth,N.linewidth=S.linewidth,P.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(P.matrixWorld),N.nearDistance=C,N.farDistance=T),N}function b(w,E,S,P,C){if(w.visible!==!1){if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);var T=i.update(w),D=w.material;if(Array.isArray(D))for(var N=T.groups,F=0,k=N.length;F<k;F++){var B=N[F],W=D[B.materialIndex];if(W&&W.visible){var Q=x(w,T,W,P,S.near,S.far,C);e.renderBufferDirect(S,null,T,Q,w,B)}}else if(D.visible){var G=x(w,T,D,P,S.near,S.far,C);e.renderBufferDirect(S,null,T,G,w,null)}}for(var H=w.children,V=0,ee=H.length;V<ee;V++)b(H[V],E,S,P,C)}}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(w,E,S){if(g.enabled!==!1&&(g.autoUpdate!==!1||g.needsUpdate!==!1)&&w.length!==0){var P=e.getRenderTarget(),C=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),D=e.state;D.setBlending(0),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(var N=0,F=w.length;N<F;N++){var k=w[N],B=k.shadow;if(B!==void 0){if(B.autoUpdate!==!1||B.needsUpdate!==!1){r.copy(B.mapSize);var W=B.getFrameExtents();if(r.multiply(W),a.copy(B.mapSize),(r.x>t||r.y>t)&&(r.x>t&&(a.x=Math.floor(t/W.x),r.x=a.x*W.x,B.mapSize.x=a.x),r.y>t&&(a.y=Math.floor(t/W.y),r.y=a.y*W.y,B.mapSize.y=a.y)),B.map===null&&!B.isPointLightShadow&&this.type===3){var Q={minFilter:X,magFilter:X,format:St};B.map=new He(r.x,r.y,Q),B.map.texture.name=k.name+".shadowMap",B.mapPass=new He(r.x,r.y,Q),B.camera.updateProjectionMatrix()}if(B.map===null){var G={minFilter:dt,magFilter:dt,format:St};B.map=new He(r.x,r.y,G),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();for(var H=B.getViewportCount(),V=0;V<H;V++){var ee=B.getViewport(V);o.set(a.x*ee.x,a.y*ee.y,a.x*ee.z,a.y*ee.w),D.viewport(o),B.updateMatrices(k,V),n=B.getFrustum(),b(E,S,B.camera,k,this.type)}B.isPointLightShadow||this.type!==3||m(B,S),B.needsUpdate=!1}}else console.warn("THREE.WebGLShadowMap:",k,"has no shadow.")}g.needsUpdate=!1,e.setRenderTarget(P,C,T)}}}function Pd(e,i,t){var n,r,a=t.isWebGL2,o=new function(){var O=!1,K=new de,ie=null,ce=new de(0,0,0,0);return{setMask:function(te){ie===te||O||(e.colorMask(te,te,te,te),ie=te)},setLocked:function(te){O=te},setClear:function(te,me,Se,We,Qe){Qe===!0&&(te*=We,me*=We,Se*=We),K.set(te,me,Se,We),ce.equals(K)===!1&&(e.clearColor(te,me,Se,We),ce.copy(K))},reset:function(){O=!1,ie=null,ce.set(-1,0,0,0)}}},s=new function(){var O=!1,K=null,ie=null,ce=null;return{setTest:function(te){te?H(2929):V(2929)},setMask:function(te){K===te||O||(e.depthMask(te),K=te)},setFunc:function(te){if(ie!==te){if(te)switch(te){case 0:e.depthFunc(512);break;case 1:e.depthFunc(519);break;case 2:e.depthFunc(513);break;case 3:e.depthFunc(515);break;case 4:e.depthFunc(514);break;case 5:e.depthFunc(518);break;case 6:e.depthFunc(516);break;case 7:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);ie=te}},setLocked:function(te){O=te},setClear:function(te){ce!==te&&(e.clearDepth(te),ce=te)},reset:function(){O=!1,K=null,ie=null,ce=null}}},c=new function(){var O=!1,K=null,ie=null,ce=null,te=null,me=null,Se=null,We=null,Qe=null;return{setTest:function(Ce){O||(Ce?H(2960):V(2960))},setMask:function(Ce){K===Ce||O||(e.stencilMask(Ce),K=Ce)},setFunc:function(Ce,ke,Je){ie===Ce&&ce===ke&&te===Je||(e.stencilFunc(Ce,ke,Je),ie=Ce,ce=ke,te=Je)},setOp:function(Ce,ke,Je){me===Ce&&Se===ke&&We===Je||(e.stencilOp(Ce,ke,Je),me=Ce,Se=ke,We=Je)},setLocked:function(Ce){O=Ce},setClear:function(Ce){Qe!==Ce&&(e.clearStencil(Ce),Qe=Ce)},reset:function(){O=!1,K=null,ie=null,ce=null,te=null,me=null,Se=null,We=null,Qe=null}}},l={},u=null,h=null,p=null,d=null,f=null,g=null,m=null,y=null,_=null,x=!1,b=null,w=null,E=null,S=null,P=null,C=e.getParameter(35661),T=!1,D=0,N=e.getParameter(7938);N.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL\ ([0-9])/.exec(N)[1]),T=D>=1):N.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(N)[1]),T=D>=2);var F=null,k={},B=new de,W=new de;function Q(O,K,ie){var ce=new Uint8Array(4),te=e.createTexture();e.bindTexture(O,te),e.texParameteri(O,10241,9728),e.texParameteri(O,10240,9728);for(var me=0;me<ie;me++)e.texImage2D(K+me,0,6408,1,1,0,6408,5121,ce);return te}var G={};function H(O){l[O]!==!0&&(e.enable(O),l[O]=!0)}function V(O){l[O]!==!1&&(e.disable(O),l[O]=!1)}G[3553]=Q(3553,3553,1),G[34067]=Q(34067,34069,6),o.setClear(0,0,0,1),s.setClear(1),c.setClear(0),H(2929),s.setFunc(3),L(!1),j(1),H(2884),R(0);var ee=((n={})[100]=32774,n[101]=32778,n[102]=32779,n);if(a)ee[103]=32775,ee[104]=32776;else{var he=i.get("EXT_blend_minmax");he!==null&&(ee[103]=he.MIN_EXT,ee[104]=he.MAX_EXT)}var we=((r={})[200]=0,r[201]=1,r[202]=768,r[204]=770,r[210]=776,r[208]=774,r[206]=772,r[203]=769,r[205]=771,r[209]=775,r[207]=773,r);function R(O,K,ie,ce,te,me,Se,We){if(O!==0){if(h||(H(3042),h=!0),O===5)te=te||K,me=me||ie,Se=Se||ce,K===d&&te===m||(e.blendEquationSeparate(ee[K],ee[te]),d=K,m=te),ie===f&&ce===g&&me===y&&Se===_||(e.blendFuncSeparate(we[ie],we[ce],we[me],we[Se]),f=ie,g=ce,y=me,_=Se),p=O,x=null;else if(O!==p||We!==x){if(d===nt&&m===nt||(e.blendEquation(32774),d=nt,m=nt),We)switch(O){case 1:e.blendFuncSeparate(1,771,1,771);break;case 2:e.blendFunc(1,1);break;case 3:e.blendFuncSeparate(0,0,769,771);break;case 4:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O)}else switch(O){case 1:e.blendFuncSeparate(770,771,1,771);break;case 2:e.blendFunc(770,1);break;case 3:e.blendFunc(0,769);break;case 4:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O)}f=null,g=null,y=null,_=null,p=O,x=We}}else h&&(V(3042),h=!1)}function L(O){b!==O&&(O?e.frontFace(2304):e.frontFace(2305),b=O)}function j(O){O!==0?(H(2884),O!==w&&(O===1?e.cullFace(1029):O===2?e.cullFace(1028):e.cullFace(1032))):V(2884),w=O}function z(O,K,ie){O?(H(32823),S===K&&P===ie||(e.polygonOffset(K,ie),S=K,P=ie)):V(32823)}function J(O){O===void 0&&(O=33984+C-1),F!==O&&(e.activeTexture(O),F=O)}return{buffers:{color:o,depth:s,stencil:c},enable:H,disable:V,useProgram:function(O){return u!==O&&(e.useProgram(O),u=O,!0)},setBlending:R,setMaterial:function(O,K){O.side===2?V(2884):H(2884);var ie=O.side===1;K&&(ie=!ie),L(ie),O.blending===1&&O.transparent===!1?R(0):R(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),o.setMask(O.colorWrite);var ce=O.stencilWrite;c.setTest(ce),ce&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits)},setFlipSided:L,setCullFace:j,setLineWidth:function(O){O!==E&&(T&&e.lineWidth(O),E=O)},setPolygonOffset:z,setScissorTest:function(O){O?H(3089):V(3089)},activeTexture:J,bindTexture:function(O,K){F===null&&J();var ie=k[F];ie===void 0&&(ie={type:void 0,texture:void 0},k[F]=ie),ie.type===O&&ie.texture===K||(e.bindTexture(O,K||G[O]),ie.type=O,ie.texture=K)},unbindTexture:function(){var O=k[F];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}},texImage2D:function(){try{e.texImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}},texImage3D:function(){try{e.texImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}},scissor:function(O){B.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),B.copy(O))},viewport:function(O){W.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),W.copy(O))},reset:function(){l={},F=null,k={},u=null,p=null,b=null,w=null,o.reset(),s.reset(),c.reset()}}}function Od(e,i,t,n,r,a,o){var s,c,l,u=r.isWebGL2,h=r.maxTextures,p=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,g=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,L){return m?new OffscreenCanvas(R,L):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function _(R,L,j,z){var J=1;if((R.width>z||R.height>z)&&(J=z/Math.max(R.width,R.height)),J<1||L===!0){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){var O=L?be.floorPowerOfTwo:Math.floor,K=O(J*R.width),ie=O(J*R.height);l===void 0&&(l=y(K,ie));var ce=j?y(K,ie):l;return ce.width=K,ce.height=ie,ce.getContext("2d").drawImage(R,0,0,K,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+K+"x"+ie+")."),ce}return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R}return R}function x(R){return be.isPowerOfTwo(R.width)&&be.isPowerOfTwo(R.height)}function b(R,L){return R.generateMipmaps&&L&&R.minFilter!==dt&&R.minFilter!==X}function w(R,L,j,z){e.generateMipmap(R),n.get(L).__maxMipLevel=Math.log(Math.max(j,z))*Math.LOG2E}function E(R,L,j){if(u===!1)return L;if(R!==null){if(e[R]!==void 0)return e[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}var z=L;return L===6403&&(j===5126&&(z=33326),j===5131&&(z=33325),j===5121&&(z=33321)),L===6407&&(j===5126&&(z=34837),j===5131&&(z=34843),j===5121&&(z=32849)),L===6408&&(j===5126&&(z=34836),j===5131&&(z=34842),j===5121&&(z=32856)),z!==33325&&z!==33326&&z!==34842&&z!==34836||i.get("EXT_color_buffer_float"),z}function S(R){return R===dt||R===Hi||R===$?9728:9729}function P(R){var L=R.target;L.removeEventListener("dispose",P),function(j){var z=n.get(j);z.__webglInit!==void 0&&(e.deleteTexture(z.__webglTexture),n.remove(j))}(L),L.isVideoTexture&&g.delete(L),o.memory.textures--}function C(R){var L=R.target;L.removeEventListener("dispose",C),function(j){var z=n.get(j),J=n.get(j.texture);if(j){if(J.__webglTexture!==void 0&&e.deleteTexture(J.__webglTexture),j.depthTexture&&j.depthTexture.dispose(),j.isWebGLCubeRenderTarget)for(var O=0;O<6;O++)e.deleteFramebuffer(z.__webglFramebuffer[O]),z.__webglDepthbuffer&&e.deleteRenderbuffer(z.__webglDepthbuffer[O]);else e.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&e.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&e.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer&&e.deleteRenderbuffer(z.__webglColorRenderbuffer),z.__webglDepthRenderbuffer&&e.deleteRenderbuffer(z.__webglDepthRenderbuffer);n.remove(j.texture),n.remove(j)}}(L),o.memory.textures--}var T=0;function D(R,L){var j=n.get(R);if(R.isVideoTexture&&function(J){var O=o.render.frame;g.get(J)!==O&&(g.set(J,O),J.update())}(R),R.version>0&&j.__version!==R.version){var z=R.image;if(z===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(z.complete!==!1)return void Q(j,R,L);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.activeTexture(33984+L),t.bindTexture(3553,j.__webglTexture)}function N(R,L){var j=n.get(R);R.version>0&&j.__version!==R.version?function(z,J,O){if(J.image.length===6){W(z,J),t.activeTexture(33984+O),t.bindTexture(34067,z.__webglTexture),e.pixelStorei(37440,J.flipY);for(var K=J&&(J.isCompressedTexture||J.image[0].isCompressedTexture),ie=J.image[0]&&J.image[0].isDataTexture,ce=[],te=0;te<6;te++)ce[te]=K||ie?ie?J.image[te].image:J.image[te]:_(J.image[te],!1,!0,p);var me,Se=ce[0],We=x(Se)||u,Qe=a.convert(J.format),Ce=a.convert(J.type),ke=E(J.internalFormat,Qe,Ce);if(B(34067,J,We),K){for(var Je=0;Je<6;Je++){me=ce[Je].mipmaps;for(var $t=0;$t<me.length;$t++){var Ot=me[$t];J.format!==St&&J.format!==bt?Qe!==null?t.compressedTexImage2D(34069+Je,$t,ke,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+Je,$t,ke,Ot.width,Ot.height,0,Qe,Ce,Ot.data)}}z.__maxMipLevel=me.length-1}else{me=J.mipmaps;for(var Nt=0;Nt<6;Nt++)if(ie){t.texImage2D(34069+Nt,0,ke,ce[Nt].width,ce[Nt].height,0,Qe,Ce,ce[Nt].data);for(var kt=0;kt<me.length;kt++){var At=me[kt].image[Nt].image;t.texImage2D(34069+Nt,kt+1,ke,At.width,At.height,0,Qe,Ce,At.data)}}else{t.texImage2D(34069+Nt,0,ke,Qe,Ce,ce[Nt]);for(var re=0;re<me.length;re++){var pi=me[re];t.texImage2D(34069+Nt,re+1,ke,Qe,Ce,pi.image[Nt])}}z.__maxMipLevel=me.length}b(J,We)&&w(34067,J,Se.width,Se.height),z.__version=J.version,J.onUpdate&&J.onUpdate(J)}}(j,R,L):(t.activeTexture(33984+L),t.bindTexture(34067,j.__webglTexture))}var F=((s={})[1e3]=10497,s[1001]=33071,s[1002]=33648,s),k=((c={})[1003]=9728,c[1004]=9984,c[1005]=9986,c[1006]=9729,c[1007]=9985,c[1008]=9987,c);function B(R,L,j){j?(e.texParameteri(R,10242,F[L.wrapS]),e.texParameteri(R,10243,F[L.wrapT]),R!==32879&&R!==35866||e.texParameteri(R,32882,F[L.wrapR]),e.texParameteri(R,10240,k[L.magFilter]),e.texParameteri(R,10241,k[L.minFilter])):(e.texParameteri(R,10242,33071),e.texParameteri(R,10243,33071),R!==32879&&R!==35866||e.texParameteri(R,32882,33071),L.wrapS===Dt&&L.wrapT===Dt||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(R,10240,S(L.magFilter)),e.texParameteri(R,10241,S(L.minFilter)),L.minFilter!==dt&&L.minFilter!==X&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));var z=i.get("EXT_texture_filter_anisotropic");if(z){if(L.type===Rt&&i.get("OES_texture_float_linear")===null||L.type===on&&(u||i.get("OES_texture_half_float_linear"))===null)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(e.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function W(R,L){R.__webglInit===void 0&&(R.__webglInit=!0,L.addEventListener("dispose",P),R.__webglTexture=e.createTexture(),o.memory.textures++)}function Q(R,L,j){var z=3553;L.isDataTexture2DArray&&(z=35866),L.isDataTexture3D&&(z=32879),W(R,L),t.activeTexture(33984+j),t.bindTexture(z,R.__webglTexture),e.pixelStorei(37440,L.flipY),e.pixelStorei(37441,L.premultiplyAlpha),e.pixelStorei(3317,L.unpackAlignment);var J,O=function(Ot){return!u&&(Ot.wrapS!==Dt||Ot.wrapT!==Dt||Ot.minFilter!==dt&&Ot.minFilter!==X)}(L)&&x(L.image)===!1,K=_(L.image,O,!1,d),ie=x(K)||u,ce=a.convert(L.format),te=a.convert(L.type),me=E(L.internalFormat,ce,te);B(z,L,ie);var Se=L.mipmaps;if(L.isDepthTexture)me=6402,u?me=L.type===Rt?36012:L.type===pt?33190:L.type===It?35056:33189:L.type===Rt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Ve&&me===6402&&L.type!==ot&&L.type!==pt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=ot,te=a.convert(L.type)),L.format===tn&&me===6402&&(me=34041,L.type!==It&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=It,te=a.convert(L.type))),t.texImage2D(3553,0,me,K.width,K.height,0,ce,te,null);else if(L.isDataTexture)if(Se.length>0&&ie){for(var We=0,Qe=Se.length;We<Qe;We++)J=Se[We],t.texImage2D(3553,We,me,J.width,J.height,0,ce,te,J.data);L.generateMipmaps=!1,R.__maxMipLevel=Se.length-1}else t.texImage2D(3553,0,me,K.width,K.height,0,ce,te,K.data),R.__maxMipLevel=0;else if(L.isCompressedTexture){for(var Ce=0,ke=Se.length;Ce<ke;Ce++)J=Se[Ce],L.format!==St&&L.format!==bt?ce!==null?t.compressedTexImage2D(3553,Ce,me,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,Ce,me,J.width,J.height,0,ce,te,J.data);R.__maxMipLevel=Se.length-1}else if(L.isDataTexture2DArray)t.texImage3D(35866,0,me,K.width,K.height,K.depth,0,ce,te,K.data),R.__maxMipLevel=0;else if(L.isDataTexture3D)t.texImage3D(32879,0,me,K.width,K.height,K.depth,0,ce,te,K.data),R.__maxMipLevel=0;else if(Se.length>0&&ie){for(var Je=0,$t=Se.length;Je<$t;Je++)J=Se[Je],t.texImage2D(3553,Je,me,ce,te,J);L.generateMipmaps=!1,R.__maxMipLevel=Se.length-1}else t.texImage2D(3553,0,me,ce,te,K),R.__maxMipLevel=0;b(L,ie)&&w(z,L,K.width,K.height),R.__version=L.version,L.onUpdate&&L.onUpdate(L)}function G(R,L,j,z){var J=a.convert(L.texture.format),O=a.convert(L.texture.type),K=E(L.texture.internalFormat,J,O);t.texImage2D(z,0,K,L.width,L.height,0,J,O,null),e.bindFramebuffer(36160,R),e.framebufferTexture2D(36160,j,z,n.get(L.texture).__webglTexture,0),e.bindFramebuffer(36160,null)}function H(R,L,j){if(e.bindRenderbuffer(36161,R),L.depthBuffer&&!L.stencilBuffer){var z=33189;if(j){var J=L.depthTexture;J&&J.isDepthTexture&&(J.type===Rt?z=36012:J.type===pt&&(z=33190));var O=ee(L);e.renderbufferStorageMultisample(36161,O,z,L.width,L.height)}else e.renderbufferStorage(36161,z,L.width,L.height);e.framebufferRenderbuffer(36160,36096,36161,R)}else if(L.depthBuffer&&L.stencilBuffer){if(j){var K=ee(L);e.renderbufferStorageMultisample(36161,K,35056,L.width,L.height)}else e.renderbufferStorage(36161,34041,L.width,L.height);e.framebufferRenderbuffer(36160,33306,36161,R)}else{var ie=a.convert(L.texture.format),ce=a.convert(L.texture.type),te=E(L.texture.internalFormat,ie,ce);if(j){var me=ee(L);e.renderbufferStorageMultisample(36161,me,te,L.width,L.height)}else e.renderbufferStorage(36161,te,L.width,L.height)}e.bindRenderbuffer(36161,null)}function V(R){var L=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture){if(j)throw new Error("target.depthTexture not supported in Cube render targets");(function(J,O){if(O&&O.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,J),!O.depthTexture||!O.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(O.depthTexture).__webglTexture&&O.depthTexture.image.width===O.width&&O.depthTexture.image.height===O.height||(O.depthTexture.image.width=O.width,O.depthTexture.image.height=O.height,O.depthTexture.needsUpdate=!0),D(O.depthTexture,0);var K=n.get(O.depthTexture).__webglTexture;if(O.depthTexture.format===Ve)e.framebufferTexture2D(36160,36096,3553,K,0);else{if(O.depthTexture.format!==tn)throw new Error("Unknown depthTexture format");e.framebufferTexture2D(36160,33306,3553,K,0)}})(L.__webglFramebuffer,R)}else if(j){L.__webglDepthbuffer=[];for(var z=0;z<6;z++)e.bindFramebuffer(36160,L.__webglFramebuffer[z]),L.__webglDepthbuffer[z]=e.createRenderbuffer(),H(L.__webglDepthbuffer[z],R,!1)}else e.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=e.createRenderbuffer(),H(L.__webglDepthbuffer,R,!1);e.bindFramebuffer(36160,null)}function ee(R){return u&&R.isWebGLMultisampleRenderTarget?Math.min(f,R.samples):0}var he=!1,we=!1;this.allocateTextureUnit=function(){var R=T;return R>=h&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+h),T+=1,R},this.resetTextureUnits=function(){T=0},this.setTexture2D=D,this.setTexture2DArray=function(R,L){var j=n.get(R);R.version>0&&j.__version!==R.version?Q(j,R,L):(t.activeTexture(33984+L),t.bindTexture(35866,j.__webglTexture))},this.setTexture3D=function(R,L){var j=n.get(R);R.version>0&&j.__version!==R.version?Q(j,R,L):(t.activeTexture(33984+L),t.bindTexture(32879,j.__webglTexture))},this.setTextureCube=N,this.setupRenderTarget=function(R){var L=n.get(R),j=n.get(R.texture);R.addEventListener("dispose",C),j.__webglTexture=e.createTexture(),o.memory.textures++;var z=R.isWebGLCubeRenderTarget===!0,J=R.isWebGLMultisampleRenderTarget===!0,O=x(R)||u;if(!u||R.texture.format!==bt||R.texture.type!==Rt&&R.texture.type!==on||(R.texture.format=St,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),z){L.__webglFramebuffer=[];for(var K=0;K<6;K++)L.__webglFramebuffer[K]=e.createFramebuffer()}else if(L.__webglFramebuffer=e.createFramebuffer(),J)if(u){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,L.__webglColorRenderbuffer);var ie=a.convert(R.texture.format),ce=a.convert(R.texture.type),te=E(R.texture.internalFormat,ie,ce),me=ee(R);e.renderbufferStorageMultisample(36161,me,te,R.width,R.height),e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,L.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),H(L.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(z){t.bindTexture(34067,j.__webglTexture),B(34067,R.texture,O);for(var Se=0;Se<6;Se++)G(L.__webglFramebuffer[Se],R,36064,34069+Se);b(R.texture,O)&&w(34067,R.texture,R.width,R.height),t.bindTexture(34067,null)}else t.bindTexture(3553,j.__webglTexture),B(3553,R.texture,O),G(L.__webglFramebuffer,R,36064,3553),b(R.texture,O)&&w(3553,R.texture,R.width,R.height),t.bindTexture(3553,null);R.depthBuffer&&V(R)},this.updateRenderTargetMipmap=function(R){var L=R.texture;if(b(L,x(R)||u)){var j=R.isWebGLCubeRenderTarget?34067:3553,z=n.get(L).__webglTexture;t.bindTexture(j,z),w(j,L,R.width,R.height),t.bindTexture(j,null)}},this.updateMultisampleRenderTarget=function(R){if(R.isWebGLMultisampleRenderTarget)if(u){var L=n.get(R);e.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,L.__webglFramebuffer);var j=R.width,z=R.height,J=16384;R.depthBuffer&&(J|=256),R.stencilBuffer&&(J|=1024),e.blitFramebuffer(0,0,j,z,0,0,j,z,J,9728),e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(R,L){R&&R.isWebGLRenderTarget&&(he===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),he=!0),R=R.texture),D(R,L)},this.safeSetTextureCube=function(R,L){R&&R.isWebGLCubeRenderTarget&&(we===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),we=!0),R=R.texture),N(R,L)}}function Rl(e,i,t){var n=t.isWebGL2;return{convert:function(r){var a;if(r===ze)return 5121;if(r===1017)return 32819;if(r===1018)return 32820;if(r===1019)return 33635;if(r===1010)return 5120;if(r===1011)return 5122;if(r===ot)return 5123;if(r===1013)return 5124;if(r===pt)return 5125;if(r===Rt)return 5126;if(r===on)return n?5131:(a=i.get("OES_texture_half_float"))!==null?a.HALF_FLOAT_OES:null;if(r===1021)return 6406;if(r===bt)return 6407;if(r===St)return 6408;if(r===1024)return 6409;if(r===1025)return 6410;if(r===Ve)return 6402;if(r===tn)return 34041;if(r===1028)return 6403;if(r===1029)return 36244;if(r===1030)return 33319;if(r===1031)return 33320;if(r===1032)return 36248;if(r===1033)return 36249;if(r===sn||r===mn||r===vi||r===gi){if((a=i.get("WEBGL_compressed_texture_s3tc"))===null)return null;if(r===sn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===yi||r===cn||r===Un||r===ki){if((a=i.get("WEBGL_compressed_texture_pvrtc"))===null)return null;if(r===yi)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cn)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Un)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ki)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===36196)return(a=i.get("WEBGL_compressed_texture_etc1"))!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===br||r===_r)&&(a=i.get("WEBGL_compressed_texture_etc"))!==null){if(r===br)return a.COMPRESSED_RGB8_ETC2;if(r===_r)return a.COMPRESSED_RGBA8_ETC2_EAC}return r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821||r===37840||r===37841||r===37842||r===37843||r===37844||r===37845||r===37846||r===37847||r===37848||r===37849||r===37850||r===37851||r===37852||r===37853?(a=i.get("WEBGL_compressed_texture_astc"))!==null?r:null:r===36492?(a=i.get("EXT_texture_compression_bptc"))!==null?r:null:r===It?n?34042:(a=i.get("WEBGL_depth_texture"))!==null?a.UNSIGNED_INT_24_8_WEBGL:null:void 0}}}function vo(e){Et.call(this),this.cameras=e||[]}function Pi(){ye.call(this),this.type="Group"}function Ta(){this._targetRay=null,this._grip=null,this._hand=null}function Cl(e,i){var t=this,n=null,r=1,a=null,o="local-floor",s=null,c=[],l=new Map,u=new Et;u.layers.enable(1),u.viewport=new de;var h=new Et;h.layers.enable(2),h.viewport=new de;var p=[u,h],d=new vo;d.layers.enable(1),d.layers.enable(2);var f=null,g=null;function m(C){var T=l.get(C.inputSource);T&&T.dispatchEvent({type:C.type,data:C.inputSource})}function y(){l.forEach(function(C,T){C.disconnect(T)}),l.clear(),e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),P.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}function _(C){a=C,P.setContext(n),P.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}function x(C){for(var T=n.inputSources,D=0;D<c.length;D++)l.set(T[D],c[D]);for(var N=0;N<C.removed.length;N++){var F=C.removed[N],k=l.get(F);k&&(k.dispatchEvent({type:"disconnected",data:F}),l.delete(F))}for(var B=0;B<C.added.length;B++){var W=C.added[B],Q=l.get(W);Q&&Q.dispatchEvent({type:"connected",data:W})}}this.enabled=!1,this.isPresenting=!1,this.getController=function(C){var T=c[C];return T===void 0&&(T=new Ta,c[C]=T),T.getTargetRaySpace()},this.getControllerGrip=function(C){var T=c[C];return T===void 0&&(T=new Ta,c[C]=T),T.getGripSpace()},this.getHand=function(C){var T=c[C];return T===void 0&&(T=new Ta,c[C]=T),T.getHandSpace()},this.setFramebufferScaleFactor=function(C){r=C,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return n},this.setSession=function(C){if((n=C)!==null){n.addEventListener("select",m),n.addEventListener("selectstart",m),n.addEventListener("selectend",m),n.addEventListener("squeeze",m),n.addEventListener("squeezestart",m),n.addEventListener("squeezeend",m),n.addEventListener("end",y);var T=i.getContextAttributes();T.xrCompatible!==!0&&i.makeXRCompatible();var D={antialias:T.antialias,alpha:T.alpha,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r},N=new XRWebGLLayer(n,i,D);n.updateRenderState({baseLayer:N}),n.requestReferenceSpace(o).then(_),n.addEventListener("inputsourceschange",x)}};var b=new M,w=new M;function E(C,T){T===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(T.matrixWorld,C.matrix),C.matrixWorldInverse.getInverse(C.matrixWorld)}this.getCamera=function(C){d.near=h.near=u.near=C.near,d.far=h.far=u.far=C.far,f===d.near&&g===d.far||(n.updateRenderState({depthNear:d.near,depthFar:d.far}),f=d.near,g=d.far);var T=C.parent,D=d.cameras;E(d,T);for(var N=0;N<D.length;N++)E(D[N],T);C.matrixWorld.copy(d.matrixWorld);for(var F=C.children,k=0,B=F.length;k<B;k++)F[k].updateMatrixWorld(!0);return D.length===2?function(W,Q,G){b.setFromMatrixPosition(Q.matrixWorld),w.setFromMatrixPosition(G.matrixWorld);var H=b.distanceTo(w),V=Q.projectionMatrix.elements,ee=G.projectionMatrix.elements,he=V[14]/(V[10]-1),we=V[14]/(V[10]+1),R=(V[9]+1)/V[5],L=(V[9]-1)/V[5],j=(V[8]-1)/V[0],z=(ee[8]+1)/ee[0],J=he*j,O=he*z,K=H/(-j+z),ie=K*-j;Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ie),W.translateZ(K),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.getInverse(W.matrixWorld);var ce=he+K,te=we+K,me=J-ie,Se=O+(H-ie),We=R*we/te*ce,Qe=L*we/te*ce;W.projectionMatrix.makePerspective(me,Se,We,Qe,ce,te)}(d,u,h):d.projectionMatrix.copy(u.projectionMatrix),d};var S=null,P=new ol;P.setAnimationLoop(function(C,T){if((s=T.getViewerPose(a))!==null){var D=s.views,N=n.renderState.baseLayer;e.setFramebuffer(N.framebuffer);var F=!1;D.length!==d.cameras.length&&(d.cameras.length=0,F=!0);for(var k=0;k<D.length;k++){var B=D[k],W=N.getViewport(B),Q=p[k];Q.matrix.fromArray(B.transform.matrix),Q.projectionMatrix.fromArray(B.projectionMatrix),Q.viewport.set(W.x,W.y,W.width,W.height),k===0&&d.matrix.copy(Q.matrix),F===!0&&d.cameras.push(Q)}}for(var G=n.inputSources,H=0;H<c.length;H++){var V=c[H],ee=G[H];V.update(ee,T,a)}S&&S(C,T)}),this.setAnimationLoop=function(C){S=C},this.dispose=function(){}}function Nd(e){function i(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map),r.alphaMap&&(n.alphaMap.value=r.alphaMap),r.specularMap&&(n.specularMap.value=r.specularMap);var a,o,s=e.get(r).envMap;if(s){n.envMap.value=s,n.flipEnvMap.value=s.isCubeTexture&&s._needsFlipEnvMap?-1:1,n.reflectivity.value=r.reflectivity,n.refractionRatio.value=r.refractionRatio;var c=e.get(s).__maxMipLevel;c!==void 0&&(n.maxMipLevel.value=c)}r.lightMap&&(n.lightMap.value=r.lightMap,n.lightMapIntensity.value=r.lightMapIntensity),r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity),r.map?a=r.map:r.specularMap?a=r.specularMap:r.displacementMap?a=r.displacementMap:r.normalMap?a=r.normalMap:r.bumpMap?a=r.bumpMap:r.roughnessMap?a=r.roughnessMap:r.metalnessMap?a=r.metalnessMap:r.alphaMap?a=r.alphaMap:r.emissiveMap?a=r.emissiveMap:r.clearcoatMap?a=r.clearcoatMap:r.clearcoatNormalMap?a=r.clearcoatNormalMap:r.clearcoatRoughnessMap&&(a=r.clearcoatRoughnessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),n.uvTransform.value.copy(a.matrix)),r.aoMap?o=r.aoMap:r.lightMap&&(o=r.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),n.uv2Transform.value.copy(o.matrix))}function t(n,r){n.roughness.value=r.roughness,n.metalness.value=r.metalness,r.roughnessMap&&(n.roughnessMap.value=r.roughnessMap),r.metalnessMap&&(n.metalnessMap.value=r.metalnessMap),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap),r.bumpMap&&(n.bumpMap.value=r.bumpMap,n.bumpScale.value=r.bumpScale,r.side===1&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,n.normalScale.value.copy(r.normalScale),r.side===1&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),e.get(r).envMap&&(n.envMapIntensity.value=r.envMapIntensity)}return{refreshFogUniforms:function(n,r){n.fogColor.value.copy(r.color),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,a,o){r.isMeshBasicMaterial?i(n,r):r.isMeshLambertMaterial?(i(n,r),function(s,c){c.emissiveMap&&(s.emissiveMap.value=c.emissiveMap)}(n,r)):r.isMeshToonMaterial?(i(n,r),function(s,c){c.gradientMap&&(s.gradientMap.value=c.gradientMap),c.emissiveMap&&(s.emissiveMap.value=c.emissiveMap),c.bumpMap&&(s.bumpMap.value=c.bumpMap,s.bumpScale.value=c.bumpScale,c.side===1&&(s.bumpScale.value*=-1)),c.normalMap&&(s.normalMap.value=c.normalMap,s.normalScale.value.copy(c.normalScale),c.side===1&&s.normalScale.value.negate()),c.displacementMap&&(s.displacementMap.value=c.displacementMap,s.displacementScale.value=c.displacementScale,s.displacementBias.value=c.displacementBias)}(n,r)):r.isMeshPhongMaterial?(i(n,r),function(s,c){s.specular.value.copy(c.specular),s.shininess.value=Math.max(c.shininess,1e-4),c.emissiveMap&&(s.emissiveMap.value=c.emissiveMap),c.bumpMap&&(s.bumpMap.value=c.bumpMap,s.bumpScale.value=c.bumpScale,c.side===1&&(s.bumpScale.value*=-1)),c.normalMap&&(s.normalMap.value=c.normalMap,s.normalScale.value.copy(c.normalScale),c.side===1&&s.normalScale.value.negate()),c.displacementMap&&(s.displacementMap.value=c.displacementMap,s.displacementScale.value=c.displacementScale,s.displacementBias.value=c.displacementBias)}(n,r)):r.isMeshStandardMaterial?(i(n,r),r.isMeshPhysicalMaterial?function(s,c){t(s,c),s.reflectivity.value=c.reflectivity,s.clearcoat.value=c.clearcoat,s.clearcoatRoughness.value=c.clearcoatRoughness,c.sheen&&s.sheen.value.copy(c.sheen),c.clearcoatMap&&(s.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(s.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(s.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),s.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===1&&s.clearcoatNormalScale.value.negate()),s.transmission.value=c.transmission,c.transmissionMap&&(s.transmissionMap.value=c.transmissionMap)}(n,r):t(n,r)):r.isMeshMatcapMaterial?(i(n,r),function(s,c){c.matcap&&(s.matcap.value=c.matcap),c.bumpMap&&(s.bumpMap.value=c.bumpMap,s.bumpScale.value=c.bumpScale,c.side===1&&(s.bumpScale.value*=-1)),c.normalMap&&(s.normalMap.value=c.normalMap,s.normalScale.value.copy(c.normalScale),c.side===1&&s.normalScale.value.negate()),c.displacementMap&&(s.displacementMap.value=c.displacementMap,s.displacementScale.value=c.displacementScale,s.displacementBias.value=c.displacementBias)}(n,r)):r.isMeshDepthMaterial?(i(n,r),function(s,c){c.displacementMap&&(s.displacementMap.value=c.displacementMap,s.displacementScale.value=c.displacementScale,s.displacementBias.value=c.displacementBias)}(n,r)):r.isMeshDistanceMaterial?(i(n,r),function(s,c){c.displacementMap&&(s.displacementMap.value=c.displacementMap,s.displacementScale.value=c.displacementScale,s.displacementBias.value=c.displacementBias),s.referencePosition.value.copy(c.referencePosition),s.nearDistance.value=c.nearDistance,s.farDistance.value=c.farDistance}(n,r)):r.isMeshNormalMaterial?(i(n,r),function(s,c){c.bumpMap&&(s.bumpMap.value=c.bumpMap,s.bumpScale.value=c.bumpScale,c.side===1&&(s.bumpScale.value*=-1)),c.normalMap&&(s.normalMap.value=c.normalMap,s.normalScale.value.copy(c.normalScale),c.side===1&&s.normalScale.value.negate()),c.displacementMap&&(s.displacementMap.value=c.displacementMap,s.displacementScale.value=c.displacementScale,s.displacementBias.value=c.displacementBias)}(n,r)):r.isLineBasicMaterial?(function(s,c){s.diffuse.value.copy(c.color),s.opacity.value=c.opacity}(n,r),r.isLineDashedMaterial&&function(s,c){s.dashSize.value=c.dashSize,s.totalSize.value=c.dashSize+c.gapSize,s.scale.value=c.scale}(n,r)):r.isPointsMaterial?function(s,c,l,u){s.diffuse.value.copy(c.color),s.opacity.value=c.opacity,s.size.value=c.size*l,s.scale.value=.5*u,c.map&&(s.map.value=c.map),c.alphaMap&&(s.alphaMap.value=c.alphaMap);var h;c.map?h=c.map:c.alphaMap&&(h=c.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),s.uvTransform.value.copy(h.matrix))}(n,r,a,o):r.isSpriteMaterial?function(s,c){s.diffuse.value.copy(c.color),s.opacity.value=c.opacity,s.rotation.value=c.rotation,c.map&&(s.map.value=c.map),c.alphaMap&&(s.alphaMap.value=c.alphaMap);var l;c.map?l=c.map:c.alphaMap&&(l=c.alphaMap),l!==void 0&&(l.matrixAutoUpdate===!0&&l.updateMatrix(),s.uvTransform.value.copy(l.matrix))}(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function Ea(e){var i=(e=e||{}).canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),t=e.context!==void 0?e.context:null,n=e.alpha!==void 0&&e.alpha,r=e.depth===void 0||e.depth,a=e.stencil===void 0||e.stencil,o=e.antialias!==void 0&&e.antialias,s=e.premultipliedAlpha===void 0||e.premultipliedAlpha,c=e.preserveDrawingBuffer!==void 0&&e.preserveDrawingBuffer,l=e.powerPreference!==void 0?e.powerPreference:"default",u=e.failIfMajorPerformanceCaveat!==void 0&&e.failIfMajorPerformanceCaveat,h=null,p=null;this.domElement=i,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Hn,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var d=this,f=!1,g=null,m=0,y=0,_=null,x=null,b=-1,w=null,E=null,S=new de,P=new de,C=null,T=i.width,D=i.height,N=1,F=null,k=null,B=new de(0,0,T,D),W=new de(0,0,T,D),Q=!1,G=new wa,H=!1,V=!1,ee=new Ne,he=new M,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function R(){return _===null?N:1}var L,j,z,J,O,K,ie,ce,te,me,Se,We,Qe,Ce,ke,Je,$t,Ot,Nt,kt,At,re=t;function pi(A,Y){for(var U=0;U<A.length;U++){var Z=A[U],oe=i.getContext(Z,Y);if(oe!==null)return oe}return null}try{var Xc={alpha:n,depth:r,stencil:a,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(i.addEventListener("webglcontextlost",gr,!1),i.addEventListener("webglcontextrestored",ms,!1),re===null){var aa=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&aa.shift(),(re=pi(aa,Xc))===null)throw pi(aa)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}re.getShaderPrecisionFormat===void 0&&(re.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}function vr(){L=new Eh(re),(j=new Mh(re,L,e)).isWebGL2===!1&&(L.get("WEBGL_depth_texture"),L.get("OES_texture_float"),L.get("OES_texture_half_float"),L.get("OES_texture_half_float_linear"),L.get("OES_standard_derivatives"),L.get("OES_element_index_uint"),L.get("OES_vertex_array_object"),L.get("ANGLE_instanced_arrays")),L.get("OES_texture_float_linear"),kt=new Rl(re,L,j),(z=new Pd(re,L,j)).scissor(P.copy(W).multiplyScalar(N).floor()),z.viewport(S.copy(B).multiplyScalar(N).floor()),J=new Rh(re),O=new wd,K=new Od(re,L,z,O,j,kt,J),ie=new Th(d),ce=new xh(re,j),At=new _h(re,L,ce,j),te=new Ah(re,ce,J,At),me=new Nh(re,te,ce,J),$t=new Oh(re),ke=new Sh(O),Se=new _d(d,ie,L,j,At,ke),We=new Nd(O),Qe=new Td(O),Ce=new Cd,Je=new bh(d,ie,z,me,s),Ot=new wh(re,L,J,j),Nt=new Lh(re,L,J,j),J.programs=Se.programs,d.capabilities=j,d.extensions=L,d.properties=O,d.renderLists=Qe,d.state=z,d.info=J}vr();var Kn=new Cl(d,re);this.xr=Kn;var Za=new Ll(d,me,j.maxTextureSize);function gr(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ms(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1,vr()}function Ja(A){var Y=A.target;Y.removeEventListener("dispose",Ja),function(U){Qa(U),O.remove(U)}(Y)}function Qa(A){var Y=O.get(A).program;Y!==void 0&&Se.releaseProgram(Y)}this.shadowMap=Za,this.getContext=function(){return re},this.getContextAttributes=function(){return re.getContextAttributes()},this.forceContextLoss=function(){var A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){var A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(T,D,!1))},this.getSize=function(A){return A===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),A=new I),A.set(T,D)},this.setSize=function(A,Y,U){Kn.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(T=A,D=Y,i.width=Math.floor(A*N),i.height=Math.floor(Y*N),U!==!1&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y))},this.getDrawingBufferSize=function(A){return A===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),A=new I),A.set(T*N,D*N).floor()},this.setDrawingBufferSize=function(A,Y,U){T=A,D=Y,N=U,i.width=Math.floor(A*U),i.height=Math.floor(Y*U),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),A=new de),A.copy(S)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,Y,U,Z){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,Y,U,Z),z.viewport(S.copy(B).multiplyScalar(N).floor())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,Y,U,Z){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,Y,U,Z),z.scissor(P.copy(W).multiplyScalar(N).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(A){z.setScissorTest(Q=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(){return Je.getClearColor()},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(A,Y,U){var Z=0;(A===void 0||A)&&(Z|=16384),(Y===void 0||Y)&&(Z|=256),(U===void 0||U)&&(Z|=1024),re.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gr,!1),i.removeEventListener("webglcontextrestored",ms,!1),Qe.dispose(),Ce.dispose(),O.dispose(),ie.dispose(),me.dispose(),At.dispose(),Kn.dispose(),$n.stop()},this.renderBufferImmediate=function(A,Y){At.initAttributes();var U=O.get(A);A.hasPositions&&!U.position&&(U.position=re.createBuffer()),A.hasNormals&&!U.normal&&(U.normal=re.createBuffer()),A.hasUvs&&!U.uv&&(U.uv=re.createBuffer()),A.hasColors&&!U.color&&(U.color=re.createBuffer());var Z=Y.getAttributes();A.hasPositions&&(re.bindBuffer(34962,U.position),re.bufferData(34962,A.positionArray,35048),At.enableAttribute(Z.position),re.vertexAttribPointer(Z.position,3,5126,!1,0,0)),A.hasNormals&&(re.bindBuffer(34962,U.normal),re.bufferData(34962,A.normalArray,35048),At.enableAttribute(Z.normal),re.vertexAttribPointer(Z.normal,3,5126,!1,0,0)),A.hasUvs&&(re.bindBuffer(34962,U.uv),re.bufferData(34962,A.uvArray,35048),At.enableAttribute(Z.uv),re.vertexAttribPointer(Z.uv,2,5126,!1,0,0)),A.hasColors&&(re.bindBuffer(34962,U.color),re.bufferData(34962,A.colorArray,35048),At.enableAttribute(Z.color),re.vertexAttribPointer(Z.color,3,5126,!1,0,0)),At.disableUnusedAttributes(),re.drawArrays(4,0,A.count),A.count=0},this.renderBufferDirect=function(A,Y,U,Z,oe,Oe){Y===null&&(Y=we);var Ge=oe.isMesh&&oe.matrixWorld.determinant()<0,Ue=Ka(A,Y,Z,oe);z.setMaterial(Z,Ge);var Re=U.index,ht=U.attributes.position;if(Re===null){if(ht===void 0||ht.count===0)return}else if(Re.count===0)return;var xt,je=1;Z.wireframe===!0&&(Re=te.getWireframeAttribute(U),je=2),(Z.morphTargets||Z.morphNormals)&&$t.update(oe,U,Z,Ue),At.setup(oe,Z,Ue,U,Re);var ve=Ot;Re!==null&&(xt=ce.get(Re),(ve=Nt).setIndex(xt));var qt=Re!==null?Re.count:ht.count,Mt=U.drawRange.start*je,lt=U.drawRange.count*je,Xt=Oe!==null?Oe.start*je:0,Ae=Oe!==null?Oe.count*je:1/0,Ie=Math.max(Mt,Xt),qe=Math.min(qt,Mt+lt,Xt+Ae)-1,Be=Math.max(0,qe-Ie+1);if(Be!==0){if(oe.isMesh)Z.wireframe===!0?(z.setLineWidth(Z.wireframeLinewidth*R()),ve.setMode(1)):ve.setMode(4);else if(oe.isLine){var Xe=Z.linewidth;Xe===void 0&&(Xe=1),z.setLineWidth(Xe*R()),oe.isLineSegments?ve.setMode(1):oe.isLineLoop?ve.setMode(2):ve.setMode(3)}else oe.isPoints?ve.setMode(0):oe.isSprite&&ve.setMode(4);if(oe.isInstancedMesh)ve.renderInstances(Ie,Be,oe.count);else if(U.isInstancedBufferGeometry){var Ye=Math.min(U.instanceCount,U._maxInstanceCount);ve.renderInstances(Ie,Be,Ye)}else ve.render(Ie,Be)}},this.compile=function(A,Y){(p=Ce.get(A,Y)).init(),A.traverse(function(Z){Z.isLight&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights(Y);var U=new WeakMap;A.traverse(function(Z){var oe=Z.material;if(oe)if(Array.isArray(oe))for(var Oe=0;Oe<oe.length;Oe++){var Ge=oe[Oe];U.has(Ge)===!1&&(ei(Ge,A,Z),U.set(Ge))}else U.has(oe)===!1&&(ei(oe,A,Z),U.set(oe))})};var fi=null,$n=new ol;function mi(A,Y,U,Z){if(A.visible!==!1){if(A.layers.test(Y.layers)){if(A.isGroup)U=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){Z&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);var oe=me.update(A),Oe=A.material;Oe.visible&&h.push(A,oe,Oe,U,he.z,null)}}else if(A.isImmediateRenderObject)Z&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee),h.push(A,null,A.material,U,he.z,null);else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==J.render.frame&&(A.skeleton.update(),A.skeleton.frame=J.render.frame),!A.frustumCulled||G.intersectsObject(A))){Z&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);var Ge=me.update(A),Ue=A.material;if(Array.isArray(Ue))for(var Re=Ge.groups,ht=0,xt=Re.length;ht<xt;ht++){var je=Re[ht],ve=Ue[je.materialIndex];ve&&ve.visible&&h.push(A,Ge,ve,U,he.z,je)}else Ue.visible&&h.push(A,Ge,Ue,U,he.z,null)}}for(var qt=A.children,Mt=0,lt=qt.length;Mt<lt;Mt++)mi(qt[Mt],Y,U,Z)}}function Fi(A,Y,U){for(var Z=Y.isScene===!0?Y.overrideMaterial:null,oe=0,Oe=A.length;oe<Oe;oe++){var Ge=A[oe],Ue=Ge.object,Re=Ge.geometry,ht=Z===null?Ge.material:Z,xt=Ge.group;if(U.isArrayCamera){E=U;for(var je=U.cameras,ve=0,qt=je.length;ve<qt;ve++){var Mt=je[ve];Ue.layers.test(Mt.layers)&&(z.viewport(S.copy(Mt.viewport)),p.setupLights(Mt),yr(Ue,Y,Mt,Re,ht,xt))}}else E=null,yr(Ue,Y,U,Re,ht,xt)}}function yr(A,Y,U,Z,oe,Oe){if(A.onBeforeRender(d,Y,U,Z,oe,Oe),p=Ce.get(Y,E||U),A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),A.isImmediateRenderObject){var Ge=Ka(U,Y,oe,A);z.setMaterial(oe),At.reset(),function(Ue,Re){Ue.render(function(ht){d.renderBufferImmediate(ht,Re)})}(A,Ge)}else d.renderBufferDirect(U,Y,Z,oe,A,Oe);A.onAfterRender(d,Y,U,Z,oe,Oe),p=Ce.get(Y,E||U)}function ei(A,Y,U){Y.isScene!==!0&&(Y=we);var Z=O.get(A),oe=p.state.lights,Oe=p.state.shadowsArray,Ge=oe.state.version,Ue=Se.getParameters(A,oe.state,Oe,Y,U),Re=Se.getProgramCacheKey(Ue),ht=Z.program,xt=!0;if(ht===void 0)A.addEventListener("dispose",Ja);else if(ht.cacheKey!==Re)Qa(A);else if(Z.lightsStateVersion!==Ge)xt=!1;else{if(Ue.shaderID!==void 0){var je=A.isMeshStandardMaterial?Y.environment:null;return void(Z.envMap=ie.get(A.envMap||je))}xt=!1}xt&&(Ue.uniforms=Se.getUniforms(A),A.onBeforeCompile(Ue,d),ht=Se.acquireProgram(Ue,Re),Z.program=ht,Z.uniforms=Ue.uniforms,Z.outputEncoding=Ue.outputEncoding);var ve=Z.uniforms;(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Z.numClippingPlanes=ke.numPlanes,Z.numIntersection=ke.numIntersection,ve.clippingPlanes=ke.uniform),Z.environment=A.isMeshStandardMaterial?Y.environment:null,Z.fog=Y.fog,Z.envMap=ie.get(A.envMap||Z.environment),Z.needsLights=function(lt){return lt.isMeshLambertMaterial||lt.isMeshToonMaterial||lt.isMeshPhongMaterial||lt.isMeshStandardMaterial||lt.isShadowMaterial||lt.isShaderMaterial&&lt.lights===!0}(A),Z.lightsStateVersion=Ge,Z.needsLights&&(ve.ambientLightColor.value=oe.state.ambient,ve.lightProbe.value=oe.state.probe,ve.directionalLights.value=oe.state.directional,ve.directionalLightShadows.value=oe.state.directionalShadow,ve.spotLights.value=oe.state.spot,ve.spotLightShadows.value=oe.state.spotShadow,ve.rectAreaLights.value=oe.state.rectArea,ve.ltc_1.value=oe.state.rectAreaLTC1,ve.ltc_2.value=oe.state.rectAreaLTC2,ve.pointLights.value=oe.state.point,ve.pointLightShadows.value=oe.state.pointShadow,ve.hemisphereLights.value=oe.state.hemi,ve.directionalShadowMap.value=oe.state.directionalShadowMap,ve.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,ve.spotShadowMap.value=oe.state.spotShadowMap,ve.spotShadowMatrix.value=oe.state.spotShadowMatrix,ve.pointShadowMap.value=oe.state.pointShadowMap,ve.pointShadowMatrix.value=oe.state.pointShadowMatrix);var qt=Z.program.getUniforms(),Mt=Li.seqWithValue(qt.seq,ve);Z.uniformsList=Mt}function Ka(A,Y,U,Z){Y.isScene!==!0&&(Y=we),K.resetTextureUnits();var oe=Y.fog,Oe=U.isMeshStandardMaterial?Y.environment:null,Ge=_===null?d.outputEncoding:_.texture.encoding,Ue=ie.get(U.envMap||Oe),Re=O.get(U),ht=p.state.lights;if(H===!0&&(V===!0||A!==w)){var xt=A===w&&U.id===b;ke.setState(U,A,xt)}U.version===Re.__version?U.fog&&Re.fog!==oe||Re.environment!==Oe||Re.needsLights&&Re.lightsStateVersion!==ht.state.version?ei(U,Y,Z):Re.numClippingPlanes===void 0||Re.numClippingPlanes===ke.numPlanes&&Re.numIntersection===ke.numIntersection?(Re.outputEncoding!==Ge||Re.envMap!==Ue)&&ei(U,Y,Z):ei(U,Y,Z):(ei(U,Y,Z),Re.__version=U.version);var je,ve,qt=!1,Mt=!1,lt=!1,Xt=Re.program,Ae=Xt.getUniforms(),Ie=Re.uniforms;if(z.useProgram(Xt.program)&&(qt=!0,Mt=!0,lt=!0),U.id!==b&&(b=U.id,Mt=!0),qt||w!==A){if(Ae.setValue(re,"projectionMatrix",A.projectionMatrix),j.logarithmicDepthBuffer&&Ae.setValue(re,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),w!==A&&(w=A,Mt=!0,lt=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){var qe=Ae.map.cameraPosition;qe!==void 0&&qe.setValue(re,he.setFromMatrixPosition(A.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ae.setValue(re,"isOrthographic",A.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||U.skinning)&&Ae.setValue(re,"viewMatrix",A.matrixWorldInverse)}if(U.skinning){Ae.setOptional(re,Z,"bindMatrix"),Ae.setOptional(re,Z,"bindMatrixInverse");var Be=Z.skeleton;if(Be){var Xe=Be.bones;if(j.floatVertexTextures){if(Be.boneTexture===void 0){var Ye=Math.sqrt(4*Xe.length);Ye=be.ceilPowerOfTwo(Ye),Ye=Math.max(Ye,4);var Lt=new Float32Array(Ye*Ye*4);Lt.set(Be.boneMatrices);var Gt=new tr(Lt,Ye,Ye,St,Rt);Be.boneMatrices=Lt,Be.boneTexture=Gt,Be.boneTextureSize=Ye}Ae.setValue(re,"boneTexture",Be.boneTexture,K),Ae.setValue(re,"boneTextureSize",Be.boneTextureSize)}else Ae.setOptional(re,Be,"boneMatrices")}}return(Mt||Re.receiveShadow!==Z.receiveShadow)&&(Re.receiveShadow=Z.receiveShadow,Ae.setValue(re,"receiveShadow",Z.receiveShadow)),Mt&&(Ae.setValue(re,"toneMappingExposure",d.toneMappingExposure),Re.needsLights&&(ve=lt,(je=Ie).ambientLightColor.needsUpdate=ve,je.lightProbe.needsUpdate=ve,je.directionalLights.needsUpdate=ve,je.directionalLightShadows.needsUpdate=ve,je.pointLights.needsUpdate=ve,je.pointLightShadows.needsUpdate=ve,je.spotLights.needsUpdate=ve,je.spotLightShadows.needsUpdate=ve,je.rectAreaLights.needsUpdate=ve,je.hemisphereLights.needsUpdate=ve),oe&&U.fog&&We.refreshFogUniforms(Ie,oe),We.refreshMaterialUniforms(Ie,U,N,D),Li.upload(re,Re.uniformsList,Ie,K)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Li.upload(re,Re.uniformsList,Ie,K),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ae.setValue(re,"center",Z.center),Ae.setValue(re,"modelViewMatrix",Z.modelViewMatrix),Ae.setValue(re,"normalMatrix",Z.normalMatrix),Ae.setValue(re,"modelMatrix",Z.matrixWorld),Xt}$n.setAnimationLoop(function(A){Kn.isPresenting||fi&&fi(A)}),typeof window<"u"&&$n.setContext(window),this.setAnimationLoop=function(A){fi=A,Kn.setAnimationLoop(A),A===null?$n.stop():$n.start()},this.render=function(A,Y){var U,Z;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),U=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),Z=arguments[3]),Y===void 0||Y.isCamera===!0){if(f!==!0){At.resetDefaultState(),b=-1,w=null,A.autoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.updateMatrixWorld(),Kn.enabled===!0&&Kn.isPresenting===!0&&(Y=Kn.getCamera(Y)),A.isScene===!0&&A.onBeforeRender(d,A,Y,U||_),(p=Ce.get(A,Y)).init(),ee.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G.setFromProjectionMatrix(ee),V=this.localClippingEnabled,H=ke.init(this.clippingPlanes,V,Y),(h=Qe.get(A,Y)).init(),mi(A,Y,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(F,k),H===!0&&ke.beginShadows();var oe=p.state.shadowsArray;Za.render(oe,A,Y),p.setupLights(Y),H===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),U!==void 0&&this.setRenderTarget(U),Je.render(h,A,Y,Z);var Oe=h.opaque,Ge=h.transparent;Oe.length>0&&Fi(Oe,A,Y),Ge.length>0&&Fi(Ge,A,Y),A.isScene===!0&&A.onAfterRender(d,A,Y),_!==null&&(K.updateRenderTargetMipmap(_),K.updateMultisampleRenderTarget(_)),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1),h=null,p=null}}else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")},this.setFramebuffer=function(A){g!==A&&_===null&&re.bindFramebuffer(36160,A),g=A},this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return y},this.getRenderList=function(){return h},this.setRenderList=function(A){h=A},this.getRenderState=function(){return p},this.setRenderState=function(A){p=A},this.getRenderTarget=function(){return _},this.setRenderTarget=function(A,Y,U){Y===void 0&&(Y=0),U===void 0&&(U=0),_=A,m=Y,y=U,A&&O.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A);var Z=g,oe=!1;if(A){var Oe=O.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Z=Oe[Y],oe=!0):Z=A.isWebGLMultisampleRenderTarget?O.get(A).__webglMultisampledFramebuffer:Oe,S.copy(A.viewport),P.copy(A.scissor),C=A.scissorTest}else S.copy(B).multiplyScalar(N).floor(),P.copy(W).multiplyScalar(N).floor(),C=Q;if(x!==Z&&(re.bindFramebuffer(36160,Z),x=Z),z.viewport(S),z.scissor(P),z.setScissorTest(C),oe){var Ge=O.get(A.texture);re.framebufferTexture2D(36160,36064,34069+Y,Ge.__webglTexture,U)}},this.readRenderTargetPixels=function(A,Y,U,Z,oe,Oe,Ge){if(A&&A.isWebGLRenderTarget){var Ue=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ue=Ue[Ge]),Ue){var Re=!1;Ue!==x&&(re.bindFramebuffer(36160,Ue),Re=!0);try{var ht=A.texture,xt=ht.format,je=ht.type;if(xt!==St&&kt.convert(xt)!==re.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!(je===ze||kt.convert(je)===re.getParameter(35738)||je===Rt&&(j.isWebGL2||L.get("OES_texture_float")||L.get("WEBGL_color_buffer_float"))||je===on&&(j.isWebGL2?L.get("EXT_color_buffer_float"):L.get("EXT_color_buffer_half_float"))))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");re.checkFramebufferStatus(36160)===36053?Y>=0&&Y<=A.width-Z&&U>=0&&U<=A.height-oe&&re.readPixels(Y,U,Z,oe,kt.convert(xt),kt.convert(je),Oe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Re&&re.bindFramebuffer(36160,x)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")},this.copyFramebufferToTexture=function(A,Y,U){U===void 0&&(U=0);var Z=Math.pow(2,-U),oe=Math.floor(Y.image.width*Z),Oe=Math.floor(Y.image.height*Z),Ge=kt.convert(Y.format);K.setTexture2D(Y,0),re.copyTexImage2D(3553,U,Ge,A.x,A.y,oe,Oe,0),z.unbindTexture()},this.copyTextureToTexture=function(A,Y,U,Z){Z===void 0&&(Z=0);var oe=Y.image.width,Oe=Y.image.height,Ge=kt.convert(U.format),Ue=kt.convert(U.type);K.setTexture2D(U,0),re.pixelStorei(37440,U.flipY),re.pixelStorei(37441,U.premultiplyAlpha),re.pixelStorei(3317,U.unpackAlignment),Y.isDataTexture?re.texSubImage2D(3553,Z,A.x,A.y,oe,Oe,Ge,Ue,Y.image.data):Y.isCompressedTexture?re.compressedTexSubImage2D(3553,Z,A.x,A.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ge,Y.mipmaps[0].data):re.texSubImage2D(3553,Z,A.x,A.y,Ge,Ue,Y.image),Z===0&&U.generateMipmaps&&re.generateMipmap(3553),z.unbindTexture()},this.initTexture=function(A){K.setTexture2D(A,0),z.unbindTexture()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Bs(e){Ea.call(this,e)}vo.prototype=Object.assign(Object.create(Et.prototype),{constructor:vo,isArrayCamera:!0}),Pi.prototype=Object.assign(Object.create(ye.prototype),{constructor:Pi,isGroup:!0}),Object.assign(Ta.prototype,{constructor:Ta,getHandSpace:function(){if(this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(var e=0;e<=window.XRHand.LITTLE_PHALANX_TIP;e++){var i=new Pi;i.matrixAutoUpdate=!1,i.visible=!1,this._hand.joints.push(i),this._hand.add(i)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(e,i,t){var n=null,r=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e)if(c&&e.hand){a=!0;for(var l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(e.hand[l]){var u=i.getJointPose(e.hand[l],t),h=c.joints[l];u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=u.radius),h.visible=u!==null;var p=c.joints[window.XRHand.INDEX_PHALANX_TIP],d=c.joints[window.XRHand.THUMB_PHALANX_TIP],f=p.position.distanceTo(d.position);c.inputState.pinching&&f>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}}else o!==null&&(n=i.getPose(e.targetRaySpace,t))!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale)),s!==null&&e.gripSpace&&(r=i.getPose(e.gripSpace,t))!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale));return o!==null&&(o.visible=n!==null),s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),this}}),Object.assign(Cl.prototype,Ct.prototype),Bs.prototype=Object.assign(Object.create(Ea.prototype),{constructor:Bs,isWebGL1Renderer:!0});var Pl=function(){function e(t,n){Object.defineProperty(this,"isFogExp2",{value:!0}),this.name="",this.color=new pe(t),this.density=n!==void 0?n:25e-5}var i=e.prototype;return i.clone=function(){return new e(this.color,this.density)},i.toJSON=function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}},e}(),Ol=function(){function e(t,n,r){Object.defineProperty(this,"isFog",{value:!0}),this.name="",this.color=new pe(t),this.near=n!==void 0?n:1,this.far=r!==void 0?r:1e3}var i=e.prototype;return i.clone=function(){return new e(this.color,this.near,this.far)},i.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}},e}(),zs=function(e){function i(){var n;return n=e.call(this)||this,Object.defineProperty(q(n),"isScene",{value:!0}),n.type="Scene",n.background=null,n.environment=null,n.fog=null,n.overrideMaterial=null,n.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:q(n)})),n}ge(i,e);var t=i.prototype;return t.copy=function(n,r){return e.prototype.copy.call(this,n,r),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.autoUpdate=n.autoUpdate,this.matrixAutoUpdate=n.matrixAutoUpdate,this},t.toJSON=function(n){var r=e.prototype.toJSON.call(this,n);return this.background!==null&&(r.object.background=this.background.toJSON(n)),this.environment!==null&&(r.object.environment=this.environment.toJSON(n)),this.fog!==null&&(r.object.fog=this.fog.toJSON()),r},i}(ye);function dn(e,i){this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=nn,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=be.generateUUID()}Object.defineProperty(dn.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),Object.assign(dn.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,i,t){e*=this.stride,t*=i.stride;for(var n=0,r=this.stride;n<r;n++)this.array[e+n]=i.array[t+n];return this},set:function(e,i){return i===void 0&&(i=0),this.array.set(e,i),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=be.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);var i=new dn(new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),this.stride);return i.setUsage(this.usage),i},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=be.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var Wr,nr=new M;function Oi(e,i,t,n){this.name="",this.data=e,this.itemSize=i,this.offset=t,this.normalized=n===!0}function Ni(e){Ee.call(this),this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}Object.defineProperties(Oi.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(e){this.data.needsUpdate=e}}}),Object.assign(Oi.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(var i=0,t=this.data.count;i<t;i++)nr.x=this.getX(i),nr.y=this.getY(i),nr.z=this.getZ(i),nr.applyMatrix4(e),this.setXYZ(i,nr.x,nr.y,nr.z);return this},setX:function(e,i){return this.data.array[e*this.data.stride+this.offset]=i,this},setY:function(e,i){return this.data.array[e*this.data.stride+this.offset+1]=i,this},setZ:function(e,i){return this.data.array[e*this.data.stride+this.offset+2]=i,this},setW:function(e,i){return this.data.array[e*this.data.stride+this.offset+3]=i,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,i,t){return e=e*this.data.stride+this.offset,this.data.array[e+0]=i,this.data.array[e+1]=t,this},setXYZ:function(e,i,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=i,this.data.array[e+1]=t,this.data.array[e+2]=n,this},setXYZW:function(e,i,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=i,this.data.array[e+1]=t,this.data.array[e+2]=n,this.data.array[e+3]=r,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");for(var i=[],t=0;t<this.count;t++)for(var n=t*this.data.stride+this.offset,r=0;r<this.itemSize;r++)i.push(this.data.array[n+r]);return new Me(new this.array.constructor(i),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");for(var i=[],t=0;t<this.count;t++)for(var n=t*this.data.stride+this.offset,r=0;r<this.itemSize;r++)i.push(this.data.array[n+r]);return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}),Ni.prototype=Object.create(Ee.prototype),Ni.prototype.constructor=Ni,Ni.prototype.isSpriteMaterial=!0,Ni.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};var Aa=new M,jr=new M,qr=new M,Xr=new I,La=new I,Nl=new Ne,go=new M,Ra=new M,yo=new M,Dl=new I,Gs=new I,Il=new I;function Ca(e){if(ye.call(this),this.type="Sprite",Wr===void 0){Wr=new _e;var i=new dn(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new Oi(i,3,0,!1)),Wr.setAttribute("uv",new Oi(i,2,3,!1))}this.geometry=Wr,this.material=e!==void 0?e:new Ni,this.center=new I(.5,.5)}function xo(e,i,t,n,r,a){Xr.subVectors(e,t).addScalar(.5).multiply(n),r!==void 0?(La.x=a*Xr.x-r*Xr.y,La.y=r*Xr.x+a*Xr.y):La.copy(Xr),e.copy(i),e.x+=La.x,e.y+=La.y,e.applyMatrix4(Nl)}Ca.prototype=Object.assign(Object.create(ye.prototype),{constructor:Ca,isSprite:!0,raycast:function(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jr.setFromMatrixScale(this.matrixWorld),Nl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jr.multiplyScalar(-qr.z);var t,n,r=this.material.rotation;r!==0&&(n=Math.cos(r),t=Math.sin(r));var a=this.center;xo(go.set(-.5,-.5,0),qr,a,jr,t,n),xo(Ra.set(.5,-.5,0),qr,a,jr,t,n),xo(yo.set(.5,.5,0),qr,a,jr,t,n),Dl.set(0,0),Gs.set(1,0),Il.set(1,1);var o=e.ray.intersectTriangle(go,Ra,yo,!1,Aa);if(o!==null||(xo(Ra.set(-.5,.5,0),qr,a,jr,t,n),Gs.set(0,1),(o=e.ray.intersectTriangle(go,yo,Ra,!1,Aa))!==null)){var s=e.ray.origin.distanceTo(Aa);s<e.near||s>e.far||i.push({distance:s,point:Aa.clone(),uv:Tn.getUV(Aa,go,Ra,yo,Dl,Gs,Il,new I),face:null,object:this})}},copy:function(e){return ye.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});var Us,Fs,Hs,Bl,ks,bo=new M,zl=new M;function Pa(){ye.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}function _o(e,i){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),st.call(this,e,i),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne}Pa.prototype=Object.assign(Object.create(ye.prototype),{constructor:Pa,isLOD:!0,copy:function(e){ye.prototype.copy.call(this,e,!1);for(var i=e.levels,t=0,n=i.length;t<n;t++){var r=i[t];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,i){i===void 0&&(i=0),i=Math.abs(i);var t,n=this.levels;for(t=0;t<n.length&&!(i<n[t].distance);t++);return n.splice(t,0,{distance:i,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){var i=this.levels;if(i.length>0){var t,n;for(t=1,n=i.length;t<n&&!(e<i[t].distance);t++);return i[t-1].object}return null},raycast:function(e,i){if(this.levels.length>0){bo.setFromMatrixPosition(this.matrixWorld);var t=e.ray.origin.distanceTo(bo);this.getObjectForDistance(t).raycast(e,i)}},update:function(e){var i=this.levels;if(i.length>1){bo.setFromMatrixPosition(e.matrixWorld),zl.setFromMatrixPosition(this.matrixWorld);var t,n,r=bo.distanceTo(zl)/e.zoom;for(i[0].object.visible=!0,t=1,n=i.length;t<n&&r>=i[t].distance;t++)i[t-1].object.visible=!1,i[t].object.visible=!0;for(this._currentLevel=t-1;t<n;t++)i[t].object.visible=!1}},toJSON:function(e){var i=ye.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(i.object.autoUpdate=!1),i.object.levels=[];for(var t=this.levels,n=0,r=t.length;n<r;n++){var a=t[n];i.object.levels.push({object:a.object.uuid,distance:a.distance})}return i}}),_o.prototype=Object.assign(Object.create(st.prototype),{constructor:_o,isSkinnedMesh:!0,copy:function(e){return st.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,i){this.skeleton=e,i===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),i=this.matrixWorld),this.bindMatrix.copy(i),this.bindMatrixInverse.getInverse(i)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var e=new de,i=this.geometry.attributes.skinWeight,t=0,n=i.count;t<n;t++){e.x=i.getX(t),e.y=i.getY(t),e.z=i.getZ(t),e.w=i.getW(t);var r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),i.setXYZW(t,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){st.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:(Us=new M,Fs=new de,Hs=new de,Bl=new M,ks=new Ne,function(e,i){var t=this.skeleton,n=this.geometry;Fs.fromBufferAttribute(n.attributes.skinIndex,e),Hs.fromBufferAttribute(n.attributes.skinWeight,e),Us.fromBufferAttribute(n.attributes.position,e).applyMatrix4(this.bindMatrix),i.set(0,0,0);for(var r=0;r<4;r++){var a=Hs.getComponent(r);if(a!==0){var o=Fs.getComponent(r);ks.multiplyMatrices(t.bones[o].matrixWorld,t.boneInverses[o]),i.addScaledVector(Bl.copy(Us).applyMatrix4(ks),a)}}return i.applyMatrix4(this.bindMatrixInverse)})});var Gl=new Ne,Dd=new Ne;function wo(e,i){if(e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(16*this.bones.length),this.frame=-1,i===void 0)this.calculateInverses();else if(this.bones.length===i.length)this.boneInverses=i.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(var t=0,n=this.bones.length;t<n;t++)this.boneInverses.push(new Ne)}}function Vs(){ye.call(this),this.type="Bone"}Object.assign(wo.prototype,{calculateInverses:function(){this.boneInverses=[];for(var e=0,i=this.bones.length;e<i;e++){var t=new Ne;this.bones[e]&&t.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(t)}},pose:function(){for(var e=0,i=this.bones.length;e<i;e++){var t=this.bones[e];t&&t.matrixWorld.getInverse(this.boneInverses[e])}for(var n=0,r=this.bones.length;n<r;n++){var a=this.bones[n];a&&(a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}},update:function(){for(var e=this.bones,i=this.boneInverses,t=this.boneMatrices,n=this.boneTexture,r=0,a=e.length;r<a;r++){var o=e[r]?e[r].matrixWorld:Dd;Gl.multiplyMatrices(o,i[r]),Gl.toArray(t,16*r)}n!==void 0&&(n.needsUpdate=!0)},clone:function(){return new wo(this.bones,this.boneInverses)},getBoneByName:function(e){for(var i=0,t=this.bones.length;i<t;i++){var n=this.bones[i];if(n.name===e)return n}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}}),Vs.prototype=Object.assign(Object.create(ye.prototype),{constructor:Vs,isBone:!0});var Ul=new Ne,Fl=new Ne,Mo=[],Oa=new st;function So(e,i,t){st.call(this,e,i),this.instanceMatrix=new Me(new Float32Array(16*t),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}function ut(e){Ee.call(this),this.type="LineBasicMaterial",this.color=new pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}So.prototype=Object.assign(Object.create(st.prototype),{constructor:So,isInstancedMesh:!0,copy:function(e){return st.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),this.count=e.count,this},setColorAt:function(e,i){this.instanceColor===null&&(this.instanceColor=new Me(new Float32Array(3*this.count),3)),i.toArray(this.instanceColor.array,3*e)},getMatrixAt:function(e,i){i.fromArray(this.instanceMatrix.array,16*e)},raycast:function(e,i){var t=this.matrixWorld,n=this.count;if(Oa.geometry=this.geometry,Oa.material=this.material,Oa.material!==void 0)for(var r=0;r<n;r++){this.getMatrixAt(r,Ul),Fl.multiplyMatrices(t,Ul),Oa.matrixWorld=Fl,Oa.raycast(e,Mo);for(var a=0,o=Mo.length;a<o;a++){var s=Mo[a];s.instanceId=r,s.object=this,i.push(s)}Mo.length=0}},setMatrixAt:function(e,i){i.toArray(this.instanceMatrix.array,16*e)},updateMorphTargets:function(){}}),ut.prototype=Object.create(Ee.prototype),ut.prototype.constructor=ut,ut.prototype.isLineBasicMaterial=!0,ut.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};var Hl=new M,kl=new M,Vl=new Ne,To=new Lr,Eo=new ri;function yn(e,i,t){t===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),ye.call(this),this.type="Line",this.geometry=e!==void 0?e:new _e,this.material=i!==void 0?i:new ut,this.updateMorphTargets()}yn.prototype=Object.assign(Object.create(ye.prototype),{constructor:yn,isLine:!0,copy:function(e){return ye.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){var e=this.geometry;if(e.isBufferGeometry)if(e.index===null){for(var i=e.attributes.position,t=[0],n=1,r=i.count;n<r;n++)Hl.fromBufferAttribute(i,n-1),kl.fromBufferAttribute(i,n),t[n]=t[n-1],t[n]+=Hl.distanceTo(kl);e.setAttribute("lineDistance",new se(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){var a=e.vertices,o=e.lineDistances;o[0]=0;for(var s=1,c=a.length;s<c;s++)o[s]=o[s-1],o[s]+=a[s-1].distanceTo(a[s])}return this},raycast:function(e,i){var t=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),Eo.copy(t.boundingSphere),Eo.applyMatrix4(n),Eo.radius+=r,e.ray.intersectsSphere(Eo)!==!1){Vl.getInverse(n),To.copy(e.ray).applyMatrix4(Vl);var a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,s=new M,c=new M,l=new M,u=new M,h=this.isLineSegments?2:1;if(t.isBufferGeometry){var p=t.index,d=t.attributes.position;if(p!==null)for(var f=p.array,g=0,m=f.length-1;g<m;g+=h){var y=f[g],_=f[g+1];if(s.fromBufferAttribute(d,y),c.fromBufferAttribute(d,_),!(To.distanceSqToSegment(s,c,u,l)>o)){u.applyMatrix4(this.matrixWorld);var x=e.ray.origin.distanceTo(u);x<e.near||x>e.far||i.push({distance:x,point:l.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else for(var b=0,w=d.count-1;b<w;b+=h)if(s.fromBufferAttribute(d,b),c.fromBufferAttribute(d,b+1),!(To.distanceSqToSegment(s,c,u,l)>o)){u.applyMatrix4(this.matrixWorld);var E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||i.push({distance:E,point:l.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else if(t.isGeometry){for(var S=t.vertices,P=S.length,C=0;C<P-1;C+=h)if(!(To.distanceSqToSegment(S[C],S[C+1],u,l)>o)){u.applyMatrix4(this.matrixWorld);var T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||i.push({distance:T,point:l.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}},updateMorphTargets:function(){var e=this.geometry;if(e.isBufferGeometry){var i=e.morphAttributes,t=Object.keys(i);if(t.length>0){var n=i[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var r=0,a=n.length;r<a;r++){var o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{var s=e.morphTargets;s!==void 0&&s.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var Ao=new M,Lo=new M;function Qt(e,i){yn.call(this,e,i),this.type="LineSegments"}function Ro(e,i){yn.call(this,e,i),this.type="LineLoop"}function Ln(e){Ee.call(this),this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}Qt.prototype=Object.assign(Object.create(yn.prototype),{constructor:Qt,isLineSegments:!0,computeLineDistances:function(){var e=this.geometry;if(e.isBufferGeometry)if(e.index===null){for(var i=e.attributes.position,t=[],n=0,r=i.count;n<r;n+=2)Ao.fromBufferAttribute(i,n),Lo.fromBufferAttribute(i,n+1),t[n]=n===0?0:t[n-1],t[n+1]=t[n]+Ao.distanceTo(Lo);e.setAttribute("lineDistance",new se(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry)for(var a=e.vertices,o=e.lineDistances,s=0,c=a.length;s<c;s+=2)Ao.copy(a[s]),Lo.copy(a[s+1]),o[s]=s===0?0:o[s-1],o[s+1]=o[s]+Ao.distanceTo(Lo);return this}}),Ro.prototype=Object.assign(Object.create(yn.prototype),{constructor:Ro,isLineLoop:!0}),Ln.prototype=Object.create(Ee.prototype),Ln.prototype.constructor=Ln,Ln.prototype.isPointsMaterial=!0,Ln.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};var Wl=new Ne,Ws=new Lr,Co=new ri,Po=new M;function Yr(e,i){ye.call(this),this.type="Points",this.geometry=e!==void 0?e:new _e,this.material=i!==void 0?i:new Ln,this.updateMorphTargets()}function js(e,i,t,n,r,a,o){var s=Ws.distanceSqToPoint(e);if(s<t){var c=new M;Ws.closestPointToPoint(e,c),c.applyMatrix4(n);var l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:i,face:null,object:o})}}function qs(e,i,t,n,r,a,o,s,c){Te.call(this,e,i,t,n,r,a,o,s,c),this.format=o!==void 0?o:bt,this.minFilter=a!==void 0?a:X,this.magFilter=r!==void 0?r:X,this.generateMipmaps=!1;var l=this;"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(function u(){l.needsUpdate=!0,e.requestVideoFrameCallback(u)})}function Zr(e,i,t,n,r,a,o,s,c,l,u,h){Te.call(this,null,a,o,s,c,l,n,r,u,h),this.image={width:i,height:t},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}function Na(e,i,t,n,r,a,o,s,c){Te.call(this,e,i,t,n,r,a,o,s,c),this.needsUpdate=!0}function Da(e,i,t,n,r,a,o,s,c,l){if((l=l!==void 0?l:Ve)!==Ve&&l!==tn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&l===Ve&&(t=ot),t===void 0&&l===tn&&(t=It),Te.call(this,null,n,r,a,o,s,l,t,c),this.image={width:e,height:i},this.magFilter=o!==void 0?o:dt,this.minFilter=s!==void 0?s:dt,this.flipY=!1,this.generateMipmaps=!1}Yr.prototype=Object.assign(Object.create(ye.prototype),{constructor:Yr,isPoints:!0,copy:function(e){return ye.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,i){var t=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),Co.copy(t.boundingSphere),Co.applyMatrix4(n),Co.radius+=r,e.ray.intersectsSphere(Co)!==!1){Wl.getInverse(n),Ws.copy(e.ray).applyMatrix4(Wl);var a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a;if(t.isBufferGeometry){var s=t.index,c=t.attributes.position;if(s!==null)for(var l=s.array,u=0,h=l.length;u<h;u++){var p=l[u];Po.fromBufferAttribute(c,p),js(Po,p,o,n,e,i,this)}else for(var d=0,f=c.count;d<f;d++)Po.fromBufferAttribute(c,d),js(Po,d,o,n,e,i,this)}else for(var g=t.vertices,m=0,y=g.length;m<y;m++)js(g[m],m,o,n,e,i,this)}},updateMorphTargets:function(){var e=this.geometry;if(e.isBufferGeometry){var i=e.morphAttributes,t=Object.keys(i);if(t.length>0){var n=i[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var r=0,a=n.length;r<a;r++){var o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{var s=e.morphTargets;s!==void 0&&s.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}),qs.prototype=Object.assign(Object.create(Te.prototype),{constructor:qs,isVideoTexture:!0,update:function(){var e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}),Zr.prototype=Object.create(Te.prototype),Zr.prototype.constructor=Zr,Zr.prototype.isCompressedTexture=!0,Na.prototype=Object.create(Te.prototype),Na.prototype.constructor=Na,Na.prototype.isCanvasTexture=!0,Da.prototype=Object.create(Te.prototype),Da.prototype.constructor=Da,Da.prototype.isDepthTexture=!0;var Id=0,qn=new Ne,Xs=new ye,Oo=new M;function tt(){Object.defineProperty(this,"id",{value:Id+=2}),this.uuid=be.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}tt.prototype=Object.assign(Object.create(Ct.prototype),{constructor:tt,isGeometry:!0,applyMatrix4:function(e){for(var i=new ae().getNormalMatrix(e),t=0,n=this.vertices.length;t<n;t++)this.vertices[t].applyMatrix4(e);for(var r=0,a=this.faces.length;r<a;r++){var o=this.faces[r];o.normal.applyMatrix3(i).normalize();for(var s=0,c=o.vertexNormals.length;s<c;s++)o.vertexNormals[s].applyMatrix3(i).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this},rotateY:function(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this},rotateZ:function(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this},translate:function(e,i,t){return qn.makeTranslation(e,i,t),this.applyMatrix4(qn),this},scale:function(e,i,t){return qn.makeScale(e,i,t),this.applyMatrix4(qn),this},lookAt:function(e){return Xs.lookAt(e),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this},fromBufferGeometry:function(e){var i=this,t=e.index!==null?e.index:void 0,n=e.attributes;if(n.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;var r=n.position,a=n.normal,o=n.color,s=n.uv,c=n.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(var l=0;l<r.count;l++)i.vertices.push(new M().fromBufferAttribute(r,l)),o!==void 0&&i.colors.push(new pe().fromBufferAttribute(o,l));function u(x,b,w,E){var S=o===void 0?[]:[i.colors[x].clone(),i.colors[b].clone(),i.colors[w].clone()],P=a===void 0?[]:[new M().fromBufferAttribute(a,x),new M().fromBufferAttribute(a,b),new M().fromBufferAttribute(a,w)],C=new da(x,b,w,P,S,E);i.faces.push(C),s!==void 0&&i.faceVertexUvs[0].push([new I().fromBufferAttribute(s,x),new I().fromBufferAttribute(s,b),new I().fromBufferAttribute(s,w)]),c!==void 0&&i.faceVertexUvs[1].push([new I().fromBufferAttribute(c,x),new I().fromBufferAttribute(c,b),new I().fromBufferAttribute(c,w)])}var h=e.groups;if(h.length>0)for(var p=0;p<h.length;p++)for(var d=h[p],f=d.start,g=f,m=f+d.count;g<m;g+=3)t!==void 0?u(t.getX(g),t.getX(g+1),t.getX(g+2),d.materialIndex):u(g,g+1,g+2,d.materialIndex);else if(t!==void 0)for(var y=0;y<t.count;y+=3)u(t.getX(y),t.getX(y+1),t.getX(y+2));else for(var _=0;_<r.count;_+=3)u(_,_+1,_+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this},normalize:function(){this.computeBoundingSphere();var e=this.boundingSphere.center,i=this.boundingSphere.radius,t=i===0?1:1/i,n=new Ne;return n.set(t,0,0,-t*e.x,0,t,0,-t*e.y,0,0,t,-t*e.z,0,0,0,1),this.applyMatrix4(n),this},computeFaceNormals:function(){for(var e=new M,i=new M,t=0,n=this.faces.length;t<n;t++){var r=this.faces[t],a=this.vertices[r.a],o=this.vertices[r.b],s=this.vertices[r.c];e.subVectors(s,o),i.subVectors(a,o),e.cross(i),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);for(var i=new Array(this.vertices.length),t=0,n=this.vertices.length;t<n;t++)i[t]=new M;if(e)for(var r=new M,a=new M,o=0,s=this.faces.length;o<s;o++){var c=this.faces[o],l=this.vertices[c.a],u=this.vertices[c.b],h=this.vertices[c.c];r.subVectors(h,u),a.subVectors(l,u),r.cross(a),i[c.a].add(r),i[c.b].add(r),i[c.c].add(r)}else{this.computeFaceNormals();for(var p=0,d=this.faces.length;p<d;p++){var f=this.faces[p];i[f.a].add(f.normal),i[f.b].add(f.normal),i[f.c].add(f.normal)}}for(var g=0,m=this.vertices.length;g<m;g++)i[g].normalize();for(var y=0,_=this.faces.length;y<_;y++){var x=this.faces[y],b=x.vertexNormals;b.length===3?(b[0].copy(i[x.a]),b[1].copy(i[x.b]),b[2].copy(i[x.c])):(b[0]=i[x.a].clone(),b[1]=i[x.b].clone(),b[2]=i[x.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(var e=0,i=this.faces.length;e<i;e++){var t=this.faces[e],n=t.vertexNormals;n.length===3?(n[0].copy(t.normal),n[1].copy(t.normal),n[2].copy(t.normal)):(n[0]=t.normal.clone(),n[1]=t.normal.clone(),n[2]=t.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(var e=0,i=this.faces.length;e<i;e++){var t=this.faces[e];t.__originalFaceNormal?t.__originalFaceNormal.copy(t.normal):t.__originalFaceNormal=t.normal.clone(),t.__originalVertexNormals||(t.__originalVertexNormals=[]);for(var n=0,r=t.vertexNormals.length;n<r;n++)t.__originalVertexNormals[n]?t.__originalVertexNormals[n].copy(t.vertexNormals[n]):t.__originalVertexNormals[n]=t.vertexNormals[n].clone()}var a=new tt;a.faces=this.faces;for(var o=0,s=this.morphTargets.length;o<s;o++){if(!this.morphNormals[o]){this.morphNormals[o]={},this.morphNormals[o].faceNormals=[],this.morphNormals[o].vertexNormals=[];for(var c=this.morphNormals[o].faceNormals,l=this.morphNormals[o].vertexNormals,u=0,h=this.faces.length;u<h;u++){var p=new M,d={a:new M,b:new M,c:new M};c.push(p),l.push(d)}}var f=this.morphNormals[o];a.vertices=this.morphTargets[o].vertices,a.computeFaceNormals(),a.computeVertexNormals();for(var g=0,m=this.faces.length;g<m;g++){var y=this.faces[g],_=f.faceNormals[g],x=f.vertexNormals[g];_.copy(y.normal),x.a.copy(y.vertexNormals[0]),x.b.copy(y.vertexNormals[1]),x.c.copy(y.vertexNormals[2])}}for(var b=0,w=this.faces.length;b<w;b++){var E=this.faces[b];E.normal=E.__originalFaceNormal,E.vertexNormals=E.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Pt),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,i,t){if(e&&e.isGeometry){var n,r=this.vertices.length,a=this.vertices,o=e.vertices,s=this.faces,c=e.faces,l=this.colors,u=e.colors;t===void 0&&(t=0),i!==void 0&&(n=new ae().getNormalMatrix(i));for(var h=0,p=o.length;h<p;h++){var d=o[h].clone();i!==void 0&&d.applyMatrix4(i),a.push(d)}for(var f=0,g=u.length;f<g;f++)l.push(u[f].clone());for(var m=0,y=c.length;m<y;m++){var _=c[m],x=void 0,b=void 0,w=_.vertexNormals,E=_.vertexColors,S=new da(_.a+r,_.b+r,_.c+r);S.normal.copy(_.normal),n!==void 0&&S.normal.applyMatrix3(n).normalize();for(var P=0,C=w.length;P<C;P++)x=w[P].clone(),n!==void 0&&x.applyMatrix3(n).normalize(),S.vertexNormals.push(x);S.color.copy(_.color);for(var T=0,D=E.length;T<D;T++)b=E[T],S.vertexColors.push(b.clone());S.materialIndex=_.materialIndex+t,s.push(S)}for(var N=0,F=e.faceVertexUvs.length;N<F;N++){var k=e.faceVertexUvs[N];this.faceVertexUvs[N]===void 0&&(this.faceVertexUvs[N]=[]);for(var B=0,W=k.length;B<W;B++){for(var Q=k[B],G=[],H=0,V=Q.length;H<V;H++)G.push(Q[H].clone());this.faceVertexUvs[N].push(G)}}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e)},mergeMesh:function(e){e&&e.isMesh?(e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e)},mergeVertices:function(){for(var e={},i=[],t=[],n=Math.pow(10,4),r=0,a=this.vertices.length;r<a;r++){var o=this.vertices[r],s=Math.round(o.x*n)+"_"+Math.round(o.y*n)+"_"+Math.round(o.z*n);e[s]===void 0?(e[s]=r,i.push(this.vertices[r]),t[r]=i.length-1):t[r]=t[e[s]]}for(var c=[],l=0,u=this.faces.length;l<u;l++){var h=this.faces[l];h.a=t[h.a],h.b=t[h.b],h.c=t[h.c];for(var p=[h.a,h.b,h.c],d=0;d<3;d++)if(p[d]===p[(d+1)%3]){c.push(l);break}}for(var f=c.length-1;f>=0;f--){var g=c[f];this.faces.splice(g,1);for(var m=0,y=this.faceVertexUvs.length;m<y;m++)this.faceVertexUvs[m].splice(g,1)}var _=this.vertices.length-i.length;return this.vertices=i,_},setFromPoints:function(e){this.vertices=[];for(var i=0,t=e.length;i<t;i++){var n=e[i];this.vertices.push(new M(n.x,n.y,n.z||0))}return this},sortFacesByMaterialIndex:function(){for(var e=this.faces,i=e.length,t=0;t<i;t++)e[t]._id=t;e.sort(function(l,u){return l.materialIndex-u.materialIndex});var n,r,a=this.faceVertexUvs[0],o=this.faceVertexUvs[1];a&&a.length===i&&(n=[]),o&&o.length===i&&(r=[]);for(var s=0;s<i;s++){var c=e[s]._id;n&&n.push(a[c]),r&&r.push(o[c])}n&&(this.faceVertexUvs[0]=n),r&&(this.faceVertexUvs[1]=r)},toJSON:function(){var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){var i=this.parameters;for(var t in i)i[t]!==void 0&&(e[t]=i[t]);return e}for(var n=[],r=0;r<this.vertices.length;r++){var a=this.vertices[r];n.push(a.x,a.y,a.z)}for(var o=[],s=[],c={},l=[],u={},h=[],p={},d=0;d<this.faces.length;d++){var f=this.faces[d],g=this.faceVertexUvs[0][d]!==void 0,m=f.normal.length()>0,y=f.vertexNormals.length>0,_=f.color.r!==1||f.color.g!==1||f.color.b!==1,x=f.vertexColors.length>0,b=0;if(b=P(b,0,0),b=P(b,1,!0),b=P(b,2,!1),b=P(b,3,g),b=P(b,4,m),b=P(b,5,y),b=P(b,6,_),b=P(b,7,x),o.push(b),o.push(f.a,f.b,f.c),o.push(f.materialIndex),g){var w=this.faceVertexUvs[0][d];o.push(D(w[0]),D(w[1]),D(w[2]))}if(m&&o.push(C(f.normal)),y){var E=f.vertexNormals;o.push(C(E[0]),C(E[1]),C(E[2]))}if(_&&o.push(T(f.color)),x){var S=f.vertexColors;o.push(T(S[0]),T(S[1]),T(S[2]))}}function P(N,F,k){return k?N|1<<F:N&~(1<<F)}function C(N){var F=N.x.toString()+N.y.toString()+N.z.toString();return c[F]!==void 0||(c[F]=s.length/3,s.push(N.x,N.y,N.z)),c[F]}function T(N){var F=N.r.toString()+N.g.toString()+N.b.toString();return u[F]!==void 0||(u[F]=l.length,l.push(N.getHex())),u[F]}function D(N){var F=N.x.toString()+N.y.toString();return p[F]!==void 0||(p[F]=h.length/2,h.push(N.x,N.y)),p[F]}return e.data={},e.data.vertices=n,e.data.normals=s,l.length>0&&(e.data.colors=l),h.length>0&&(e.data.uvs=[h]),e.data.faces=o,e},clone:function(){return new tt().copy(this)},copy:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;for(var i=e.vertices,t=0,n=i.length;t<n;t++)this.vertices.push(i[t].clone());for(var r=e.colors,a=0,o=r.length;a<o;a++)this.colors.push(r[a].clone());for(var s=e.faces,c=0,l=s.length;c<l;c++)this.faces.push(s[c].clone());for(var u=0,h=e.faceVertexUvs.length;u<h;u++){var p=e.faceVertexUvs[u];this.faceVertexUvs[u]===void 0&&(this.faceVertexUvs[u]=[]);for(var d=0,f=p.length;d<f;d++){for(var g=p[d],m=[],y=0,_=g.length;y<_;y++){var x=g[y];m.push(x.clone())}this.faceVertexUvs[u].push(m)}}for(var b=e.morphTargets,w=0,E=b.length;w<E;w++){var S={};if(S.name=b[w].name,b[w].vertices!==void 0){S.vertices=[];for(var P=0,C=b[w].vertices.length;P<C;P++)S.vertices.push(b[w].vertices[P].clone())}if(b[w].normals!==void 0){S.normals=[];for(var T=0,D=b[w].normals.length;T<D;T++)S.normals.push(b[w].normals[T].clone())}this.morphTargets.push(S)}for(var N=e.morphNormals,F=0,k=N.length;F<k;F++){var B={};if(N[F].vertexNormals!==void 0){B.vertexNormals=[];for(var W=0,Q=N[F].vertexNormals.length;W<Q;W++){var G=N[F].vertexNormals[W],H={};H.a=G.a.clone(),H.b=G.b.clone(),H.c=G.c.clone(),B.vertexNormals.push(H)}}if(N[F].faceNormals!==void 0){B.faceNormals=[];for(var V=0,ee=N[F].faceNormals.length;V<ee;V++)B.faceNormals.push(N[F].faceNormals[V].clone())}this.morphNormals.push(B)}for(var he=e.skinWeights,we=0,R=he.length;we<R;we++)this.skinWeights.push(he[we].clone());for(var L=e.skinIndices,j=0,z=L.length;j<z;j++)this.skinIndices.push(L[j].clone());for(var J=e.lineDistances,O=0,K=J.length;O<K;O++)this.lineDistances.push(J[O]);var ie=e.boundingBox;ie!==null&&(this.boundingBox=ie.clone());var ce=e.boundingSphere;return ce!==null&&(this.boundingSphere=ce.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Ys=function(e){function i(t,n,r,a,o,s){var c;return(c=e.call(this)||this).type="BoxGeometry",c.parameters={width:t,height:n,depth:r,widthSegments:a,heightSegments:o,depthSegments:s},c.fromBufferGeometry(new _a(t,n,r,a,o,s)),c.mergeVertices(),c}return ge(i,e),i}(tt),Zs=function(e){function i(t,n,r,a){var o;(o=e.call(this)||this).type="CircleBufferGeometry",o.parameters={radius:t,segments:n,thetaStart:r,thetaLength:a},t=t||1,n=n!==void 0?Math.max(3,n):8,r=r!==void 0?r:0,a=a!==void 0?a:2*Math.PI;var s=[],c=[],l=[],u=[],h=new M,p=new I;c.push(0,0,0),l.push(0,0,1),u.push(.5,.5);for(var d=0,f=3;d<=n;d++,f+=3){var g=r+d/n*a;h.x=t*Math.cos(g),h.y=t*Math.sin(g),c.push(h.x,h.y,h.z),l.push(0,0,1),p.x=(c[f]/t+1)/2,p.y=(c[f+1]/t+1)/2,u.push(p.x,p.y)}for(var m=1;m<=n;m++)s.push(m,m+1,0);return o.setIndex(s),o.setAttribute("position",new se(c,3)),o.setAttribute("normal",new se(l,3)),o.setAttribute("uv",new se(u,2)),o}return ge(i,e),i}(_e),jl=function(e){function i(t,n,r,a){var o;return(o=e.call(this)||this).type="CircleGeometry",o.parameters={radius:t,segments:n,thetaStart:r,thetaLength:a},o.fromBufferGeometry(new Zs(t,n,r,a)),o.mergeVertices(),o}return ge(i,e),i}(tt),Ia=function(e){function i(t,n,r,a,o,s,c,l){var u;(u=e.call(this)||this).type="CylinderBufferGeometry",u.parameters={radiusTop:t,radiusBottom:n,height:r,radialSegments:a,heightSegments:o,openEnded:s,thetaStart:c,thetaLength:l};var h=q(u);t=t!==void 0?t:1,n=n!==void 0?n:1,r=r||1,a=Math.floor(a)||8,o=Math.floor(o)||1,s=s!==void 0&&s,c=c!==void 0?c:0,l=l!==void 0?l:2*Math.PI;var p=[],d=[],f=[],g=[],m=0,y=[],_=r/2,x=0;function b(w){for(var E=m,S=new I,P=new M,C=0,T=w===!0?t:n,D=w===!0?1:-1,N=1;N<=a;N++)d.push(0,_*D,0),f.push(0,D,0),g.push(.5,.5),m++;for(var F=m,k=0;k<=a;k++){var B=k/a*l+c,W=Math.cos(B),Q=Math.sin(B);P.x=T*Q,P.y=_*D,P.z=T*W,d.push(P.x,P.y,P.z),f.push(0,D,0),S.x=.5*W+.5,S.y=.5*Q*D+.5,g.push(S.x,S.y),m++}for(var G=0;G<a;G++){var H=E+G,V=F+G;w===!0?p.push(V,V+1,H):p.push(V+1,V,H),C+=3}h.addGroup(x,C,w===!0?1:2),x+=C}return function(){for(var w=new M,E=new M,S=0,P=(n-t)/r,C=0;C<=o;C++){for(var T=[],D=C/o,N=D*(n-t)+t,F=0;F<=a;F++){var k=F/a,B=k*l+c,W=Math.sin(B),Q=Math.cos(B);E.x=N*W,E.y=-D*r+_,E.z=N*Q,d.push(E.x,E.y,E.z),w.set(W,P,Q).normalize(),f.push(w.x,w.y,w.z),g.push(k,1-D),T.push(m++)}y.push(T)}for(var G=0;G<a;G++)for(var H=0;H<o;H++){var V=y[H][G],ee=y[H+1][G],he=y[H+1][G+1],we=y[H][G+1];p.push(V,ee,we),p.push(ee,he,we),S+=6}h.addGroup(x,S,0),x+=S}(),s===!1&&(t>0&&b(!0),n>0&&b(!1)),u.setIndex(p),u.setAttribute("position",new se(d,3)),u.setAttribute("normal",new se(f,3)),u.setAttribute("uv",new se(g,2)),u}return ge(i,e),i}(_e),Js=function(e){function i(t,n,r,a,o,s,c,l){var u;return(u=e.call(this)||this).type="CylinderGeometry",u.parameters={radiusTop:t,radiusBottom:n,height:r,radialSegments:a,heightSegments:o,openEnded:s,thetaStart:c,thetaLength:l},u.fromBufferGeometry(new Ia(t,n,r,a,o,s,c,l)),u.mergeVertices(),u}return ge(i,e),i}(tt),ql=function(e){function i(t,n,r,a,o,s,c){var l;return(l=e.call(this,0,t,n,r,a,o,s,c)||this).type="ConeGeometry",l.parameters={radius:t,height:n,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c},l}return ge(i,e),i}(Js),Xl=function(e){function i(t,n,r,a,o,s,c){var l;return(l=e.call(this,0,t,n,r,a,o,s,c)||this).type="ConeBufferGeometry",l.parameters={radius:t,height:n,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c},l}return ge(i,e),i}(Ia),ir=function(e){function i(t,n,r,a){var o;(o=e.call(this)||this).type="PolyhedronBufferGeometry",o.parameters={vertices:t,indices:n,radius:r,detail:a},r=r||1;var s=[],c=[];function l(g,m,y,_){for(var x=_+1,b=[],w=0;w<=x;w++){b[w]=[];for(var E=g.clone().lerp(y,w/x),S=m.clone().lerp(y,w/x),P=x-w,C=0;C<=P;C++)b[w][C]=C===0&&w===x?E:E.clone().lerp(S,C/P)}for(var T=0;T<x;T++)for(var D=0;D<2*(x-T)-1;D++){var N=Math.floor(D/2);D%2==0?(u(b[T][N+1]),u(b[T+1][N]),u(b[T][N])):(u(b[T][N+1]),u(b[T+1][N+1]),u(b[T+1][N]))}}function u(g){s.push(g.x,g.y,g.z)}function h(g,m){var y=3*g;m.x=t[y+0],m.y=t[y+1],m.z=t[y+2]}function p(g,m,y,_){_<0&&g.x===1&&(c[m]=g.x-1),y.x===0&&y.z===0&&(c[m]=_/2/Math.PI+.5)}function d(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}return function(g){for(var m=new M,y=new M,_=new M,x=0;x<n.length;x+=3)h(n[x+0],m),h(n[x+1],y),h(n[x+2],_),l(m,y,_,g)}(a=a||0),function(g){for(var m=new M,y=0;y<s.length;y+=3)m.x=s[y+0],m.y=s[y+1],m.z=s[y+2],m.normalize().multiplyScalar(g),s[y+0]=m.x,s[y+1]=m.y,s[y+2]=m.z}(r),function(){for(var g=new M,m=0;m<s.length;m+=3){g.x=s[m+0],g.y=s[m+1],g.z=s[m+2];var y=d(g)/2/Math.PI+.5,_=f(g)/Math.PI+.5;c.push(y,1-_)}(function(){for(var x=new M,b=new M,w=new M,E=new M,S=new I,P=new I,C=new I,T=0,D=0;T<s.length;T+=9,D+=6){x.set(s[T+0],s[T+1],s[T+2]),b.set(s[T+3],s[T+4],s[T+5]),w.set(s[T+6],s[T+7],s[T+8]),S.set(c[D+0],c[D+1]),P.set(c[D+2],c[D+3]),C.set(c[D+4],c[D+5]),E.copy(x).add(b).add(w).divideScalar(3);var N=d(E);p(S,D+0,x,N),p(P,D+2,b,N),p(C,D+4,w,N)}})(),function(){for(var x=0;x<c.length;x+=6){var b=c[x+0],w=c[x+2],E=c[x+4],S=Math.max(b,w,E),P=Math.min(b,w,E);S>.9&&P<.1&&(b<.2&&(c[x+0]+=1),w<.2&&(c[x+2]+=1),E<.2&&(c[x+4]+=1))}}()}(),o.setAttribute("position",new se(s,3)),o.setAttribute("normal",new se(s.slice(),3)),o.setAttribute("uv",new se(c,2)),a===0?o.computeVertexNormals():o.normalizeNormals(),o}return ge(i,e),i}(_e),Qs=function(e){function i(t,n){var r,a=(1+Math.sqrt(5))/2,o=1/a,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-a,0,-o,a,0,o,-a,0,o,a,-o,-a,0,-o,a,0,o,-a,0,o,a,0,-a,0,-o,a,0,-o,-a,0,o,a,0,o];return(r=e.call(this,s,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,n)||this).type="DodecahedronBufferGeometry",r.parameters={radius:t,detail:n},r}return ge(i,e),i}(ir),Yl=function(e){function i(t,n){var r;return(r=e.call(this)||this).type="DodecahedronGeometry",r.parameters={radius:t,detail:n},r.fromBufferGeometry(new Qs(t,n)),r.mergeVertices(),r}return ge(i,e),i}(tt),No=new M,Do=new M,Ks=new M,Jr=new Tn,$s=function(e){function i(t,n){var r;(r=e.call(this)||this).type="EdgesGeometry",r.parameters={thresholdAngle:n},n=n!==void 0?n:1,t.isGeometry&&(t=new _e().fromGeometry(t));for(var a=Math.pow(10,4),o=Math.cos(be.DEG2RAD*n),s=t.getIndex(),c=t.getAttribute("position"),l=s?s.count:c.count,u=[0,0,0],h=["a","b","c"],p=new Array(3),d={},f=[],g=0;g<l;g+=3){s?(u[0]=s.getX(g),u[1]=s.getX(g+1),u[2]=s.getX(g+2)):(u[0]=g,u[1]=g+1,u[2]=g+2);var m=Jr.a,y=Jr.b,_=Jr.c;if(m.fromBufferAttribute(c,u[0]),y.fromBufferAttribute(c,u[1]),_.fromBufferAttribute(c,u[2]),Jr.getNormal(Ks),p[0]=Math.round(m.x*a)+","+Math.round(m.y*a)+","+Math.round(m.z*a),p[1]=Math.round(y.x*a)+","+Math.round(y.y*a)+","+Math.round(y.z*a),p[2]=Math.round(_.x*a)+","+Math.round(_.y*a)+","+Math.round(_.z*a),p[0]!==p[1]&&p[1]!==p[2]&&p[2]!==p[0])for(var x=0;x<3;x++){var b=(x+1)%3,w=p[x],E=p[b],S=Jr[h[x]],P=Jr[h[b]],C=w+"_"+E,T=E+"_"+w;T in d&&d[T]?(Ks.dot(d[T].normal)<=o&&(f.push(S.x,S.y,S.z),f.push(P.x,P.y,P.z)),d[T]=null):C in d||(d[C]={index0:u[x],index1:u[b],normal:Ks.clone()})}}for(var D in d)if(d[D]){var N=d[D],F=N.index0,k=N.index1;No.fromBufferAttribute(c,F),Do.fromBufferAttribute(c,k),f.push(No.x,No.y,No.z),f.push(Do.x,Do.y,Do.z)}return r.setAttribute("position",new se(f,3)),r}return ge(i,e),i}(_e),Bd=function(e,i,t){t=t||2;var n,r,a,o,s,c,l,u=i&&i.length,h=u?i[0]*t:e.length,p=Zl(e,0,h,t,!0),d=[];if(!p||p.next===p.prev)return d;if(u&&(p=function(g,m,y,_){var x,b,w,E=[];for(x=0,b=m.length;x<b;x++)(w=Zl(g,m[x]*_,x<b-1?m[x+1]*_:g.length,_,!1))===w.next&&(w.steiner=!0),E.push(Wd(w));for(E.sort(Hd),x=0;x<E.length;x++)kd(E[x],y),y=Di(y,y.next);return y}(e,i,p,t)),e.length>80*t){n=a=e[0],r=o=e[1];for(var f=t;f<h;f+=t)(s=e[f])<n&&(n=s),(c=e[f+1])<r&&(r=c),s>a&&(a=s),c>o&&(o=c);l=(l=Math.max(a-n,o-r))!==0?1/l:0}return Ba(p,d,t,n,r,l),d};function Zl(e,i,t,n,r){var a,o;if(r===function(s,c,l,u){for(var h=0,p=c,d=l-u;p<l;p+=u)h+=(s[d]-s[p])*(s[p+1]+s[d+1]),d=p;return h}(e,i,t,n)>0)for(a=i;a<t;a+=n)o=Kl(a,e[a],e[a+1],o);else for(a=t-n;a>=i;a-=n)o=Kl(a,e[a],e[a+1],o);return o&&Io(o,o.next)&&(Ga(o),o=o.next),o}function Di(e,i){if(!e)return e;i||(i=e);var t,n=e;do if(t=!1,n.steiner||!Io(n,n.next)&&ft(n.prev,n,n.next)!==0)n=n.next;else{if(Ga(n),(n=i=n.prev)===n.next)break;t=!0}while(t||n!==i);return i}function Ba(e,i,t,n,r,a,o){if(e){!o&&a&&function(u,h,p,d){var f=u;do f.z===null&&(f.z=ec(f.x,f.y,h,p,d)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==u);f.prevZ.nextZ=null,f.prevZ=null,function(g){var m,y,_,x,b,w,E,S,P=1;do{for(y=g,g=null,b=null,w=0;y;){for(w++,_=y,E=0,m=0;m<P&&(E++,_=_.nextZ);m++);for(S=P;E>0||S>0&&_;)E!==0&&(S===0||!_||y.z<=_.z)?(x=y,y=y.nextZ,E--):(x=_,_=_.nextZ,S--),b?b.nextZ=x:g=x,x.prevZ=b,b=x;y=_}b.nextZ=null,P*=2}while(w>1)}(f)}(e,n,r,a);for(var s,c,l=e;e.prev!==e.next;)if(s=e.prev,c=e.next,a?Gd(e,n,r,a):zd(e))i.push(s.i/t),i.push(e.i/t),i.push(c.i/t),Ga(e),e=c.next,l=c.next;else if((e=c)===l){o?o===1?Ba(e=Ud(Di(e),i,t),i,t,n,r,a,2):o===2&&Fd(e,i,t,n,r,a):Ba(Di(e),i,t,n,r,a,1);break}}}function zd(e){var i=e.prev,t=e,n=e.next;if(ft(i,t,n)>=0)return!1;for(var r=e.next.next;r!==e.prev;){if(Qr(i.x,i.y,t.x,t.y,n.x,n.y,r.x,r.y)&&ft(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Gd(e,i,t,n){var r=e.prev,a=e,o=e.next;if(ft(r,a,o)>=0)return!1;for(var s=r.x<a.x?r.x<o.x?r.x:o.x:a.x<o.x?a.x:o.x,c=r.y<a.y?r.y<o.y?r.y:o.y:a.y<o.y?a.y:o.y,l=r.x>a.x?r.x>o.x?r.x:o.x:a.x>o.x?a.x:o.x,u=r.y>a.y?r.y>o.y?r.y:o.y:a.y>o.y?a.y:o.y,h=ec(s,c,i,t,n),p=ec(l,u,i,t,n),d=e.prevZ,f=e.nextZ;d&&d.z>=h&&f&&f.z<=p;){if(d!==e.prev&&d!==e.next&&Qr(r.x,r.y,a.x,a.y,o.x,o.y,d.x,d.y)&&ft(d.prev,d,d.next)>=0||(d=d.prevZ,f!==e.prev&&f!==e.next&&Qr(r.x,r.y,a.x,a.y,o.x,o.y,f.x,f.y)&&ft(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;d&&d.z>=h;){if(d!==e.prev&&d!==e.next&&Qr(r.x,r.y,a.x,a.y,o.x,o.y,d.x,d.y)&&ft(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;f&&f.z<=p;){if(f!==e.prev&&f!==e.next&&Qr(r.x,r.y,a.x,a.y,o.x,o.y,f.x,f.y)&&ft(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function Ud(e,i,t){var n=e;do{var r=n.prev,a=n.next.next;!Io(r,a)&&Jl(r,n,n.next,a)&&za(r,a)&&za(a,r)&&(i.push(r.i/t),i.push(n.i/t),i.push(a.i/t),Ga(n),Ga(n.next),n=e=a),n=n.next}while(n!==e);return Di(n)}function Fd(e,i,t,n,r,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&jd(o,s)){var c=Ql(o,s);return o=Di(o,o.next),c=Di(c,c.next),Ba(o,i,t,n,r,a),void Ba(c,i,t,n,r,a)}s=s.next}o=o.next}while(o!==e)}function Hd(e,i){return e.x-i.x}function kd(e,i){if(i=function(n,r){var a,o=r,s=n.x,c=n.y,l=-1/0;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){var u=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(u<=s&&u>l){if(l=u,u===s){if(c===o.y)return o;if(c===o.next.y)return o.next}a=o.x<o.next.x?o:o.next}}o=o.next}while(o!==r);if(!a)return null;if(s===l)return a;var h,p=a,d=a.x,f=a.y,g=1/0;o=a;do s>=o.x&&o.x>=d&&s!==o.x&&Qr(c<f?s:l,c,d,f,c<f?l:s,c,o.x,o.y)&&(h=Math.abs(c-o.y)/(s-o.x),za(o,n)&&(h<g||h===g&&(o.x>a.x||o.x===a.x&&Vd(a,o)))&&(a=o,g=h)),o=o.next;while(o!==p);return a}(e,i)){var t=Ql(i,e);Di(i,i.next),Di(t,t.next)}}function Vd(e,i){return ft(e.prev,e,i.prev)<0&&ft(i.next,e,e.next)<0}function ec(e,i,t,n,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=32767*(i-n)*r)|i<<8))|i<<4))|i<<2))|i<<1))<<1}function Wd(e){var i=e,t=e;do(i.x<t.x||i.x===t.x&&i.y<t.y)&&(t=i),i=i.next;while(i!==e);return t}function Qr(e,i,t,n,r,a,o,s){return(r-o)*(i-s)-(e-o)*(a-s)>=0&&(e-o)*(n-s)-(t-o)*(i-s)>=0&&(t-o)*(a-s)-(r-o)*(n-s)>=0}function jd(e,i){return e.next.i!==i.i&&e.prev.i!==i.i&&!function(t,n){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Jl(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1}(e,i)&&(za(e,i)&&za(i,e)&&function(t,n){var r=t,a=!1,o=(t.x+n.x)/2,s=(t.y+n.y)/2;do r.y>s!=r.next.y>s&&r.next.y!==r.y&&o<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(a=!a),r=r.next;while(r!==t);return a}(e,i)&&(ft(e.prev,e,i.prev)||ft(e,i.prev,i))||Io(e,i)&&ft(e.prev,e,e.next)>0&&ft(i.prev,i,i.next)>0)}function ft(e,i,t){return(i.y-e.y)*(t.x-i.x)-(i.x-e.x)*(t.y-i.y)}function Io(e,i){return e.x===i.x&&e.y===i.y}function Jl(e,i,t,n){var r=zo(ft(e,i,t)),a=zo(ft(e,i,n)),o=zo(ft(t,n,e)),s=zo(ft(t,n,i));return r!==a&&o!==s||!(r!==0||!Bo(e,t,i))||!(a!==0||!Bo(e,n,i))||!(o!==0||!Bo(t,e,n))||!(s!==0||!Bo(t,i,n))}function Bo(e,i,t){return i.x<=Math.max(e.x,t.x)&&i.x>=Math.min(e.x,t.x)&&i.y<=Math.max(e.y,t.y)&&i.y>=Math.min(e.y,t.y)}function zo(e){return e>0?1:e<0?-1:0}function za(e,i){return ft(e.prev,e,e.next)<0?ft(e,i,e.next)>=0&&ft(e,e.prev,i)>=0:ft(e,i,e.prev)<0||ft(e,e.next,i)<0}function Ql(e,i){var t=new tc(e.i,e.x,e.y),n=new tc(i.i,i.x,i.y),r=e.next,a=i.prev;return e.next=i,i.prev=e,t.next=r,r.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Kl(e,i,t,n){var r=new tc(e,i,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ga(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function tc(e,i,t){this.i=e,this.x=i,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}var li={area:function(e){for(var i=e.length,t=0,n=i-1,r=0;r<i;n=r++)t+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*t},isClockWise:function(e){return li.area(e)<0},triangulateShape:function(e,i){var t=[],n=[],r=[];$l(e),eu(t,e);var a=e.length;i.forEach($l);for(var o=0;o<i.length;o++)n.push(a),a+=i[o].length,eu(t,i[o]);for(var s=Bd(t,n),c=0;c<s.length;c+=3)r.push(s.slice(c,c+3));return r}};function $l(e){var i=e.length;i>2&&e[i-1].equals(e[0])&&e.pop()}function eu(e,i){for(var t=0;t<i.length;t++)e.push(i[t].x),e.push(i[t].y)}var Ua=function(e){function i(t,n){var r;(r=e.call(this)||this).type="ExtrudeBufferGeometry",r.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];for(var a=q(r),o=[],s=[],c=0,l=t.length;c<l;c++)u(t[c]);function u(h){var p=[],d=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1,g=n.depth!==void 0?n.depth:100,m=n.bevelEnabled===void 0||n.bevelEnabled,y=n.bevelThickness!==void 0?n.bevelThickness:6,_=n.bevelSize!==void 0?n.bevelSize:y-2,x=n.bevelOffset!==void 0?n.bevelOffset:0,b=n.bevelSegments!==void 0?n.bevelSegments:3,w=n.extrudePath,E=n.UVGenerator!==void 0?n.UVGenerator:qd;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),g=n.amount);var S,P,C,T,D,N=!1;w&&(S=w.getSpacedPoints(f),N=!0,m=!1,P=w.computeFrenetFrames(f,!1),C=new M,T=new M,D=new M),m||(b=0,y=0,_=0,x=0);var F=h.extractPoints(d),k=F.shape,B=F.holes;if(!li.isClockWise(k)){k=k.reverse();for(var W=0,Q=B.length;W<Q;W++){var G=B[W];li.isClockWise(G)&&(B[W]=G.reverse())}}for(var H=li.triangulateShape(k,B),V=k,ee=0,he=B.length;ee<he;ee++){var we=B[ee];k=k.concat(we)}function R(Ae,Ie,qe){return Ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),Ie.clone().multiplyScalar(qe).add(Ae)}var L=k.length,j=H.length;function z(Ae,Ie,qe){var Be,Xe,Ye,Lt=Ae.x-Ie.x,Gt=Ae.y-Ie.y,en=qe.x-Ae.x,In=qe.y-Ae.y,xr=Lt*Lt+Gt*Gt,Rp=Lt*In-Gt*en;if(Math.abs(Rp)>Number.EPSILON){var eh=Math.sqrt(xr),th=Math.sqrt(en*en+In*In),nh=Ie.x-Gt/eh,ih=Ie.y+Lt/eh,rh=((qe.x-In/th-nh)*In-(qe.y+en/th-ih)*en)/(Lt*In-Gt*en),ah=(Be=nh+Lt*rh-Ae.x)*Be+(Xe=ih+Gt*rh-Ae.y)*Xe;if(ah<=2)return new I(Be,Xe);Ye=Math.sqrt(ah/2)}else{var vs=!1;Lt>Number.EPSILON?en>Number.EPSILON&&(vs=!0):Lt<-Number.EPSILON?en<-Number.EPSILON&&(vs=!0):Math.sign(Gt)===Math.sign(In)&&(vs=!0),vs?(Be=-Gt,Xe=Lt,Ye=Math.sqrt(xr)):(Be=Lt,Xe=Gt,Ye=Math.sqrt(xr/2))}return new I(Be/Ye,Xe/Ye)}for(var J=[],O=0,K=V.length,ie=K-1,ce=O+1;O<K;O++,ie++,ce++)ie===K&&(ie=0),ce===K&&(ce=0),J[O]=z(V[O],V[ie],V[ce]);for(var te,me=[],Se=J.concat(),We=0,Qe=B.length;We<Qe;We++){var Ce=B[We];te=[];for(var ke=0,Je=Ce.length,$t=Je-1,Ot=ke+1;ke<Je;ke++,$t++,Ot++)$t===Je&&($t=0),Ot===Je&&(Ot=0),te[ke]=z(Ce[ke],Ce[$t],Ce[Ot]);me.push(te),Se=Se.concat(te)}for(var Nt=0;Nt<b;Nt++){for(var kt=Nt/b,At=y*Math.cos(kt*Math.PI/2),re=_*Math.sin(kt*Math.PI/2)+x,pi=0,Xc=V.length;pi<Xc;pi++){var aa=R(V[pi],J[pi],re);ve(aa.x,aa.y,-At)}for(var vr=0,Kn=B.length;vr<Kn;vr++){var Za=B[vr];te=me[vr];for(var gr=0,ms=Za.length;gr<ms;gr++){var Ja=R(Za[gr],te[gr],re);ve(Ja.x,Ja.y,-At)}}}for(var Qa=_+x,fi=0;fi<L;fi++){var $n=m?R(k[fi],Se[fi],Qa):k[fi];N?(T.copy(P.normals[0]).multiplyScalar($n.x),C.copy(P.binormals[0]).multiplyScalar($n.y),D.copy(S[0]).add(T).add(C),ve(D.x,D.y,D.z)):ve($n.x,$n.y,0)}for(var mi=1;mi<=f;mi++)for(var Fi=0;Fi<L;Fi++){var yr=m?R(k[Fi],Se[Fi],Qa):k[Fi];N?(T.copy(P.normals[mi]).multiplyScalar(yr.x),C.copy(P.binormals[mi]).multiplyScalar(yr.y),D.copy(S[mi]).add(T).add(C),ve(D.x,D.y,D.z)):ve(yr.x,yr.y,g/f*mi)}for(var ei=b-1;ei>=0;ei--){for(var Ka=ei/b,A=y*Math.cos(Ka*Math.PI/2),Y=_*Math.sin(Ka*Math.PI/2)+x,U=0,Z=V.length;U<Z;U++){var oe=R(V[U],J[U],Y);ve(oe.x,oe.y,g+A)}for(var Oe=0,Ge=B.length;Oe<Ge;Oe++){var Ue=B[Oe];te=me[Oe];for(var Re=0,ht=Ue.length;Re<ht;Re++){var xt=R(Ue[Re],te[Re],Y);N?ve(xt.x,xt.y+S[f-1].y,S[f-1].x+A):ve(xt.x,xt.y,g+A)}}}function je(Ae,Ie){for(var qe=Ae.length;--qe>=0;){var Be=qe,Xe=qe-1;Xe<0&&(Xe=Ae.length-1);for(var Ye=0,Lt=f+2*b;Ye<Lt;Ye++){var Gt=L*Ye,en=L*(Ye+1);Mt(Ie+Be+Gt,Ie+Xe+Gt,Ie+Xe+en,Ie+Be+en)}}}function ve(Ae,Ie,qe){p.push(Ae),p.push(Ie),p.push(qe)}function qt(Ae,Ie,qe){lt(Ae),lt(Ie),lt(qe);var Be=o.length/3,Xe=E.generateTopUV(a,o,Be-3,Be-2,Be-1);Xt(Xe[0]),Xt(Xe[1]),Xt(Xe[2])}function Mt(Ae,Ie,qe,Be){lt(Ae),lt(Ie),lt(Be),lt(Ie),lt(qe),lt(Be);var Xe=o.length/3,Ye=E.generateSideWallUV(a,o,Xe-6,Xe-3,Xe-2,Xe-1);Xt(Ye[0]),Xt(Ye[1]),Xt(Ye[3]),Xt(Ye[1]),Xt(Ye[2]),Xt(Ye[3])}function lt(Ae){o.push(p[3*Ae+0]),o.push(p[3*Ae+1]),o.push(p[3*Ae+2])}function Xt(Ae){s.push(Ae.x),s.push(Ae.y)}(function(){var Ae=o.length/3;if(m){for(var Ie=0,qe=L*Ie,Be=0;Be<j;Be++){var Xe=H[Be];qt(Xe[2]+qe,Xe[1]+qe,Xe[0]+qe)}qe=L*(Ie=f+2*b);for(var Ye=0;Ye<j;Ye++){var Lt=H[Ye];qt(Lt[0]+qe,Lt[1]+qe,Lt[2]+qe)}}else{for(var Gt=0;Gt<j;Gt++){var en=H[Gt];qt(en[2],en[1],en[0])}for(var In=0;In<j;In++){var xr=H[In];qt(xr[0]+L*f,xr[1]+L*f,xr[2]+L*f)}}a.addGroup(Ae,o.length/3-Ae,0)})(),function(){var Ae=o.length/3,Ie=0;je(V,Ie),Ie+=V.length;for(var qe=0,Be=B.length;qe<Be;qe++){var Xe=B[qe];je(Xe,Ie),Ie+=Xe.length}a.addGroup(Ae,o.length/3-Ae,1)}()}return r.setAttribute("position",new se(o,3)),r.setAttribute("uv",new se(s,2)),r.computeVertexNormals(),r}return ge(i,e),i.prototype.toJSON=function(){var t=_e.prototype.toJSON.call(this);return function(n,r,a){if(a.shapes=[],Array.isArray(n))for(var o=0,s=n.length;o<s;o++){var c=n[o];a.shapes.push(c.uuid)}else a.shapes.push(n.uuid);return r.extrudePath!==void 0&&(a.options.extrudePath=r.extrudePath.toJSON()),a}(this.parameters.shapes,this.parameters.options,t)},i}(_e),qd={generateTopUV:function(e,i,t,n,r){var a=i[3*t],o=i[3*t+1],s=i[3*n],c=i[3*n+1],l=i[3*r],u=i[3*r+1];return[new I(a,o),new I(s,c),new I(l,u)]},generateSideWallUV:function(e,i,t,n,r,a){var o=i[3*t],s=i[3*t+1],c=i[3*t+2],l=i[3*n],u=i[3*n+1],h=i[3*n+2],p=i[3*r],d=i[3*r+1],f=i[3*r+2],g=i[3*a],m=i[3*a+1],y=i[3*a+2];return Math.abs(s-u)<.01?[new I(o,1-c),new I(l,1-h),new I(p,1-f),new I(g,1-y)]:[new I(s,1-c),new I(u,1-h),new I(d,1-f),new I(m,1-y)]}},nc=function(e){function i(t,n){var r;return(r=e.call(this)||this).type="ExtrudeGeometry",r.parameters={shapes:t,options:n},r.fromBufferGeometry(new Ua(t,n)),r.mergeVertices(),r}return ge(i,e),i.prototype.toJSON=function(){var t=e.prototype.toJSON.call(this);return function(n,r,a){if(a.shapes=[],Array.isArray(n))for(var o=0,s=n.length;o<s;o++){var c=n[o];a.shapes.push(c.uuid)}else a.shapes.push(n.uuid);return r.extrudePath!==void 0&&(a.options.extrudePath=r.extrudePath.toJSON()),a}(this.parameters.shapes,this.parameters.options,t)},i}(tt),ic=function(e){function i(t,n){var r,a=(1+Math.sqrt(5))/2,o=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1];return(r=e.call(this,o,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,n)||this).type="IcosahedronBufferGeometry",r.parameters={radius:t,detail:n},r}return ge(i,e),i}(ir),tu=function(e){function i(t,n){var r;return(r=e.call(this)||this).type="IcosahedronGeometry",r.parameters={radius:t,detail:n},r.fromBufferGeometry(new ic(t,n)),r.mergeVertices(),r}return ge(i,e),i}(tt),rc=function(e){function i(t,n,r,a){var o;(o=e.call(this)||this).type="LatheBufferGeometry",o.parameters={points:t,segments:n,phiStart:r,phiLength:a},n=Math.floor(n)||12,r=r||0,a=a||2*Math.PI,a=be.clamp(a,0,2*Math.PI);for(var s=[],c=[],l=[],u=1/n,h=new M,p=new I,d=0;d<=n;d++)for(var f=r+d*u*a,g=Math.sin(f),m=Math.cos(f),y=0;y<=t.length-1;y++)h.x=t[y].x*g,h.y=t[y].y,h.z=t[y].x*m,c.push(h.x,h.y,h.z),p.x=d/n,p.y=y/(t.length-1),l.push(p.x,p.y);for(var _=0;_<n;_++)for(var x=0;x<t.length-1;x++){var b=x+_*t.length,w=b,E=b+t.length,S=b+t.length+1,P=b+1;s.push(w,E,P),s.push(E,S,P)}if(o.setIndex(s),o.setAttribute("position",new se(c,3)),o.setAttribute("uv",new se(l,2)),o.computeVertexNormals(),a===2*Math.PI)for(var C=o.attributes.normal.array,T=new M,D=new M,N=new M,F=n*t.length*3,k=0,B=0;k<t.length;k++,B+=3)T.x=C[B+0],T.y=C[B+1],T.z=C[B+2],D.x=C[F+B+0],D.y=C[F+B+1],D.z=C[F+B+2],N.addVectors(T,D).normalize(),C[B+0]=C[F+B+0]=N.x,C[B+1]=C[F+B+1]=N.y,C[B+2]=C[F+B+2]=N.z;return o}return ge(i,e),i}(_e),nu=function(e){function i(t,n,r,a){var o;return(o=e.call(this)||this).type="LatheGeometry",o.parameters={points:t,segments:n,phiStart:r,phiLength:a},o.fromBufferGeometry(new rc(t,n,r,a)),o.mergeVertices(),o}return ge(i,e),i}(tt),Go=function(e){function i(t,n){var r;return(r=e.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,n)||this).type="OctahedronBufferGeometry",r.parameters={radius:t,detail:n},r}return ge(i,e),i}(ir),iu=function(e){function i(t,n){var r;return(r=e.call(this)||this).type="OctahedronGeometry",r.parameters={radius:t,detail:n},r.fromBufferGeometry(new Go(t,n)),r.mergeVertices(),r}return ge(i,e),i}(tt);function Kr(e,i,t){_e.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:i,stacks:t};var n=[],r=[],a=[],o=[],s=1e-5,c=new M,l=new M,u=new M,h=new M,p=new M;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");for(var d=i+1,f=0;f<=t;f++)for(var g=f/t,m=0;m<=i;m++){var y=m/i;e(y,g,l),r.push(l.x,l.y,l.z),y-s>=0?(e(y-s,g,u),h.subVectors(l,u)):(e(y+s,g,u),h.subVectors(u,l)),g-s>=0?(e(y,g-s,u),p.subVectors(l,u)):(e(y,g+s,u),p.subVectors(u,l)),c.crossVectors(h,p).normalize(),a.push(c.x,c.y,c.z),o.push(y,g)}for(var _=0;_<t;_++)for(var x=0;x<i;x++){var b=_*d+x,w=_*d+x+1,E=(_+1)*d+x+1,S=(_+1)*d+x;n.push(b,w,S),n.push(w,E,S)}this.setIndex(n),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(o,2))}function Fa(e,i,t){tt.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:i,stacks:t},this.fromBufferGeometry(new Kr(e,i,t)),this.mergeVertices()}Kr.prototype=Object.create(_e.prototype),Kr.prototype.constructor=Kr,Fa.prototype=Object.create(tt.prototype),Fa.prototype.constructor=Fa;var ru=function(e){function i(t,n,r,a){var o;return(o=e.call(this)||this).type="PlaneGeometry",o.parameters={width:t,height:n,widthSegments:r,heightSegments:a},o.fromBufferGeometry(new mo(t,n,r,a)),o.mergeVertices(),o}return ge(i,e),i}(tt),au=function(e){function i(t,n,r,a){var o;return(o=e.call(this)||this).type="PolyhedronGeometry",o.parameters={vertices:t,indices:n,radius:r,detail:a},o.fromBufferGeometry(new ir(t,n,r,a)),o.mergeVertices(),o}return ge(i,e),i}(tt),ac=function(e){function i(t,n,r,a,o,s){var c;(c=e.call(this)||this).type="RingBufferGeometry",c.parameters={innerRadius:t,outerRadius:n,thetaSegments:r,phiSegments:a,thetaStart:o,thetaLength:s},t=t||.5,n=n||1,o=o!==void 0?o:0,s=s!==void 0?s:2*Math.PI,r=r!==void 0?Math.max(3,r):8;for(var l=[],u=[],h=[],p=[],d=t,f=(n-t)/(a=a!==void 0?Math.max(1,a):1),g=new M,m=new I,y=0;y<=a;y++){for(var _=0;_<=r;_++){var x=o+_/r*s;g.x=d*Math.cos(x),g.y=d*Math.sin(x),u.push(g.x,g.y,g.z),h.push(0,0,1),m.x=(g.x/n+1)/2,m.y=(g.y/n+1)/2,p.push(m.x,m.y)}d+=f}for(var b=0;b<a;b++)for(var w=b*(r+1),E=0;E<r;E++){var S=E+w,P=S,C=S+r+1,T=S+r+2,D=S+1;l.push(P,C,D),l.push(C,T,D)}return c.setIndex(l),c.setAttribute("position",new se(u,3)),c.setAttribute("normal",new se(h,3)),c.setAttribute("uv",new se(p,2)),c}return ge(i,e),i}(_e),ou=function(e){function i(t,n,r,a,o,s){var c;return(c=e.call(this)||this).type="RingGeometry",c.parameters={innerRadius:t,outerRadius:n,thetaSegments:r,phiSegments:a,thetaStart:o,thetaLength:s},c.fromBufferGeometry(new ac(t,n,r,a,o,s)),c.mergeVertices(),c}return ge(i,e),i}(tt),oc=function(e){function i(t,n){var r;(r=e.call(this)||this).type="ShapeBufferGeometry",r.parameters={shapes:t,curveSegments:n},n=n||12;var a=[],o=[],s=[],c=[],l=0,u=0;if(Array.isArray(t)===!1)p(t);else for(var h=0;h<t.length;h++)p(t[h]),r.addGroup(l,u,h),l+=u,u=0;function p(d){var f=o.length/3,g=d.extractPoints(n),m=g.shape,y=g.holes;li.isClockWise(m)===!1&&(m=m.reverse());for(var _=0,x=y.length;_<x;_++){var b=y[_];li.isClockWise(b)===!0&&(y[_]=b.reverse())}for(var w=li.triangulateShape(m,y),E=0,S=y.length;E<S;E++){var P=y[E];m=m.concat(P)}for(var C=0,T=m.length;C<T;C++){var D=m[C];o.push(D.x,D.y,0),s.push(0,0,1),c.push(D.x,D.y)}for(var N=0,F=w.length;N<F;N++){var k=w[N],B=k[0]+f,W=k[1]+f,Q=k[2]+f;a.push(B,W,Q),u+=3}}return r.setIndex(a),r.setAttribute("position",new se(o,3)),r.setAttribute("normal",new se(s,3)),r.setAttribute("uv",new se(c,2)),r}return ge(i,e),i.prototype.toJSON=function(){var t=_e.prototype.toJSON.call(this);return function(n,r){if(r.shapes=[],Array.isArray(n))for(var a=0,o=n.length;a<o;a++){var s=n[a];r.shapes.push(s.uuid)}else r.shapes.push(n.uuid);return r}(this.parameters.shapes,t)},i}(_e),sc=function(e){function i(t,n){var r;return(r=e.call(this)||this).type="ShapeGeometry",typeof n=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),n=n.curveSegments),r.parameters={shapes:t,curveSegments:n},r.fromBufferGeometry(new oc(t,n)),r.mergeVertices(),r}return ge(i,e),i.prototype.toJSON=function(){var t=tt.prototype.toJSON.call(this);return function(n,r){if(r.shapes=[],Array.isArray(n))for(var a=0,o=n.length;a<o;a++){var s=n[a];r.shapes.push(s.uuid)}else r.shapes.push(n.uuid);return r}(this.parameters.shapes,t)},i}(tt),Uo=function(e){function i(t,n,r,a,o,s,c){var l;(l=e.call(this)||this).type="SphereBufferGeometry",l.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:a,phiLength:o,thetaStart:s,thetaLength:c},t=t||1,n=Math.max(3,Math.floor(n)||8),r=Math.max(2,Math.floor(r)||6),a=a!==void 0?a:0,o=o!==void 0?o:2*Math.PI,s=s!==void 0?s:0,c=c!==void 0?c:Math.PI;for(var u=Math.min(s+c,Math.PI),h=0,p=[],d=new M,f=new M,g=[],m=[],y=[],_=[],x=0;x<=r;x++){var b=[],w=x/r,E=0;x==0&&s==0?E=.5/n:x==r&&u==Math.PI&&(E=-.5/n);for(var S=0;S<=n;S++){var P=S/n;d.x=-t*Math.cos(a+P*o)*Math.sin(s+w*c),d.y=t*Math.cos(s+w*c),d.z=t*Math.sin(a+P*o)*Math.sin(s+w*c),m.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),_.push(P+E,1-w),b.push(h++)}p.push(b)}for(var C=0;C<r;C++)for(var T=0;T<n;T++){var D=p[C][T+1],N=p[C][T],F=p[C+1][T],k=p[C+1][T+1];(C!==0||s>0)&&g.push(D,N,k),(C!==r-1||u<Math.PI)&&g.push(N,F,k)}return l.setIndex(g),l.setAttribute("position",new se(m,3)),l.setAttribute("normal",new se(y,3)),l.setAttribute("uv",new se(_,2)),l}return ge(i,e),i}(_e),su=function(e){function i(t,n,r,a,o,s,c){var l;return(l=e.call(this)||this).type="SphereGeometry",l.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:a,phiLength:o,thetaStart:s,thetaLength:c},l.fromBufferGeometry(new Uo(t,n,r,a,o,s,c)),l.mergeVertices(),l}return ge(i,e),i}(tt),cc=function(e){function i(t,n){var r;return(r=e.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,n)||this).type="TetrahedronBufferGeometry",r.parameters={radius:t,detail:n},r}return ge(i,e),i}(ir),cu=function(e){function i(t,n){var r;return(r=e.call(this)||this).type="TetrahedronGeometry",r.parameters={radius:t,detail:n},r.fromBufferGeometry(new cc(t,n)),r.mergeVertices(),r}return ge(i,e),i}(tt),lc=function(e){function i(t,n){var r,a=(n=n||{}).font;if(!a||!a.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new _e||q(r);var o=a.generateShapes(t,n.size);return n.depth=n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),(r=e.call(this,o,n)||this).type="TextBufferGeometry",r}return ge(i,e),i}(Ua),lu=function(e){function i(t,n){var r;return(r=e.call(this)||this).type="TextGeometry",r.parameters={text:t,parameters:n},r.fromBufferGeometry(new lc(t,n)),r.mergeVertices(),r}return ge(i,e),i}(tt),uc=function(e){function i(t,n,r,a,o){var s;(s=e.call(this)||this).type="TorusBufferGeometry",s.parameters={radius:t,tube:n,radialSegments:r,tubularSegments:a,arc:o},t=t||1,n=n||.4,r=Math.floor(r)||8,a=Math.floor(a)||6,o=o||2*Math.PI;for(var c=[],l=[],u=[],h=[],p=new M,d=new M,f=new M,g=0;g<=r;g++)for(var m=0;m<=a;m++){var y=m/a*o,_=g/r*Math.PI*2;d.x=(t+n*Math.cos(_))*Math.cos(y),d.y=(t+n*Math.cos(_))*Math.sin(y),d.z=n*Math.sin(_),l.push(d.x,d.y,d.z),p.x=t*Math.cos(y),p.y=t*Math.sin(y),f.subVectors(d,p).normalize(),u.push(f.x,f.y,f.z),h.push(m/a),h.push(g/r)}for(var x=1;x<=r;x++)for(var b=1;b<=a;b++){var w=(a+1)*x+b-1,E=(a+1)*(x-1)+b-1,S=(a+1)*(x-1)+b,P=(a+1)*x+b;c.push(w,E,P),c.push(E,S,P)}return s.setIndex(c),s.setAttribute("position",new se(l,3)),s.setAttribute("normal",new se(u,3)),s.setAttribute("uv",new se(h,2)),s}return ge(i,e),i}(_e),uu=function(e){function i(t,n,r,a,o){var s;return(s=e.call(this)||this).type="TorusGeometry",s.parameters={radius:t,tube:n,radialSegments:r,tubularSegments:a,arc:o},s.fromBufferGeometry(new uc(t,n,r,a,o)),s.mergeVertices(),s}return ge(i,e),i}(tt),hc=function(e){function i(t,n,r,a,o,s){var c;(c=e.call(this)||this).type="TorusKnotBufferGeometry",c.parameters={radius:t,tube:n,tubularSegments:r,radialSegments:a,p:o,q:s},t=t||1,n=n||.4,r=Math.floor(r)||64,a=Math.floor(a)||8,o=o||2,s=s||3;for(var l=[],u=[],h=[],p=[],d=new M,f=new M,g=new M,m=new M,y=new M,_=new M,x=new M,b=0;b<=r;++b){var w=b/r*o*Math.PI*2;W(w,o,s,t,g),W(w+.01,o,s,t,m),_.subVectors(m,g),x.addVectors(m,g),y.crossVectors(_,x),x.crossVectors(y,_),y.normalize(),x.normalize();for(var E=0;E<=a;++E){var S=E/a*Math.PI*2,P=-n*Math.cos(S),C=n*Math.sin(S);d.x=g.x+(P*x.x+C*y.x),d.y=g.y+(P*x.y+C*y.y),d.z=g.z+(P*x.z+C*y.z),u.push(d.x,d.y,d.z),f.subVectors(d,g).normalize(),h.push(f.x,f.y,f.z),p.push(b/r),p.push(E/a)}}for(var T=1;T<=r;T++)for(var D=1;D<=a;D++){var N=(a+1)*(T-1)+(D-1),F=(a+1)*T+(D-1),k=(a+1)*T+D,B=(a+1)*(T-1)+D;l.push(N,F,B),l.push(F,k,B)}function W(Q,G,H,V,ee){var he=Math.cos(Q),we=Math.sin(Q),R=H/G*Q,L=Math.cos(R);ee.x=V*(2+L)*.5*he,ee.y=V*(2+L)*we*.5,ee.z=V*Math.sin(R)*.5}return c.setIndex(l),c.setAttribute("position",new se(u,3)),c.setAttribute("normal",new se(h,3)),c.setAttribute("uv",new se(p,2)),c}return ge(i,e),i}(_e),hu=function(e){function i(t,n,r,a,o,s,c){var l;return(l=e.call(this)||this).type="TorusKnotGeometry",l.parameters={radius:t,tube:n,tubularSegments:r,radialSegments:a,p:o,q:s},c!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),l.fromBufferGeometry(new hc(t,n,r,a,o,s)),l.mergeVertices(),l}return ge(i,e),i}(tt),dc=function(e){function i(t,n,r,a,o){var s;(s=e.call(this)||this).type="TubeBufferGeometry",s.parameters={path:t,tubularSegments:n,radius:r,radialSegments:a,closed:o},n=n||64,r=r||1,a=a||8,o=o||!1;var c=t.computeFrenetFrames(n,o);s.tangents=c.tangents,s.normals=c.normals,s.binormals=c.binormals;var l=new M,u=new M,h=new I,p=new M,d=[],f=[],g=[],m=[];function y(_){p=t.getPointAt(_/n,p);for(var x=c.normals[_],b=c.binormals[_],w=0;w<=a;w++){var E=w/a*Math.PI*2,S=Math.sin(E),P=-Math.cos(E);u.x=P*x.x+S*b.x,u.y=P*x.y+S*b.y,u.z=P*x.z+S*b.z,u.normalize(),f.push(u.x,u.y,u.z),l.x=p.x+r*u.x,l.y=p.y+r*u.y,l.z=p.z+r*u.z,d.push(l.x,l.y,l.z)}}return function(){for(var _=0;_<n;_++)y(_);y(o===!1?n:0),function(){for(var x=0;x<=n;x++)for(var b=0;b<=a;b++)h.x=x/n,h.y=b/a,g.push(h.x,h.y)}(),function(){for(var x=1;x<=n;x++)for(var b=1;b<=a;b++){var w=(a+1)*(x-1)+(b-1),E=(a+1)*x+(b-1),S=(a+1)*x+b,P=(a+1)*(x-1)+b;m.push(w,E,P),m.push(E,S,P)}}()}(),s.setIndex(m),s.setAttribute("position",new se(d,3)),s.setAttribute("normal",new se(f,3)),s.setAttribute("uv",new se(g,2)),s}return ge(i,e),i.prototype.toJSON=function(){var t=_e.prototype.toJSON.call(this);return t.path=this.parameters.path.toJSON(),t},i}(_e),du=function(e){function i(t,n,r,a,o,s){var c;(c=e.call(this)||this).type="TubeGeometry",c.parameters={path:t,tubularSegments:n,radius:r,radialSegments:a,closed:o},s!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");var l=new dc(t,n,r,a,o);return c.tangents=l.tangents,c.normals=l.normals,c.binormals=l.binormals,c.fromBufferGeometry(l),c.mergeVertices(),c}return ge(i,e),i}(tt),pc=function(e){function i(t){var n;(n=e.call(this)||this).type="WireframeGeometry";var r=[],a=[0,0],o={},s=["a","b","c"];if(t&&t.isGeometry){for(var c=t.faces,l=0,u=c.length;l<u;l++)for(var h=c[l],p=0;p<3;p++){var d=h[s[p]],f=h[s[(p+1)%3]];a[0]=Math.min(d,f),a[1]=Math.max(d,f);var g=a[0]+","+a[1];o[g]===void 0&&(o[g]={index1:a[0],index2:a[1]})}for(var m in o){var y=o[m],_=t.vertices[y.index1];r.push(_.x,_.y,_.z),_=t.vertices[y.index2],r.push(_.x,_.y,_.z)}}else if(t&&t.isBufferGeometry){var x=new M;if(t.index!==null){var b=t.attributes.position,w=t.index,E=t.groups;E.length===0&&(E=[{start:0,count:w.count,materialIndex:0}]);for(var S=0,P=E.length;S<P;++S)for(var C=E[S],T=C.start,D=T,N=T+C.count;D<N;D+=3)for(var F=0;F<3;F++){var k=w.getX(D+F),B=w.getX(D+(F+1)%3);a[0]=Math.min(k,B),a[1]=Math.max(k,B);var W=a[0]+","+a[1];o[W]===void 0&&(o[W]={index1:a[0],index2:a[1]})}for(var Q in o){var G=o[Q];x.fromBufferAttribute(b,G.index1),r.push(x.x,x.y,x.z),x.fromBufferAttribute(b,G.index2),r.push(x.x,x.y,x.z)}}else for(var H=t.attributes.position,V=0,ee=H.count/3;V<ee;V++)for(var he=0;he<3;he++){var we=3*V+he;x.fromBufferAttribute(H,we),r.push(x.x,x.y,x.z);var R=3*V+(he+1)%3;x.fromBufferAttribute(H,R),r.push(x.x,x.y,x.z)}}return n.setAttribute("position",new se(r,3)),n}return ge(i,e),i}(_e),Kt=Object.freeze({__proto__:null,BoxGeometry:Ys,BoxBufferGeometry:_a,CircleGeometry:jl,CircleBufferGeometry:Zs,ConeGeometry:ql,ConeBufferGeometry:Xl,CylinderGeometry:Js,CylinderBufferGeometry:Ia,DodecahedronGeometry:Yl,DodecahedronBufferGeometry:Qs,EdgesGeometry:$s,ExtrudeGeometry:nc,ExtrudeBufferGeometry:Ua,IcosahedronGeometry:tu,IcosahedronBufferGeometry:ic,LatheGeometry:nu,LatheBufferGeometry:rc,OctahedronGeometry:iu,OctahedronBufferGeometry:Go,ParametricGeometry:Fa,ParametricBufferGeometry:Kr,PlaneGeometry:ru,PlaneBufferGeometry:mo,PolyhedronGeometry:au,PolyhedronBufferGeometry:ir,RingGeometry:ou,RingBufferGeometry:ac,ShapeGeometry:sc,ShapeBufferGeometry:oc,SphereGeometry:su,SphereBufferGeometry:Uo,TetrahedronGeometry:cu,TetrahedronBufferGeometry:cc,TextGeometry:lu,TextBufferGeometry:lc,TorusGeometry:uu,TorusBufferGeometry:uc,TorusKnotGeometry:hu,TorusKnotBufferGeometry:hc,TubeGeometry:du,TubeBufferGeometry:dc,WireframeGeometry:pc});function rr(e){Ee.call(this),this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.setValues(e)}function ui(e){Jt.call(this,e),this.type="RawShaderMaterial"}function Xn(e){Ee.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}function Ii(e){Xn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new I(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(i){this.reflectivity=be.clamp(2.5*(i-1)/(i+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}function Bi(e){Ee.call(this),this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}function ar(e){Ee.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}function or(e){Ee.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}function sr(e){Ee.call(this),this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}function cr(e){Ee.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}function lr(e){ut.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}rr.prototype=Object.create(Ee.prototype),rr.prototype.constructor=rr,rr.prototype.isShadowMaterial=!0,rr.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this},ui.prototype=Object.create(Jt.prototype),ui.prototype.constructor=ui,ui.prototype.isRawShaderMaterial=!0,Xn.prototype=Object.create(Ee.prototype),Xn.prototype.constructor=Xn,Xn.prototype.isMeshStandardMaterial=!0,Xn.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this},Ii.prototype=Object.create(Xn.prototype),Ii.prototype.constructor=Ii,Ii.prototype.isMeshPhysicalMaterial=!0,Ii.prototype.copy=function(e){return Xn.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new pe).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this},Bi.prototype=Object.create(Ee.prototype),Bi.prototype.constructor=Bi,Bi.prototype.isMeshPhongMaterial=!0,Bi.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this},ar.prototype=Object.create(Ee.prototype),ar.prototype.constructor=ar,ar.prototype.isMeshToonMaterial=!0,ar.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this},or.prototype=Object.create(Ee.prototype),or.prototype.constructor=or,or.prototype.isMeshNormalMaterial=!0,or.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this},sr.prototype=Object.create(Ee.prototype),sr.prototype.constructor=sr,sr.prototype.isMeshLambertMaterial=!0,sr.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this},cr.prototype=Object.create(Ee.prototype),cr.prototype.constructor=cr,cr.prototype.isMeshMatcapMaterial=!0,cr.prototype.copy=function(e){return Ee.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this},lr.prototype=Object.create(ut.prototype),lr.prototype.constructor=lr,lr.prototype.isLineDashedMaterial=!0,lr.prototype.copy=function(e){return ut.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var Xd=Object.freeze({__proto__:null,ShadowMaterial:rr,SpriteMaterial:Ni,RawShaderMaterial:ui,ShaderMaterial:Jt,PointsMaterial:Ln,MeshPhysicalMaterial:Ii,MeshStandardMaterial:Xn,MeshPhongMaterial:Bi,MeshToonMaterial:ar,MeshNormalMaterial:or,MeshLambertMaterial:sr,MeshDepthMaterial:Ri,MeshDistanceMaterial:Ci,MeshBasicMaterial:vn,MeshMatcapMaterial:cr,LineDashedMaterial:lr,LineBasicMaterial:ut,Material:Ee}),ct={arraySlice:function(e,i,t){return ct.isTypedArray(e)?new e.constructor(e.subarray(i,t!==void 0?t:e.length)):e.slice(i,t)},convertArray:function(e,i,t){return!e||!t&&e.constructor===i?e:typeof i.BYTES_PER_ELEMENT=="number"?new i(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){for(var i=e.length,t=new Array(i),n=0;n!==i;++n)t[n]=n;return t.sort(function(r,a){return e[r]-e[a]}),t},sortedArray:function(e,i,t){for(var n=e.length,r=new e.constructor(n),a=0,o=0;o!==n;++a)for(var s=t[a]*i,c=0;c!==i;++c)r[o++]=e[s+c];return r},flattenJSON:function(e,i,t,n){for(var r=1,a=e[0];a!==void 0&&a[n]===void 0;)a=e[r++];if(a!==void 0){var o=a[n];if(o!==void 0)if(Array.isArray(o))do(o=a[n])!==void 0&&(i.push(a.time),t.push.apply(t,o)),a=e[r++];while(a!==void 0);else if(o.toArray!==void 0)do(o=a[n])!==void 0&&(i.push(a.time),o.toArray(t,t.length)),a=e[r++];while(a!==void 0);else do(o=a[n])!==void 0&&(i.push(a.time),t.push(o)),a=e[r++];while(a!==void 0)}},subclip:function(e,i,t,n,r){r=r||30;var a=e.clone();a.name=i;for(var o=[],s=0;s<a.tracks.length;++s){for(var c=a.tracks[s],l=c.getValueSize(),u=[],h=[],p=0;p<c.times.length;++p){var d=c.times[p]*r;if(!(d<t||d>=n)){u.push(c.times[p]);for(var f=0;f<l;++f)h.push(c.values[p*l+f])}}u.length!==0&&(c.times=ct.convertArray(u,c.times.constructor),c.values=ct.convertArray(h,c.values.constructor),o.push(c))}a.tracks=o;for(var g=1/0,m=0;m<a.tracks.length;++m)g>a.tracks[m].times[0]&&(g=a.tracks[m].times[0]);for(var y=0;y<a.tracks.length;++y)a.tracks[y].shift(-1*g);return a.resetDuration(),a},makeClipAdditive:function(e,i,t,n){i===void 0&&(i=0),t===void 0&&(t=e),(n===void 0||n<=0)&&(n=30);for(var r=t.tracks.length,a=i/n,o=function(c){var l=t.tracks[c],u=l.ValueTypeName;if(u==="bool"||u==="string")return"continue";var h=e.tracks.find(function(k){return k.name===l.name&&k.ValueTypeName===u});if(h===void 0)return"continue";var p=0,d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(p=d/3);var f=0,g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=g/3);var m=l.times.length-1,y=void 0;if(a<=l.times[0]){var _=p,x=d-p;y=ct.arraySlice(l.values,_,x)}else if(a>=l.times[m]){var b=m*d+p,w=b+d-p;y=ct.arraySlice(l.values,b,w)}else{var E=l.createInterpolant(),S=p,P=d-p;E.evaluate(a),y=ct.arraySlice(E.resultBuffer,S,P)}u==="quaternion"&&new Ze().fromArray(y).normalize().conjugate().toArray(y);for(var C=h.times.length,T=0;T<C;++T){var D=T*g+f;if(u==="quaternion")Ze.multiplyQuaternionsFlat(h.values,D,y,0,h.values,D);else for(var N=g-2*f,F=0;F<N;++F)h.values[D+F]-=y[F]}},s=0;s<r;++s)o(s);return e.blendMode=oa,e}};function pn(e,i,t,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new i.constructor(t),this.sampleValues=i,this.valueSize=t}function Fo(e,i,t,n){pn.call(this,e,i,t,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}function Ha(e,i,t,n){pn.call(this,e,i,t,n)}function Ho(e,i,t,n){pn.call(this,e,i,t,n)}function Ht(e,i,t,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ct.convertArray(i,this.TimeBufferType),this.values=ct.convertArray(t,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}function ko(e,i,t){Ht.call(this,e,i,t)}function Vo(e,i,t,n){Ht.call(this,e,i,t,n)}function $r(e,i,t,n){Ht.call(this,e,i,t,n)}function Wo(e,i,t,n){pn.call(this,e,i,t,n)}function ka(e,i,t,n){Ht.call(this,e,i,t,n)}function jo(e,i,t,n){Ht.call(this,e,i,t,n)}function ea(e,i,t,n){Ht.call(this,e,i,t,n)}function xn(e,i,t,n){this.name=e,this.tracks=t,this.duration=i!==void 0?i:-1,this.blendMode=n!==void 0?n:wr,this.uuid=be.generateUUID(),this.duration<0&&this.resetDuration()}function Yd(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");var i=function(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $r;case"vector":case"vector2":case"vector3":case"vector4":return ea;case"color":return Vo;case"quaternion":return ka;case"bool":case"boolean":return ko;case"string":return jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}(e.type);if(e.times===void 0){var t=[],n=[];ct.flattenJSON(e.keys,t,n,"value"),e.times=t,e.values=n}return i.parse!==void 0?i.parse(e):new i(e.name,e.times,e.values,e.interpolation)}Object.assign(pn.prototype,{evaluate:function(e){var i=this.parameterPositions,t=this._cachedIndex,n=i[t],r=i[t-1];e:{t:{var a;n:{i:if(!(e<n)){for(var o=t+2;;){if(n===void 0){if(e<r)break i;return t=i.length,this._cachedIndex=t,this.afterEnd_(t-1,e,r)}if(t===o)break;if(r=n,e<(n=i[++t]))break t}a=i.length;break n}if(e>=r)break e;var s=i[1];e<s&&(t=2,r=s);for(var c=t-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(t===c)break;if(n=r,e>=(r=i[--t-1]))break t}a=t,t=0}for(;t<a;){var l=t+a>>>1;e<i[l]?a=l:t=l+1}if(n=i[t],(r=i[t-1])===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(n===void 0)return t=i.length,this._cachedIndex=t,this.afterEnd_(t-1,r,e)}this._cachedIndex=t,this.intervalChanged_(t,r,n)}return this.interpolate_(t,r,e,n)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){for(var i=this.resultBuffer,t=this.sampleValues,n=this.valueSize,r=e*n,a=0;a!==n;++a)i[a]=t[r+a];return i},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),Object.assign(pn.prototype,{beforeStart_:pn.prototype.copySampleValue_,afterEnd_:pn.prototype.copySampleValue_}),Fo.prototype=Object.assign(Object.create(pn.prototype),{constructor:Fo,DefaultSettings_:{endingStart:Fn,endingEnd:Fn},intervalChanged_:function(e,i,t){var n=this.parameterPositions,r=e-2,a=e+1,o=n[r],s=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case ni:r=e,o=2*i-t;break;case ji:o=i+n[r=n.length-2]-n[r+1];break;default:r=e,o=t}if(s===void 0)switch(this.getSettings_().endingEnd){case ni:a=e,s=2*t-i;break;case ji:a=1,s=t+n[1]-n[0];break;default:a=e-1,s=i}var c=.5*(t-i),l=this.valueSize;this._weightPrev=c/(i-o),this._weightNext=c/(s-t),this._offsetPrev=r*l,this._offsetNext=a*l},interpolate_:function(e,i,t,n){for(var r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,d=(t-i)/(n-i),f=d*d,g=f*d,m=-h*g+2*h*f-h*d,y=(1+h)*g+(-1.5-2*h)*f+(-.5+h)*d+1,_=(-1-p)*g+(1.5+p)*f+.5*d,x=p*g-p*f,b=0;b!==o;++b)r[b]=m*a[l+b]+y*a[c+b]+_*a[s+b]+x*a[u+b];return r}}),Ha.prototype=Object.assign(Object.create(pn.prototype),{constructor:Ha,interpolate_:function(e,i,t,n){for(var r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(t-i)/(n-i),u=1-l,h=0;h!==o;++h)r[h]=a[c+h]*u+a[s+h]*l;return r}}),Ho.prototype=Object.assign(Object.create(pn.prototype),{constructor:Ho,interpolate_:function(e){return this.copySampleValue_(e-1)}}),Object.assign(Ht,{toJSON:function(e){var i,t=e.constructor;if(t.toJSON!==void 0)i=t.toJSON(e);else{i={name:e.name,times:ct.convertArray(e.times,Array),values:ct.convertArray(e.values,Array)};var n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}}),Object.assign(Ht.prototype,{constructor:Ht,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Vi,InterpolantFactoryMethodDiscrete:function(e){return new Ho(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Ha(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new Fo(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){var i;switch(e){case xi:i=this.InterpolantFactoryMethodDiscrete;break;case Vi:i=this.InterpolantFactoryMethodLinear;break;case Wi:i=this.InterpolantFactoryMethodSmooth}if(i===void 0){var t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(t);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=i,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xi;case this.InterpolantFactoryMethodLinear:return Vi;case this.InterpolantFactoryMethodSmooth:return Wi}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0)for(var i=this.times,t=0,n=i.length;t!==n;++t)i[t]+=e;return this},scale:function(e){if(e!==1)for(var i=this.times,t=0,n=i.length;t!==n;++t)i[t]*=e;return this},trim:function(e,i){for(var t=this.times,n=t.length,r=0,a=n-1;r!==n&&t[r]<e;)++r;for(;a!==-1&&t[a]>i;)--a;if(++a,r!==0||a!==n){r>=a&&(r=(a=Math.max(a,1))-1);var o=this.getValueSize();this.times=ct.arraySlice(t,r,a),this.values=ct.arraySlice(this.values,r*o,a*o)}return this},validate:function(){var e=!0,i=this.getValueSize();i-Math.floor(i)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);var t=this.times,n=this.values,r=t.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);for(var a=null,o=0;o!==r;o++){var s=t[o];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,s),e=!1;break}if(a!==null&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,s,a),e=!1;break}a=s}if(n!==void 0&&ct.isTypedArray(n))for(var c=0,l=n.length;c!==l;++c){var u=n[c];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,u),e=!1;break}}return e},optimize:function(){for(var e=ct.arraySlice(this.times),i=ct.arraySlice(this.values),t=this.getValueSize(),n=this.getInterpolation()===Wi,r=e.length-1,a=1,o=1;o<r;++o){var s=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==c[0]))if(n)s=!0;else for(var l=o*t,u=l-t,h=l+t,p=0;p!==t;++p){var d=i[l+p];if(d!==i[u+p]||d!==i[h+p]){s=!0;break}}if(s){if(o!==a){e[a]=e[o];for(var f=o*t,g=a*t,m=0;m!==t;++m)i[g+m]=i[f+m]}++a}}if(r>0){e[a]=e[r];for(var y=r*t,_=a*t,x=0;x!==t;++x)i[_+x]=i[y+x];++a}return a!==e.length?(this.times=ct.arraySlice(e,0,a),this.values=ct.arraySlice(i,0,a*t)):(this.times=e,this.values=i),this},clone:function(){var e=ct.arraySlice(this.times,0),i=ct.arraySlice(this.values,0),t=new this.constructor(this.name,e,i);return t.createInterpolant=this.createInterpolant,t}}),ko.prototype=Object.assign(Object.create(Ht.prototype),{constructor:ko,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:xi,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Vo.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Vo,ValueTypeName:"color"}),$r.prototype=Object.assign(Object.create(Ht.prototype),{constructor:$r,ValueTypeName:"number"}),Wo.prototype=Object.assign(Object.create(pn.prototype),{constructor:Wo,interpolate_:function(e,i,t,n){for(var r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(t-i)/(n-i),c=e*o,l=c+o;c!==l;c+=4)Ze.slerpFlat(r,0,a,c-o,a,c,s);return r}}),ka.prototype=Object.assign(Object.create(Ht.prototype),{constructor:ka,ValueTypeName:"quaternion",DefaultInterpolation:Vi,InterpolantFactoryMethodLinear:function(e){return new Wo(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0}),jo.prototype=Object.assign(Object.create(Ht.prototype),{constructor:jo,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:xi,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),ea.prototype=Object.assign(Object.create(Ht.prototype),{constructor:ea,ValueTypeName:"vector"}),Object.assign(xn,{parse:function(e){for(var i=[],t=e.tracks,n=1/(e.fps||1),r=0,a=t.length;r!==a;++r)i.push(Yd(t[r]).scale(n));return new xn(e.name,e.duration,i,e.blendMode)},toJSON:function(e){for(var i=[],t=e.tracks,n={name:e.name,duration:e.duration,tracks:i,uuid:e.uuid,blendMode:e.blendMode},r=0,a=t.length;r!==a;++r)i.push(Ht.toJSON(t[r]));return n},CreateFromMorphTargetSequence:function(e,i,t,n){for(var r=i.length,a=[],o=0;o<r;o++){var s=[],c=[];s.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);var l=ct.getKeyframeOrder(s);s=ct.sortedArray(s,1,l),c=ct.sortedArray(c,1,l),n||s[0]!==0||(s.push(r),c.push(c[0])),a.push(new $r(".morphTargetInfluences["+i[o].name+"]",s,c).scale(1/t))}return new xn(e,-1,a)},findByName:function(e,i){var t=e;if(!Array.isArray(e)){var n=e;t=n.geometry&&n.geometry.animations||n.animations}for(var r=0;r<t.length;r++)if(t[r].name===i)return t[r];return null},CreateClipsFromMorphTargetSequences:function(e,i,t){for(var n={},r=/^([\w-]*?)([\d]+)$/,a=0,o=e.length;a<o;a++){var s=e[a],c=s.name.match(r);if(c&&c.length>1){var l=c[1],u=n[l];u||(n[l]=u=[]),u.push(s)}}var h=[];for(var p in n)h.push(xn.CreateFromMorphTargetSequence(p,n[p],i,t));return h},parseAnimation:function(e,i){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;for(var t=function(b,w,E,S,P){if(E.length!==0){var C=[],T=[];ct.flattenJSON(E,C,T,S),C.length!==0&&P.push(new b(w,C,T))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[],l=0;l<c.length;l++){var u=c[l].keys;if(u&&u.length!==0)if(u[0].morphTargets){var h={},p=void 0;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(var d=0;d<u[p].morphTargets.length;d++)h[u[p].morphTargets[d]]=-1;for(var f in h){for(var g=[],m=[],y=0;y!==u[p].morphTargets.length;++y){var _=u[p];g.push(_.time),m.push(_.morphTarget===f?1:0)}n.push(new $r(".morphTargetInfluence["+f+"]",g,m))}s=h.length*(a||1)}else{var x=".bones["+i[l].name+"]";t(ea,x+".position",u,"pos",n),t(ka,x+".quaternion",u,"rot",n),t(ea,x+".scale",u,"scl",n)}}return n.length===0?null:new xn(r,s,n,o)}}),Object.assign(xn.prototype,{resetDuration:function(){for(var e=0,i=0,t=this.tracks.length;i!==t;++i){var n=this.tracks[i];e=Math.max(e,n.times[n.times.length-1])}return this.duration=e,this},trim:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){for(var e=!0,i=0;i<this.tracks.length;i++)e=e&&this.tracks[i].validate();return e},optimize:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){for(var e=[],i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());return new xn(this.name,this.duration,e,this.blendMode)}});var ur={enabled:!1,files:{},add:function(e,i){this.enabled!==!1&&(this.files[e]=i)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function fc(e,i,t){var n=this,r=!1,a=0,o=0,s=void 0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=t,this.itemStart=function(l){o++,r===!1&&n.onStart!==void 0&&n.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,n.onProgress!==void 0&&n.onProgress(l,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return s?s(l):l},this.setURLModifier=function(l){return s=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){var u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(var u=0,h=c.length;u<h;u+=2){var p=c[u],d=c[u+1];if(p.global&&(p.lastIndex=0),p.test(l))return d}return null}}var pu=new fc;function $e(e){this.manager=e!==void 0?e:pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign($e.prototype,{load:function(){},loadAsync:function(e,i){var t=this;return new Promise(function(n,r){t.load(e,n,i,r)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});var Rn={};function bn(e){$e.call(this,e)}function mc(e){$e.call(this,e)}function vc(e){$e.call(this,e)}function ta(e){$e.call(this,e)}function qo(e){$e.call(this,e)}function Xo(e){$e.call(this,e)}function Yo(e){$e.call(this,e)}function xe(){this.type="Curve",this.arcLengthDivisions=200}function fn(e,i,t,n,r,a,o,s){xe.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=i||0,this.xRadius=t||1,this.yRadius=n||1,this.aStartAngle=r||0,this.aEndAngle=a||2*Math.PI,this.aClockwise=o||!1,this.aRotation=s||0}function na(e,i,t,n,r,a){fn.call(this,e,i,t,t,n,r,a),this.type="ArcCurve"}function gc(){var e=0,i=0,t=0,n=0;function r(a,o,s,c){e=a,i=s,t=-3*a+3*o-2*s-c,n=2*a-2*o+s+c}return{initCatmullRom:function(a,o,s,c,l){r(o,s,l*(s-a),l*(c-o))},initNonuniformCatmullRom:function(a,o,s,c,l,u,h){var p=(o-a)/l-(s-a)/(l+u)+(s-o)/u,d=(s-o)/u-(c-o)/(u+h)+(c-s)/h;r(o,s,p*=u,d*=u)},calc:function(a){var o=a*a;return e+i*a+t*o+n*(o*a)}}}bn.prototype=Object.assign(Object.create($e.prototype),{constructor:bn,load:function(e,i,t,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);var r=this,a=ur.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){i&&i(a),r.manager.itemEnd(e)},0),a;if(Rn[e]===void 0){var o,s=e.match(/^data:(.*?)(;base64)?,(.*)$/);if(s){var c=s[1],l=!!s[2],u=s[3];u=decodeURIComponent(u),l&&(u=atob(u));try{var h,p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":for(var d=new Uint8Array(u.length),f=0;f<u.length;f++)d[f]=u.charCodeAt(f);h=p==="blob"?new Blob([d.buffer],{type:c}):d.buffer;break;case"document":var g=new DOMParser;h=g.parseFromString(u,c);break;case"json":h=JSON.parse(u);break;default:h=u}setTimeout(function(){i&&i(h),r.manager.itemEnd(e)},0)}catch(y){setTimeout(function(){n&&n(y),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{for(var m in Rn[e]=[],Rn[e].push({onLoad:i,onProgress:t,onError:n}),(o=new XMLHttpRequest).open("GET",e,!0),o.addEventListener("load",function(y){var _=this.response,x=Rn[e];if(delete Rn[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ur.add(e,_);for(var b=0,w=x.length;b<w;b++){var E=x[b];E.onLoad&&E.onLoad(_)}r.manager.itemEnd(e)}else{for(var S=0,P=x.length;S<P;S++){var C=x[S];C.onError&&C.onError(y)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),o.addEventListener("progress",function(y){for(var _=Rn[e],x=0,b=_.length;x<b;x++){var w=_[x];w.onProgress&&w.onProgress(y)}},!1),o.addEventListener("error",function(y){var _=Rn[e];delete Rn[e];for(var x=0,b=_.length;x<b;x++){var w=_[x];w.onError&&w.onError(y)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),o.addEventListener("abort",function(y){var _=Rn[e];delete Rn[e];for(var x=0,b=_.length;x<b;x++){var w=_[x];w.onError&&w.onError(y)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(o.responseType=this.responseType),this.withCredentials!==void 0&&(o.withCredentials=this.withCredentials),o.overrideMimeType&&o.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain"),this.requestHeader)o.setRequestHeader(m,this.requestHeader[m]);o.send(null)}return r.manager.itemStart(e),o}Rn[e].push({onLoad:i,onProgress:t,onError:n})},setResponseType:function(e){return this.responseType=e,this},setMimeType:function(e){return this.mimeType=e,this}}),mc.prototype=Object.assign(Object.create($e.prototype),{constructor:mc,load:function(e,i,t,n){var r=this,a=new bn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{i(r.parse(JSON.parse(o)))}catch(s){n?n(s):console.error(s),r.manager.itemError(e)}},t,n)},parse:function(e){for(var i=[],t=0;t<e.length;t++){var n=xn.parse(e[t]);i.push(n)}return i}}),vc.prototype=Object.assign(Object.create($e.prototype),{constructor:vc,load:function(e,i,t,n){var r=this,a=[],o=new Zr;o.image=a;var s=new bn(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials);var c=0;function l(p){s.load(e[p],function(d){var f=r.parse(d,!0);a[p]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},(c+=1)===6&&(f.mipmapCount===1&&(o.minFilter=X),o.format=f.format,o.needsUpdate=!0,i&&i(o))},t,n)}if(Array.isArray(e))for(var u=0,h=e.length;u<h;++u)l(u);else s.load(e,function(p){var d=r.parse(p,!0);if(d.isCubemap)for(var f=d.mipmaps.length/d.mipmapCount,g=0;g<f;g++){a[g]={mipmaps:[]};for(var m=0;m<d.mipmapCount;m++)a[g].mipmaps.push(d.mipmaps[g*d.mipmapCount+m]),a[g].format=d.format,a[g].width=d.width,a[g].height=d.height}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=X),o.format=d.format,o.needsUpdate=!0,i&&i(o)},t,n);return o}}),ta.prototype=Object.assign(Object.create($e.prototype),{constructor:ta,load:function(e,i,t,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);var r=this,a=ur.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){i&&i(a),r.manager.itemEnd(e)},0),a;var o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function s(){o.removeEventListener("load",s,!1),o.removeEventListener("error",c,!1),ur.add(e,this),i&&i(this),r.manager.itemEnd(e)}function c(l){o.removeEventListener("load",s,!1),o.removeEventListener("error",c,!1),n&&n(l),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",s,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}),qo.prototype=Object.assign(Object.create($e.prototype),{constructor:qo,load:function(e,i,t,n){var r=new jn,a=new ta(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);var o=0;function s(l){a.load(e[l],function(u){r.images[l]=u,++o===6&&(r.needsUpdate=!0,i&&i(r))},void 0,n)}for(var c=0;c<e.length;++c)s(c);return r}}),Xo.prototype=Object.assign(Object.create($e.prototype),{constructor:Xo,load:function(e,i,t,n){var r=this,a=new tr,o=new bn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(s){var c=r.parse(s);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Dt,a.wrapT=c.wrapT!==void 0?c.wrapT:Dt,a.magFilter=c.magFilter!==void 0?c.magFilter:X,a.minFilter=c.minFilter!==void 0?c.minFilter:X,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ue),c.mipmapCount===1&&(a.minFilter=X),a.needsUpdate=!0,i&&i(a,c))},t,n),a}}),Yo.prototype=Object.assign(Object.create($e.prototype),{constructor:Yo,load:function(e,i,t,n){var r=new Te,a=new ta(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o;var s=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=s?bt:St,r.needsUpdate=!0,i!==void 0&&i(r)},t,n),r}}),Object.assign(xe.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,i){var t=this.getUtoTmapping(e);return this.getPoint(t,i)},getPoints:function(e){e===void 0&&(e=5);for(var i=[],t=0;t<=e;t++)i.push(this.getPoint(t/e));return i},getSpacedPoints:function(e){e===void 0&&(e=5);for(var i=[],t=0;t<=e;t++)i.push(this.getPointAt(t/e));return i},getLength:function(){var e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var i,t=[],n=this.getPoint(0),r=0;t.push(0);for(var a=1;a<=e;a++)r+=(i=this.getPoint(a/e)).distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,i){var t,n=this.getLengths(),r=0,a=n.length;t=i||e*n[a-1];for(var o,s=0,c=a-1;s<=c;)if((o=n[r=Math.floor(s+(c-s)/2)]-t)<0)s=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(n[r=c]===t)return r/(a-1);var l=n[r];return(r+(t-l)/(n[r+1]-l))/(a-1)},getTangent:function(e,i){var t=1e-4,n=e-t,r=e+t;n<0&&(n=0),r>1&&(r=1);var a=this.getPoint(n),o=this.getPoint(r),s=i||(a.isVector2?new I:new M);return s.copy(o).sub(a).normalize(),s},getTangentAt:function(e,i){var t=this.getUtoTmapping(e);return this.getTangent(t,i)},computeFrenetFrames:function(e,i){for(var t=new M,n=[],r=[],a=[],o=new M,s=new Ne,c=0;c<=e;c++){var l=c/e;n[c]=this.getTangentAt(l,new M),n[c].normalize()}r[0]=new M,a[0]=new M;var u=Number.MAX_VALUE,h=Math.abs(n[0].x),p=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=u&&(u=h,t.set(1,0,0)),p<=u&&(u=p,t.set(0,1,0)),d<=u&&t.set(0,0,1),o.crossVectors(n[0],t).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(var f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();var g=Math.acos(be.clamp(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(s.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(i===!0){var m=Math.acos(be.clamp(r[0].dot(r[e]),-1,1));m/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(var y=1;y<=e;y++)r[y].applyMatrix4(s.makeRotationAxis(n[y],m*y)),a[y].crossVectors(n[y],r[y])}return{tangents:n,normals:r,binormals:a}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){var e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}),fn.prototype=Object.create(xe.prototype),fn.prototype.constructor=fn,fn.prototype.isEllipseCurve=!0,fn.prototype.getPoint=function(e,i){for(var t=i||new I,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=a?0:n),this.aClockwise!==!0||a||(r===n?r=-n:r-=n);var o=this.aStartAngle+e*r,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){var l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=s-this.aX,p=c-this.aY;s=h*l-p*u+this.aX,c=h*u+p*l+this.aY}return t.set(s,c)},fn.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this},fn.prototype.toJSON=function(){var e=xe.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e},fn.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this},na.prototype=Object.create(fn.prototype),na.prototype.constructor=na,na.prototype.isArcCurve=!0;var Zo=new M,yc=new gc,xc=new gc,bc=new gc;function Wt(e,i,t,n){xe.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=i||!1,this.curveType=t||"centripetal",this.tension=n!==void 0?n:.5}function fu(e,i,t,n,r){var a=.5*(n-i),o=.5*(r-t),s=e*e;return(2*t-2*n+a+o)*(e*s)+(-3*t+3*n-2*a-o)*s+a*e+t}function Va(e,i,t,n){return function(r,a){var o=1-r;return o*o*a}(e,i)+function(r,a){return 2*(1-r)*r*a}(e,t)+function(r,a){return r*r*a}(e,n)}function Wa(e,i,t,n,r){return function(a,o){var s=1-a;return s*s*s*o}(e,i)+function(a,o){var s=1-a;return 3*s*s*a*o}(e,t)+function(a,o){return 3*(1-a)*a*a*o}(e,n)+function(a,o){return a*a*a*o}(e,r)}function Cn(e,i,t,n){xe.call(this),this.type="CubicBezierCurve",this.v0=e||new I,this.v1=i||new I,this.v2=t||new I,this.v3=n||new I}function Yn(e,i,t,n){xe.call(this),this.type="CubicBezierCurve3",this.v0=e||new M,this.v1=i||new M,this.v2=t||new M,this.v3=n||new M}function rn(e,i){xe.call(this),this.type="LineCurve",this.v1=e||new I,this.v2=i||new I}function Pn(e,i){xe.call(this),this.type="LineCurve3",this.v1=e||new M,this.v2=i||new M}function On(e,i,t){xe.call(this),this.type="QuadraticBezierCurve",this.v0=e||new I,this.v1=i||new I,this.v2=t||new I}function Zn(e,i,t){xe.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new M,this.v1=i||new M,this.v2=t||new M}function Nn(e){xe.call(this),this.type="SplineCurve",this.points=e||[]}Wt.prototype=Object.create(xe.prototype),Wt.prototype.constructor=Wt,Wt.prototype.isCatmullRomCurve3=!0,Wt.prototype.getPoint=function(e,i){var t,n,r=i||new M,a=this.points,o=a.length,s=(o-(this.closed?0:1))*e,c=Math.floor(s),l=s-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:l===0&&c===o-1&&(c=o-2,l=1),this.closed||c>0?t=a[(c-1)%o]:(Zo.subVectors(a[0],a[1]).add(a[0]),t=Zo);var u=a[c%o],h=a[(c+1)%o];if(this.closed||c+2<o?n=a[(c+2)%o]:(Zo.subVectors(a[o-1],a[o-2]).add(a[o-1]),n=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){var p=this.curveType==="chordal"?.5:.25,d=Math.pow(t.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(n),p);f<1e-4&&(f=1),d<1e-4&&(d=f),g<1e-4&&(g=f),yc.initNonuniformCatmullRom(t.x,u.x,h.x,n.x,d,f,g),xc.initNonuniformCatmullRom(t.y,u.y,h.y,n.y,d,f,g),bc.initNonuniformCatmullRom(t.z,u.z,h.z,n.z,d,f,g)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(t.x,u.x,h.x,n.x,this.tension),xc.initCatmullRom(t.y,u.y,h.y,n.y,this.tension),bc.initCatmullRom(t.z,u.z,h.z,n.z,this.tension));return r.set(yc.calc(l),xc.calc(l),bc.calc(l)),r},Wt.prototype.copy=function(e){xe.prototype.copy.call(this,e),this.points=[];for(var i=0,t=e.points.length;i<t;i++){var n=e.points[i];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this},Wt.prototype.toJSON=function(){var e=xe.prototype.toJSON.call(this);e.points=[];for(var i=0,t=this.points.length;i<t;i++){var n=this.points[i];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e},Wt.prototype.fromJSON=function(e){xe.prototype.fromJSON.call(this,e),this.points=[];for(var i=0,t=e.points.length;i<t;i++){var n=e.points[i];this.points.push(new M().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this},Cn.prototype=Object.create(xe.prototype),Cn.prototype.constructor=Cn,Cn.prototype.isCubicBezierCurve=!0,Cn.prototype.getPoint=function(e,i){var t=i||new I,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return t.set(Wa(e,n.x,r.x,a.x,o.x),Wa(e,n.y,r.y,a.y,o.y)),t},Cn.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this},Cn.prototype.toJSON=function(){var e=xe.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e},Cn.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this},Yn.prototype=Object.create(xe.prototype),Yn.prototype.constructor=Yn,Yn.prototype.isCubicBezierCurve3=!0,Yn.prototype.getPoint=function(e,i){var t=i||new M,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return t.set(Wa(e,n.x,r.x,a.x,o.x),Wa(e,n.y,r.y,a.y,o.y),Wa(e,n.z,r.z,a.z,o.z)),t},Yn.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this},Yn.prototype.toJSON=function(){var e=xe.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e},Yn.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this},rn.prototype=Object.create(xe.prototype),rn.prototype.constructor=rn,rn.prototype.isLineCurve=!0,rn.prototype.getPoint=function(e,i){var t=i||new I;return e===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t},rn.prototype.getPointAt=function(e,i){return this.getPoint(e,i)},rn.prototype.getTangent=function(e,i){var t=i||new I;return t.copy(this.v2).sub(this.v1).normalize(),t},rn.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this},rn.prototype.toJSON=function(){var e=xe.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},rn.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this},Pn.prototype=Object.create(xe.prototype),Pn.prototype.constructor=Pn,Pn.prototype.isLineCurve3=!0,Pn.prototype.getPoint=function(e,i){var t=i||new M;return e===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t},Pn.prototype.getPointAt=function(e,i){return this.getPoint(e,i)},Pn.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this},Pn.prototype.toJSON=function(){var e=xe.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},Pn.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this},On.prototype=Object.create(xe.prototype),On.prototype.constructor=On,On.prototype.isQuadraticBezierCurve=!0,On.prototype.getPoint=function(e,i){var t=i||new I,n=this.v0,r=this.v1,a=this.v2;return t.set(Va(e,n.x,r.x,a.x),Va(e,n.y,r.y,a.y)),t},On.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this},On.prototype.toJSON=function(){var e=xe.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},On.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this},Zn.prototype=Object.create(xe.prototype),Zn.prototype.constructor=Zn,Zn.prototype.isQuadraticBezierCurve3=!0,Zn.prototype.getPoint=function(e,i){var t=i||new M,n=this.v0,r=this.v1,a=this.v2;return t.set(Va(e,n.x,r.x,a.x),Va(e,n.y,r.y,a.y),Va(e,n.z,r.z,a.z)),t},Zn.prototype.copy=function(e){return xe.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this},Zn.prototype.toJSON=function(){var e=xe.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e},Zn.prototype.fromJSON=function(e){return xe.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this},Nn.prototype=Object.create(xe.prototype),Nn.prototype.constructor=Nn,Nn.prototype.isSplineCurve=!0,Nn.prototype.getPoint=function(e,i){var t=i||new I,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,s=n[a===0?a:a-1],c=n[a],l=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return t.set(fu(o,s.x,c.x,l.x,u.x),fu(o,s.y,c.y,l.y,u.y)),t},Nn.prototype.copy=function(e){xe.prototype.copy.call(this,e),this.points=[];for(var i=0,t=e.points.length;i<t;i++){var n=e.points[i];this.points.push(n.clone())}return this},Nn.prototype.toJSON=function(){var e=xe.prototype.toJSON.call(this);e.points=[];for(var i=0,t=this.points.length;i<t;i++){var n=this.points[i];e.points.push(n.toArray())}return e},Nn.prototype.fromJSON=function(e){xe.prototype.fromJSON.call(this,e),this.points=[];for(var i=0,t=e.points.length;i<t;i++){var n=e.points[i];this.points.push(new I().fromArray(n))}return this};var _c=Object.freeze({__proto__:null,ArcCurve:na,CatmullRomCurve3:Wt,CubicBezierCurve:Cn,CubicBezierCurve3:Yn,EllipseCurve:fn,LineCurve:rn,LineCurve3:Pn,QuadraticBezierCurve:On,QuadraticBezierCurve3:Zn,SplineCurve:Nn});function hi(){xe.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}function Dn(e){hi.call(this),this.type="Path",this.currentPoint=new I,e&&this.setFromPoints(e)}function zi(e){Dn.call(this,e),this.uuid=be.generateUUID(),this.type="Shape",this.holes=[]}function at(e,i){ye.call(this),this.type="Light",this.color=new pe(e),this.intensity=i!==void 0?i:1}function Jo(e,i,t){at.call(this,e,t),this.type="HemisphereLight",this.position.copy(ye.DefaultUp),this.updateMatrix(),this.groundColor=new pe(i)}function di(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new I(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new I(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}function wc(){di.call(this,new Et(50,1,.5,500)),this.focus=1}function Qo(e,i,t,n,r,a){at.call(this,e,i),this.type="SpotLight",this.position.copy(ye.DefaultUp),this.updateMatrix(),this.target=new ye,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=t!==void 0?t:0,this.angle=n!==void 0?n:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=a!==void 0?a:1,this.shadow=new wc}function Mc(){di.call(this,new Et(90,1,.5,500)),this._frameExtents=new I(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}function Ko(e,i,t,n){at.call(this,e,i),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=t!==void 0?t:0,this.decay=n!==void 0?n:1,this.shadow=new Mc}function ia(e,i,t,n,r,a){Wn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e!==void 0?e:-1,this.right=i!==void 0?i:1,this.top=t!==void 0?t:1,this.bottom=n!==void 0?n:-1,this.near=r!==void 0?r:.1,this.far=a!==void 0?a:2e3,this.updateProjectionMatrix()}function Sc(){di.call(this,new ia(-5,5,5,-5,.5,500))}function $o(e,i){at.call(this,e,i),this.type="DirectionalLight",this.position.copy(ye.DefaultUp),this.updateMatrix(),this.target=new ye,this.shadow=new Sc}function es(e,i){at.call(this,e,i),this.type="AmbientLight"}function ts(e,i,t,n){at.call(this,e,i),this.type="RectAreaLight",this.width=t!==void 0?t:10,this.height=n!==void 0?n:10}hi.prototype=Object.assign(Object.create(xe.prototype),{constructor:hi,add:function(e){this.curves.push(e)},closePath:function(){var e=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);e.equals(i)||this.curves.push(new rn(i,e))},getPoint:function(e){for(var i=e*this.getLength(),t=this.getCurveLengths(),n=0;n<t.length;){if(t[n]>=i){var r=t[n]-i,a=this.curves[n],o=a.getLength(),s=o===0?0:1-r/o;return a.getPointAt(s)}n++}return null},getLength:function(){var e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var e=[],i=0,t=0,n=this.curves.length;t<n;t++)i+=this.curves[t].getLength(),e.push(i);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);for(var i=[],t=0;t<=e;t++)i.push(this.getPoint(t/e));return this.autoClose&&i.push(i[0]),i},getPoints:function(e){e=e||12;for(var i,t=[],n=0,r=this.curves;n<r.length;n++)for(var a=r[n],o=a&&a.isEllipseCurve?2*e:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o),c=0;c<s.length;c++){var l=s[c];i&&i.equals(l)||(t.push(l),i=l)}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){xe.prototype.copy.call(this,e),this.curves=[];for(var i=0,t=e.curves.length;i<t;i++){var n=e.curves[i];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){var e=xe.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(var i=0,t=this.curves.length;i<t;i++){var n=this.curves[i];e.curves.push(n.toJSON())}return e},fromJSON:function(e){xe.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(var i=0,t=e.curves.length;i<t;i++){var n=e.curves[i];this.curves.push(new _c[n.type]().fromJSON(n))}return this}}),Dn.prototype=Object.assign(Object.create(hi.prototype),{constructor:Dn,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(var i=1,t=e.length;i<t;i++)this.lineTo(e[i].x,e[i].y);return this},moveTo:function(e,i){return this.currentPoint.set(e,i),this},lineTo:function(e,i){var t=new rn(this.currentPoint.clone(),new I(e,i));return this.curves.push(t),this.currentPoint.set(e,i),this},quadraticCurveTo:function(e,i,t,n){var r=new On(this.currentPoint.clone(),new I(e,i),new I(t,n));return this.curves.push(r),this.currentPoint.set(t,n),this},bezierCurveTo:function(e,i,t,n,r,a){var o=new Cn(this.currentPoint.clone(),new I(e,i),new I(t,n),new I(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this},splineThru:function(e){var i=new Nn([this.currentPoint.clone()].concat(e));return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,i,t,n,r,a){var o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,i+s,t,n,r,a),this},absarc:function(e,i,t,n,r,a){return this.absellipse(e,i,t,t,n,r,a),this},ellipse:function(e,i,t,n,r,a,o,s){var c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,i+l,t,n,r,a,o,s),this},absellipse:function(e,i,t,n,r,a,o,s){var c=new fn(e,i,t,n,r,a,o,s);if(this.curves.length>0){var l=c.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(c);var u=c.getPoint(1);return this.currentPoint.copy(u),this},copy:function(e){return hi.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){var e=hi.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return hi.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}}),zi.prototype=Object.assign(Object.create(Dn.prototype),{constructor:zi,getPointsHoles:function(e){for(var i=[],t=0,n=this.holes.length;t<n;t++)i[t]=this.holes[t].getPoints(e);return i},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){Dn.prototype.copy.call(this,e),this.holes=[];for(var i=0,t=e.holes.length;i<t;i++){var n=e.holes[i];this.holes.push(n.clone())}return this},toJSON:function(){var e=Dn.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(var i=0,t=this.holes.length;i<t;i++){var n=this.holes[i];e.holes.push(n.toJSON())}return e},fromJSON:function(e){Dn.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(var i=0,t=e.holes.length;i<t;i++){var n=e.holes[i];this.holes.push(new Dn().fromJSON(n))}return this}}),at.prototype=Object.assign(Object.create(ye.prototype),{constructor:at,isLight:!0,copy:function(e){return ye.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){var i=ye.prototype.toJSON.call(this,e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}),Jo.prototype=Object.assign(Object.create(at.prototype),{constructor:Jo,isHemisphereLight:!0,copy:function(e){return at.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}),Object.assign(di.prototype,{_projScreenMatrix:new Ne,_lightPositionWorld:new M,_lookTarget:new M,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){var i=this.camera,t=this.matrix,n=this._projScreenMatrix,r=this._lookTarget,a=this._lightPositionWorld;a.setFromMatrixPosition(e.matrixWorld),i.position.copy(a),r.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(r),i.updateMatrixWorld(),n.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(n),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(i.projectionMatrix),t.multiply(i.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){var e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}),wc.prototype=Object.assign(Object.create(di.prototype),{constructor:wc,isSpotLightShadow:!0,updateMatrices:function(e){var i=this.camera,t=2*be.RAD2DEG*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||i.far;t===i.fov&&n===i.aspect&&r===i.far||(i.fov=t,i.aspect=n,i.far=r,i.updateProjectionMatrix()),di.prototype.updateMatrices.call(this,e)}}),Qo.prototype=Object.assign(Object.create(at.prototype),{constructor:Qo,isSpotLight:!0,copy:function(e){return at.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}),Mc.prototype=Object.assign(Object.create(di.prototype),{constructor:Mc,isPointLightShadow:!0,updateMatrices:function(e,i){i===void 0&&(i=0);var t=this.camera,n=this.matrix,r=this._lightPositionWorld,a=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(e.matrixWorld),t.position.copy(r),a.copy(t.position),a.add(this._cubeDirections[i]),t.up.copy(this._cubeUps[i]),t.lookAt(a),t.updateMatrixWorld(),n.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}}),Ko.prototype=Object.assign(Object.create(at.prototype),{constructor:Ko,isPointLight:!0,copy:function(e){return at.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}),ia.prototype=Object.assign(Object.create(Wn.prototype),{constructor:ia,isOrthographicCamera:!0,copy:function(e,i){return Wn.prototype.copy.call(this,e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,i,t,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=t,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=t-e,a=t+e,o=n+i,s=n-i;if(this.view!==null&&this.view.enabled){var c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a=(r+=c*this.view.offsetX)+c*this.view.width,s=(o-=l*this.view.offsetY)-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,s,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){var i=ye.prototype.toJSON.call(this,e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}),Sc.prototype=Object.assign(Object.create(di.prototype),{constructor:Sc,isDirectionalLightShadow:!0,updateMatrices:function(e){di.prototype.updateMatrices.call(this,e)}}),$o.prototype=Object.assign(Object.create(at.prototype),{constructor:$o,isDirectionalLight:!0,copy:function(e){return at.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}),es.prototype=Object.assign(Object.create(at.prototype),{constructor:es,isAmbientLight:!0}),ts.prototype=Object.assign(Object.create(at.prototype),{constructor:ts,isRectAreaLight:!0,copy:function(e){return at.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){var i=at.prototype.toJSON.call(this,e);return i.object.width=this.width,i.object.height=this.height,i}});var mu=function(){function e(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(var t=0;t<9;t++)this.coefficients.push(new M)}var i=e.prototype;return i.set=function(t){for(var n=0;n<9;n++)this.coefficients[n].copy(t[n]);return this},i.zero=function(){for(var t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this},i.getAt=function(t,n){var r=t.x,a=t.y,o=t.z,s=this.coefficients;return n.copy(s[0]).multiplyScalar(.282095),n.addScaledVector(s[1],.488603*a),n.addScaledVector(s[2],.488603*o),n.addScaledVector(s[3],.488603*r),n.addScaledVector(s[4],r*a*1.092548),n.addScaledVector(s[5],a*o*1.092548),n.addScaledVector(s[6],.315392*(3*o*o-1)),n.addScaledVector(s[7],r*o*1.092548),n.addScaledVector(s[8],.546274*(r*r-a*a)),n},i.getIrradianceAt=function(t,n){var r=t.x,a=t.y,o=t.z,s=this.coefficients;return n.copy(s[0]).multiplyScalar(.886227),n.addScaledVector(s[1],1.023328*a),n.addScaledVector(s[2],1.023328*o),n.addScaledVector(s[3],1.023328*r),n.addScaledVector(s[4],.858086*r*a),n.addScaledVector(s[5],.858086*a*o),n.addScaledVector(s[6],.743125*o*o-.247708),n.addScaledVector(s[7],.858086*r*o),n.addScaledVector(s[8],.429043*(r*r-a*a)),n},i.add=function(t){for(var n=0;n<9;n++)this.coefficients[n].add(t.coefficients[n]);return this},i.addScaledSH=function(t,n){for(var r=0;r<9;r++)this.coefficients[r].addScaledVector(t.coefficients[r],n);return this},i.scale=function(t){for(var n=0;n<9;n++)this.coefficients[n].multiplyScalar(t);return this},i.lerp=function(t,n){for(var r=0;r<9;r++)this.coefficients[r].lerp(t.coefficients[r],n);return this},i.equals=function(t){for(var n=0;n<9;n++)if(!this.coefficients[n].equals(t.coefficients[n]))return!1;return!0},i.copy=function(t){return this.set(t.coefficients)},i.clone=function(){return new this.constructor().copy(this)},i.fromArray=function(t,n){n===void 0&&(n=0);for(var r=this.coefficients,a=0;a<9;a++)r[a].fromArray(t,n+3*a);return this},i.toArray=function(t,n){t===void 0&&(t=[]),n===void 0&&(n=0);for(var r=this.coefficients,a=0;a<9;a++)r[a].toArray(t,n+3*a);return t},e.getBasisAt=function(t,n){var r=t.x,a=t.y,o=t.z;n[0]=.282095,n[1]=.488603*a,n[2]=.488603*o,n[3]=.488603*r,n[4]=1.092548*r*a,n[5]=1.092548*a*o,n[6]=.315392*(3*o*o-1),n[7]=1.092548*r*o,n[8]=.546274*(r*r-a*a)},e}();function _n(e,i){at.call(this,void 0,i),this.type="LightProbe",this.sh=e!==void 0?e:new mu}function ns(e){$e.call(this,e),this.textures={}}_n.prototype=Object.assign(Object.create(at.prototype),{constructor:_n,isLightProbe:!0,copy:function(e){return at.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){var i=at.prototype.toJSON.call(this,e);return i.object.sh=this.sh.toArray(),i}}),ns.prototype=Object.assign(Object.create($e.prototype),{constructor:ns,load:function(e,i,t,n){var r=this,a=new bn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{i(r.parse(JSON.parse(o)))}catch(s){n?n(s):console.error(s),r.manager.itemError(e)}},t,n)},parse:function(e){var i=this.textures;function t(c){return i[c]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",c),i[c]}var n=new Xd[e.type];if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=new pe().setHex(e.sheen)),e.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular.setHex(e.specular),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==1&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(n.skinning=e.skinning),e.morphTargets!==void 0&&(n.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(n.morphNormals=e.morphNormals),e.dithering!==void 0&&(n.dithering=e.dithering),e.vertexTangents!==void 0&&(n.vertexTangents=e.vertexTangents),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(var r in e.uniforms){var a=e.uniforms[r];switch(n.uniforms[r]={},a.type){case"t":n.uniforms[r].value=t(a.value);break;case"c":n.uniforms[r].value=new pe().setHex(a.value);break;case"v2":n.uniforms[r].value=new I().fromArray(a.value);break;case"v3":n.uniforms[r].value=new M().fromArray(a.value);break;case"v4":n.uniforms[r].value=new de().fromArray(a.value);break;case"m3":n.uniforms[r].value=new ae().fromArray(a.value);break;case"m4":n.uniforms[r].value=new Ne().fromArray(a.value);break;default:n.uniforms[r].value=a.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(var o in e.extensions)n.extensions[o]=e.extensions[o];if(e.shading!==void 0&&(n.flatShading=e.shading===1),e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=t(e.map)),e.matcap!==void 0&&(n.matcap=t(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=t(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=t(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=t(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){var s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),n.normalScale=new I().fromArray(s)}return e.displacementMap!==void 0&&(n.displacementMap=t(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=t(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=t(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=t(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=t(e.specularMap)),e.envMap!==void 0&&(n.envMap=t(e.envMap)),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=t(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=t(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=t(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=t(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=t(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=t(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new I().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(n.transmission=e.transmission),e.transmissionMap!==void 0&&(n.transmissionMap=t(e.transmissionMap)),n},setTextures:function(e){return this.textures=e,this}});var Tc={decodeText:function(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);for(var i="",t=0,n=e.length;t<n;t++)i+=String.fromCharCode(e[t]);try{return decodeURIComponent(escape(i))}catch{return i}},extractUrlBase:function(e){var i=e.lastIndexOf("/");return i===-1?"./":e.substr(0,i+1)}};function ja(){_e.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}function is(e,i,t,n){typeof t=="number"&&(n=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Me.call(this,e,i,t),this.meshPerAttribute=n||1}function rs(e){$e.call(this,e)}ja.prototype=Object.assign(Object.create(_e.prototype),{constructor:ja,isInstancedBufferGeometry:!0,copy:function(e){return _e.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){var e=_e.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}),is.prototype=Object.assign(Object.create(Me.prototype),{constructor:is,isInstancedBufferAttribute:!0,copy:function(e){return Me.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){var e=Me.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}),rs.prototype=Object.assign(Object.create($e.prototype),{constructor:rs,load:function(e,i,t,n){var r=this,a=new bn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{i(r.parse(JSON.parse(o)))}catch(s){n?n(s):console.error(s),r.manager.itemError(e)}},t,n)},parse:function(e){var i={},t={};function n(T,D){if(i[D]!==void 0)return i[D];var N=T.interleavedBuffers[D],F=function(B,W){if(t[W]!==void 0)return t[W];var Q=B.arrayBuffers[W],G=new Uint32Array(Q).buffer;return t[W]=G,G}(T,N.buffer),k=new dn(new os[N.type](F),N.stride);return k.uuid=N.uuid,i[D]=k,k}var r=e.isInstancedBufferGeometry?new ja:new _e,a=e.data.index;if(a!==void 0){var o=new os[a.type](a.array);r.setIndex(new Me(o,1))}var s=e.data.attributes;for(var c in s){var l=s[c],u=void 0;if(l.isInterleavedBufferAttribute)u=new Oi(n(e.data,l.data),l.itemSize,l.offset,l.normalized);else{var h=new os[l.type](l.array);u=new(l.isInstancedBufferAttribute?is:Me)(h,l.itemSize,l.normalized)}l.name!==void 0&&(u.name=l.name),r.setAttribute(c,u)}var p=e.data.morphAttributes;if(p)for(var d in p){for(var f=p[d],g=[],m=0,y=f.length;m<y;m++){var _=f[m],x=void 0;_.isInterleavedBufferAttribute?x=new Oi(n(e.data,_.data),_.itemSize,_.offset,_.normalized):x=new Me(new os[_.type](_.array),_.itemSize,_.normalized),_.name!==void 0&&(x.name=_.name),g.push(x)}r.morphAttributes[d]=g}e.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);var b=e.data.groups||e.data.drawcalls||e.data.offsets;if(b!==void 0)for(var w=0,E=b.length;w!==E;++w){var S=b[w];r.addGroup(S.start,S.count,S.materialIndex)}var P=e.data.boundingSphere;if(P!==void 0){var C=new M;P.center!==void 0&&C.fromArray(P.center),r.boundingSphere=new ri(C,P.radius)}return e.name&&(r.name=e.name),e.userData&&(r.userData=e.userData),r}});var as,os={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array},Zd=function(e){function i(n){return e.call(this,n)||this}ge(i,e);var t=i.prototype;return t.load=function(n,r,a,o){var s=this,c=this.path===""?Tc.extractUrlBase(n):this.path;this.resourcePath=this.resourcePath||c;var l=new bn(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(n,function(u){var h=null;try{h=JSON.parse(u)}catch(d){return o!==void 0&&o(d),void console.error("THREE:ObjectLoader: Can't parse "+n+".",d.message)}var p=h.metadata;p!==void 0&&p.type!==void 0&&p.type.toLowerCase()!=="geometry"?s.parse(h,r):console.error("THREE.ObjectLoader: Can't load "+n)},a,o)},t.parse=function(n,r){var a=this.parseShape(n.shapes),o=this.parseGeometries(n.geometries,a),s=this.parseImages(n.images,function(){r!==void 0&&r(u)}),c=this.parseTextures(n.textures,s),l=this.parseMaterials(n.materials,c),u=this.parseObject(n.object,o,l);return n.animations&&(u.animations=this.parseAnimations(n.animations)),n.images!==void 0&&n.images.length!==0||r!==void 0&&r(u),u},t.parseShape=function(n){var r={};if(n!==void 0)for(var a=0,o=n.length;a<o;a++){var s=new zi().fromJSON(n[a]);r[s.uuid]=s}return r},t.parseGeometries=function(n,r){var a,o={};if(n!==void 0)for(var s=new rs,c=0,l=n.length;c<l;c++){var u=void 0,h=n[c];switch(h.type){case"PlaneGeometry":case"PlaneBufferGeometry":u=new Kt[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":u=new Kt[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":u=new Kt[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":u=new Kt[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":u=new Kt[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":u=new Kt[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":u=new Kt[h.type](h.radius,h.detail);break;case"RingGeometry":case"RingBufferGeometry":u=new Kt[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":u=new Kt[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":u=new Kt[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case"TubeGeometry":case"TubeBufferGeometry":u=new Kt[h.type](new _c[h.path.type]().fromJSON(h.path),h.tubularSegments,h.radius,h.radialSegments,h.closed);break;case"LatheGeometry":case"LatheBufferGeometry":u=new Kt[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":u=new Kt[h.type](h.vertices,h.indices,h.radius,h.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":a=[];for(var p=0,d=h.shapes.length;p<d;p++){var f=r[h.shapes[p]];a.push(f)}u=new Kt[h.type](a,h.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":a=[];for(var g=0,m=h.shapes.length;g<m;g++){var y=r[h.shapes[g]];a.push(y)}var _=h.options.extrudePath;_!==void 0&&(h.options.extrudePath=new _c[_.type]().fromJSON(_)),u=new Kt[h.type](a,h.options);break;case"BufferGeometry":case"InstancedBufferGeometry":u=s.parse(h);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+h.type+'"');continue}u.uuid=h.uuid,h.name!==void 0&&(u.name=h.name),u.isBufferGeometry===!0&&h.userData!==void 0&&(u.userData=h.userData),o[h.uuid]=u}return o},t.parseMaterials=function(n,r){var a={},o={};if(n!==void 0){var s=new ns;s.setTextures(r);for(var c=0,l=n.length;c<l;c++){var u=n[c];if(u.type==="MultiMaterial"){for(var h=[],p=0;p<u.materials.length;p++){var d=u.materials[p];a[d.uuid]===void 0&&(a[d.uuid]=s.parse(d)),h.push(a[d.uuid])}o[u.uuid]=h}else a[u.uuid]===void 0&&(a[u.uuid]=s.parse(u)),o[u.uuid]=a[u.uuid]}}return o},t.parseAnimations=function(n){for(var r=[],a=0;a<n.length;a++){var o=n[a],s=xn.parse(o);o.uuid!==void 0&&(s.uuid=o.uuid),r.push(s)}return r},t.parseImages=function(n,r){var a,o=this,s={};function c(x){return o.manager.itemStart(x),a.load(x,function(){o.manager.itemEnd(x)},void 0,function(){o.manager.itemError(x),o.manager.itemEnd(x)})}if(n!==void 0&&n.length>0){var l=new fc(r);(a=new ta(l)).setCrossOrigin(this.crossOrigin);for(var u=0,h=n.length;u<h;u++){var p=n[u],d=p.url;if(Array.isArray(d)){s[p.uuid]=[];for(var f=0,g=d.length;f<g;f++){var m=d[f],y=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(m)?m:o.resourcePath+m;s[p.uuid].push(c(y))}}else{var _=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(p.url)?p.url:o.resourcePath+p.url;s[p.uuid]=c(_)}}}return s},t.parseTextures=function(n,r){function a(h,p){return typeof h=="number"?h:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",h),p[h])}var o={};if(n!==void 0)for(var s=0,c=n.length;s<c;s++){var l=n[s];l.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',l.uuid),r[l.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",l.image);var u=void 0;(u=Array.isArray(r[l.image])?new jn(r[l.image]):new Te(r[l.image])).needsUpdate=!0,u.uuid=l.uuid,l.name!==void 0&&(u.name=l.name),l.mapping!==void 0&&(u.mapping=a(l.mapping,Jd)),l.offset!==void 0&&u.offset.fromArray(l.offset),l.repeat!==void 0&&u.repeat.fromArray(l.repeat),l.center!==void 0&&u.center.fromArray(l.center),l.rotation!==void 0&&(u.rotation=l.rotation),l.wrap!==void 0&&(u.wrapS=a(l.wrap[0],vu),u.wrapT=a(l.wrap[1],vu)),l.format!==void 0&&(u.format=l.format),l.type!==void 0&&(u.type=l.type),l.encoding!==void 0&&(u.encoding=l.encoding),l.minFilter!==void 0&&(u.minFilter=a(l.minFilter,gu)),l.magFilter!==void 0&&(u.magFilter=a(l.magFilter,gu)),l.anisotropy!==void 0&&(u.anisotropy=l.anisotropy),l.flipY!==void 0&&(u.flipY=l.flipY),l.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=l.premultiplyAlpha),l.unpackAlignment!==void 0&&(u.unpackAlignment=l.unpackAlignment),o[l.uuid]=u}return o},t.parseObject=function(n,r,a){var o,s,c;function l(x){return r[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",x),r[x]}function u(x){if(x!==void 0){if(Array.isArray(x)){for(var b=[],w=0,E=x.length;w<E;w++){var S=x[w];a[S]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",S),b.push(a[S])}return b}return a[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),a[x]}}switch(n.type){case"Scene":o=new zs,n.background!==void 0&&Number.isInteger(n.background)&&(o.background=new pe(n.background)),n.fog!==void 0&&(n.fog.type==="Fog"?o.fog=new Ol(n.fog.color,n.fog.near,n.fog.far):n.fog.type==="FogExp2"&&(o.fog=new Pl(n.fog.color,n.fog.density)));break;case"PerspectiveCamera":o=new Et(n.fov,n.aspect,n.near,n.far),n.focus!==void 0&&(o.focus=n.focus),n.zoom!==void 0&&(o.zoom=n.zoom),n.filmGauge!==void 0&&(o.filmGauge=n.filmGauge),n.filmOffset!==void 0&&(o.filmOffset=n.filmOffset),n.view!==void 0&&(o.view=Object.assign({},n.view));break;case"OrthographicCamera":o=new ia(n.left,n.right,n.top,n.bottom,n.near,n.far),n.zoom!==void 0&&(o.zoom=n.zoom),n.view!==void 0&&(o.view=Object.assign({},n.view));break;case"AmbientLight":o=new es(n.color,n.intensity);break;case"DirectionalLight":o=new $o(n.color,n.intensity);break;case"PointLight":o=new Ko(n.color,n.intensity,n.distance,n.decay);break;case"RectAreaLight":o=new ts(n.color,n.intensity,n.width,n.height);break;case"SpotLight":o=new Qo(n.color,n.intensity,n.distance,n.angle,n.penumbra,n.decay);break;case"HemisphereLight":o=new Jo(n.color,n.groundColor,n.intensity);break;case"LightProbe":o=new _n().fromJSON(n);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":o=new st(s=l(n.geometry),c=u(n.material));break;case"InstancedMesh":s=l(n.geometry),c=u(n.material);var h=n.count,p=n.instanceMatrix;(o=new So(s,c,h)).instanceMatrix=new Me(new Float32Array(p.array),16);break;case"LOD":o=new Pa;break;case"Line":o=new yn(l(n.geometry),u(n.material),n.mode);break;case"LineLoop":o=new Ro(l(n.geometry),u(n.material));break;case"LineSegments":o=new Qt(l(n.geometry),u(n.material));break;case"PointCloud":case"Points":o=new Yr(l(n.geometry),u(n.material));break;case"Sprite":o=new Ca(u(n.material));break;case"Group":o=new Pi;break;default:o=new ye}if(o.uuid=n.uuid,n.name!==void 0&&(o.name=n.name),n.matrix!==void 0?(o.matrix.fromArray(n.matrix),n.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=n.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(n.position!==void 0&&o.position.fromArray(n.position),n.rotation!==void 0&&o.rotation.fromArray(n.rotation),n.quaternion!==void 0&&o.quaternion.fromArray(n.quaternion),n.scale!==void 0&&o.scale.fromArray(n.scale)),n.castShadow!==void 0&&(o.castShadow=n.castShadow),n.receiveShadow!==void 0&&(o.receiveShadow=n.receiveShadow),n.shadow&&(n.shadow.bias!==void 0&&(o.shadow.bias=n.shadow.bias),n.shadow.normalBias!==void 0&&(o.shadow.normalBias=n.shadow.normalBias),n.shadow.radius!==void 0&&(o.shadow.radius=n.shadow.radius),n.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(n.shadow.mapSize),n.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(n.shadow.camera))),n.visible!==void 0&&(o.visible=n.visible),n.frustumCulled!==void 0&&(o.frustumCulled=n.frustumCulled),n.renderOrder!==void 0&&(o.renderOrder=n.renderOrder),n.userData!==void 0&&(o.userData=n.userData),n.layers!==void 0&&(o.layers.mask=n.layers),n.children!==void 0)for(var d=n.children,f=0;f<d.length;f++)o.add(this.parseObject(d[f],r,a));if(n.type==="LOD"){n.autoUpdate!==void 0&&(o.autoUpdate=n.autoUpdate);for(var g=n.levels,m=0;m<g.length;m++){var y=g[m],_=o.getObjectByProperty("uuid",y.object);_!==void 0&&o.addLevel(_,y.distance)}}return o},t.setTexturePath=function(n){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(n)},i}($e),Jd={UVMapping:Bn,CubeReflectionMapping:Yt,CubeRefractionMapping:zn,EquirectangularReflectionMapping:ti,EquirectangularRefractionMapping:wn,CubeUVReflectionMapping:an,CubeUVRefractionMapping:Ut},vu={RepeatWrapping:Gn,ClampToEdgeWrapping:Dt,MirroredRepeatWrapping:Fe},gu={NearestFilter:dt,NearestMipmapNearestFilter:Hi,NearestMipmapLinearFilter:$,LinearFilter:X,LinearMipmapNearestFilter:fe,LinearMipmapLinearFilter:ue};function Ec(e){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),$e.call(this,e),this.options={premultiplyAlpha:"none"}}function Ac(){this.type="ShapePath",this.color=new pe,this.subPaths=[],this.currentPath=null}function Lc(e){this.type="Font",this.data=e}function Qd(e,i,t,n,r){var a=r.glyphs[e]||r.glyphs["?"];if(a){var o,s,c,l,u,h,p,d,f=new Ac;if(a.o)for(var g=a._cachedOutline||(a._cachedOutline=a.o.split(" ")),m=0,y=g.length;m<y;)switch(g[m++]){case"m":o=g[m++]*i+t,s=g[m++]*i+n,f.moveTo(o,s);break;case"l":o=g[m++]*i+t,s=g[m++]*i+n,f.lineTo(o,s);break;case"q":c=g[m++]*i+t,l=g[m++]*i+n,u=g[m++]*i+t,h=g[m++]*i+n,f.quadraticCurveTo(u,h,c,l);break;case"b":c=g[m++]*i+t,l=g[m++]*i+n,u=g[m++]*i+t,h=g[m++]*i+n,p=g[m++]*i+t,d=g[m++]*i+n,f.bezierCurveTo(u,h,p,d,c,l)}return{offsetX:a.ha*i,path:f}}console.error('THREE.Font: character "'+e+'" does not exists in font family '+r.familyName+".")}function Rc(e){$e.call(this,e)}Ec.prototype=Object.assign(Object.create($e.prototype),{constructor:Ec,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(e,i,t,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);var r=this,a=ur.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){i&&i(a),r.manager.itemEnd(e)},0),a;var o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(e,o).then(function(s){return s.blob()}).then(function(s){return createImageBitmap(s,r.options)}).then(function(s){ur.add(e,s),i&&i(s),r.manager.itemEnd(e)}).catch(function(s){n&&n(s),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}),Object.assign(Ac.prototype,{moveTo:function(e,i){return this.currentPath=new Dn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,i),this},lineTo:function(e,i){return this.currentPath.lineTo(e,i),this},quadraticCurveTo:function(e,i,t,n){return this.currentPath.quadraticCurveTo(e,i,t,n),this},bezierCurveTo:function(e,i,t,n,r,a){return this.currentPath.bezierCurveTo(e,i,t,n,r,a),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,i){function t(G){for(var H=[],V=0,ee=G.length;V<ee;V++){var he=G[V],we=new zi;we.curves=he.curves,H.push(we)}return H}function n(G,H){for(var V=H.length,ee=!1,he=V-1,we=0;we<V;he=we++){var R=H[he],L=H[we],j=L.x-R.x,z=L.y-R.y;if(Math.abs(z)>Number.EPSILON){if(z<0&&(R=H[we],j=-j,L=H[he],z=-z),G.y<R.y||G.y>L.y)continue;if(G.y===R.y){if(G.x===R.x)return!0}else{var J=z*(G.x-R.x)-j*(G.y-R.y);if(J===0)return!0;if(J<0)continue;ee=!ee}}else{if(G.y!==R.y)continue;if(L.x<=G.x&&G.x<=R.x||R.x<=G.x&&G.x<=L.x)return!0}}return ee}var r,a,o,s=li.isClockWise,c=this.subPaths;if(c.length===0)return[];if(i===!0)return t(c);var l=[];if(c.length===1)return a=c[0],(o=new zi).curves=a.curves,l.push(o),l;var u=!s(c[0].getPoints());u=e?!u:u;var h,p,d=[],f=[],g=[],m=0;f[m]=void 0,g[m]=[];for(var y=0,_=c.length;y<_;y++)r=s(h=(a=c[y]).getPoints()),(r=e?!r:r)?(!u&&f[m]&&m++,f[m]={s:new zi,p:h},f[m].s.curves=a.curves,u&&m++,g[m]=[]):g[m].push({h:a,p:h[0]});if(!f[0])return t(c);if(f.length>1){for(var x=!1,b=[],w=0,E=f.length;w<E;w++)d[w]=[];for(var S=0,P=f.length;S<P;S++)for(var C=g[S],T=0;T<C.length;T++){for(var D=C[T],N=!0,F=0;F<f.length;F++)n(D.p,f[F].p)&&(S!==F&&b.push({froms:S,tos:F,hole:T}),N?(N=!1,d[F].push(D)):x=!0);N&&d[S].push(D)}b.length>0&&(x||(g=d))}for(var k=0,B=f.length;k<B;k++){o=f[k].s,l.push(o);for(var W=0,Q=(p=g[k]).length;W<Q;W++)o.holes.push(p[W].h)}return l}}),Object.assign(Lc.prototype,{isFont:!0,generateShapes:function(e,i){i===void 0&&(i=100);for(var t=[],n=function(o,s,c){for(var l=Array.from?Array.from(o):String(o).split(""),u=s/c.resolution,h=(c.boundingBox.yMax-c.boundingBox.yMin+c.underlineThickness)*u,p=[],d=0,f=0,g=0;g<l.length;g++){var m=l[g];if(m===`
`)d=0,f-=h;else{var y=Qd(m,u,d,f,c);d+=y.offsetX,p.push(y.path)}}return p}(e,i,this.data),r=0,a=n.length;r<a;r++)Array.prototype.push.apply(t,n[r].toShapes());return t}}),Rc.prototype=Object.assign(Object.create($e.prototype),{constructor:Rc,load:function(e,i,t,n){var r=this,a=new bn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){var s;try{s=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),s=JSON.parse(o.substring(65,o.length-2))}var c=r.parse(s);i&&i(c)},t,n)},parse:function(e){return new Lc(e)}});var Cc={getContext:function(){return as===void 0&&(as=new(window.AudioContext||window.webkitAudioContext)),as},setContext:function(e){as=e}};function ss(e){$e.call(this,e)}function Pc(e,i,t){_n.call(this,void 0,t);var n=new pe().set(e),r=new pe().set(i),a=new M(n.r,n.g,n.b),o=new M(r.r,r.g,r.b),s=Math.sqrt(Math.PI),c=s*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}function Oc(e,i){_n.call(this,void 0,i);var t=new pe().set(e);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}ss.prototype=Object.assign(Object.create($e.prototype),{constructor:ss,load:function(e,i,t,n){var r=this,a=new bn(r.manager);a.setResponseType("arraybuffer"),a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{var s=o.slice(0);Cc.getContext().decodeAudioData(s,function(c){i(c)})}catch(c){n?n(c):console.error(c),r.manager.itemError(e)}},t,n)}}),Pc.prototype=Object.assign(Object.create(_n.prototype),{constructor:Pc,isHemisphereLightProbe:!0,copy:function(e){return _n.prototype.copy.call(this,e),this},toJSON:function(e){return _n.prototype.toJSON.call(this,e)}}),Oc.prototype=Object.assign(Object.create(_n.prototype),{constructor:Oc,isAmbientLightProbe:!0,copy:function(e){return _n.prototype.copy.call(this,e),this},toJSON:function(e){return _n.prototype.toJSON.call(this,e)}});var yu=new Ne,xu=new Ne;function bu(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Et,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Et,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(bu.prototype,{update:function(e){var i=this._cache;if(i.focus!==e.focus||i.fov!==e.fov||i.aspect!==e.aspect*this.aspect||i.near!==e.near||i.far!==e.far||i.zoom!==e.zoom||i.eyeSep!==this.eyeSep){i.focus=e.focus,i.fov=e.fov,i.aspect=e.aspect*this.aspect,i.near=e.near,i.far=e.far,i.zoom=e.zoom,i.eyeSep=this.eyeSep;var t,n,r=e.projectionMatrix.clone(),a=i.eyeSep/2,o=a*i.near/i.focus,s=i.near*Math.tan(be.DEG2RAD*i.fov*.5)/i.zoom;xu.elements[12]=-a,yu.elements[12]=a,t=-s*i.aspect+o,n=s*i.aspect+o,r.elements[0]=2*i.near/(n-t),r.elements[8]=(n+t)/(n-t),this.cameraL.projectionMatrix.copy(r),t=-s*i.aspect-o,n=s*i.aspect-o,r.elements[0]=2*i.near/(n-t),r.elements[8]=(n+t)/(n-t),this.cameraR.projectionMatrix.copy(r)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(xu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(yu)}});var _u=function(){function e(t){this.autoStart=t===void 0||t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}var i=e.prototype;return i.start=function(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},i.stop=function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},i.getElapsedTime=function(){return this.getDelta(),this.elapsedTime},i.getDelta=function(){var t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var n=(typeof performance>"u"?Date:performance).now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t},e}(),hr=new M,wu=new Ze,Kd=new M,dr=new M,$d=function(e){function i(){var n;return(n=e.call(this)||this).type="AudioListener",n.context=Cc.getContext(),n.gain=n.context.createGain(),n.gain.connect(n.context.destination),n.filter=null,n.timeDelta=0,n._clock=new _u,n}ge(i,e);var t=i.prototype;return t.getInput=function(){return this.gain},t.removeFilter=function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},t.getFilter=function(){return this.filter},t.setFilter=function(n){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=n,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},t.getMasterVolume=function(){return this.gain.gain.value},t.setMasterVolume=function(n){return this.gain.gain.setTargetAtTime(n,this.context.currentTime,.01),this},t.updateMatrixWorld=function(n){e.prototype.updateMatrixWorld.call(this,n);var r=this.context.listener,a=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(hr,wu,Kd),dr.set(0,0,-1).applyQuaternion(wu),r.positionX){var o=this.context.currentTime+this.timeDelta;r.positionX.linearRampToValueAtTime(hr.x,o),r.positionY.linearRampToValueAtTime(hr.y,o),r.positionZ.linearRampToValueAtTime(hr.z,o),r.forwardX.linearRampToValueAtTime(dr.x,o),r.forwardY.linearRampToValueAtTime(dr.y,o),r.forwardZ.linearRampToValueAtTime(dr.z,o),r.upX.linearRampToValueAtTime(a.x,o),r.upY.linearRampToValueAtTime(a.y,o),r.upZ.linearRampToValueAtTime(a.z,o)}else r.setPosition(hr.x,hr.y,hr.z),r.setOrientation(dr.x,dr.y,dr.z,a.x,a.y,a.z)},i}(ye),Nc=function(e){function i(n){var r;return(r=e.call(this)||this).type="Audio",r.listener=n,r.context=n.context,r.gain=r.context.createGain(),r.gain.connect(n.getInput()),r.autoplay=!1,r.buffer=null,r.detune=0,r.loop=!1,r.loopStart=0,r.loopEnd=0,r.offset=0,r.duration=void 0,r.playbackRate=1,r.isPlaying=!1,r.hasPlaybackControl=!0,r.source=null,r.sourceType="empty",r._startedAt=0,r._progress=0,r._connected=!1,r.filters=[],r}ge(i,e);var t=i.prototype;return t.getOutput=function(){return this.gain},t.setNodeSource=function(n){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=n,this.connect(),this},t.setMediaElementSource=function(n){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(n),this.connect(),this},t.setMediaStreamSource=function(n){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(n),this.connect(),this},t.setBuffer=function(n){return this.buffer=n,this.sourceType="buffer",this.autoplay&&this.play(),this},t.play=function(n){if(n===void 0&&(n=0),this.isPlaying!==!0){if(this.hasPlaybackControl!==!1){this._startedAt=this.context.currentTime+n;var r=this.context.createBufferSource();return r.buffer=this.buffer,r.loop=this.loop,r.loopStart=this.loopStart,r.loopEnd=this.loopEnd,r.onended=this.onEnded.bind(this),r.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=r,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}console.warn("THREE.Audio: this Audio has no playback control.")}else console.warn("THREE.Audio: Audio is already playing.")},t.pause=function(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")},t.stop=function(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")},t.connect=function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var n=1,r=this.filters.length;n<r;n++)this.filters[n-1].connect(this.filters[n]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this},t.disconnect=function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var n=1,r=this.filters.length;n<r;n++)this.filters[n-1].disconnect(this.filters[n]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this},t.getFilters=function(){return this.filters},t.setFilters=function(n){return n||(n=[]),this._connected===!0?(this.disconnect(),this.filters=n,this.connect()):this.filters=n,this},t.setDetune=function(n){if(this.detune=n,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},t.getDetune=function(){return this.detune},t.getFilter=function(){return this.getFilters()[0]},t.setFilter=function(n){return this.setFilters(n?[n]:[])},t.setPlaybackRate=function(n){if(this.hasPlaybackControl!==!1)return this.playbackRate=n,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")},t.getPlaybackRate=function(){return this.playbackRate},t.onEnded=function(){this.isPlaying=!1},t.getLoop=function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},t.setLoop=function(n){if(this.hasPlaybackControl!==!1)return this.loop=n,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")},t.setLoopStart=function(n){return this.loopStart=n,this},t.setLoopEnd=function(n){return this.loopEnd=n,this},t.getVolume=function(){return this.gain.gain.value},t.setVolume=function(n){return this.gain.gain.setTargetAtTime(n,this.context.currentTime,.01),this},i}(ye),pr=new M,Mu=new Ze,ep=new M,fr=new M,tp=function(e){function i(n){var r;return(r=e.call(this,n)||this).panner=r.context.createPanner(),r.panner.panningModel="HRTF",r.panner.connect(r.gain),r}ge(i,e);var t=i.prototype;return t.getOutput=function(){return this.panner},t.getRefDistance=function(){return this.panner.refDistance},t.setRefDistance=function(n){return this.panner.refDistance=n,this},t.getRolloffFactor=function(){return this.panner.rolloffFactor},t.setRolloffFactor=function(n){return this.panner.rolloffFactor=n,this},t.getDistanceModel=function(){return this.panner.distanceModel},t.setDistanceModel=function(n){return this.panner.distanceModel=n,this},t.getMaxDistance=function(){return this.panner.maxDistance},t.setMaxDistance=function(n){return this.panner.maxDistance=n,this},t.setDirectionalCone=function(n,r,a){return this.panner.coneInnerAngle=n,this.panner.coneOuterAngle=r,this.panner.coneOuterGain=a,this},t.updateMatrixWorld=function(n){if(e.prototype.updateMatrixWorld.call(this,n),this.hasPlaybackControl!==!0||this.isPlaying!==!1){this.matrixWorld.decompose(pr,Mu,ep),fr.set(0,0,1).applyQuaternion(Mu);var r=this.panner;if(r.positionX){var a=this.context.currentTime+this.listener.timeDelta;r.positionX.linearRampToValueAtTime(pr.x,a),r.positionY.linearRampToValueAtTime(pr.y,a),r.positionZ.linearRampToValueAtTime(pr.z,a),r.orientationX.linearRampToValueAtTime(fr.x,a),r.orientationY.linearRampToValueAtTime(fr.y,a),r.orientationZ.linearRampToValueAtTime(fr.z,a)}else r.setPosition(pr.x,pr.y,pr.z),r.setOrientation(fr.x,fr.y,fr.z)}},i}(Nc),Su=function(){function e(t,n){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=n!==void 0?n:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}var i=e.prototype;return i.getFrequencyData=function(){return this.analyser.getByteFrequencyData(this.data),this.data},i.getAverageFrequency=function(){for(var t=0,n=this.getFrequencyData(),r=0;r<n.length;r++)t+=n[r];return t/n.length},e}();function Dc(e,i,t){var n,r,a;switch(this.binding=e,this.valueSize=t,i){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*t),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*t);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*t)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Dc.prototype,{accumulate:function(e,i){var t=this.buffer,n=this.valueSize,r=e*n+n,a=this.cumulativeWeight;if(a===0){for(var o=0;o!==n;++o)t[r+o]=t[o];a=i}else{var s=i/(a+=i);this._mixBufferRegion(t,r,0,s,n)}this.cumulativeWeight=a},accumulateAdditive:function(e){var i=this.buffer,t=this.valueSize,n=t*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(i,n,0,e,t),this.cumulativeWeightAdditive+=e},apply:function(e){var i=this.valueSize,t=this.buffer,n=e*i+i,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){var s=i*this._origIndex;this._mixBufferRegion(t,n,s,1-r,i)}a>0&&this._mixBufferRegionAdditive(t,n,this._addIndex*i,1,i);for(var c=i,l=i+i;c!==l;++c)if(t[c]!==t[c+i]){o.setValue(t,n);break}},saveOriginalState:function(){var e=this.binding,i=this.buffer,t=this.valueSize,n=t*this._origIndex;e.getValue(i,n);for(var r=t,a=n;r!==a;++r)i[r]=i[n+r%t];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){var e=3*this.valueSize;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){for(var e=this._addIndex*this.valueSize,i=e+this.valueSize,t=e;t<i;t++)this.buffer[t]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){for(var e=this._origIndex*this.valueSize,i=this._addIndex*this.valueSize,t=0;t<this.valueSize;t++)this.buffer[i+t]=this.buffer[e+t]},_select:function(e,i,t,n,r){if(n>=.5)for(var a=0;a!==r;++a)e[i+a]=e[t+a]},_slerp:function(e,i,t,n){Ze.slerpFlat(e,i,e,i,e,t,n)},_slerpAdditive:function(e,i,t,n,r){var a=this._workIndex*r;Ze.multiplyQuaternionsFlat(e,a,e,i,e,t),Ze.slerpFlat(e,i,e,i,e,a,n)},_lerp:function(e,i,t,n,r){for(var a=1-n,o=0;o!==r;++o){var s=i+o;e[s]=e[s]*a+e[t+o]*n}},_lerpAdditive:function(e,i,t,n,r){for(var a=0;a!==r;++a){var o=i+a;e[o]=e[o]+e[t+a]*n}}});var np="\\[\\]\\.:\\/",ip=new RegExp("[\\[\\]\\.:\\/]","g"),Ic="[^\\[\\]\\.:\\/]",rp="[^"+np.replace("\\.","")+"]",ap=/((?:WC+[\/:])*)/.source.replace("WC",Ic),op=/(WCOD+)?/.source.replace("WCOD",rp),sp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),cp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),lp=new RegExp("^"+ap+op+sp+cp+"$"),up=["material","materials","bones"];function Tu(e,i,t){var n=t||jt.parseTrackName(i);this._targetGroup=e,this._bindings=e.subscribe_(i,n)}function jt(e,i,t){this.path=i,this.parsedPath=t||jt.parseTrackName(i),this.node=jt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}function Eu(){this.uuid=be.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var e={};this._indicesByUUID=e;for(var i=0,t=arguments.length;i!==t;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var n=this;this.stats={objects:{get total(){return n._objects.length},get inUse(){return this.total-n.nCachedObjects_}},get bindingsPerObject(){return n._bindings.length}}}Object.assign(Tu.prototype,{getValue:function(e,i){this.bind();var t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(e,i)},setValue:function(e,i){for(var t=this._bindings,n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(e,i)},bind:function(){for(var e=this._bindings,i=this._targetGroup.nCachedObjects_,t=e.length;i!==t;++i)e[i].bind()},unbind:function(){for(var e=this._bindings,i=this._targetGroup.nCachedObjects_,t=e.length;i!==t;++i)e[i].unbind()}}),Object.assign(jt,{Composite:Tu,create:function(e,i,t){return e&&e.isAnimationObjectGroup?new jt.Composite(e,i,t):new jt(e,i,t)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(ip,"")},parseTrackName:function(e){var i=lp.exec(e);if(!i)throw new Error("PropertyBinding: Cannot parse trackName: "+e);var t={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},n=t.nodeName&&t.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){var r=t.nodeName.substring(n+1);up.indexOf(r)!==-1&&(t.nodeName=t.nodeName.substring(0,n),t.objectName=r)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return t},findNode:function(e,i){if(!i||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){var t=e.skeleton.getBoneByName(i);if(t!==void 0)return t}if(e.children){var n=function r(a){for(var o=0;o<a.length;o++){var s=a[o];if(s.name===i||s.uuid===i)return s;var c=r(s.children);if(c)return c}return null}(e.children);if(n)return n}return null}}),Object.assign(jt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,i){e[i]=this.node[this.propertyName]},function(e,i){for(var t=this.resolvedProperty,n=0,r=t.length;n!==r;++n)e[i++]=t[n]},function(e,i){e[i]=this.resolvedProperty[this.propertyIndex]},function(e,i){this.resolvedProperty.toArray(e,i)}],SetterByBindingTypeAndVersioning:[[function(e,i){this.targetObject[this.propertyName]=e[i]},function(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0},function(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,i){for(var t=this.resolvedProperty,n=0,r=t.length;n!==r;++n)t[n]=e[i++]},function(e,i){for(var t=this.resolvedProperty,n=0,r=t.length;n!==r;++n)t[n]=e[i++];this.targetObject.needsUpdate=!0},function(e,i){for(var t=this.resolvedProperty,n=0,r=t.length;n!==r;++n)t[n]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,i){this.resolvedProperty[this.propertyIndex]=e[i]},function(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0},function(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,i){this.resolvedProperty.fromArray(e,i)},function(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0},function(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,i){this.bind(),this.getValue(e,i)},setValue:function(e,i){this.bind(),this.setValue(e,i)},bind:function(){var e=this.node,i=this.parsedPath,t=i.objectName,n=i.propertyName,r=i.propertyIndex;if(e||(e=jt.findNode(this.rootNode,i.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,e){if(t){var a=i.objectIndex;switch(t){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(var o=0;o<e.length;o++)if(e[o].name===a){a=o;break}break;default:if(e[t]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[t]}if(a!==void 0){if(e[a]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[a]}}var s=e[n];if(s!==void 0){var c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);var l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}else{var u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+n+" but it wasn't found.",e)}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),Object.assign(jt.prototype,{_getValue_unbound:jt.prototype.getValue,_setValue_unbound:jt.prototype.setValue}),Object.assign(Eu.prototype,{isAnimationObjectGroup:!0,add:function(){for(var e=this._objects,i=this._indicesByUUID,t=this._paths,n=this._parsedPaths,r=this._bindings,a=r.length,o=void 0,s=e.length,c=this.nCachedObjects_,l=0,u=arguments.length;l!==u;++l){var h=arguments[l],p=h.uuid,d=i[p];if(d===void 0){d=s++,i[p]=d,e.push(h);for(var f=0,g=a;f!==g;++f)r[f].push(new jt(h,t[f],n[f]))}else if(d<c){o=e[d];var m=--c,y=e[m];i[y.uuid]=d,e[d]=y,i[p]=m,e[m]=h;for(var _=0,x=a;_!==x;++_){var b=r[_],w=b[m],E=b[d];b[d]=w,E===void 0&&(E=new jt(h,t[_],n[_])),b[m]=E}}else e[d]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){for(var e=this._objects,i=this._indicesByUUID,t=this._bindings,n=t.length,r=this.nCachedObjects_,a=0,o=arguments.length;a!==o;++a){var s=arguments[a],c=s.uuid,l=i[c];if(l!==void 0&&l>=r){var u=r++,h=e[u];i[h.uuid]=l,e[l]=h,i[c]=u,e[u]=s;for(var p=0,d=n;p!==d;++p){var f=t[p],g=f[u],m=f[l];f[l]=g,f[u]=m}}}this.nCachedObjects_=r},uncache:function(){for(var e=this._objects,i=this._indicesByUUID,t=this._bindings,n=t.length,r=this.nCachedObjects_,a=e.length,o=0,s=arguments.length;o!==s;++o){var c=arguments[o],l=c.uuid,u=i[l];if(u!==void 0)if(delete i[l],u<r){var h=--r,p=e[h],d=--a,f=e[d];i[p.uuid]=u,e[u]=p,i[f.uuid]=h,e[h]=f,e.pop();for(var g=0,m=n;g!==m;++g){var y=t[g],_=y[h],x=y[d];y[u]=_,y[h]=x,y.pop()}}else{var b=--a,w=e[b];i[w.uuid]=u,e[u]=w,e.pop();for(var E=0,S=n;E!==S;++E){var P=t[E];P[u]=P[b],P.pop()}}}this.nCachedObjects_=r},subscribe_:function(e,i){var t=this._bindingsIndicesByPath,n=t[e],r=this._bindings;if(n!==void 0)return r[n];var a=this._paths,o=this._parsedPaths,s=this._objects,c=s.length,l=this.nCachedObjects_,u=new Array(c);n=r.length,t[e]=n,a.push(e),o.push(i),r.push(u);for(var h=l,p=s.length;h!==p;++h){var d=s[h];u[h]=new jt(d,e,i)}return u},unsubscribe_:function(e){var i=this._bindingsIndicesByPath,t=i[e];if(t!==void 0){var n=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,s=a[o];i[e[o]]=t,a[t]=s,a.pop(),r[t]=r[o],r.pop(),n[t]=n[o],n.pop()}}});var hp=function(){function e(t,n,r,a){this._mixer=t,this._clip=n,this._localRoot=r||null,this.blendMode=a||n.blendMode;for(var o=n.tracks,s=o.length,c=new Array(s),l={endingStart:Fn,endingEnd:Fn},u=0;u!==s;++u){var h=o[u].createInterpolant(null);c[u]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=c,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}var i=e.prototype;return i.play=function(){return this._mixer._activateAction(this),this},i.stop=function(){return this._mixer._deactivateAction(this),this.reset()},i.reset=function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},i.isRunning=function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},i.isScheduled=function(){return this._mixer._isActiveAction(this)},i.startAt=function(t){return this._startTime=t,this},i.setLoop=function(t,n){return this.loop=t,this.repetitions=n,this},i.setEffectiveWeight=function(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()},i.getEffectiveWeight=function(){return this._effectiveWeight},i.fadeIn=function(t){return this._scheduleFading(t,0,1)},i.fadeOut=function(t){return this._scheduleFading(t,1,0)},i.crossFadeFrom=function(t,n,r){if(t.fadeOut(n),this.fadeIn(n),r){var a=this._clip.duration,o=t._clip.duration,s=o/a,c=a/o;t.warp(1,s,n),this.warp(c,1,n)}return this},i.crossFadeTo=function(t,n,r){return t.crossFadeFrom(this,n,r)},i.stopFading=function(){var t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},i.setEffectiveTimeScale=function(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()},i.getEffectiveTimeScale=function(){return this._effectiveTimeScale},i.setDuration=function(t){return this.timeScale=this._clip.duration/t,this.stopWarping()},i.syncWith=function(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()},i.halt=function(t){return this.warp(this._effectiveTimeScale,0,t)},i.warp=function(t,n,r){var a=this._mixer,o=a.time,s=this.timeScale,c=this._timeScaleInterpolant;c===null&&(c=a._lendControlInterpolant(),this._timeScaleInterpolant=c);var l=c.parameterPositions,u=c.sampleValues;return l[0]=o,l[1]=o+r,u[0]=t/s,u[1]=n/s,this},i.stopWarping=function(){var t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},i.getMixer=function(){return this._mixer},i.getClip=function(){return this._clip},i.getRoot=function(){return this._localRoot||this._mixer._root},i._update=function(t,n,r,a){if(this.enabled){var o=this._startTime;if(o!==null){var s=(t-o)*r;if(s<0||r===0)return;this._startTime=null,n=r*s}n*=this._updateTimeScale(t);var c=this._updateTime(n),l=this._updateWeight(t);if(l>0){var u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case oa:for(var p=0,d=u.length;p!==d;++p)u[p].evaluate(c),h[p].accumulateAdditive(l);break;case wr:default:for(var f=0,g=u.length;f!==g;++f)u[f].evaluate(c),h[f].accumulate(a,l)}}}else this._updateWeight(t)},i._updateWeight=function(t){var n=0;if(this.enabled){n=this.weight;var r=this._weightInterpolant;if(r!==null){var a=r.evaluate(t)[0];n*=a,t>r.parameterPositions[1]&&(this.stopFading(),a===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n},i._updateTimeScale=function(t){var n=0;if(!this.paused){n=this.timeScale;var r=this._timeScaleInterpolant;r!==null&&(n*=r.evaluate(t)[0],t>r.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n))}return this._effectiveTimeScale=n,n},i._updateTime=function(t){var n=this._clip.duration,r=this.loop,a=this.time+t,o=this._loopCount,s=r===2202;if(t===0)return o===-1?a:s&&(1&o)==1?n-a:a;if(r===2200){o===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(a>=n)a=n;else{if(!(a<0)){this.time=a;break e}a=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(o===-1&&(t>=0?(o=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),a>=n||a<0){var c=Math.floor(a/n);a-=n*c,o+=Math.abs(c);var l=this.repetitions-o;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,a=t>0?n:0,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){var u=t<0;this._setEndings(u,!u,s)}else this._setEndings(!1,!1,s);this._loopCount=o,this.time=a,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=a;if(s&&(1&o)==1)return n-a}return a},i._setEndings=function(t,n,r){var a=this._interpolantSettings;r?(a.endingStart=ni,a.endingEnd=ni):(a.endingStart=t?this.zeroSlopeAtStart?ni:Fn:ji,a.endingEnd=n?this.zeroSlopeAtEnd?ni:Fn:ji)},i._scheduleFading=function(t,n,r){var a=this._mixer,o=a.time,s=this._weightInterpolant;s===null&&(s=a._lendControlInterpolant(),this._weightInterpolant=s);var c=s.parameterPositions,l=s.sampleValues;return c[0]=o,l[0]=n,c[1]=o+t,l[1]=r,this},e}();function Bc(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Bc.prototype=Object.assign(Object.create(Ct.prototype),{constructor:Bc,_bindAction:function(e,i){var t=e._localRoot||this._root,n=e._clip.tracks,r=n.length,a=e._propertyBindings,o=e._interpolants,s=t.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(var u=0;u!==r;++u){var h=n[u],p=h.name,d=l[p];if(d!==void 0)a[u]=d;else{if((d=a[u])!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,s,p));continue}var f=i&&i._propertyBindings[u].binding.parsedPath;++(d=new Dc(jt.create(t,p,f),h.ValueTypeName,h.getValueSize())).referenceCount,this._addInactiveBinding(d,s,p),a[u]=d}o[u].resultBuffer=d.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){var i=(e._localRoot||this._root).uuid,t=e._clip.uuid,n=this._actionsByClip[t];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,t,i)}for(var r=e._propertyBindings,a=0,o=r.length;a!==o;++a){var s=r[a];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){for(var i=e._propertyBindings,t=0,n=i.length;t!==n;++t){var r=i[t];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;var e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){var i=e._cacheIndex;return i!==null&&i<this._nActiveActions},_addInactiveAction:function(e,i,t){var n=this._actions,r=this._actionsByClip,a=r[i];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[i]=a;else{var o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[t]=e},_removeInactiveAction:function(e){var i=this._actions,t=i[i.length-1],n=e._cacheIndex;t._cacheIndex=n,i[n]=t,i.pop(),e._cacheIndex=null;var r=e._clip.uuid,a=this._actionsByClip,o=a[r],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],s.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){for(var i=e._propertyBindings,t=0,n=i.length;t!==n;++t){var r=i[t];--r.referenceCount==0&&this._removeInactiveBinding(r)}},_lendAction:function(e){var i=this._actions,t=e._cacheIndex,n=this._nActiveActions++,r=i[n];e._cacheIndex=n,i[n]=e,r._cacheIndex=t,i[t]=r},_takeBackAction:function(e){var i=this._actions,t=e._cacheIndex,n=--this._nActiveActions,r=i[n];e._cacheIndex=n,i[n]=e,r._cacheIndex=t,i[t]=r},_addInactiveBinding:function(e,i,t){var n=this._bindingsByRootAndName,r=this._bindings,a=n[i];a===void 0&&(a={},n[i]=a),a[t]=e,e._cacheIndex=r.length,r.push(e)},_removeInactiveBinding:function(e){var i=this._bindings,t=e.binding,n=t.rootNode.uuid,r=t.path,a=this._bindingsByRootAndName,o=a[n],s=i[i.length-1],c=e._cacheIndex;s._cacheIndex=c,i[c]=s,i.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]},_lendBinding:function(e){var i=this._bindings,t=e._cacheIndex,n=this._nActiveBindings++,r=i[n];e._cacheIndex=n,i[n]=e,r._cacheIndex=t,i[t]=r},_takeBackBinding:function(e){var i=this._bindings,t=e._cacheIndex,n=--this._nActiveBindings,r=i[n];e._cacheIndex=n,i[n]=e,r._cacheIndex=t,i[t]=r},_lendControlInterpolant:function(){var e=this._controlInterpolants,i=this._nActiveControlInterpolants++,t=e[i];return t===void 0&&((t=new Ha(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer)).__cacheIndex=i,e[i]=t),t},_takeBackControlInterpolant:function(e){var i=this._controlInterpolants,t=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=i[n];e.__cacheIndex=n,i[n]=e,r.__cacheIndex=t,i[t]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,i,t){var n=i||this._root,r=n.uuid,a=typeof e=="string"?xn.findByName(n,e):e,o=a!==null?a.uuid:e,s=this._actionsByClip[o],c=null;if(t===void 0&&(t=a!==null?a.blendMode:wr),s!==void 0){var l=s.actionByRoot[r];if(l!==void 0&&l.blendMode===t)return l;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;var u=new hp(this,a,i,t);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u},existingAction:function(e,i){var t=i||this._root,n=t.uuid,r=typeof e=="string"?xn.findByName(t,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null},stopAllAction:function(){for(var e=this._actions,i=this._nActiveActions-1;i>=0;--i)e[i].stop();return this},update:function(e){e*=this.timeScale;for(var i=this._actions,t=this._nActiveActions,n=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1,o=0;o!==t;++o)i[o]._update(n,e,r,a);for(var s=this._bindings,c=this._nActiveBindings,l=0;l!==c;++l)s[l].apply(a);return this},setTime:function(e){this.time=0;for(var i=0;i<this._actions.length;i++)this._actions[i].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){var i=this._actions,t=e.uuid,n=this._actionsByClip,r=n[t];if(r!==void 0){for(var a=r.knownActions,o=0,s=a.length;o!==s;++o){var c=a[o];this._deactivateAction(c);var l=c._cacheIndex,u=i[i.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=l,i[l]=u,i.pop(),this._removeInactiveBindingsForAction(c)}delete n[t]}},uncacheRoot:function(e){var i=e.uuid,t=this._actionsByClip;for(var n in t){var r=t[n].actionByRoot[i];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}var a=this._bindingsByRootAndName[i];if(a!==void 0)for(var o in a){var s=a[o];s.restoreOriginalState(),this._removeInactiveBinding(s)}},uncacheAction:function(e,i){var t=this.existingAction(e,i);t!==null&&(this._deactivateAction(t),this._removeInactiveAction(t))}});var Au=function(){function e(i){typeof i=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),i=arguments[1]),this.value=i}return e.prototype.clone=function(){return new e(this.value.clone===void 0?this.value:this.value.clone())},e}();function zc(e,i,t){dn.call(this,e,i),this.meshPerAttribute=t||1}function Gc(e,i,t,n,r){this.buffer=e,this.type=i,this.itemSize=t,this.elementSize=n,this.count=r,this.version=0}function Uc(e,i,t,n){this.ray=new Lr(e,i),this.near=t||0,this.far=n||1/0,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Lu(e,i){return e.distance-i.distance}function Fc(e,i,t,n){if(e.layers.test(i.layers)&&e.raycast(i,t),n===!0)for(var r=e.children,a=0,o=r.length;a<o;a++)Fc(r[a],i,t,!0)}zc.prototype=Object.assign(Object.create(dn.prototype),{constructor:zc,isInstancedInterleavedBuffer:!0,copy:function(e){return dn.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){var i=dn.prototype.clone.call(this,e);return i.meshPerAttribute=this.meshPerAttribute,i},toJSON:function(e){var i=dn.prototype.toJSON.call(this,e);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}),Object.defineProperty(Gc.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}}),Object.assign(Gc.prototype,{isGLBufferAttribute:!0,setBuffer:function(e){return this.buffer=e,this},setType:function(e,i){return this.type=e,this.elementSize=i,this},setItemSize:function(e){return this.itemSize=e,this},setCount:function(e){return this.count=e,this}}),Object.assign(Uc.prototype,{set:function(e,i){this.ray.set(e,i)},setFromCamera:function(e,i){i&&i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i&&i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,i,t){var n=t||[];return Fc(e,this,n,i),n.sort(Lu),n},intersectObjects:function(e,i,t){var n=t||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),n;for(var r=0,a=e.length;r<a;r++)Fc(e[r],this,n,i);return n.sort(Lu),n}});var dp=function(){function e(t,n,r){return t===void 0&&(t=1),n===void 0&&(n=0),r===void 0&&(r=0),this.radius=t,this.phi=n,this.theta=r,this}var i=e.prototype;return i.set=function(t,n,r){return this.radius=t,this.phi=n,this.theta=r,this},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this},i.makeSafe=function(){var t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this},i.setFromVector3=function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},i.setFromCartesianCoords=function(t,n,r){return this.radius=Math.sqrt(t*t+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(be.clamp(n/this.radius,-1,1))),this},e}(),pp=function(){function e(t,n,r){return this.radius=t!==void 0?t:1,this.theta=n!==void 0?n:0,this.y=r!==void 0?r:0,this}var i=e.prototype;return i.set=function(t,n,r){return this.radius=t,this.theta=n,this.y=r,this},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this},i.setFromVector3=function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},i.setFromCartesianCoords=function(t,n,r){return this.radius=Math.sqrt(t*t+r*r),this.theta=Math.atan2(t,r),this.y=n,this},e}(),Ru=new I,Cu=function(){function e(t,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=t!==void 0?t:new I(1/0,1/0),this.max=n!==void 0?n:new I(-1/0,-1/0)}var i=e.prototype;return i.set=function(t,n){return this.min.copy(t),this.max.copy(n),this},i.setFromPoints=function(t){this.makeEmpty();for(var n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this},i.setFromCenterAndSize=function(t,n){var r=Ru.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){return this.min.copy(t.min),this.max.copy(t.max),this},i.makeEmpty=function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},i.isEmpty=function(){return this.max.x<this.min.x||this.max.y<this.min.y},i.getCenter=function(t){return t===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new I),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},i.getSize=function(t){return t===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new I),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)},i.expandByPoint=function(t){return this.min.min(t),this.max.max(t),this},i.expandByVector=function(t){return this.min.sub(t),this.max.add(t),this},i.expandByScalar=function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},i.containsPoint=function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)},i.containsBox=function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y},i.getParameter=function(t,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new I),n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))},i.intersectsBox=function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)},i.clampPoint=function(t,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new I),n.copy(t).clamp(this.min,this.max)},i.distanceToPoint=function(t){return Ru.copy(t).clamp(this.min,this.max).sub(t).length()},i.intersect=function(t){return this.min.max(t.min),this.max.min(t.max),this},i.union=function(t){return this.min.min(t.min),this.max.max(t.max),this},i.translate=function(t){return this.min.add(t),this.max.add(t),this},i.equals=function(t){return t.min.equals(this.min)&&t.max.equals(this.max)},e}(),Pu=new M,cs=new M,Ou=function(){function e(t,n){this.start=t!==void 0?t:new M,this.end=n!==void 0?n:new M}var i=e.prototype;return i.set=function(t,n){return this.start.copy(t),this.end.copy(n),this},i.clone=function(){return new this.constructor().copy(this)},i.copy=function(t){return this.start.copy(t.start),this.end.copy(t.end),this},i.getCenter=function(t){return t===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),t=new M),t.addVectors(this.start,this.end).multiplyScalar(.5)},i.delta=function(t){return t===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),t=new M),t.subVectors(this.end,this.start)},i.distanceSq=function(){return this.start.distanceToSquared(this.end)},i.distance=function(){return this.start.distanceTo(this.end)},i.at=function(t,n){return n===void 0&&(console.warn("THREE.Line3: .at() target is now required"),n=new M),this.delta(n).multiplyScalar(t).add(this.start)},i.closestPointToPointParameter=function(t,n){Pu.subVectors(t,this.start),cs.subVectors(this.end,this.start);var r=cs.dot(cs),a=cs.dot(Pu)/r;return n&&(a=be.clamp(a,0,1)),a},i.closestPointToPoint=function(t,n,r){var a=this.closestPointToPointParameter(t,n);return r===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),r=new M),this.delta(r).multiplyScalar(a).add(this.start)},i.applyMatrix4=function(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this},i.equals=function(t){return t.start.equals(this.start)&&t.end.equals(this.end)},e}();function qa(e){ye.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}qa.prototype=Object.create(ye.prototype),qa.prototype.constructor=qa,qa.prototype.isImmediateRenderObject=!0;var Nu=new M,fp=function(e){function i(n,r){var a;(a=e.call(this)||this).light=n,a.light.updateMatrixWorld(),a.matrix=n.matrixWorld,a.matrixAutoUpdate=!1,a.color=r;for(var o=new _e,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],c=0,l=1;c<32;c++,l++){var u=c/32*Math.PI*2,h=l/32*Math.PI*2;s.push(Math.cos(u),Math.sin(u),1,Math.cos(h),Math.sin(h),1)}o.setAttribute("position",new se(s,3));var p=new ut({fog:!1,toneMapped:!1});return a.cone=new Qt(o,p),a.add(a.cone),a.update(),a}ge(i,e);var t=i.prototype;return t.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()},t.update=function(){this.light.updateMatrixWorld();var n=this.light.distance?this.light.distance:1e3,r=n*Math.tan(this.light.angle);this.cone.scale.set(r,r,n),Nu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)},i}(ye),Gi=new M,ls=new Ne,Hc=new Ne,Du=function(e){function i(t){for(var n,r=Iu(t),a=new _e,o=[],s=[],c=new pe(0,0,1),l=new pe(0,1,0),u=0;u<r.length;u++){var h=r[u];h.parent&&h.parent.isBone&&(o.push(0,0,0),o.push(0,0,0),s.push(c.r,c.g,c.b),s.push(l.r,l.g,l.b))}a.setAttribute("position",new se(o,3)),a.setAttribute("color",new se(s,3));var p=new ut({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});return(n=e.call(this,a,p)||this).type="SkeletonHelper",n.isSkeletonHelper=!0,n.root=t,n.bones=r,n.matrix=t.matrixWorld,n.matrixAutoUpdate=!1,n}return ge(i,e),i.prototype.updateMatrixWorld=function(t){var n=this.bones,r=this.geometry,a=r.getAttribute("position");Hc.getInverse(this.root.matrixWorld);for(var o=0,s=0;o<n.length;o++){var c=n[o];c.parent&&c.parent.isBone&&(ls.multiplyMatrices(Hc,c.matrixWorld),Gi.setFromMatrixPosition(ls),a.setXYZ(s,Gi.x,Gi.y,Gi.z),ls.multiplyMatrices(Hc,c.parent.matrixWorld),Gi.setFromMatrixPosition(ls),a.setXYZ(s+1,Gi.x,Gi.y,Gi.z),s+=2)}r.getAttribute("position").needsUpdate=!0,e.prototype.updateMatrixWorld.call(this,t)},i}(Qt);function Iu(e){var i=[];e&&e.isBone&&i.push(e);for(var t=0;t<e.children.length;t++)i.push.apply(i,Iu(e.children[t]));return i}var mp=function(e){function i(n,r,a){var o,s=new Uo(r,4,2),c=new vn({wireframe:!0,fog:!1,toneMapped:!1});return(o=e.call(this,s,c)||this).light=n,o.light.updateMatrixWorld(),o.color=a,o.type="PointLightHelper",o.matrix=o.light.matrixWorld,o.matrixAutoUpdate=!1,o.update(),o}ge(i,e);var t=i.prototype;return t.dispose=function(){this.geometry.dispose(),this.material.dispose()},t.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)},i}(st),vp=new M,Bu=new pe,zu=new pe,gp=function(e){function i(n,r,a){var o;(o=e.call(this)||this).light=n,o.light.updateMatrixWorld(),o.matrix=n.matrixWorld,o.matrixAutoUpdate=!1,o.color=a;var s=new Go(r);s.rotateY(.5*Math.PI),o.material=new vn({wireframe:!0,fog:!1,toneMapped:!1}),o.color===void 0&&(o.material.vertexColors=!0);var c=s.getAttribute("position"),l=new Float32Array(3*c.count);return s.setAttribute("color",new Me(l,3)),o.add(new st(s,o.material)),o.update(),o}ge(i,e);var t=i.prototype;return t.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()},t.update=function(){var n=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{var r=n.geometry.getAttribute("color");Bu.copy(this.light.color),zu.copy(this.light.groundColor);for(var a=0,o=r.count;a<o;a++){var s=a<o/2?Bu:zu;r.setXYZ(a,s.r,s.g,s.b)}r.needsUpdate=!0}n.lookAt(vp.setFromMatrixPosition(this.light.matrixWorld).negate())},i}(ye),Gu=function(e){function i(t,n,r,a){var o;t=t||10,n=n||10,r=new pe(r!==void 0?r:4473924),a=new pe(a!==void 0?a:8947848);for(var s=n/2,c=t/n,l=t/2,u=[],h=[],p=0,d=0,f=-l;p<=n;p++,f+=c){u.push(-l,0,f,l,0,f),u.push(f,0,-l,f,0,l);var g=p===s?r:a;g.toArray(h,d),d+=3,g.toArray(h,d),d+=3,g.toArray(h,d),d+=3,g.toArray(h,d),d+=3}var m=new _e;m.setAttribute("position",new se(u,3)),m.setAttribute("color",new se(h,3));var y=new ut({vertexColors:!0,toneMapped:!1});return(o=e.call(this,m,y)||this).type="GridHelper",o}return ge(i,e),i}(Qt),yp=function(e){function i(t,n,r,a,o,s){var c;t=t||10,n=n||16,r=r||8,a=a||64,o=new pe(o!==void 0?o:4473924),s=new pe(s!==void 0?s:8947848);for(var l=[],u=[],h=0;h<=n;h++){var p=h/n*(2*Math.PI),d=Math.sin(p)*t,f=Math.cos(p)*t;l.push(0,0,0),l.push(d,0,f);var g=1&h?o:s;u.push(g.r,g.g,g.b),u.push(g.r,g.g,g.b)}for(var m=0;m<=r;m++)for(var y=1&m?o:s,_=t-t/r*m,x=0;x<a;x++){var b=x/a*(2*Math.PI),w=Math.sin(b)*_,E=Math.cos(b)*_;l.push(w,0,E),u.push(y.r,y.g,y.b),b=(x+1)/a*(2*Math.PI),w=Math.sin(b)*_,E=Math.cos(b)*_,l.push(w,0,E),u.push(y.r,y.g,y.b)}var S=new _e;S.setAttribute("position",new se(l,3)),S.setAttribute("color",new se(u,3));var P=new ut({vertexColors:!0,toneMapped:!1});return(c=e.call(this,S,P)||this).type="PolarGridHelper",c}return ge(i,e),i}(Qt),Uu=new M,us=new M,Fu=new M,xp=function(e){function i(n,r,a){var o;(o=e.call(this)||this).light=n,o.light.updateMatrixWorld(),o.matrix=n.matrixWorld,o.matrixAutoUpdate=!1,o.color=a,r===void 0&&(r=1);var s=new _e;s.setAttribute("position",new se([-r,r,0,r,r,0,r,-r,0,-r,-r,0,-r,r,0],3));var c=new ut({fog:!1,toneMapped:!1});return o.lightPlane=new yn(s,c),o.add(o.lightPlane),(s=new _e).setAttribute("position",new se([0,0,0,0,0,1],3)),o.targetLine=new yn(s,c),o.add(o.targetLine),o.update(),o}ge(i,e);var t=i.prototype;return t.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()},t.update=function(){Uu.setFromMatrixPosition(this.light.matrixWorld),us.setFromMatrixPosition(this.light.target.matrixWorld),Fu.subVectors(us,Uu),this.lightPlane.lookAt(us),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(us),this.targetLine.scale.z=Fu.length()},i}(ye),hs=new M,yt=new Wn,bp=function(e){function i(t){var n,r=new _e,a=new ut({color:16777215,vertexColors:!0,toneMapped:!1}),o=[],s=[],c={},l=new pe(16755200),u=new pe(16711680),h=new pe(43775),p=new pe(16777215),d=new pe(3355443);function f(m,y,_){g(m,_),g(y,_)}function g(m,y){o.push(0,0,0),s.push(y.r,y.g,y.b),c[m]===void 0&&(c[m]=[]),c[m].push(o.length/3-1)}return f("n1","n2",l),f("n2","n4",l),f("n4","n3",l),f("n3","n1",l),f("f1","f2",l),f("f2","f4",l),f("f4","f3",l),f("f3","f1",l),f("n1","f1",l),f("n2","f2",l),f("n3","f3",l),f("n4","f4",l),f("p","n1",u),f("p","n2",u),f("p","n3",u),f("p","n4",u),f("u1","u2",h),f("u2","u3",h),f("u3","u1",h),f("c","t",p),f("p","c",d),f("cn1","cn2",d),f("cn3","cn4",d),f("cf1","cf2",d),f("cf3","cf4",d),r.setAttribute("position",new se(o,3)),r.setAttribute("color",new se(s,3)),(n=e.call(this,r,a)||this).type="CameraHelper",n.camera=t,n.camera.updateProjectionMatrix&&n.camera.updateProjectionMatrix(),n.matrix=t.matrixWorld,n.matrixAutoUpdate=!1,n.pointMap=c,n.update(),n}return ge(i,e),i.prototype.update=function(){var t=this.geometry,n=this.pointMap;yt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),wt("c",n,t,yt,0,0,-1),wt("t",n,t,yt,0,0,1),wt("n1",n,t,yt,-1,-1,-1),wt("n2",n,t,yt,1,-1,-1),wt("n3",n,t,yt,-1,1,-1),wt("n4",n,t,yt,1,1,-1),wt("f1",n,t,yt,-1,-1,1),wt("f2",n,t,yt,1,-1,1),wt("f3",n,t,yt,-1,1,1),wt("f4",n,t,yt,1,1,1),wt("u1",n,t,yt,.7,1.1,-1),wt("u2",n,t,yt,-.7,1.1,-1),wt("u3",n,t,yt,0,2,-1),wt("cf1",n,t,yt,-1,0,1),wt("cf2",n,t,yt,1,0,1),wt("cf3",n,t,yt,0,-1,1),wt("cf4",n,t,yt,0,1,1),wt("cn1",n,t,yt,-1,0,-1),wt("cn2",n,t,yt,1,0,-1),wt("cn3",n,t,yt,0,-1,-1),wt("cn4",n,t,yt,0,1,-1),t.getAttribute("position").needsUpdate=!0},i}(Qt);function wt(e,i,t,n,r,a,o){hs.set(r,a,o).unproject(n);var s=i[e];if(s!==void 0)for(var c=t.getAttribute("position"),l=0,u=s.length;l<u;l++)c.setXYZ(s[l],hs.x,hs.y,hs.z)}var kc,Hu,Ui,ds=new Pt,ku=function(e){function i(n,r){var a;r===void 0&&(r=16776960);var o=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),c=new _e;return c.setIndex(new Me(o,1)),c.setAttribute("position",new Me(s,3)),(a=e.call(this,c,new ut({color:r,toneMapped:!1}))||this).object=n,a.type="BoxHelper",a.matrixAutoUpdate=!1,a.update(),a}ge(i,e);var t=i.prototype;return t.update=function(n){if(n!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ds.setFromObject(this.object),!ds.isEmpty()){var r=ds.min,a=ds.max,o=this.geometry.attributes.position,s=o.array;s[0]=a.x,s[1]=a.y,s[2]=a.z,s[3]=r.x,s[4]=a.y,s[5]=a.z,s[6]=r.x,s[7]=r.y,s[8]=a.z,s[9]=a.x,s[10]=r.y,s[11]=a.z,s[12]=a.x,s[13]=a.y,s[14]=r.z,s[15]=r.x,s[16]=a.y,s[17]=r.z,s[18]=r.x,s[19]=r.y,s[20]=r.z,s[21]=a.x,s[22]=r.y,s[23]=r.z,o.needsUpdate=!0,this.geometry.computeBoundingSphere()}},t.setFromObject=function(n){return this.object=n,this.update(),this},t.copy=function(n){return Qt.prototype.copy.call(this,n),this.object=n.object,this},i}(Qt),_p=function(e){function i(t,n){var r;n===void 0&&(n=16776960);var a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),o=new _e;return o.setIndex(new Me(a,1)),o.setAttribute("position",new se([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),(r=e.call(this,o,new ut({color:n,toneMapped:!1}))||this).box=t,r.type="Box3Helper",r.geometry.computeBoundingSphere(),r}return ge(i,e),i.prototype.updateMatrixWorld=function(t){var n=this.box;n.isEmpty()||(n.getCenter(this.position),n.getSize(this.scale),this.scale.multiplyScalar(.5),e.prototype.updateMatrixWorld.call(this,t))},i}(Qt),wp=function(e){function i(t,n,r){var a,o=r!==void 0?r:16776960,s=new _e;s.setAttribute("position",new se([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3)),s.computeBoundingSphere(),(a=e.call(this,s,new ut({color:o,toneMapped:!1}))||this).type="PlaneHelper",a.plane=t,a.size=n===void 0?1:n;var c=new _e;return c.setAttribute("position",new se([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3)),c.computeBoundingSphere(),a.add(new st(c,new vn({color:o,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1}))),a}return ge(i,e),i.prototype.updateMatrixWorld=function(t){var n=-this.plane.constant;Math.abs(n)<1e-8&&(n=1e-8),this.scale.set(.5*this.size,.5*this.size,n),this.children[0].material.side=n<0?1:0,this.lookAt(this.plane.normal),e.prototype.updateMatrixWorld.call(this,t)},i}(yn),Vu=new M,Mp=function(e){function i(n,r,a,o,s,c){var l;return(l=e.call(this)||this).type="ArrowHelper",n===void 0&&(n=new M(0,0,1)),r===void 0&&(r=new M(0,0,0)),a===void 0&&(a=1),o===void 0&&(o=16776960),s===void 0&&(s=.2*a),c===void 0&&(c=.2*s),kc===void 0&&((kc=new _e).setAttribute("position",new se([0,0,0,0,1,0],3)),(Hu=new Ia(0,.5,1,5,1)).translate(0,-.5,0)),l.position.copy(r),l.line=new yn(kc,new ut({color:o,toneMapped:!1})),l.line.matrixAutoUpdate=!1,l.add(l.line),l.cone=new st(Hu,new vn({color:o,toneMapped:!1})),l.cone.matrixAutoUpdate=!1,l.add(l.cone),l.setDirection(n),l.setLength(a,s,c),l}ge(i,e);var t=i.prototype;return t.setDirection=function(n){if(n.y>.99999)this.quaternion.set(0,0,0,1);else if(n.y<-.99999)this.quaternion.set(1,0,0,0);else{Vu.set(n.z,0,-n.x).normalize();var r=Math.acos(n.y);this.quaternion.setFromAxisAngle(Vu,r)}},t.setLength=function(n,r,a){r===void 0&&(r=.2*n),a===void 0&&(a=.2*r),this.line.scale.set(1,Math.max(1e-4,n-r),1),this.line.updateMatrix(),this.cone.scale.set(a,r,a),this.cone.position.y=n,this.cone.updateMatrix()},t.setColor=function(n){this.line.material.color.set(n),this.cone.material.color.set(n)},t.copy=function(n){return e.prototype.copy.call(this,n,!1),this.line.copy(n.line),this.cone.copy(n.cone),this},i}(ye),Wu=function(e){function i(t){var n;t===void 0&&(t=1);var r=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],a=new _e;a.setAttribute("position",new se(r,3)),a.setAttribute("color",new se([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));var o=new ut({vertexColors:!0,toneMapped:!1});return(n=e.call(this,a,o)||this).type="AxesHelper",n}return ge(i,e),i}(Qt),Jn=Math.pow(2,8),ju=[.125,.215,.35,.446,.526,.582],qu=5+ju.length,Xa=20,Qn=((Ui={})[3e3]=0,Ui[3001]=1,Ui[3002]=2,Ui[3004]=3,Ui[3005]=4,Ui[3006]=5,Ui[3007]=6,Ui),Vc=new ia,Wc=Ep(),Ya=Wc._lodPlanes,Xu=Wc._sizeLods,ps=Wc._sigmas,jc=null,mr=(1+Math.sqrt(5))/2,ra=1/mr,Yu=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,mr,ra),new M(0,mr,-ra),new M(ra,0,mr),new M(-ra,0,mr),new M(mr,ra,0),new M(-mr,ra,0)],Sp=function(){function e(t){var n,r,a;this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=(n=Xa,r=new Float32Array(n),a=new M(0,1,0),new ui({name:"SphericalGaussianBlur",defines:{n},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a},inputEncoding:{value:Qn[3e3]},outputEncoding:{value:Qn[3e3]}},vertexShader:`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`,fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}var i=e.prototype;return i.fromScene=function(t,n,r,a){n===void 0&&(n=0),r===void 0&&(r=.1),a===void 0&&(a=100),jc=this._renderer.getRenderTarget();var o=this._allocateTargets();return this._sceneToCubeUV(t,r,a,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o},i.fromEquirectangular=function(t){return this._fromTexture(t)},i.fromCubemap=function(t){return this._fromTexture(t)},i.compileCubemapShader=function(){this._cubemapShader===null&&(this._cubemapShader=Qu(),this._compileMaterial(this._cubemapShader))},i.compileEquirectangularShader=function(){this._equirectShader===null&&(this._equirectShader=Ju(),this._compileMaterial(this._equirectShader))},i.dispose=function(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(var t=0;t<Ya.length;t++)Ya[t].dispose()},i._cleanup=function(t){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(jc),t.scissorTest=!1,fs(t,0,0,t.width,t.height)},i._fromTexture=function(t){jc=this._renderer.getRenderTarget();var n=this._allocateTargets(t);return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n},i._allocateTargets=function(t){var n={magFilter:dt,minFilter:dt,generateMipmaps:!1,type:ze,format:1023,encoding:Tp(t)?t.encoding:Sr,depthBuffer:!1},r=Zu(n);return r.depthBuffer=!t,this._pingPongRenderTarget=Zu(n),r},i._compileMaterial=function(t){var n=new st(Ya[0],t);this._renderer.compile(n,Vc)},i._sceneToCubeUV=function(t,n,r,a){var o=new Et(90,1,n,r),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.outputEncoding,h=l.toneMapping,p=l.getClearColor(),d=l.getClearAlpha();l.toneMapping=0,l.outputEncoding=Hn;var f=t.background;if(f&&f.isColor){f.convertSRGBToLinear();var g=Math.max(f.r,f.g,f.b),m=Math.min(Math.max(Math.ceil(Math.log2(g)),-128),127);f=f.multiplyScalar(Math.pow(2,-m));var y=(m+128)/255;l.setClearColor(f,y),t.background=null}for(var _=0;_<6;_++){var x=_%3;x==0?(o.up.set(0,s[_],0),o.lookAt(c[_],0,0)):x==1?(o.up.set(0,0,s[_]),o.lookAt(0,c[_],0)):(o.up.set(0,s[_],0),o.lookAt(0,0,c[_])),fs(a,x*Jn,_>2?Jn:0,Jn,Jn),l.setRenderTarget(a),l.render(t,o)}l.toneMapping=h,l.outputEncoding=u,l.setClearColor(p,d)},i._textureToCubeUV=function(t,n){var r=this._renderer;t.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Qu()):this._equirectShader==null&&(this._equirectShader=Ju());var a=t.isCubeTexture?this._cubemapShader:this._equirectShader,o=new st(Ya[0],a),s=a.uniforms;s.envMap.value=t,t.isCubeTexture||s.texelSize.value.set(1/t.image.width,1/t.image.height),s.inputEncoding.value=Qn[t.encoding],s.outputEncoding.value=Qn[n.texture.encoding],fs(n,0,0,3*Jn,2*Jn),r.setRenderTarget(n),r.render(o,Vc)},i._applyPMREM=function(t){var n=this._renderer,r=n.autoClear;n.autoClear=!1;for(var a=1;a<qu;a++){var o=Math.sqrt(ps[a]*ps[a]-ps[a-1]*ps[a-1]),s=Yu[(a-1)%Yu.length];this._blur(t,a-1,a,o,s)}n.autoClear=r},i._blur=function(t,n,r,a,o){var s=this._pingPongRenderTarget;this._halfBlur(t,s,n,r,a,"latitudinal",o),this._halfBlur(s,t,r,r,a,"longitudinal",o)},i._halfBlur=function(t,n,r,a,o,s,c){var l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");var h=new st(Ya[a],u),p=u.uniforms,d=Xu[r]-1,f=isFinite(o)?Math.PI/(2*d):2*Math.PI/39,g=o/f,m=isFinite(o)?1+Math.floor(3*g):Xa;m>Xa&&console.warn("sigmaRadians, "+o+", is too large and will clip, as it requested "+m+" samples when the maximum is set to "+Xa);for(var y=[],_=0,x=0;x<Xa;++x){var b=x/g,w=Math.exp(-b*b/2);y.push(w),x==0?_+=w:x<m&&(_+=2*w)}for(var E=0;E<y.length;E++)y[E]=y[E]/_;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=y,p.latitudinal.value=s==="latitudinal",c&&(p.poleAxis.value=c),p.dTheta.value=f,p.mipInt.value=8-r,p.inputEncoding.value=Qn[t.texture.encoding],p.outputEncoding.value=Qn[t.texture.encoding];var S=Xu[a];fs(n,3*Math.max(0,Jn-2*S),(a===0?0:2*Jn)+2*S*(a>4?a-8+4:0),3*S,2*S),l.setRenderTarget(n),l.render(h,Vc)},e}();function Tp(e){return e!==void 0&&e.type===ze&&(e.encoding===Hn||e.encoding===Mr||e.encoding===sa)}function Ep(){for(var e=[],i=[],t=[],n=8,r=0;r<qu;r++){var a=Math.pow(2,n);i.push(a);var o=1/a;r>4?o=ju[r-8+4-1]:r==0&&(o=0),t.push(o);for(var s=1/(a-1),c=-s/2,l=1+s/2,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=new Float32Array(108),p=new Float32Array(72),d=new Float32Array(36),f=0;f<6;f++){var g=f%3*2/3-1,m=f>2?0:-1,y=[g,m,0,g+2/3,m,0,g+2/3,m+1,0,g,m,0,g+2/3,m+1,0,g,m+1,0];h.set(y,18*f),p.set(u,12*f);var _=[f,f,f,f,f,f];d.set(_,6*f)}var x=new _e;x.setAttribute("position",new Me(h,3)),x.setAttribute("uv",new Me(p,2)),x.setAttribute("faceIndex",new Me(d,1)),e.push(x),n>4&&n--}return{_lodPlanes:e,_sizeLods:i,_sigmas:t}}function Zu(e){var i=new He(3*Jn,3*Jn,e);return i.texture.mapping=an,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(e,i,t,n,r){e.viewport.set(i,t,n,r),e.scissor.set(i,t,n,r)}function Ju(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:new I(1,1)},inputEncoding:{value:Qn[3e3]},outputEncoding:{value:Qn[3e3]}},vertexShader:`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`,fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qu(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Qn[3e3]},outputEncoding:{value:Qn[3e3]}},vertexShader:`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`,fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ku(e){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Wt.call(this,e),this.type="catmullrom",this.closed=!0}function $u(e){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Wt.call(this,e),this.type="catmullrom"}function qc(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Wt.call(this,e),this.type="catmullrom"}xe.create=function(e,i){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(xe.prototype),e.prototype.constructor=e,e.prototype.getPoint=i,e},Object.assign(hi.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");var i=this.getPoints(e);return this.createGeometry(i)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");var i=this.getSpacedPoints(e);return this.createGeometry(i)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var i=new tt,t=0,n=e.length;t<n;t++){var r=e[t];i.vertices.push(new M(r.x,r.y,r.z||0))}return i}}),Object.assign(Dn.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}}),Ku.prototype=Object.create(Wt.prototype),$u.prototype=Object.create(Wt.prototype),qc.prototype=Object.create(Wt.prototype),Object.assign(qc.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}}),Gu.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Du.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Object.assign($e.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Tc.extractUrlBase(e)}}),$e.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Object.assign(Cu.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}}),Object.assign(Pt.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}}),Object.assign(ri.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}}),wa.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)},Ou.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)},Object.assign(be,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),be.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),be.ceilPowerOfTwo(e)}}),Object.assign(ae.prototype,{flattenToArrayOffset:function(e,i){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,i)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}}),Object.assign(Ne.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,i){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,i)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new M().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,i,t,n,r,a){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,i,n,t,r,a)}}),kn.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)},Ze.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)},Object.assign(Lr.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}}),Object.assign(Tn.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,i)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}}),Object.assign(Tn,{barycoordFromPoint:function(e,i,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Tn.getBarycoord(e,i,t,n,r)},normal:function(e,i,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Tn.getNormal(e,i,t,n)}}),Object.assign(zi.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new nc(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new sc(this,e)}}),Object.assign(I.prototype,{fromAttribute:function(e,i,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,i,t)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(M.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,i){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(i,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,i,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,i,t)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(de.prototype,{fromAttribute:function(e,i,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,i,t)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(tt.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}}),Object.assign(ye.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,i){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(i,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}}),Object.defineProperties(ye.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.assign(st.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}),Object.defineProperties(st.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Object.defineProperties(Pa.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(wo.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),_o.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Object.defineProperty(xe.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}}),Et.prototype.setLens=function(e,i){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),i!==void 0&&(this.filmGauge=i),this.setFocalLength(e)},Object.defineProperties(at.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}}),Object.defineProperties(Me.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ii},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ii)}}}),Object.assign(Me.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?ii:nn),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(_e.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,i){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),i&&i.isBufferAttribute||i&&i.isInterleavedBufferAttribute?e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(i),this):this.setAttribute(e,i):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new Me(arguments[1],arguments[2])))},addDrawCall:function(e,i,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,i)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}}),Object.defineProperties(_e.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.defineProperties(ja.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}}),Object.defineProperties(Uc.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}}),Object.defineProperties(dn.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===ii},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}}),Object.assign(dn.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?ii:nn),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(Ua.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}}),Object.assign(zs.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}}),Object.defineProperties(Au.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),Object.defineProperties(Ee.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new pe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}}),Object.defineProperties(Bi.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(Ii.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(e){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=e}}}),Object.defineProperties(Jt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}}),Object.assign(Ea.prototype,{clearTarget:function(e,i,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(i,t,n)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(Ea.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?Mr:Hn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(Ll.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(He.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}}),Object.defineProperties(Nc.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var i=this;return new ss().load(e,function(t){i.setBuffer(t)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}}),Su.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},Ur.prototype.updateCubeMap=function(e,i){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,i)};var Ap={merge:function(e,i,t){var n;console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."),i.isMesh&&(i.matrixAutoUpdate&&i.updateMatrix(),n=i.matrix,i=i.geometry),e.merge(i,n,t)},center:function(e){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),e.center()}};Le.crossOrigin=void 0,Le.loadTexture=function(e,i,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var r=new Yo;r.setCrossOrigin(this.crossOrigin);var a=r.load(e,t,void 0,n);return i&&(a.mapping=i),a},Le.loadTextureCube=function(e,i,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var r=new qo;r.setCrossOrigin(this.crossOrigin);var a=r.load(e,t,void 0,n);return i&&(a.mapping=i),a},Le.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Le.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};var Lp={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"121"}})),v.ACESFilmicToneMapping=4,v.AddEquation=nt,v.AddOperation=2,v.AdditiveAnimationBlendMode=oa,v.AdditiveBlending=2,v.AlphaFormat=1021,v.AlwaysDepth=1,v.AlwaysStencilFunc=519,v.AmbientLight=es,v.AmbientLightProbe=Oc,v.AnimationClip=xn,v.AnimationLoader=mc,v.AnimationMixer=Bc,v.AnimationObjectGroup=Eu,v.AnimationUtils=ct,v.ArcCurve=na,v.ArrayCamera=vo,v.ArrowHelper=Mp,v.Audio=Nc,v.AudioAnalyser=Su,v.AudioContext=Cc,v.AudioListener=$d,v.AudioLoader=ss,v.AxesHelper=Wu,v.AxisHelper=function(e){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Wu(e)},v.BackSide=1,v.BasicDepthPacking=3200,v.BasicShadowMap=0,v.BinaryTextureLoader=function(e){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Xo(e)},v.Bone=Vs,v.BooleanKeyframeTrack=ko,v.BoundingBoxHelper=function(e,i){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new ku(e,i)},v.Box2=Cu,v.Box3=Pt,v.Box3Helper=_p,v.BoxBufferGeometry=_a,v.BoxGeometry=Ys,v.BoxHelper=ku,v.BufferAttribute=Me,v.BufferGeometry=_e,v.BufferGeometryLoader=rs,v.ByteType=1010,v.Cache=ur,v.Camera=Wn,v.CameraHelper=bp,v.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")},v.CanvasTexture=Na,v.CatmullRomCurve3=Wt,v.CineonToneMapping=3,v.CircleBufferGeometry=Zs,v.CircleGeometry=jl,v.ClampToEdgeWrapping=Dt,v.Clock=_u,v.ClosedSplineCurve3=Ku,v.Color=pe,v.ColorKeyframeTrack=Vo,v.CompressedTexture=Zr,v.CompressedTextureLoader=vc,v.ConeBufferGeometry=Xl,v.ConeGeometry=ql,v.CubeCamera=Ur,v.CubeGeometry=Ys,v.CubeReflectionMapping=Yt,v.CubeRefractionMapping=zn,v.CubeTexture=jn,v.CubeTextureLoader=qo,v.CubeUVReflectionMapping=an,v.CubeUVRefractionMapping=Ut,v.CubicBezierCurve=Cn,v.CubicBezierCurve3=Yn,v.CubicInterpolant=Fo,v.CullFaceBack=1,v.CullFaceFront=2,v.CullFaceFrontBack=3,v.CullFaceNone=0,v.Curve=xe,v.CurvePath=hi,v.CustomBlending=5,v.CustomToneMapping=5,v.CylinderBufferGeometry=Ia,v.CylinderGeometry=Js,v.Cylindrical=pp,v.DataTexture=tr,v.DataTexture2DArray=Hr,v.DataTexture3D=kr,v.DataTextureLoader=Xo,v.DecrementStencilOp=7683,v.DecrementWrapStencilOp=34056,v.DefaultLoadingManager=pu,v.DepthFormat=Ve,v.DepthStencilFormat=tn,v.DepthTexture=Da,v.DirectionalLight=$o,v.DirectionalLightHelper=xp,v.DiscreteInterpolant=Ho,v.DodecahedronBufferGeometry=Qs,v.DodecahedronGeometry=Yl,v.DoubleSide=2,v.DstAlphaFactor=206,v.DstColorFactor=208,v.DynamicBufferAttribute=function(e,i){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new Me(e,i).setUsage(ii)},v.DynamicCopyUsage=35050,v.DynamicDrawUsage=ii,v.DynamicReadUsage=35049,v.EdgesGeometry=$s,v.EdgesHelper=function(e,i){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new Qt(new $s(e.geometry),new ut({color:i!==void 0?i:16777215}))},v.EllipseCurve=fn,v.EqualDepth=4,v.EqualStencilFunc=514,v.EquirectangularReflectionMapping=ti,v.EquirectangularRefractionMapping=wn,v.Euler=ro,v.EventDispatcher=Ct,v.ExtrudeBufferGeometry=Ua,v.ExtrudeGeometry=nc,v.Face3=da,v.Face4=function(e,i,t,n,r,a,o){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new da(e,i,t,r,a,o)},v.FaceColors=1,v.FileLoader=bn,v.FlatShading=1,v.Float32Attribute=function(e,i){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new se(e,i)},v.Float32BufferAttribute=se,v.Float64Attribute=function(e,i){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new ya(e,i)},v.Float64BufferAttribute=ya,v.FloatType=Rt,v.Fog=Ol,v.FogExp2=Pl,v.Font=Lc,v.FontLoader=Rc,v.FrontSide=0,v.Frustum=wa,v.GLBufferAttribute=Gc,v.GLSL1="100",v.GLSL3=Tr,v.GammaEncoding=sa,v.Geometry=tt,v.GeometryUtils=Ap,v.GreaterDepth=6,v.GreaterEqualDepth=5,v.GreaterEqualStencilFunc=518,v.GreaterStencilFunc=516,v.GridHelper=Gu,v.Group=Pi,v.HalfFloatType=on,v.HemisphereLight=Jo,v.HemisphereLightHelper=gp,v.HemisphereLightProbe=Pc,v.IcosahedronBufferGeometry=ic,v.IcosahedronGeometry=tu,v.ImageBitmapLoader=Ec,v.ImageLoader=ta,v.ImageUtils=Le,v.ImmediateRenderObject=qa,v.IncrementStencilOp=7682,v.IncrementWrapStencilOp=34055,v.InstancedBufferAttribute=is,v.InstancedBufferGeometry=ja,v.InstancedInterleavedBuffer=zc,v.InstancedMesh=So,v.Int16Attribute=function(e,i){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new va(e,i)},v.Int16BufferAttribute=va,v.Int32Attribute=function(e,i){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new ga(e,i)},v.Int32BufferAttribute=ga,v.Int8Attribute=function(e,i){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new pa(e,i)},v.Int8BufferAttribute=pa,v.IntType=1013,v.InterleavedBuffer=dn,v.InterleavedBufferAttribute=Oi,v.Interpolant=pn,v.InterpolateDiscrete=xi,v.InterpolateLinear=Vi,v.InterpolateSmooth=Wi,v.InvertStencilOp=5386,v.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")},v.KeepStencilOp=Yi,v.KeyframeTrack=Ht,v.LOD=Pa,v.LatheBufferGeometry=rc,v.LatheGeometry=nu,v.Layers=bs,v.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")},v.LessDepth=2,v.LessEqualDepth=3,v.LessEqualStencilFunc=515,v.LessStencilFunc=513,v.Light=at,v.LightProbe=_n,v.Line=yn,v.Line3=Ou,v.LineBasicMaterial=ut,v.LineCurve=rn,v.LineCurve3=Pn,v.LineDashedMaterial=lr,v.LineLoop=Ro,v.LinePieces=1,v.LineSegments=Qt,v.LineStrip=0,v.LinearEncoding=Hn,v.LinearFilter=X,v.LinearInterpolant=Ha,v.LinearMipMapLinearFilter=1008,v.LinearMipMapNearestFilter=1007,v.LinearMipmapLinearFilter=ue,v.LinearMipmapNearestFilter=fe,v.LinearToneMapping=1,v.Loader=$e,v.LoaderUtils=Tc,v.LoadingManager=fc,v.LogLuvEncoding=3003,v.LoopOnce=2200,v.LoopPingPong=2202,v.LoopRepeat=2201,v.LuminanceAlphaFormat=1025,v.LuminanceFormat=1024,v.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},v.Material=Ee,v.MaterialLoader=ns,v.Math=be,v.MathUtils=be,v.Matrix3=ae,v.Matrix4=Ne,v.MaxEquation=104,v.Mesh=st,v.MeshBasicMaterial=vn,v.MeshDepthMaterial=Ri,v.MeshDistanceMaterial=Ci,v.MeshFaceMaterial=function(e){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),e},v.MeshLambertMaterial=sr,v.MeshMatcapMaterial=cr,v.MeshNormalMaterial=or,v.MeshPhongMaterial=Bi,v.MeshPhysicalMaterial=Ii,v.MeshStandardMaterial=Xn,v.MeshToonMaterial=ar,v.MinEquation=103,v.MirroredRepeatWrapping=Fe,v.MixOperation=1,v.MultiMaterial=function(e){return e===void 0&&(e=[]),console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),e.isMultiMaterial=!0,e.materials=e,e.clone=function(){return e.slice()},e},v.MultiplyBlending=4,v.MultiplyOperation=0,v.NearestFilter=dt,v.NearestMipMapLinearFilter=1005,v.NearestMipMapNearestFilter=1004,v.NearestMipmapLinearFilter=$,v.NearestMipmapNearestFilter=Hi,v.NeverDepth=0,v.NeverStencilFunc=512,v.NoBlending=0,v.NoColors=0,v.NoToneMapping=0,v.NormalAnimationBlendMode=wr,v.NormalBlending=1,v.NotEqualDepth=7,v.NotEqualStencilFunc=517,v.NumberKeyframeTrack=$r,v.Object3D=ye,v.ObjectLoader=Zd,v.ObjectSpaceNormalMap=1,v.OctahedronBufferGeometry=Go,v.OctahedronGeometry=iu,v.OneFactor=201,v.OneMinusDstAlphaFactor=207,v.OneMinusDstColorFactor=209,v.OneMinusSrcAlphaFactor=205,v.OneMinusSrcColorFactor=203,v.OrthographicCamera=ia,v.PCFShadowMap=1,v.PCFSoftShadowMap=2,v.PMREMGenerator=Sp,v.ParametricBufferGeometry=Kr,v.ParametricGeometry=Fa,v.Particle=function(e){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Ca(e)},v.ParticleBasicMaterial=function(e){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Ln(e)},v.ParticleSystem=function(e,i){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new Yr(e,i)},v.ParticleSystemMaterial=function(e){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Ln(e)},v.Path=Dn,v.PerspectiveCamera=Et,v.Plane=kn,v.PlaneBufferGeometry=mo,v.PlaneGeometry=ru,v.PlaneHelper=wp,v.PointCloud=function(e,i){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new Yr(e,i)},v.PointCloudMaterial=function(e){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Ln(e)},v.PointLight=Ko,v.PointLightHelper=mp,v.Points=Yr,v.PointsMaterial=Ln,v.PolarGridHelper=yp,v.PolyhedronBufferGeometry=ir,v.PolyhedronGeometry=au,v.PositionalAudio=tp,v.PropertyBinding=jt,v.PropertyMixer=Dc,v.QuadraticBezierCurve=On,v.QuadraticBezierCurve3=Zn,v.Quaternion=Ze,v.QuaternionKeyframeTrack=ka,v.QuaternionLinearInterpolant=Wo,v.REVISION="121",v.RGBADepthPacking=3201,v.RGBAFormat=St,v.RGBAIntegerFormat=1033,v.RGBA_ASTC_10x10_Format=37819,v.RGBA_ASTC_10x5_Format=37816,v.RGBA_ASTC_10x6_Format=37817,v.RGBA_ASTC_10x8_Format=37818,v.RGBA_ASTC_12x10_Format=37820,v.RGBA_ASTC_12x12_Format=37821,v.RGBA_ASTC_4x4_Format=37808,v.RGBA_ASTC_5x4_Format=37809,v.RGBA_ASTC_5x5_Format=37810,v.RGBA_ASTC_6x5_Format=37811,v.RGBA_ASTC_6x6_Format=37812,v.RGBA_ASTC_8x5_Format=37813,v.RGBA_ASTC_8x6_Format=37814,v.RGBA_ASTC_8x8_Format=37815,v.RGBA_BPTC_Format=36492,v.RGBA_ETC2_EAC_Format=_r,v.RGBA_PVRTC_2BPPV1_Format=ki,v.RGBA_PVRTC_4BPPV1_Format=Un,v.RGBA_S3TC_DXT1_Format=mn,v.RGBA_S3TC_DXT3_Format=vi,v.RGBA_S3TC_DXT5_Format=gi,v.RGBDEncoding=ca,v.RGBEEncoding=Sr,v.RGBEFormat=1023,v.RGBFormat=bt,v.RGBIntegerFormat=1032,v.RGBM16Encoding=Xi,v.RGBM7Encoding=qi,v.RGB_ETC1_Format=36196,v.RGB_ETC2_Format=br,v.RGB_PVRTC_2BPPV1_Format=cn,v.RGB_PVRTC_4BPPV1_Format=yi,v.RGB_S3TC_DXT1_Format=sn,v.RGFormat=1030,v.RGIntegerFormat=1031,v.RawShaderMaterial=ui,v.Ray=Lr,v.Raycaster=Uc,v.RectAreaLight=ts,v.RedFormat=1028,v.RedIntegerFormat=1029,v.ReinhardToneMapping=2,v.RepeatWrapping=Gn,v.ReplaceStencilOp=7681,v.ReverseSubtractEquation=102,v.RingBufferGeometry=ac,v.RingGeometry=ou,v.SRGB8_ALPHA8_ASTC_10x10_Format=37851,v.SRGB8_ALPHA8_ASTC_10x5_Format=37848,v.SRGB8_ALPHA8_ASTC_10x6_Format=37849,v.SRGB8_ALPHA8_ASTC_10x8_Format=37850,v.SRGB8_ALPHA8_ASTC_12x10_Format=37852,v.SRGB8_ALPHA8_ASTC_12x12_Format=37853,v.SRGB8_ALPHA8_ASTC_4x4_Format=37840,v.SRGB8_ALPHA8_ASTC_5x4_Format=37841,v.SRGB8_ALPHA8_ASTC_5x5_Format=37842,v.SRGB8_ALPHA8_ASTC_6x5_Format=37843,v.SRGB8_ALPHA8_ASTC_6x6_Format=37844,v.SRGB8_ALPHA8_ASTC_8x5_Format=37845,v.SRGB8_ALPHA8_ASTC_8x6_Format=37846,v.SRGB8_ALPHA8_ASTC_8x8_Format=37847,v.Scene=zs,v.SceneUtils=Lp,v.ShaderChunk=De,v.ShaderLib=An,v.ShaderMaterial=Jt,v.ShadowMaterial=rr,v.Shape=zi,v.ShapeBufferGeometry=oc,v.ShapeGeometry=sc,v.ShapePath=Ac,v.ShapeUtils=li,v.ShortType=1011,v.Skeleton=wo,v.SkeletonHelper=Du,v.SkinnedMesh=_o,v.SmoothShading=2,v.Sphere=ri,v.SphereBufferGeometry=Uo,v.SphereGeometry=su,v.Spherical=dp,v.SphericalHarmonics3=mu,v.Spline=qc,v.SplineCurve=Nn,v.SplineCurve3=$u,v.SpotLight=Qo,v.SpotLightHelper=fp,v.Sprite=Ca,v.SpriteMaterial=Ni,v.SrcAlphaFactor=204,v.SrcAlphaSaturateFactor=210,v.SrcColorFactor=202,v.StaticCopyUsage=35046,v.StaticDrawUsage=nn,v.StaticReadUsage=35045,v.StereoCamera=bu,v.StreamCopyUsage=35042,v.StreamDrawUsage=35040,v.StreamReadUsage=35041,v.StringKeyframeTrack=jo,v.SubtractEquation=101,v.SubtractiveBlending=3,v.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},v.TangentSpaceNormalMap=0,v.TetrahedronBufferGeometry=cc,v.TetrahedronGeometry=cu,v.TextBufferGeometry=lc,v.TextGeometry=lu,v.Texture=Te,v.TextureLoader=Yo,v.TorusBufferGeometry=uc,v.TorusGeometry=uu,v.TorusKnotBufferGeometry=hc,v.TorusKnotGeometry=hu,v.Triangle=Tn,v.TriangleFanDrawMode=2,v.TriangleStripDrawMode=1,v.TrianglesDrawMode=0,v.TubeBufferGeometry=dc,v.TubeGeometry=du,v.UVMapping=Bn,v.Uint16Attribute=function(e,i){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new Ki(e,i)},v.Uint16BufferAttribute=Ki,v.Uint32Attribute=function(e,i){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new $i(e,i)},v.Uint32BufferAttribute=$i,v.Uint8Attribute=function(e,i){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new fa(e,i)},v.Uint8BufferAttribute=fa,v.Uint8ClampedAttribute=function(e,i){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new ma(e,i)},v.Uint8ClampedBufferAttribute=ma,v.Uniform=Au,v.UniformsLib=le,v.UniformsUtils=al,v.UnsignedByteType=ze,v.UnsignedInt248Type=It,v.UnsignedIntType=pt,v.UnsignedShort4444Type=1017,v.UnsignedShort5551Type=1018,v.UnsignedShort565Type=1019,v.UnsignedShortType=ot,v.VSMShadowMap=3,v.Vector2=I,v.Vector3=M,v.Vector4=de,v.VectorKeyframeTrack=ea,v.Vertex=function(e,i,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new M(e,i,t)},v.VertexColors=2,v.VideoTexture=qs,v.WebGL1Renderer=Bs,v.WebGLCubeRenderTarget=Ai,v.WebGLMultisampleRenderTarget=Ke,v.WebGLRenderTarget=He,v.WebGLRenderTargetCube=function(e,i,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new Ai(e,t)},v.WebGLRenderer=Ea,v.WebGLUtils=Rl,v.WireframeGeometry=pc,v.WireframeHelper=function(e,i){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new Qt(new pc(e.geometry),new ut({color:i!==void 0?i:16777215}))},v.WrapAroundEnding=ji,v.XHRLoader=function(e){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new bn(e)},v.ZeroCurvatureEnding=Fn,v.ZeroFactor=200,v.ZeroSlopeEnding=ni,v.ZeroStencilOp=0,v.sRGBEncoding=Mr,Object.defineProperty(v,"__esModule",{value:!0})}),function(v,nt){typeof exports=="object"&&typeof module=="object"?module.exports=nt():typeof define=="function"&&define.amd?define([],nt):typeof exports=="object"?exports._vantaEffect=nt():v._vantaEffect=nt()}(typeof self<"u"?self:this,()=>(()=>{"use strict";var v={d:($,X)=>{for(var fe in X)v.o(X,fe)&&!v.o($,fe)&&Object.defineProperty($,fe,{enumerable:!0,get:X[fe]})},o:($,X)=>Object.prototype.hasOwnProperty.call($,X),r:$=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty($,Symbol.toStringTag,{value:"Module"}),Object.defineProperty($,"__esModule",{value:!0})}},nt={};function Bn(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}function Yt($,X){return $==null&&($=0),X==null&&(X=1),Math.floor($+Math.random()*(X-$+1))}v.r(nt),v.d(nt,{default:()=>Hi}),Number.prototype.clamp=function($,X){return Math.min(Math.max(this,$),X)};const zn=$=>.299*$.r+.587*$.g+.114*$.b;function ti($){for(;$.children&&$.children.length>0;)ti($.children[0]),$.remove($.children[0]);$.geometry&&$.geometry.dispose(),$.material&&(Object.keys($.material).forEach(X=>{$.material[X]&&$.material[X]!==null&&typeof $.material[X].dispose=="function"&&$.material[X].dispose()}),$.material.dispose())}const wn=typeof window=="object";let an=wn&&window.THREE||{};wn&&!window.VANTA&&(window.VANTA={});const Ut=wn&&window.VANTA||{};Ut.register=($,X)=>Ut[$]=fe=>new X(fe),Ut.version="0.5.24";const Gn=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};Ut.VantaBase=class{constructor($={}){if(!wn)return!1;Ut.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const X=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},X),($ instanceof HTMLElement||typeof $=="string")&&($={el:$}),Object.assign(this.options,$),this.options.THREE&&(an=this.options.THREE),this.el=this.options.el,this.el==null)Gn('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const ot=this.el;if(this.el=(fe=ot,document.querySelector(fe)),!this.el)return void Gn("Cannot find element",ot)}var fe,ue;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(ot){return Gn("Init error",ot),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(ue=this.options.backgroundColor,typeof ue=="number"?"#"+("00000"+ue.toString(16)).slice(-6):ue)))}this.initMouse(),this.resize(),this.animationLoop();const ze=window.addEventListener;ze("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(ze("scroll",this.windowMouseMoveWrapper),ze("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(ze("touchstart",this.windowTouchWrapper),ze("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&ze("deviceorientation",this.windowGyroWrapper)}setOptions($={}){Object.assign(this.options,$),this.triggerMouseMove()}prepareEl(){let $,X;if(typeof Node<"u"&&Node.TEXT_NODE)for($=0;$<this.el.childNodes.length;$++){const fe=this.el.childNodes[$];if(fe.nodeType===Node.TEXT_NODE){const ue=document.createElement("span");ue.textContent=fe.textContent,fe.parentElement.insertBefore(ue,fe),fe.remove()}}for($=0;$<this.el.children.length;$++)X=this.el.children[$],getComputedStyle(X).position==="static"&&(X.style.position="relative"),getComputedStyle(X).zIndex==="auto"&&(X.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles($,X={}){Object.assign($.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign($.style,X),$.classList.add("vanta-canvas")}initThree(){an.WebGLRenderer?(this.renderer=new an.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new an.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const $=this.getCanvasElement();return!!$&&$.getBoundingClientRect()}windowMouseMoveWrapper($){const X=this.getCanvasRect();if(!X)return!1;const fe=$.clientX-X.left,ue=$.clientY-X.top;fe>=0&&ue>=0&&fe<=X.width&&ue<=X.height&&(this.mouseX=fe,this.mouseY=ue,this.options.mouseEase||this.triggerMouseMove(fe,ue))}windowTouchWrapper($){const X=this.getCanvasRect();if(!X)return!1;if($.touches.length===1){const fe=$.touches[0].clientX-X.left,ue=$.touches[0].clientY-X.top;fe>=0&&ue>=0&&fe<=X.width&&ue<=X.height&&(this.mouseX=fe,this.mouseY=ue,this.options.mouseEase||this.triggerMouseMove(fe,ue))}}windowGyroWrapper($){const X=this.getCanvasRect();if(!X)return!1;const fe=Math.round(2*$.alpha)-X.left,ue=Math.round(2*$.beta)-X.top;fe>=0&&ue>=0&&fe<=X.width&&ue<=X.height&&(this.mouseX=fe,this.mouseY=ue,this.options.mouseEase||this.triggerMouseMove(fe,ue))}triggerMouseMove($,X){$===void 0&&X===void 0&&(this.options.mouseEase?($=this.mouseEaseX,X=this.mouseEaseY):($=this.mouseX,X=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=$/this.scale,this.uniforms.iMouse.value.y=X/this.scale);const fe=$/this.width,ue=X/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(fe,ue)}setSize(){this.scale||(this.scale=1),Bn()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const $=this.el.offsetHeight,X=this.el.getBoundingClientRect(),fe=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,ue=X.top+fe;return ue-window.innerHeight<=fe&&fe<=ue+$}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const $=performance.now();if(this.prevNow){let X=($-this.prevNow)/16.666666666666668;X=Math.max(.2,Math.min(X,5)),this.t+=X,this.t2+=(this.options.speed||1)*X,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=$,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const $=window.removeEventListener;$("touchstart",this.windowTouchWrapper),$("touchmove",this.windowTouchWrapper),$("scroll",this.windowMouseMoveWrapper),$("mousemove",this.windowMouseMoveWrapper),$("deviceorientation",this.windowGyroWrapper),$("resize",this.resize),window.cancelAnimationFrame(this.req);const X=this.scene;X&&X.children&&ti(X),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),Ut.current===this&&(Ut.current=null)}};const Dt=Ut.VantaBase;let Fe=typeof window=="object"&&window.THREE;class dt extends Dt{static initClass(){this.prototype.defaultOptions={color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}constructor(X){Fe=X.THREE||Fe,super(X)}genPoint(X,fe,ue){let ze;if(this.points||(this.points=[]),this.options.showDots){const Rt=new Fe.SphereGeometry(.25,12,12),on=new Fe.MeshLambertMaterial({color:this.options.color});ze=new Fe.Mesh(Rt,on)}else ze=new Fe.Object3D;var ot,pt;return this.cont.add(ze),ze.ox=X,ze.oy=fe,ze.oz=ue,ze.position.set(X,fe,ue),ze.r=((ot=-2)==null&&(ot=0),(pt=2)==null&&(pt=1),ot+Math.random()*(pt-ot)),this.points.push(ze)}onInit(){this.cont=new Fe.Group,this.cont.position.set(0,0,0),this.scene.add(this.cont);let X=this.options.points,{spacing:fe}=this.options;Bn()&&(X=~~(.75*X),fe=~~(.65*fe));const ue=X*X*2;this.linePositions=new Float32Array(ue*ue*3),this.lineColors=new Float32Array(ue*ue*3);const ze=zn(new Fe.Color(this.options.color)),ot=zn(new Fe.Color(this.options.backgroundColor));this.blending=ze>ot?"additive":"subtractive";const pt=new Fe.BufferGeometry;pt.setAttribute("position",new Fe.BufferAttribute(this.linePositions,3).setUsage(Fe.DynamicDrawUsage)),pt.setAttribute("color",new Fe.BufferAttribute(this.lineColors,3).setUsage(Fe.DynamicDrawUsage)),pt.computeBoundingSphere(),pt.setDrawRange(0,0);const Rt=new Fe.LineBasicMaterial({vertexColors:Fe.VertexColors,blending:this.blending==="additive"?Fe.AdditiveBlending:null,transparent:!0});this.linesMesh=new Fe.LineSegments(pt,Rt),this.cont.add(this.linesMesh);for(let It=0;It<=X;It++)for(let bt=0;bt<=X;bt++){const St=Yt(-3,3),Ve=(It-X/2)*fe+Yt(-5,5);let tn=(bt-X/2)*fe+Yt(-5,5);It%2&&(tn+=.5*fe),this.genPoint(Ve,St-Yt(5,15),tn),this.genPoint(Ve+Yt(-5,5),St+Yt(5,15),tn+Yt(-5,5))}this.camera=new Fe.PerspectiveCamera(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.scene.add(this.camera);const on=new Fe.AmbientLight(16777215,.75);return this.scene.add(on),this.spot=new Fe.SpotLight(16777215,1),this.spot.position.set(0,200,0),this.spot.distance=400,this.spot.target=this.cont,this.scene.add(this.spot)}onDestroy(){this.scene&&this.scene.remove(this.linesMesh),this.spot=this.points=this.linesMesh=this.lineColors=this.linePositions=null}setOptions(X){super.setOptions(X),X.color&&this.points.forEach(fe=>{fe.material.color=new Fe.Color(X.color)})}onUpdate(){let X;const fe=this.camera;Math.abs(fe.tx-fe.position.x)>.01&&(X=fe.tx-fe.position.x,fe.position.x+=.02*X),Math.abs(fe.ty-fe.position.y)>.01&&(X=fe.ty-fe.position.y,fe.position.y+=.02*X),fe.lookAt(new Fe.Vector3(0,0,0));let ue=0,ze=0,ot=0;const pt=new Fe.Color(this.options.backgroundColor),Rt=new Fe.Color(this.options.color),on=Rt.clone().sub(pt);this.rayCaster&&this.rayCaster.setFromCamera(new Fe.Vector2(this.rcMouseX,this.rcMouseY),this.camera);for(let It=0;It<this.points.length;It++){let bt,St;const Ve=this.points[It];St=this.rayCaster?this.rayCaster.ray.distanceToPoint(Ve.position):1e3;const tn=St.clamp(5,15);if(Ve.scale.x=Ve.scale.y=Ve.scale.z=(.25*(15-tn)).clamp(1,100),Ve.r!==0){let sn=Math.atan2(Ve.position.z,Ve.position.x);bt=Math.sqrt(Ve.position.z*Ve.position.z+Ve.position.x*Ve.position.x),sn+=25e-5*Ve.r,Ve.position.x=bt*Math.cos(sn),Ve.position.z=bt*Math.sin(sn)}for(let sn=It;sn<this.points.length;sn++){const mn=this.points[sn],vi=Ve.position.x-mn.position.x,gi=Ve.position.y-mn.position.y,yi=Ve.position.z-mn.position.z;if(bt=Math.sqrt(vi*vi+gi*gi+yi*yi),bt<this.options.maxDistance){let cn;const Un=(2*(1-bt/this.options.maxDistance)).clamp(0,1);cn=this.blending==="additive"?new Fe.Color(0).lerp(on,Un):pt.clone().lerp(Rt,Un),this.linePositions[ue++]=Ve.position.x,this.linePositions[ue++]=Ve.position.y,this.linePositions[ue++]=Ve.position.z,this.linePositions[ue++]=mn.position.x,this.linePositions[ue++]=mn.position.y,this.linePositions[ue++]=mn.position.z,this.lineColors[ze++]=cn.r,this.lineColors[ze++]=cn.g,this.lineColors[ze++]=cn.b,this.lineColors[ze++]=cn.r,this.lineColors[ze++]=cn.g,this.lineColors[ze++]=cn.b,ot++}}}return this.linesMesh.geometry.setDrawRange(0,2*ot),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0,.001*this.t}onMouseMove(X,fe){const ue=this.camera;ue.oy||(ue.oy=ue.position.y,ue.ox=ue.position.x,ue.oz=ue.position.z);const ze=Math.atan2(ue.oz,ue.ox),ot=Math.sqrt(ue.oz*ue.oz+ue.ox*ue.ox),pt=ze+2*(X-.5)*(this.options.mouseCoeffX||1);ue.tz=ot*Math.sin(pt),ue.tx=ot*Math.cos(pt),ue.ty=ue.oy+50*(fe-.5)*(this.options.mouseCoeffY||1),this.rayCaster,this.rcMouseX=2*X-1,this.rcMouseY=2*-X+1}onRestart(){this.scene&&this.scene.remove(this.linesMesh),this.points=[]}}dt.initClass();const Hi=Ut.register("NET",dt);return nt})()),function(v,nt){typeof exports=="object"&&typeof module<"u"?module.exports=nt():typeof define=="function"&&define.amd?define(nt):v.AOS=nt()}(this,function(){"use strict";var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nt="Expected a function",Bn=NaN,Yt="[object Symbol]",zn=/^\s+|\s+$/g,ti=/^[-+]0x[0-9a-f]+$/i,wn=/^0b[01]+$/i,an=/^0o[0-7]+$/i,Ut=parseInt,Gn=typeof v=="object"&&v&&v.Object===Object&&v,Dt=typeof self=="object"&&self&&self.Object===Object&&self,Fe=Gn||Dt||Function("return this")(),dt=Object.prototype.toString,Hi=Math.max,$=Math.min,X=function(){return Fe.Date.now()};function fe(q,ne,I){var ae,Le,mt,Te,de,He,Ke=0,Ze=!1,M=!1,_t=!0;if(typeof q!="function")throw new TypeError(nt);function Bt(Pe){var it=ae,gt=Le;return ae=Le=void 0,Ke=Pe,Te=q.apply(gt,it)}function Pt(Pe){var it=Pe-He;return He===void 0||it>=ne||it<0||M&&Pe-Ke>=mt}function Zt(){var Pe=X();if(Pt(Pe))return Ft(Pe);de=setTimeout(Zt,function(it){var gt=ne-(it-He);return M?$(gt,mt-(it-Ke)):gt}(Pe))}function Ft(Pe){return de=void 0,_t&&ae?Bt(Pe):(ae=Le=void 0,Te)}function vt(){var Pe=X(),it=Pt(Pe);if(ae=arguments,Le=this,He=Pe,it){if(de===void 0)return function(gt){return Ke=gt,de=setTimeout(Zt,ne),Ze?Bt(gt):Te}(He);if(M)return de=setTimeout(Zt,ne),Bt(He)}return de===void 0&&(de=setTimeout(Zt,ne)),Te}return ne=ze(ne)||0,ue(I)&&(Ze=!!I.leading,mt=(M="maxWait"in I)?Hi(ze(I.maxWait)||0,ne):mt,_t="trailing"in I?!!I.trailing:_t),vt.cancel=function(){de!==void 0&&clearTimeout(de),Ke=0,ae=He=Le=de=void 0},vt.flush=function(){return de===void 0?Te:Ft(X())},vt}function ue(q){var ne=typeof q;return!!q&&(ne=="object"||ne=="function")}function ze(q){if(typeof q=="number")return q;if(function(ae){return typeof ae=="symbol"||function(Le){return!!Le&&typeof Le=="object"}(ae)&&dt.call(ae)==Yt}(q))return Bn;if(ue(q)){var ne=typeof q.valueOf=="function"?q.valueOf():q;q=ue(ne)?ne+"":ne}if(typeof q!="string")return q===0?q:+q;q=q.replace(zn,"");var I=wn.test(q);return I||an.test(q)?Ut(q.slice(2),I?2:8):ti.test(q)?Bn:+q}var ot=function(q,ne,I){var ae=!0,Le=!0;if(typeof q!="function")throw new TypeError(nt);return ue(I)&&(ae="leading"in I?!!I.leading:ae,Le="trailing"in I?!!I.trailing:Le),fe(q,ne,{leading:ae,maxWait:ne,trailing:Le})},pt="Expected a function",Rt=NaN,on="[object Symbol]",It=/^\s+|\s+$/g,bt=/^[-+]0x[0-9a-f]+$/i,St=/^0b[01]+$/i,Ve=/^0o[0-7]+$/i,tn=parseInt,sn=typeof v=="object"&&v&&v.Object===Object&&v,mn=typeof self=="object"&&self&&self.Object===Object&&self,vi=sn||mn||Function("return this")(),gi=Object.prototype.toString,yi=Math.max,cn=Math.min,Un=function(){return vi.Date.now()};function ki(q){var ne=typeof q;return!!q&&(ne=="object"||ne=="function")}function br(q){if(typeof q=="number")return q;if(function(ae){return typeof ae=="symbol"||function(Le){return!!Le&&typeof Le=="object"}(ae)&&gi.call(ae)==on}(q))return Rt;if(ki(q)){var ne=typeof q.valueOf=="function"?q.valueOf():q;q=ki(ne)?ne+"":ne}if(typeof q!="string")return q===0?q:+q;q=q.replace(It,"");var I=St.test(q);return I||Ve.test(q)?tn(q.slice(2),I?2:8):bt.test(q)?Rt:+q}var _r=function(q,ne,I){var ae,Le,mt,Te,de,He,Ke=0,Ze=!1,M=!1,_t=!0;if(typeof q!="function")throw new TypeError(pt);function Bt(Pe){var it=ae,gt=Le;return ae=Le=void 0,Ke=Pe,Te=q.apply(gt,it)}function Pt(Pe){var it=Pe-He;return He===void 0||it>=ne||it<0||M&&Pe-Ke>=mt}function Zt(){var Pe=Un();if(Pt(Pe))return Ft(Pe);de=setTimeout(Zt,function(it){var gt=ne-(it-He);return M?cn(gt,mt-(it-Ke)):gt}(Pe))}function Ft(Pe){return de=void 0,_t&&ae?Bt(Pe):(ae=Le=void 0,Te)}function vt(){var Pe=Un(),it=Pt(Pe);if(ae=arguments,Le=this,He=Pe,it){if(de===void 0)return function(gt){return Ke=gt,de=setTimeout(Zt,ne),Ze?Bt(gt):Te}(He);if(M)return de=setTimeout(Zt,ne),Bt(He)}return de===void 0&&(de=setTimeout(Zt,ne)),Te}return ne=br(ne)||0,ki(I)&&(Ze=!!I.leading,mt=(M="maxWait"in I)?yi(br(I.maxWait)||0,ne):mt,_t="trailing"in I?!!I.trailing:_t),vt.cancel=function(){de!==void 0&&clearTimeout(de),Ke=0,ae=He=Le=de=void 0},vt.flush=function(){return de===void 0?Te:Ft(Un())},vt},xi=function(){};function Vi(q){q&&q.forEach(function(ne){var I=Array.prototype.slice.call(ne.addedNodes),ae=Array.prototype.slice.call(ne.removedNodes);if(function Le(mt){var Te=void 0,de=void 0;for(Te=0;Te<mt.length;Te+=1)if((de=mt[Te]).dataset&&de.dataset.aos||de.children&&Le(de.children))return!0;return!1}(I.concat(ae)))return xi()})}function Wi(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var Fn={isSupported:function(){return!!Wi()},ready:function(q,ne){var I=window.document,ae=new(Wi())(Vi);xi=ne,ae.observe(I.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},ni=function(q,ne){if(!(q instanceof ne))throw new TypeError("Cannot call a class as a function")},ji=function(){function q(ne,I){for(var ae=0;ae<I.length;ae++){var Le=I[ae];Le.enumerable=Le.enumerable||!1,Le.configurable=!0,"value"in Le&&(Le.writable=!0),Object.defineProperty(ne,Le.key,Le)}}return function(ne,I,ae){return I&&q(ne.prototype,I),ae&&q(ne,ae),ne}}(),wr=Object.assign||function(q){for(var ne=1;ne<arguments.length;ne++){var I=arguments[ne];for(var ae in I)Object.prototype.hasOwnProperty.call(I,ae)&&(q[ae]=I[ae])}return q},oa=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Hn=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,Mr=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,sa=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function Sr(){return navigator.userAgent||navigator.vendor||window.opera||""}var qi=new(function(){function q(){ni(this,q)}return ji(q,[{key:"phone",value:function(){var ne=Sr();return!(!oa.test(ne)&&!Hn.test(ne.substr(0,4)))}},{key:"mobile",value:function(){var ne=Sr();return!(!Mr.test(ne)&&!sa.test(ne.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),q}()),Xi=function(q,ne){var I=void 0;return qi.ie11()?(I=document.createEvent("CustomEvent")).initCustomEvent(q,!0,!0,{detail:ne}):I=new CustomEvent(q,{detail:ne}),document.dispatchEvent(I)},ca=function(q){return q.forEach(function(ne,I){return function(ae,Le){var mt=ae.options,Te=ae.position,de=ae.node,He=(ae.data,function(){ae.animated&&(function(Ke,Ze){Ze&&Ze.forEach(function(M){return Ke.classList.remove(M)})}(de,mt.animatedClassNames),Xi("aos:out",de),ae.options.id&&Xi("aos:in:"+ae.options.id,de),ae.animated=!1)});mt.mirror&&Le>=Te.out&&!mt.once?He():Le>=Te.in?ae.animated||(function(Ke,Ze){Ze&&Ze.forEach(function(M){return Ke.classList.add(M)})}(de,mt.animatedClassNames),Xi("aos:in",de),ae.options.id&&Xi("aos:in:"+ae.options.id,de),ae.animated=!0):ae.animated&&!mt.once&&He()}(ne,window.pageYOffset)})},Yi=function(q){for(var ne=0,I=0;q&&!isNaN(q.offsetLeft)&&!isNaN(q.offsetTop);)ne+=q.offsetLeft-(q.tagName!="BODY"?q.scrollLeft:0),I+=q.offsetTop-(q.tagName!="BODY"?q.scrollTop:0),q=q.offsetParent;return{top:I,left:ne}},nn=function(q,ne,I){var ae=q.getAttribute("data-aos-"+ne);if(ae!==void 0){if(ae==="true")return!0;if(ae==="false")return!1}return ae||I},ii=function(q,ne){return q.forEach(function(I,ae){var Le=nn(I.node,"mirror",ne.mirror),mt=nn(I.node,"once",ne.once),Te=nn(I.node,"id"),de=ne.useClassNames&&I.node.getAttribute("data-aos"),He=[ne.animatedClassName].concat(de?de.split(" "):[]).filter(function(Ke){return typeof Ke=="string"});ne.initClassName&&I.node.classList.add(ne.initClassName),I.position={in:function(Ke,Ze,M){var _t=window.innerHeight,Bt=nn(Ke,"anchor"),Pt=nn(Ke,"anchor-placement"),Zt=Number(nn(Ke,"offset",Pt?0:Ze)),Ft=Pt||M,vt=Ke;Bt&&document.querySelectorAll(Bt)&&(vt=document.querySelectorAll(Bt)[0]);var Pe=Yi(vt).top-_t;switch(Ft){case"top-bottom":break;case"center-bottom":Pe+=vt.offsetHeight/2;break;case"bottom-bottom":Pe+=vt.offsetHeight;break;case"top-center":Pe+=_t/2;break;case"center-center":Pe+=_t/2+vt.offsetHeight/2;break;case"bottom-center":Pe+=_t/2+vt.offsetHeight;break;case"top-top":Pe+=_t;break;case"bottom-top":Pe+=_t+vt.offsetHeight;break;case"center-top":Pe+=_t+vt.offsetHeight/2}return Pe+Zt}(I.node,ne.offset,ne.anchorPlacement),out:Le&&function(Ke,Ze){window.innerHeight;var M=nn(Ke,"anchor"),_t=nn(Ke,"offset",Ze),Bt=Ke;return M&&document.querySelectorAll(M)&&(Bt=document.querySelectorAll(M)[0]),Yi(Bt).top+Bt.offsetHeight-_t}(I.node,ne.offset)},I.options={once:mt,mirror:Le,animatedClassNames:He,id:Te}}),q},Tr=function(){var q=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(q,function(ne){return{node:ne}})},Ct=[],Tt=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},Er=function(){return document.all&&!window.atob},be=function(){arguments.length>0&&arguments[0]!==void 0&&arguments[0]&&(Tt=!0),Tt&&(Ct=ii(Ct,et),ca(Ct),window.addEventListener("scroll",ot(function(){ca(Ct,et.once)},et.throttleDelay)))},la=function(){if(Ct=Tr(),ge(et.disable)||Er())return Zi();be()},Zi=function(){Ct.forEach(function(q,ne){q.node.removeAttribute("data-aos"),q.node.removeAttribute("data-aos-easing"),q.node.removeAttribute("data-aos-duration"),q.node.removeAttribute("data-aos-delay"),et.initClassName&&q.node.classList.remove(et.initClassName),et.animatedClassName&&q.node.classList.remove(et.animatedClassName)})},ge=function(q){return q===!0||q==="mobile"&&qi.mobile()||q==="phone"&&qi.phone()||q==="tablet"&&qi.tablet()||typeof q=="function"&&q()===!0};return{init:function(q){return et=wr(et,q),Ct=Tr(),et.disableMutationObserver||Fn.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),et.disableMutationObserver=!0),et.disableMutationObserver||Fn.ready("[data-aos]",la),ge(et.disable)||Er()?Zi():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),["DOMContentLoaded","load"].indexOf(et.startEvent)===-1?document.addEventListener(et.startEvent,function(){be(!0)}):window.addEventListener("load",function(){be(!0)}),et.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&be(!0),window.addEventListener("resize",_r(be,et.debounceDelay,!0)),window.addEventListener("orientationchange",_r(be,et.debounceDelay,!0)),Ct)},refresh:be,refreshHard:la}});
