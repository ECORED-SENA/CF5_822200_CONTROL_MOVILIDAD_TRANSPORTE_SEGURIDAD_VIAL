<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 9
      h1 Conceptos de mantenimiento: preventivo, correctivo, predictivo y mejorativo

    p(data-aos="fade-right") El tener flota y equipos en buenas condiciones, garantiza disponibilidad y la posibilidad de ser competitivos en los diferentes mercados.

    p(data-aos="fade-right").mb-4 El mantenimiento, son todas aquellas acciones, procesos que de manera técnica tienen como fin y permiten mantener en buenas condiciones el funcionamiento de los equipos; podemos clasificarlos de la siguiente manera:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 3.
      span Mantenimiento de vehículo

    .bg_img_01.p-4.mb-5(data-aos="zoom-in")    
      figure
        img(src="@/assets/curso/temas/t9/t9_01.svg", alt="alt")

    
    TabsB.color-primario(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Mantenimiento correctivo" :icono="require('@/assets/curso/temas/recursos/tab_01.svg')")
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0
            h4 Mantenimiento correctivo
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Este también puede catalogarse como un mantenimiento reactivo, los equipos están trabajando de manera permanente y, por lo tanto, los tiempos muertos o improductivos por efectos de estas revisiones son muy pocos.
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | En términos de costos son más altos, pues cuando un componente o una pieza se llevan a su límite de falla, generalmente pueden afectar otras piezas que también deben ser reparadas y los tiempos de intervención pueden ser un poco mayores. 
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Estos mantenimientos pueden clasificarse para equipos que en las operaciones o en las empresas sean de baja prioridad, en equipos de muy bajo valor o en equipos que no vayan a generar pérdidas económicas mayores o colapsen las operaciones.
          .col-auto
            figure.d-none.d-lg-flex
              img(src="@/assets/curso/temas/t9/t9_02.png", alt="alt")
            figure.d-flex.d-lg-none
              img(src="@/assets/curso/temas/t9/t9_03.png", alt="alt")

      .py-4.py-md-5(titulo="Mantenimiento preventivo" :icono="require('@/assets/curso/temas/recursos/tab_02.svg')")
        .row.justify-content-center
          .col-xl.mb-4.mb-xl-0
            h4 Mantenimiento preventivo 
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Es planeado de manera regular y ajustado a fechas definidas y a unos tiempos de intervención, independientemente de las condiciones operativas del equipo, con la finalidad de anticipar posibles daños o fallas. 
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Al ser un mantenimiento periódico reduce las consecuencias de daños mayores, pues son detectados a tiempo.  
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Para estas revisiones es muy conveniente elaborar un check list, basado en las fichas técnicas de los equipos y las recomendaciones de los fabricantes, para preservar la integridad de las máquinas y tener una trazabilidad de los componentes revisados e intervenidos.
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Es de gran utilidad tener bases de datos que permitan llevar estos controles y avisen las fechas próximas de los mantenimientos y a que componentes.
              li.mb-0
                i.fa-li.fas.fa-circle.bullet--orange
                | La principal ventaja de este mantenimiento es que los equipos se conservan en mejores condiciones y pueden durar más tiempo operativos, bajando costos por intervenciones, pero esto también implica como desventaja realizar más inspecciones y mantenimientos menores en la vida útil del equipo.
          .col-auto
            figure.d-none.d-xl-flex
              img(src="@/assets/curso/temas/t9/t9_04.png", alt="alt")
            figure.d-flex.d-xl-none
              img(src="@/assets/curso/temas/t9/t9_05.png", alt="alt")

      .py-4.py-md-5(titulo="Mantenimiento predictivo" :icono="require('@/assets/curso/temas/recursos/tab_03.svg')")
        .row.justify-content-center
          .col-xl.mb-4.mb-xl-0
            h4 Mantenimiento predictivo 
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Se basa en realizar un diagnóstico y supervisión, basado en las características del equipo y fichas técnicas, para predecir y prevenir daños o averías y determinar cuando debería ser sustituido la pieza o componente antes que falle, es mucho más anticipado que el mantenimiento preventivo, pues no se interviene cuando la pieza falla. 
              li.mb-0
                i.fa-li.fas.fa-circle.bullet--orange
                | Este mantenimiento tiene la ventaja que los equipos pueden tener más tiempo de operación y las intervenciones para su mantenimiento son muy rápidas, la desventaja radica en tener las herramientas y tecnologías que permitan hacer estos diagnósticos y determinar la periodicidad del cambio de todos los componentes             
          .col-auto
            figure
              img(src="@/assets/curso/temas/t9/t9_06.png", alt="alt")
           



   

</template>

<script>
export default {
  name: 'Tema9',
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
