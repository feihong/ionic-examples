# Ionic 1 Examples

This is a collection of examples for Ionic 1.

## Installation

Ionic 1 doesn't work well with Node 5.x, so use nvm to install the latest version of node 4.x.

```
nvm install 4
npm install -g cordova ionic
npm install -g ios-sim android-sim
```

To make the Invoke tasks work, you'll need to install some Python dependencies:

```
pip install virtualenvwrapper
mkvirtualenv static-site
pip install invoke
```

## Commands

| **Command** | **Description** |
|-------------|-----------------|
| `ionic serve` | Preview your app in the browser |
| `ionic serve -a` | Make server listen on 0.0.0.0 |
| `ionic start --list` | List all starter templates |
| `ionic start -t blank project-name` | Start a blank project |
| `ionic setup sass` | Make `ionic serve` also watch for changes to ionic.app.scss |
| `ionic emulate ios -l -c` | Run your app inside the iOS Simulator with live reload and logging to console |
| `invoke build` | Copy www directories into a build directory |
| `invoke serve` | Run a local HTTP server on port 8000 that serves the build directory |
| `invoke publish` | Create the build directory and publish it to GitHub Pages |

## Documentation links

- [CSS Components](http://ionicframework.com/docs/components/)
- [Announcing Ionic 1.2](http://blog.ionic.io/announcing-ionic-1-2/)
- [Ionic Angular directives](https://github.com/driftyco/ionic/tree/master/js/angular/directive)
- [Ionic in Action examples](https://github.com/ionic-in-action)
- [Ionic and TypeScript screencast tutorials](https://github.com/driftyco/ionic-typescript-example)
- [Boilerplate Ionic V1 seed project using ES6, Babel, Webpack, etc](https://github.com/ModusCreateOrg/ionic-seed)

## Notes

In Mobile Safari, there is a weird issue where scrolling is disabled when you start your drag on top of an iframe (e.g. embedded YouTube video). To fix this, you have to set overflow-scroll to true in ion-content. More details about the fix can be found in [Ionic issue 1151](https://github.com/driftyco/ionic/issues/1151#issuecomment-71114444). An example of the fix can be seen in [Embed Video example page](https://github.com/feihong/ionic-examples/blob/master/sidemenu/www/templates/video.html).
