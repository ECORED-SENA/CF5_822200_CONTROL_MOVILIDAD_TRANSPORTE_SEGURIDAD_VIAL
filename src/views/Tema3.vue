<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 3
      h1 Conceptos para ubicación geoestacionaria de las rutas

    p(data-aos="fade-right").mb-5 Es fundamental evidenciar cómo el avance de la tecnología está ligado a las mejoras de información en las operaciones de transporte, pero para entender un poco más las órbitas estacionarias y su aplicación, se presenta la definición que tiene la Real Academia Española al respecto:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos="flip-right")
        .bloque-texto-f.hlgt--yellow01.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.bloque-texto-f__texto Órbita geoestacionaria: Int. púb. Órbita situada a unos 36 000 kilómetros del ecuador de la Tierra en la que los satélites artificiales se mueven en sincronía con la rotación terrestre y que resulta técnicamente idónea para la ubicación, sobre todo, de satélites de telecomunicaciones, pero que posee una capacidad limitada de recepción de satélites en condiciones de seguridad.
          .bloque-texto-f__autor.mb-3
            h5.mb-0 Nota. Definición según la RAE.           

      .col-lg-6.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_01.png", alt="alt")

    p.mb-4 A continuación, en el siguiente recurso se detallan los diferentes tipos de satélites y su clasificación:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-in")
      .row(titulo="Geoestacionarios")
        .col-12.mb-4
          p Son los que su órbita está trazada sobre la línea Ecuador y su velocidad es igual a la velocidad de rotación de la Tierra, está a una altura promedio de 36.000 kilómetros y existe un equilibrio entre la fuerza de atracción del planeta Tierra y la fuerza centrífuga, lo que permite que el satélite se mueva a la misma velocidad de rotación del planeta. 

          p.mb-0 La función principal de estos satélites es comunicaciones en doble vía para uso masivo de voz y datos, internet y televisión, también son utilizados para correlacionar y generar pronósticos del clima y usos educativos en zonas alejadas en donde otros sistemas de información no pueden llegar.      
        .col-12
          figure
            img(src='@/assets/curso/temas/t3/t3_02.png', alt='')

      .row(titulo="Satélites polares")
        .col-12.mb-4
          p.mb-0 Estos viajan de polo a polo, de norte a sur.      
        .col-12
          figure
            img(src='@/assets/curso/temas/t3/t3_03.png', alt='')

      .row(titulo="Satélite EUTELSAT 115 WEST B")
        .col-12.mb-4
          p.mb-0 Presta servicios para video, voz, datos, movilidad y usos gubernamentales.      
        .col-12
          figure
            img(src='@/assets/curso/temas/t3/t3_04.png', alt='')

      .row(titulo="Satélites para fines militares y de investigación")
        .col-12.mb-4
          p.mb-0 En la actualidad son vitales en los avances tecnológicos y en la disponibilidad de información en tiempo real, se usan en Sistemas de Geoposicionamiento Global (GPS).       
        .col-12
          figure
            img(src='@/assets/curso/temas/t3/t3_05.png', alt='')

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

<style lang="sass"></style>
