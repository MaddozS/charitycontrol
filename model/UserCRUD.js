function UserCRUD(){

    this.getUsersDB = async () => {
        try{
            const response = await fetch('http://ec2-3-92-65-138.compute-1.amazonaws.com:5000/api/users/');
            const json = await response.json();

            return json;
                
        }catch(error){
            console.log(error);
        }
    }

    this.postUsersDB = async (elemJson) => {

        let band = false;
        
        try{
            const response = await fetch('http://ec2-3-92-65-138.compute-1.amazonaws.com:5000/api/users/', {
                                    method: 'POST',
                                    body: elemJson,
                                    headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                    }
                                });

            const json = await response.json();

            band = true;
            console.log(json);

            console.log(response);
            
        }catch(e){
            console.log(e);
        }

        return band;
    }

    this.updateUser = async (data) => {
        let band = false;

        try{
            const response = await fetch('http://ec2-3-92-65-138.compute-1.amazonaws.com:5000/api/users/' + data.id, {
                                    method: 'PUT',
                                    body: JSON.stringify(data),
                                    headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                    }
                                });

            const json = await response.json();
            band = true;
            console.log(json);

            console.log(response);
            
        }catch(e){
            console.log(e);
        }
        return band;
    }
}