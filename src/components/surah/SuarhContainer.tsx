import { useEffect, useState } from "react"
import { Surah } from "../../types/surah"
import SurahList from "./SurahList"

const SuarhContainer = () => {
    const [usrahs, setSurahs] = useState<Surah[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() =>{ 
        const fetchSurahs = async () => {
            try{
                const response =  await fetch('https://equran.id/api/v2/surat')
                if(!response.ok){
                    throw new Error('Failed to fetch surahs')
                }
                const datas = await response.json()
                setSurahs(datas.data)
                setIsLoading(false)
            }catch(error){
                setError(error instanceof Error ? error.message : 'Error fetching surahs')
                setIsLoading(false)
            }
        }
        fetchSurahs()
    }, [])

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
  return (
    <>
        <SurahList surahs={usrahs} />
    </>
  )
}

export default SuarhContainer