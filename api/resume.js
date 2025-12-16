export default function handler(req, res) {
  console.log("Resume downloaded");
  res.status(200).json({ success: true });
}
