const buttons = document.querySelectorAll('.button')
const result = document.querySelector('.result')
const playerImage = document.querySelector('.player-image')
const cpuImage = document.querySelector('.cpu-image')
const container = document.querySelector('.container')

let playerAction

function playGame () {
    let choices = ['rock', 'paper', 'scissors']
    let cpuAction = choices[Math.floor(Math.random() * 3)]
    
    container.classList.add('start')

    playerImage.src = 'images/rock.png'
    cpuImage.src = 'images/rock.png'

    setTimeout(() => {
        container.classList.remove('start')

        switch (playerAction) {
            case 'rock':
                playerImage.src = 'images/rock.png'
                break;
        
            case 'paper':
                playerImage.src = 'images/paper.png' 
                break;
            
            case 'scissors':
                playerImage.src = 'images/scissors.png'
                break;
            }
    
            switch (cpuAction) {
                case 'rock':
                    cpuImage.src = 'images/rock.png'
                    break;
                
                case 'paper':
                    cpuImage.src = 'images/paper.png' 
                    break;
    
                case 'scissors':
                    cpuImage.src = 'images/scissors.png'
                    break;
                }
    
        if(playerAction === cpuAction) {
            result.innerText = 'Match Draw'
        } else if ((playerAction == 'rock' && cpuAction == 'scissors') || (playerAction == 'paper' && cpuAction == 'rock') || (playerAction == 'scissors' && cpuAction == 'paper')) {
            result.innerText = 'User Won!'
        } else {
            result.innerText = 'CPU Won!'
        }
    }, 700)
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let action = button.getAttribute('data-action')
        playerAction = action
        
        buttons.forEach((button) => {
            button.classList.remove('active')
        })

        button.classList.add('active')

        playGame()
    })
})