import {v4 as uuidv4} from 'uuid';

var sellerId = uuidv4();
var id = uuidv4()
var platformSellerId = uuidv4()

export const LENKIE_DATA_STATE = {
  NAME: 'LENKIE_WIDGET',
  LOAD_ERROR: 'LOAD_ERROR',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  CLOSE: 'CLOSE',
  GO_BACK: 'GO_BACK',
  CHANGE_SCREEN: 'CHANGE_SCREEN',
  NOT_INTERESTED: 'NOT_INTERESTED',
  NOT_INTERESTED_OPTIONS: 'NOT_INTERESTED_OPTIONS',
  NOT_INTERESTED_OPTIONS_ERROR: 'NOT_INTERESTED_OPTIONS_ERROR',
};

export const LENKIE_SAMPLE_PREQUALIFICATION = {
  amount: 50000,
  bank_account_connected: false,
  currency_code: "GBP",
  estimated_repayment_time: "10 Months",
  id: `388d5715-a3e7-4d85-9d7b-f9f424ad1352`,
  lenkie_seller_id: "0830b55f-4cfd-4a62-8b68-9d96f9750403",
  offer_url: `https://uat-partners.lenkie.com/lenkify?sellerId=${sellerId}&platformId=c${platformSellerId}&utm_medium=widget&utm_source=core-pay&utm_campaign=cash+advance+pre-qualification+offer`,
  percentage_fee: 0.07,
  platform_id: "c6457301-bbe3-42c1-a005-d3beeef59567",
  platform_name: "Lenkify",
  platform_seller_id: "0830b55f-4cfd-4a62-8b68-9d96f9750403",
  repayment_percentage: 0.2,
  seller_name: "Chike Lenkie",
  valid_from: "2022-01-18T14:15:22+00:00",
  valid_to: "2023-01-18T14:15:22+00:00",
}

