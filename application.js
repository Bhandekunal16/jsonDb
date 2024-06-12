const [_brain, _heart, _kidney, _vessel] = [
  require("./src/brain"),
  require("./src/heart"),
  require("./src/kidney"),
  require("./src/vessels"),
];

export const Brain = new _brain();
export const heart = new _heart();
export const kidney = new _kidney();
export const vessel = new _vessel();
