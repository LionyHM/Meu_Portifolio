new Vue({
	el: '#app',
	data: {
		iniciarJogo: false,
		nivelVidaJogador: 100,
		nivelVidaMonstro: 100,
        estilo: '',
        cor: '',
        infoJogador: '',
        infoMonstro: '',
	},
	computed: {
		addNivelVidaJogador(){
			return {
				width: `${this.nivelVidaJogador}%`
			}
		},
		addNivelVidaMonstro(){
			return {
				width: `${this.nivelVidaMonstro}%`
			}
		},	
        ganhouOuPerdeu(){
            this.estilo = this.nivelVidaMonstro >= this.nivelVidaJogador ? 'text-danger' : 'text-success'
            if(this.nivelVidaJogador === 0){
                this.iniciarJogo = !this.iniciarJogo
                return 'Você perdeu :/'
            }
            if(this.nivelVidaMonstro === 0){
                this.iniciarJogo = !this.iniciarJogo
                return 'Você ganhou! :D'
            }
        }
	},
	methods: {
        iniciaJogoBtn(){
            this.iniciarJogo = !this.iniciarJogo
            this.nivelVidaJogador = 100
            this.nivelVidaMonstro = 100
            
            let lis = document.querySelectorAll('.informacoes li');
            for(let i=0; li=lis[i]; i++) {
                li.parentNode.removeChild(li);
            }
        },
		danoJogador(max,min){
			let danoSofridoJogador = Math.ceil(Math.random() * (max - min) + min)
			this.nivelVidaJogador = this.nivelVidaJogador - danoSofridoJogador >= 0 ? this.nivelVidaJogador - danoSofridoJogador : 0
			this.infoMonstro = `O Mostro deu um ataque de ${danoSofridoJogador}`            
		},
		danoMonstro(max,min){
			let danoSofridoMonstro = Math.ceil(Math.random() * (max - min) + min)
			this.nivelVidaMonstro = this.nivelVidaMonstro - danoSofridoMonstro >= 0 ? this.nivelVidaMonstro - danoSofridoMonstro : 0
            this.infoJogador = `O Jogador deu um ataque de ${danoSofridoMonstro}`
		},
		ataque(){
			this.danoJogador(15,6)
			this.danoMonstro(10,5)
            this.cor = 'bg-success'
			this.CriarInformacoes(this.infoJogador, this.infoMonstro, this.cor)
		},
		danoJogadorEspecial(){
			this.danoJogador(15,6)
			this.danoMonstro(15,10)
            this.cor = 'bg-warning'            
            this.CriarInformacoes(this.infoJogador, this.infoMonstro, this.cor)
		},
		curarJogador(){
            let curaJogador = Math.ceil(Math.random() * (15 - 8) + 8)
			this.nivelVidaJogador = this.nivelVidaJogador + curaJogador <= 100 ? this.nivelVidaJogador + curaJogador : 100
            this.infoJogador = `O Jogador se curou com ${curaJogador}`
            this.cor = 'bg-primary'
            this.danoJogador(15,6)            
            this.CriarInformacoes(this.infoJogador, this.infoMonstro, this.cor)
        },
        desistirJogo(){
        window.location.reload()
    },
        CriarInformacoes(parametro, parametro2, cor){
            let muralInfo = document.querySelector('.informacoes')
            let info = document.createElement('li')
            let info2 = document.createElement('li')
            info.textContent = parametro
            info2.textContent = parametro2

            info.classList.add(cor, 'text-center')            
            muralInfo.appendChild(info)
            
            info2.classList.add('bg-danger', 'text-center')            
            muralInfo.appendChild(info2)
    }
	}
})