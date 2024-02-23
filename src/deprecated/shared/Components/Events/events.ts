export enum EventType {
  'PW_LANDING_PAGE' = 'pw_landing_page',
  'TOP_NAVIGATION_CLICK' = 'top_navigation_click',
  'BATCH_LISTING_VISIT' = 'batch_listing_visit',
  'PW_PAGE_SCROLL' = 'pw_page_scroll',
  'AUTH_PAGE_VISIT' = 'auth_page_visit',
  'PW_LANDING_BANNER' = 'pw_landing_banner',
  'FEATURE_EXPLORE_CLICK' = 'feature_explore_click',
  'STUDY_RESOURCES_CLICK' = 'study_resources_click',
  'CENTRE_LISTING_VISIT' = 'centre_listing_visit',
  'DOWNLOAD_APP_CLICK' = 'download_app_click',
  'FOOTER_CLICK' = 'footer_click',
}

export interface PwEvent {
  type: EventType;
}
