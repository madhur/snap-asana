const { app, BrowserWindow, shell } = require("electron");

app.on("ready", () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
  });
  win.maximize();
  win.loadURL("https://app.asana.com", {userAgent: 'Chrome/137.0.0.0'});

  // Deal with external links
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith("https://app.asana.com")) {
      shell.openExternal(url);
      return { action: "deny" };
    }
    return { action: "allow" };
  });
});
