if (ellipse !== undefined) {
  console.log("POWERPUFF YES");
  console.log("Ellipse" + ellipse);
  console.log("strawberry: " + strawberry);
  // ELLIPSO

  setTimeout(function () {
    strawberry.style.visibility = "visible";
    ellipse.style.visibility = "visible";
    setTimeout(function () {
      // strawberry.style.visibility = "hidden";
      // ellipse.style.visibility = "hidden";
    }, (removeDelay += 2000));
    // console.log("removeDelay: " + removeDelay);
  }, (bubbleDelay += 200)); // bubbleDelay = bubbleDelay + 200; // will leave out return since works without
  // }
} else {
  console.log("NO BUBBLE BONGO");
  strawberry.style.right = rightSpace; // rightSpace + "%";
  strawberry.style.top = topSpace; // topSpace + "%";
  strawberry.style.fontSize = randFontSize + "px";
  document.body.appendChild(strawberry);
  //ELLIPSO;
  setTimeout(function () {
    strawberry.style.visibility = "visible";
    setTimeout(function () {
      // strawberry.style.visibility = "hidden";
      // ellipse.style.visibility = "hidden";
    }, (removeDelay += 2000));
    // console.log("removeDelay: " + removeDelay);
  }, (bubbleDelay += 200)); // bubbleDelay = bubbleDelay + 200; // will leave out return since works without
}
