import {WidgetArgs} from './index.d';
/* eslint-disable max-len */

import {APIData, WidgetCreateElement} from '~js';
import {sendApi} from './api';
import {
  BACK_ICON,
  CANCEL_ICON,
  LENKIE_DATA_STATE,
} from './constants';
import {BACKDROP_STYLE, STYLE} from './style';

window.addEventListener(LENKIE_DATA_STATE.CLOSE, makeModalInvisible);
window.addEventListener(LENKIE_DATA_STATE.CHANGE_SCREEN, navigateScreen);
window.addEventListener(LENKIE_DATA_STATE.NOT_INTERESTED_OPTIONS, setNotInterestedOptions);

const NOT_INTERESTED_OPTIONS: any = new Set();

/**
 * @description Install modal and fetch properties
 *
 * @param {WidgetArgs} config
 * @return {void}
 */
export function installWidget(config?: WidgetArgs&any): HTMLElement {
  const name = config.backdropId || 'lenkie-widget';
  const container = document.createElement('div');
  const widgetContent = document.createElement('div');

  container.setAttribute('id', name);
  container.setAttribute('style', BACKDROP_STYLE);

  widgetContent.setAttribute('id', 'lenkie-widget__content');
  widgetContent.style.display = 'none';

  container.appendChild(widgetContent);
  document.body.insertBefore(container, document.body.childNodes[0]);

  const closeButton = createElement({
    name: 'div',
    attributes: [
      ['role', 'button'],
      ['aria-label', 'close'],
      ['class', 'lenkie-close-button'],
    ],
  });

  const backButton = createElement({
    name: 'div',
    attributes: [
      ['role', 'button'],
      ['aria-label', 'close'],
      ['id', 'lenkie-back-button'],
      ['class', 'lenkie-back-button'],
    ],
  });

  backButton.innerHTML = BACK_ICON;
  closeButton.innerHTML = CANCEL_ICON;

  backButton.style.visibility = 'hidden';

  closeButton.addEventListener('click', handleDismiss);
  widgetContent.appendChild(backButton);
  widgetContent.appendChild(closeButton);

  const loader = createLoader();
  document.getElementById(name).appendChild(loader);

  // Show initial view
  startDisplay(config);

  return container;
}

/**
 * @description Display initial widget view
 * @param {WidgetArgs} config
 * @return {void}
 */
export function startDisplay(config?: WidgetArgs): void {
  displayFirstScreen(config);
}

/**
 * @description Switch to next phase
 *
 * @param {WidgetArgs} config
 * @return {void}
 */
export function displayFirstScreen(config?: WidgetArgs): void {
  const widgetContent = document.getElementById('lenkie-widget__content');
  const backButton: any = document.querySelector('.lenkie-back-button');
  const closeButton: any = document.querySelector('.lenkie-close-button');
  widgetContent.style.background = '#fff';
  backButton.style.color = '#1A2D5B';
  closeButton.style.color = '#1A2D5B';
  screenInitialOffer(config);
}

/**
 * @description Switch to next phase
 *
 * @param {WidgetArgs} config
 * @return {void}
 */
