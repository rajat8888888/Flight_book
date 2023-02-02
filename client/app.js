const tablebody=document.getElementById('table-body')
const getFlight=()=>{
    fetch('')
    .then(response=>response.json())
    .then(flights=>{
        console.log(flights)
    })
    .catch(err=>console.log(err))
}
getFlight();