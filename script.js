const score = document.querySelectorAll(".scores");
const chance = document.querySelector(".chances");
const btn = document.querySelectorAll(".num");
const  arr = [1,2,3,4,5,6,7,8,9,10];
const luck = document.querySelector(".luck");
const  lastbtn = document.querySelector("#again");
       lastbtn.style.visibility = "hidden";
let count=1;
let scoreIdx = 2;

let randomNum = Math.floor(Math.random()*10)+1;

console.log(randomNum);

const numDisable = () => {
    btn.forEach((b) => {
        b.disabled = true;
    });
};

lastbtn.addEventListener("click", () => {

    randomNum = Math.floor(Math.random()*10)+1;
    console.log(randomNum);

    count = 1;

    scoreIdx = 2;

    lastbtn.style.visibility = "hidden";

    for (let s of score)
    {
        s.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        s.style.boxShadow = "0px 0px 10px 5px rgba(255, 255, 255, 1.0)";
    }

    btn.forEach((b) => {
        b.disabled = false;
    });

    chance.innerText = "3 chances left";
    
    luck.innerText = "Tap the button to make your first guess.";
    luck.style.fontSize = "15px";
    luck.style.textShadow = "";

});

btn.forEach((num, index) => {
    num.addEventListener("click", () => {
        let value = arr[index];
        if (count === 1)
        {
            chance.innerText = "2 chances left";
            score[scoreIdx].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            score[scoreIdx].style.boxShadow = "0px 0px 0px 0px";

            if (value === randomNum)
            {
                luck.innerText = "Found it!";
                luck.style.fontSize = "20px";
                luck.style.textShadow = "0 0 8px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.35)";
                lastbtn.style.visibility = "visible";
                numDisable();
            }
            else if (value > randomNum)
            {
                luck.innerText = "Too high, Try a lower number";
            }
            else if (value < randomNum)
            {
                luck.innerText = "Too low, Try a higher number";
            }

            scoreIdx--;
            count++;
        }
        else if (count === 2)
        {
            chance.innerText = "1 chances left";
            score[scoreIdx].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            score[scoreIdx].style.boxShadow = "0px 0px 0px 0px";

            if (value === randomNum)
            {
                luck.innerText = "Found it!";
                luck.style.fontSize = "20px";
                luck.style.textShadow = "0 0 8px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.35)";
                lastbtn.style.visibility = "visible";
                numDisable();
                
            }
            else if (value > randomNum)
            {
                luck.innerText = "Too high, Try a lower number";
            }
            else if (value < randomNum)
            {
                luck.innerText = "Too low, Try a higher number";
            }

            scoreIdx--;
            count++;
            
        }
        else if (count === 3)
        {
            chance.innerText = "0 chances left";
            score[scoreIdx].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            score[scoreIdx].style.boxShadow = "0px 0px 0px 0px";
            
            if (value === randomNum)
            {
                luck.innerText = "Found it!";
                luck.style.fontSize = "20px";
                luck.style.textShadow = "0 0 8px rgba(255, 255, 255, 1.0), 0 0 20px rgba(255, 255, 255, 1.0), 0 0 40px rgba(255, 255, 255, 1.0)";
                lastbtn.style.visibility = "visible";
                numDisable();
            }
            else if (value > randomNum)
            {
                luck.innerText = "Too high, Try a lower number";
            }
            else if (value < randomNum)
            {
                luck.innerText = "Too low, Try a higher number";
            }

            lastbtn.style.visibility = "visible";
            numDisable();

        }

    });

});