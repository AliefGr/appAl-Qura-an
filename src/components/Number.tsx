type NumberProps = {
    nomor : number
}
const Number = ({nomor} : NumberProps) => {
  return (
    <div className="text-white rounded-full w-8 h-8 bg-accent-light flex items-center justify-center ">{nomor}</div>
  )
}

export default Number