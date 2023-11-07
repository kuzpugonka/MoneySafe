export const convertStringNumber = (str) => {
  const noSpaceStr = str.replace(/\s+/g, ""); // удаляем пробелы
  const num = parseFloat(noSpaceStr); // переводим в число

  if (!isNaN(num) && isFinite(num)) {
    return num;
  } else {
    return false;
  }
};
