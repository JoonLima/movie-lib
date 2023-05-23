<template>
    <div class="login-container">
        <div class="box-login">
            <span class="title-login">MovieLib</span>
            <div class="inputs">
                <v-text-field 
                    label="Email" 
                    type="email"
                    >
                </v-text-field>
                <v-text-field 
                    label="Senha" 
                    type="senha"
                    >
                </v-text-field>
            </div>
            
            <v-btn
                class="btn-login"
                color="#E7FF2C"
                size="large"
                type="submit"
            >
            Entrar
            </v-btn>
            <router-link to="/registro" class="create-acc">Criar uma conta</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>

.login-container{
    height: 100vh;
    display: flex;
    padding-top: 8rem;
}

.box-login{
    margin: 0 auto;
    border: 1px solid var(--cor-secundaria);
    border-radius: 15px;
    background-color: var(--cor-primaria);
    color: #fff;
    height: 25rem;
    width: 25rem;
    display: flex;
    text-align: center;
    flex-direction: column;    
    padding: 35px;
}

.box-login .title-login{
    font-size: 2rem;
    padding: .5rem;
    color: var(--cor-secundaria);
}

.btn-login{
    margin-top: 15px;
    margin-bottom: 15px;
    color: var(--cor-primaria);
}

.create-acc{
    color: #fff;
    transition: .4s;
}

.create-acc:hover{
    color: #ccc;
}


.input-login{
    border: 1px solid var(--cor-secundaria);
    border-radius: 15px;
}

</style>