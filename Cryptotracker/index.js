const form = document.querySelector("#search-form");
const result = document.querySelector("#result");
//const rrr = document.querySelector("#rrr");
var updt;
const tableres = document.querySelector("#tableresult");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (updt) {
    clearTimeout();
  }
  const ctype = form.elements.cointype.value;
  //console.log(ctype);
  fetchprice(ctype);
});

const fetchprice = async (ctype) => {
  const res = await axios.get(
    `https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`
  );
  console.log(res);
  const price = res.data.coin.price;
  const volume = res.data.coin.volume;
  const change = res.data.coin.priceChange1d;
  const base = res.data.coin.name;
  const target = "USD";
  // const time = res.data.time;

  //rrr.innerHTML = `${price}`;
  tableres.innerHTML = `<tr style="background-color:blue; color:white; font-weight:700">
     <td>
         Property
     </td>
     <td>Value</td>
 </tr>
 <tr class="tablerow"
 >
     <td>
         ${base}
     </td>
     <td>${price} ${target}</td>
 </tr>
 <tr class="tablerow">
     <td>
         Volume
     </td>
     <td>${volume}</td>
 </tr>
 <tr class="tablerow">
     <td>
         Change
     </td>
     <td>${change}</td>
 </tr>`;
  //updt = setTimeout(() => fetchprice(ctype), 10000);
};