export function screenInitialOffer(config?: WidgetArgs): void {
  const API_DATA: APIData = JSON.parse(
      localStorage.getItem(LENKIE_DATA_STATE.LOAD_SUCCESS),
  );
  if (!API_DATA) {
    displayDataNotAvailable();
    return;
  }

  let stageTwoWrapper = document.getElementById('widget-stage-two__content');
  if (stageTwoWrapper) {
    stageTwoWrapper.remove();
  }

  const {
    amount,
  } = API_DATA;

  const widgetContent = document.getElementById('lenkie-widget__content');
  stageTwoWrapper = createElement({
    name: 'div',
    attributes: [
      ['id', 'widget-stage-two__content'],
      ['class', 'lenkie-widget-initial__content'],
    ],
  });
  const pageTitle = createElement({
    name: 'h2',
    attributes: [['class', 'widget-stage-two__title']],
  });
  const pageDesc = createElement({
    name: 'p',
    attributes: [['class', 'widget-stage-two__desc']],
  });

  pageTitle.innerText = 'Fund your business';
  pageDesc.innerHTML = `<p>Congratulations, based on your sales performance, your business qualifies for an ${config?.platformName} cash advance.</p>`;

  stageTwoWrapper.appendChild(pageTitle);
  stageTwoWrapper.appendChild(pageDesc);

  // Display content
  const contentParent = createElement({
    name: 'div',
    attributes: [
      ['id', 'widget-stage-two__wrapper'],
      ['class', 'widget-stage__wrapper'],
    ],
  });
  const offerDisplay = createElement({
    name: 'div',
    attributes: [['class', 'widget-stage-offer-display']],
  });
  const text = createElement({
    name: 'div',
    attributes: [['class', 'widget-stage-two__item']],
  });
  const totalPaymentAmountLabel = createElement({
    name: 'label',
    attributes: [['class', 'widget-stage-two__item-label']],
  });
  const cashAdvanceStatement = createElement({
    name: 'label',
    attributes: [['class', 'widget-stage-two__item-label']],
    text: 'Cash advance fees starting from 6%',
  });
  const totalPaymentAmount = createElement({
    name: 'h3',
    attributes: [['class', 'widget-stage-two__item-tpa']],
  });

  totalPaymentAmount.innerText = formatToCurrency(amount);
  totalPaymentAmountLabel.innerText = 'Total payout amount';

  offerDisplay.appendChild(totalPaymentAmountLabel);
  offerDisplay.appendChild(totalPaymentAmount);
  offerDisplay.appendChild(cashAdvanceStatement);

  contentParent.appendChild(offerDisplay);
  contentParent.appendChild(text);

  const notInterested = createElement({
    name: 'button',
    attributes: [['class', 'not-interested']],
    text: `Not interested in additional funding`,
  });

  notInterested.addEventListener('click', () => window.dispatchEvent(new CustomEvent(LENKIE_DATA_STATE.CHANGE_SCREEN, {
    detail: {
      screen: 1,
    },
  })));

  // Display footer button
  const footerWrapper = createElement({
    name: 'div',
    attributes: [['id', 'widget-content__footer']],
  });

  const footerButton = createElement({
    name: 'button',
    attributes: [['id', 'widget-content__footer-button-2']],
  });

  footerButton.innerHTML = 'View this offer  &#x2192;';
  footerButton.addEventListener('click', handleViewed);
  footerWrapper.style.height = 'auto';
  footerButton.style.marginTop = '2rem';

  footerWrapper.appendChild(footerButton);
  footerWrapper.appendChild(notInterested);

  stageTwoWrapper.appendChild(contentParent);
  stageTwoWrapper.appendChild(footerWrapper);

  widgetContent.appendChild(stageTwoWrapper);
}

/**
 * @description Switch to next phase
 *
 * @return {void}
 */
