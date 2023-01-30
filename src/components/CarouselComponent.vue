<template>
<div class="text-center pt-5 my-5">
    <h2>Best Sellers</h2> 
    <div class="carousel">
        <div class="carousel__body">
            <div class="carousel__slider">
            <div class="carousel__slider__item">
                <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                    <img src="img\open-uri20180630-4-1afkyee.jpg" alt="">
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
                </div>
            </div>
            <div class="carousel__slider__item">
                <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                    <img src="img\open-uri20180630-4-1fa1p2f.jpg" alt="">
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
                </div>
            </div>
            <div class="carousel__slider__item">
                <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                    <img src="img\open-uri20180630-4-1mibdm.jpg" alt="">
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
                </div>
            </div>
            <div class="carousel__slider__item">
                <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                    <img src="img\open-uri20180630-4-1huiv9y.jpg" alt="">
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
                </div>
            </div>
            <div class="carousel__slider__item">
                <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                    <img src="img\data.jpg" alt="">
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
                </div>
            </div>
            <div class="carousel__slider__item">
                <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                    <img src="img\open-uri20180630-4-xhqdne.jpg" alt="">
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
                </div>
            </div>
            <div class="carousel__slider__item">
                <div class="item__3d-frame">
                <div class="item__3d-frame__box item__3d-frame__box--front">
                    <img src="img\open-uri20180630-4-ucbwbt.jpg" alt="">
                </div>
                <div class="item__3d-frame__box item__3d-frame__box--left"></div>
                <div class="item__3d-frame__box item__3d-frame__box--right"></div>
                </div>
            </div>
            </div>
        </div>
        <div class="carousel__prev"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="carousel__next"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'AboutPage',

        methods: {

            function() {

                "use strict";

                var carousel = document.getElementsByClassName('carousel')[0],
                    slider = carousel.getElementsByClassName('carousel__slider')[0],
                    items = carousel.getElementsByClassName('carousel__slider__item'),
                    prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
                    nextBtn = carousel.getElementsByClassName('carousel__next')[0];
                
                var width, height, totalWidth, margin = 20,
                    currIndex = 0,
                    interval, intervalTime = 4000;
                
                function init() {
                    resize();
                    move(Math.floor(items.length / 2));
                    bindEvents();
                    
                    timer();
                }
                
                function resize() {
                    width = Math.max(window.innerWidth * .25, 275),
                    height = window.innerHeight * .5,
                    totalWidth = width * items.length;
                    
                    slider.style.width = totalWidth + "px";
                    
                    for(var i = 0; i < items.length; i++) {
                        let item = items[i];
                        item.style.width = (width - (margin * 2)) + "px";
                        item.style.height = height + "px";
                    }
                }
                
                function move(index) {
                    
                    if(index < 1) index = items.length;
                    if(index > items.length) index = 1;
                    currIndex = index;
                    
                    for(var i = 0; i < items.length; i++) {
                        let item = items[i],
                            box = item.getElementsByClassName('item__3d-frame')[0];
                        if(i == (index - 1)) {
                            item.classList.add('carousel__slider__item--active');
                            box.style.transform = "perspective(1200px)"; 
                        } else {
                            item.classList.remove('carousel__slider__item--active');
                            box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
                        }
                    }
                    
                    slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
                }
                
                function timer() {
                    clearInterval(interval);    
                    interval = setInterval(() => {
                        move(++currIndex);
                    }, intervalTime);    
                }
                
                function prev() {
                    move(--currIndex);
                    timer();
                }
                
                function next() {
                    move(++currIndex);    
                    timer();
                }

                function bindEvents() {
                    window.onresize = resize;
                    prevBtn.addEventListener('click', () => { prev(); });
                    nextBtn.addEventListener('click', () => { next(); });    
                }
                
                init(); 
            }
        },

    mounted(){
        this.function();
    }
}

</script>

