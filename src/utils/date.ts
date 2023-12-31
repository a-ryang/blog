export function formatDatetime(datetime: string) {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function extractYear(datetime: string) {
  const date = new Date(datetime);
  return date.getFullYear();
}
