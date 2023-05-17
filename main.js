const { app, BrowserWindow } = require("electron");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "ImageShrink",
    width: 500,
    height: 600,
  });

  mainWindow.loadURL("https://instagram.com");
}

app.on("ready", createMainWindow);
