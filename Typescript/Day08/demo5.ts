//Simple Json Object

// JSON=> javascript Object Notation
// Key & value format

let json={
  fname:'Sumit',
  "lname":'Raokhande',
  id:9
}

//1 Use dot operator
//2 use square operator

//1 Use dot operator

// console.log(`
//     First Name :: ${json.fname}
//     Last Name  :: ${json.lname}
//     Id         :: ${json.id}
// `)

//2 use square operator

console.log(`--------------------
    First Name :: ${json["fname"]}
    Last Name  :: ${json['lname']}
    Id         :: ${json['id']}
`)