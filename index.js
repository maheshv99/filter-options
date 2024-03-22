const searchText=document.querySelector('.input-field input');
const searchBtn=document.querySelector('.input-field button');
const productItems=document.querySelectorAll('.product-item');
const catagory_btn=document.querySelectorAll('.search-btn button');



function filter(check){
    catagory_btn.forEach(btn=>btn.style.backgroundColor='rgba(0, 208, 255, 0.923)');
    // console.log(productItems);
    productItems.forEach(item=>{
        let content=item.querySelector('h3');
        let str=searchText.value.toLowerCase();
        let findStr=content.textContent.toLowerCase();
        console.log(content.dataset.catageory === check);
        
    
        if((searchText.value === '' || findStr.includes(str)) || (check === content.dataset.catageory)){
            item.style.display='block';
            console.log('hello');
            
        }else{
            item.style.display='none';
        }
    
       })
}

searchBtn.addEventListener('click',()=>{
    console.log('clicked');
      productItems.forEach(item=>{
        item.style.display='black';
    })
    filter();
})

searchText.addEventListener('input',()=>{
     productItems.forEach(item=>{
        item.style.display='black';
    })
    console.log("chnaged");
    filter();
})

function setcatgory(e){
    

    catagory_btn.forEach(btn=>btn.style.backgroundColor='rgba(0, 208, 255, 0.923)');
    console.log('clicked',e.target.style.backgroundColor='orange');

    productItems.forEach(item=>{
        let content=item.querySelector('h3');
        if((e.target.dataset.catageory === content.dataset.catageory) || e.target.dataset.catageory === 'all'){
            item.style.display='block';
            console.log('hello');
            
            
        }else{
            item.style.display='none';
        }
    })

}

catagory_btn.forEach(btn=>{
    btn.addEventListener('click',(e)=>{

        setcatgory(e);
    });
})

