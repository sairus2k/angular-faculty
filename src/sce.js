export default sceConfig;

function sceConfig($sceDelegateProvider) {
  'ngInject';

  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://api.vk.com/**'
  ]);
}
