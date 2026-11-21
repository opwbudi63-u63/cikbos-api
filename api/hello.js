export default function handler(req, res) {
  res.status(200).json({
    status: "success",
    message: "JavaScript API berjalan!",
    platform: "Vercel",
    runtime: "Node.js"
  });
}
