const { app,  BrowserWindow } = require('electron')

let win;

function createWindow () {
    // Create browser window
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`
    })

    win.loadURL(`file://${__dirname}/dist/index.html`)

    // To open devtools:
    win.webContents.openDevTools()

    // Event when the window is closed.
    win.on('closed', function () {
        win = null;
    })
}

// Create window on electron initialization
app.on('ready', createWindow)

// Quit all windows are closed
app.on('window-all-closed', function () {

    // macOS specific close process
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    
    // macOS specific close process
    if(win === null) {
        createWindow()
    }
})