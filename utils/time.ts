const formatElapsedDateTime = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const pastTime = (now.getTime() - date.getTime()) / 1000;

  if (pastTime < 60) return "방금 전";
  if (pastTime < 3600) return `${Math.round(pastTime / 60)}분 전`;
  if (pastTime <= 86400) return `${Math.round(pastTime / 3600)}시간 전`;
  if (pastTime <= 604800) return `${Math.round(pastTime / 86400)}일 전`;

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
};

export default formatElapsedDateTime;
