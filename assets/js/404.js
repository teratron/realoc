// A crutch for problem 404 on GitHub Pages
let pathSegmentsToKeep = 1
let loc = window.location
loc.replace(
    loc.protocol + '//' +
    loc.hostname +
    (loc.port ? ':' + loc.port : '') +
    loc.pathname
        .split('/')
        .slice(0, 1 + pathSegmentsToKeep)
        .join('/') + '/?/' +
    loc.pathname
        .slice(1)
        .split('/')
        .slice(pathSegmentsToKeep)
        .join('/')
        .replace(/&/g, '~and~') +
    (loc.search ? '&' + loc.search.slice(1).replace(/&/g, '~and~') : '') +
    loc.hash
)
