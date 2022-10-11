export function hoverChangeDescription(nameCard, text) {
    // var changeDescription = document.querySelector(".changeDescription");
    let description = document.getElementById("des")
  
    document.querySelector(nameCard).addEventListener("mouseover", () => {
      description.innerHTML = text;
    });
  
    document.querySelector(nameCard).addEventListener("mouseout", () => {
      description.innerHTML = `Hover over a card to see its description`;
    });
  }
  