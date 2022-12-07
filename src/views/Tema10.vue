<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 10
      h1 Características de la documentación de operación del medio de transporte

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t10/t10_01.png", alt="alt")
      .col-lg-9(data-aos="fade-right")
        p Es importante que dentro de toda la cadena logística de transporte estén regulados, también, los proveedores de los bienes a transportar, por lo tanto, y en paralelo a la documentación hay que conocer quiénes son los intervinientes; a continuación, se enuncian los participantes en la cadena de suministro:

        TabsA.color-acento-contenido
          .bg--PaleYellow3.p-4.br--02(titulo="Proveedores")
            h4 Proveedores
            p Están encargados de ofrecer los servicios y bienes, movilizan los bienes o servicios a través del transporte con sus modos y medios.

          .bg--PaleYellow3.p-4.br--02(titulo="Las fábricas")
            h4 Las fábricas
            p Encargadas de la transformación de los bienes y servicios llevados a través de los diferentes modos de transporte, su función es la de transportar las materias primas y productos acabados entre las empresas y sus clientes. 

          .bg--PaleYellow3.p-4.br--02(titulo="Clientes")
            h4 Clientes
            p Son más que consumidores pasivos son una mina de conocimientos y experiencias, para que la empresa se mantenga como la mejor opción, toda esta interconexión se ocupa de satisfacer necesidades del cliente final. 

          .bg--PaleYellow3.p-4.br--02(titulo="Estado")
            h4 Estado
            p Es necesario que se cumpla a cabalidad con unos requisitos mínimos en la documentación, conocer la normatividad vigente en el país, que documentos son exigibles, dependiendo el proceso que se vaya a revisar.

    separador

    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 10.1 Verificación de la documentación

    p(data-aos="fade-right").mb-4 Los cuatro documentos obligatorios al conducir un vehículo son:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris").mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center(titulo="Licencia de tránsito")
        .col-xl.mb-4.ms-lg-5
          p Identifica al vehículo como legal, acredita la propiedad y autorizado para transitar por todo el territorio colombiano, contiene la siguiente información:
          .row
            .col-lg-6
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Marca.     
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Modelo.   
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Número de pasajeros.    
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Número de placa.   
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Cilindraje.   
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Número de motor.   
            .col-lg-6
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Número de chasis.   
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Clase de vehículo.
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Tipo de carrocería.    
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Tipo de combustible.  
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Color.
                li.mb-2
                  i.fa-li.fas.fa-circle.bullet--orange
                  | Nombre completo del propietario.
        .col-auto.mb-4.mb-xl-0
          figure
            img(src='@/assets/curso/temas/t10/t10_02.png', alt='') 
        .col-12.ms-lg-5
          p.mb-0 El Código Nacional de Tránsito tiene establecido que en ningún caso se puede circular sin portar licencia de tránsito, pues acarrea multa e inmovilización del vehículo.

      .row.justify-content-center.align-items-center(titulo="Licencia de conducción")
        .col-12.mb-4.ms-lg-5
          p Acredita para la conducción de vehículos automotores dependiendo de la categoría que se obtenga.
        .col-12.ms-lg-5
          figure
            img(src='@/assets/curso/temas/t10/t10_03.png', alt='') 

      .row.justify-content-center.align-items-center(titulo="Seguro Obligatorio de Accidentes de Tránsito (SOAT)")
        .col-12.mb-4.ms-lg-5
          p Establecido por Ley con un fin social. Su objetivo es asegurar la atención, de manera inmediata e incondicional, de las víctimas de accidentes de tránsito que sufren lesiones corporales y muerte.
        .col-12.ms-lg-5
          figure
            img(src='@/assets/curso/temas/t10/t10_04.png', alt='') 

      .row.justify-content-center.align-items-center(titulo="Certificado de Revisión Técnico-Mecánica y de Gases")
        .col-12.mb-4.ms-lg-5
          p Aplica para todos los vehículos y certifica que se encuentren en buenas condiciones, garantizando la seguridad vial a todos los actores viales.
        .col-12.ms-lg-5
          figure
            img(src='@/assets/curso/temas/t10/t10_05.png', alt='')

    p(data-aos="fade-right").mb-5 Ahora bien, los documentos obligatorios que deben portar los conductores que transporten carga son:  

    .bg_slider.p-2.p-md-4.p-lg-5.br--01(data-aos="zoom-in").mb-5
      SlyderA(tipo="b")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Tarjeta de Registro Nacional de Transporte de Carga
            p Este documento reemplaza a la Tarjeta de Operación y es el Ministerio de Transporte el ente encargado de registrar a todo propietario o conductor de un vehículo que preste el servicio de carga.   
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t10/t10_06.png', alt='')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Manifiesto de carga
            p Documento que ampara el transporte de mercancías ante las distintas autoridades, al movilizarse en vehículos de servicio público, mediante contratación a través de empresas de transporte de carga legalmente constituidas y debidamente habilitadas por el Ministerio de Transporte.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t10/t10_07.png', alt='')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Remesa terrestre de carga
            p Documento que representa la carga que se transporta en una operación de Transporte.   
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t10/t10_08.png', alt='')
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Otros documentos
            p Los demás documentos que los reglamentos establezcan para el transporte de mercancías de carácter peligroso, restringido o especial.  
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t10/t10_09.png', alt='')

    separador

    #t_10_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 10.2 Evaluación y gestión del riesgo

    .rectangle_03.mb-4(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-auto.me-4.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/t10/t10_10.svg", alt="alt")
        .col-lg
          p.mb-0 La evaluación del riesgo debe estar asociada a la prevención, identificando aquellos puntos, aspectos, procesos o procedimientos que puedan generar algún tipo de daño o lesión a personas o a los elementos, el riesgo es dinámico al igual que las acciones que debemos estar considerando.

    p(data-aos="fade-right").mb-5 La evaluación del riesgo es una fase muy importante en el desarrollo del proceso de planeación, se indica su desarrollo, así:

    .bg--half
      .row.justify-content-center
        .col-auto
          .hlgt--yellow02
            h4.mb-0 Evaluación y gestión del riesgo

    .bg_img_01.p-5.mb-5(data-aos="zoom-in")
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t10/t10_11.svg', alt='')

        .bg--yellow2.p-3(x="17%" y="18%" numero="+")
          .h5.mb-2 Operación de logística de transporte
          p.mb-0 Determinar las características de la geografía de rutas de transporte y del plan de rutas.

        .bg--yellow2.p-3(x="11%" y="41.5%" numero="+")
          .h5.mb-2 Norma ISO 31000
          p.mb-0 La cual se basa en una serie de principios. La administración/gestión de riesgos anticipa, detecta, reconoce y responde a esos cambios y eventos de una manera apropiada y oportuna. 

        .bg--yellow2.p-3(x="17%" y="85%" numero="+")
          .h5.mb-2 Norma ISO 9001 y la ISO 14001
          p.mb-0 Evaluando los riesgos a los trabajadores y los impactos al medio ambiente por las emisiones producto de nuestras actividades, en los temas de transporte, la integridad de operador, equipo y carga.

        .bg--yellow2.p-3(x="83%" y="15%" numero="+")
          .h5.mb-2 Planes de contingencia
          p.mb-0 Son documentos que dan directrices, para generar estrategias, procesos, procedimientos, protocolos, etc. y dar respuesta apropiada a la atención de los incidentes que se puedan dar como desarrollo de las operaciones de transporte.

        .bg--yellow2.p-3(x="89%" y="41.5%" numero="+")
          .h5.mb-2 Aseguramiento de la calidad
          p.mb-0 Este se logra cuando la logística funciona de acuerdo con lo planeado.

        .bg--yellow2.p-3(x="83%" y="85%" numero="+")
          .h5.mb-2 Norma ISO 9000
          p.mb-0 Está basada en normas de  control de calidad y gestión de calidad, permite monitorear y medir a través de indicadores, todos los procesos productivos y administrativos de la empresa.

    p(data-aos="fade-right").mb-5 En esta norma de calidad cada organización describe cómo realiza sus operaciones con calidad, tiempos de entrega de acuerdo a los procesos que maneje y niveles de servicio. En la norma de calidad se indican 8 principios de gestión, como se expone a continuación:

    .row.justify-content-center.mb-lg-4
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
        .bg--yellow2.p-4.br--01.hg--100(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t10/t10_12.png", alt="alt").img85
          h5 Enfoque al cliente
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
        .bg--yellow2.p-4.br--01.hg--100(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t10/t10_13.png", alt="alt").img85
          h5 Liderazgo          
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
        .bg--yellow2.p-4.br--01.hg--100(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t10/t10_14.png", alt="alt").img85
          h5 Compromiso de las personas         
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
        .bg--yellow2.p-4.br--01.hg--100(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t10/t10_15.png", alt="alt").img85
          h5 Enfoque basado en procesos

    .row.justify-content-center
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
        .bg--yellow2.p-4.br--01.hg--100(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t10/t10_16.png", alt="alt").img85
          h5 Mejora continua
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
        .bg--yellow2.p-4.br--01.hg--100(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t10/t10_17.png", alt="alt").img85
          h5 Toma de decisiones basada en evidencias      
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
        .bg--yellow2.p-4.br--01.hg--100(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t10/t10_18.png", alt="alt").img85
          h5 Gestión de las relaciones entre Cliente y la empresa         
      .col-lg-3.col-md-6.col-8.mb-4.mb-lg-0
        .bg--yellow2.p-4.br--01.hg--100(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t10/t10_19.png", alt="alt").img85
          h5 Participación y compromiso de todo el personal de la empresa



</template>

<script>
export default {
  name: 'Tema10',
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
