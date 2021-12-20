
//display
function appendOperation(operation){
document.getElementById('display').innerHTML += operation;
}


$(function(){
    
      $('#display').textfill({
    
        maxFontPixels: 360,// sizing up the text as big as possible to this setting
    
        minFontPixel: 40,// minimal font size
    
        innerTag:'span',// by default all <span/>s' font size in $(selector) will be changed to fill.
    
        callback:null,// callback when each element's (innerTag) font size is resized.
    
        success:null,// callback when a resizing is done
    
        fail:null,// callback when a resizing is failed
    
        complete:null,// callback when all elements are done.
    
        widthOnly:false,// only resizing for width restraint, this is intentionally used with CSS white-space: nowrap for header tags.
    
        explicitWidth:null,// explicit dimension
    
        explicitHeight:null,// explicit dimension
    
        changeLineHeight:false // resize line-height of parent
    
      });
    
    });
   

//calc percent
function calculatePercent(){
    let container = document.getElementById("result-display");

    container.innerHTML = container.innerHTML /100;
}

//calc
function calculateResult(){

    //get current value
    let container = document.getElementById("result-display");
    //evaluate inner html
    let result = eval(container.innerHTML);
    //show result
    container.innerHTML = result;
}

//delete last value
function deleteLast(){
    
    let container = document.getElementById("result-display");

    if(container.innerHTML.endsWith(' ')){
        container.innerHTML = container.innerHTML.slice(0, -3);
    }else{
        container.innerHTML = container.innerHTML.slice(0, -1);
    }   
}

//delte all in display
function deleteAll(){
    let container = document.getElementById('my-element');
    container.innerHTML = "";
}

