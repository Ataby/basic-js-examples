const formJS = document.querySelectorAll("form")[0];
//  QUERY.ALL GIBI HEPSINI SECEBILIR.
const formJQ = jQuery("form").eq(0); //=> JQ Object'i döndürüyor.
// const formJQ = $("form").get(0); //=> JS Object'i döndürüyor.
//get(index), eq(index)

console.log(typeof formJQ);
console.log(formJS);

const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const ulJQ = $(".cities").eq(0);
//EQ(0) => LISTEDEKI ILK ELEMANI ELDE ETME

//WINDOW LOAD => ALL CONTENT LOADED (IMAGES,STYLES..)
//DOM.CONTENT.LOAD => PAGE IS RENDERED, DOM IS READY.
//IKISININ FARKI MULAKATLARDA SORULABILIR

//window.addEventListener("load",function(){...}; ) => JS
$(window).on("load", function () {
  // =>JQUERY
  console.log("window.load");
});

//document.addEventListener("DOMContentListener",()=>{}) =>JS
//${document}.on("DOMContentListener",()=>{})
$(document).ready(() => {
  //READY FONKSIYONU ${} (JQUERY OBJESI) ILE CALISIR
  console.log("DOMContentLoaded");
  localStorage.setItem(
    "tokenKey",
    "4x912ZjORv3Lfr22mPR0RSJJIqbNRnks2jxZVG+P0MYvonSVzxaX0gyw6sBHX9G1"
  );
});

// formJQ.on("submit",(e)=>{
//     e.preventDefault();
//     getDataApi();
// });
formJQ.submit((e) => {
  //2 FARKLI TIPTE YAZIM
  e.preventDefault();
  getDataApi();
});
// formJQ.click((e)=>{ //2 FARKLI TIPTE YAZIM
//     e.preventDefault();
//     getDataApi();
// });

const getDataApi = function () {
  console.log("ajax function is called");
  //fetch() vs. axios vs. $.ajax YONTEMLERIYLE API'DEN VERI TRANSFERI YAPILABILIR.

  const apiKey = DecryptStringAES(
    localStorage.getItem(
      "tokenKey",
      "4x912ZjORv3Lfr22mPR0RSJJIqbNRnks2jxZVG+P0MYvonSVzxaX0gyw6sBHX9G1"
    )
  );

  const cityName = inputJQ.val();
  // const cityName = inputJS.value;
  console.log(cityName);

  const lang = "tr";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

  //FETCH VEYA AXIOS GIBI CALISIYOR.
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      //200 ILE SUCCESS DONDUKTEN SONRA AYRISTIRIP DIGER ISLEMLERI YAPABILIRIZ YANI FONKSIYONUN ANA KISMI BURADA
      console.log(response);
      const { main, weather, name, sys } = response;
      const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      const cityList = ulJQ.find(".city");
      const cityListArray = cityList.get();
      //   console.log(cityList);
      if (cityListArray.length > 0) {
        const ayniSehirler = cityListArray.filter(
          (li) => $(li).find("span").text() == name
        );
        if (ayniSehirler.length > 0) {
          msgJQ.text(`You already know this city.`); //Innertext
          msgJQ.css({ color: "red", "text-decoration": "underline" });
          return;
        }
      }

      // const createLi = document.createElement("li"); => JS
      // $(document.createElement("li")); //=> JQUERY
      const createLi = $("<li></li>"); //=> JQUERY
      createLi.addClass("city");
      createLi.html(`
                <h2 class="city-name" data-name="${name},${sys.country}">
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                </h2>
                <div class="city-temp">${Math.round(
                  main.temp
                )}<sup>*C</sup></div>
                <figure> 
                <img class="city-icon" src="${iconUrl}">
                <figcaption>${weather[0].description}</figcaption>
                </figure>
                `);
      // ulJQ.append(createLi);
      ulJQ.prepend(createLi);

      //   $(".city img").click((e)=>{
      //     $(e.target).attr("src",iconUrlAWS); //TIKLAYINCA IKON DEGISME
      //   });

      $(".city").click((e) => {
        $(e.target).animate({ left: "250px" }); //BASIT ANIMASYON
      });

      // formJS.reset();//=> JS
      formJQ.trigger("reset");
    },
    beforeSend: (request) => {
      console.log("before ajax send");
    }, //API'YE ISTEK ATMADAN ONCE YAPILMASI GEREKEN SEYLER
    complete: () => {
      console.log("after ajax send");
    }, //TUM ISLEMLER BITTIKTEN SONRA
    error: (XMLHttpRequest) => {
      msgJQ.text(`ERROR`); //Innertext
      msgJQ.css({ color: "red", "text-decoration": "underline" });
    },
  });
};
