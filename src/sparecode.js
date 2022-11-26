function loadFont(transcript) {
  console.log("strawberry cheesecake");
  // strawberry.style.visibility = "hidden"; // added
  //ellipse.appendChild(strawberry); // ELLIPSO
  strawberry.textContent = transcript;

  strawberry.classList.add("fruit");

  strawberry.style["letter-spacing"] = letterSpace + "px"; // negative? dafault none. KEEP? QQ
  strawberry.style.color = randomRGBA();
  // console.log(strawberry.style.color);
  strawberry.style["-webkit-text-stroke-width"] = letterSpace + "px"; // text outline thickness
  // console.log(strawberry.style["-webkit-text-stroke-width"]); // think this is letterSpace (same # as console.log(letterSpace))
  // strawberry.style.border = "2px solid " + randomRGB();
  strawberry.style["-webkit-text-stroke-color"] = randomRGB(); // text outline color
  // console.log("strawberry width" + strawberry.clientWidth); // clientWidth. why not working. added
  // strawberry.style.padding = 0; // added
  // strawberry.style.margin = 0; // added

  setTimeout(function () {
    //ELLIPSO
    strawberry.style.visibility = "visible";
    // ellipse.style.visibility = "visible";
    setTimeout(function () {
      // strawberry.style.visibility = "hidden";
      // ellipse.style.visibility = "hidden";
    }, (removeDelay += 2000));
    // console.log("removeDelay: " + removeDelay);
  }, (bubbleDelay += 200)); // bubbleDelay = bubbleDelay + 200; // will leave out return since works without
  // }
}
