(() =>{
    function run() {
       const bodyElem = document.querySelector('body');
       const eyeElems = document.querySelectorAll('.eye');

       function onMouseMove({pageX, pageY}) {
            eyeElems.forEach((eyeElem) =>{
               const{ left, top} = eyeElem.getBoundingClientRect();

               const eyeCenterX = left + eyeElem.offsetWidth /2;
               const eyeCenterY = top + eyeElem.offsetHeight /2;
               const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY); //หาตำแหน่ง radian เพื่อบอกว่าเมาส์เราอยู่ตำหแน่งไหน
               const angle = radian*180/Math.PI* -1;
               eyeElem.style.transform = `rotate(${angle}deg)`; //ทำหน้าตาเลื่อนตามเมาส์จากการใส่ค่าที่เราคำนวณไว้ด้านบน
             });
         
        }

       bodyElem.addEventListener('mousemove', onMouseMove);

    }
    run();
})();