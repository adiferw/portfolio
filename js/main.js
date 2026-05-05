// Theme toggle: toggles .dark-mode on <body> and persists choice in localStorage
(function(){
	const toggleBtn = document.getElementById('theme-toggle');
	if (!toggleBtn) return;
	const img = toggleBtn.querySelector('img');
	const SUN_SRC = 'assets/images/light-dark/light-mode.png';
	const MOON_SRC = 'assets/images/light-dark/night-mode.png';

	function applyTheme(theme){
		if(theme === 'dark'){
			document.body.classList.add('dark-mode');
			if(img) img.src = SUN_SRC; // show light sun in dark mode
			localStorage.setItem('theme','dark');
		} else {
			document.body.classList.remove('dark-mode');
			if(img) img.src = MOON_SRC; // show dark moon in light mode
			localStorage.setItem('theme','light');
		}
	}

	const saved = localStorage.getItem('theme');
	const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	applyTheme(saved || (prefersDark ? 'dark' : 'light'));

	toggleBtn.addEventListener('click', ()=>{
		const isDark = document.body.classList.contains('dark-mode');
		applyTheme(isDark ? 'light' : 'dark');
	});
})();
