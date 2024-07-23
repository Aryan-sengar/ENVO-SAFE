/*import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, imageDb } from "../firebase";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import userimg from "../../assets/user-png-33842.png";
import CameraCapture from "../camera/   Camera";

function Dashboard() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const handlePhotoUpload = async (photo) => {
    if (!photo) {
      alert("Please capture a photo to upload");
      return;
    }

    const imgRef = ref(imageDb, `uploads/${uuidv4()}`);
    setLoading(true);

    try {
      const response = await fetch(photo);
      const blob = await response.blob();
      await uploadBytes(imgRef, blob);
      const url = await getDownloadURL(imgRef);

      // Update user's upload count and check for green credits
      const userDocRef = doc(db, "Users", userDetails.uid);
      const now = new Date();
      const lastUploadDate = userDetails.lastUploadDate ? new Date(userDetails.lastUploadDate.toDate()) : null;
      const campaignStartDate = userDetails.campaignStartDate ? new Date(userDetails.campaignStartDate.toDate()) : now;
      const campaignDays = Math.floor((now - campaignStartDate) / (1000 * 60 * 60 * 24));

      if (lastUploadDate && (now - lastUploadDate < 24 * 60 * 60 * 1000)) {
        // Prevent multiple uploads within 24 hours
        alert("You can only upload one photo per day");
        setLoading(false);
        return;
      }

      await updateDoc(userDocRef, {
        uploadCount: increment(1),
        lastUploadDate: now
      });

      if (campaignDays >= 7) {
        await updateDoc(userDocRef, {
          greenCredits: increment(1),
          campaignStartDate: now
        });
        alert("Congratulations! You've earned a green credit for completing the 7-day campaign!");
      }

      setLoading(false);
      alert("Image uploaded successfully!");

    } catch (error) {
      setLoading(false);
      alert("Failed to upload image");
      console.error("Upload error:", error);
    }
  };

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
            <p className="text-lg text-gray-600"><strong>Upload Count:</strong> {userDetails.uploadCount || 0}</p>
            <p className="text-lg text-gray-600"><strong>Green Credits:</strong> {userDetails.greenCredits || 0}</p>
            <p className="text-lg text-gray-600"><strong>Campaign Days:</strong> {userDetails.campaignStartDate ? Math.floor((new Date() - new Date(userDetails.campaignStartDate.toDate())) / (1000 * 60 * 60 * 24)) : 0} / 7</p>
          </div>
          <div className="mt-6 text-center">
            <Camera onCapture={handlePhotoUpload} />
          </div>
          <div className="mt-6 text-center">
            <button
              className="px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-500"
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

*/