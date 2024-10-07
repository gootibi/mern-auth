import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice.js"
import { useNavigate } from "react-router-dom"; "react-router-dom"

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch("/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            });
            const data = await res.json();
            console.log("🚀 ~ file: OAuth.jsx:25 ~ handleGoogleClick ~ data:", data);
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log("🚀 ~ file: OAuth.jsx:8 ~ handleGoogleClick ~ Could not login with Google ~ error:", error);
        }
    };

    return (
        <button type="button" onClick={handleGoogleClick} className="bg-red-700 p-4 rounded-lg text-white uppercase hover:opacity-90 transition ease-out duration-500">Continue with Google</button>
    )
}
