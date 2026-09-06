// Hide project entries that don't have a valid GitHub link yet.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-entry').forEach((entry) => {
    const github = entry.dataset.github || '';
    if (!github.includes('github.com')) {
      entry.remove();
    }
  });
});
