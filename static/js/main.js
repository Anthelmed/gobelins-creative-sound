(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Background = (function () {
  function Background(options) {
    _classCallCheck(this, Background);

    this.width = options.width;
    this.height = options.height;
    this.x = options.x;
    this.y = options.y;
    this.color = options.color;
    this.nbBlocs = options.nbBlocs;
    this.level = 0;
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw(p) {
      p.noStroke();
      var blockHeight = this.height / this.nbBlocs;
      for (var b = 0; b < this.nbBlocs; b++) {
        var alpha = p.map(b, 0, this.nbBlocs, 150, 200 + this.level * 2);
        var newColor = p.color(this.color.levels[0], this.color.levels[1], this.color.levels[2], alpha);
        p.fill(newColor);
        p.rect(this.x, blockHeight * b, this.width, blockHeight);
      }
    }
  }]);

  return Background;
})();

;

exports.default = Background;

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Eye = (function () {
  function Eye(options) {
    _classCallCheck(this, Eye);

    this.width = options.width;
    this.height = options.height;
    this.x = options.x;
    this.y = options.y;
    this.color = options.color;
    this.space = options.space;
    this.delay = options.delay;
    this.blink = options.blink;
  }

  _createClass(Eye, [{
    key: "draw",
    value: function draw(p) {
      var _this = this;

      var color;
      if (this.blink) {
        color = p.color(this.color.levels[0], this.color.levels[1], this.color.levels[2], 20);
        setTimeout(function () {
          _this.blink = false;
          _this.delay = p.round(p.random(600, 1000));
        }, p.round(p.random(100, 150)));
      } else {
        color = this.color;
      }
      p.noStroke();
      p.fill(color);
      p.rect(this.x - this.space / 2, this.y, this.width, this.height);
      p.rect(this.x + this.space / 2, this.y, this.width, this.height);
    }
  }]);

  return Eye;
})();

;

exports.default = Eye;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Head = (function () {
  function Head(options) {
    _classCallCheck(this, Head);

    this.width = options.width;
    this.height = options.height;
    this.x = options.x;
    this.y = options.y;
    this.img = options.img;
  }

  _createClass(Head, [{
    key: "draw",
    value: function draw(p) {
      p.image(this.img, this.x, this.y);
    }
  }]);

  return Head;
})();

;

