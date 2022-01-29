

let cvs = [
      {
         firstName: "Jason",
        LastName: "James",
          yearsOfExperience: 20,
         tech: "JS"
     },
      {
          firstName: "Shira",
         LastName: null,
          yearsOfExperience: 5,
          tech: ".Net"
      },
      {
          firstName: "Dmitri",
          LastName: "Akkerman",
          yearsOfExperience: 1,
          tech: "Python"
      },
     {
          firstName: "Isabella",
          LastName: null,
          yearsOfExperience: 7,
          tech: "Java"
     }
  ];
  const cvFormatter = (arr) => {
    
    // write your code here
    
        let arr1=[];
        for(let i=0;i<arr.length;i++){
            if((arr[i].yearsOfExperience>1)){
                if(arr[i].firstName==null){
                    arr1.push(`{full name: \"${arr[i].lastName}\"\ntech: \"${arr[i].tech}\"}`);
              
                }else{
                    if(arr[i].lastName==null){
                        arr1.push(`{full name: \"${arr[i].firstName}\"\ntech: \"${arr[i].tech}\"}`);
                    }else{
                        arr1.push(`{full name: \"${arr[i].firstName}\" \"${arr[i].lastName}\"\ntech: \"${arr[i].tech}\"}`);
                    }} }}
        return arr1;}
console.log(cvFormatter(cvs));