(function reloadScript() {

  
    js_islandBread.click()
    
      setTimeout(() => {
          let script = document.createElement('script');
          script.src = 'https://ismetba.github.io/berkanScript/script.js';
          document.head.appendChild(script);
      }, 10);
  })();