export const CANCEL_ICON = `<svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
export const BACK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>`;
export const LOGO_ICON = `<svg width="94" height="29" viewBox="0 0 94 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.35517 0.743164V28.4818H0.755859V0.743164H5.35517ZM16.6015 9.03116C17.8056 9.03116 18.9104 9.22405 19.9159 9.60983C20.9339 9.99561 21.809 10.5618 22.5414 11.3085C23.2739 12.0427 23.8449 12.9512 24.2546 14.0338C24.6642 15.1041 24.869 16.3298 24.869 17.7112C24.869 18.0596 24.8504 18.3521 24.8132 18.5885C24.7883 18.8125 24.7325 18.9929 24.6456 19.1298C24.5711 19.2543 24.4656 19.3476 24.329 19.4098C24.1925 19.4596 24.0187 19.4845 23.8077 19.4845H12.0022C12.1387 21.4507 12.6663 22.8943 13.5849 23.8152C14.5036 24.7361 15.7201 25.1965 17.2346 25.1965C17.9794 25.1965 18.6187 25.1094 19.1525 24.9352C19.6987 24.7609 20.1704 24.5681 20.5677 24.3565C20.9773 24.1449 21.3311 23.9521 21.629 23.7778C21.9394 23.6036 22.2373 23.5165 22.5228 23.5165C22.709 23.5165 22.8704 23.5538 23.007 23.6285C23.1435 23.7032 23.2614 23.8089 23.3608 23.9458L24.7014 25.6258C24.1925 26.2232 23.6214 26.7272 22.9883 27.1378C22.3552 27.536 21.6911 27.8596 20.9959 28.1085C20.3132 28.3449 19.6118 28.5129 18.8918 28.6125C18.1842 28.712 17.4953 28.7618 16.8249 28.7618C15.4967 28.7618 14.2615 28.5441 13.1194 28.1085C11.9774 27.6605 10.9842 27.0072 10.1401 26.1485C9.29597 25.2774 8.63183 24.2072 8.14769 22.9378C7.66356 21.656 7.42149 20.1752 7.42149 18.4952C7.42149 17.1885 7.63252 15.9627 8.05459 14.8178C8.47666 13.6605 9.07873 12.6587 9.8608 11.8125C10.6553 10.9538 11.6173 10.2756 12.747 9.77783C13.8891 9.28005 15.1739 9.03116 16.6015 9.03116ZM16.6946 12.3352C15.3539 12.3352 14.3049 12.7147 13.5477 13.4738C12.7905 14.2329 12.3063 15.3094 12.0953 16.7032H20.7352C20.7352 16.1058 20.6546 15.5458 20.4932 15.0232C20.3318 14.4881 20.0835 14.0214 19.7483 13.6232C19.4132 13.2249 18.9911 12.9138 18.4822 12.6898C17.9732 12.4534 17.3773 12.3352 16.6946 12.3352ZM26.7379 28.4818V9.32983H29.5497C30.1455 9.32983 30.5366 9.60983 30.7228 10.1698L31.0393 11.6818C31.4241 11.2836 31.8276 10.9227 32.2497 10.5992C32.6841 10.2756 33.1372 9.99561 33.609 9.75916C34.0931 9.52272 34.6083 9.34227 35.1545 9.21783C35.7007 9.09338 36.2966 9.03116 36.9421 9.03116C37.9848 9.03116 38.9097 9.21161 39.7165 9.5725C40.5234 9.92094 41.1938 10.4187 41.7276 11.0658C42.2738 11.7005 42.6834 12.4658 42.9566 13.3618C43.2421 14.2454 43.3848 15.2223 43.3848 16.2925V28.4818H38.7855V16.2925C38.7855 15.1227 38.5124 14.2205 37.9662 13.5858C37.4324 12.9387 36.6255 12.6152 35.5455 12.6152C34.751 12.6152 34.0062 12.7956 33.311 13.1565C32.6159 13.5174 31.9579 14.0089 31.3372 14.6312V28.4818H26.7379ZM50.6974 0.743164V16.6285H51.5539C51.8643 16.6285 52.1063 16.5849 52.2801 16.4978C52.4539 16.4107 52.6401 16.2489 52.8388 16.0125L57.587 10.1325C57.7981 9.88361 58.0215 9.69072 58.2574 9.55383C58.4932 9.4045 58.8036 9.32983 59.1884 9.32983H63.3967L57.4567 16.4418C57.2457 16.7032 57.0284 16.9458 56.805 17.1698C56.5815 17.3814 56.3394 17.5681 56.0788 17.7298C56.3394 17.9165 56.5691 18.1343 56.7677 18.3832C56.9663 18.632 57.165 18.8996 57.3636 19.1858L63.7319 28.4818H59.5794C59.2194 28.4818 58.9153 28.4196 58.667 28.2952C58.4188 28.1707 58.1953 27.9592 57.9967 27.6605L53.1367 20.3992C52.9505 20.1129 52.7643 19.9263 52.5781 19.8392C52.3919 19.7521 52.1125 19.7085 51.7401 19.7085H50.6974V28.4818H46.0981V0.743164H50.6974Z" fill="#ffffff"></path><path d="M84.9036 9.03125C86.1078 9.03125 87.2126 9.22414 88.2181 9.60992C89.236 9.99569 90.1112 10.5619 90.8436 11.3086C91.576 12.0428 92.1471 12.9513 92.5567 14.0339C92.9664 15.1041 93.1712 16.3299 93.1712 17.7113C93.1712 18.0597 93.1526 18.3521 93.1153 18.5886C93.0905 18.8126 93.0346 18.993 92.9478 19.1299C92.8733 19.2544 92.7678 19.3477 92.6312 19.4099C92.4946 19.4597 92.3209 19.4846 92.1098 19.4846H80.3043C80.4409 21.4508 80.9685 22.8944 81.8871 23.8153C82.8057 24.7361 84.0222 25.1966 85.5367 25.1966C86.2816 25.1966 86.9209 25.1095 87.4547 24.9353C88.0009 24.761 88.4726 24.5681 88.8698 24.3566C89.2795 24.145 89.6333 23.9521 89.9312 23.7779C90.2415 23.6037 90.5395 23.5166 90.825 23.5166C91.0112 23.5166 91.1726 23.5539 91.3091 23.6286C91.4457 23.7032 91.5636 23.809 91.6629 23.9459L93.0036 25.6259C92.4946 26.2232 91.9236 26.7272 91.2905 27.1379C90.6574 27.5361 89.9933 27.8597 89.2981 28.1086C88.6153 28.345 87.914 28.513 87.194 28.6126C86.4864 28.7121 85.7974 28.7619 85.1271 28.7619C83.7988 28.7619 82.5636 28.5441 81.4216 28.1086C80.2795 27.6606 79.2864 27.0072 78.4422 26.1486C77.5981 25.2775 76.934 24.2072 76.4498 22.9379C75.9657 21.6561 75.7236 20.1753 75.7236 18.4953C75.7236 17.1886 75.9347 15.9628 76.3567 14.8179C76.7788 13.6606 77.3809 12.6588 78.1629 11.8126C78.9574 10.9539 79.9195 10.2757 81.0491 9.77792C82.1912 9.28014 83.476 9.03125 84.9036 9.03125ZM84.9967 12.3353C83.656 12.3353 82.6071 12.7148 81.8498 13.4739C81.0926 14.233 80.6085 15.3095 80.3974 16.7033H89.0374C89.0374 16.1059 88.9567 15.5459 88.7953 15.0232C88.634 14.4881 88.3857 14.0215 88.0505 13.6233C87.7153 13.225 87.2933 12.9139 86.7843 12.6899C86.2753 12.4535 85.6795 12.3353 84.9967 12.3353Z" fill="#ffffff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M71.6642 16.7635C73.3059 16.0424 74.4529 14.3989 74.4529 12.487C74.4529 9.90973 72.3686 7.82031 69.7977 7.82031C67.2269 7.82031 65.1426 9.90973 65.1426 12.487C65.1426 14.4016 66.2925 16.0467 67.938 16.7662L66.4258 22.4154L65.2036 26.8755C64.9824 27.6827 65.3898 28.5611 65.9855 28.5611H73.61C74.2038 28.5611 74.6112 27.6881 74.3935 26.8815L71.6642 16.7635Z" fill="#F5A623"></path></svg>`;

