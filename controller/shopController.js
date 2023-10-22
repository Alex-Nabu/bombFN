const apiUrl = "https://fortnite-api.com/v2/shop/br";

async function getDataFromAPI() {
  try {
    const response = await fetch(apiUrl); // Replace with the actual API URL
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data.featured.entries;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You can handle the error or rethrow it for upper-level handling
  }
}

async function landingArr() {
  var items = await getDataFromAPI();
  var res = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    var stt = 0;
    if (i == 0) {
      res.push(items[i].section.index);
    }
    for (let j = 0; j < res.length; j++) {
      const idx = res[j];
      if (idx == items[i].section.index) {
        stt++;
      }
    }
    if (stt == 0) {
      res.push(items[i].section.index);
    }
  }
  var result = [];
  for (var i = 0; i < res.length; i++) {
    var tmp_arr = [];
    for (var j = 0; j < items.length; j++) {
      if (res[i] == items[j].section.index) {
        tmp_arr.push(items[j]);
      }
    }
    result.push(tmp_arr);
  }
  return result;
}

async function getById(id) {
  var items = await getDataFromAPI();
  var r_id = "v2:/" + id;
  var matchedItem = items.find((item) => item.offerId === r_id);
  return matchedItem;
}

exports.getShopPage = async function (req, res) {
  try {
    var landData = await landingArr();
    res.render("shop", {
      title: "This is my test.",
      filterStt: "landing",
      cards: landData,
    });
  } catch (error) {
    console.log("Error shopController/getShopPage");
  }
};

