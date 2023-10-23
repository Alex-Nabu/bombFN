const apiUrl = "https://fnlookup-api.vercel.app/api?endpoint=shop&lang=en";

console.log(Items)

async function getDataFromAPI() {
  try {
    const response = await fetch(apiUrl); // Replace with the actual API URL
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.shop
    // return data.data.featured.entries;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You can handle the error or rethrow it for upper-level handling
  }
}

async function landingArr() {
  var items = await getDataFromAPI();
  var res = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    var stt = 0;
    if( i == 0){
      res.push((items[i].section.name + items[i].section.landingPriority))
    }
    for (let j = 0; j < res.length; j++) {
      const idx = res[j];
      if(idx == (items[i].section.name + items[i].section.landingPriority)){
        stt ++;
      }
    }
    if(stt == 0) {
      res.push((items[i].section.name + items[i].section.landingPriority))
    }
  }

  var result = []
  for(var i = 0; i < res.length; i ++){
      var tmp_arr = []
      for(var j = 0; j < items.length; j ++){
          if(res[i] == (items[j].section.name + items[j].section.landingPriority)){
              tmp_arr.push(items[j])
          }
      }
      result.push(tmp_arr);
  }
  console.log(result)
  return result;
}

landingArr()

// async function testAPI(params) {
//   // const data = await fetch("https://fortnite.gg/item-details?id=10578");
//   // console.log(data)
// }

// testAPI()