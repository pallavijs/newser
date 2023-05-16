let  container = document.getElementById("container")









const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-04-16&sortBy=publishedAt&apiKey=912422c67eda4d69acb68b08bfacb661"


const  fetchNewsData = async()=>{

   const newsData = await fetch(url);
const response = newsData.json();
response.then((data)=>{
    console.log(data.articles)

container.innerHTML +=  (
   
data?.articles?.map((item)=>{
    console.log(item.title)
    return (
`
    
<div
class="card bg-green-200 flex flex-col justify-center rounded-lg m-2 sm:w-58 w-92 px-2"
>
<h1 class="font-mono text-xl text-center">${item.title}</h1>
<img src="${item.urlToImage}" alt="content-image" class="card-img w-" />

<p>
  ${item.description}
</p>
<p class="text-gray-800 ">${item.content}</p>
</div>
`
    )
})
)
})






}








const fetchNewsFromApi = async()=>{


    const url = 'https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=Elon%20Musk&lang=en&sort_by=relevancy&page=1&media=True';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a8050b5b57mshbb1358d56cb53a8p1e67c1jsnd6a2647f4f70',
		'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}