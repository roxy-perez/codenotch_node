## Módulo 3 - NodeJS
=====================
### Codenotch - Retos Día 1
#### by **Roxy Pérez**
---

#### **_Aclaraciones:_**

##### RAMA :: Day1 
- Ejercicios realizados utilizando `Node v16.17.1`
- En el **Reto 2** , utilicé una *función propia* a la cúal se el pasa el nombre del fichero y la callback que hará la lectura del fichero con `ReadFile`.
- En el **Reto 3**, para simplificarlo todo utilicé la callback del mismo `readLine.question`, definiendo y ejecutando todo a la vez.

##### RAMA :: Day2
- Retos: 2 y 3 del día anterior recodificados con Promesas - `fs/promises`.
- Carpeta `promises` 
- El `reto2.js` creará un fichero json llamado `hero.json`
- El `reto3.js` creará un fichero json llamado `hero2.json`

##### RAMA :: Day3
- Retos: 1 y 2 realizados con los módulos http y express de NodeJS

##### RAMA :: Day4
- Reto realizado con el módulo Express de NodeJS y TypeScript
- Módulos instalados: `typescript @types/express @types/node node-ts`
- Ejemplos de llamadas:
  - **GET:** localhost:3000/profesional?name=Katie McGrath
  - **POST:** localhost:3000/profesional
  - **PUT:** localhost:3000/profesional/?name=Katie McGrath
  - **DELETE:** localhost:3000/profesional

- Ejemplo de BODY: 

 `{
  "name": "Katie McGrath",
  "age": 39,
  "weight": 59,
  "height": 1.68,
  "isRetired": false,
  "nationality": "Irish",
  "oscarsNumber": 0,
  "profession": "actress"
 } `


