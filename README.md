# OOKLSpeedTest
   
Geo Experience Center, Esri\
_April 2021_
---

## Community Speed Test Survey
Collect information about connection speeds including location and user provided details via Survey123 and use OOKLA to automatically measure speeds.   

---

### Survey123
- https://developers.arcgis.com/survey123/api-reference/web-app/Survey123WebFormOptions
- https://community.esri.com/t5/arcgis-survey123-blog/introducing-the-survey123-web-app-javascript-api/ba-p/896667

### OOKLA
- https://support.ookla.com/hc/en-us/articles/360000725112
- https://support.ookla.com/hc/en-us/articles/115003370267-Embed-Your-Test-on-Your-Website
- https://support.ookla.com/hc/en-us/articles/115001660712-Hosting-the-HTML5-front-end-Test-UI-on-your-site
- https://support.ookla.com/hc/en-us/articles/115005319507-Passing-Test-Results-To-The-Browser

---
### Deploy

This demo is built as a static web application.

   1 - Copy the \SpeedTest folder to a web accessible folder\
   2 - Update configuration parameters in ./config/application.json 

### Configure

Update the application.json file in your favorite json editor:

- **portalUrl**: Organization or Enterprise URL; example: https://www.arcgis.com 
  
- **clientId**: The client ID is a string that proves that you have explicitly authorized the use of Survey123 web app API from your web page. You need to create the Client ID through the https://developers.arcgis.com/ website.
  
- **itemId**: This is the ArcGIS itemID of your web form.
  
- **ooklaUrl**: This is the custom OOKLA test url you've configured at https://account.speedtestcustom.com/login


