let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let imgExt;
let windowWidth = window.innerWidth; /* Grap the current window width we have in the website */

if (galleryImages) {
    // image is the keyword to reference to img function
    // index-> counts the current index of the imgArrays
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            // Grap all images
            // getComputedStyle-> inline styling in HTML; get all the styles element in CSS file
            let getElementCss = window.getComputedStyle(image); //get all image elements
            let getFullImgUrl = getElementCss.getPropertyValue("background-image"); //get the respective property
            let getImgUrlPos = getFullImgUrl.split("/img/"); //take & split the values in bg-img 
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            
            getLatestOpenedImg = index + 1; //make it sensible for image to start from 1 1
            
            let container = document.body; //create into html body
            let newImgWindow = document.createElement("div"); //insert new element into the page
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window"); //append class for the element
            newImgWindow.setAttribute("onclick", "closeImg()"); 

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "img/" + setNewImgUrl); //append class for the element
            newImg.setAttribute("id", "current-img");


            // update imgExt -> pass the value into newImgClass
            imgExt = setNewImgUrl.split(".")[1]; // alert(imgExt);

            // run block of code whent he img loads & make a responsive btn
            newImg.onload = function() {
                let imgWidth = this.width; //get the width of the loaded img
                let calcImgToEdge = ((windowWidth - imgWidth) /2) - 80; // calc where the imgBtn should be

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";

                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";


            }


        }
    });
}


function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
    document.querySelector("#current-img").remove(); // remove current img

    let getImgWindow = document.querySelector(".img-window"); //get windowImg
    let newImg = document.createElement("img"); //create new window imgElement
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if (calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    } else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if (calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }

    newImg.setAttribute("src", "img/img" + calcNewImg + ".jpeg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg; //update openedImg tracks

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80; // imgBtn for respective winImg

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
    }

}