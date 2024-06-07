let mylist = document.getElementById('conference-list');
const divs = mylist.children;
let listitems = [];
for (i = 0; i < divs.length; i++) {
    // console.log(divs.item(i).tagName)
    if (divs.item(i).tagName == 'DIV'){
        listitems.push(divs.item(i));
    }
}
listitems.sort(function(a, b) {
    const compA = a.getAttribute('id').toUpperCase();
    const compB = b.getAttribute('id').toUpperCase();
    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
});
for (i = 0; i < listitems.length; i++) {
    mylist.appendChild(listitems[i]);
}