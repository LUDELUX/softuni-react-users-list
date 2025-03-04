const baseUrl = 'http://localhost:3030/jsonstore/users';
export default{
    

    async getAll(){
        const response = await fetch(baseUrl);
        const result =await response.jsoin();
        const users = Object.values(result);
        return users;
    }
}