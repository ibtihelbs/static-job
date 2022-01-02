const _arr = [];
let filtered=[];
main = document.querySelector("main");

  let _sub_filter =(tab,ht)=>{
    let init=0;
    for (i in tab){
      if(ht.innerHTML.includes(tab[i])==true){
        /**console.log(true +"hihii"+ tab.length);
        return true; */
        init++;
    }
  }
  if(init == tab.length){
    return true;
  };
}

 let _html=(Data)=>{
  
   return `
  <div class="Card Card-style">
  <div class="main">
  <img src="${Data.logo}"alt="">
  <div class="info">
  <div class="title">
  <h6>${Data.company}</h6>
  ${Data.new == true ?  "<h6>New</h6>" : ""}
  ${Data.featured == true ?  "<h6>featured</h6>" : ""}
  </div>
  <h5>${Data.position}</h5>
  <span class="contract">${Data.postedAt}</span>.
  <span class="postedAt">${Data.contract}</span>.
  <span class="location">${Data.location}</span>
  </div>
  </div>
  <div class="skills">
  <!-- Role -->
  <button>${Data.role}</button>
  <!-- Level -->
  <button>${Data.level}</button>
  <!-- Languages -->
  ${(Data.languages.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}
  <!-- Tools -->
  <div class="tools">
    ${(Data.tools.map(function(item){ return "<button>"+item+"</button>"}).join(" "))}
  </div>
  <!-- Item End -->
  </div>
  </div>`
 }



async function Data (){

   const res = await fetch('data.json');

   const data = await res.json();
   console.log(data);

   data.map((data)=>{
     filtered.push(data);
     main.innerHTML +=_html(data);
   });
   console.log(main);
   let card= document.querySelectorAll(".Card");
   let tag = document.querySelectorAll(".skills button");
   let tags=document.querySelector(".tags");
   
    tag.forEach((item)=>{
      item.addEventListener("click", (event)=>{
        document.querySelector(".pop").style.display = "flex";
        let x =event.target.innerHTML;
        console.log(x);
        tags.innerHTML += `<button>${x}</button>`;
        card.forEach((item)=>{
          if(item.innerHTML.includes(x)==false){
            item.style.display = "none";
            
         }
        });
       
      })
    })
    tags.addEventListener("click", (event)=>{
      let x =event.target.innerHTML;
      let y =event.target;
       y.remove();
       let _filter=tags.innerHTML.replaceAll("</button>","");
          _filter=_filter.replaceAll("<button>",",");
          _filter=_filter.split(",");
          _filter.shift();
        console.log(_filter);
      card.forEach((item)=>{
        console.log(item.innerHTML);
      
        if(item.innerHTML.includes(x)==false && _sub_filter(_filter,item)==true){
            item.style.display = "flex"; 
            
       }
      })
    })
    document.querySelector("#clear").addEventListener("click", (event)=>{
      data.map((data)=>{
        filtered.push(data);
        main.innerHTML +=_html(data);
        document.querySelector(".pop").style.display = "none";
      });
    })
    
}

Data();