import { Link } from "react-router-dom";
import DetailSurahContainer from "../components/detailSurah/DetailSurahContainer";

const DetailSurahPage = () => {
  return (
    <div className="py-2 px-5">
      <div className="mb-4 pt-6 text-left">
        <Link to={"/"} className="text-light">
          ← Daftar Surah
        </Link>
      </div>
      <DetailSurahContainer />
    </div>
  );
};

export default DetailSurahPage;
