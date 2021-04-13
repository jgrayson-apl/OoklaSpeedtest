/*
 Copyright 2020 Esri

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import Configurable from "./support/Configurable.js";

class Application extends Configurable {

  // PATH TO CONFIG //
  _configPath = './config/application.json';

  /**
   * https://support.ookla.com/hc/en-us/articles/115005319507-Passing-Test-Results-To-The-Browser
   */
  constructor() {
    super();

    // APPLICATION CONFIG //
    this.loadConfig(this._configPath).then(() => {

      // TITLE //
      document.querySelectorAll('.application-title').forEach(node => {
        node.innerHTML = this.config.title || 'Application';
      });

      // PANELS //
      const survey123Panel = document.getElementById('survey123-panel');
      const ooklaPanel = document.getElementById('ookla-panel');
      /**
       * TOGGLE PANELS
       *
       * @param panelId { String } 'survey123-panel' | 'ookla-panel'
       * @param delay { Number }
       */
      this.togglePanel = (panelId, delay) => {
        setTimeout(() => {
          survey123Panel.classList.toggle('hide', (panelId !== survey123Panel.id));
          ooklaPanel.classList.toggle('hide', (panelId !== ooklaPanel.id));
        }, delay || 500);
      };

      //
      // SURVEY123 //
      //
      const testCompleteHandler = this.initializeSurvey123();

      //
      // OOKLA //
      //
      this.initializeOOKLA(testCompleteHandler);

    });
  }

  /**
   * https://developers.arcgis.com/survey123/api-reference/web-app/Survey123WebFormOptions
   */
  initializeSurvey123() {

    //
    // SURVEY123 WEB FORM //
    //
    const survey123WebForm = new Survey123WebForm({
      container: "survey123-panel",
      portalUrl: this.config.portalUrl,
      clientId: this.config.clientId,
      itemId: this.config.itemId,
      autoRefresh: 3,
      //hideElements: ["navbar", "header", "subheader", "footer"],
      onFormLoaded: function (data) {
        //console.info('onFormLoaded: ', data, survey123WebForm);

        // SURVEY QUESTION ANSWERED //
        survey123WebForm.setOnQuestionValueChanged(onQuestionValueChange);

        // GOELOCAITON //
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            survey123WebForm.setGeopoint({x: position.coords.longitude, y: position.coords.latitude});
          }, () => { console.error('Unable to retrieve your location'); });
        } else {console.error('Geolocation is not supported by your browser'); }

      }
    });


    // QUESTION VALUE CHANGE //
    const onQuestionValueChange = (data) => {
      //console.info('onQuestionValueChange: ', data.field);
      if ((data.field === 'internet') && (data.value === 'yes')) {
        this.togglePanel('ookla-panel');
      }
    };

    // SPEED FORMATTER //
    const speedFormatter = new Intl.NumberFormat('default', {minimumFractionDigits: 1, maximumFractionDigits: 1});
    // CONVERT TO MBPS AND FORMAT SPEED //
    const toMbps = val => (val ? speedFormatter.format(val / 1000.0) : 'n/a');
    // FORMAT LATENCY //
    const toLatency = val => Math.round(val).toFixed(0);

    // TEST COMPLETE //
    const testCompleteHandler = (data) => {
      //console.info('testCompleteHandler: ', JSON.stringify(data));

      //survey123WebForm.setQuestionValue({"isp": data.config.host});
      survey123WebForm.setQuestionValue({"downloadSpeed": toMbps(data.download)});
      survey123WebForm.setQuestionValue({"uploadSpeed": toMbps(data.upload)});
      survey123WebForm.setQuestionValue({"ping": toLatency(data.latency.minimum)});
      survey123WebForm.setQuestionValue({"jitter": toLatency(data.latency.jitter)});

      this.togglePanel('survey123-panel', 2500);
    }

    return testCompleteHandler;
  }

  /**
   *
   * https://support.ookla.com/hc/en-us/articles/360000725112
   * https://support.ookla.com/hc/en-us/articles/115003370267-Embed-Your-Test-on-Your-Website
   * https://support.ookla.com/hc/en-us/articles/115001660712-Hosting-the-HTML5-front-end-Test-UI-on-your-site
   *
   */
  initializeOOKLA(testCompleteHandler) {

    // CONFIGURE OOKLA IFRAME //
    const ooklaContainer = document.getElementById('ookla-container');
    ooklaContainer.src = this.config.ooklaUrl;

    // WINDOW MESSAGE EVENTS //
    const attachToWindow = (listener) => {
      if (window.addEventListener) {
        window.addEventListener("message", listener);
      } else if (window.attachEvent) {
        window.attachEvent("onmessage", listener);
      }
    }

    // TEST IS COMPLETE //
    const testCompleted = (event) => {
      if (event.origin !== this.config.ooklaUrl) { return; }
      testCompleteHandler && testCompleteHandler(event.data);
    }

    // LISTEN FOR WHEN THE OOKLA TEST IS COMPLETE //
    attachToWindow(testCompleted);
  }

}

export default new Application();
