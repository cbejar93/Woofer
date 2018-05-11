import Api from "@/services/api"

export default {
    addUser (formData) {
        return Api().post('user/add_user', {formData});
      },
}