// Pulls the latest commit date from GitHub so "Last updated" stays in sync
// with the repo without needing to hand-edit the date on every push.
document.addEventListener('DOMContentLoaded', async () => {
  const el = document.getElementById('last-updated');
  if (!el) return;

  try {
    const response = await fetch('https://api.github.com/repos/mariofbarros/personal-website/commits?per_page=1');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const commits = await response.json();
    const isoDate = commits[0]?.commit?.committer?.date;
    if (!isoDate) return;

    el.textContent = new Date(isoDate).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  } catch (error) {
    console.error('Erro ao buscar último commit do GitHub:', error);
  }
});
