/* IDENTIFICADOR UNICO. Principalmente se usa para los juegos largos
 * en los que tienes que guardar la partida, para que se sepa en todo momento
 * quien y por donde va la trama del juego. */
undum.game.id = "be3d95b6-cbc7-48c6-8e6c-49837ba9113e";

/* VERSION DEL JUEGO. Aqui se controlan las partidas guardadas. Evidentemente,
 * una partida guardada, al cambiar la version del juego, si luego la cargas
 * no va a funcionar. */
undum.game.version = "1.0";

/* Variable usada para Web responsive. */
undum.game.mobileHide = 2000;

/* Variable la opcion de velocidad del fade out. */
undum.game.fadeSpeed = 1500;

/* Variable que cambia la velocidad de deslizamiento al pulsar una opcion. */
undum.game.slideUpSpeed = 500;



/* SITUACIONES DEL JUEGO. CADA UNA CON UN UNICO ID. */
undum.game.situations = {
    inicio: new undum.SimpleSituation(
            "<h1>Empezamos la odisea veraniega!!</h1>\
        <img src='media/img/siesta.png' class='float_up' align='center'>\
        <p>Tras un pedazo de siesta, me levanto con mas calor que con la\
        que me acoste. Tenia que hacer una compra de cartuchos de tinta.\
        Anda que las ganas!! Me puse lo mas fresquito que pude aunque observe que el pantalon,\
        tenia un pequeñisimo bolsillo que solo me permitia, aparte de la cartera,\
        coger solo un manojo de llaves...ni siquiera el movil!!</p>\
        <p>Bah!! tardaré poco. Si cojo las llaves del piso, en el convivo con un equipo de <b>desarrollo agil</b>,\
        me va a tocar ir andando con la calor que hace y si cojo las del coche, ire mas rapido y mas fresquito\
        aunque me arriesgo a quedarme en la calle al volver si hacen su <b>daily scrum</b> diaria\
        pero no debe tardar mas de <b>15 minutos</b>, asi que no hay problema.</p>\
        <p class='transient'>Pincha <a href='llaves'><b>aqui para\
        continuar...</b></a></p>"
            ),
    llaves: new undum.SimpleSituation(
            "<h1>Que llaves me echo al bolsillo??</h1>\
        <center><img src='media/img/llavespiso.png' class='float_up'></center>\
        <h4 align='center'>Cojo las <a href= 'calor'> llaves del piso?</a></h4>\
        <center><img src='media/img/llavescoche.png' class='float_down'></center></p>\
        <h4 align='center'><b>O cojo las <a href= 'trafico'> llaves del coche?</b></a></h4>\ "
            ),
    calor: new undum.SimpleSituation(
            "<h1>Madre mia, la que esta cayendo!!</h1>\
        <center><img src='media/img/soleton.png' class='float_up'></center>\
        <p>Esto es insoportable, anda que no me acuerdo de mi coche, con lo fresquito que podia ir con el aire acondicionado\
        y me va a tocar ir andando hasta la tienda, aunque no se si <a href='tiendabus'><b>cojer un bus</b></a>\
        o, aunque atajo un monton, <a href= 'robo'><b>atravesar el descampado</b></a> ya que, el barrio es peligroso y me arriesgo a quedarme\
        mas fresquito de lo que voy porque me pueden dejar sin nada.</p>",
            {
                enter: function (character, system) {
                    system.setQuality('calorin', character.qualities.calorin + 20);
                    system.setQuality('suerte', character.qualities.suerte - 1);
                    system.setQuality('llavespiso', character.qualities.llavespiso = 1);
                }
            }
    ),
    tiendabus: new undum.SimpleSituation(
            "<h1>Por fin he llegado a la tienda!!</h1>\
        <p>Que fresquito he llegado...y gracias a que traigo al menos la tarjeta de credito puedo pagar sin problemas,\
        al igual que voy a poder comprar, eso, si estan los que busco, los malditos cartuchos de tinta.\
        Seguro que si vengo andando y cruzo el descampado de al lado del piso, me hubieran quitado todo.</p>\
        <center><img src='media/img/tienda.png' class='float_center'></center></p>\
        <p>Ahora hay que volver pero...estaran mis compañeros de piso <b><a href='comprayentrada'> en su reunion de daily scrum?</b></a>\
        o por el contrario hoy <a href='comprayteabren'><b>el Jefe de Proyecto les ha liberado de tal agravio?</b></a>",
            {
                enter: function (character, system) {
                    system.setQuality('calorin', character.qualities.calorin - 40);
                    system.setQuality('suerte', character.qualities.suerte + 2);
                    system.setQuality('llavespiso', character.qualities.llavespiso = 1);
                    system.setQuality('pasta', character.qualities.pasta - 1);
                    system.setQuality('curtido', 1);
                    system.setQuality('novato', 0);
                }
            }
    ),
    comprayentrada: new undum.SimpleSituation(
            "<h1>Por fin he llegado al piso!!</h1>\
        <p>He llegado sin problemas...y parece que no estan, da igual, ya que me he traido\
        las llaves del piso. Deben de estar en la reunion de scrum.\
        <center><img src='media/img/estasidailyscrum.png' class='float_center'></center>\
        Ahora a ponerme fresquito, mas de lo que estoy, jejeje, y a ver una buena peli, luego imprimire el informe.</p>\
        <center><img src='media/img/casasolo.png' class='float_center'></center></p>\
        <p><h1><b>FIN</b></h1></p>",
            {
                enter: function (character, system) {
                    system.setQuality('calorin', character.qualities.calorin - 10);
                    system.setQuality('suerte', character.qualities.suerte + 1);
                    system.setQuality('llavespiso', character.qualities.llavespiso = 1);
                    system.setQuality('pasta', character.qualities.pasta - 91);
                    system.setQuality('veterano', 1);
                    system.setQuality('curtido', 0);
                }
            }
    ),
    comprayteabren: new undum.SimpleSituation(
            "<h1>Por fin he llegado al piso!!</h1>\
        <p>He regresado sin problemas...y parece que si estan, mmmm, mejor!!\
        Hoy se han escaqueado de la reunion de scrum.\n\ </p>\
        <center><img src='media/img/disfrutarcompis.png' class='float_center'></center></p>\
        <p>Ahora a ponerme fresquito, mas de lo que estoy, jejeje, y a disfrutar de su compañia, ya luego imprimire el informe.</p>\
        <p><h1><b>FIN</b></h1></p>\ "
            ),
    trafico: new undum.SimpleSituation(
            "<h1>Pero bueno, y este traficazo??</h1>\
        <center><img src='media/img/atasco.png' class='float_up'></center>\
        <p>Esto me pasa por haber elegido las llaves del coche que aunque voy basante fresquito con el aire puesto\
        no veas que agobio hasta que llegue a la tienda, y van a cerrar pronto!! Que hago? Soy civilizado y <a href='tiendacoche'><b>aguanto el atasco?</b></a>\
        o, mmmmm, ahora que no me ve nadie, <a href= 'multa'><b>me salgo por direccion prohibida...</b></a> No lo hago bien pero seguro que llego antes de que cierren!!</p>",
            {
                enter: function (character, system) {
                    system.setQuality('calorin', character.qualities.calorin - 10);
                    system.setQuality('suerte', character.qualities.suerte + 1);
                    system.setQuality('llavescoche', character.qualities.llavescoche = 1);
                    system.setQuality('curtido', 1);
                    system.setQuality('novato', 0);
                }
            }
    ),
    tiendacoche: new undum.SimpleSituation(
            "<h1>Por fin he llegado a la tienda!!</h1>\
        <p>Que fresquito he llegado...y gracias a que traigo al menos la tarjeta de credito puedo pagar sin problemas,\
        al igual que voy a poder comprar, eso, si estan los que busco, los malditos cartuchos de tinta.\
        Seguro que si vengo andando y cruzo el descampado de al lado del piso, me hubieran quitado todo.</p>\
        <center><img src='media/img/tienda.png' class='float_center'></center></p>\
        <p>Ahora hay que volver pero...estaran mis compañeros de piso <b><a href='comprasnollavespiso'> en su reunion de daily scrum?</b></a>\
        o por el contrario hoy <a href='comprayteabren'><b>el Jefe de Proyecto les ha liberado de tal agravio?</b></a>",
            {
                enter: function (character, system) {

                    system.setQuality('calorin', character.qualities.calorin - 20);
                    system.setQuality('suerte', character.qualities.suerte + 2);
                    system.setQuality('pasta', character.qualities.pasta - 90);
                    system.setQuality('llavescoche', character.qualities.llavescoche = 1);
                    system.setQuality('curtido', 1);
                    system.setQuality('novato', 0);
                }
            }
    ),
    multa: new undum.SimpleSituation(
            "<h1>Oooohh, oooohh...la policia me ha pillado!!</h1>\
        <center><img src='media/img/multarron.png' class='float_up'></center>\
        <p>Esto me pasa por haber elegido escoger las llaves del coche en lugar de andar o el bus. Como tengo la tarjeta de credito\
        puedo pagar en el acto...y, ¿Queeee, cuanto es? Pero si es todo lo que tengo de saldo en la cuenta...adios a la compra\
        al menos volvere a casa fresquito, lo que no se es si <a href='noabrennocompras'><b>mis compis se han ido a la reunion de scrum</b></a>\
        o, por el contrario, <a href= 'nocomprayteabren'><b>estan en el piso para abrirme...</b></a> ",
            {
                enter: function (character, system) {
                    system.setQuality('calorin', character.qualities.calorin + 20);
                    system.setQuality('suerte', character.qualities.suerte - 3);
                    system.setQuality('llavescoche', character.qualities.llavescoche = 1);
                    system.setQuality('pasta', character.qualities.pasta - 200);
                    system.setQuality('novato', 0);
                    system.setQuality('veterano', 0);
                }
            }
    ),
    noabrennocompras: new undum.SimpleSituation(
            "<h1>Ding Dong...Ding Dong</h1>\
        <center><img src='media/img/cerrado.png' class='float_up'></center>\
        <p>Esto me pasa por haber escogido las llaves equivocadas. Y ahora encima me han dejado una nota que el\
        <b>Scrum Master</b> esta muy contento y se los ha llevado a cenar por ahi y volveran a las tantas...\
        Encima no he comprado los malditos cartuchos!!</p>\
        <center><img src='media/img/dormircalle.png' class='float_up'></center>\
        <p><h1><b>FIN</b></h1></p>"
            ),
    nocomprayteabren: new undum.SimpleSituation(
            "<h1>Ding Dong...Ding Dong</h1>\
        <center><img src='media/img/reciben.png' class='float_up'></center>\
        <p>Bufff, no veas que calor!!. Ahora encima tendre que hacer el informe\
        a mano porque la impresora esta sin tinta. Al menos estoy en casa aunque vaya tardecita que llevo...\
        Encima no he comprado los malditos cartuchos!!</p>\
        <center><img src='media/img/cabreado.png' class='float_up'></center>\
        <p><h1><b>FIN</b></h1></p>"
            ),
    robo: new undum.SimpleSituation(
            "<h1>Dame todo lo que llevas!!</h1>\
        <center><img src='media/img/robo.png' class='float_up'></center>\
        <p>Escuche unas voces detras de mi. Sabia yo que cruzar por aqui era jugarsela.\
        Madre mia, me han dejado listo de papeles, me han quitado hasta las llaves. Adios a la compra de la tinta. Mas me vale que me vuelva a casa\
        pero...ahora que recuerdo...<a href='noabrennocompras'><b>tenian mis compis daily scrum hoy!!</b></a></p>\
        <center><img src='media/img/dailyscrum.png' class='float_up'></center>\
        <p>o por el contrario <a href='nocomprayteabren'><b>creo que se han escaqueado!!</b></a></p>",
            {
                enter: function (character, system) {
                    system.setQuality('calorin', character.qualities.calorin + 10);
                    system.setQuality('suerte', character.qualities.suerte - 2);
                    system.setQuality('llavespiso', 0);
                    system.setQuality('pasta', character.qualities.pasta - 200);
                    system.setQuality('curtido', 1);
                    system.setQuality('novato', 0);
                }
            }
    ),
    comprasnollavespiso: new undum.SimpleSituation(
            "<h1>Y ahora que hago?</h1>\
        <center><img src='media/img/cerrado.png' class='float_up'></center>\
        <p>Tengo las llaves del coche, no las del piso. Y estos parece que estan de reunion.\
        He comprado los cartuchos pero aqui han dejado una nota que el <b>Scrum Master</b> esta muy\
        contento y se los ha llevado a cenar por ahi y volveran a las tantas...\
        Vaya tela, con las llaves del coche, con la tinta comprada y me va tocar dormir en la calle.</p>\
        <center><img src='media/img/dormircalle.png' class='float_up'></center>\
        <p><h1><b>FIN</b></h1></p>"
            )
};

