//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.onclick = getUrlData;

function getUrlData(){
	
	output.innerHTML = "";
	
	let prom1 = fetch(images[0].url);
    let prom2 = fetch(images[1].url);
    let prom3 = fetch(images[2].url);

	let result = Promise.all([prom1,prom2,prom3]);
	
	    result.then((data)=>{
			//data going to be array of images with wich each promise got resolve
			data.forEach((image)=>{
				const imageTag = document.createElement("img");
				imageTag.className = "photos";
				imageTag.src= `${image.url}`;
			output.append(imageTag);	
			});
			
		})
	    .catch((error)=>{
		     console.log(`Failed to load image's URL: ${error}`);
	})
}