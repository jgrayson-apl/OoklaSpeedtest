# Connecting Esri Survey123 and Ookla® Speedtest®
 
Collect information about connection speeds including location and user provided details via Survey123 and use Speedtest to automatically measure speeds.   

## Demo
[Community Speed Test Survey](https://geoxc-apps2.bd.esri.com/DataCollection/Survey123Speedtest/index.html)

## Technologies Used

### Esri Survey123
- [Blog: Introducing the Survey123 Web App JavaScript API](https://community.esri.com/t5/arcgis-survey123-blog/introducing-the-survey123-web-app-javascript-api/ba-p/896667)
- [Survey123WebFormOptions](https://developers.arcgis.com/survey123/api-reference/web-app/Survey123WebFormOptions)
- Example form as [Survey123Connect excel file](https://github.com/jgrayson-apl/OoklaSpeedtest/blob/master/assets/APL_Ookla_Survey.xlsx)

### Ookla Speedtest Custom *Premium Subscription*
- [Speedtest Custom](https://www.ookla.com/speedtest-custom)
- [Embed Your Test on Your Website](https://support.ookla.com/hc/en-us/articles/115003370267-Embed-Your-Test-on-Your-Website)
- [Hosting the HTML5 front-end Test UI on your site](https://support.ookla.com/hc/en-us/articles/115001660712-Hosting-the-HTML5-front-end-Test-UI-on-your-site)
- [Passing Test Results To The Browser](https://support.ookla.com/hc/en-us/articles/115005319507-Passing-Test-Results-To-The-Browser)
- [Storing STC results using Javascript](https://support.ookla.com/hc/en-us/articles/360000725112)

## Deploy

This demo is built as a static web application.

1 - Download and copy the root folder to a web accessible location\
2 - Update the configuration parameters in ./config/application.json 

## Configure

Update the [application.json](https://github.com/jgrayson-apl/OoklaSpeedtest/blob/master/config/application.json) file in your favorite json editor:

|                  parameter | details                                                                                                                                                                                                                                                                                                     |
|---------------------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|              **portalUrl** | Organization or Enterprise URL; example: https://www.arcgis.com                                                                                                                                                                                                                                             |
|               **clientId** | The client ID is a string that proves that you have explicitly authorized the use of Survey123 web app API from your web page.<br><br>You can create the Client ID through the https://developers.arcgis.com/ website, or via the web application item page, 'Settings' tab, 'App Registration' section.    |
|                 **itemId** | This is the ArcGIS item ID of your Survey123 web form.                                                                                                                                                                                                                                                      |
| **surveyInternetQuestion** | The Survey123 question *name* that triggers the SpeedTest form.                                                                                                                                                                                                                                             |
|               **ooklaUrl** | This is the custom Ookla test url configured at https://account.speedtestcustom.com/login <br><br>**REQUIRED**<ul><li>Speedtest Custom *Premium Subscription*.</li><li>Check **ON** 'Enable HTTPS'</li></ul>**RECOMMENDED**<ul><li>Check **ON** 'Auto Start' - Enable Test to Start Automatically</li></ul> |
|    **redirectOnSubmitUrl** | The application will redirect to this URL on form submission                                                                                                                                                                                                                                                |

## TODO
- No OAuth authentication implemented.
- **REQUIRED**: All ArcGIS Online items must be shared publicly.

### Contacts

[Please use this link to contact us about this demo.](mailto:jgrayson@esri.com;pryan@esri.com?subject=Survey123%20and%20OOKLA%20Speedtest%20Integration%20on%20GitHub&body=Hello,%0A%20%20I%20have%20a%20quesiton%20about%20the%20OOKLA%20Speed%20Test%20demo.) 

For questions about Survey123 or broadband connectivity:
> Patrick Ryan | Solution Engineer, Science-Civilian | Geospatial Center\
> Esri | 8615 Westwood Center Drive | Vienna, VA 22182 | USA\
> T 703 506 9515 x5070 | M 703 973 9600 | [pryan@esri.com](mailto:pryan@esri.com?subject=OoklaSpeedtest%20on%20GitHub&body=Hi%20Patrick,%0A%20%20I%20have%20a%20quesiton%20about%20the%20OOKLA%20Speed%20Test%20demo.) | [esri.com](https://www.esri.com)

 
For questions about the JavaScrip web application:
> John Grayson | Prototype Specialist | Geo Experience Center\
> Esri | 380 New York St | Redlands, CA 92373 | USA\
> T 909 793 2853 x1609 | [jgrayson@esri.com](mailto:jgrayson@esri.com?subject=OoklaSpeedtest%20on%20GitHub&body=Hi%20John,%0A%20%20I%20have%20a%20quesiton%20about%20the%20OOKLA%20Speed%20Test%20demo.) | [GeoXC Demos](https://www.esriurl.com/GeoXCDemos) | [esri.com](https://www.esri.com)
