/** class contains color generating operation.*/
class HexColorGenerator {
  /**
   * @function -color generating operation
   * @returns  -random hex color.
   */
  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };
}

module.exports = HexColorGenerator;
