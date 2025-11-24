import React, { useState } from "react";
/**Creare un custom hook per alternare un valore booleano tra true e false.

Cosa deve fare?

Inizialmente false.
Ritorna il valore attuale e una funzione toggle() per cambiarlo.
Quando toggle() viene chiamato, il valore passa da true → false e viceversa.
 */

function useSwitch() {
  //ho pensato semplicemente di creare uno stato con un valore iniziale false
  const [isOn, setIsOn] = useState(false);
  //qui cambio aggiorno lo stato con un setState
  const toggle = () => {
    return setIsOn((prev) => !prev);
  };
  //nel return porto tutti e due gli elementi che mi servono
  return [isOn, toggle];
}

export default useSwitch;