exports.getWebmanifest = function (req, res) {
  res.json({
    name: "Fortnite.GG",
    short_name: "Fortnite.GG",
    start_url: "https://localhost:8000",
    icons: [
      {
        src: "https://localhost:8000/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://localhost:8000/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#2f3136",
    background_color: "#2f3136",
    display: "standalone",
    categories: ["games", "entertainment"],
    scope: "https://localhost:8000/",
  });
};

exports.getItemDetails = async function (req, res) {
    // try {
    //     const response = await fetch('https://fortnite.gg/item-details?id=10578'); // Replace with the actual API URL
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     const data = await response.json();
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //     throw error; // You can handle the error or rethrow it for upper-level handling
    //   }
    res.send("data");
//   res.send(`
//   <video class='item-video' muted loop autoplay playsinline data-id='10538' data-v='1' src='https://fnggcdn.com/items/10538/video.mp4?1'></video>
//   <div class='fn-detail'>
//       <div>
//           <div id='item-details-ad' style='margin:auto;padding-bottom:20px'></div>
//           <div class='fn-detail-name'>Recoil Reactor</div>
//           <div class='fn-detail-type'>
//               <span style='color:#37d1ff'>rare</span>
//               wrap
//           </div>
//           <div class='fn-item-price'>
//               <img src='/img/vbucks.png' alt='V-Bucks'>500
//           </div>
//           <div id='style-variants'>
//               <div class='style-title'>
//                   TYPE (<span class='style-name'>WEAPON</span>
//                   )
//               </div>
//               <div>
//                   <div class='style-variant active' data-idx='1' onclick='itemStyle(this,0,0,"WEAPON")'>
//                       <img src='/img/style-weapon.jpg'>
//                   </div>
//                   <div class='style-variant' data-idx='2' onclick='itemStyle(this,0,0,"OUTFIT")'>
//                       <img src='/img/style-outfit.jpg'>
//                   </div>
//               </div>
//           </div>
//           <div class='fn-detail-desc grey'>Show your style.</div>
//           <div class='fn-detail-desc grey'>[Reactive]</div>
//           <div class='fn-detail-details'>
//               <table>
//                   <tr>
//                       <th scope='row' class='grey'>Source:</th>
//                       <td>Shop</td>
//                   </tr>
//                   <tr>
//                       <th scope='row' class='grey'>Introduced in:</th>
//                       <td>Chapter 4, Season 4</td>
//                   </tr>
//                   <tr>
//                       <th scope='row' class='grey'>Release date:</th>
//                       <td>Oct 10, 2023</td>
//                   </tr>
//                   <tr>
//                       <th scope='row' class='grey'>Last seen:</th>
//                       <td title='Chapter 4, Season 4'>Oct 21, 2023 (yesterday)</td>
//                   </tr>
//                   <tr class='fn-assets-header'>
//                       <th scope='row' class='grey'>Occurrences:</th>
//                       <td>
//                           7 <i class='arrow'></i>
//                       </td>
//                   </tr>
//                   <tr class='fn-assets'>
//                       <td colspan='2'>
//                           <table>
//                               <tr>
//                                   <th>Date</th>
//                                   <th>Days ago</th>
//                               </tr>
//                               <tr>
//                                   <td>Oct 22, 2023</td>
//                                   <td>Today</td>
//                               </tr>
//                               <tr>
//                                   <td>Oct 21, 2023</td>
//                                   <td>Yesterday</td>
//                               </tr>
//                               <tr>
//                                   <td>Oct 20, 2023</td>
//                                   <td>2</td>
//                               </tr>
//                               <tr>
//                                   <td>Oct 19, 2023</td>
//                                   <td>3</td>
//                               </tr>
//                               <tr>
//                                   <td>Oct 18, 2023</td>
//                                   <td>4</td>
//                               </tr>
//                               <tr>
//                                   <td>Oct 11, 2023</td>
//                                   <td>11</td>
//                               </tr>
//                               <tr>
//                                   <td>Oct 10, 2023</td>
//                                   <td>12</td>
//                               </tr>
//                           </table>
//                       </td>
//                   </tr>
//                   <tr>
//                       <th scope='row' class='grey'>Wishlists:</th>
//                       <td class='wishlist-count'>182</td>
//                   </tr>
//               </table>
//           </div>
//           <div class='item-add-my'>
//               <div class='item-add-my-btn' data-type='wishlist' data-id='10538'>Wishlist</div>
//               <div class='item-add-my-btn' data-type='locker' data-id='10538'>Locker</div>
//           </div>
//           <div class='vote-wrap'>
//               <div class='bar-fire' style='width:72.8845%'></div>
//               <div class='bar-shit' style='width:27.1155%'></div>
//               <div class='vote-options' data-id='10538' data-total='1229' data-sum='3583'>
//                   <div class='vote-option' data-vote='4'>
//                       🔥<div class='vote-count'>668</div>
//                   </div>
//                   <div class='vote-option' data-vote='3'>
//                       😍<div class='vote-count'>173</div>
//                   </div>
//                   <div class='vote-option' data-vote='2'>
//                       😐<div class='vote-count'>163</div>
//                   </div>
//                   <div class='vote-option' data-vote='1'>
//                       🤮<div class='vote-count'>66</div>
//                   </div>
//                   <div class='vote-option' data-vote='0'>
//                       💩<div class='vote-count'>159</div>
//                   </div>
//               </div>
//           </div>
//           <div class='fn-detail-details'>
//               <div>
//                   <div>
//                       <span class='grey'>Part of the </span>
//                       FNCS <span class='grey'>set</span>
//                   </div>
//                   <div class='fn-assets' style='display:block'>
//                       <a href='/cosmetics?id=4903' onclick='return modal(4903, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/4903/icon.jpg?4' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5399' onclick='return modal(5399, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5399/icon.jpg?4' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5886' onclick='return modal(5886, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5886/icon.jpg?4' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6469' onclick='return modal(6469, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6469/icon.jpg?4' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=7777' onclick='return modal(7777, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/7777/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8630' onclick='return modal(8630, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8630/icon.jpg?4' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8633' onclick='return modal(8633, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8633/icon.jpg?4' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9131' onclick='return modal(9131, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9131/icon.jpg?5' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9603' onclick='return modal(9603, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9603/icon.jpg?3' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9950' onclick='return modal(9950, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9950/icon.jpg?3' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10531' onclick='return modal(10531, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10531/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10534' onclick='return modal(10534, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10534/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9872' onclick='return modal(9872, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9872/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=4433' onclick='return modal(4433, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/4433/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5392' onclick='return modal(5392, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5392/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5896' onclick='return modal(5896, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5896/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6476' onclick='return modal(6476, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6476/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6687' onclick='return modal(6687, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6687/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=7790' onclick='return modal(7790, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/7790/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8087' onclick='return modal(8087, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8087/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8117' onclick='return modal(8117, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8117/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8545' onclick='return modal(8545, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8545/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8622' onclick='return modal(8622, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8622/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9004' onclick='return modal(9004, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9004/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9125' onclick='return modal(9125, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9125/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9601' onclick='return modal(9601, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9601/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9602' onclick='return modal(9602, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9602/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9938' onclick='return modal(9938, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9938/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10532' onclick='return modal(10532, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10532/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10533' onclick='return modal(10533, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10533/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=2676' onclick='return modal(2676, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/2676/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=7852' onclick='return modal(7852, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/7852/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10540' onclick='return modal(10540, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10540/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8658' onclick='return modal(8658, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8658/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9150' onclick='return modal(9150, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9150/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9605' onclick='return modal(9605, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9605/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9972' onclick='return modal(9972, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9972/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8639' onclick='return modal(8639, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8639/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10535' onclick='return modal(10535, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10535/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9133' onclick='return modal(9133, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9133/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10536' onclick='return modal(10536, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10536/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10538' onclick='return modal(10538, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10538/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9604' onclick='return modal(9604, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9604/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9964' onclick='return modal(9964, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9964/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=2795' onclick='return modal(2795, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/2795/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=2796' onclick='return modal(2796, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/2796/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=2797' onclick='return modal(2797, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/2797/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=2798' onclick='return modal(2798, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/2798/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=4316' onclick='return modal(4316, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/4316/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=4591' onclick='return modal(4591, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/4591/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5140' onclick='return modal(5140, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5140/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5143' onclick='return modal(5143, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5143/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5204' onclick='return modal(5204, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5204/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5586' onclick='return modal(5586, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5586/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6312' onclick='return modal(6312, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6312/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8062' onclick='return modal(8062, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8062/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9024' onclick='return modal(9024, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9024/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9490' onclick='return modal(9490, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9490/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9984' onclick='return modal(9984, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9984/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10541' onclick='return modal(10541, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10541/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=1031' onclick='return modal(1031, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/1031/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=1071' onclick='return modal(1071, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/1071/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=1072' onclick='return modal(1072, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/1072/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=4311' onclick='return modal(4311, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/4311/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=4576' onclick='return modal(4576, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/4576/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5110' onclick='return modal(5110, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5110/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5190' onclick='return modal(5190, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5190/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5573' onclick='return modal(5573, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5573/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6317' onclick='return modal(6317, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6317/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6390' onclick='return modal(6390, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6390/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6391' onclick='return modal(6391, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6391/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6392' onclick='return modal(6392, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6392/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6451' onclick='return modal(6451, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6451/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8074' onclick='return modal(8074, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8074/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8636' onclick='return modal(8636, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8636/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9463' onclick='return modal(9463, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9463/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9961' onclick='return modal(9961, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9961/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10537' onclick='return modal(10537, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10537/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=4612' onclick='return modal(4612, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/4612/icon.jpg?5' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5200' onclick='return modal(5200, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5200/icon.jpg?5' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5582' onclick='return modal(5582, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5582/icon.jpg?5' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5960' onclick='return modal(5960, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5960/icon.jpg?5' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6303' onclick='return modal(6303, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6303/icon.jpg?5' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6470' onclick='return modal(6470, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6470/icon.jpg?5' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6653' onclick='return modal(6653, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6653/icon.jpg?5' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8055' onclick='return modal(8055, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8055/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8650' onclick='return modal(8650, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8650/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8652' onclick='return modal(8652, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8652/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9015' onclick='return modal(9015, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9015/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9477' onclick='return modal(9477, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9477/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9969' onclick='return modal(9969, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9969/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10143' onclick='return modal(10143, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10143/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10539' onclick='return modal(10539, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10539/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5410' onclick='return modal(5410, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5410/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=5872' onclick='return modal(5872, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/5872/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=6454' onclick='return modal(6454, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/6454/icon.jpg?2' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8138' onclick='return modal(8138, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8138/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=8653' onclick='return modal(8653, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/8653/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9148' onclick='return modal(9148, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9148/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9610' onclick='return modal(9610, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9610/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10035' onclick='return modal(10035, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10035/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=10506' onclick='return modal(10506, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/10506/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=7753' onclick='return modal(7753, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/7753/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                       <a href='/cosmetics?id=9028' onclick='return modal(9028, "item")' class='item-icon'>
//                           <div class='item-icon-img'>
//                               <img src='/img/items/9028/icon.jpg?1' loading='lazy'>
//                           </div>
//                       </a>
//                   </div>
//               </div>
//               <div style='margin-top:10px;word-break:break-all'>
//                   <span class='grey'>ID:</span>
//                   Wrap_Comp26
//               </div>
//               <div>
//                   <div class='fn-assets-header'>
//                       Assets <i class='arrow'></i>
//                   </div>
//                   <div class='fn-assets'>
//                       <div class='imgs'>
//                           <a href='/img/items/10538/icon.png?1' target='_blank' title='Click to view full size image'>
//                               <img src='/img/items/10538/icon.png?1' loading='lazy'>
//                           </a>
//                           <a href='/img/items/10538/featured.png?1' target='_blank' title='Click to view full size image'>
//                               <img src='/img/items/10538/featured.png?1' loading='lazy'>
//                           </a>
//                       </div>
//                   </div>
//               </div>
//           </div>
//           <div class='fn-detail-space'></div>
//       </div>
//   </div>
  
//   `);
};

exports.getMapPage = async function (req, res) {
  res.render("index", {
    title: "",
  });
};

exports.getCosmeticsPage = function (req, res) {
  res.render("cosmetics", {
    title: "",
    filter: "default",
    item: "",
  });
};
