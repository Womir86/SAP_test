using WomirCrudVC as my from '../db/datamodel';

service MyUserCatalog{
    entity User as projection on my.user;

}

service MyBooksCatalog{
    entity book as projection on my.book;
}

service MyCalc {
   entity salectt as SELECT 
     ub.id,
	u.name as PersonName,
	b.name as BookName,
	b.author,
    key ub.idBook as klucz
FROM my.userBook as ub inner join my.user as u on ub.idUser=u.id inner join my.book as b on b.id= ub.idBook;

    
}
