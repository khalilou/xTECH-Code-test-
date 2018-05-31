var print = console.log;

// TEST 1
function f1(str1, str2){
    function removeDuplicated(str){
        let arr = str.toLowerCase().split('')
        let cleanArr = []
        for(let i=0; i<arr.length;i++){
          if(cleanArr.indexOf(arr[i]) === -1){
            cleanArr.push(arr[i])
          }
        }
          return cleanArr.join('')
    }

  str1 = str1.toLowerCase().split("").sort().join("")
  str2 = str2.toLowerCase().split("").sort().join("")
  let result = 0
  
  if(str1 === str2){
    result = 0
  } 
  else {
    for(let i=0; i<removeDuplicated(str1).length; i++){
      let currentLetter = str1[i]
      let arr1 = str1.split("").filter(el=> el === currentLetter)
      let arr2 = str2.split("").filter(el=> el === currentLetter)
        if(arr1.length !== arr2.length){
          result += Math.abs(arr1.length - arr2.length)
      }
    }
  }
      return result;
}

print(f1('bacdc','dcbad'));


// TEST 2
function f2(arr1, arr2){
  let result = [];
    for(let i=0; i<arr2.length; i++){
      let currentElement = arr2[i]
      let repetitions = arr1.filter(el => el === currentElement)
      result.push(repetitions.length)
    }
       return result 
}

print(f2(['aba', 'baba', 'aba', 'xzxb'],['aba', 'xzxb', 'ab']));


// TEST 3
function f3(hostname){
  let re = new RegExp(/^[a-zA-Z 0-9 ._-]*$/)
  console.log(re.test(hostname))
  if(re.test(hostname)){

    return hostname.split('.').length

  } else {

    return 0
  }
}

print(f3('xtech.guru'));


