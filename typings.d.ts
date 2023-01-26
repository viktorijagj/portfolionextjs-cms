
interface Cv {
    _id: string;
    education:string;
    title:string;
    year:number;
}
interface Image {
    _type:"image";
    asset:{
        _ref:string;
        _type:"reference";
    };
}
interface Language {
    _id:string;
    titile:string;
    skilimg:Image;
}
interface Project {
    _id: string;
    title:string;
    url:string;
    image:Image;
    languages : Language[];
}