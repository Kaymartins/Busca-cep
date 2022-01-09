var input = document.querySelector('div input')
var button = document.querySelector('div #button')
//efeitos de clique e toque no botao :
button.addEventListener('mouseover',function(){

    
      button.style.height = '50px'
      button.style.width = '120px'
      button.style.backgroundColor = '#6A5ACD'
})
button.addEventListener('mouseout', function(){
    
    button.style.height = '45px'
    button.style.width = '110px'
    button.style.backgroundColor = '#7B68EE'
})
button.addEventListener('mousedown',function(){
    
    button.style.backgroundColor = '#483D8B'
})
button.addEventListener('mouseup', function(){
    button.style.backgroundColor = '#6A5ACD'
})
//fim efeitos 

//get cep 
var cep = input.value    
var table = document.querySelector('div section') 
var space = document.querySelector('div #btn-toolbar')

button.addEventListener('click',function(){
    var confirm = input.value
    cep = confirm.replace(' ','')
    cep = cep.replace(' ','')
    cep = cep.replace(' ','')
    cep = cep.replace(' ','')
    cep = cep.replace(' ','')
    cep = cep.replace(' ','')
    cep = cep.replace(' ','')
    cep = cep.replace(' ','')
    cep = cep.replace('.','')
    cep = cep.replace('-','')
    axios.get('https://viacep.com.br/ws/' + cep + '/json/')
    .then(function(response){
        var wo = cep.substr(0,5)
        var rd = cep.substr(5) 
      if (response.data.cep === wo + '-' + rd){
        table.innerHTML=''
        exibir(response.data.logradouro + ' | ' + response.data.bairro + ' | '
        + response.data.localidade + '/' + response.data.uf)
        // botao retornar 
        var link = document.createElement('input')
        var textLink = document.createTextNode ('Nova busca')
        link.setAttribute('type', 'submit')
        link.setAttribute('value','Nova busca')
        link.appendChild(textLink)
        space.appendChild(link)
        //efeitos botao de retorno
        link.addEventListener('mouseover',function(){
            link.style.height = '50px'
            link.style.width = '120px'
            link.style.backgroundColor = '#6A5ACD'
      })
        link.addEventListener('mouseout', function(){       
          link.style.height = '45px'
          link.style.width = '110px'
          link.style.backgroundColor = '#7B68EE'
      })
          link.addEventListener('mousedown',function(){
          link.style.backgroundColor = '#483D8B'
      })
          link.addEventListener('mouseup', function(){
          link.style.backgroundColor = '#6A5ACD'
      })
link.style.border = '0px none'
link.style.color = 'white'
link.style.borderRadius = '10px'
link.style.width = '110px'
link.style.height = '45px'
link.style.fontWeight = 'bold'
link.style.outline = '0'
link.style.backgroundColor = '#7B68EE' 
link.style.paddingBottom = '5px'
//fim efeitos botao
         
        link.addEventListener('click',function(){location.href = 'index.html'})
//fim botao retorno 
    //botao maps
        var maps = document.createElement('input')
        var textmap = document.createTextNode ('Buscar no maps')
        maps.setAttribute('type', 'submit')
        maps.setAttribute('value','Ver no maps')
        maps.appendChild(textmap)
        space.appendChild(maps)
    //efeitos botao maps 
    maps.addEventListener('mouseover',function(){
        maps.style.height = '50px'
        maps.style.width = '120px'
        maps.style.backgroundColor = '#6A5ACD'
  })
    maps.addEventListener('mouseout', function(){       
       maps.style.height = '45px'
       maps.style.width = '110px'
       maps.style.backgroundColor = '#7B68EE'
  })
       maps.addEventListener('mousedown',function(){
       maps.style.backgroundColor = '#483D8B'
  })
       maps.addEventListener('mouseup', function(){
       maps.style.backgroundColor = '#6A5ACD'
  })
maps.style.border = '0px none'
maps.style.color = 'white'
maps.style.borderRadius = '10px'
maps.style.width = '110px'
maps.style.height = '45px'
maps.style.fontWeight = 'bold'
maps.style.outline = '0'
maps.style.backgroundColor = '#7B68EE'
maps.style.marginLeft = '15px'
maps.style.paddingBottom = '5px' 
      // fim efeitos 
       maps.addEventListener('click',function(){
           window.open('https://www.google.com.br/maps/place/'+ response.data.logradouro + ','
           + '+' + response.data.localidade + '+' + '-' + '+' + response.data.uf +','
)

       })
      
  }else{
    alert('CEP INVÁLIDO')
 }}).catch(function(error){
    console.log(error)
    alert('ERROR')})

    function exibir(texto){
        var dados = document.createElement('p')
        var texto = document.createTextNode(texto)
        dados.appendChild(texto)
        dados.style.fontSize = '25px'
        dados.style.marginBottom = '40px'
        table.appendChild(dados)
    }
})
  
