function userNames(inputEmails) {
let result=[];
    for (let email of inputEmails) {
        let[names, domain]=email.split('@');
        let username=names+'.';
        let domainParts=domain.split('.');
        domainParts.forEach(p=>username += p[0]);
        result.push(username);
    }
    console.log(result.join(', '));

}
userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);