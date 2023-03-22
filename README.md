# Connecting Esri Survey123 and Ookla® Speedtest®

Collect information about connection speeds including location and user provided details via Survey123 and use Speedtest to automatically measure speeds.

## Demo

[Community Speed Test Survey](https://geoxc-apps2.bd.esri.com/DataCollection/Survey123Speedtest/index.html)

## Technologies Used

### Esri Survey123

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

|                  PARAMETER | DETAILS                                                                                                                                                                                                                                                                                                     |
|---------------------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|              **portalUrl** | Organization or Enterprise URL; example: https://www.arcgis.com                                                                                                                                                                                                                                             |
|               **clientId** | The client ID is a string that proves that you have explicitly authorized the use of Survey123 web app API from your web page.<br><br>You can create the Client ID through the https://developers.arcgis.com/ website, or via the web application item page, 'Settings' tab, 'App Registration' section.    |
|                 **itemId** | This is the ArcGIS item ID of your Survey123 web form.                                                                                                                                                                                                                                                      |
| **surveyInternetQuestion** | The Survey123 question *name* that triggers the SpeedTest form.                                                                                                                                                                                                                                             |
|               **ooklaUrl** | This is the custom Ookla test url configured at https://account.speedtestcustom.com/login <br><br>**REQUIRED**<ul><li>Speedtest Custom *Premium Subscription*.</li><li>Check **ON** 'Enable HTTPS'</li></ul>**RECOMMENDED**<ul><li>Check **ON** 'Auto Start' - Enable Test to Start Automatically</li></ul> |
|    **redirectOnSubmitUrl** | The application will redirect to this URL on form submission                                                                                                                                                                                                                                                |
|          **questionValue** | Set of pre-configured Survey123 questions and answers. Please see [Survey123WebFormOptions.questionValue](https://developers.arcgis.com/survey123/api-reference/web-app/Survey123WebFormOptions#questionValue) for more details.                                                                            | 

### Survey123 question names & Speedtest parameters

|     QUESTION NAME | PARAMETER            |
|------------------:|----------------------|
| **downloadSpeed** | data.download        | 
|   **uploadSpeed** | data.upload          |
|          **ping** | data.latency.minimum |
|        **jitter** | data.latency.jitter  |
|        **testId** | data.config.testId   |

### Application URL parameters

You can use URL parameters to answer Survey123 questions. If a question with the same name as the URL parameter name is found in the survey, the URL parameter value will be used as the question's answer.

* URL syntax: ../index.html?[ **question_name** ]=[ **response_value** ]
* Example: ../index.html?**longitude**=**123.45**

### Source Location Validation Scenario
#### Q: Are you where you say you are? 

An additional workflow is supported via a custom Survey123 Form to provide source location validation.
The workflow starts with a Web Map that has a Popup configured to use geographic coordinates stored as attributes
and pass those into this application as URL parameters as described above. The coordinates will be used by the Survey123 Form to
calculate the distance to the current device location and then disable the OOKLA Speedtest question if the calculated
distance is further away than the _configured_ maximum distance threshold.

|   URL PARAMETER NAME | VALIDATION USAGE                  |
|---------------------:|-----------------------------------|
| **source_longitude** | longitude location value (WGS 84) | 
|  **source_latitude** | latitude location value (WGS 84)  |

Please note that the maximum distance threshold is set in the app configuration (part of the _questionValue_ parameter),
**NOT** a URL parameter.

| CONFIGURATION PARAMETER NAME | VALIDATION USAGE           | DEFAULT    |
|-----------------------------:|----------------------------|------------|
|             **max_distance** | maximum distance threshold | 100 (feet) | 

Please use this source validation Excel file for this scenario: [Survey123Connect excel file](https://github.com/jgrayson-apl/OoklaSpeedtest/blob/master/assets/APL_Ookla_Source_Validation.xlsx)

## TODO

- No OAuth authentication implemented.
- **REQUIRED**: All ArcGIS Online items must be shared publicly.

## Contacts

### If you have questions about this demo, please [contact us](mailto:jgrayson@esri.com;pryan@esri.com?subject=Survey123%20and%20OOKLA%20Speedtest%20Integration%20on%20GitHub&body=Hello,%0A%20%20I%20have%20a%20quesiton%20about%20the%20OOKLA%20Speed%20Test%20demo).

For specific questions about Survey123 or broadband connectivity:
> Patrick Ryan | Solution Engineer, Science-Civilian | Geospatial Center\
> Esri | 8615 Westwood Center Drive | Vienna, VA 22182 | USA\
> T 703 506 9515 x5070 | M 703 973 9600 | pryan<span>@</span>esri.com | [esri.com](https://www.esri.com)


For specific questions about the JavaScript web application:
> John Grayson | Prototype Specialist | Geo Experience Center\
> Esri | 380 New York St | Redlands, CA 92373 | USA\
> T 909 793 2853 x1609 | jgrayson<span>@</span>esri.com | [GeoXC Demos](https://www.esriurl.com/GeoXCDemos) | [esri.com](https://www.esri.com)
