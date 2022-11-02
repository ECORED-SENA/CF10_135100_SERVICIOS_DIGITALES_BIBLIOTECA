<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Reportes de información
    p.mb-5(data-aos='fade-right') Los principales objetivos de la biblioteca son facilitar recursos informativos y prestar servicios mediante diversos medios, con el fin de satisfacer las necesidades de usuarios y grupos con información, para el perfeccionamiento personal, el crecimiento intelectual y la promoción del conocimiento.
    .bg-tema5.p-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/1.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Las bibliotecas desempeñan un importante papel en el progreso y el mantenimiento de una sociedad competitiva al ofrecer a cada persona la posibilidad de acceso a cualquier tipo de información, y conocimiento.
      .row.justify-content-center.mb-5
        .col-lg-7(data-aos="fade-right")
          p.mb-5(data-aos='fade-right') Al desempeñar su función en estos ámbitos tan fundamentales, la biblioteca: 
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-angle-right(style="color:#F9A825")
              | Actúa como un motor de la mejora social y personal.
            li.mb-0
              i.fas.fa-angle-right(style="color:#F9A825")
              | Propicia cambios positivos en la comunidad.
            li.mb-0
              i.fas.fa-angle-right(style="color:#F9A825")
              | Facilitar una gran diversidad de recursos y materiales útiles para la instrucción.
            li.mb-0
              i.fas.fa-angle-right(style="color:#F9A825")
              | Hace que la información sea accesible a todos.
            li.mb-0
              i.fas.fa-angle-right(style="color:#F9A825")
              | Aporta beneficios económicos y sociales a las personas y a su misma comunidad.
            li.mb-0
              i.fas.fa-angle-right(style="color:#F9A825")
              | Contribuye a la creación y el mantenimiento de una sociedad bien informada.
            li.mb-0
              i.fas.fa-angle-right(style="color:#F9A825")
              | Propicia autonomía en las personas, enriqueciendo y mejorando su vida y la de la comunidad.
        .col-lg-5.col-md-6(data-aos="fade-left")
          img.img-fluid(src="@/assets/curso/temas/tema5/2.svg")
      .titulo-circulo-verde.mb-4
        .titulo-circulo-verde__circulo: img(src='@/assets/curso/temas/tema5/circulo.svg', alt='')
        h4.mb-0 Registro bibliográfico

      p.mb-5(data-aos='fade-right') La biblioteca debe clasificar y catalogar sus fondos de conformidad con las normas bibliográficas internacionales o nacionales aceptadas. De este modo se agiliza su incorporación de la colección en redes más amplias.
      .row.justify-content-center.mb-5
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/3.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La política general debe basarse en las normas bibliotecológicas establecidas por expertos en la materia, relativas a las necesidades y los intereses de la población y que reflejen la diversidad de la sociedad. Debe definir el propósito, el alcance y el contenido de los fondos y el acceso a los recursos externos.
      .tarjeta.bg-cta.p-3.mb-4
        .row.justify-content-center
          .col-lg-1.col-3: img(src='@/assets/curso/temas/tema2/4.svg', alt='')
          .col-lg-11
            h5.mb-2(style='color: #fd9827') ¡Nota!
            p.text-white Los reportes de información se utilizan en las bibliotecas para establecer mediciones o indicadores de resultados a fin de evaluar los insumos de las bibliotecas, esto es, los recursos dedicados al conjunto de servicios o a algunos de ellos, y el producto, a saber, lo que se obtiene como resultado de las actividades realizadas.
      p.mb-5(data-aos='fade-right') El siguiente video le muestra los aspectos más importantes sobre recursos de medición para reportes de información. Obsérvelo con atención y lleve registro de lo más destacado en su libre personal de apuntes:
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/KUhGJGXkBBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Redacción y presentación de derechos de autor
    p.mb-5(data-aos='fade-right') En la actualidad, donde se cuenta con herramientas que permiten la difusión del conocimiento en tiempo real y en cualquier tipo de soporte, la propiedad intelectual y los derechos de autor han dejado de ser un tema de estudio exclusivo de los abogados y se ha convertido en un tema constante de consulta de los usuarios que, en calidad de investigadores o ciudadanos del común, consultan las colecciones ofrecidas por las bibliotecas.
    .cajon-derecha.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/5.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los objetivos de las bibliotecas y del derecho de autor, concuerdan; los diferencia la forma como llevan a cabo la ejecución de sus propósitos. Las bibliotecas buscan con insistencia proporcionar y facilitar el acceso al conocimiento, otorgar incentivos para estimular la creación y que, de manera equitativa, exista difusión de las obras.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uKZZxlT4F5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-cta.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.mb-0 Principios básicos del derecho de autor y los derechos conexos.

                .col-auto.mb-3.mb-sm-0
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo3.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file
    h3(data-aos="fade-right") Derechos de autor y propiedad intelectual
    p.mb-5(data-aos='fade-right') A continuación, asimile más y mejor los aspectos clave relativos a los derechos de autor. Procure asimilar cada concepto, elemento o acción que se propongan:
    .tarjeta.tarjeta-slyders.p-lg-4.p-1.px-lg-5.mb-5
      .tarjeta.bg-white.p-lg-5.p-2.mx-lg-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Qué es derecho de autor

              p Es la rama de la propiedad intelectual que reconoce a los autores como propietarios de la creación de la obra, de la inteligencia en los dominios literarios, artísticos, científicos, cualquiera sea su forma de expresión y su capacidad y exclusividad para poder explotarlas.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema5/6.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Tipos de derechos de autor
              p Son dos: morales y económicas o de explotación: los primeros son de carácter personal, irrenunciables e inalienables, algunos de ellos son ilimitados en el tiempo. Los económicos son limitados en el tiempo y su duración depende de la legislación de cada país.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema5/7.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Qué es la propiedad intelectual

              p Es el derecho de propiedad asociado a cualquier creación de la mente humana, que protege los derechos de los autores de cualquier obra de carácter científico, literario o artístico. La protección de las obras es automática, por lo que no es necesario ningún registro formal para que la autoría de las obras sea reconocida y respetada.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema5/8.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Qué protegen los derechos de autor
              p Protegen obras originales de tipo científico, literario y artístico, libros, composiciones musicales, esculturas, pinturas, fotografías, obras audiovisuales, programas de ordenador, etc. Obras derivadas de las mismas, como pueden ser las traducciones, las adaptaciones, los resúmenes, etc. También colecciones, antologías, bases de datos.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema5/9.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Cómo protege la legislación, los derechos de autor

              p  La legislación regula las condiciones de uso de las obras por parte del público. Esto significa que para utilizar una obra en la que los derechos de autor están vigentes, es necesario tener la autorización expresa del autor. En muchos casos, el uso de una obra suele requerir una compensación económica o un pago por su uso, reproducción, distribución, comunicación pública o transformación.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema5/10.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Importancia de esta legislación en las bibliotecas 
              p Es vital, sobre todo la relativa a las publicaciones electrónicas, ya que estas continuamente están sujetas a modificaciones y revisiones, por lo que los bibliotecarios deben mantenerse actualizados en la legislación relacionada con todos los medios de comunicación. Deberán fomentar y respaldar la relativa al derecho de autor, que permite lograr un equilibrio justo entre los derechos de los creadores y las necesidades de los usuarios.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema5/11.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Como acción conexa a la legislación de derechos de autor y propiedad intelectual, se necesita hacer una clasificación de las obras y ubicarlas en alguno de esos tipos, para favorecer su protección, promoción, preservación y propiedad.
      br
      br
      |Entre los tipos de obras más comunes y reconocidos se encuentran:
    h3(data-aos="fade-right") Clases de obras 
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        TabsA.color-acento-contenido.mb-5
          .tarjeta.bg-tabs.p-4(titulo="Obra originaria")
            h4 Obra originaria
            p Aquella que es primitivamente creada o, en otras palabras, que no depende de otra obra.
          .tarjeta.bg-tabs.p-4(titulo="Obra derivada")
            h4 Obra derivada
            p Su existencia depende de forma directa o inmediata, de la existencia de otras obras. Para crearla se necesita la autorización previa y expresa del titular de la obra original.
          .tarjeta.bg-tabs.p-4(titulo="Obra anónima")
            h4 Obra anónima
            p De autores desconocidos. Se ignora su autor, siempre que se ha hecho lo posible por identificar al autor de la misma y no se ha logrado.
          .tarjeta.bg-tabs.p-4(titulo="Pseudónima")
            h4 Pseudónima
            p El autor hace uso de un pseudónimo para identificar la autoría de la obra y se pueden dar dos supuestos diferentes.
          .tarjeta.bg-tabs.p-4(titulo="Publicada")
            h4 Publicada
            p Obra de la que se realiza una divulgación o publicación.
          .tarjeta.bg-tabs.p-4(titulo="Inédita")
            h4 Inédita
            p Que no ha sido dada a conocer al público.
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/12.png', alt='')
    p.mb-5(data-aos='fade-right') Un gran número de las actividades culturales que realizan las bibliotecas pueden estar amparadas por las excepciones o limitaciones al derecho de autor. Es importante que las personas responsables de la gestión cultural de la biblioteca conozcan, de forma precisa, qué actividades puede realizar sin necesidad de autorización.
      br
      br
      | En ese mismo sentido, relativo a las excepciones para las bibliotecas, cabe anotar que:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta.p-4(style="background-color: #feead3").mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6: img(src='@/assets/curso/temas/tema5/13.svg', alt='' style='width: 94px').m-auto
            .col-lg-10
              p.mb-0 En la legislación colombiana se han establecido tres excepciones específicas para que las bibliotecas puedan reproducir las obras sin necesidad de autorización del titular del derecho, esto bajo unos supuestos determinados.
        .tarjeta.p-4(style="background-color: #feead3").mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6: img(src='@/assets/curso/temas/tema5/14.svg', alt='' style='width: 94px').m-auto
            .col-lg-10
              p.mb-0 La primera excepción aplica para cualquier biblioteca o archivo y la segunda para las bibliotecas públicas y la tercera es exclusiva para la Biblioteca Nacional de Colombia.
        .tarjeta.p-4(style="background-color: #feead3").mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6: img(src='@/assets/curso/temas/tema5/15.svg', alt='' style='width: 94px').m-auto
            .col-lg-10
              p.mb-0 La finalidad de esta excepción es que las bibliotecas puedan preservar sus colecciones, y autoriza de forma expresa solamente a las bibliotecas con una característica, y es que sus actividades no tengan directa ni indirectamente fines de lucro.
        .tarjeta.p-4(style="background-color: #feead3").mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6: img(src='@/assets/curso/temas/tema5/16.svg', alt='' style='width: 94px').m-auto
            .col-lg-10
              p.mb-0 Hay actividades que se realizan en las bibliotecas y cumplen con la regla de los tres pasos, pero todavía no son consideradas en los tratados internacionales o en las leyes nacionales como excepciones al derecho de autor.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-cta.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.mb-0 Profundice en los elementos más fundamentales sobre derechos de autor y propiedad intelectual, explorando el contenido del siguiente enlace:
                .col-auto.mb-3.mb-sm-0
                  a.boton.color-acento-botones(href='https://www.mondragon.edu/es/web/biblioteka/propiedad-intelectual' target="_blank" type="")
                    span Enlace web 
                    i.fas.fa-link
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2 Tendencias en la elaboración de reportes
    p.mb-5(data-aos='fade-right') Un reporte es un documento donde se presenta el resultado de un estudio, evaluación o análisis del desarrollo de actividades, situaciones o estados de elementos y equipos de la biblioteca. Con el reporte se pretende dar respuesta a una o varias preguntas y con ello ampliar el conocimiento e información respecto a determinado tema.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/17.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El reporte debe contener información consolidada de diferentes fuentes a través de diversos medios como pueden ser: entrevistas, encuestas, observaciones, medios electrónicos, visitas, etc. La información aparece organizada, relacionada de una manera que deja ver aspectos nuevos o diferentes sobre el tema abordado.
    .tarjeta.bg-cta.p-3.mb-4
      .row.justify-content-center
        .col-lg-1.col-3: img(src='@/assets/curso/temas/tema2/4.svg', alt='')
        .col-lg-11
          h5.mb-2(style='color: #fd9827') ¡Atención!
          p.text-white El reporte como cualquier trabajo escrito, debe tener un orden lógico, ser claro y preciso, ejecutivo y buena presentación. Debe incluir argumentos, reflexiones y referencias a fuentes confiables donde se pueda validar lo que se afirma.
    p.mb-5(data-aos='fade-right') Las siguientes, son las partes que deben integrar un reporte:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-sGYYLbOCRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.3 Referencias y herramientas
    p.mb-5(data-aos='fade-right') Cuando se maneja información para desarrollar una investigación, es conveniente que se tenga bibliografía siempre a mano, para poder encontrarla cuando se requiera. Lo ideal es usar algún gestor de referencias bibliográficas, herramienta diseñada para ayudar a crear bibliografías tanto de manera manual como importándolas de diferentes bases de datos y catálogos en línea.
      br
      br
      |Estas bibliografías pueden crearse en diferentes estilos de manera automática. Los siguientes, son algunos de los gestores bibliográficos más comunes, pero son muchos los existentes en el medio y mercado:
    .row.justify-content-center.mb-5.g-0
      .col-lg-4.mb-lg-0.mb-3
        div(style="background-color: #fba442").h-100
          img(src='@/assets/curso/temas/tema5/18.jpg', alt='')
          .p-3
            h5 MENDELEY
            p Gestor de referencias bibliográficas y una red social académica para estudiantes e investigadores. Permite organizar y compartir referencias y documentos de investigación y colaborar en línea mediante la creación y participación en grupos de interés. Ofrece una versión gratuita y otra de pago suscrito por la Universidad de Málaga.
      .col-lg-4.mb-lg-0.mb-3
        div(style="background-color: #31313c").h-100
          img(src='@/assets/curso/temas/tema5/19.jpg', alt='')
          .p-3.text-white
            h5 ENDNOTE
            p #[em Software] de gestión de referencias vinculado a #[em Web of Science]. Es un recurso suscrito en España por la FECYT para las universidades y centros de investigación.
      .col-lg-4.mb-lg-0.mb-3
        div(style="background-color: #fba442").h-100
          img(src='@/assets/curso/temas/tema5/20.jpg', alt='')
          .p-3
            h5 ZOTERO
            p Ofrece un #[em software] libre para la gestión de referencias bibliográficas. Vinculado con el navegador Firefox, permite importar los datos directamente desde las páginas #[em web] visualizadas en el momento.
    .tarjeta.bg-cta.p-3.mb-4
      .row.justify-content-center
        .col-lg-1.col-3: img(src='@/assets/curso/temas/tema2/4.svg', alt='')
        .col-lg-11
          h5.mb-2(style='color: #fd9827') ¡Importante!
          p.text-white Algunas bases de datos suelen ofrecer la posibilidad de guardar el listado de resultados de las búsquedas que se hagan, en diferentes formatos o estilos. También permiten almacenar y gestionar bibliografía en su plataforma, a través de una cuenta personal.
    p.mb-5(data-aos='fade-right') Realizar una bibliografía es un proceso que podría resultar bastante complicado y tedioso ya que, si no se tiene el conocimiento básico para crear una bibliografía, o la experiencia en el uso de una herramienta que le ayude a realizarla, puede resultar complejo organizar de forma correcta las referencias.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-cta.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-9.mb-3.mb-sm-0
                  p.text-white.mb-0 Comprenda, de manera integral, sobre citas y referencias bibliográficas, visitando los enlaces que se muestran enseguida:
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones.mb-4(href='https://www.youtube.com/watch?v=v1TuBknavkI' target="_blank" type="")
                    span Enlace web 
                    i.fas.fa-video
                  
                  a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=4CaVpuyFeB4' target="_blank" type="")
                    span Enlace web 
                    i.fas.fa-video

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-tema5
  background-image: url(../assets/curso/temas/tema5/bg-tema5.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: start
  margin: 0 -3rem
.cajon-derecha
  .bloque-texto-g__img
    left: auto
    right: 0
  .bloque-texto-g
    justify-content: flex-start
</style>
