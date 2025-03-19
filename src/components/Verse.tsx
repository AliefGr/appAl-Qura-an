
type VerseProps = {
    verse : string,
    ayat : string
}
const Verse = ({verse, ayat} : VerseProps) => (
    <div className="bg-[url('src/assets/VerseBackgroundImage.png')] bg-no-repeat bg-cover p-4 rounded-2xl">
        <p className="text-sm  font-light mb-2">📖 <span className="text-white/60">Your daily verse</span></p>
        <p className="text-white font-bold text-lg mb-3">{verse}</p>
        <p className="text-white text-md">{ayat}</p>
    </div>
)

export default Verse