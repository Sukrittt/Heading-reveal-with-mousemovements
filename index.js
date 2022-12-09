const left = document.getElementById("left-side");

const onMoveFunc = (e) => {
  const p = (e.clientX / window.innerWidth) * 100;
  left.style.width = `${p}%`;
};

document.onmousemove = (e) => onMoveFunc(e);
document.ontouchmove = (e) => onMoveFunc(e.touches[0]);
