<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Acceso a la Información
    p.mb-5(data-aos='fade-right') La introducción de las TIC en las bibliotecas y su uso masivo ha generado la desaparición o desuso de algunas acciones tradicionales en cuanto al acceso, uso y disponibilidad de la información y propone, indirectamente, un salto o evolución de una biblioteca física a una biblioteca de servicios electrónicos y digitales.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El paradigma de la biblioteca ha cambiado. Los entornos en este ámbito, han dado entrada a nuevas formas de interacción entre la tecnología y los usuarios.
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p El uso de los diferentes medios tecnológicos, computadores, celulares, tabletas, etc., ha permitido que más usuarios con múltiples necesidades tengan mayor acceso a la información de valor; lo que ha permitido:
        ul.lista-ul--color.mb-5
          li.mb-0
            i.fas.fa-angle-right(style='color: #fd9827')
            | La modificación del diseño y la oferta de los servicios de información en las bibliotecas. 
          li.mb-0
            i.fas.fa-angle-right(style='color: #fd9827')
            | La manera de interactuar y la relación de las bibliotecas con los usuarios.
          li.mb-0
            i.fas.fa-angle-right(style='color: #fd9827')
            | La transformación de los mecanismos para solicitar y consultar la información.
          li.mb-0
            i.fas.fa-angle-right(style='color: #fd9827')
            | La demanda, cada vez más exigente, de usuarios cada vez más diversos.
        .tarjeta.color-acento-contenido.p-4
          h5.mb-2(style='color: #fd9827') ¿Y qué es la información?
          p.mb-0.text-white Es el conjunto organizado de datos relevantes para uno o más usuarios que utilizan, eficientemente, el conocimiento del mensaje.
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/2.svg', alt='')
    p.text-center En cuanto a los usos de la información, se destacan algunas generalidades que a continuación se enuncian.
      br
      |Recuerde tener presente y  llevar registro de ellas en su libreta personal de apuntes:
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        TabsA.color-acento-contenido.mb-5
          .tarjeta.bg-tabs.p-4(titulo="Información de valor")
            h4 Información de valor
            p Etimológicamente, las palabras por sí mismas, tienen la capacidad de transmitir y llevan consigo mensajes que, al relacionarlas unas a otras, generan información de valor. Es así como por intención del usuario de esa información se puede utilizar de determinada manera.
          .tarjeta.bg-tabs.p-4(titulo="Gustos, métodos y objetivos")
            h4 Gustos, métodos y objetivos
            p Aquí entonces, se conjugan varios factores importantes a la hora de definir los tipos de uso de la información; está claro, que esta depende del gusto, método y objetivo o para qué necesita dicha información.
          .tarjeta.bg-tabs.p-4(titulo="Clasificación")
            h4 Clasificación
            p La información, según su uso, puede clasificarse de maneras muy distintas, conforme a numerosos criterios: aprender, sensibilizar, formar, replicar, argumentar, entre otros.
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/3.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-cta.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.mb-0 Amplíe conceptos y saberes sobre usos de la información, explorando el contenido del siguiente enlace:
                  span.fw-bold(style='color: #fd9827') https://concepto.de/informacion/#ixzz7fZtUQLQ9
                .col-auto.mb-3.mb-sm-0
                  a.boton.color-acento-botones(href='https://concepto.de/informacion/#ixzz7fZtUQLQ9' target="_blank" type="")
                    span Enlace web 
                    i.fas.fa-link
</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
