// $("#new-attributes-link").on("mouseover", function(e) {
//   console.log("link is hovered");
// });

document.addEventListener("DOMContentLoaded", function(){
  var newAttitudes = document.querySelector("#new-attitudes-link");

  newAttitudes.addEventListener('mouseover', function(e){
    document.body.classList.add('link-is-hovered');
    console.log('link is hovered');
  });
  newAttitudes.addEventListener('mouseout', function(e){
    document.body.classList.remove('link-is-hovered');
    console.log('link is not hovered');
  });
  // Handler when the DOM is fully loaded
});