export function screenNotInterested(): void {
  const API_DATA: APIData = JSON.parse(
      localStorage.getItem(LENKIE_DATA_STATE.LOAD_SUCCESS),
  );
  if (!API_DATA) {
    displayDataNotAvailable();
    return;
  }

  let stageThreeWrapper = document.getElementById(
      'widget-stage-three__content',
  );

  if (stageThreeWrapper) {
    stageThreeWrapper.remove();
  }

  const widgetContent = document.getElementById('lenkie-widget__content');
  stageThreeWrapper = createElement({
    name: 'div',
    attributes: [
      ['id', 'widget-stage-three__content'],
      ['class', 'widget-stage__wrapper'],
    ],
  });

  const pageTitle = createElement({
    name: 'h2',
    attributes: [['class', 'widget-stage-three__title']],
  });
  pageTitle.innerText = 'Help us improve our product offering';

  stageThreeWrapper.appendChild(pageTitle);

  // Stage content
  const contentParent = createElement({name: 'div', attributes: [['class', 'widget-stage-three__content']]});
  const descriptionText = createElement({
    name: 'p',
    text: 'Please provide feedback on why you are not interested in the funding:',
    attributes: [['class', 'widget-stage-three__desc widget-stage-three__desc-text']],
  });

  contentParent.appendChild(descriptionText);

  const form = createElement({
    name: 'form',
    attributes: [['id', 'not-intrested-form']],
  });

  form.addEventListener('submit', submitNotInterestedForm);

  for (const option of NOT_INTERESTED_OPTIONS) {
    const c = createElement({
      name: 'div',
      attributes: [['class', 'widget-content__item widget-content__item-three']],
    });
    const label = createElement({
      name: 'label',
      attributes: [['class', 'widget-content__item-label'], ['for', option.reason === 'Other' ? 'na-other' : 'na-input-' + option.id]],
      text: option.reason,
    });
    const input = createElement({
      name: 'input',
      attributes: [['class', 'widget-content__item-input'], ['type', 'checkbox'], ['id', option.reason === 'Other' ? 'na-other' : 'na-input-' + option.id], ['name', 'na-choice'], ['value', option.id]],
    });

    input.addEventListener('change', listenForOtherOptionSelectedForNotInterested);

    c.appendChild(input);
    c.appendChild(label);
    contentParent.appendChild(c);
  };

  // Textarea for option
  const textareaOption = createElement({
    name: 'textarea',
    attributes: [['id', 'widget-content__na-other-option'], ['rows', '5'], ['placeholder', 'Please enter your comment.'], ['maxlength', '255'], ['name', 'not-interested-comment']],
  });

  contentParent.appendChild(textareaOption);

  // Display footer button
  const footerWrapper = createElement({
    name: 'div',
    attributes: [['id', 'widget-content__footer']],
  });
  const footerButton = createElement({
    name: 'button',
    attributes: [['id', 'widget-content__footer-button-2']],
  });

  footerButton.innerText = 'Submit';
  footerButton.addEventListener('click', submitNotInterestedForm);
  footerWrapper.style.height = 'auto';
  footerWrapper.style.marginTop = '1rem';

  footerWrapper.appendChild(footerButton);

  form.appendChild(contentParent);
  form.appendChild(footerWrapper);

  stageThreeWrapper.appendChild(form);

  widgetContent.appendChild(stageThreeWrapper);
}

/**
 * @description Handle not interested clicks
 *
 * @param {any} data
 *
 * @return {void}
 */
export async function handleNotInterested(data: any = {}): Promise<void> {
  try {
    hideTopNotification();
    const API_DATA: APIData = JSON.parse(
        localStorage.getItem(LENKIE_DATA_STATE.LOAD_SUCCESS),
    );
    window.dispatchEvent(new CustomEvent(LENKIE_DATA_STATE.CLOSE));
    await sendApi(process.env.CASH_ADVANCE_PREQUALIFICATION_URL + '/Not-Interested', 'PUT', {
      ...(API_DATA),
      date_marked_as_not_interested: new Date(),
      ...data,
    }, {
      mode: 'cors',
    });
    localStorage.setItem(LENKIE_DATA_STATE.NAME, '0');
  } catch (error) {}
}

/**
 * @description Handle viewed clicks
 *
 * @param {any?} data
 *
 * @return {void}
 */
export async function handleViewed(data?: any): Promise<void> {
  try {
    const API_DATA: APIData = JSON.parse(
        localStorage.getItem(LENKIE_DATA_STATE.LOAD_SUCCESS),
    );

    const changedUrl = API_DATA.offer_url.replace('get-started', API_DATA.platform_name.toLowerCase());
    navigateToURL(changedUrl);
    window.dispatchEvent(new CustomEvent(LENKIE_DATA_STATE.CLOSE));
    await sendApi(process.env.CASH_ADVANCE_PREQUALIFICATION_URL + '/View', 'PUT', {
      ...(API_DATA),
      viewed_date: new Date(),
    }, {
      mode: 'cors',
    });
  } catch (error) {}
}

/**
 * @description Handle dismiss clicks
 *
 * @param {any?} data
 *
 * @return {void}
 */
