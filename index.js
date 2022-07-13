$("document").ready(() => {
  // $('video').css('display', 'none')
  $(".start").on("click", () => {
    $(".modal").addClass("hidden");
    $(".modelData").removeClass("hidden");
    $(".-inner").removeClass("hidden");
    // $('video').css('display', 'fixed')
    // $('video').css('', '')
    $("body").append(`
        <audio src='./music/test.mp3' autoplay />
      `);
  });
  var letterIndexes = randomListGenerator();
  // console.log(letterIndexes)

  $(".-inner").append(`
        ${icon}`);
  setInterval(() => {
    action = randomListGenerator();
    $(".-inner").html(`
      ${icon}`);
  }, 5000);

  setInterval(() => {
    if (label && action && label === action) {
      let greenIcon = greenSvgs.find((greenIcon) => greenIcon.name === action);
      $(".-inner").html(`
      ${greenIcon.svg}`);
    }
  }, 100);
});
