<script type="text/javascript">
  const pacificoObserver = new FontFaceObserver('Pacifico');
  const robotoObserver = new FontFaceObserver('Roboto');

  Promise.all([
    pacificoObserver.load(),
    robotoObserver.load()
  ]).then(function(){
    document.documentElement.className += " fonts-loaded";
  });
</script>
