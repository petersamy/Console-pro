const fs = require('fs')
 addSudent= (id,name,grade,comment)=>{
    const info = loadInfo();
    const dup = info.filter(function (info){
        return info.id === id
    })
    if(dup.length ===0){
        info.push({id,name,grade,comment})
        saveInfo(info)
        console.log('Data are saved')
    }else{
        console.log('id is duplicated')
    }

},

 deleteStudent = (id) => {
    const info = loadInfo();
    const dup = info.filter(function (info){
        return info.id !== id
    })
    if(info.length > dup.length){
        saveInfo(dup)
        console.log("item :"+id +" is removed")
    }else{
        console.log('not removed')
    }
  
},

 readStudent = (id) => {
    const info = loadInfo();
    const fo = info.find(function (info){
        return info.id === id
    })
    if(fo){
        console.log("id is:"+fo.id)
        console.log("name is :"+fo.name)
        console.log("grade is :"+fo.grade)
    }else{
        console.log('not Found')
    }
  
},
 
 listStudent = ()=>{
    const info = loadInfo();
    info.forEach(st => {
        console.log("name is "+" "+st.name," " + "& "+"\tgrade is:"+st.grade)
       
    });

},


 loadInfo = () => {
  try{
    const da = fs.readFileSync("info.json").toString() 
   return JSON.parse(da)
  }catch(e){
      return [];
  }
},

 saveInfo = (info)=>{
    const inf= JSON.stringify(info)
    fs.writeFileSync("info.json",inf)
}


module.exports={addSudent,deleteStudent,readStudent,listStudent}