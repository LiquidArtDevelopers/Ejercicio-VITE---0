import '../scss/main.scss' //aquí importo el scss

import './assets/_artJs.js' //aquí importo todo el código en bruto del otro fichero


// Aquí importo la función que en el otro archivo exporto a través de un alias
// Para poder ejecutar el código aquí importado, necesitaré ejecutar o kllamar a su función. (que es la función que en el otro fichero exporto)
import { artAscordeon01 } from './assets/_artAscordeon01.js'

artAscordeon01() //así llamo a la función que me viene del import




