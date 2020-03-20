# Indicia Interactiv WordPress Starter Theme
This repository contains a WordPress theme which can be used as a base for future themes.

## Requirements

| Prerequisite    | How to check | How to install
| --------------- | ------------ | ------------- |
| PHP >= 7.1.x    | `php -v`     | [php.net](http://php.net/manual/en/install.php) |
| Node.js >= 8.0  | `node -v`    | [nodejs.org](http://nodejs.org/) |

## Installation
1. Run this command inside the themes (`app/themes`) directory:
```shell
composer create-project --repository=http://composer.indicia.nl indicia-wp/theme_base
```
2. Search for `'indicia-theme'` and replace it with the project name (e.g. `'project-name'`), to adjust all translatable strings text-domain.
3. Search for `IndiciaInteractiv` and replace it with the project name (e.g. `ProjectName` ) to replace all namespaces inside the theme.
4. Open the `style.css` file and edit all relevant information, especially the "Text Domain".
5. Run webpack for the first time: `npm run dev`

#### Available npm scripts

**BEWARE: Windows users should only run these commands inside a Powershell, else you run the risk of spontaneous combustion!**

* `npm run dev` / `npm run development` — Compile and optimize the files in your assets directory
* `npm run prod` / `npm run production` — Compile assets for production and version the URL in the manifest.
* `npm run watch` — Compile assets when file changes are made.

#### Using BrowserSync

Browsersync runs automatically when `npm run watch` is executed. It will automatically fetch the WP_HOME url from your `.env` config file.  
Sometimes you may wish to override this behavior, or enable other features. Below is a list of flags available.

|Flag| |
|---|---|
|`--devUrl`|Defines the proxy URL for BrowserSync to proxy requests to|
|`--tunnel`|Enables the BrowserSync tunnel feature to create a localtunnel to your local environment. **NOTE: This is HTTP-only, so no https:// URLs will work through the tunnel.**|

Usage: `npm run watch -- --devUrl=https://wpdev.test`  
**NOTE: The double dashes after `watch` are not optional.**
