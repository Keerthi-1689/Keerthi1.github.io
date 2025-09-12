// Optional: You can make tooltips fancier with JS if needed
document.querySelectorAll('.tooltip').forEach(item => {
  item.addEventListener('mouseover', () => {
    console.log('Tooltip shown:', item.dataset.tooltip);
  });
});
