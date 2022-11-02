<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Directrices internacionales para bibliotecas y servicios de información
    p.mb-5(data-aos='fade-right') Para sacar partido a las oportunidades que traen consigo las tecnologías de la información y las comunicaciones, es imprescindible que los usuarios se adapten a los cambios, alfabetizarse en las dinámicas de uso y aprovechamiento eficiente de la información.
    .bg-tema4.p-5
      .row.justify-content-center.mb-5
        .col-lg-10(data-aos="zoom-in")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/1.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 El aprovechamiento de la innovación no solo depende de los recursos informativos y los servicios establecidos por la biblioteca, el usuario también juega un papel trascendental a la hora de potencializar el uso de dichos servicios y de establecer el verdadero impacto en su persona y/o en su comunidad.
      .row.justify-content-center.mb-5
        .col-lg-7(data-aos="fade-right")
          p.mb-5(data-aos='fade-right') Al ser un servicio público, abierto a todos, la biblioteca desempeña funciones vitales, como:
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-angle-right(style="color:#F9A825")
              | Recoger, organizar y explotar la información y dar acceso a toda una serie de fuentes de información.
            li.mb-3
              i.fas.fa-angle-right(style="color:#F9A825")
              | Actuar como memoria del pasado recogiendo, conservando y brindando acceso a materiales relacionados con la historia de la comunidad y de las personas.
            li.mb-3
              i.fas.fa-angle-right(style="color:#F9A825")
              | Ser elemento primordial de políticas de progreso y transformación.
            li.mb-3
              i.fas.fa-angle-right(style="color:#F9A825")
              | Velar, a través de sus operarios posesionados en sus roles, por la garantía de la información y el conocimiento.
            li.mb-3
              i.fas.fa-angle-right(style="color:#F9A825")
              | Asegurar su futuro misional, basándose en la legislación, que le permita adaptarse a los diferentes modelos de funcionamiento y de servicios.
        .col-lg-5.col-md-6(data-aos="fade-left")
          img.img-fluid(src="@/assets/curso/temas/tema4/2.svg")
      p.mb-5(data-aos='fade-right').text-center En lo relacionado con directrices para bibliotecas y servicios de información, tenga presente:
      .row.justify-content-center.mb-5
        .col-lg-8
          ImagenInfografica.color-acento-botones.mb-5.position-relative
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema4/3.svg', alt='Texto que describa la imagen')
            .tarjeta.bg-tabs.p-5(x="10%" y="43.2%" numero="1")
              .h5.mb-2 1.	Estructuras administrativas bibliotecarias
              p Las estructuras administrativas de las bibliotecas difieren mucho de un país a otro, la forma y los pormenores de la legislación sobre bibliotecas también son susceptibles a evolucionar o cambiar sustancialmente, afectando positivamente su funcionamiento.
            .tarjeta.bg-tabs.p-5(x="25.5%" y="68.2%" numero="2")
              .h5.mb-2 2.	Aportes de la legislación
              p La legislación ayuda a determinar o adaptar el nivel requerido de funcionamiento y gestión bibliotecaria, de acuerdo con la dinámica de demanda de información, identificada en las comunidades o regiones.
            .tarjeta.bg-tabs.p-5(x="49.5%" y="77.8%" numero="3")
              .h5.mb-2 3.	Normas y directrices de unidades de información
              p Se trata de todos aquellos #[b parámetros] que #[b regulan la actividad de las entidades]. A diferencia de las normas que hacen referencia a los aspectos técnicos que indican cómo deben ser los procesos y servicios.
            .tarjeta.bg-tabs.p-5(x="73.6%" y="68.2%" numero="4")
              .h5.mb-2  4.	Organismos orientadores
              p Son varios los organismos que orientan y norman los procesos de las unidades de información. Muchos de estos son especializados en un área específica del conocimiento, mientras que otros abordan diferentes áreas.
            .tarjeta.bg-tabs.p-5(x="89.8%" y="43.2%" numero="5")
              .h5.mb-2 5.	Aporte de la AENOR
              p La Asociación Española de Normalización y Certificación, ha aportado con la emisión de varias normas relacionadas con la actividad en unidades de información.
      p.text-center Las siguientes, son algunas de las normas emitidas por la AENOR:
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1.
        span Normas de la Asociación Española de Normalización y Certificación
      .color-acento-botones.mb-5
        table
          thead
            tr.text-white(style="background-color: #31313c")
              th Norma
              th Referencia
          tbody
            tr(style="background-color: #f4eae2")
              td.py-1 UNA-EN 15744:2011
              td.py-1 Identificación de películas. Conjunto mínimo de metadatos para trabajos cinematográficos.
            tr(style="background-color: #ebd0bc")
              td.py-1 UNE-EN 15907:2011 
              td.py-1 Identificación de películas. Mejora de la interoperabilidad de los metadatos. Conjuntos y estructuras de elementos.
            tr(style="background-color: #f4eae2")
              td.py-1 UNE 50137:2000/1M:2005
              td.py-1 Información y documentación. Indicadores de rendimiento bibliotecario.
            tr(style="background-color: #ebd0bc")
              td.py-1 UNE 50131:1996
              td.py-1 Documentación. Directorios de bibliotecas, archivos, centros de información y documentación y sus bases de datos.
            tr(style="background-color: #f4eae2")
              td.py-1 ISO 16371
              td.py-1 Reportar cualquier anomalía que se encuentre en el material documental (ausencia, daño intencional o involuntario) y/o en las instalaciones de la biblioteca.
            tr(style="background-color: #ebd0bc")
              td.py-1 ISO 11620
              td.py-1 Abordan indicadores de evaluación en relación con cuatro ejes: recursos, acceso e infraestructura, uso, eficiencia potencial y desarrollo.
      //TODO Añadir anexo 
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.bg-cta.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema2/4.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-white.mb-0 Amplíe su conocimiento de documentos y normas de regulación de las unidades de información, estudiando con atención el contenido del siguiente archivo:
                  .col-auto.mb-3.mb-sm-0
                    a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank" type="application/pdf")
                      span Descargar
                      i.fas.fa-file
</template>

<script>
export default {
  name: 'Tema4',
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
.bg-tema4
  background-image: url(../assets/curso/temas/tema3/bg-tema4.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: start
  margin: 0 -3rem
</style>
