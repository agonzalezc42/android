var World = {
    loaded: false,
    init: function initFn() {
        this.createOverlays();
    },
    createOverlays: function createOverlaysFn() {
        /*
         * PASO 1
         */

        // inicializamos el Tracker con el Target collection
        this.tracker = new AR.Tracker("assets/multiplestargets.wtc", {});


        /*
         * PASO 2
         */

        //*** Realidad Aumentada para el Target uno

        // indicamos la imagen recurso
        var imgUno = new AR.ImageResource("assets/img_uno.png");

        // creamos el Drawable usando el recurso
        var drawableImage = new AR.ImageDrawable(imgUno, 0.2, {
            offsetX: -0.15,
            offsetY: 0
        });
        //*** Realidad Aumentada para el Target dos

        // creamos el Drawable usando una uri
        drawablePageWeb = new AR.HtmlDrawable({
            uri: "assets/pagina1.html"
        }, 1, {});

        //*** Realidad Aumentada para el Target tres

        // creamos el Drawable usando una uri
        drawablePageWebDos = new AR.HtmlDrawable({
            uri: "assets/pagina2.html"
        }, 1, {});


        // indicamos la imagen recurso
        var imgDos = new AR.ImageResource("assets/img_dos.png");

        // creamos el Drawable usando el recurso
        var drawableImageDos = new AR.ImageDrawable(imgDos, 0.2, {
            offsetX: -0.15,
            offsetY: 0
        });
        /*
         * PASO 3
         */
        // indicamos el nombre del Target en el Tracker
        var TrackableUno = new AR.Trackable2DObject(this.tracker, "img_uno", {
            drawables: {
                cam: drawableImage
            }
        });

        var TrackableDos = new AR.Trackable2DObject(this.tracker, "img_dos", {
            drawables: {
                cam: drawablePageWeb
            }
        });

        var TrackableTres = new AR.Trackable2DObject(this.tracker, "img_tres", {
            drawables: {
                cam: [drawablePageWebDos, drawableImageDos]
            }
        });

    }
};

// ejecuta la funcion
World.init();
