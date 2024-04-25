//Membuat Object dengan Factory Function
const convertColor = (r, g, b) => {
  const color = {
    r: r,
    g: g,
    b: b,
    hex: function () {
      // di sebut method
      const { r, g, b } = this; // destructuring atau memecah
      return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
    },
    rgb: function () {
      const { r, g, b } = this;
      return `rgb(${r}, ${g}, ${b})`;
    },
  };

  return color;
};
