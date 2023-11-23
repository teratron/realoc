// A crutch for problem 404 on GitHub Pages
(loc => {
    console.log(loc)
    if (loc.search[1] === '/') {
        let decoded = loc.search
            .slice(1)
            .split('&')
            .map(val => val.replace(/~and~/g, '&'))
            .join('?')
        window.history.replaceState(null, null, loc.pathname.slice(0, -1) + decoded + loc.hash)
    }
})(window.location)
