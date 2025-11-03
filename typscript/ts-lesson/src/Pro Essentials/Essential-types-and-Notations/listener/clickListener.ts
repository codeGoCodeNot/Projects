type Listener = (event: MouseEvent) => void;

const addClickListener = (listener: Listener) => {
  document.addEventListener("click", listener);
};

addClickListener((event) => {
  console.log("Clicked at:", event.clientX, event.clientY);
});
