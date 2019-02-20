myData = document.querySelectorAll(".message");
NodeList.prototype.forEach = Array.prototype.forEach;
myMessages = [];


var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation);
  });
});


// Starts listening for changes in the root HTML element of the page.
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});




function fillData() {
  myData.forEach(msg => {
    const text = msg.querySelector(".bubble").innerText;

    const extra = JSON.parse(msg.querySelector(".bubble").dataset.cm);
    const senderId = extra.actualSender;
    const msgId = extra.msgId;
    const msgType = extra.msgType;
    const sender = msg.querySelector("h4").innerText;
    const date = Date.now();

    myMessages.push({text, senderId, msgId, msgType, sender, date});

  });
}
