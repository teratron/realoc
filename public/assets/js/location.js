// A crutch for problem 404 on GitHub Pages
(loc => {
    if (loc.search[1] === '/') {
        const decoded = loc.search
            .slice(1)
            .split('&')
            .map((s) => s.replace(/~and~/g, '&'))
            .join('?')
        window.history.replaceState(null, null, loc.pathname.slice(0, -1) + decoded + loc.hash)
    }
})(window.location)