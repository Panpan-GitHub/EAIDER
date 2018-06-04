var plugin = {
  params: {
    theme: 'md',
    root: '#app',
  }
};
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'EAider',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/annotator/index/',
      url: '/annotator/index.html',
    },
  ],
  // ... other parameters
  dialog: {
    buttonOk: '确定',
    buttonCancel: '取消',
  },
  picker: {
    toolbarCloseText: '完成'
  },
  calendar: {
    toolbarCloseText: '完成'
  },
  popup: {
    closeByBackdropClick: false,
  }
});
var mainView = app.views.create('.view-main');
var $$ = Dom7;

