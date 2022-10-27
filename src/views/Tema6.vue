<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Elaboración de informes
    p.mb-5(data-aos='fade-right') El informe es un texto que se puede escribir con fines científicos, técnicos o comerciales, con el objetivo de comunicar datos relevantes para el cuerpo o personas encargadas de dirigir y tomar decisiones. El informe se utiliza principalmente para presentar resultados obtenidos, o análisis relevantes, verificados por el realizador de dicho informe.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Además, en ocasiones, el informe puede contener soluciones propuestas a los problemas, los métodos, etapas y procesos mediante los cuales se han obtenido los datos para encontrar esa solución o recomendaciones para lograrlo.
    p.mb-5(data-aos='fade-right').text-center Sobre los informes, conozca algunos elementos destacados, como:
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema6/2.png', alt='')
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Intención") Son elaborados, principalmente, para informar; por lo que #[b deben ser escritos con una estructura enunciativa] y aunque también se componen datos para transmitir los resultados, el autor produce una interpretación a partir de estos que detalla en la conclusión.
          p.text-small(numero="2" titulo="Fundamentación") Es importante que el autor realice una fundamentación argumentativa firme, que sustente sus afirmaciones conclusivas, así como sus recomendaciones y que también queden demostradas con el análisis de los datos estadísticos presentados.
          p.text-small(numero="3" titulo="Su elaboración") Se deberán redactar en tercera persona o utilizar el modo impersonal. Suele tener carácter de texto académico y formal, cuenta con una estructura definida, lo investigado debe estar respaldado con bibliografía (citas o referencias), todo su contenido estará sustentado en una investigación previa.
          p.text-small(numero="4" titulo="Informes demostrativos") Predomina en el ámbito científico. Se enfoca en presentar tesis realizadas por el autor del informe. Se describe cada uno de los pasos realizados y las conclusiones acerca de los resultados obtenidos. Son realizados a partir de una investigación exhaustiva de los hechos.
          p.text-small(numero="5" titulo="Informes expositivos") Se enfoca en narrar los hechos o secuencia de acontecimientos, pero sin análisis ni interpretaciones personales, por lo tanto, tampoco contiene conclusiones.
          p.text-small(numero="6" titulo="Informes interpretativos") Se trata de aquel tipo de informes que son especializados en el análisis y la interpretación de determinados hechos.
    p.mb-5(data-aos='fade-right').text-center En consecuencia, la estructura general de los informes consiste en tres partes fundamentales:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.bg-card.p-4.h-100
          img(src='@/assets/curso/temas/tema6/3.svg', alt='' style='width: 96px').m-auto.mb-3
          .text-center.text-white
            h5 Introducción
            p Sirve de presentación y donde aparecen detallados cuales son los objetivos deseados por los cuales se realiza el informe.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.bg-card.p-4.h-100
          img(src='@/assets/curso/temas/tema6/4.svg', alt='' style='width: 96px').m-auto.mb-3
          .text-center.text-white
            h5 Desarrollo
            p Se presentan los procedimientos y la metodología para lograr dichos objetivos planteados.
      .col-lg-3
        .tarjeta.bg-card.p-4.h-100
          img(src='@/assets/curso/temas/tema6/5.svg', alt='' style='width: 96px').m-auto.mb-3
          .text-center.text-white
            h5 Conclusión
            p Se presentan los resultados obtenidos, la presentación de datos y su ligazón con los objetivos.
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
                  span.fw-bold(style='color: #fd9827') Anexo_1_NormasUnidadesInformacion
                .col-auto.mb-3.mb-sm-0
                  a.boton.color-acento-botones(href='https://concepto.de/informacion/#ixzz7fZtUQLQ9' target="_blank" type="")
                    span Enlace web 
                    i.fas.fa-link
</template>

<script>
export default {
  name: 'Tema6',
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
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #785549
  color: #fff
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content__title
  background-color: #ddd4d1
.linea-tiempo-d__item__content__slot
  background-color: #ddd4d1
.bg-card
  background-image: url(../assets/curso/temas/tema6/bg-card.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
</style>
