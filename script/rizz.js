const apiBaseUrl="https://animerizz.com/api.php";async function fetchRandomQuotes(){try{showLoading(!0);let e=await fetch("https://animerizz.com/api.php/random"),t=await e.json();displayResults(t)}catch(a){console.error("Error:",a),displayResults({error:"Failed to fetch quotes"})}finally{showLoading(!1)}}function displayResults(e){let t=document.getElementById("results");if(t.innerHTML="",e.error)t.innerHTML=`<div class="alert alert-danger fade-in">${e.error}</div>`;else if(e.quotes&&e.quotes.length>0){let a=e.quotes.map(e=>`
                    <div class="card fade-in">
                        <div class="card-body">
                            <h5 class="card-title anime-title">${e.anime.slice(1,e.anime.length-1)}</h5>
                            <h6 class="card-subtitle mb-2 character-name">${e.person}</h6>
                            <p class="card-text quote-text">"${e.quote}"</p>
                            <button class="btn-copy" onclick="copyQuote(this)" data-quote="${e.quote}">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                `).join("");t.innerHTML=a}else t.innerHTML='<div class="alert alert-warning fade-in">No quotes found</div>'}function showLoading(e){document.getElementById("loading").style.display=e?"block":"none"}function copyQuote(e){let t=e.getAttribute("data-quote");navigator.clipboard.writeText(t).then(()=>{e.innerHTML='<i class="fas fa-check"></i>',setTimeout(()=>{e.innerHTML='<i class="fas fa-copy"></i>'},2e3)})}window.addEventListener("load",fetchRandomQuotes);
