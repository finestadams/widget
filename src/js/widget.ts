'use strict';

import { callApi } from './api';
import { LENKIE_DATA_STATE, LENKIE_SAMPLE_PREQUALIFICATION } from './constants';
import { WidgetArgs } from './index';
import {
  createElement,
  createStylesheet,
  installWidget,
  loadCss,
  openWidget,
} from './utils';

/**
 * @description Lenkie factory
 *
 * @name lenkie
 */
export default class Lenkie {
  readonly platformId: string;
  readonly sellerId: string;
  readonly config: WidgetArgs;
  readonly defaultElementEvent: string = 'click';
  readonly cashAdvancePrequalificationURL =
    process.env.CASH_ADVANCE_PREQUALIFICATION_URL_2;
  readonly notInterestedURLReasons =
    process.env.CASH_ADVANCE_PREQUALIFICATION_URL_2 + '/Not-Interested/Reasons';
  readonly notInterestedURL =
    process.env.CASH_ADVANCE_PREQUALIFICATION_URL_2 + '/Not-Interested';

  backdrop: HTMLElement;
  backDropID: string = 'lenkie-widget';
  dataAttrLabel: string = 'lenkie';
  platformName: string;

  /**
   * Creates an instance of Lenkie.
   * @param {config} [config={}]
   * @memberof Lenkie
   */
  constructor(config: WidgetArgs) {
    // Load css file in browser
    loadCss();
    if (typeof config !== 'object' && config !== null) {
      throw new Error('Invalid config parameter provided.');
    }

    const { platformId, sellerId } = config;
    this.platformId = platformId;
    this.sellerId = sellerId;
    this.config = config;
    this.cashAdvancePrequalificationURL =
      this.cashAdvancePrequalificationURL + `/${platformId}/${sellerId}`;
    if (typeof this.config.dataAttrLabel === 'string') {
      this.dataAttrLabel = this.config.dataAttrLabel;
    }
    this.initialize();
  }

  /**
   * @description Initializes lenkie pre-qualification
   */
  async initialize(): Promise<void> {
    if (
      typeof this.platformId !== 'string' ||
      typeof this.sellerId !== 'string' ||
      this.platformId === '' ||
      this.sellerId === '' || ['', undefined, null].includes(this.config.platformName)
    ) {
      throw new Error('Invalid platform/user identifier or platform name supplied.');
    }

    if (await this.authorize() === false) {
      return;
    }

    // Create stylsheet based on config
    createStylesheet();

    // localStorage.setItem('lenkie_platformName', this.config.platformName);

    // Install nain widget modal
    installWidget(this.config);
    localStorage.setItem('lenkie-config', JSON.stringify(this.config));

    // Check permission to show top notification
    if (this.config.displayTopBanner) {
      this.displayTopBanner();
    }

    if (typeof this.config.dataAttrLabel === 'string') {
      this.listenOnElements();
    }
  }

  /**
   * @description Authorizes the widget instance
   *
   * @return {boolean} boolean
   */
  async authorize() {
    const isPermitted = localStorage.getItem(LENKIE_DATA_STATE.NAME);
    if (isPermitted === '0') return false;
    return await this.loadLenkieData();
  }

  /**
   * @description Load lenkie data
   *
   * @return {void}
   */
  async loadLenkieData(): Promise<boolean> {
    let data = await callApi(this.cashAdvancePrequalificationURL, {
      mode: 'cors',
    });

    if (
      !data
      && this.config.platformId === '89151f3e-354c-4a1a-9e70-0c57341f88d3'
      && this.config.sellerId === '4e1482e4-c6f2-4bdd-88d8-efb34aa6ecae'
    ) {
      data = LENKIE_SAMPLE_PREQUALIFICATION
    }

    if (!data || data.status === 404) {
      window.dispatchEvent(new CustomEvent(LENKIE_DATA_STATE.LOAD_ERROR));
      localStorage.setItem(LENKIE_DATA_STATE.LOAD_ERROR, null);
    } else {
      localStorage.setItem(
        LENKIE_DATA_STATE.LOAD_SUCCESS,
        JSON.stringify(data),
      );
      window.dispatchEvent(
        new CustomEvent(LENKIE_DATA_STATE.LOAD_SUCCESS, { detail: data }),
      );
      await this.loadNotInterestedOptions();
      return true;
    }

    return false;
  }

