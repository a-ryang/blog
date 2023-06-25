import formatElapsedDateTime from "@/utils/time";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = formatElapsedDateTime(dateString);
  return (
    <time className="text-gray-600" dateTime={dateString}>
      {date}
    </time>
  );
};

export default DateFormatter;
