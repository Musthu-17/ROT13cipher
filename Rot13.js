let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")


function decRot13(str) {
    let arr=[]   
    for(let i of str){
      let index=alphabets.indexOf(i)
      if(index===-1){
        arr.push(i)
      }
      else if(index>=13){
        arr.push(alphabets[index-13])
      }
      else{
        arr.push(alphabets[index+13])
      }
    }
    return arr.join("");
  }
  
  

  function encRot13(str) {
    let arr=[]
    str=str.toUpperCase()
    for(let i of str){
      let index=alphabets.indexOf(i)
      if(index===-1){
        arr.push(i)
      }
      else if(index<=13){
        arr.push(alphabets[index+13])
      }
      else{
        arr.push(alphabets[index-13])
      }
    }
    return arr.join("");
  }

console.log(encRot13("i'm a ghost")+" != "+decRot13("UR'F N TUBFG"));
 
