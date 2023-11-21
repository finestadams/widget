/* eslint-disable camelcase */
export type WidgetArgs = {
  platformId: string;
  platformName?: string;
  sellerId?: string;
  displayTopBanner?: boolean;
  dataAttrLabel?: string;
  selectors?: string;
  text?: {
    caption?: string;
    cta?: string;
    html?: string;
  };
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    textColor?: string;
    underlineColor?: string;
  };
}

export type WidgetCreateElement = {
  name: string;
  html?: string;
  text?: string;
  attributes: string[][];
}

export type ModalVisibility = {
  backdrop?: HTMLElement;
}

export type APIData = {
  amount: number;
  bank_account_connected: boolean;
  currency_code: string;
  estimated_repayment_time: string;
  id: string;
  lenkie_seller_id: string;
  offer_url: string;
  percentage_fee: number;
  platform_id: string;
  platform_name: string;
  platform_seller_id: string;
  repayment_percentage: number;
  valid_from: string;
  valid_to: string;
}
