/*
* Importe les classes utiles au bon déroulement de l'application
*/
import singTimeline from './singTimeline.js';
import Head from './head.js';
import Mouth from './mouth.js';
import Eye from './eye.js';
import Background from './background.js';

var s = function( p ) {
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

  /* Preload
  *  Charge les contenus (audio, image ...) pendant l'écran de chargement
  */
  p.preload = function() {
    //load img
    imgs[0] = p.loadImage('img/head1.svg');
    imgs[1] = p.loadImage('img/head2.svg');
    imgs[2] = p.loadImage('img/head3.svg');
    imgs[3] = p.loadImage('img/head4.svg');

    //load sound
    sounds[0] = p.loadSound('sound/voice.mp3');
    sounds[1] = p.loadSound('sound/instrumental.mp3');
  }

  /* Setup
  * Créer le canvas, instancie les objets le composant (heads,mouthes,eyes,backgrounds) et démarre les pistes audio
  */
  p.setup = function() {
    p.createCanvas(windowWidth, windowHeight);

    //create backgrounds
    for (var b = 0; b < imgs.length; b++) {
      var options = {
        width: windowWidth / 4,
        height: windowHeight,
        x: (windowWidth / 4) * b,
        y: 0,
        nbBlocs: 20
      };
      switch(b) {
        case 0:
          options.color = p.color(244,175,53);
          break;
        case 1:
          options.color = p.color(113,179,75);
          break;
        case 2:
          options.color = p.color(219,39,91);
          break;
        case 3:
          options.color = p.color(27,110,174);
          break;
      }
      var background = new Background(options);
      backgrounds.push(background);
    }

    //create heads
    for (var h = 0; h < imgs.length; h++) {
      var options = {
        width: imgs[h].width,
        height: imgs[h].height,
        x: (windowWidth / 4) * h + (windowWidth / 4 - imgs[h].width) / 2,
        y: windowHeight - imgs[h].height,
        img: imgs[h]
      };
      var head = new Head(options);
      heads.push(head);
    }

    //create mouthes
    for (var m = 0; m < imgs.length; m++) {
      var options = {
        width: 50,
        height: 0,
        x: (windowWidth / 4) * m + (windowWidth / 4 - 50) / 2,
        y: windowHeight - heads[m].height / 4,
        singTimeline: singTimeline[m],
        color: p.color(255,255,255)
      };
      switch(m) {
        case 0:
          options.x += 10;
          options.y -= 15;
          options.colorLips = p.color(130,96,51);
          break;
        case 1:
          options.y -= 10;
          options.colorLips = p.color(198,14,58);
          break;
        case 2:
          options.colorLips = p.color(185,153,126);
          break;
        case 3:
        options.y += 11;
          options.colorLips = p.color(127,91,42);
          break;
      }
      var mouth = new Mouth(options);
      mouthes.push(mouth);
    }

    //create eyes
    for (var e = 0; e < imgs.length; e++) {
      var options = {
        width: 35,
        height: 85,
        x: (windowWidth / 4) * e + (windowWidth / 4 - 35) / 2,
        y: windowHeight - heads[e].height / 2.5 - 85 / 2,
        color: p.color(0,0,0),
        space: 0,
        delay: p.round(p.random(600,1000))
      };
      switch(e) {
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
      var eye = new Eye(options);
      eyes.push(eye);
    }

    //play sounds
    for (var i = 0; i < sounds.length; i++) {
      amplitudes[i] = new p5.Amplitude();
      // sounds[i].setVolume(0);
      sounds[i].setVolume(0.5);
      sounds[i].play();
      amplitudes[i].setInput(sounds[i]);
    }

    fft = new p5.FFT();
    fft.setInput(sounds[1]);
  };

  /*  Draw
  * Redessine à chaque tick (60 fps) les éléments graphiques créant ainsi une illusion d'animation
  */
  p.draw = function() {
    p.background(255);

    var time = p.round(p.millis());
    var currentTime = sounds[0].currentTime();
    if (amplitudes[0]) {
      var levelVoice = amplitudes[0].getLevel();
    }
    if (fft) {
      fft.analyze();
      //Quatres plage de fréquence pour les quatre "tube" de couleur
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
      if((time % eyes[e].delay) == 0) {
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
          mouthes[m].height = p.map(levelVoice, 0, 0.07, 0, 15);
        } else {
          mouthes[m].height = 0;
        }
        //draw mouthes
        mouthes[m].draw(p);
      }
    }

    //all mouthes
    var allTimeline = singTimeline[4];
    for (var a = 0; a < allTimeline.length; a++) {
      if (currentTime >= allTimeline[a].start && currentTime <= allTimeline[a].stop) {
        for (var m = 0; m < mouthes.length; m++) {
          mouthes[m].sing = true;
          mouthes[m].height = p.map(levelVoice, 0, 0.07, 0, 15);
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

  /* WindowResized
  * Redimensionne les éléments en fonction de la taille de la fenêtre du navigateur
  */
  p.windowResized = function() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    //heads
    for (var h = 0; h < heads.length; h++) {
      heads[h].x = (windowWidth / 4) * h + (windowWidth / 4 - imgs[h].width) / 2;
      heads[h].y = windowHeight - imgs[h].height;
    }
    //mouthes
    for (var m = 0; m < mouthes.length; m++) {
      mouthes[m].x = (windowWidth / 4) * m + (windowWidth / 4 - 50) / 2;
      mouthes[m].y = windowHeight - heads[m].height / 4;
      switch(m) {
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
      eyes[e].x = (windowWidth / 4) * e + (windowWidth / 4 - 35) / 2;
      eyes[e].y = windowHeight - heads[e].height / 2.5 - 85 / 2;
      switch(e) {
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
      backgrounds[b].x = (windowWidth / 4) * b;
    }

    p.resizeCanvas(windowWidth, windowHeight);
  };
};

var myp5 = new p5(s);
