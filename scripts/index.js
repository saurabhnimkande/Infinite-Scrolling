let div = document.getElementById("scrollDiv");
let val = 1;
div.addEventListener("scroll", scrollfn);
function scrollfn() {
  console.log(div.scrollTop, div.clientHeight, div.scrollHeight);
  if (div.scrollTop + div.clientHeight >= div.scrollHeight - 5) {
    appendVal();
  }
}

function appendVal() {
  let i = 0;
  while (i < 25) {
    let h2 = document.createElement("h2");
    h2.innerText = "Masai Student " + val++;
    div.append(h2);
    i++;
  }
}
appendVal();
