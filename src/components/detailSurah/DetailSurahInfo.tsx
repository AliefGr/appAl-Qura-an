import { Surah } from '../../types/surah'
import ChevronRightIcon from '../../assets/ChevronRightIcon.svg'
import AyatBackgroundImage from '../../assets/AyatBackgroundImage.png'

type DetailInfoProps = {
    surah : Surah
}
const DetailSurahInfo = ({surah} : DetailInfoProps) => {
  return (
    <div className=" bg-no-repeat bg-cover rounded-2xl px-4 pt-8 relative" style={{backgroundImage : `url(${AyatBackgroundImage})`}}>
        <div className='mb-10'>
            <p className='text-white font-bold text-2xl'>{surah.namaLatin}</p>
            <p className='text-white/60 font-medium'>{surah.arti}</p>
            <hr className='my-2 text-white/50' />
            <p className='text-md font-medium text-white/80'>{surah.tempatTurun} • {surah.jumlahAyat} Ayat</p>
        </div>
        <div className='flex justify-between bg-accent-light px-4 py-1 w-full absolute bottom-0 left-0 rounded-b-2xl'>
            <p className='text-white/80 font-medium text-base'>Tentang Suarh {surah.namaLatin}</p>
            <img src={ChevronRightIcon} className='text-2xl' alt='ChevronRightIcon' />
        </div>
    </div>
  )
}

export default DetailSurahInfo