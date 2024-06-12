import Brain from "./types/brain";
import Heart from "./types/heart";
import Kidney from "./types/kidney";
import Vessel from "./types/vessels";

const [_brain, _heart, _kidney, _vessel] = [
  require("./src/brain"),
  require("./src/heart"),
  require("./src/kidney"),
  require("./src/vessels"),
];

export const brain: Brain = new _brain();
export const heart: Heart = new _heart();
export const kidney: Kidney = new _kidney();
export const vessel: Vessel = new _vessel();
