async function getFile(e){try{return await (await fetch("https://1short.xyz/get-file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fid:e})})).json()}catch(t){throw console.error("Error fetching file:",t),t}}async function getToken(){try{return await (await fetch("https://1short.xyz/get-token",{method:"POST"})).json()}catch(e){throw console.error("Error fetching token:",e),e}}function convertBytes(e){return 0==e?"0 Bytes":(sizes=["Bytes","KB","MB","GB"],i=Math.floor(Math.log(e)/Math.log(1e3)),parseFloat((e/Math.pow(1e3,i)).toFixed(2))+" "+sizes[i])}let searchParams=new URLSearchParams(window.location.search),fileId=searchParams.get("f");if(fileId){sessionStorage.setItem("fileId",fileId),history.replaceState(null,"","/");let e,t,n,l,o,r,a,s;getFile(fileId).then(a=>{if(!0===a.ok)e=a.fid,t=a.tgfid,n=a.sign,l=a.mime,o=a.fname,r=convertBytes(a.fsize),document.getElementById("fileName").innerText=o,document.getElementById("fileSize").innerText=r,document.getElementById("tgdown").href=`${BOT}/?start=${e}`,document.getElementById("fileInfo").style.display="block";else throw Error("Something went wrong while fetching file data")}).catch(e=>{console.error(e),alert("Something Went Wrong!!!"),location.reload()}),document.getElementById("genlink").addEventListener("click",()=>{s=8,getToken().then(e=>{if(!0===e.ok)a=e.token;else throw Error("Unable to fetch token");document.getElementById("genlink").innerHTML='<i class="fa fa-cog fa-spin fa-1x fa-fw"></i> Generating Link, Please Wait';let l=setInterval(()=>{if(-1==--s){clearInterval(l),document.getElementById("genlink").style.display="none";let e=`http://jx.imjxy24.workers.dev/${t}?sign=${n}&token=${a}`;document.getElementById("dllink").addEventListener("click",()=>{location.assign(e)}),document.getElementById("tgdown").style.display="inline",document.getElementById("dllink").style.display="inline"}},1500)}).catch(e=>{console.error(e),alert("Failed to generate download link")})},{once:!0})}