  /**
   * @description Load lenkie data
   *
   * @return {void}
   */
  async loadNotInterestedOptions(): Promise<boolean> {
    const data = await callApi(this.notInterestedURLReasons);

    if (!data) {
      window.dispatchEvent(
        new CustomEvent(LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS_ERROR),
      );
      localStorage.setItem(
        LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS_ERROR,
        null,
      );
    } else {
      localStorage.setItem(
        LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS,
        JSON.stringify(data),
      );
      window.dispatchEvent(
        new CustomEvent(LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS, {
          detail: data,
        }),
      );
      return true;
    }

    return false;
  }

  /**
   * @description Displays the modal box
   *
   * @return {void}
   */
  showModal(): void {
    openWidget();
  }

  /**
   * @description Adjust top banner theme
   *
   * @return {void}
   */
  adjustTheme(): void {
    const primaryColor = this.config.theme?.primaryColor;
    const secondaryColor = this.config.theme?.secondaryColor;
    const underlineColor = this.config.theme?.underlineColor;

    if (typeof primaryColor === 'string' && primaryColor.length > 0) this.setRootStyles('--lenkie-widget-primary', primaryColor);

    if (typeof secondaryColor === 'string' && secondaryColor.length > 0) {
      this.setRootStyles('--lenkie-widget-secondary', secondaryColor);
    }

    if (typeof underlineColor === 'string' && underlineColor.length > 0) {
      this.setRootStyles('--lenkie-widget-border-bottom-color', underlineColor);
    }
  }


  /**
   * @description Display top notifcation
   *
   * @return {void}
   */
  displayTopBanner(): void {
    this.adjustTheme();
    const topNotification = createElement({
      name: 'div',
      attributes: [
        ['id', 'lenkie-top-banner'],
        ['class', 'lenkie-top-banner'],
      ],
    });

    let defaultOuterStatement =
      `🚀 Scale your business with a cash advance from ${this.config.platformName}`;

    if (typeof this.config.text?.caption === 'string' && this.config.text?.caption.length > 0) {
      defaultOuterStatement = this.config.text?.caption;
    }

    let defaultInnerStatement =
      'check offers available to you';

    if (typeof this.config.text?.cta === 'string' && this.config.text?.cta.length > 0) {
      defaultInnerStatement = this.config.text?.cta;
    }

    let html = `${defaultOuterStatement}, <a data-${this.dataAttrLabel} class="lenkie-cta-link">${defaultInnerStatement} <span id="lenkie-arrow">&#x2192;</span></a>`;

    if (typeof this.config.text?.html === 'string' && this.config.text?.html.length > 0) {
      html = this.config.text?.html;
    }

    const content = createElement({
      name: 'p',
      attributes: [
        ['class', 'text'],
        ['style', 'font-family: BR Firma Regular; cursor: pointer'],
        [`data-${this.dataAttrLabel}`],
      ],
      html,
    });

    const closeButton = createElement({
      name: 'button',
      attributes: [
        ['id', 'lenkie-top-banner-close'],
        ['style', 'background: transparent; border: 0; color: white; display: none;'],
      ],
      html: 'X',
    });

    closeButton.addEventListener('click', this.hideTopNotification);

    topNotification.appendChild(content);
    topNotification.appendChild(closeButton);
    const fChild = document.body.firstChild;
    fChild.parentNode.insertBefore(topNotification, fChild);
  }

  /**
   * @description Hide top navigation banner
   *
   * @return {void}
   */
  hideTopNotification(): void {
    const topNotification = document.getElementById('lenkie-top-banner');
    topNotification?.remove();
    localStorage.setItem(LENKIE_DATA_STATE.NAME, '0');
  }

  /**
   * @description Listen on events triggered by elements
   *
   * @param {string} attrLabel
   * @return {void}
   */
  listenOnElements(): void {
    const isPermitted = localStorage.getItem(LENKIE_DATA_STATE.NAME);
    if (isPermitted === '0') return;
    const attrLabel = this.config.dataAttrLabel;
    document
      .querySelectorAll(`[data-${attrLabel}]`)
      .forEach((el: HTMLElement) =>
        el.addEventListener(
          el.dataset[attrLabel] || this.defaultElementEvent,
          this.showModal,
        ),
      );
  }

  /**
   * @description Listen on events triggered by elements
   *
   * @param {string} attrLabel
   * @return {void}
   */
  installWidget(): void {
    installWidget({ ...this.config, backdropId: this.backDropID });
  }

  /**
   * @description Change root styles
   *
   * @export setRootStyles
   * @param {string} name
   * @param {string} color
   */
  setRootStyles(name: string, color: string) {
    const root: any = document.querySelector(':root');
    root?.style.setProperty(name, color);
  }
}

(window as any).Lenkie = Lenkie;