exports.default = Head;

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Mouth = (function () {
  function Mouth(options) {
    _classCallCheck(this, Mouth);

    this.width = options.width;
    this.height = options.height;
    this.x = options.x;
    this.y = options.y;
    this.singTimeline = options.singTimeline;
    this.sing = false;
    this.color = options.color;
    this.colorLips = options.colorLips;
  }

  _createClass(Mouth, [{
    key: "draw",
    value: function draw(p) {
      p.stroke(this.colorLips);
      p.strokeWeight(4);
      p.fill(this.color);
      p.rect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Mouth;
})();

;

exports.default = Mouth;

},{}],5:[function(require,module,exports){
"use strict";

var singTimeline = [[{
  start: 7.3,
  stop: 15.17
}, {
  start: 29,
  stop: 41
}, {
  start: 118.4,
  stop: 118.8
}, {
  start: 124.6,
  stop: 148.3
}, {
  start: 159.4,
  stop: 163.2
}], [{
  start: 44.1,
  stop: 59.5
}, {
  start: 104.6,
  stop: 118.3
}, {
  start: 169.5,
  stop: 185
}], [{
  start: 73.7,
  stop: 86.7
}], [{
  start: 88.1,
  stop: 104.2
}], [{
  start: 15.35,
  stop: 29
}, {
  start: 41,
  stop: 44.1
}, {
  start: 59.5,
  stop: 73.2
}, {
  start: 87.2,
  stop: 88
}, {
  start: 136.2,
  stop: 137
}, {
  start: 140,
  stop: 140.4
}, {
  start: 142.8,
  stop: 144.6
}, {
  start: 185,
  stop: 200
}]];

module.exports = singTimeline;

},{}],6:[function(require,module,exports){
'use strict';

var _singTimeline = require('./singTimeline.js');

var _singTimeline2 = _interopRequireDefault(_singTimeline);

var _head = require('./head.js');

var _head2 = _interopRequireDefault(_head);

var _mouth = require('./mouth.js');

var _mouth2 = _interopRequireDefault(_mouth);

var _eye = require('./eye.js');

var _eye2 = _interopRequireDefault(_eye);

var _background = require('./background.js');

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var s = function s(p) {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var imgs = [];
  var sounds = [];
  var amplitudes = [];
  var fft;
  var energizes = [];

  var heads = [];
  var mouthes = [];
  var eyes = [];
  var backgrounds = [];

  //preload
  p.preload = function () {
    //load img
    imgs[0] = p.loadImage('img/head1.svg');
    imgs[1] = p.loadImage('img/head2.svg');
    imgs[2] = p.loadImage('img/head3.svg');
    imgs[3] = p.loadImage('img/head4.svg');

    //load sound
    sounds[0] = p.loadSound('sound/voice.mp3');
    sounds[1] = p.loadSound('sound/instrumental.mp3');
  };

  //setup
  p.setup = function () {
    p.createCanvas(windowWidth, windowHeight);

    //create backgrounds
    for (var b = 0; b < imgs.length; b++) {
      var options = {
        width: windowWidth / 4,
        height: windowHeight,
        x: windowWidth / 4 * b,
        y: 0,
        nbBlocs: 20
      };
      switch (b) {
        case 0:
          options.color = p.color(244, 175, 53);
          break;
        case 1:
          options.color = p.color(113, 179, 75);
          break;
        case 2:
          options.color = p.color(219, 39, 91);
          break;
        case 3:
          options.color = p.color(27, 110, 174);
          break;
      }
      var background = new _background2.default(options);
      backgrounds.push(background);
    }

    //create heads
    for (var h = 0; h < imgs.length; h++) {
      var options = {
        width: imgs[h].width,
        height: imgs[h].height,
        x: windowWidth / 4 * h + (windowWidth / 4 - imgs[h].width) / 2,
        y: windowHeight - imgs[h].height,
        img: imgs[h]
      };
      var head = new _head2.default(options);
      heads.push(head);
    }

    //create mouthes
    for (var m = 0; m < imgs.length; m++) {
      var options = {
        width: 50,
        height: 0,
        x: windowWidth / 4 * m + (windowWidth / 4 - 50) / 2,
        y: windowHeight - heads[m].height / 4,
        singTimeline: _singTimeline2.default[m],
        color: p.color(255, 255, 255)
      };
      switch (m) {
        case 0:
          options.x += 10;
          options.y -= 15;
          options.colorLips = p.color(130, 96, 51);
          break;
        case 1:
          options.y -= 10;
          options.colorLips = p.color(198, 14, 58);
          break;
        case 2:
          options.colorLips = p.color(185, 153, 126);
          break;
        case 3:
          options.y += 11;
          options.colorLips = p.color(127, 91, 42);
          break;
      }
      var mouth = new _mouth2.default(options);
      mouthes.push(mouth);
    }

    //create eyes
    for (var e = 0; e < imgs.length; e++) {
      var options = {
        width: 35,
        height: 85,
        x: windowWidth / 4 * e + (windowWidth / 4 - 35) / 2,
        y: windowHeight - heads[e].height / 2.5 - 85 / 2,
        color: p.color(0, 0, 0),
        space: 0,
        delay: p.round(p.random(600, 1000))
      };
      switch (e) {
        case 0:
          options.x += 10;
          options.width = 40;
          options.space = 155;
          break;
        case 1:
          options.space = 155;
          break;
        case 2:
          options.y += 6;
          options.height -= 11;
          options.width = 40;
          options.space = 130;
          break;
        case 3:
          options.y += 11;
          options.height += 3;
          options.space = 145;
          break;
      }
      var eye = new _eye2.default(options);
      eyes.push(eye);
    }

    //play sounds
    for (var i = 0; i < sounds.length; i++) {
      amplitudes[i] = new p5.Amplitude();
      // sounds[i].setVolume(0);
      sounds[i].setVolume(0.1);
      sounds[i].play();
      amplitudes[i].setInput(sounds[i]);
    }

    fft = new p5.FFT();
    fft.setInput(sounds[1]);
  };

  //draw
  p.draw = function () {
    p.background(255);

    var time = p.round(p.millis());
    var currentTime = sounds[0].currentTime();
    if (amplitudes[0]) {
      var levelVoice = amplitudes[0].getLevel();
    }
    if (fft) {
      fft.analyze();
      energizes[0] = fft.getEnergy('bass');
      energizes[1] = fft.getEnergy('lowMid');
      energizes[2] = fft.getEnergy('mid');
      energizes[3] = fft.getEnergy('highMid');
    }

    //backgrounds
    for (var b = 0; b < backgrounds.length; b++) {
      backgrounds[b].level = energizes[b];
      //draw backgrounds
      backgrounds[b].draw(p);
    }

    //heads
    for (var h = 0; h < heads.length; h++) {
      //draw heads
      heads[h].draw(p);
    }

    //eyes
    for (var e = 0; e < eyes.length; e++) {
      if (time % eyes[e].delay == 0) {
        eyes[e].blink = true;
      }
      //draw eyes
      eyes[e].draw(p);
    }

    //mouthes
    for (var m = 0; m < mouthes.length; m++) {
      //reset sing
      mouthes[m].sing = false;
      for (var s = 0; s < mouthes[m].singTimeline.length; s++) {
        if (currentTime >= mouthes[m].singTimeline[s].start && currentTime <= mouthes[m].singTimeline[s].stop) {
          mouthes[m].sing = true;
          mouthes[m].height = p.map(levelVoice, 0, 0.013, 0, 15);
        } else {
          mouthes[m].height = 0;
        }
        //draw mouthes
        mouthes[m].draw(p);
      }
    }

    //all
    var allTimeline = _singTimeline2.default[4];
    for (var a = 0; a < allTimeline.length; a++) {
      if (currentTime >= allTimeline[a].start && currentTime <= allTimeline[a].stop) {
        for (var m = 0; m < mouthes.length; m++) {
          mouthes[m].sing = true;
          console.log(levelVoice);
          mouthes[m].height = p.map(levelVoice, 0, 0.013, 0, 15);
          //draw mouthes
          mouthes[m].draw(p);
        }
      } else {
        for (var m = 0; m < mouthes.length; m++) {
          mouthes[m].height = 0;
          //draw mouthes
          mouthes[m].draw(p);
        }
      }
    }
  };

  //resize
  p.windowResized = function () {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    //heads
    for (var h = 0; h < heads.length; h++) {
      heads[h].x = windowWidth / 4 * h + (windowWidth / 4 - imgs[h].width) / 2;
      heads[h].y = windowHeight - imgs[h].height;
    }
    //mouthes
    for (var m = 0; m < mouthes.length; m++) {
      mouthes[m].x = windowWidth / 4 * m + (windowWidth / 4 - 50) / 2;
      mouthes[m].y = windowHeight - heads[m].height / 4;
      switch (m) {
        case 0:
          mouthes[m].x += 10;
          mouthes[m].y -= 15;
          break;
        case 1:
          mouthes[m].y -= 10;
          break;
        case 3:
          mouthes[m].y += 11;
          break;
      }
    }
    //eyes
    for (var e = 0; e < eyes.length; e++) {
      eyes[e].x = windowWidth / 4 * e + (windowWidth / 4 - 35) / 2;
      eyes[e].y = windowHeight - heads[e].height / 2.5 - 85 / 2;
      switch (e) {
        case 0:
          eyes[e].x += 10;
          break;
        case 2:
          eyes[e].y += 6;
          break;
        case 3:
          eyes[e].y += 11;
          break;
      }
    }
    //backgrounds
    for (var b = 0; b < backgrounds.length; b++) {
      backgrounds[b].width = windowWidth / 4;
      backgrounds[b].height = windowHeight;
      backgrounds[b].x = windowWidth / 4 * b;
    }

    p.resizeCanvas(windowWidth, windowHeight);
  };
};

var myp5 = new p5(s);

},{"./background.js":1,"./eye.js":2,"./head.js":3,"./mouth.js":4,"./singTimeline.js":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYmFja2dyb3VuZC5qcyIsImFwcC9leWUuanMiLCJhcHAvaGVhZC5qcyIsImFwcC9tb3V0aC5qcyIsImFwcC9zaW5nVGltZWxpbmUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBTSxVQUFVLGdCQUNkO1dBREksVUFBVSxDQUNGLE9BQU8sRUFBRTswQkFEakIsVUFBVSxFQUVaOztRQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQUFDM0I7UUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEFBQzdCO1FBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxBQUNuQjtRQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQUFDbkI7UUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEFBQzNCO1FBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxBQUMvQjtRQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztHQUNsQjs7ZUFUSyxVQUFVOzt5QkFXVCxDQUFDLEVBQUUsQUFDTjtPQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQUFDYjtVQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQUFDN0M7V0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQUFDckM7WUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcs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QUMsQUFDdkM7aUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEFBQ3JDO2lCQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEFBQUMsV0FBVyxHQUFHLENBQUMsR0FBSSxDQUFDLENBQUM7S0FDMUMsQUFFRDs7S0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7R0FDM0MsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQmFja2dyb3VuZCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5uYkJsb2NzID0gb3B0aW9ucy5uYkJsb2NzO1xuICAgIHRoaXMubGV2ZWwgPSAwO1xufTtcblxuICBkcmF3KHApIHtcbiAgICBwLm5vU3Ryb2tlKCk7XG4gICAgdmFyIGJsb2NrSGVpZ2h0ID0gdGhpcy5oZWlnaHQgLyB0aGlzLm5iQmxvY3M7XG4gICAgZm9yICh2YXIgYiA9IDA7IGIgPCB0aGlzLm5iQmxvY3M7IGIrKykge1xuICAgICAgdmFyIGFscGhhID0gcC5tYXAoYiwgMCwgdGhpcy5uYkJsb2NzLCAxNTAsIDIwMCArIHRoaXMubGV2ZWwgKiAyKTtcbiAgICAgIHZhciBuZXdDb2xvciA9IHAuY29sb3IodGhpcy5jb2xvci5sZXZlbHNbMF0sdGhpcy5jb2xvci5sZXZlbHNbMV0sdGhpcy5jb2xvci5sZXZlbHNbMl0sIGFscGhhKTtcbiAgICAgIHAuZmlsbChuZXdDb2xvcik7XG4gICAgICBwLnJlY3QodGhpcy54LCBibG9ja0hlaWdodCAqIGIsIHRoaXMud2lkdGgsIGJsb2NrSGVpZ2h0KTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuIiwiY2xhc3MgRXllIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgIHRoaXMueSA9IG9wdGlvbnMueTtcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB0aGlzLnNwYWNlID0gb3B0aW9ucy5zcGFjZTtcbiAgICB0aGlzLmRlbGF5ID0gb3B0aW9ucy5kZWxheTtcbiAgICB0aGlzLmJsaW5rID0gb3B0aW9ucy5ibGluaztcbn07XG5cbiAgZHJhdyhwKSB7XG4gICAgICB2YXIgY29sb3I7XG4gICAgICBpZiAodGhpcy5ibGluaykge1xuICAgICAgICBjb2xvciA9IHAuY29sb3IodGhpcy5jb2xvci5sZXZlbHNbMF0sdGhpcy5jb2xvci5sZXZlbHNbMV0sdGhpcy5jb2xvci5sZXZlbHNbMl0sIDIwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICB0aGlzLmJsaW5rID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kZWxheSA9IHAucm91bmQocC5yYW5kb20oNjAwLDEwMDApKTtcbiAgICAgICAgfSxwLnJvdW5kKHAucmFuZG9tKDEwMCwxNTApKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICB9XG4gICAgICBwLm5vU3Ryb2tlKCk7XG4gICAgICBwLmZpbGwoY29sb3IpO1xuICAgICAgcC5yZWN0KHRoaXMueCAtIHRoaXMuc3BhY2UgLyAyLCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIHAucmVjdCh0aGlzLnggKyB0aGlzLnNwYWNlIC8gMiwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeWU7XG4iLCJjbGFzcyBIZWFkIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgIHRoaXMueSA9IG9wdGlvbnMueTtcbiAgICB0aGlzLmltZyA9IG9wdGlvbnMuaW1nO1xufTtcblxuICBkcmF3KHApIHtcbiAgICBwLmltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkO1xuIiwiY2xhc3MgTW91dGgge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMuc2luZ1RpbWVsaW5lID0gb3B0aW9ucy5zaW5nVGltZWxpbmU7XG4gICAgdGhpcy5zaW5nID0gZmFsc2U7XG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgdGhpcy5jb2xvckxpcHMgPSBvcHRpb25zLmNvbG9yTGlwcztcbiAgfTtcblxuICBkcmF3KHApIHtcbiAgICBwLnN0cm9rZSh0aGlzLmNvbG9yTGlwcyk7XG4gICAgcC5zdHJva2VXZWlnaHQoNCk7XG4gICAgcC5maWxsKHRoaXMuY29sb3IpO1xuICAgIHAucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW91dGg7XG4iLCJ2YXIgc2luZ1RpbWVsaW5lID0gW1xuICBbXG4gICAge1xuICAgICAgc3RhcnQ6IDcuMyxcbiAgICAgIHN0b3A6IDE1LjE3XG4gICAgfSxcbiAgICB7XG4gICAgICBzdGFydDogMjksXG4gICAgICBzdG9wOiA0MVxuICAgIH0sXG4gICAge1xuICAgICAgc3RhcnQ6IDExOC40LFxuICAgICAgc3RvcDogMTE4LjhcbiAgICB9LFxuICAgIHtcbiAgICAgIHN0YXJ0OiAxMjQuNixcbiAgICAgIHN0b3A6IDE0OC4zXG4gICAgfSxcbiAgICB7XG4gICAgICBzdGFydDogMTU5LjQsXG4gICAgICBzdG9wOiAxNjMuMlxuICAgIH1cbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHN0YXJ0OiA0NC4xLFxuICAgICAgc3RvcDogNTkuNVxuICAgIH0sXG4gICAge1xuICAgICAgc3RhcnQ6IDEwNC42LFxuICAgICAgc3RvcDogMTE4LjNcbiAgICB9LFxuICAgIHtcbiAgICAgIHN0YXJ0OiAxNjkuNSxcbiAgICAgIHN0b3A6IDE4NVxuICAgIH1cbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHN0YXJ0OiA3My43LFxuICAgICAgc3RvcDogODYuN1xuICAgIH1cbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHN0YXJ0OiA4OC4xLFxuICAgICAgc3RvcDogMTA0LjJcbiAgICB9XG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICBzdGFydDogMTUuMzUsXG4gICAgICBzdG9wOiAyOVxuICAgIH0sXG4gICAge1xuICAgICAgc3RhcnQ6IDQxLFxuICAgICAgc3RvcDogNDQuMVxuICAgIH0sXG4gICAge1xuICAgICAgc3RhcnQ6IDU5LjUsXG4gICAgICBzdG9wOiA3My4yXG4gICAgfSxcbiAgICB7XG4gICAgICBzdGFydDogODcuMixcbiAgICAgIHN0b3A6IDg4XG4gICAgfSxcbiAgICB7XG4gICAgICBzdGFydDogMTM2LjIsXG4gICAgICBzdG9wOiAxMzdcbiAgICB9LFxuICAgIHtcbiAgICAgIHN0YXJ0OiAxNDAsXG4gICAgICBzdG9wOiAxNDAuNFxuICAgIH0sXG4gICAge1xuICAgICAgc3RhcnQ6IDE0Mi44LFxuICAgICAgc3RvcDogMTQ0LjZcbiAgICB9LFxuICAgIHtcbiAgICAgIHN0YXJ0OiAxODUsXG4gICAgICBzdG9wOiAyMDBcbiAgICB9XG4gIF1cbl1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5nVGltZWxpbmU7XG4iLCJpbXBvcnQgc2luZ1RpbWVsaW5lIGZyb20gJy4vc2luZ1RpbWVsaW5lLmpzJztcbmltcG9ydCBIZWFkIGZyb20gJy4vaGVhZC5qcyc7XG5pbXBvcnQgTW91dGggZnJvbSAnLi9tb3V0aC5qcyc7XG5pbXBvcnQgRXllIGZyb20gJy4vZXllLmpzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vYmFja2dyb3VuZC5qcyc7XG5cbnZhciBzID0gZnVuY3Rpb24oIHAgKSB7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgaW1ncyA9IFtdO1xuICB2YXIgc291bmRzID0gW107XG4gIHZhciBhbXBsaXR1ZGVzID0gW107XG4gIHZhciBmZnQ7XG4gIHZhciBlbmVyZ2l6ZXMgPSBbXTtcblxuICB2YXIgaGVhZHMgPSBbXTtcbiAgdmFyIG1vdXRoZXMgPSBbXTtcbiAgdmFyIGV5ZXMgPSBbXTtcbiAgdmFyIGJhY2tncm91bmRzID0gW107XG5cbiAgLy9wcmVsb2FkXG4gIHAucHJlbG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vbG9hZCBpbWdcbiAgICBpbWdzWzBdID0gcC5sb2FkSW1hZ2UoJ2ltZy9oZWFkMS5zdmcnKTtcbiAgICBpbWdzWzFdID0gcC5sb2FkSW1hZ2UoJ2ltZy9oZWFkMi5zdmcnKTtcbiAgICBpbWdzWzJdID0gcC5sb2FkSW1hZ2UoJ2ltZy9oZWFkMy5zdmcnKTtcbiAgICBpbWdzWzNdID0gcC5sb2FkSW1hZ2UoJ2ltZy9oZWFkNC5zdmcnKTtcblxuICAgIC8vbG9hZCBzb3VuZFxuICAgIHNvdW5kc1swXSA9IHAubG9hZFNvdW5kKCdzb3VuZC92b2ljZS5tcDMnKTtcbiAgICBzb3VuZHNbMV0gPSBwLmxvYWRTb3VuZCgnc291bmQvaW5zdHJ1bWVudGFsLm1wMycpO1xuICB9XG5cbiAgLy9zZXR1cFxuICBwLnNldHVwID0gZnVuY3Rpb24oKSB7XG4gICAgcC5jcmVhdGVDYW52YXMod2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCk7XG5cbiAgICAvL2NyZWF0ZSBiYWNrZ3JvdW5kc1xuICAgIGZvciAodmFyIGIgPSAwOyBiIDwgaW1ncy5sZW5ndGg7IGIrKykge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHdpZHRoOiB3aW5kb3dXaWR0aCAvIDQsXG4gICAgICAgIGhlaWdodDogd2luZG93SGVpZ2h0LFxuICAgICAgICB4OiAod2luZG93V2lkdGggLyA0KSAqIGIsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIG5iQmxvY3M6IDIwXG4gICAgICB9O1xuICAgICAgc3dpdGNoKGIpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIG9wdGlvbnMuY29sb3IgPSBwLmNvbG9yKDI0NCwxNzUsNTMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgb3B0aW9ucy5jb2xvciA9IHAuY29sb3IoMTEzLDE3OSw3NSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBvcHRpb25zLmNvbG9yID0gcC5jb2xvcigyMTksMzksOTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgb3B0aW9ucy5jb2xvciA9IHAuY29sb3IoMjcsMTEwLDE3NCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YXIgYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKG9wdGlvbnMpO1xuICAgICAgYmFja2dyb3VuZHMucHVzaChiYWNrZ3JvdW5kKTtcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBoZWFkc1xuICAgIGZvciAodmFyIGggPSAwOyBoIDwgaW1ncy5sZW5ndGg7IGgrKykge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHdpZHRoOiBpbWdzW2hdLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGltZ3NbaF0uaGVpZ2h0LFxuICAgICAgICB4OiAod2luZG93V2lkdGggLyA0KSAqIGggKyAod2luZG93V2lkdGggLyA0IC0gaW1nc1toXS53aWR0aCkgLyAyLFxuICAgICAgICB5OiB3aW5kb3dIZWlnaHQgLSBpbWdzW2hdLmhlaWdodCxcbiAgICAgICAgaW1nOiBpbWdzW2hdXG4gICAgICB9O1xuICAgICAgdmFyIGhlYWQgPSBuZXcgSGVhZChvcHRpb25zKTtcbiAgICAgIGhlYWRzLnB1c2goaGVhZCk7XG4gICAgfVxuXG4gICAgLy9jcmVhdGUgbW91dGhlc1xuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgaW1ncy5sZW5ndGg7IG0rKykge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB4OiAod2luZG93V2lkdGggLyA0KSAqIG0gKyAod2luZG93V2lkdGggLyA0IC0gNTApIC8gMixcbiAgICAgICAgeTogd2luZG93SGVpZ2h0IC0gaGVhZHNbbV0uaGVpZ2h0IC8gNCxcbiAgICAgICAgc2luZ1RpbWVsaW5lOiBzaW5nVGltZWxpbmVbbV0sXG4gICAgICAgIGNvbG9yOiBwLmNvbG9yKDI1NSwyNTUsMjU1KVxuICAgICAgfTtcbiAgICAgIHN3aXRjaChtKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBvcHRpb25zLnggKz0gMTA7XG4gICAgICAgICAgb3B0aW9ucy55IC09IDE1O1xuICAgICAgICAgIG9wdGlvbnMuY29sb3JMaXBzID0gcC5jb2xvcigxMzAsOTYsNTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgb3B0aW9ucy55IC09IDEwO1xuICAgICAgICAgIG9wdGlvbnMuY29sb3JMaXBzID0gcC5jb2xvcigxOTgsMTQsNTgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgb3B0aW9ucy5jb2xvckxpcHMgPSBwLmNvbG9yKDE4NSwxNTMsMTI2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICBvcHRpb25zLnkgKz0gMTE7XG4gICAgICAgICAgb3B0aW9ucy5jb2xvckxpcHMgPSBwLmNvbG9yKDEyNyw5MSw0Mik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YXIgbW91dGggPSBuZXcgTW91dGgob3B0aW9ucyk7XG4gICAgICBtb3V0aGVzLnB1c2gobW91dGgpO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIGV5ZXNcbiAgICBmb3IgKHZhciBlID0gMDsgZSA8IGltZ3MubGVuZ3RoOyBlKyspIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICB3aWR0aDogMzUsXG4gICAgICAgIGhlaWdodDogODUsXG4gICAgICAgIHg6ICh3aW5kb3dXaWR0aCAvIDQpICogZSArICh3aW5kb3dXaWR0aCAvIDQgLSAzNSkgLyAyLFxuICAgICAgICB5OiB3aW5kb3dIZWlnaHQgLSBoZWFkc1tlXS5oZWlnaHQgLyAyLjUgLSA4NSAvIDIsXG4gICAgICAgIGNvbG9yOiBwLmNvbG9yKDAsMCwwKSxcbiAgICAgICAgc3BhY2U6IDAsXG4gICAgICAgIGRlbGF5OiBwLnJvdW5kKHAucmFuZG9tKDYwMCwxMDAwKSlcbiAgICAgIH07XG4gICAgICBzd2l0Y2goZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgb3B0aW9ucy54ICs9IDEwO1xuICAgICAgICAgIG9wdGlvbnMud2lkdGggPSA0MDtcbiAgICAgICAgICBvcHRpb25zLnNwYWNlID0gMTU1O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgb3B0aW9ucy5zcGFjZSA9IDE1NTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG9wdGlvbnMueSArPSA2O1xuICAgICAgICAgIG9wdGlvbnMuaGVpZ2h0IC09IDExO1xuICAgICAgICAgIG9wdGlvbnMud2lkdGggPSA0MDtcbiAgICAgICAgICBvcHRpb25zLnNwYWNlID0gMTMwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgb3B0aW9ucy55ICs9IDExO1xuICAgICAgICAgIG9wdGlvbnMuaGVpZ2h0ICs9IDM7XG4gICAgICAgICAgb3B0aW9ucy5zcGFjZSA9IDE0NTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHZhciBleWUgPSBuZXcgRXllKG9wdGlvbnMpO1xuICAgICAgZXllcy5wdXNoKGV5ZSk7XG4gICAgfVxuXG4gICAgLy9wbGF5IHNvdW5kc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbXBsaXR1ZGVzW2ldID0gbmV3IHA1LkFtcGxpdHVkZSgpO1xuICAgICAgLy8gc291bmRzW2ldLnNldFZvbHVtZSgwKTtcbiAgICAgIHNvdW5kc1tpXS5zZXRWb2x1bWUoMC4xKTtcbiAgICAgIHNvdW5kc1tpXS5wbGF5KCk7XG4gICAgICBhbXBsaXR1ZGVzW2ldLnNldElucHV0KHNvdW5kc1tpXSk7XG4gICAgfVxuXG4gICAgZmZ0ID0gbmV3IHA1LkZGVCgpO1xuICAgIGZmdC5zZXRJbnB1dChzb3VuZHNbMV0pO1xuICB9O1xuXG4gIC8vZHJhd1xuICBwLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICBwLmJhY2tncm91bmQoMjU1KTtcblxuICAgIHZhciB0aW1lID0gcC5yb3VuZChwLm1pbGxpcygpKTtcbiAgICB2YXIgY3VycmVudFRpbWUgPSBzb3VuZHNbMF0uY3VycmVudFRpbWUoKTtcbiAgICBpZiAoYW1wbGl0dWRlc1swXSkge1xuICAgICAgdmFyIGxldmVsVm9pY2UgPSBhbXBsaXR1ZGVzWzBdLmdldExldmVsKCk7XG4gICAgfVxuICAgIGlmIChmZnQpIHtcbiAgICAgIGZmdC5hbmFseXplKCk7XG4gICAgICBlbmVyZ2l6ZXNbMF0gPSBmZnQuZ2V0RW5lcmd5KCdiYXNzJyk7XG4gICAgICBlbmVyZ2l6ZXNbMV0gPSBmZnQuZ2V0RW5lcmd5KCdsb3dNaWQnKTtcbiAgICAgIGVuZXJnaXplc1syXSA9IGZmdC5nZXRFbmVyZ3koJ21pZCcpO1xuICAgICAgZW5lcmdpemVzWzNdID0gZmZ0LmdldEVuZXJneSgnaGlnaE1pZCcpO1xuICAgIH1cblxuXG4gICAgLy9iYWNrZ3JvdW5kc1xuICAgIGZvciAodmFyIGIgPSAwOyBiIDwgYmFja2dyb3VuZHMubGVuZ3RoOyBiKyspIHtcbiAgICAgIGJhY2tncm91bmRzW2JdLmxldmVsID0gZW5lcmdpemVzW2JdO1xuICAgICAgLy9kcmF3IGJhY2tncm91bmRzXG4gICAgICBiYWNrZ3JvdW5kc1tiXS5kcmF3KHApO1xuICAgIH1cblxuICAgIC8vaGVhZHNcbiAgICBmb3IgKHZhciBoID0gMDsgaCA8IGhlYWRzLmxlbmd0aDsgaCsrKSB7XG4gICAgICAvL2RyYXcgaGVhZHNcbiAgICAgIGhlYWRzW2hdLmRyYXcocCk7XG4gICAgfVxuXG4gICAgLy9leWVzXG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCBleWVzLmxlbmd0aDsgZSsrKSB7XG4gICAgICBpZigodGltZSAlIGV5ZXNbZV0uZGVsYXkpID09IDApIHtcbiAgICAgICAgZXllc1tlXS5ibGluayA9IHRydWU7XG4gICAgICB9XG4gICAgICAvL2RyYXcgZXllc1xuICAgICAgZXllc1tlXS5kcmF3KHApO1xuICAgIH1cblxuICAgIC8vbW91dGhlc1xuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgbW91dGhlcy5sZW5ndGg7IG0rKykge1xuICAgICAgLy9yZXNldCBzaW5nXG4gICAgICBtb3V0aGVzW21dLnNpbmcgPSBmYWxzZTtcbiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgbW91dGhlc1ttXS5zaW5nVGltZWxpbmUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lID49IG1vdXRoZXNbbV0uc2luZ1RpbWVsaW5lW3NdLnN0YXJ0ICYmIGN1cnJlbnRUaW1lIDw9IG1vdXRoZXNbbV0uc2luZ1RpbWVsaW5lW3NdLnN0b3ApIHtcbiAgICAgICAgICBtb3V0aGVzW21dLnNpbmcgPSB0cnVlO1xuICAgICAgICAgIG1vdXRoZXNbbV0uaGVpZ2h0ID0gcC5tYXAobGV2ZWxWb2ljZSwgMCwgMC4wMTMsIDAsIDE1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3V0aGVzW21dLmhlaWdodCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy9kcmF3IG1vdXRoZXNcbiAgICAgICAgbW91dGhlc1ttXS5kcmF3KHApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vYWxsXG4gICAgdmFyIGFsbFRpbWVsaW5lID0gc2luZ1RpbWVsaW5lWzRdO1xuICAgIGZvciAodmFyIGEgPSAwOyBhIDwgYWxsVGltZWxpbmUubGVuZ3RoOyBhKyspIHtcbiAgICAgIGlmIChjdXJyZW50VGltZSA+PSBhbGxUaW1lbGluZVthXS5zdGFydCAmJiBjdXJyZW50VGltZSA8PSBhbGxUaW1lbGluZVthXS5zdG9wKSB7XG4gICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgbW91dGhlcy5sZW5ndGg7IG0rKykge1xuICAgICAgICAgIG1vdXRoZXNbbV0uc2luZyA9IHRydWU7XG4gICAgICAgICAgY29uc29sZS5sb2cobGV2ZWxWb2ljZSk7XG4gICAgICAgICAgbW91dGhlc1ttXS5oZWlnaHQgPSBwLm1hcChsZXZlbFZvaWNlLCAwLCAwLjAxMywgMCwgMTUpO1xuICAgICAgICAgIC8vZHJhdyBtb3V0aGVzXG4gICAgICAgICAgbW91dGhlc1ttXS5kcmF3KHApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBtID0gMDsgbSA8IG1vdXRoZXMubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICBtb3V0aGVzW21dLmhlaWdodCA9IDA7XG4gICAgICAgICAgLy9kcmF3IG1vdXRoZXNcbiAgICAgICAgICBtb3V0aGVzW21dLmRyYXcocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICAvL3Jlc2l6ZVxuICBwLndpbmRvd1Jlc2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIC8vaGVhZHNcbiAgICBmb3IgKHZhciBoID0gMDsgaCA8IGhlYWRzLmxlbmd0aDsgaCsrKSB7XG4gICAgICBoZWFkc1toXS54ID0gKHdpbmRvd1dpZHRoIC8gNCkgKiBoICsgKHdpbmRvd1dpZHRoIC8gNCAtIGltZ3NbaF0ud2lkdGgpIC8gMjtcbiAgICAgIGhlYWRzW2hdLnkgPSB3aW5kb3dIZWlnaHQgLSBpbWdzW2hdLmhlaWdodDtcbiAgICB9XG4gICAgLy9tb3V0aGVzXG4gICAgZm9yICh2YXIgbSA9IDA7IG0gPCBtb3V0aGVzLmxlbmd0aDsgbSsrKSB7XG4gICAgICBtb3V0aGVzW21dLnggPSAod2luZG93V2lkdGggLyA0KSAqIG0gKyAod2luZG93V2lkdGggLyA0IC0gNTApIC8gMjtcbiAgICAgIG1vdXRoZXNbbV0ueSA9IHdpbmRvd0hlaWdodCAtIGhlYWRzW21dLmhlaWdodCAvIDQ7XG4gICAgICBzd2l0Y2gobSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgbW91dGhlc1ttXS54ICs9IDEwO1xuICAgICAgICAgIG1vdXRoZXNbbV0ueSAtPSAxNTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1vdXRoZXNbbV0ueSAtPSAxMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1vdXRoZXNbbV0ueSArPSAxMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgLy9leWVzXG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCBleWVzLmxlbmd0aDsgZSsrKSB7XG4gICAgICBleWVzW2VdLnggPSAod2luZG93V2lkdGggLyA0KSAqIGUgKyAod2luZG93V2lkdGggLyA0IC0gMzUpIC8gMjtcbiAgICAgIGV5ZXNbZV0ueSA9IHdpbmRvd0hlaWdodCAtIGhlYWRzW2VdLmhlaWdodCAvIDIuNSAtIDg1IC8gMjtcbiAgICAgIHN3aXRjaChlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBleWVzW2VdLnggKz0gMTA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBleWVzW2VdLnkgKz0gNjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGV5ZXNbZV0ueSArPSAxMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgLy9iYWNrZ3JvdW5kc1xuICAgIGZvciAodmFyIGIgPSAwOyBiIDwgYmFja2dyb3VuZHMubGVuZ3RoOyBiKyspIHtcbiAgICAgIGJhY2tncm91bmRzW2JdLndpZHRoID0gd2luZG93V2lkdGggLyA0O1xuICAgICAgYmFja2dyb3VuZHNbYl0uaGVpZ2h0ID0gd2luZG93SGVpZ2h0O1xuICAgICAgYmFja2dyb3VuZHNbYl0ueCA9ICh3aW5kb3dXaWR0aCAvIDQpICogYjtcbiAgICB9XG5cbiAgICBwLnJlc2l6ZUNhbnZhcyh3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KTtcbiAgfTtcbn07XG5cbnZhciBteXA1ID0gbmV3IHA1KHMpO1xuIl19
