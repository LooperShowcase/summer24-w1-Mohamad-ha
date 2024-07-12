const imagesDiv=document.getElementById("images")
console.log(imagesDiv)
const resultDiv=document .getElementById('result')

let id=(Math.random()*6+1)*10000
id =Math.floor(id)
const fakeImg = "https://thispersondoesnotexist.com/"
const realImg = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`

const rnd=Math.random()>0.5
const arr=[rnd,!rnd]
const again=document.createElement("button")
again.innerText='play again'
again.onclick =function(){
    location.reload()
}
for(const x of arr)
{
    const w=document.createElement("img")
    w.src=(x ?realImg:fakeImg)
    imagesDiv.append(w)

    w.onclick=function(){
    resultDiv.innerText = x ? "correct" : 'not correct'
    imagesDiv.style.pointerEvents='none'
    resultDiv.appendChild(again)    }


}
        
    
    

    
