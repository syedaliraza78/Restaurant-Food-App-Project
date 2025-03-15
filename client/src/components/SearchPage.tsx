import { useParams } from "react-router-dom";

export const SearchPage = () => {
  const param = useParams();
  return (
    <div>
      <p>{param.text}</p>
    </div>
  );
};
