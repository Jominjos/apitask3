
async function calapi(){

    try{ 
        
        let resp = await fetch("https://cat-fact.herokuapp.com/facts")
     
        let res = await resp.json();
        //console.log(res[0]);

        res.forEach(d => {
           // console.log(d.text);
            let lis = document.createElement('li')
            lis.innerText=d.text
            list.appendChild(lis)
        });
    }
    catch{

    }

}
 calapi();