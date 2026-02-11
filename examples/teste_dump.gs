* ============================================================================
* Script: teste_dump.gs
* Purpose: Prototype GrADS dump test preserved for archive traceability.
* Archive Context: MSc dissertation climate modeling workflow (historical archive).
* Inputs: Model, observational, or intermediate climate datasets (see repository README).
* Outputs: Diagnostics, plots, and/or intermediate text/binary files used by workflows.
* Path Configuration: Root paths are configurable and default to repository-relative directories.
* Notes:
*   - Core computational logic is preserved to keep reproducibility with original experiments.
*   - Update path variables before running in a new environment.
* ============================================================================

'reinit'
* Configurable root path (update for local environment)
data_root='./data'
'open 'data_root'/agcm20/Brazil/present/sfc_Brazil_avr_mon.ctl'
'open 'data_root'/agcm20/Brazil/near_future/sfc_Brazil_avr_mon.ctl'
'open 'data_root'/agcm20/Brazil/future/sfc_Brazil_avr_mon.ctl'
'c'
'set lat -18 -2'
'set lon 312 326'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'
'set display color white'

str="jan feb mar apr may jun jul aug sep oct nov dec"

'set t 1 12'
'define p79=ave(((ppci+ppli)*86400),t+0,t=300,12)'
'define t79=ave((ta-273.15),t+0,t=300,12)'
'define e79=ave(evsps*86400,t+0,t=300,12)'
'define dsw79=ave(dswb,t+0,t=300,12)'
'define usw79=ave(uswb,t+0,t=300,12)'
'define dlw79=ave(dlwb,t+0,t=300,12)'
'define ulw79=ave(ulwb,t+0,t=300,12)'
'modify p79 seasonal'
'modify t79 seasonal'
'modify e79 seasonal'
'modify dsw79 seasonal'
'modify usw79 seasonal'
'modify dlw79 seasonal'
'modify ulw79 seasonal'

'set t 1'

'define pa79=(sum(p79,t=1,t=12))/12'
'define pacc79=(sum((p79*30),t=1,t=12))'
'define ta79=(sum(t79,t=1,t=12))/12'
'define pdjf79=(p79(t=12)+p79(t=1)+p79(t=2))/3'
'define pmam79=(p79(t=3)+p79(t=4)+p79(t=5))/3'
'define pjja79=(p79(t=6)+p79(t=7)+p79(t=8))/3'
'define pson79=(p79(t=9)+p79(t=10)+p79(t=11))/3'
'define tdjf79=(t79(t=12)+t79(t=1)+t79(t=2))/3'
'define tmam79=(t79(t=3)+t79(t=4)+t79(t=5))/3'
'define tjja79=(t79(t=6)+t79(t=7)+t79(t=8))/3'
'define tson79=(t79(t=9)+t79(t=10)+t79(t=11))/3'
'define ea79=(sum(e79,t=1,t=12))/12'
'define edjf79=(e79(t=12)+e79(t=1)+e79(t=2))/3'
'define emam79=(e79(t=3)+e79(t=4)+e79(t=5))/3'
'define ejja79=(e79(t=6)+e79(t=7)+e79(t=8))/3'
'define eson79=(e79(t=9)+e79(t=10)+e79(t=11))/3'

'define dswa79=(sum(dsw79,t=1,t=12))/12'
'define uswa79=(sum(usw79,t=1,t=12))/12'
'define dlwa79=(sum(dlw79,t=1,t=12))/12'
'define ulwa79=(sum(ulw79,t=1,t=12))/12'
'define dswdjf79=(dsw79(t=12)+dsw79(t=1)+dsw79(t=2))/3'
'define dswmam79=(dsw79(t=3)+dsw79(t=4)+dsw79(t=5))/3'
'define dswjja79=(dsw79(t=6)+dsw79(t=7)+dsw79(t=8))/3'
'define dswson79=(dsw79(t=9)+dsw79(t=10)+dsw79(t=11))/3'

'define uswdjf79=(usw79(t=12)+usw79(t=1)+usw79(t=2))/3'
'define uswmam79=(usw79(t=3)+usw79(t=4)+usw79(t=5))/3'
'define uswjja79=(usw79(t=6)+usw79(t=7)+usw79(t=8))/3'
'define uswson79=(usw79(t=9)+usw79(t=10)+usw79(t=11))/3'

'define dlwdjf79=(dlw79(t=12)+dlw79(t=1)+dlw79(t=2))/3'
'define dlwmam79=(dlw79(t=3)+dlw79(t=4)+dlw79(t=5))/3'
'define dlwjja79=(dlw79(t=6)+dlw79(t=7)+dlw79(t=8))/3'
'define dlwson79=(dlw79(t=9)+dlw79(t=10)+dlw79(t=11))/3'

'define ulwdjf79=(ulw79(t=12)+ulw79(t=1)+ulw79(t=2))/3'
'define ulwmam79=(ulw79(t=3)+ulw79(t=4)+ulw79(t=5))/3'
'define ulwjja79=(ulw79(t=6)+ulw79(t=7)+ulw79(t=8))/3'
'define ulwson79=(ulw79(t=9)+ulw79(t=10)+ulw79(t=11))/3'

'define neta79 = (dswa79-uswa79)+(dlwa79-ulwa79)'
'define netdjf79 = (dswdjf79-uswdjf79)+(dlwdjf79-ulwdjf79)'
'define netmam79 = (dswmam79-uswmam79)+(dlwmam79-ulwmam79)'
'define netjja79 = (dswjja79-uswjja79)+(dlwjja79-ulwjja79)'
'define netson79 = (dswson79-uswson79)+(dlwson79-ulwson79)'

'define budya79 = neta79/(2260000*(pa79/86400))'
'define budydjf79 = netdjf79/(2260000*(pdjf79/86400))'
'define budymam79 = netmam79/(2260000*(pmam79/86400))'
'define budyjja79 = netjja79/(2260000*(pjja79/86400))'
'define budyson79 = netson79/(2260000*(pson79/86400))'

***calculo da pet thorn e penman
m=1
while (m<=12)
  'define t5'subwrd(str,m)'79 = t79(t='m')/5'
  'define ratio'subwrd(str,m)'79 = pow((t5'subwrd(str,m)'79),1.5)'
  m = m+1
endwhile

'define ratio79 = (ratiojan79+ratiofeb79+ratiomar79+ratioapr79+ratiomay79+ratiojun79+ratiojul79+ratioaug79+ratiosep79+ratiooct79+rationov79+ratiodec79)'
'define i79 = ratio79'
'define a79 = ((0.49)+(0.0179*i79)-(0.0000771*(i79*i79))+(0.000000675*(i79*i79)))'

m=1
while (m <= 12)
  'define t'subwrd(str,m)'79 = t79(t='m')'
  'define p'subwrd(str,m)'79 = p79(t='m')'
  'define e'subwrd(str,m)'79 = e79(t='m')'
  'define petth'subwrd(str,m)'79 = 1.6*pow(((10*t'subwrd(str,m)'79)/i79),a79)'
  m=m+1
endwhile

'define petth79 = (petthjan79+petthfeb79+petthmar79+petthapr79+petthmay79+petthjun79+petthjul79+petthaug79+petthsep79+petthoct79+petthnov79+petthdec79)/12'

