// var canvas;
// var sprite, spritesGroup;
// var tower;
// var sk;
// var colorlist = ['aqua', 'red', 'blue', 'yellow', 'green', 'pink', 'skyblue', 'maroon', 'white'];

// function setup() {
//     createCanvas(1500, 680);

//     sk = createSprite(width / 2 - 500, height / 2 + 169, 30, 30);
//     sk.velocityY = sk.velocityY - 0.8
//     spritesGroup = new Group();
//     heading = createElement("h1");
// }

// function draw() {
//     background("aqua");

//     heading.class("heading")
//     heading.html("HI HELLO")
//     heading.style('color:red');
//     heading.style('fontSize:30px')
//     heading.position(150, 20)

//     spawnGround();
//     drawSprites();
// }
// function spawnGround() {
//     if (frameCount % 117 === 0) {
//         sprite = createSprite(width / 2, height / 2 + 260, 300, 150);
//         sprite.x = Math.round(random(-10, 10))
//         sprite.shapeColor = random(colorlist);
//         sprite.velocityX = 5;
//         sprite.lifetime = 600;
//         spritesGroup.add(sprite)
//     }
// }
