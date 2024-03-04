function handleElementClick(clickedElementId) {
  var elements = ["fs", "sc", "thr"];
  elements.forEach(function (elementId) {
    var element = document.getElementById(elementId);
    if (
      elementId !== clickedElementId &&
      element.classList.contains("eventWhite")
    ) {
      element.classList.remove("eventWhite");
    }
  });

  document.getElementById(clickedElementId).classList.add("eventWhite");
}

document.getElementById("fs").addEventListener("click", function (e) {
  handleElementClick("fs");
});

document.getElementById("sc").addEventListener("click", function (e) {
  handleElementClick("sc");
});

document.getElementById("thr").addEventListener("click", function (e) {
  handleElementClick("thr");
});
