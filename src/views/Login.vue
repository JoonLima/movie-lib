<template>
    <div class="login-container">
        <div class="box-login">
            <label>
                Your email
                <input class="input-login" type="email">
            </label>
            
        </div>
    </div>
</template>

<script>
export default {
    
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
    height: 28rem;
    width: 25rem;
    display: flex;
    justify-content: center;
}

.input-login{
    border: 1px solid var(--cor-secundaria);
    border-radius: 15px;
}

</style>