// Uma factory retorna uma nova instancia(objeto)
module.exports = ()=>{
    return{
        value: 1,
        inc(){
            this.value++;
        }
    }
}