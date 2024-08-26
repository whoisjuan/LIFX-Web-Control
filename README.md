# LIFX Web Control Chrome Extension

This is an open-source version of the previously maintained LIFX Web Control Chrome extension. Please note that this extension is no longer actively maintained and is provided as-is.

## Installation

To use this extension in Chrome:

1. Clone or download this repository.
2. Generate your own API credentials at [api.developer.lifx.com](https://api.developer.lifx.com).
3. Open the file `libs/chrome-ex-oauth2/oauth2.js` and replace the `client_id` and `client_secret` with your own generated credentials.
4. Open Chrome and navigate to `chrome://extensions/`.
5. Enable "Developer mode" in the top right corner.
6. Click "Load unpacked" and select the directory containing the extension files.

## API Credentials

You must use your own API credentials for this extension to work:

1. Go to [api.developer.lifx.com](https://api.developer.lifx.com) and sign in or create an account.
2. Create a new OAuth 2 application to get your `client_id` and `client_secret`.
3. In the `libs/chrome-ex-oauth2oauth2.js` file, replace the existing `client_id` and `client_secret` values with your new credentials.

## Usage

Once installed and configured with your API credentials, you should be able to use the extension to control your LIFX lights. However, please be aware that some features may not work as expected due to lack of recent updates.

## Disclaimer

This extension hasn't been used or updated in a while. Users might encounter issues or need to make modifications to get it working properly with current LIFX APIs or Chrome versions.

## Contributing

While this project is not actively maintained, pull requests are welcome if you'd like to improve or update the extension. Feel free to fork the repository and submit your changes.

## License
Assume this is licensed under the most permissive license available, whatever that is. I don't care. You can use this, clone it, fork it, republish it or whatever. Up to you.
