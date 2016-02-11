import 'ionic-sdk/release/js/ionic.bundle'

const MESSAGES = [
  'Hello World',
  'Hola Mundo',
  'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ',
  'こんにちは世界',
  '你好世界',
  'Përshendetje Botë',
  'مرحبا بالعالم',
  'Բարեւ, աշխարհ',
  'হ্যালো দুনিয়া',
  'Saluton mondo',
  'გამარჯობა მსოფლიო',
]

function getMessage() {
  let index = Math.floor(Math.random() * MESSAGES.length)
  return MESSAGES[index]
}

angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('HelloWorldCtrl', ($scope) => {
  let minFont = 12
  var fontIndex = 0

  $scope.message = null
  $scope.myStyle = null

  $scope.update = () => {
    $scope.message = getMessage()
    fontIndex = (fontIndex + 3) % 80
    $scope.myStyle = {
      'font-size': `${minFont + fontIndex}px`
    }
  }
  $scope.update()
})
