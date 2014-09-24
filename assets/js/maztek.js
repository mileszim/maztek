$(function() {
  
  // Projects Scrollspy
  $('body').scrollspy({ target: '.projects-sidebar' });
  $(window).on('load',function() {
    $('body').scrollspy('refresh');
  });
  
});

// Github Activity
OCTOCARD = {
  // [required][string] Username.
  name: 'mileszim',

  // [optional][string|Element]
  // element or elementId, `octocard` as default.
  element: 'github-activity',

  // [optional][string]
  // Used module names, default is:
  //   `base,details,stats,repos,contributions,orgs`.
  // You can change the order or remove module if you don't want.
  // modules: 'base,details,stats,repos,orgs,eventsStatis',

  // [optional][number] Number of repos to be shown.
  // `3` as default
  reposNum: 4,

  // [optional][number]repos which will not be shown
  // '' as default
  reposIgnored: 'fragmentions,altclass,wp-social-metrics-tracker,wp-meta-box-factory',

  // [optional][number] Number of organizations to be shown.
  // `Infinity` as default, represent showing all organizations.
  // orgsNum: -1,

  // [optional][string]url of jsonp api
  // `http://octocard.info/api` as default.
  // If your use your own octocard-server, change it.
  // api: 'http://your-octocard-server.com/api',

  // [optional][boolean]show footer or not
  // 'false' as default
  // noFooter: false,

  // [optional][boolean]
  // Use `shadowDom` or `iframe` to create isolate container or not
  // 'false' as default
  // noIsolated: true
};