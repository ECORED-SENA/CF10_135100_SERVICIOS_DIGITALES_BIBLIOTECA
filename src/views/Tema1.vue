<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Acceso a la Información
    p.mb-5(data-aos='fade-right') En la actualidad, dada la gran cantidad de información disponible, es importante que se tengan las herramientas básicas para discriminar cuál información tiene relevancia científica y merece ser tomada en cuenta y cuál no.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El acceso a la información bibliográfica y documental refiere un proceso sistemático y secuencial de recolección, selección, clasificación, evaluación y análisis de contenidos del material impreso y gráfico, físico y/o virtual que servirá de fuente teórica, conceptual y/o metodológica para una investigación concreta.
    h3 Generalidades importantes del acceso a la información
    p.mb-5(data-aos='fade-right') El acceso a  la información está marcado por aspectos clave que formalizan y ajustan dicho proceso. A continuación, se mencionan las generalidades más destacadas qe usted debe tener en cuenta:
    .tarjeta.tarjeta-slyders.p-lg-4.p-1.px-lg-5
      .tarjeta.bg-white.p-5.mx-lg-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Normas y derechos
              p El acceso a la información se enmarca en preceptos normativos de aplicación tanto para el acceso a los servicios prestados por la biblioteca como aquellas que le aplican directamente al comportamiento o conducta misma de los usuarios en relación con el tratamiento de la información obtenida.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema1/2.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Factibilidad de las normas
              p En el ejercicio práctico, la biblioteca determina qué tan visible o cuál puede ser el nivel de factibilidad respecto a las normas y derechos que deben ser cumplidos por sus usuarios al interactuar con los bibliotecarios, documentos y la información en general.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema1/3.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Información y conocimiento para el desarrollo
              p La información en la biblioteca como organización social avanza hacia nuevas formas en sus métodos, hacia la formación de individuos altamente calificados para el ejercicio profesional, pero también con el compromiso de generar conocimientos útiles en beneficio del desarrollo de la sociedad.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema1/4.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Rol del personal bibliotecario
              p El rol del bibliotecario juega un papel fundamental en el objetivo meta propuesto por la unidad de información; las acciones y demás estrategias implementadas harán, de la biblioteca, un lugar apetecido por su colección bibliográfica, la pertinencia de la información suministrada, la eficiente articulación de los servicios prestados y su rol frente a la comunidad.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Calidad y mejoramiento de la información
              p Si la información y el conocimiento son los elementos claves para la consolidación de cualquier sistema académico, la reflexión y gestión relacionada, en cuanto al mejoramiento de su contenido, calidad, oportunidad, actualidad, pertinencia, interpretación, medios y canales de transmisión, garantizará su establecimiento, consolidación y puesta al servicio, promoviendo así su mejoramiento continuo y, a su vez, la calidad de la educación en cada nivel.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4(style='color: #785549') Instrumentos de medición y control
              p Los servicios bibliotecarios deben someterse a procesos de evaluación que aporten valoraciones objetivas de los procesos y estrategias aplicados por la biblioteca. Adicionalmente, que aporten, medidas de percepción, indicadores (cualitativos y cuantitativos) y resultados.
            .col-lg-4.col-6
                img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
