
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b0634fa0a4mshb26271e4e6ecaf9p11d3ccjsn955a78007085',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};
const btn = document.querySelector("button")
const summary = document.querySelector(".summary")


btn.addEventListener("click", (e) =>{
    e.preventDefault()
    const input = document.querySelector(".url").value

    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

    summary.innerText = "Please wait article is summarizing..."

    if(!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input))
        {
        summary.innerText = "Invalid URL Please enter a valid url"
    }
    else{
    
        fetch(url ,options)
        .then(data => data.json())
        .then(data => {
            //console.log(data?.summary)
            const txt = data?.summary;
            console.log(txt)
            summary.innerText = txt
            //summary.innerText = data?.summary
        })
        .catch(error => {
            console.log(error)
        }
        
        )
    }
})