<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 1
      h1 Técnicas de seguimiento y control

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_01.png", alt="alt")
      .col-lg-8(data-aos="fade-right")
        p El seguimiento y control a los operadores y a los equipos en tiempo real es fundamental, el desarrollo de las operaciones logísticas, garantiza el rendimiento de los equipos, minimiza la posibilidad de errores en los tiempos de entrega, la calidad de la carga o comprometer la integridad de los equipos, la trazabilidad de fechas y horas de salida, ubicaciones en la ruta, reporte de novedades, fechas y horas de llegada. El personal y flotas eficientes, es una de sus principales fortalezas.

        p.mb-0 Para comenzar a tener bases de datos y controles es muy importante seguir los pasos mencionados en el siguiente video: 

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/PMzSKCTYZIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
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
