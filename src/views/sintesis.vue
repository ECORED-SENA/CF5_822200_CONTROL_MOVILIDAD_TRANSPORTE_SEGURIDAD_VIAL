<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El seguimiento, la gestión de rutas y el mantenimiento garantiza la idoneidad de los equipos, esto apoyado de tecnología y una rigurosidad en las revisiones e inspecciones, han traído beneficios, pues permite definir las mejores rutas, sus facilidades e infraestructura y los equipos que más se adaptan a las condiciones anteriormente descritas, lo que genera disminución de costos, imprevistos y el cumplimiento a la normatividad vigente.  Basado en lo anterior y lo abordado en el componente formativo, a continuación, se presenta en el siguiente diagrama los temas desarrollados: 

    .row.justify-content-center
      .col-lg-9.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
          
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
