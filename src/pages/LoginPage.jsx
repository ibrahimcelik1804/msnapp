import { signInWithPopup } from "firebase/auth";
import GoogleIcon from "../assets/icons/Google";
import { auth, provider } from "../firebase";

const LoginPage = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err, "Google ile Giriş Yaparken Bir Hata Oluştu"));
  };

  return (
    <div className="wrapper">
      <div className="box h-[450px] rounded-[10px]  flex flex-col justify-center items-center gap-[50px] ">
        <h1 className="font-caveat text-5xl">Chat Odası</h1>
        <p className="text-gray-400">Devam etmek için giriş yapın </p>
        <button onClick={handleLogin} className="flex gap-8 items-center border transition border-gray-300 p-2 px-4 rounded-md hover:bg-gray-100  cursor-pointer shadow-lg">
          <GoogleIcon />
          <span>Google ile giriş yap</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
