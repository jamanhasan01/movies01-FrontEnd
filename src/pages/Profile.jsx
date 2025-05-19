import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(authContext);

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">👤 User Profile</h2>
        {user ? (
          <div className="text-center space-y-4">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User"
                className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
              />
            )}
            <div className="text-left space-y-2 text-gray-700 dark:text-gray-200">
              <p><span className="font-semibold">Name:</span> {user.displayName || "N/A"}</p>
              <p><span className="font-semibold">Email:</span> {user.email}</p>
              <p><span className="font-semibold">UID:</span> {user.uid}</p>
              <p><span className="font-semibold">Account Created:</span> {user.metadata?.creationTime}</p>
              <p><span className="font-semibold">Last Sign-In:</span> {user.metadata?.lastSignInTime}</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500 font-medium">No user is logged in.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
