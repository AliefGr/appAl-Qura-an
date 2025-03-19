import type { Ayat } from "../../types/surah";
import Number from "../Number";

type AyatCardProps = {
  ayat: Ayat;
};
const AyatCard = ({ ayat }: AyatCardProps) => {
  return (
    <div className="bg-dark p-4 rounded-2xl">
      <div className="flex justify-between">
        <Number nomor={ayat.nomorAyat} />
        <p className="text-white font-bold text-lg mb-3">{ayat.teksArab}</p>
      </div>
      <div className="flex flex-col mt-2">
        <p className="text-md text-white/90">{ayat.teksLatin}</p>
        <p className="text-md text-white/70">{ayat.teksIndonesia}</p>
      </div>
    </div>
  );
};

export default AyatCard;
