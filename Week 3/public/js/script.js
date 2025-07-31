const cardList = [
{
title: "Bird 2",
image: "images/HD-wallpaper-robot-hummingbird-art-birds-other.jpg",
link: "About Bird 2",
desciption: "Demo desciption about kitten 2"
},
{
title: "Bird 3",
image: "images/1000_F_1210661233_5vLtlKYVi7nML8vCWIuwuLEg5zUhIraj.jpg",
link: "About Bird 3",
desciption: "Demo desciption about kitten 3"
},
{
title: "Bird 2",
image: "images/HD-wallpaper-robot-hummingbird-art-birds-other.jpg",
link: "About Bird 2",
desciption: "Demo desciption about kitten 2"
},
{
title: "Bird 2",
image: "images/HD-wallpaper-robot-hummingbird-art-birds-other.jpg",
link: "About Bird 2",
desciption: "Demo desciption about kitten 2"
}
]
const clickMe = () => {
alert("Thanks for clicking me. Hope you have a nice day!")
}
const addCards = (items) => {
items.forEach(item => {
let itemToAppend = '<div class="col s4 center-align">'+
'<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
'</div><div class="card-content">'+
'<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
'<div class="card-reveal">'+
'<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
'<p class="card-text">'+item.desciption+'</p>'+
'</div></div></div>';
$("#card-section").append(itemToAppend)
});
}
$(document).ready(function(){
$('.materialboxed').materialbox();
$('#clickMeButton').click(()=>{
clickMe();
})
addCards(cardList);
});

$(document).ready(function(){
$('.materialboxed').materialbox();
$('#formSubmit').click(()=>{
submitForm();
})
addCards(cardList);
$('.modal').modal();
});
