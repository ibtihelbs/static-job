

















/**JASON data  */













































































/**let Data={};
let filtered={};
main = document.querySelector("main");
show=(Data)=>{
    for (i in Data){

      let  company=Data[i].company;
      let  logo=Data[i].logo;
      //let  new1=Data[i].new;
      let  featured=Data[i].featured;
      let  contract=Data[i].contract;
      let  languages=Data[i].languages; 
      let  location=Data[i].location; 
      let  position=Data[i].position;
      let  postedAt=Data[i].postedAt;
      let  role=Data[i].role; 
      let  tools=Data[i].tools;
      let  level=Data[i].level;
      card=document.createElement("div");
      card.setAttribute("class", "Card");
      main.appendChild(card);
      card.innerHTML=`
      <div class="main">
      <img src="${logo}"alt="">
      <div class="info">
      <h6>${company}</h6><h6>${Data[i].new}</h6>
      <h6>${position}</h6>
      <span class="contract">${postedAt}</span>.
      <span class="postedAt">${contract}</span>.
      <span class="location">${location}</span>
      </div>
      </div>
      <div class="skills">
        <!-- Role -->
      <button>${role}</button>
      <!-- Level -->
      <button>${level}</button>
      <!-- Languages -->
      <button>${languages}</button>
      <!-- Tools -->
      <div class="tools">
        <button>${tools}</button>
        
      </div>
      <!-- Item End -->
      </div>
      `;
      //console.log(company);
    }
  
}
fetch('data.json')
.then(response => response.json())
.then(data => {
    strin = JSON.stringify(data);
    Data = JSON.parse(strin);
    //newn = Data.prototype.filter(tools);
    show(Data);

    let skill=document.querySelector('.skills');
    let Card=document.querySelectorAll(".Card");
    let tags=document.querySelector(".tags");
    let clear=document.getElementById("clear");
    skill.addEventListener("click",(e)=> 
    {
    var  theObj = e.target.innerHTML;
    console.log(theObj);
   
      //console.log(Data);
      tags.innerHTML += `<button>${theObj}</button>`;
      
      Card.forEach((element,keys) => {
        if(element.innerHTML.includes(theObj)==false){
          element.remove();
         // filtered += element;
          console.log(element);
          filtered+=element.innerHTML;
        } 
       
      });
      console.log(filtered);
      tags.addEventListener("click",(e)=> {
        
       
      });
    });
    
    clear.addEventListener("click",(e)=>{
      show(Data);
      tags.innerHTML = ``;
      
    });

})
 */