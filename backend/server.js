const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "Private-Key": "8fa4226c-b950-44c2-8c19-ea948ea48c51" } }
    );
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
