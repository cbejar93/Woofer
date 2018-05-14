const storage = window.localStorage;

export default { 
    setLocal(data) {
        storage.setItem('session',JSON.stringify(data));
        return this.getLocal();
    },
    getLocal() {
        return JSON.parse(storage.getItem('session'));
    },
    deleteLocal(){
        storage.removeItem('session');
    }
}