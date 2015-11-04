Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/carousel', {
  name: 'carousel',
  template: 'carousel'
});

Router.route('/carousel2', {
  name: 'carousel2',
  template: 'carousel2'
});

Router.configure({
    layoutTemplate: 'main'
});