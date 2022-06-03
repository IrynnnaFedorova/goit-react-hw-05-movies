export function updateDate(str) {
  const date = str.split('').slice(0, 4).join('');
  return date;
}