export const INITIAL_CONTENT = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
</svg>`,
    label: 'Seamless application process',
    description: 'We analyze real-time platform data to pre-approve growth capital for sellers on your platform.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
    label: 'No Collateral or guarantees required',
    description: 'We offer your sellers an instant growth capital credit facility that is automatically repaid via a percentage of sales.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
</svg>`,
    label: 'Mutual growth',
    description: 'Access growth capital on-demand which scales continuously with the growth of your business.',
  },
];

export const REQUIRED_ITEMS = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>`,
    label: 'Bank account connection',
    key: 'bank',
    description: 'Connecting your bank accounts enables us to determine the appropriate cash advance amount for your business.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>`,
    label: 'Ecommerce account data',
    key: 'ecommerce',
    description: 'We integrate with your e-commerce accounts to analyse your historical sales. Add all your e-commerce accounts so we can provide you with the most competitive rate.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>`,
    label: 'Payment service data',
    key: 'payment',
    description: 'We integrate with your payment software to analyse your historical sales. Connect your payment accounts so we can provide you with the most competitive rate.',
  },
];

export const ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 7l5 5m0 0l-5 5m5-5H6" />
</svg>`;

export const CHECK_SUCCESS = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
</svg>`;

export const MOCK_CASH_ADVANCE_OFFERS = [
  {
    tpa: 50000,
    rrr: 7,
    car: 0.03,
  },
  {
    tpa: 81000,
    rrr: 5,
    car: 0.08,
  },
  {
    tpa: 25000,
    rrr: 15,
    car: 0.07,
  },
];
