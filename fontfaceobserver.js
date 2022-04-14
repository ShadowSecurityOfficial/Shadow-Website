<script type="text/javascript">
  const sourcesansproObserver = new FontFaceObserver('Source Sans Pro');
  const fontawesome5freeObserver = new FontFaceObserver('Font Awesome 5 Free');
  const fontawesome5brandsObserver = new FontFaceObserver('Font Awesome 5 Brands');

  Promise.all([
    sourcesansproObserver.load(),
    fontawesome5freeObserver.load()
    fontawesome5brandsObserver.load()
  ]).then(function(){
    document.documentElement.className += " fonts-loaded";
  });
</script>
