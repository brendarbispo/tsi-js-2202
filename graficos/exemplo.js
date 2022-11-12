new Morris.Line({
    // ID do elemento onde o grafico vai aparecer
    element: 'graficoDeLinha',
    // Dados do grafico
     data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 }
    ],
    // O nome do eixo com valores de X
    xkey: 'year',
    // Uma lista de nomes dos atribustos contidos em Y 
    ykeys: ['value'],
    // Rotulos para indices **Aparce quando passa o mouse
    labels: ['Value']
  });

  new Morris.Bar({
    // ID do elemento onde o grafico vai aparecer
    element: 'graficoDeBarra',
    // Dados do grafico
     data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 }
    ],
    // O nome do eixo com valores de X
    xkey: 'year',
    // Uma lista de nomes dos atribustos contidos em Y 
    ykeys: ['value'],
    // Rotulos para indices **Aparce quando passa o mouse
    labels: ['Value']
  });

  
  new Morris.Donut({
    // ID do elemento onde o grafico vai aparecer
    element: 'graficoDeDonut',
    // Dados do grafico
     data: [
      { label: '2008', value: 20, color: '#348888'},
      { label: '2009', value: 10, color: '#22BABB' },
      { label: '2010', value: 5, color: '#9EF8EE'},
      { label: '2011', value: 5, color: '#FA7F08' },
      { label: '2012', value: 20, color: '#F24405' }
    ],
    // O nome do eixo com valores de X
    xkey: 'year',
    // Uma lista de nomes dos atribustos contidos em Y 
    ykeys: ['value'],
    // Rotulos para indices **Aparce quando passa o mouse
    labels: ['Value']
  });

    
  new Morris.Area({
    // ID do elemento onde o grafico vai aparecer
    element: 'graficoDeArea',
    // Dados do grafico
     data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 }
    ],
    // O nome do eixo com valores de X
    xkey: 'year',
    // Uma lista de nomes dos atribustos contidos em Y 
    ykeys: ['value'],
    // Rotulos para indices **Aparce quando passa o mouse
    labels: ['Value']
  });