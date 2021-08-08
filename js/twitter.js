//Queremos encontrar el usuario de twitter que se encuentra dentro de str y devolverlo. EJ: 'Seguinos en @CourseIt_' => @CourseIt_


function findHandler(str) {
    const splitted = str.split(" ")
    
    const result = splitted.filter(word => {
      return word[0] == '@'
    })
      return result[0]
  }