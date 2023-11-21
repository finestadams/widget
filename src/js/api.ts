
/**
 * @description Method for calling API
 *
 * @param {string} url
 * @param {object} options
 * @return {void}
 */
export async function callApi(url: string, options = {}): Promise<any|null> {
  try {
    return await (await fetch(url, options)).json();
  } catch (error) {
    return null;
  }
}

/**
 * @description Method for calling API
 *
 * @param {string} url
 * @param {string} method
 * @param {any} data
 * @param {any} options
 *
 * @return {void}
 */
export async function sendApi(url: string, method = 'POST', data: any, options = {}): Promise<any|null> {
  try {
    return await (await fetch(url, {
      method,
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
      ...options,
    })).json();
  } catch (error) {
    return null;
  }
}
