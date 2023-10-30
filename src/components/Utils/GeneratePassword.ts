const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
type GeneratePasswordOptions={
    length:number;
    IncludeUPPERCASE:boolean;
    IncludeLOWERCASE:boolean;
    IncludeNUMBERS:boolean;
    IncludeSPECIAL:boolean;


}
export function generatePassword({length,IncludeUPPERCASE,IncludeLOWERCASE,IncludeNUMBERS,IncludeSPECIAL}:GeneratePasswordOptions){
    let chars="";
    if(IncludeUPPERCASE) chars+= UPPERCASE;
    if(IncludeLOWERCASE) chars += LOWERCASE;
    if(IncludeNUMBERS) chars += NUMBERS;
    if(IncludeSPECIAL) chars += SPECIAL;
    let password ="";
    for(let i=1;i<=length;i++)
    {
        password += chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return password;



}