stroke("red");

line(50, 100, 150, 100);

}


square(x, y, s);


function setup() {

createCanvas(200, 200);

background("white");

}

function draw() {

stroke("blue");

square(50, 50, 100);

}


triangle(x1, y1, x2, y2, x3, y3);


function setup() {

createCanvas(200, 200);

background("white");

}

function draw() {

stroke("orange");

triangle(50, 150, 100, 50, 150, 150);

}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento) {
        velocidadeXBolinha *= -1;
    }
}
function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;