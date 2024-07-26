const _idCreator = () => {
    const idCher = 'abcdefghijklmnopqrstuvwxyz1234567890'

    let id = ''

    for(let i = 0; i <= 18; i++) {
        id += idCher.charAt(Math.floor(Math.random() * idCher.length))
    }
    
    return id
}

export default _idCreator;