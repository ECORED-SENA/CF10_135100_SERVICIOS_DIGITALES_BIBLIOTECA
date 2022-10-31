<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .tarjeta.bg-cta.p-3.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3: img(src='@/assets/curso/temas/sintesis1.svg', alt='')
        .col-lg-11
          p.text-white.mb-0 Usted ha finalizado el estudio de los contenidos de este componente formativo. En este punto haga análisis de la estructura que se presenta enseguida y elabore su propia síntesis, la cual se espera que registre en su libreta personal de apuntes.
          h5.mb-2(style='color: #fd9827') Adelante
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
