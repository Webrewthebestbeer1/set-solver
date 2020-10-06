const colors = ['r', 'g', 'p'];
const fills = ['u', 'h', 'f'];
const shapes = ['s', 'd', 'o'];
const amounts = ['1', '2', '3'];

colors.forEach((color) => {
  fills.forEach((fill) => {
    shapes.forEach((shape) => {
      amounts.forEach((amount) => {
        console.log(`c-${amount}-${fill}-${shape}-${color}`);
      });
    });
  });
});
