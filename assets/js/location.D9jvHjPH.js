(e=>{if(e.search[1]==="/"){const a=e.search.slice(1).split("&").map(i=>i.replace(/~and~/g,"&")).join("?");window.history.replaceState(null,null,e.pathname.slice(0,-1)+a+e.hash)}})(window.location);
