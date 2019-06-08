function myfunc(n) {
  var dots = document.getElementById("dots"+n.toString());
  var moreText = document.getElementById("more"+n.toString());
  var btnText = document.getElementById("mybtn"+n.toString());

  if (dots.style.display === "none") {
    dots.style.display = 'inline';
    btnText.innerHTML = 'More Places'; 
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Less'; 
    moreText.style.display = 'inline';
  }
}
function readMore(a,b){
  var dots = document.getElementById("dots"+a.toString()+b.toString());
  var moreText = document.getElementById("more"+a.toString()+b.toString());
  var btnText = document.getElementById("mybtn"+a.toString()+b.toString());

  if (dots.style.display === "none") {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More'; 
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Less'; 
    moreText.style.display = 'inline';
  }

}
