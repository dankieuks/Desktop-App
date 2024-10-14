const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Sử dụng đường dẫn đến file HTML đã build sau khi chạy `npm run build`
  const startUrl = path.join(__dirname, "/out/index.html"); // Đường dẫn đến file HTML tĩnh
  mainWindow.loadURL(`file://${startUrl}`);
  // mainWindow.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
