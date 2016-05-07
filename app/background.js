class Background {
  constructor(options) {
    this.width = options.width;
    this.height = options.height;
    this.x = options.x;
    this.y = options.y;
    this.color = options.color;
    this.nbBlocs = options.nbBlocs;
    this.level = 0;
};

  draw(p) {
    p.noStroke();
    var blockHeight = this.height / this.nbBlocs;
    for (var b = 0; b < this.nbBlocs; b++) {
      var alpha = p.map(b, 0, this.nbBlocs, 150, 200 + this.level * 2);
      var newColor = p.color(this.color.levels[0],this.color.levels[1],this.color.levels[2], alpha);
      p.fill(newColor);
      p.rect(this.x, blockHeight * b, this.width, blockHeight);
    }
  };
};

export default Background;
