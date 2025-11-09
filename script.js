function revelToSpan() {
  document.querySelectorAll('.revel').forEach(function (elem) {
    let spanParent = document.createElement('span');
    let spanChild = document.createElement('span');

    spanParent.classList.add('parent');
    spanChild.classList.add('child');

    spanChild.textContent = elem.textContent;
    spanParent.appendChild(spanChild);

    elem.innerHTML = '';
    elem.appendChild(spanParent);
  });
}

revelToSpan();

var tl = gsap.timeline();

// text reveal animation
tl.from(".child", {
  x: 350,
  delay: 0.5,
  duration: 1.2,
  ease: "Power3.easeInOut",
})
.to(".parent .child", {
  y: "-100%",
  duration: 1,
  ease: "Circ.easeInOut",
}, "-=0.5")

// 🟩 white overlay slides up
.to("#white", {
  height: "100%",
  top: "0%",
  duration: 1,
  ease: "Circ.easeInOut",
}, "-=0.3")

// 🟩 then green overlay slides up
.to("#green", {
  height: "100%",
  top: "0%",
  duration: 1,
  ease: "Circ.easeInOut",
}, "-=0.6")

// both slide away revealing final white background
.to("#green", {
  height: "0%",
  top: "0%",
  duration: 1,
  ease: "Circ.easeInOut",
})


// loader disappears
.to("#loader", {
  height: "0%",
  duration: 1,
  ease: "Circ.easeInOut",
});
