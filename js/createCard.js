// script.js

// Fungsi untuk membuat elemen-elemen HTML berdasarkan data array
function createElementsFromData(dataArray) {
    var containerCard = document.getElementById("container-card");
  
    dataArray.forEach(function(item) {
      var containerBoxSp = document.createElement("div");
      containerBoxSp.classList.add("container-box-sp");
      containerBoxSp.id = item.id + "-container";
  
      var cardCoin = document.createElement("div");
      cardCoin.classList.add("card-coin");
  
      var icon = document.createElement("div");
      icon.classList.add("icon");
      var iconImg = document.createElement("img");
      iconImg.src = item.iconSrc;
      iconImg.alt = "";
      icon.appendChild(iconImg);
  
      var title = document.createElement("h5");
      title.textContent = item.title;
  
      cardCoin.appendChild(icon);
      cardCoin.appendChild(title);
  
      var priceSpan = document.createElement("span");
      priceSpan.id = item.id + "-price";
  
      var priceParagraph = document.createElement("p");
      priceParagraph.appendChild(priceSpan);
  
      containerBoxSp.appendChild(cardCoin);
      containerBoxSp.appendChild(priceParagraph);
  
      containerCard.appendChild(containerBoxSp);
    });
  }
  