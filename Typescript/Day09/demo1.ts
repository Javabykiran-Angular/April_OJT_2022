//Array of Object
let arrobj=[
  {
    id:9,
    fname:'Sumit',
    lname:'Raokhande',
    month:["Jan","Feb","Dec"],
    country:{
        cid:1,
        cname:'India'
    },
    result:[
      {
        subj:"M1",
        marks:"40"
      },
      {
        subj:"M2",
        marks:"45"
      },
      {
        subj:"M3",
        marks:"55"
      }
    ]
  },
  {
    id:3,
    fname:'Spruha',
    lname:'Raokhande',
    month:["June","May","Dec"],
    country:{
      cid:2,
      cname:'Japan'
    },
    result:[
      {
        subj:"M1",
        marks:"50"
      },
      {
        subj:"M2",
        marks:"65"
      },
      {
        subj:"M3",
        marks:"75"
      }
    ]
  },
  {
    id:6,
    fname:'Kiran',
    lname:'Raokhande',
    month:["Dec","Feb","Aug"],
    country:{
      cid:3,
      cname:'US'
  },
  result:[
    {
      subj:"M1",
      marks:"50"
    },
    {
      subj:"M2",
      marks:"45"
    },
    {
      subj:"M3",
      marks:"75"
    }
  ]
  }
];

// console.log(`
//     ID         :: ${arrobj[1].id}
//     First Name :: ${arrobj[1].fname}
//     Last Name  :: ${arrobj[1].lname}
// `)

for(let i=0;i<arrobj.length;i++){

  console.log(`
    ID         :: ${arrobj[i].id}
    First Name :: ${arrobj[i].fname}
    Last Name  :: ${arrobj[i].lname}
    Month      :: ${arrobj[i].month.join('  ')}
  Country Name :: ${arrobj[i].country.cname}
  ---------------Result------------
`)

  for(let j=0;j<arrobj[i].result.length;j++){

    console.log(`
          Subject :: ${arrobj[i].result[j].subj}
          Marks   :: ${arrobj[i].result[j].marks}
    `)
  }


}