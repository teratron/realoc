// A crutch for problem 404 on GitHub Pages
(loc => {
    if (loc.search[1] === '/') {
        let decoded = loc.search
            .slice(1)
            .split('&')
            .map((val) => val.replace(/~and~/g, '&'))
            .join('?')
        window.history.replaceState(null, null, loc.pathname.slice(0, -1) + decoded + loc.hash)
    }
})(window.location)

// (function(l) {
//     if (l.search[1] === '/' ) {
//         var decoded = l.search.slice(1).split('&').map(function(s) {
//             return s.replace(/~and~/g, '&')
//         }).join('?');
//         window.history.replaceState(null, null,
//             l.pathname.slice(0, -1) + decoded + l.hash
//         );
//     }
// }(window.location))