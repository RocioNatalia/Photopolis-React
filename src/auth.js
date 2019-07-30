import firebase from './firebase'

const auth = {
    autenticado: false,
    user: null,

    login(userData, cb) {
        firebase
            .auth()
            .signInWithEmailAndPassword(userData.email, userData.password)
            .then(a => {
                if (a.operationType) {
                    const { user } = a
                    console.log(user)
                    if (user) {
                        this.autenticado = true
                        this.user = user
                        cb()
                    }
                } else {
                    console.log('no funciono')
                }
            })
            .catch(error => console.log(error))
    },
    logout(cb) {
        this.autenticado = false
        this.user = null
        cb()
    },
    isAuthenticated() {
        return this.autenticado
    },
    register(userData, cb) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(
                userData.email, userData.password
            )
            .then(a => {
                firebase
                .auth()
                .currentUser.sendEmailVerification()
                .then(() => console.log('se envio la confirmacion por email'))
                   cb()
              
           })
            .catch(error => console.log(error))
            }
    }


export default auth