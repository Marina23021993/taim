
     let menu_btn=document.querySelector('.menu_btn')
    let menu=document.querySelector('.menu')
    const aud=document.getElementById('audio')
    const audio=document.getElementById('audio2')

    menu_btn.addEventListener('click',function(){
      console.log('click')
      aud.play();
      menu.nextElementSibling;
     
      if(menu.style.maxHeight){
        document.querySelector('.menu');
        menu.style.maxHeight=null;
      }
      else {
        document.querySelector('.menu');
        menu.style.maxHeight=null;
        menu.style.maxHeight=menu.scrollHeight+'px';
      }
      
    }
    );
    
    let btn_one=document.querySelector('.vsmytku');
    let btn_two=document.querySelector('.medium');
    let btn_three=document.querySelector('.vkrutuy');
   const img=document.querySelector('.img_body_img');
   let item_one=document.querySelector('.one_active');
   let item_two=document.querySelector('.two_active ');
   let item_three=document.querySelector('.three_active')
   




let timer_one=document.querySelector('.timer_one')
let timer_two=document.querySelector('.timer_two')
let timer_tree=document.querySelector('.timer_tree')
 timer_one=setInterval
timer_two=setInterval
timer_tree=setInterval
const btn_start=document.querySelector('.btn_start')


document.querySelector('.vsmytku').addEventListener('click',function (){
  
  clearInterval(timer_tree)
  clearInterval(timer_two)
  aud.play();
  
  
  document.querySelector('.timer').innerHTML=1+ ":" +60;
  if(item_one.style.display!="block"){
    
    item_one.style.display="block"
    img.style.display="none"
    item_two.style.display="none"
    item_three.style.display="none"
    
  }
  else item_one.style.display="none";

  let minute=1
  let sec=60
  btn_start.addEventListener('click',function(){
    clearInterval(timer_two)
    clearTimeout(timer_tree)
    aud.play();
    timer_one= setInterval (function(){
      document.querySelector('.timer').innerHTML=minute + ":" + sec;
      
      sec--;
      
      if(sec==-1){
        minute--
        sec=60
      }
      if(minute<0 ){
        audio.play()
        
        clearTimeout(timer_one)
      }
      
      if(sec<10){
        sec="0"+sec;
      }
       
      
      
    }, 1000);
    });
  });     
    

    
  document.querySelector('.medium').addEventListener('click',function (){
    
    clearInterval(timer_one)
    clearTimeout(timer_tree)
    aud.play();
    
    
    document.querySelector('.timer').innerHTML=2+ ":" +60;
    if(item_two.style.display!="block"){
      
      item_one.style.display="none"
      img.style.display="none"
      item_two.style.display="block"
      item_three.style.display="none"
      
    }
    else item_two.style.display="none";
  
    let minute=2
    let sec=60
    btn_start.addEventListener('click',function(){
      clearInterval(timer_one)
      clearTimeout(timer_tree)
      aud.play();
      timer_one= setInterval (function(){
        document.querySelector('.timer').innerHTML=minute + ":" + sec;
        
        sec--;
        
        if(sec==-1){
          minute--
          sec=60
        }
        if(minute<0 ){
          audio.play()
          clearTimeout(timer_two)
        }
        if(sec<10){
          sec="0"+sec;
        }
        
        if(sec<0){
         end.style.display="block"
          
        }

        
      }, 1000);
      });
    });       
        


    


document.querySelector('.vkrutuy').addEventListener('click',function(){
  clearInterval(timer_one)
  clearInterval(timer_two)
  aud.play();
  
  
  document.querySelector('.timer').innerHTML=4+ ":" +60;
  if(item_three.style.display!="block"){
    item_three.style.display="block"
    img.style.display="none"
    item_one.style.display="none"
    item_two.style.display="none"
   
  }
  
  else item_three.style.display="none"
 
})
let minute=4
let sec=60
btn_start.addEventListener('click',function(){
  clearInterval(timer_one)
  clearInterval(timer_two)
  aud.play();
    timer_tree= setInterval (function(){
       document.querySelector('.timer').innerHTML=minute + ":" + sec;
       sec--;
  if(sec==-1){
    minute--
    sec=60
  }
  if(minute<0 ){
     audio.play()
    clearTimeout(timer_tree)
  }
  
  if(sec<10){
    sec="0"+sec;
  }
  
}, 1000);
});


    


  
