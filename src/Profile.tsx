import { useEffect, useState } from "react";

type ProfileData = {
  name: string;
  avatar: string;
  bio: string;
};

const defaultProfile: ProfileData = {
  name: "Noah",
  avatar:
    "https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-batman-1024x819.png",
  bio: "Card game enthusiast. I love tracking games and building score systems.",
};

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [editMode, setEditMode] = useState(false);

  // Load saved profile
  useEffect(() => {
    const saved = localStorage.getItem("profile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  // Save profile
  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setEditMode(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Profile</h1>

        <button
          className="btn btn-primary"
          onClick={() => (editMode ? saveProfile() : setEditMode(true))}
        >
          {editMode ? "Save" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Card */}
      <div className="card bg-base-200 shadow mb-6">
        <div className="card-body">

          <div className="flex flex-col md:flex-row items-center gap-6">

            {/* Avatar */}
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={profile.avatar} alt="Avatar" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-3 w-full">

              {/* Name */}
              {editMode ? (
                <input
                  className="input input-bordered w-full"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              ) : (
                <h2 className="text-3xl font-bold">
                  {profile.name}
                </h2>
              )}

              {/* Bio */}
              {editMode ? (
                <textarea
                  className="textarea textarea-bordered w-full"
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                />
              ) : (
                <p className="text-base-content/70">
                  {profile.bio}
                </p>
              )}

              {/* Avatar URL */}
              {editMode && (
                <input
                  className="input input-bordered w-full"
                  placeholder="Avatar URL"
                  value={profile.avatar}
                  onChange={(e) =>
                    setProfile({ ...profile, avatar: e.target.value })
                  }
                />
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Stats (unchanged for now) */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Games Played</div>
          <div className="stat-value">42</div>
        </div>

        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Wins</div>
          <div className="stat-value">18</div>
        </div>

        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Win Rate</div>
          <div className="stat-value">43%</div>
        </div>

        <div className="stat bg-base-200 rounded-box">
          <div className="stat-title">Templates</div>
          <div className="stat-value">5</div>
        </div>
      </div>

    </div>
  );
}