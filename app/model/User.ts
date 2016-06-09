export class User  {
    public username: string;
    public password: string;
    public age: number = 0;
    constructor(username, password) {
        this.username = username;
        this.password = password;
     }
}