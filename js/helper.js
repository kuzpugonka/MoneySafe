export const convertStringNumber = (str) => {
  const noSpaceStr = str.replace(/\s+/g, ""); // удаляем пробелы
  const num = parseFloat(noSpaceStr); // переводим в число

  if (!isNaN(num) && isFinite(num)) {
    return num;
  } else {
    return false;
  }
};

export const reformatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
};