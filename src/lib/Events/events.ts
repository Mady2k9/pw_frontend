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
    'PW_LIVE_EXPLORE_CLICK' = 'pwlive_explore_click',
    'FAQ_CLICK' = 'faq_click',
    'PWLIVE_BUYNOW_CLICK' = 'pwlive_buynow_click',
    'CALL_CTA_CLICK' = 'call_cta_click',
    'PWLIVE_ORIENTATION_VIDEO' = 'pwlive_orientation_video',
    'SCHEDULE_DOWNLOAD' = 'schedule_download',
    'FREE_CONTENT_VIDE0' = 'free_content_video',
    'Test_Listing_Visit' = 'test_listing_visit',
    'Get_Pass_Click' = 'get_pass_click',
    'Test_Series_Explore_Click' = 'testseries_explore_click',
    'Test_Series_Buy_Click' = 'testseries_buy_click',
    'Test_Click' = 'test_click',
    'Test_View_Schedule' = 'test_view_schedule',
    'REAl_TEST_REGISTRATION_CLICK' = "real_test_registration_click",
    'REAL_TESTLANDING_PAGE' = "real_test_landing_page",
  }
  
  export interface PwEvent {
    type: EventType;
  }
  