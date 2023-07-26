const Profile = require('/home/ojt/Guzman/libraryManagement/models/profile.js');

exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json({ profiles });
};

exports.postProfile = async (req, res) => {
  console.log('Request body:', req.body);
  const { name } = req.body;
  const { email } = req.body;
  const { date } = req.body;
  const { title } = req.body;
  const { content } = req.body;
 // Note: set path dynamically
  const profile = new Profile({
    name,
    email,
    date,
    title,
    content,

  });
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc,
    },
  });
};