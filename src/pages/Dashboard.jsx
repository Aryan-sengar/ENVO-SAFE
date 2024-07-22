import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";
import userimg from "../assets/user-png-33842.png";

function Dashboard() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User document not found");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/login");
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {userDetails ? (
        <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full lg:w-1/2">
          <div className="flex justify-center mb-4">
            <img
              src={userimg}
              alt="User"
              className="w-40 h-40 rounded-full border-4 border-green-600"
            />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800">
            Welcome, {userDetails.firstName} 🙏🙏
          </h3>
          <div className="mt-6">
            <p className="text-lg text-gray-600"><strong>Email:</strong> {userDetails.email}</p>
            <p className="text-lg text-gray-600"><strong>First Name:</strong> {userDetails.firstName}</p>
            <p className="text-lg text-gray-600"><strong>Last Name:</strong> {userDetails.lastName}</p>
            {/* <p className="text-lg text-gray-600"><strong>Last Name:</strong> {userDetails.lastName}</p> */}
          </div>
          <div className="mt-6 text-center">
            <button
              className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-xl text-gray-800">Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
