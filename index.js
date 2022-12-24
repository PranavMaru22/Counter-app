const plus = document.querySelector("#plus")

const minus = document.querySelector("#minus")

const count = document.getElementById("counter")

const twoDec = (cnt) => {
    if(count.value === '0') return;
    count.value = parseInt(count.value)-2;
    console.log(count.value);
}
const twoInc = (cnt) => {
    count.value = parseInt(count.value)+2;
    console.log(count.value);
}
const oneInc = (cnt) => {
    count.value = parseInt(count.value)+1;
    console.log(count.value);
}
const oneDec = (cnt) => {
    if(count.value === '0') return;
    count.value = parseInt(count.value)-1;
    console.log(count.value);
}
plus.addEventListener("click",()=> oneInc(count.value))

minus.addEventListener("click",()=> oneDec(count.value))
plus.addEventListener("ondblclick",()=> twoDec(count.value))

minus.addEventListener("ondblclick",()=> twoDec(count.value))
