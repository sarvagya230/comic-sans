AFRAME.registerComponent("tour",{
    init:function(){
       this.placesContainer=this.el
       this.createCards()
       this.handleEnter()
    },
    handleEnter:function() {
      let books=[
        {
          id: "vichitra-vade",
          title: "VICHITRA VADE",
          url: "../p_doctorstrange_19918_516f94d3.jpeg",
        },
        {
          id: "makdra-man",
          title: "MAKDRA MANAV",
          url: "../download.jpg",
        },
  
        {
          id: "semlon-bhai",
          title: "SEMLON BHAI",
          url: "../Salman_Khan_at_Renault_Star_Guild_Awards.jpg",
        },
        {
          id: "gativan-blak",
          title: "GATIVAN BLAK",
          url: "../flash.jpg",
        },
      
]
for(let i in books){
 let id=books[i]["id"]
 document.querySelector(`#${id}`).addEventListener("mouseenter",() =>{
  document.querySelector(`#${id}`).setAttribute("material", {
    color: "#fff",
    opacity: 1,
  });
 })
 document.querySelector(`#${id}`).addEventListener("mouseleave", (event) => {
  document.querySelector(`#${id}`).setAttribute("material", {
    color: "#0077CC",
    opacity: 1,
  });

 });
}

      
    }
    ,

    createCards:function(){
        let prevpos=-60
        let books=[
                {
                  id: "vichitra-vade",
                  title: "VICHITRA VADE",
                  url: "../p_doctorstrange_19918_516f94d3.jpeg",
                },
                {
                  id: "makdra-man",
                  title: "MAKDRA MANAV",
                  url: "../download.jpg",
                },
          
                {
                  id: "semlon-bhai",
                  title: "SEMLON BHAI",
                  url: "../Salman_Khan_at_Renault_Star_Guild_Awards.jpg",
                },
                {
                  id: "gativan-blak",
                  title: "GATIVAN BLAK",
                  url: "../flash.jpg",
                },
              
        ]
        for(let item of books){

        let posX=prevpos+25
        const pos={
            x:posX,
            y:10,
            z:-40
        }
        prevpos=posX
        const book=this.createBookRigns(pos,item.id)
        const thumbnail=this.createThumbnailBook(pos,item)
        const title=this.createTitleBook(pos,item)
        thumbnail.appendChild(title)
        book.appendChild(thumbnail)
        this.el.appendChild(book)
    }
    },
   createBookRigns:function(pos,id){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28,
    });
    entityEl.setAttribute("position", pos);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
    });
    return entityEl

   } ,
   createThumbnailBook:function(pos,item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 18,
        height:26
    });
    entityEl.setAttribute("material", { src: item.url });
    entityEl.setAttribute("position", {x:0,y:0,z:0.1})

    return entityEl;
  },
  createTitleBook: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    
    return entityEl;
  },
   }

)
