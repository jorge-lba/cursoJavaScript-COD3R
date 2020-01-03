echo "Executando Ambiente de Estudo COD3R"

google-chrome https://www.udemy.com/
sleep 2
wmctrl -r Cursos Online -b remove,maximized_vert,maximized_horz
sleep .5
wmctrl -r Cursos Online -e 0,0,0,700,600
sleep .5
google-chrome
sleep 2
wmctrl -r NeW Tab  Online -b remove,maximized_vert,maximized_horz
sleep .5
wmctrl -r NeW Tab  Online -e 0,0,1000,700,490

cd Desktop/COD3R/exercises-js/
code .
sleep 2
wmctrl -r Visual Studio Code -b remove,maximized_vert,maximized_horz
sleep .5
wmctrl -r Visual Studio Code -e 0,2000,0,1000,1000
