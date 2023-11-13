export const animationNumber = (element, number) => {
  const fps = 60;
  const duration = 1000;
  const frameDuration = duration / fps;
  const totalFrame = Math.round(duration / frameDuration);

  let currentFrame = 0;

  const initialNumber = parseInt(element.textContent.replace(/[^0-9.-]+/g, ""));

  const increment = Math.trunc((number - initialNumber) / totalFrame);

  const animate = () => {
    currentFrame += 1;
    const newNumber = initialNumber + increment * currentFrame;
    element.textContent = `${newNumber.toLocaleString("RU-ru")} ₽`;
    
    if (currentFrame < totalFrame) {
      requestAnimationFrame(animate);
    } else {
      element.textContent = `${number.toLocaleString("RU-ru")} ₽`;
    };
  };

  requestAnimationFrame(animate);
};

export const animationNumber2 = (element, number) => {
  const fps = 60;
  const duration = 1000;
  const frameDuration = duration / fps;
  const totalFrame = Math.round(duration / frameDuration);

  let currentFrame = 0;

  const initialNumber = parseInt(element.textContent.replace(/[^0-9.-]+/g, ""));

  const increment = Math.trunc((number - initialNumber) / totalFrame);

  const intervalId = setInterval(() => {
    currentFrame += 1;
    const newNumber = initialNumber + increment * currentFrame;

    element.textContent = `${newNumber.toLocaleString("RU-ru")} ₽`;
    
    if (currentFrame === totalFrame) {
      clearInterval(intervalId);
      element.textContent = `${number.toLocaleString("RU-ru")} ₽`;
    };
  }, frameDuration);

  requestAnimationFrame(animate);
};