export async function handleDismiss(data?: any): Promise<void> {
  try {
    const API_DATA: APIData = JSON.parse(
        localStorage.getItem(LENKIE_DATA_STATE.LOAD_SUCCESS),
    );
    window.dispatchEvent(new CustomEvent(LENKIE_DATA_STATE.CLOSE));
    await sendApi(process.env.CASH_ADVANCE_PREQUALIFICATION_URL + '/Dismiss', 'PUT', {
      ...(API_DATA),
      dismissed_date: new Date(),
    }, {
      mode: 'cors',
    });
  } catch (error) {}
}

/**
 * @description Switch to next phase (two)
 * @param {any} content
 *
 * @return {void}
 */
export function leaveStageTwo(): void {
  const stageTwoWrapper = document.getElementById('widget-stage-two__content');
  const backButton: any = document.querySelector('.lenkie-back-button');
  stageTwoWrapper.classList.add('hide');

  backButton.style.visibility = 'visible';
  backButton.addEventListener('click', backStageTwo);
  screenNotInterested();
}

/**
 * @description Back to phase (two)
 * @param {any} content
 *
 * @return {void}
 */
export function backStageTwo(): void {
  const stageTwoWrapper = document.getElementById('widget-stage-two__content');
  const stageThreeWrapper = document.getElementById(
      'widget-stage-three__content',
  );
  const backButton: any = document.querySelector('.lenkie-back-button');
  stageTwoWrapper.classList.toggle('hide');
  backButton.style.visibility = 'hidden';
  stageThreeWrapper.classList.add('hide');
}

/**
 * @description Submit not interested form
 *
 * @param {FormDataEvent} evt
 * @return {void}
 */
export async function submitNotInterestedForm(evt: FormDataEvent): Promise<void> {
  evt.preventDefault();
  const formEl: any = document.getElementById('not-intrested-form');
  const formData: any = new FormData(formEl);
  let comment = null;

  const reasons = [...NOT_INTERESTED_OPTIONS];
  const reasonsCollection = [];

  let mustFillTextField = false;

  for (const [key, value] of formData.entries()) {
    if (key === 'not-interested-comment') comment = value;
    if (key === 'na-other' && value === undefined || value === '') mustFillTextField = true;

    const r = reasons.find((o) => o.id === +value);
    if (r) reasonsCollection.push(r);
  }

  if (mustFillTextField) return;

  if (reasonsCollection.length < 1) return;
  await handleNotInterested({
    not_interested_comments: comment ?? undefined,
    reasons_not_interested: reasonsCollection,
  });
}

/**
 * @description Navigate to external URL
 *
 * @param {string} url
 * @return {void}
 */
export function navigateToURL(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer,resizable');
}

/**
   * @description Remove top notifcation
   *
   * @return {void}
   */
export function hideTopNotification(): void {
  const topNotification = document.getElementById('lenkie-top-banner');
  if (topNotification) {
    topNotification.remove();
  }
}

/**
 * @description Turn modal visibility on
 *
 * @return {void}
 */
export function openWidget(): void {
  makeModalVisible();
}

/**
 * @description Turn modal visibility on
 *
 * @param {string} name
 * @return {void}
 */
export function makeModalVisible(): void {
  const container = document.getElementById('lenkie-widget');
  const loader = document.getElementById('lenkie-widget-loader');
  const widgetContent = document.getElementById('lenkie-widget__content');
  container.style.display = 'flex';
  container.style.visibility = 'visible';
  loader.style.display = 'block';

  setTimeout(() => {
    loader.style.display = 'none';
    widgetContent.style.display = 'block';
  }, 800);
}

/**
 * @description Turn modal visibility off
 *
 * @return {void}
 */
export function makeModalInvisible(): void {
  const container = document.getElementById('lenkie-widget');
  container.remove();

  const config = localStorage.getItem('lenkie-config');
  if (config) {
    installWidget(JSON.parse(config));
  }
}

/**
 * @description Dynamically load css file
 *
 * @return {void}
 */
