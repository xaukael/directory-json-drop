Hooks.on('renderSidebarDirectory', (app, html)=>{
  html.find('.directory-list').on('drop', async function(event){
          event.originalEvent.preventDefault();
          const files = event.originalEvent.dataTransfer.files;
          if (!files[0]) return true;
          for (let file of files) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              try { game[app.tabName].documentClass.create(JSON.parse(reader.result)); } catch (err) {console.log(err)}
            }, false);
            reader.readAsText(file);
          }
          
  });
});