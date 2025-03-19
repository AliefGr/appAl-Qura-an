import { Link } from "react-router-dom";
import { Surah } from "../../types/surah";
import Number from "../Number";

type SurahCardProps = {
  surah: Surah;
};

const SurahCard = ({ surah }: SurahCardProps) => {
  return (
    <Link to={`/surah/${surah.nomor}`}>
      <div className="bg-dark p-4 rounded-lg flex justify-between">
        <div className="flex flex-row justify-center items-center gap-3">
          <Number nomor={surah.nomor} />
          <div className="text-white">
            <h2 className="font-semibold text-xl mb-1">{surah.namaLatin}</h2>
            <p className="text-sm font-light text-white/60">{surah.arti}</p>
            <p className="text-sm font-light text-white/60">
              {surah.tempatTurun} • {surah.jumlahAyat} Ayat
            </p>
          </div>
        </div>
        <h1 className="text-primary text-2xl font-bold">{surah.nama}</h1>
      </div>
    </Link>
  );
};

export default SurahCard;
