var data ={
  f:"https://m.facebook.com/csr.rony?eav=AfbgWTxuGbDhBGVV6M642oXd2LYIv7R7SR8ILiKym-8AniO9OzPBW7KFHgIqjeDWLm8&paipv=0",
  i:"https://www.instagram.com/csrrony/?hl=en",
   t:"https://www.twitter.com"
 };
 var fruit = [
 {img:"img/apple.jpg",name:"Apple"},
 {img:"img/banana.jpg",name:"Banana"},
 {img:"img/orange.jpg",name:"Orange"},
 {img:"img/guava.jpg",name:"Guava"},
 {img:"img/pineapple.jpg",name:"Pineapple"},
 {img:"img/dalim.jpg",name:"Dalim"}
 ];



fruit.forEach((element, i)=>{
  var cards = document.querySelector(".cards");
  var card = 
  `<div class="card">
    <div class="imgBox">
      <img src="${fruit[i].img}" alt="" />
      <img src="${fruit[i].img}" alt="" />
    </div>
    <div class="details">
      <div class="content">
        <h2>${fruit[i].name}<br /><span>Web developer</span></h2>
        <div class="social-icons">
          <a href="${data.f}"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="${data.i}"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="${data.t}"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>`;
  cards.innerHTML+=card;
});

var inpdata = {};
var inpdatas;
var objs;

const img = document.getElementById("img");
const name = document.getElementById("name");
const add= document.getElementById("add");


function cardi (){
data.forEach((element, i)=>{
  var cards = document.querySelector(".cards");
  var card = 
  `<div class="card">
    <div class="imgBox">
      <img src="${data[i].img}" alt="" />
      <img src="${data[i].img}" alt="" />
    </div>
    <div class="details">
      <div class="content">
        <h2>${data[i].name}<br /><span><a href="" type="btn">Buy now</a></span></h2>
        <div class="social-icons">
          <a href="${data[i].f}"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="${data[i].i}"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="${data[i].t}"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>`;
  cards.innerHTML+=card;
});
};
cardi();

add.addEventListener("click",()=>{
  
  var nameval = name.value;
  var imgval = img.value;
  
  if (nameval=="") {
    alert("please input");
    window.reload();
  };
var inptimg = Object.assign({},inpdata,{img:`${imgval}`});
var inptname = Object.assign(inpdata,{name:`${nameval}`});
objs = Object.assign(inptimg,inptname);
data.splice(objs);
data.push(objs);
cardi();
name.value="";
img.value="";
});


var delet = document.getElementById("delet");
delet.addEventListener("click",()=>{
  alert("Deleted");
});
