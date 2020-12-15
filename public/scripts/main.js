import axios from 'axios';


class Api {
    static async getUserLogin(){
        try {
            const response = await axios.get(`https://reqres.in/api/login`);
            console.log(response);
        } catch (error) {
            console.warn("Erro na API");
        }
        
    }
}


Api.getUserLogin();