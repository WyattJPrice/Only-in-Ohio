const modal = document.querySelector(".popup")
document.querySelector(".info").addEventListener("click", () => {
 modal.showModal();
});
const closeBtns = document.getElementsByClassName("exit");
for (btn of closeBtns) {
 btn.addEventListener("click", () => {
   modal.close();
 })
}