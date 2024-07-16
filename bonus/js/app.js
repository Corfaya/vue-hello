const { createApp } = Vue

createApp({
    data(){
        return {
            message: "Hello Vue",
            
                img: "./img/procione.jpg",
                name: "procione"
          
        }
    }
}).mount("#app")