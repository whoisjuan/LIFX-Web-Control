var oauth = ChromeExOAuth.initBackgroundPage({
    'request_url': 'https://cloud.lifx.com/oauth/token',
    'authorize_url': 'https://cloud.lifx.com/oauth/authorize',
    'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
    'consumer_key': 'anonymous',
    'consumer_secret': 'anonymous',
    'scope': 'remote_control:all',
    'app_name': 'LIFX Web Control'
});



