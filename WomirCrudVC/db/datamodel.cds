namespace WomirCrudVC;

entity user{
    key id:Integer;
    name: String;
}

entity book{
    key id:Integer;
    name: String;
    author:String;
}



entity userBook{
    key id:Integer;
    idUser: Integer;
    idBook: Integer;
}

