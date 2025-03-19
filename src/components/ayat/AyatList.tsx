import { Ayat } from "../../types/surah"
import AyatCard from "./AyatCard"

type AyatListProps = {
    ayat : Ayat[]
}

const AyatList = ({ayat} : AyatListProps) => {
  return (
    <div className="flex flex-col gap-3">
        {ayat.map(item => (<AyatCard ayat={item} key={item.nomorAyat} />))}
    </div>
  )
}

export default AyatList