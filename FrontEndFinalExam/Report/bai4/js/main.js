
// function handling for array value obtain from ul -> return sorted array
function BuddleSortHandle(adata){

    let isSwap = true;
    let sortedResult = [];

    // convert each element inside adata array to integer value
    adata.forEach(element => {
        sortedResult.push(parseInt(element));
    });

    let maxidx = sortedResult.length - 1;
    do {
        isSwap = false;
        for(let idx = 0; idx < maxidx; idx++){
            if(sortedResult[idx] > sortedResult[idx + 1] ){
                let temp = sortedResult[idx];
                sortedResult[idx] = sortedResult[idx + 1];
                sortedResult[idx + 1] = temp;
                isSwap = true;
            }
        }
        maxidx--;
    } while (isSwap);

   return sortedResult;
}

// insert sorted value into html
function htmlUpdate(targetPara, index, elementLIData){

    let htmlUpdate = targetPara[index];
    // removing the first ul
    htmlUpdate.innerHTML = "";

    // insert sorted data
    let resultHTML = "";
    elementLIData.forEach(element => {
        resultHTML += "<li>" + element + "</li>";
    });

    htmlUpdate.innerHTML = resultHTML;
}

// main function hanling buddle sorting algorithm
function Buddle_Sort(){

    // get data from li tag, push into array
    var elementsLI = document.getElementsByTagName("li");
    var arrayLIData = [];
    for(let idx = 0; idx < elementsLI.length; idx++){
        arrayLIData.push(elementsLI[idx].innerHTML);
    }

    // handling for buddle sort algorithm
    arrayLIData = BuddleSortHandle(arrayLIData);
    
    // get data from li tag, push into array
    let elementsUL = document.getElementsByTagName("ul");
    let indexULUpdate = 0;

    htmlUpdate(elementsUL, indexULUpdate, arrayLIData);
}

