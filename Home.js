document.onload =showJobs(`https://github-jobs-proxy.appspot.com/positions?description=developer&location=`);
let mydata;
document.getElementById('location_inpt').value="New York";


async function showJobs(http){
    const res = await fetch (`${http}`);
    const data = await res.json();
    mydata=data;
    if(mydata.length==0){
        document.getElementsByTagName('main')[0].innerHTML='<h3>There are no jobs for your choices </h3> ';
        return;
       
    }
   document.getElementsByTagName('main')[0].innerHTML='';
    data.forEach(element => {
       document.getElementsByTagName('main')[0].innerHTML+=` <div class="job"><h2>${element.title} </h2>        <p><span style="color: blueviolet; font-weight: bolder;">Type:</span>  ${element.type} <br/> <p><span style="color: blueviolet; font-weight: bolder;">URL: </span> <a href="${element.url}">${element.url}</a>
       <br/> <p><span style="color: blueviolet; font-weight: bolder;">Created at: </span> :${element.created_at.url}
       <br/> <p><span style="color: blueviolet; font-weight: bolder;"> Company: </span> :${element.company}
       <br/> <p><span style="color: blueviolet; font-weight: bolder;">Company URL: </span> <a href="${element.company_url}">${element.company_url}</a>
       <br/> <p><span style="color: blueviolet; font-weight: bolder;"> Location: </span> :${element.location}
       <br/> <p><span style="color: blueviolet; font-weight: bolder;"> Description: </span> :${element.description}
       </p></div> `;
      
        
    });

}

document.getElementsByTagName('img')[0].addEventListener('click',function(){
    showJobs(`https://github-jobs-proxy.appspot.com/positions?description=java&location=${document.getElementById('location_inpt').value}`);
})
document.getElementsByTagName('img')[1].addEventListener('click',function(){
    showJobs(`https://github-jobs-proxy.appspot.com/positions?description=javascript&location=${document.getElementById('location_inpt').value}`);
})
document.getElementsByTagName('img')[2].addEventListener('click',function(){
    showJobs(`https://github-jobs-proxy.appspot.com/positions?description=ruby&location=${document.getElementById('location_inpt').value}`);
})
document.getElementsByTagName('img')[3].addEventListener('click',function(){
    showJobs(`https://github-jobs-proxy.appspot.com/positions?description=c++&location=${document.getElementById('location_inpt').value}`);
})
document.getElementsByTagName('img')[4].addEventListener('click',function(){
    showJobs(`https://github-jobs-proxy.appspot.com/positions?description=c&location=${document.getElementById('location_inpt').value}`);
})
document.getElementsByTagName('img')[5].addEventListener('click',function(){
    showJobs(`https://github-jobs-proxy.appspot.com/positions?description=sql&location=${document.getElementById('location_inpt').value}`);
})
document.getElementsByTagName('img')[6].addEventListener('click',function(){
    showJobs(`https://github-jobs-proxy.appspot.com/positions?description=python&location=${document.getElementById('location_inpt').value}`);
})
