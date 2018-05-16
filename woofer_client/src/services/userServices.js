import Api from "@/services/api"
// This handles all the api responses

export default {
    addUser (formData) {
        return Api().post('user/add_user', {formData});
      },
    loginUser(formData){
        return Api().post('user/login', {formData});
    },
    addDog (formData){
        return Api().post('rentee/add_dog', {formData});
    },
    getDogsWoofee (id) {
        return Api().get(`rentee/dogs/${id}`)
    },
    getDogsLocal() {
        return Api().get('renter/getDogs')
    },
    addProposal(formData){
        return Api().post('props/createprop', {formData})
    },
    getProposal(id) {
        return Api().get(`props/getproposalsRentee/${id}`)
    },
    getDogById(id){
        return Api().get(`rentee/getDogsById/${id}`)
    },
    getUserById(id){
        return Api().get(`user/getUserById/${id}`)
    },
    updateProposal(id,state){
        return Api().put(`props/updateprop/${state}/${id}`)
    },
    sendMsg(formData){
        return Api().post(`msg/threads`, {formData})
    }
}