class Head {
  constructor(options) {
    this.width = options.width;
    this.height = options.height;
    this.x = options.x;
    this.y = options.y;
    this.img = options.img;
};

  draw(p) {
    p.image(this.img, this.x, this.y);
  };
};

export default Head;