export function loadCss() {
  const link = document.createElement('link');
  link.href = `${process.env.WIDGET_CDN ?? ''}/css/index.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.media = 'screen,print';

  document.getElementsByTagName('head')[0].appendChild(link);
}

/**
 * @description Create modal backdrop
 *
 * @param {string} loaderParentName
 * @return {void}
 */
export function createLoader(loaderParentName = 'lenkie-widget-loader') {
  const loaderParent = document.createElement('div');
  const loaderChild = document.createElement('div');
  loaderParent.setAttribute('id', loaderParentName);
  loaderParent.classList.add('widget_loader');
  loaderChild.classList.add('lenkie-widget_loader__spinner');

  for (let i = 0; i < 12; i++) {
    const div = document.createElement('div');
    loaderChild.appendChild(div);
  }

  loaderParent.appendChild(loaderChild);
  return loaderParent;
}

/**
 * @description Create modal backdrop
 *
 * @return {void}
 */
export function createStylesheet(): void {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = STYLE;
  document.head.appendChild(styleSheet);
}

/**
 * @description Factory for creating elements
 *
 * @param {WidgetCreateElement} args
 * @return {void}
 */
export function createElement(args: WidgetCreateElement): HTMLElement {
  const el = document.createElement(args.name);
  if (args.html) el.innerHTML = args.html;
  if (args.text) el.innerHTML = args.text;

  args.attributes.forEach(([key, value]) => el.setAttribute(key, value));

  return el;
}

/**
 * @description Factory for navigating to initial screen
 *
 * @return {void}
 */
function navigateToInitialScreen(): void {
  // Show present state
  const stageTwoWrapper = document.getElementById('widget-stage-two__content');
  stageTwoWrapper.style.display = 'block';
  stageTwoWrapper.style.visibility = 'visible';

  // SHow back button
  const backButton = document.getElementById('lenkie-back-button');
  backButton.style.visibility = 'hidden';
  backButton.addEventListener('click', () => window.dispatchEvent(new CustomEvent(LENKIE_DATA_STATE.GO_BACK, {
    detail: {
      screen: 0,
    },
  })));

  const stageThreeWrapper = document.getElementById('widget-stage-three__content');
  stageThreeWrapper.style.display = 'none';
}

/**
 * @description Factory for navigating to not interested screen
 *
 * @return {void}
 */
function navigateToNotInterstedScreen(): void {
  // Hide present state
  const stageTwoWrapper = document.getElementById('widget-stage-two__content');
  stageTwoWrapper.style.display = 'none';

  // SHow back button
  const backButton = document.getElementById('lenkie-back-button');
  backButton.style.visibility = 'visible';
  backButton.addEventListener('click', () => window.dispatchEvent(new CustomEvent(LENKIE_DATA_STATE.CHANGE_SCREEN, {
    detail: {
      screen: 0,
    },
  })));

  screenNotInterested();
}

/**
 * @description Factory for creating elements
 *
 * @param {any} event
 * @return {void}
 */
export function navigateScreen(event: any): void {
  switch (event.detail?.screen) {
    case 0:
      navigateToInitialScreen();
      return;
    case 1:
      navigateToNotInterstedScreen();
      return;
  }
}

/**
 * @description Display data not available
 *
 * @return {void}
 */
export function displayDataNotAvailable(): void {
  alert('Data not loaded');
}

/**
 * Format number as currency
 *
 * @param {number} amount
 * @return {*}  {string}
 */
function formatToCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Listen for other option selected
 *
 * @param {CustomEvent} evt
 * @return {void}
 */
function listenForOtherOptionSelectedForNotInterested(evt: InputEvent|any) {
  const textareaOption = document.getElementById('widget-content__na-other-option');
  if (evt.target.checked && evt.target.id === 'na-other') {
    textareaOption.setAttribute('required', 'required');
  } else {
    textareaOption.removeAttribute('required');
  }
}

/**
 * Set not interested values
 *
 * @param {CustomEvent} evt
 * @return {void}
 */
function setNotInterestedOptions(evt: CustomEvent) {
  const options: any[] = evt.detail;
  options.forEach((o: any) => NOT_INTERESTED_OPTIONS.add(o));
}