<style lang="scss" scoped>
@use "../assets/partials/variables" as *;
// :root {
//   --crsl-bg: transparent;
//   --box-bg: #2094ed;
//   --box-shadow: #ec1515;
//   --box-shadow-border: #b7eb0d;
//   --box-border: #fff;
// }

html, body {
	// padding: 0;
	// margin: 0;
	// width: 100%;
	// height: 100%;

//   background: rgb(47,53,57);
//   background: -moz-radial-gradient(circle, rgba(47,53,57,1) 0%, rgba(30,39,46,1) 100%);
//   background: -webkit-radial-gradient(circle, rgba(47,53,57,1) 0%, rgba(30,39,46,1) 100%);
//   background: radial-gradient(circle, rgba(47,53,57,1) 0%, rgba(30,39,46,1) 100%);
//   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2f3539",endColorstr="#1e272e",GradientType=1); 
  
//   * {
//       font-family: 'Source Sans Pro', sans-serif;
//   }
  
//   > p {
//     font-size: .95em;
//     font-weight: bold;
//     position: absolute;
//     top: 7.5%;
//     width: 100%;
//     letter-spacing: 4px;
//     text-transform: uppercase;
//     text-align: center;
//     color: white;
//     user-select: none;    
//   }
  
  > .carousel {
   padding-top: 125px; 
  }
}

h2 {
    font-size: $font-medium-large;
    font-weight: bold;
    color: $rich-green;
}
.carousel {
  padding: 50px 0;
  position: relative;
  display: block;
  width: 100%;
  box-sizing: border-box;
  background-color: $white;
  
  &__prev, &__next {
    position: absolute;
    top: 100%;
    
    i {
        transition: transform 0.25s ease;
    transform-origin: top;
      font-size: 45px;
      color: $rich-green;
      cursor: pointer;
      
    }
  }
  
  &__prev:hover, &__next:hover { 
    i{
    transform: translateX( -10px);
    }
    
  }
  &__next:hover{
    i{
        transform: translateX( 10px);
    }
  }  
  
  &__prev { left: 40%; }
  &__next { right: 40%; }  

  
  &__body {
   width: 100%;
   padding: 50px 0 50px 0;
   overflow: hidden;
    
    .carousel__slider {
      position: relative;
      transition: transform 1s ease-in-out;
      background: black;

      &__item {
        position: relative;
        display: block;
        float: left;
        box-sizing: border-box;
        margin-left: 20px;
        margin-right: 20px;
        
        .item__3d-frame {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 1s ease-in-out;
          -webkit-transform-style: preserve-3d;
                  transform-style: preserve-3d;
          
          &:after {
            content: '';
            position: absolute;
            bottom: -15%;
            width: 100%;
            height: 40px;
            // background:rgba(160, 160, 160, 0.304);
            box-shadow: 0px 0px 5px 5px var(--box-shadow);
            transform: rotateX(90deg) translate3d(0px, -20px, 0px);
            opacity: 0.85;
          }          
          
          &__box {
            display: flex;
            align-items: center;
            vertical-align: middle;
            text-align: center;
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border-color: $pink-transp;
            background: rgba(255, 255, 255, 0.578);            
            border-width: 3px;
            border-style: solid;
            
            h1 {
              font-size: 7em;
              width: 100%;
              color: var(--box-border);
            }
          }
          
          &__box--right, &__box--left {
            top: 0;
            width: 40px;
            backface-visibility: hidden;
          }
          
          &__box--left {
            left: 0;
            border-left-width: 5px;
            background-color: $pink-transp;
            transform: translate3d(1px, 0, -40px) rotateY(-90deg);
            transform-origin: 0%;
          }
          
          &__box--right {
            right: 0;
            border-right-width: 5px;
            background-color: $pink-transp;
            transform: translate3d(-1px, 0, -40px) rotateY(90deg);
            transform-origin: 100%;
          }          
        } 
      }
      
      &__item--active {
        
        .item__3d-frame {
        }
      }
    }
  }
}
</style>