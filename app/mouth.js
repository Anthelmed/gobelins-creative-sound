class Mouth {
  constructor(options) {
    this.width = options.width;
    this.height = options.height;
    this.x = options.x;
    this.y = options.y;
    this.singTimeline = options.singTimeline;
    this.sing = false;
    this.color = options.color;
    this.colorLips = options.colorLips;
  };

  draw(p) {
    p.stroke(this.colorLips);
    p.strokeWeight(4);
    p.fill(this.color);
    p.rect(this.x, this.y, this.width, this.height);
  };
};

export default Mouth;
