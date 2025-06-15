const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  const { key, hwid } = req.query;
  if (!key || !hwid) return res.send("❌ Missing key or hwid");

  const scriptUrl = "https://script.google.com/macros/s/AKfycbwrTWL8GfGGQkHdp1jxS3_jCwbjv_37zRt7ZwehCpt6LEWLI5Vm8u-DKLQpIvRc1JGNIg/exec";
  const finalUrl = `${scriptUrl}?key=${key}&hwid=${hwid}`;

  try {
    const response = await axios.get(finalUrl);
    res.send(response.data);
  } catch (err) {
    res.send("🔴 Lỗi gọi API: " + err.message);
  }
});

app.listen(3000, () => {
  console.log("✅ Proxy is running on port 3000");
});
