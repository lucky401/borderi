const borderi = (options) => {
  let els = document.querySelectorAll('.borderi');
  if (options.border_type === 'thick') {
    options.border_type = '3px';
  } else {
    options.border_type = '1px';
  }
  if (!options.border_color) {
    options.border_color = 'black';
  }

  els.forEach((el) => {
    el.style.border = `${options.border_type} solid ${options.border_color}`;
  });
};

module.exports.borderi = borderi;
