const {contextBridge,ipcRenderer} = require('electron')
const os = require('os')
const {exec} = require('child_process');


contextBridge.exposeInMainWorld('api',{
    node:()=> process.versions.node,
    chrome:() =>process.versions.chrome,
    electron:()=> process.versions.electron,
    ping:()=> ipcRenderer.invoke('ping'),
    shutDown:()=> exec('shutdown /s /t 0'),
    showhomeDir: ()=> os.homedir(),
    getinfo:()=> ipcRenderer.invoke('get-system-info')

})
