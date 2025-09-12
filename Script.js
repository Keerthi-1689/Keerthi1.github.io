// For touch devices to show tooltip on tap
document.querySelectorAll('.tooltip').forEach(el => {
  el.addEventListener('touchstart', () => {
    // Show tooltip
    el.classList.add('tooltip-active');
  });
  el.addEventListener('touchend', () => {
    // Hide after a short delay
    setTimeout(() => {
      el.classList.remove('tooltip-active');
    }, 2000);
  });
});
