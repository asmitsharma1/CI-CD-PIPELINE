const express = require("express");
const app = express();

const version = "v2.0";
const deployedAt = new Date().toLocaleString();

app.get("/", (req, res) => {
  res.send(`
  <html>
    <head>
      <title>CI/CD- Dashboard</title>
      <style>
        body{
          font-family: Arial;
          background:#0f172a;
          color:white;
          text-align:center;
          padding:50px;
        }
        .card{
          background:#1e293b;
          padding:30px;
          border-radius:12px;
          width:400px;
          margin:auto;
        }
        .success{
          color:#22c55e;
        }
      </style>
    </head>

    <body>
      <div class="card">
        <h1 class="hi there success">Deployment Successfull made By AKS 🚀</h1>
        <p><b>Version:</b> ${version}</p>
        <p><b>Last Deployed:</b> ${deployedAt}</p>
        <p>Powered by Jenkins + Docker</p>
      </div>
    </body>
  </html>
  `);
});

app.get("/status", (req, res) => {
  res.json({
    status: "LIVE",
    version: version,
    deployedAt: deployedAt,
    uptime: process.uptime(),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
