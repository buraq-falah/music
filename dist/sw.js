if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const t=e=>i(e,a),l={module:{uri:a},exports:o,require:t};s[a]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About.0689fcb5.js",revision:null},{url:"assets/Home.a7e6f7fc.js",revision:null},{url:"assets/img/header.png",revision:"64d8c7bce9e47d0946e4a51c7b3e2e80"},{url:"assets/img/introduction-music.png",revision:"48025182349af4abfe3e272a7e128c4c"},{url:"assets/img/introduction-users.png",revision:"90840bfca190b45f7cd04ed9d8c2cd54"},{url:"assets/img/profile-pic.jpg",revision:"eba639c1b0a9287dd3a1904b9ae9831f"},{url:"assets/img/pwa-192x192.png",revision:"25b38533f534eb0f7ea0771021d541a8"},{url:"assets/img/song-header.png",revision:"d899ba7d2cac3f11c4377a700d68d22e"},{url:"assets/img/user-header.png",revision:"e7b9aeb02c86a922404d13073d21836a"},{url:"assets/index.7f3c3e15.css",revision:null},{url:"assets/index.e94a7b8b.js",revision:null},{url:"assets/Manage.376f0ee6.js",revision:null},{url:"assets/Song.8f687c04.js",revision:null},{url:"assets/workbox-window.prod.es5.fb541039.js",revision:null},{url:"index.html",revision:"7cc53489c8f42f12fa8872620ada3ac0"},{url:"assets/img/pwa-192x192.png",revision:"25b38533f534eb0f7ea0771021d541a8"},{url:"manifest.webmanifest",revision:"74a38e0acb9ea59a29a482eaf566f8b2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
