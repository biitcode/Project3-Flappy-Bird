document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const container = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;
  let isGameOver = false;
  let gap = 430 ;


  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdLeft + 'px';
  }
  let gameTimerId = setInterval(startGame, 20);

  function control(e) {
    if (e.keyCode === 32) {
      jump();
    }
  }

  function jump() {
    if (birdBottom < 495) {
      birdBottom += 50;
      bird.style.bottom = birdBottom + 'px';
      console.log(birdBottom);
    }
  }
  document.addEventListener('keyup', control);

  // generating obstacles
  function generateObstacle() {
    const obstacle = document.createElement('div');
    const topObstacle = document.createElement('div');
    if (!isGameOver) {
      obstacle.classList.add('obstacle');
      topObstacle.classList.add('top-obstacle');
    }
    container.append(obstacle);
    container.append(topObstacle);
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 148;
    let obstaclebottom = randomHeight;
    obstacle.style.left = obstacleLeft + 'px';
    topObstacle.style.left = obstacleLeft + 'px';
    obstacle.style.bottom = obstaclebottom + 'px';
    topObstacle.style.bottom = obstaclebottom + gap + 'px';

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + 'px';
      topObstacle.style.left = obstacleLeft + 'px';

      // logic for removing our obstacles when hitting them
      if (obstacleLeft === -60) {      
        clearInterval(obstacleTimerId);
        container.removeChild(obstacle);
        container.removeChild(topObstacle);
      }

      // logic for hitting the obstacles
      if (
        obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 && (birdBottom < obstaclebottom + 151 || birdBottom > obstaclebottom + gap - 200) ||
        birdBottom === 0
        ) {     
        gameOver();
        clearInterval(obstacleTimerId)
      }
    }
    let obstacleTimerId = setInterval(moveObstacle, 20);
    if (!isGameOver) {
      setTimeout(generateObstacle, 3000);
    }
  }
  generateObstacle();

  function gameOver() {
    console.log('The Game Is Over')
    clearInterval(gameTimerId);
    isGameOver = true;
    document.removeEventListener('keyup', control);
  }

  function generateObstacle() {
    const obstacle = document.createElement('div');
    const topObstacle = document.createElement('div');

    obstacle.classList.add('obstacle');
    topObstacle.classList.add('topObstacle');

    obstacleLeft -= 2;
    obstacle.style.left = obstacleLeft + 'px';
    obstacle.style.bottom = 
  }

  const button = document.querySelector('.button');
  button.addEventListener('click', () =>{
    location.reload();
    return false;
  })

  window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });
});
