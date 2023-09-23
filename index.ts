const server = Bun.serve({
  port: Bun.env.PORT || 5050,
  fetch(req){
    const url = new URL(req.url);
    if(url.pathname === '/') return new Response('Home Page');
    if(url.pathname === '/blog') return new Response('Blog Page');
    
    return new Response('404! Not Found');
  }
})

console.log(`Listening on ${server.port}`)