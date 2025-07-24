function changeTheme() {
  const colors = ["#f5f5f5", "#fffacd", "#e6ffe6", "#e0ffff", "#ffe6e6"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
