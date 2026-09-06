// Hide blog entries that don't have a valid publish date yet.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.blog-entry').forEach((entry) => {
    const date = entry.dataset.date || '';
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      entry.remove();
    }
  });
});
