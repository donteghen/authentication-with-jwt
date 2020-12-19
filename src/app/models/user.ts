export class User{
    constructor(
        public id:string,
        public name:string,
        public surName:string,
        public email:string,
        public password:string,
        public adminLevel:boolean=false
    ){}
}