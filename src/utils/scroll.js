export function scrollToTargetId(targetId) {
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (!target) return;
  const header = document.getElementById("site-header");
  const headerHeight = header ? header.offsetHeight : 0;
  const targetTop = Math.max(target.getBoundingClientRect().top + window.scrollY - headerHeight + 1, 0);
  window.scrollTo({ top: targetTop, behavior: "smooth" });
}

export function handleNavLinkClick(event, targetId, onCloseDrawer) {
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (!target) return; // If not on this page or target not found, let default link action occur
  event.preventDefault();
  if (onCloseDrawer) onCloseDrawer();
  scrollToTargetId(targetId);
}
