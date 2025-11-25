import React, { useState, useEffect } from "react";
/**export default App;
🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

Cosa deve fare?

Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
Posiziona il componente al posto del puntatore del mouse.
Il componente segue i movimenti del mouse.
Esempio di utilizzo:
 */
function useCustomPointer() {
  const [customPointer, setCustomPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMovement = (e) => {
      setCustomPointer({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMovement);
    return () => document.removeEventListener("mousemove", updateMovement);
  }, []);
}

export default useCustomPointer;
