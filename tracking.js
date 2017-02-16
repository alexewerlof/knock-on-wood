const packageJson = require('package.json');
const { trackingID } = packageJson.config;
const appName = packageJson.name;

<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
// A custom ga() facade that is app-specific
const gaApp(method, ...args) => ga(`${appName}.${method}`, ...args);
const gaSend(...args) => gaApp('send', ...args);
// Global tracker for userpixel.com
ga('create', trackingID, 'auto');
// Per app tracker
ga('create', trackingID, 'auto', appName);
// The event to log page view
gaSend('pageview');
// Report app name
// @see https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#appName
ga('set', 'appName', appName);
ga('set', 'appVersion', packageJson.version);
// Report a app screen view (In google analytics term 'screen' for apps is like 'pages' for web)
const appScreenView = (screenName) => ga('send', 'screenview', { appName, screenName });
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>