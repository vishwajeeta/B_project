# Progressive Web App

 we use PWA to run website on Native devices 

## Installing

>npm install next-pwa

 if its not importing

>npm i --save-dev @types/next-pwa

### next.config.js

```javascript
import nextPWA from 'next-pwa';
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true,
    compiler:{
        removeConsole:process.env.NODE_ENV !== "development",
    }
};


const withPWA = nextPWA({
    dest:"public",
    disable:process.env.NODE_ENV === "development",
    register:true,
    skipWaiting:true,
});

export default withPWA(nextConfig);
```

### app/layout.js

```javascript

// PWD setting
export const metadata = {
  title: "My Portfolio App",
  description: "vishwajeet Portfolio",
  generator:"Next.js",
  manifest:"/manifest.json",
  keywords:["next.js","nextjs13","next13","pwa","next-pwa"],
  themeColor:[{media:"(prefers-color-scheme:light",color:"#fff"}],
  authors:[
    {name:"vishwajeet"},
    {
      name:"vishwajeet",
      url:"https://b-project-nine.vercel.app/",
    },
  ],
  viewport:
  "minimum-scale=1, initial-scale=1, width=device-width,shrink-to-fit=no,viewport-fit=cover",
  icons:[
    {rel:"apple-touch-icon", url:"ios/128.png"},
    {rel: "icon",url:"ios/128.png"},
  ],
};
```

### public/manifest.json

```json
{
    "name":"Vishwajeet portfolio",
    "short_name":"vishwa",
    "theme_color":"#ffffff",
    "background_color":"#ffffff",
    "display":"standalone",
    "orientation":"portrait",
    "scope":"/",
    "start_url":"/",
    "icons": [
    {
        "src": "pwa_icons/icon-48x48.png",
        "sizes": "48x48",
        "type":"image/png",
        "purpose":"maskable any"
      },
      {
        "src": "pwa_icons/icon-72x72.png",
        "sizes": "72x72",
        "type":"image/png",
        "purpose":"maskable any"
      },
      {
        "src": "pwa_icons/icon-96x96.png",
        "sizes": "96x96",
        "type":"image/png",
        "purpose":"maskable any"
      },
      {
        "src": "pwa_icons/icon-144x144.png",
        "sizes": "144x144",
        "type":"image/png",
        "purpose":"maskable any"
      },
      {
        "src": "pwa_icons/icon-192x192.png",
        "sizes": "192x192",
        "type":"image/png",
        "purpose":"maskable any"
      },
      {
        "src": "pwa_icons/icon-512x512.png",
        "sizes": "512x512",
        "type":"image/png",
        "purpose":"maskable any"
      }
     ],
  "splash_pages":null
}

```

Note:- add all the images in public folder. you can use pwa generator website


## Adding custom install button

app/compontnts/DownloadPWA.js

```javascript
import React from 'react'

let deferredPrompt;
window.addEventListener('beforeinstallprompt',(e)=>{
  deferredPrompt=e;
})
const installApp=document.getElementById('installApp');
installApp.addEventListener('click',async()=>{
  if (deferredPrompt !== null){
    deferredPrompt.prompt();
    const {outcome}= await deferredPrompt.userChoice;
    if (outcome === 'accepted'){
      deferredPrompt=null;
    }
  }
});
const DownloadPWA = () => {
  return (
    <button id='installApp'>Install</button>
  )
}

export default DownloadPWA

```