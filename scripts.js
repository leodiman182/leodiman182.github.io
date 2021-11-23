/* ESCONDER MENU COM LINKS */

const links = document.querySelectorAll('.menu-wrap .menu  div  div  ul  li  a')

for (const link of links) {
  link.addEventListener('click', function () {
    document.getElementById("checkbox").checked = false;
  })
}