const sliderWrapperEl = document.querySelector('.sliderWrapper')

const sliderEl = document.querySelector('.slider')

const items = document.querySelectorAll('.menu')





const products = [
    {
        id:1,
        title: "NIKE",
        price: 11000,
        colors:[
            {
                code : "darkblue",
                img : "./img/nike.png"
            },
            {
                code : "black",
                img : "./img/air2.png"
            },

        ]


    },
    {
        id:2,
        title: "jordan",
        price: 12000,
        colors:[
            {
                code : "lightgray",
                img : "./img/jordan.png"
            },
            {
                code : "green",
                img : "./img/jordan2.png"
            },

        ]


    },


    {
        id:3,
        title: "AIR FORCE",
        price: 13000,
        colors:[
            {
                code : "black",
                img : "./img/air.png"
            },
            {
                code : "darkblue",
                img : "./img/air2.png"
            },

        ]


    },
    {
        id:4,
        title: "PUMA",
        price: 14000,
        colors:[
            {
                code : "white",
                img : "./pngegg.png"
            },
            {
                code : "darkblue",
                img : "./img/air2.png"
            },

        ]


    },

    {
        id:5,
        title: "BLAZER",
        price: 15000,
        colors:[
            {
                code : "white",
                img : "./img/blazer.png"
            },
            {
                code : "green",
                img : "./img/blazer2.png"
            },

        ]


    }



]


let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productIcon")
const currentProductTitle= document.querySelector(".productTitle")

const currentProductPrice=document.querySelector(".productPrice")
const currentProductColor=document.querySelectorAll(".color")
const currentProductSizes=document.querySelectorAll(".size")

items.forEach((items,index)=>{
    items.addEventListener("click",()=>{
        sliderEl.style.transform = `translateX(${-100*index}vw)`
        
        chosenProduct=products[index]
        console.log(chosenProduct)

        currentProductTitle.innerText = chosenProduct.title
        currentProductPrice.innerText=chosenProduct.price
        currentProductImg.src=chosenProduct.colors[0].img
        // currentProductColor.style.Color=chosenProduct.colors[0].code


        currentProductColor.forEach((colors,index)=>{
            colors.style.backgroundColor= chosenProduct.colors[index].code
            // currentProductImg.src= chosenProduct.colors[index].img
            colors.addEventListener("click",()=>{
                currentProductImg.src= chosenProduct.colors[index].img
            })
        })

        currentProductImg.forEach((color,index)=>{
            color.addEventListener("click",()=>{
                
            })
        })




    })

    currentProductSizes.forEach((size,index)=>{
        size.addEventListener("click",()=>{
            currentProductSizes.forEach((size)=>{
                size.style.backgroundColor="white"
            size.style.color="black"
            })
            size.style.backgroundColor="black"
            size.style.color="white"
        })
    })
   

})


const productButton = document.querySelector(".productButton")
const closeEl = document.querySelector(".close")
const payEl = document.querySelector(".payment")

productButton.addEventListener("click",()=>{
    payEl.style.display="flex";

})

closeEl.addEventListener("click",()=>{
    payEl.style.display="none";
})