class Eye {
  constructor(options) {
    this.width = options.width;
    this.height = options.height;
    this.x = options.x;
    this.y = options.y;
    this.color = options.color;
    this.space = options.space;
    this.delay = options.delay;
    this.blink = options.blink;
};

  draw(p) {
      var color;
      if (this.blink) {
        color = p.color(this.color.levels[0],this.color.levels[1],this.color.levels[2], 20);
        setTimeout(()=> {
          this.blink = false;
          //L'être humain cligne des yeux en moyenne 7.5 fois par minutes
          this.delay = p.round(p.random(600,1000));
          //et met entre 100 et 150 millisecondes pour le faire
        },p.round(p.random(100,150)));
      } else {
        color = this.color;
      }
      p.noStroke();
      p.fill(color);
      p.rect(this.x - this.space / 2, this.y, this.width, this.height);
      p.rect(this.x + this.space / 2, this.y, this.width, this.height);
  };
};

export default Eye;
