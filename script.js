//your code here!
const list=document.querySelector('#infi-list');
var index=0;
for(var i=1;i<=10;i++){
	var item=list.createElement('li');
	item.innerText="Item" + i;
	list.appendChild(item);
});
