const { app, BrowserWindow } = require("electron");
const url = require("url");

function newApp() {
  win = new BrowserWindow();
  win.loadURL(
    url.format({
      pathname: "index.html",
      slashes: true
    })
  );
}

app.on("ready", newApp);