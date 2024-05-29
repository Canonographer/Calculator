function display(n) {
    result.value+=n
}
function findOut() {
    if (result.value=="") {
        result.value=""
    }
    else{
        result.value=eval(result.value)
    }
    
}
function Clear() {
    result.value=""
}
function Backspace() {
    
    (result.value)=(result.value).slice(0,-1)
}