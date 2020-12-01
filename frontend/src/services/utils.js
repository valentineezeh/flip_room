// Add commas to Money
export const addCommasToMoney = (x) => {
  const filterAmount = x ? x : ''
  var parts = filterAmount.toString().split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?=$))/g, ",") + (parts[1] ? "." + parts[1] : "");
}