// ---------------------------------------------------------------------------
/* SITUACION DE INICIO DEL JUEGO. */
undum.game.start = "inicio";


// ---------------------------------------------------------------------------
/*AQUI SE DEFINEN LAS CUALIDADES DEL PERSONAJE. */
undum.game.qualities = {
    calorin: new undum.IntegerQuality(
            "Calorin", {priority: "0001", group: 'status'}
    ),
    suerte: new undum.FudgeAdjectivesQuality(// Fudge as in the FUDGE RPG
            "<span title>Suerte</span>",
            {priority: "0002", group: 'status'}
    ),
    llavespiso: new undum.OnOffQuality(
            "Llaves Piso", {priority: "0001", group: 'inventario', onDisplay: "&#10003;"}
    ),
    llavescoche: new undum.OnOffQuality(
            "Llaves Coche", {priority: "0002", group: 'inventario', onDisplay: "&#10003;"}
    ),
    pasta: new undum.IntegerQuality(
            "Pasta", {priority: "0003", group: 'inventario'}
    ),
    novato: new undum.OnOffQuality(
            "Novato", {priority: "0001", group: 'progreso', onDisplay: "&#10003;"}
    ),
    curtido: new undum.OnOffQuality(
            "Curtido", {priority: "0002", group: 'progreso', onDisplay: "&#10003;"}
    ),
    veterano: new undum.OnOffQuality(
            "Veterano", {priority: "0003", group: 'progreso', onDisplay: "&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* GRUPOS DE CUALIDADES. */
undum.game.qualityGroups = {
    status: new undum.QualityGroup('Briega', {priority: "0001"}),
    inventario: new undum.QualityGroup('Inventario', {priority: "0002"}),
    progreso: new undum.QualityGroup('Progreso', {priority: "0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.calorin = 50;
    character.qualities.suerte = 0;
    character.qualities.pasta = 200;
    character.qualities.llavespiso = 0;
    character.qualities.llavescoche = 0;
    character.qualities.novato = 1;
    character.qualities.curtido = 0;
    character.qualities.veterano = 0;
    system.setCharacterText("<p>Vamos a ver como nos encontramos:</p>");
};
