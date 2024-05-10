import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex items-center justify-between p-10 bg-green-200">
      <h2 className="text-4xl font-bold uppercase">Knowledge Cafe</h2>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
