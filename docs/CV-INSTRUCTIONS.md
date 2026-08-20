# El CV

El PDF de `public/CV-Julio-Cesar.pdf` no se edita a mano: lo genera
`scripts/generate_cv.py`. Así el CV y la web nunca dicen cosas distintas.

```bash
pip install reportlab
npm run cv
```

## Qué hay que tocar para cambiarlo

Todo el contenido vive en las constantes de la cabecera del script:

| Constante    | Qué controla                                     |
| ------------ | ------------------------------------------------ |
| `NAME`       | Nombre del encabezado                            |
| `TITLE`      | Línea de rol bajo el nombre                      |
| `SUMMARY`    | Párrafo de perfil                                |
| `HIGHLIGHTS` | Los tres números grandes                         |
| `SKILLS`     | Chips de la barra lateral, por categoría         |
| `PROJECTS`   | Bloques de proyecto con bullets, stack y enlaces |
| `EDUCATION`  | Formación                                        |

El diseño (dos columnas, colores, tipografías) está más abajo, en la paleta y
en los `ParagraphStyle`.

## La foto

Deja un retrato **cuadrado** en `assets/foto.jpg` y el script lo recorta en
círculo solo. Esa carpeta está en `.gitignore`, así que el archivo no se sube;
la foto sí queda embebida dentro del PDF, que sí se publica.

Sin foto no falla: dibuja las iniciales y sigue saliendo bien.

## Reglas que conviene no romper

- **Una sola página.** Si añades cosas y se desborda, recorta antes de aceptar
  la segunda página.
- **Nada que no se pueda comprobar.** Los números de `HIGHLIGHTS` tienen que
  cuadrar con lo que hay en GitHub. Si un proyecto pasa a privado, deja de
  contarlo.
- **Sin enlaces a repos privados.** Un botón "Repo" que no abre nada es peor
  que no ponerlo.
