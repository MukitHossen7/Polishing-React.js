export const setDataLocalStorage = (tasks) => {
  localStorage.setItem("todoApp", JSON.stringify(tasks));
};
export const getDataLocalStorage = () => {
  const data = localStorage.getItem("todoApp");
  if (!data) return [];
  const parsedData = JSON.parse(data);
  return parsedData;
};
