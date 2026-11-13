const {app,BrowserWindow, ipcMain} = require('electron');

const path = require('path');
const createWindow = ()=>{
    const win = new BrowserWindow({
        height:500,
        width:500,
        webPreferences:{
            nodeIntegration:false,
            contextIsolation:true,
            sandbox:false,
            preload:path.join(__dirname,'preload.js')
        }
    })

    win.loadFile('index.html');
}

app.whenReady().then(()=>{
    createWindow()
})

app.on('window-all-closed',()=>{
    if (process.platform !=='darwin') {
        app.quit();
    }
})

ipcMain.handle('get-system-info',async()=>{
    return{
        platform:process.platform,
        arch:process.arch,
    }
})

