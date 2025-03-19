import { Surah } from "../../types/surah"
import SurahCard from "./SurahCard"

type SurahsListProps = {
    surahs : Surah[]
}
const SurahList = ({surahs} : SurahsListProps) => {
  return (
    <div className="flex flex-col gap-3 mt-10 p-4">
        {surahs.map((surah) => (
            <SurahCard key={surah.nomor} surah={surah}/>
        )) }
    </div>
  )
}

export default SurahList