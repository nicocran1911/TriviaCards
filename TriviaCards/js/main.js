$(document).ready(() => {
  $(".hint-box").on("click", () => {
    $(".hint").slideToggle(500);
  });
  $(".wrong-answer-one").on("click", () => {
    $(".wrong-text-one").fadeOut(300);
    $(".frown").show();
  });
  $(".wrong-answer-two").on("click", () => {
    $(".wrong-text-two").fadeOut("slow");
    $(".frown").show();
  });
  $(".wrong-answer-three").on("click", () => {
    $(".wrong-text-three").fadeOut("fast");
    $(".frown").show();
  });
  $(".correct-answer").on("click", () => {
    $(".frown").hide();
    $(".smiley").show();
    $(".wrong-answer-one").fadeOut("slow");
    $(".wrong-answer-two").fadeOut("slow");
    $(".wrong-answer-three").fadeOut("slow");
  });
  $(".reset").on("click", () => {
    $(".wrong-text-one").fadeIn();
    $(".wrong-text-two").fadeIn();
    $(".wrong-text-three").fadeIn();
    $(".answer").fadeIn();
    $(".frown").hide();
    $(".smiley").hide();
  });
});
