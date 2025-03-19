
import logoReact from "../assets/react.svg"
const Profile = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          <p className="text-white/60">Welcome</p>
          <h1 className="text-white text-2xl font-bold">Hallo 👋🏻</h1>
        </div>
        <img src={logoReact} alt="" className="w-16 h-16 rounded-full mt-4" />
      </div>
    </div>
  );
};

export default Profile;
