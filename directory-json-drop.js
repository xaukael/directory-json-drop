Hooks.on('renderSidebarDirectory', (app, html)=>{
  html.find('.directory-list').on('drop', async function(event){
          event.originalEvent.preventDefault();
          const files = event.originalEvent.dataTransfer.files;
          if (!files[0]) return true;
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            let text = reader.result;
            game[app.tabName].documentClass.create(JSON.parse(text));
          }, false);
          reader.readAsText(files[0]);
  });
});