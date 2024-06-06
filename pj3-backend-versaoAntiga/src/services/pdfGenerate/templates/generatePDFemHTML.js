const generateHTML = (users) => {
    let linhas = [];
    users.forEach(user => {
        linhas.push(`<tr><td>${user.id}</td><td>${user.nome}</td><td>${user.telefone}</td><td>${user.data}</td></tr>`);
    });

    let BaseHtml = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista-Usuarios</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <style>
            * {
                padding: 0;
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;
            }
    
            body {
                background-color: #FCFFFC;
                padding: 20px;
            }
    
            .cabecalho {
                margin-top: 3px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #424643;
                position: relative;
            }
            h2 {
                margin-top: 15px;
                margin-bottom: 15px;
            }
    
            .data {
                position: absolute;
                top: 0;
                right: 0;
            }
    
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
            }
    
            .centralizado {
                font-size: 23px;
                text-align: center;
                margin-top: 25px;
            }
    
            /* Estilo para linhas pares */
            tr:nth-child(even) {
                background-color: #e6fff2;
            }
    
            /* Estilo para linhas ímpares */
            tr:nth-child(odd) {
                background-color: #e6ffe6;
            }
    
            th, td {
                padding: 10px;
                border: 1px solid #ddd;
                text-align: left;
            }
        </style>
    </head>
    
    <body>
        <div class="cabecalho">
            <img src="https://picsum.photos/200/100" alt="">
            <h2>Parque Natural Municipal do Juqueriquerê</h2>
        </div>
        <div>
            <p class="centralizado">Relatorio Total de Visitas</p>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                ${linhas.join('')}

                <h1>Gráfico de Linhas com Chart.js</h1>
                <canvas id="lineChart" width="400" height="200"></canvas>
            </tbody>
            <tfoot>
                <!-- Pode adicionar rodapé aqui se necessário -->
            </tfoot>
        </table>
        <script>
        let ctx = document.getElementById('lineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [{
                label: 'Vendas',
                data: [10, 20, 30, 40, 50],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
        </script>
    </body>
    
    </html>`;

    return BaseHtml;
}

export default generateHTML;

// const generateHTML = (users) => {
//     let linhas = [];
//     users.forEach(user => {
//         linhas.push(`<tr><td>${user.id}</td><td>${user.nome}</td><td>${user.telefone}</td><td>${user.data}</td></tr>`);
//     });

//     let tabelas = ['jan', 'feb', 'mar']
//     let nomeTabela = "teste ai"
//     let dados = [9,10,11]

//     let BaseHtml = `<!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Lista-Usuarios</title>
//         <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
//         <style>
//             * {
//                 padding: 0;
//                 margin: 0;
//                 font-family: Arial, Helvetica, sans-serif;
//             }
    
//             body {
//                 background-color: #FCFFFC;
//                 padding: 20px;
//             }
    
//             .cabecalho {
//                 margin-top: 3px;
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;
//                 justify-content: center;
//                 color: #424643;
//                 position: relative;
//             }
//             h2 {
//                 margin-top: 15px;
//                 margin-bottom: 15px;
//             }
    
//             .data {
//                 position: absolute;
//                 top: 0;
//                 right: 0;
//             }
    
//             table {
//                 width: 100%;
//                 border-collapse: collapse;
//                 margin-top: 10px;
//             }
    
//             .centralizado {
//                 font-size: 23px;
//                 text-align: center;
//                 margin-top: 25px;
//             }
    
//             /* Estilo para linhas pares */
//             tr:nth-child(even) {
//                 background-color: #e6fff2;
//             }
    
//             /* Estilo para linhas ímpares */
//             tr:nth-child(odd) {
//                 background-color: #e6ffe6;
//             }
    
//             th, td {
//                 padding: 10px;
//                 border: 1px solid #ddd;
//                 text-align: left;
//             }
//         </style>
//     </head>
    
//     <body>
//         <div class="cabecalho">
//             <img src="https://picsum.photos/200/100" alt="">
//             <h2>Parque Natural Municipal do Juqueriquerê</h2>
//         </div>
//         <div>
//             <p class="centralizado">Relatorio Total de Visitas</p>
//         </div>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Nome</th>
//                     <th>Telefone</th>
//                     <th>Data</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 ${linhas.join('')}

//                 <canvas id="lineChart" width="400" height="200"></canvas>
                
//             </tbody>
//             <tfoot>
//                 <!-- Pode adicionar rodapé aqui se necessário -->
//             </tfoot>
//         </table>
//         <script>
//             document.addEventListener('DOMContentLoaded', (event) => {
//                 let ctx = document.getElementById('lineChart').getContext('2d');
//                 let lineChart = new Chart(ctx, {
//                     type: 'line',
//                     data: {
//                         labels: [${tabelas}],
//                         datasets: [{
//                             label: '${nomeTabela}',
//                             data: [${dados}],
//                                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                                 borderColor: 'rgba(54, 162, 235, 1)',
//                                 borderWidth: 1
//                         }]
//                     },
//                     options: {
//                         scales: {
//                             y: {
//                                 beginAtZero: true
//                             }
//                         }
//                     }
//                 });
//             });
//         </script>
//     </body>
    
//     </html>`;

//     return BaseHtml;
// }

// export default generateHTML;