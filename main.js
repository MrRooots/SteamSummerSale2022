const games = document.getElementsByClassName('facetedbrowse_FacetedBrowseItems_NO-IP')[0];
let isSearching = true;
let foundIdx = 0;

const timerId = setInterval(() => {
  if (isSearching) {
    console.log('Searching...')
    games.lastChild.lastChild.click(); // Click "load more" button

    while (foundIdx < games.childNodes.length - 1) {
      let game = games.childNodes[foundIdx];
      let priceBox = game.querySelector('[class^="salepreviewwidgets_StoreSalePriceBox_"]')
      if (priceBox && priceBox.textContent === 'TH.4X') {
        console.log(`Found! - ${foundIdx} index`)
        game.scrollIntoView();
        isSearching = false;
        break;
      }

      foundIdx++
    }
  } else {
    clearInterval(timerId);
  }
}, 50);