const btn = document.getElementById("menu")

btn.addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("nav");
})

$(function() {

  var $body = $(document);
  $body.bind('scroll', function() {
      // "Desactivar" el scroll horizontal
      if ($body.scrollLeft() !== 0) {
          $body.scrollLeft(0);
      }
  });

}); 