<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evidencias del servicio de información
    p.mb-5(data-aos='fade-right') El ciclo de la información comprende el estudio de los usuarios, sus necesidades y las del entorno, la identificación, evaluación, selección y adquisición, la organización (procesamiento) el almacenamiento, la búsqueda y recuperación, el suministro de los documentos y la respectiva retroalimentación a los usuarios.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la gestión de la calidad de la información se enfatiza en el valor de la búsqueda de la información y en la investigación, para mejorar la práctica en cualquier grupo de usuarios.
    .bg-gradient.p-5
      .tarjeta.bg-cta.p-3.mb-4
        .row.justify-content-center
          .col-lg-1.col-3: img(src='@/assets/curso/temas/tema2/4.svg', alt='')
          .col-lg-10
            h5.mb-2(style='color: #fd9827') ¡Importante!
            p.text-white La gestión de la calidad de la información estimula tanto la búsqueda de la información como la investigación e introduce en cada fase del ciclo, experiencias y resultados, cuya efectividad se ha probado para determinados objetivos en condiciones similares.
      p.text-center La información deberá cumplir con características como:
    .row.justify-content-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5.position-relative
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/2.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-tabs.p-5(x="6.3%" y="38.2%" numero="1")
            .h5.mb-2 1.	Significado
            p Contenido semántico, temático, contextual o de alguna naturaleza, que cada individuo empleará según criterio propio.
          .tarjeta.bg-tabs.p-5(x="19%" y="74.2%" numero="2")
            .h5.mb-2 2.	Importancia
            p Si bien la importancia de una información es siempre relativa a los interlocutores, o sea, que depende de cada uno, qué tanto alteran los datos recibidos a la conducta de los usuarios.
          .tarjeta.bg-tabs.p-5(x="50.1%" y="91.2%" numero="3")
            .h5.mb-2 3.	Vigencia
            p Se entiende por vigencia la validez de la información en el tiempo, lo cual siempre depende del contexto y de sus receptores.
          .tarjeta.bg-tabs.p-5(x="80.5%" y="74.2%" numero="4")
            .h5.mb-2 4.	Validez
            p La información será fiable o válida, dependiendo del emisor y de los criterios del receptor. Si este último considera que la fuente no es fiable, la información perderá importancia.
          .tarjeta.bg-tabs.p-5(x="93.8%" y="38.2%" numero="5")
            .h5.mb-2 5.	Valor
            p Uso específico para el destinatario, así sea meramente informativo.
    

</template>

<script>
export default {
  name: 'Tema3',
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
.img-infografica-b__modal
  background-image: url(../assets/curso/temas/tema3/bg-modal.svg)
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  min-height: 196px !important
  border-radius: 20px
  .h5, p
    color: $color-sistema-texto !important
  position: absolute
.img-infografica-b__img
  position: relative
</style>
