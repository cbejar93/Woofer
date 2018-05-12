const storage = window.localStorage;

export default { 
    setLocal(data) {
        const sessionData = storage.setItem('session',JSON.stringify(data));
    },
    getLocal() {
        return storage.getItem('session');
    }
}