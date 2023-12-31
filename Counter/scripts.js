var count= 0;

function changeCount(num){
    count += num;
    document.getElementsById("count").innerHTML = count;
}