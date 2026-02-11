* ============================================================================
* Script: clim_mri.gs
* Purpose: Compute climate diagnostics for MRI scenarios (present, near future, future).
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
* Path configuration (update for local environment before running)
base_data_dir=data_root%'/agcm20/Brazil'
present_ctl=base_data_dir%'/present/sfc_Brazil_avr_mon.ctl'
near_future_ctl=base_data_dir%'/near_future/sfc_Brazil_avr_mon.ctl'
future_ctl=base_data_dir%'/future/sfc_Brazil_avr_mon.ctl'
mask_file=base_data_dir%'/maskTL959.nc'

'open 'present_ctl
'open 'near_future_ctl
'open 'future_ctl
'sdfopen 'mask_file
'c'
'set lat -18 -2'
'set lon -48 -34'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'
'set display color white'
'define mask = lterp(ratiol.4(t=1,z=1),ta)'
str="jan feb mar apr may jun jul aug sep oct nov dec"

'set t 1 12'
'define lh79=ave(fllh,t+0,t=300,12)'
'define sh79=ave(flsh,t+0,t=300,12)'
'define rh79=ave(rha,t+0,t=300,12)'
'define ua79=ave(ua,t+0,t=300,12)'
'define va79=ave(va,t+0,t=300,12)'
'define slp79=ave((slp/1000),t+0,t=300,12)'
'define p79=ave((ppci+ppli)*86400,t+0,t=300,12)'
'define t79=ave((ta-273.15),t+0,t=300,12)'
'define e79=ave(evsps*86400,t+0,t=300,12)'
'define dsw79=ave(dswb,t+0,t=300,12)'
'define usw79=ave(uswb,t+0,t=300,12)'
'define dlw79=ave(dlwb,t+0,t=300,12)'
'define ulw79=ave(ulwb,t+0,t=300,12)'

'modify lh79 seasonal'
'modify sh79 seasonal'
'modify rh79 seasonal'
'modify ua79 seasonal'
'modify va79 seasonal'
'modify slp79 seasonal'
'modify p79 seasonal'
'modify t79 seasonal'
'modify e79 seasonal'
'modify dsw79 seasonal'
'modify usw79 seasonal'
'modify dlw79 seasonal'
'modify ulw79 seasonal'

'set t 1'
'define lha79 = (sum(lh79,t=1,t=12))/12'
'define lhdjf79 = (lh79(t=12)+lh79(t=1)+lh79(t=2))/3'
'define lhmam79 = (lh79(t=3)+lh79(t=4)+lh79(t=5))/3'
'define lhjja79 = (lh79(t=6)+lh79(t=7)+lh79(t=8))/3'
'define lhson79 = (lh79(t=9)+lh79(t=10)+lh79(t=11))/3'

'define sha79 = (sum(sh79,t=1,t=12))/12'
'define shdjf79 = (sh79(t=12)+sh79(t=1)+sh79(t=2))/3'
'define shmam79 = (sh79(t=3)+sh79(t=4)+sh79(t=5))/3'
'define shjja79 = (sh79(t=6)+sh79(t=7)+sh79(t=8))/3'
'define shson79 = (sh79(t=9)+sh79(t=10)+sh79(t=11))/3'

'define rha79 = (sum(rh79,t=1,t=12))/12'
'define rhdjf79 = (rh79(t=12)+rh79(t=1)+rh79(t=2))/3'
'define rhmam79 = (rh79(t=3)+rh79(t=4)+rh79(t=5))/3'
'define rhjja79 = (rh79(t=6)+rh79(t=7)+rh79(t=8))/3'
'define rhson79 = (rh79(t=9)+rh79(t=10)+rh79(t=11))/3'

'define uaa79 = (sum(ua79,t=1,t=12))/12'
'define vaa79 = (sum(va79,t=1,t=12))/12'
'define uadjf79 = (ua79(t=12)+ua79(t=1)+ua79(t=2))/3'
'define uamam79 = (ua79(t=3)+ua79(t=4)+ua79(t=5))/3'
'define uajja79 = (ua79(t=6)+ua79(t=7)+ua79(t=8))/3'
'define uason79 = (ua79(t=9)+ua79(t=10)+ua79(t=11))/3'
'define vadjf79 = (va79(t=12)+va79(t=1)+va79(t=2))/3'
'define vamam79 = (va79(t=3)+va79(t=4)+va79(t=5))/3'
'define vajja79 = (va79(t=6)+va79(t=7)+va79(t=8))/3'
'define vason79 = (va79(t=9)+va79(t=10)+va79(t=11))/3'

'define slpa79=(sum(slp79,t=1,t=12))/12'
'define slpdjf79=(slp79(t=12)+slp79(t=1)+slp79(t=2))/3'
'define slpmam79=(slp79(t=3)+slp79(t=4)+slp79(t=5))/3'
'define slpjja79=(slp79(t=6)+slp79(t=7)+slp79(t=8))/3'
'define slpson79=(slp79(t=9)+slp79(t=10)+slp79(t=11))/3'
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
'define a79 = ((0.49)+(0.0179*i79)-(0.0000771*i79*i79)+(0.000000675*i79*i79))'

m=1
while (m <= 12)
  'define t'subwrd(str,m)'79 = t79(t='m')'
  'define p'subwrd(str,m)'79 = p79(t='m')'
  'define e'subwrd(str,m)'79 = e79(t='m')'
  'define petth'subwrd(str,m)'79 = 1.6*pow(((10*t'subwrd(str,m)'79)/i79),a79)'
  m=m+1
endwhile

'define petth79 = (petthjan79+petthfeb79+petthmar79+petthapr79+petthmay79+petthjun79+petthjul79+petthaug79+petthsep79+petthoct79+petthnov79+petthdec79)/12'

****FAO PENMAN-MONTEITH ETo

*slope of saturation vapour pressure curve
'define deltaa79 = (4098*(0.6108*exp((17.27*ta79)/(ta79+273.3))))/pow((ta79+237.3),2)'
'define deltadjf79 = (4098*(0.6108*exp((17.27*tdjf79)/(tdjf79+273.3))))/pow((tdjf79+237.3),2)'
'define deltamam79 = (4098*(0.6108*exp((17.27*tmam79)/(tmam79+273.3))))/pow((tmam79+237.3),2)'
'define deltajja79 = (4098*(0.6108*exp((17.27*tjja79)/(tjja79+273.3))))/pow((tjja79+237.3),2)'
'define deltason79 = (4098*(0.6108*exp((17.27*tson79)/(tson79+273.3))))/pow((tson79+237.3),2)'

*psychrometric constant
'define gamaa79 = 0.000665*slpa79'
'define gamadjf79 = 0.000665*slpdjf79'
'define gamamam79 = 0.000665*slpmam79'
'define gamajja79 = 0.000665*slpjja79'
'define gamason79 = 0.000665*slpson79'

*wind 2m
'define wind2a79 = ((mag(uaa79,vaa79))*4.87)/log(672.58)'
'define wind2djf79 = ((mag(uadjf79,vadjf79))*4.87)/log(672.58)'
'define wind2mam79 = ((mag(uamam79,vamam79))*4.87)/log(672.58)'
'define wind2jja79 = ((mag(uajja79,vajja79))*4.87)/log(672.58)'
'define wind2son79 = ((mag(uason79,vason79))*4.87)/log(672.58)'

*mean saturation vapour pressure (es)
'define esa79 = 0.6108*exp((17.27*ta79)/(ta79+273.3))'
'define esdjf79 = 0.6108*exp((17.27*tdjf79)/(tdjf79+273.3))'
'define esmam79 = 0.6108*exp((17.27*tmam79)/(tmam79+273.3))'
'define esjja79 = 0.6108*exp((17.27*tjja79)/(tjja79+273.3))'
'define esson79 = 0.6108*exp((17.27*tson79)/(tson79+273.3))'

*actual vapour pressure (ea)
'define eaa79 = rha79*esa79/100'
'define eadjf79 = rhdjf79*esdjf79/100'
'define eamam79 = rhmam79*esmam79/100'
'define eajja79 = rhjja79*esjja79/100'
'define eason79 = rhson79*esson79/100'

*Reference Evapotranspiration - FAO Penman-Monteith method
'define petpma79 = ((0.408*deltaa79*(neta79*0.0864))+(gamaa79*(900/(ta79+273)))*(wind2a79*(esa79-eaa79)))/(deltaa79+(gamaa79*(1+(0.34*wind2a79))))'

'define petpmdjf79 = ((0.408*deltadjf79*(netdjf79*0.0864))+(gamadjf79*(900/(tdjf79+273)))*(wind2djf79*(esdjf79-eadjf79)))/(deltadjf79+(gamadjf79*(1+(0.34*wind2djf79))))'

'define petpmmam79 = ((0.408*deltamam79*(netmam79*0.0864))+(gamamam79*(900/(tmam79+273)))*(wind2mam79*(esmam79-eamam79)))/(deltamam79+(gamamam79*(1+(0.34*wind2mam79))))'

'define petpmjja79 = ((0.408*deltajja79*(netjja79*0.0864))+(gamajja79*(900/(tjja79+273)))*(wind2jja79*(esjja79-eajja79)))/(deltajja79+(gamajja79*(1+(0.34*wind2jja79))))'

'define petpmson79 = ((0.408*deltason79*(netson79*0.0864))+(gamason79*(900/(tson79+273)))*(wind2son79*(esson79-eason79)))/(deltason79+(gamason79*(1+(0.34*wind2son79))))'


'set dfile 2'
'set t 1 12'
'define lh15=ave(fllh,t+0,t=300,12)'
'define sh15=ave(flsh,t+0,t=300,12)'
'define rh15=ave(rha,t+0,t=300,12)'
'define ua15=ave(ua,t+0,t=300,12)'
'define va15=ave(va,t+0,t=300,12)'
'define slp15=ave((slp/1000),t+0,t=300,12)'
'define p15=ave((ppci+ppli)*86400,t+0,t=300,12)'
'define t15=ave((ta-273.15),t+0,t=300,12)'
'define e15=ave(evsps*86400,t+0,t=300,12)'
'define dsw15=ave(dswb,t+0,t=300,12)'
'define usw15=ave(uswb,t+0,t=300,12)'
'define dlw15=ave(dlwb,t+0,t=300,12)'
'define ulw15=ave(ulwb,t+0,t=300,12)'

'modify lh15 seasonal'
'modify sh15 seasonal'
'modify rh15 seasonal'
'modify ua15 seasonal'
'modify va15 seasonal'
'modify slp15 seasonal'
'modify p15 seasonal'
'modify t15 seasonal'
'modify e15 seasonal'
'modify dsw15 seasonal'
'modify usw15 seasonal'
'modify dlw15 seasonal'
'modify ulw15 seasonal'

'set t 1'
'define lha15 = (sum(lh15,t=1,t=12))/12'
'define lhdjf15 = (lh15(t=12)+lh15(t=1)+lh15(t=2))/3'
'define lhmam15 = (lh15(t=3)+lh15(t=4)+lh15(t=5))/3'
'define lhjja15 = (lh15(t=6)+lh15(t=7)+lh15(t=8))/3'
'define lhson15 = (lh15(t=9)+lh15(t=10)+lh15(t=11))/3'

'define sha15 = (sum(sh15,t=1,t=12))/12'
'define shdjf15 = (sh15(t=12)+sh15(t=1)+sh15(t=2))/3'
'define shmam15 = (sh15(t=3)+sh15(t=4)+sh15(t=5))/3'
'define shjja15 = (sh15(t=6)+sh15(t=7)+sh15(t=8))/3'
'define shson15 = (sh15(t=9)+sh15(t=10)+sh15(t=11))/3'

'define rha15 = (sum(rh15,t=1,t=12))/12'
'define rhdjf15 = (rh15(t=12)+rh15(t=1)+rh15(t=2))/3'
'define rhmam15 = (rh15(t=3)+rh15(t=4)+rh15(t=5))/3'
'define rhjja15 = (rh15(t=6)+rh15(t=7)+rh15(t=8))/3'
'define rhson15 = (rh15(t=9)+rh15(t=10)+rh15(t=11))/3'

'define uaa15 = (sum(ua15,t=1,t=12))/12'
'define vaa15 = (sum(va15,t=1,t=12))/12'
'define uadjf15 = (ua15(t=12)+ua15(t=1)+ua15(t=2))/3'
'define uamam15 = (ua15(t=3)+ua15(t=4)+ua15(t=5))/3'
'define uajja15 = (ua15(t=6)+ua15(t=7)+ua15(t=8))/3'
'define uason15 = (ua15(t=9)+ua15(t=10)+ua15(t=11))/3'
'define vadjf15 = (va15(t=12)+va15(t=1)+va15(t=2))/3'
'define vamam15 = (va15(t=3)+va15(t=4)+va15(t=5))/3'
'define vajja15 = (va15(t=6)+va15(t=7)+va15(t=8))/3'
'define vason15 = (va15(t=9)+va15(t=10)+va15(t=11))/3'

'define slpa15=(sum(slp15,t=1,t=12))/12'
'define slpdjf15=(slp15(t=12)+slp15(t=1)+slp15(t=2))/3'
'define slpmam15=(slp15(t=3)+slp15(t=4)+slp15(t=5))/3'
'define slpjja15=(slp15(t=6)+slp15(t=7)+slp15(t=8))/3'
'define slpson15=(slp15(t=9)+slp15(t=10)+slp15(t=11))/3'
'define pa15=(sum(p15,t=1,t=12))/12'
'define pacc15=(sum((p15*30),t=1,t=12))'
'define ta15=(sum(t15,t=1,t=12))/12'
'define pdjf15=(p15(t=12)+p15(t=1)+p15(t=2))/3'
'define pmam15=(p15(t=3)+p15(t=4)+p15(t=5))/3'
'define pjja15=(p15(t=6)+p15(t=7)+p15(t=8))/3'
'define pson15=(p15(t=9)+p15(t=10)+p15(t=11))/3'
'define tdjf15=(t15(t=12)+t15(t=1)+t15(t=2))/3'
'define tmam15=(t15(t=3)+t15(t=4)+t15(t=5))/3'
'define tjja15=(t15(t=6)+t15(t=7)+t15(t=8))/3'
'define tson15=(t15(t=9)+t15(t=10)+t15(t=11))/3'
'define ea15=(sum(e15,t=1,t=12))/12'
'define edjf15=(e15(t=12)+e15(t=1)+e15(t=2))/3'
'define emam15=(e15(t=3)+e15(t=4)+e15(t=5))/3'
'define ejja15=(e15(t=6)+e15(t=7)+e15(t=8))/3'
'define eson15=(e15(t=9)+e15(t=10)+e15(t=11))/3'

'define dswa15=(sum(dsw15,t=1,t=12))/12'
'define uswa15=(sum(usw15,t=1,t=12))/12'
'define dlwa15=(sum(dlw15,t=1,t=12))/12'
'define ulwa15=(sum(ulw15,t=1,t=12))/12'
'define dswdjf15=(dsw15(t=12)+dsw15(t=1)+dsw15(t=2))/3'
'define dswmam15=(dsw15(t=3)+dsw15(t=4)+dsw15(t=5))/3'
'define dswjja15=(dsw15(t=6)+dsw15(t=7)+dsw15(t=8))/3'
'define dswson15=(dsw15(t=9)+dsw15(t=10)+dsw15(t=11))/3'

'define uswdjf15=(usw15(t=12)+usw15(t=1)+usw15(t=2))/3'
'define uswmam15=(usw15(t=3)+usw15(t=4)+usw15(t=5))/3'
'define uswjja15=(usw15(t=6)+usw15(t=7)+usw15(t=8))/3'
'define uswson15=(usw15(t=9)+usw15(t=10)+usw15(t=11))/3'

'define dlwdjf15=(dlw15(t=12)+dlw15(t=1)+dlw15(t=2))/3'
'define dlwmam15=(dlw15(t=3)+dlw15(t=4)+dlw15(t=5))/3'
'define dlwjja15=(dlw15(t=6)+dlw15(t=7)+dlw15(t=8))/3'
'define dlwson15=(dlw15(t=9)+dlw15(t=10)+dlw15(t=11))/3'

'define ulwdjf15=(ulw15(t=12)+ulw15(t=1)+ulw15(t=2))/3'
'define ulwmam15=(ulw15(t=3)+ulw15(t=4)+ulw15(t=5))/3'
'define ulwjja15=(ulw15(t=6)+ulw15(t=7)+ulw15(t=8))/3'
'define ulwson15=(ulw15(t=9)+ulw15(t=10)+ulw15(t=11))/3'

'define neta15 = (dswa15-uswa15)+(dlwa15-ulwa15)'
'define netdjf15 = (dswdjf15-uswdjf15)+(dlwdjf15-ulwdjf15)'
'define netmam15 = (dswmam15-uswmam15)+(dlwmam15-ulwmam15)'
'define netjja15 = (dswjja15-uswjja15)+(dlwjja15-ulwjja15)'
'define netson15 = (dswson15-uswson15)+(dlwson15-ulwson15)'

'define budya15 = neta15/(2260000*(pa15/86400))'
'define budydjf15 = netdjf15/(2260000*(pdjf15/86400))'
'define budymam15 = netmam15/(2260000*(pmam15/86400))'
'define budyjja15 = netjja15/(2260000*(pjja15/86400))'
'define budyson15 = netson15/(2260000*(pson15/86400))'


***calculo da pet thorn e penman
m=1
while (m<=12)
  'define t5'subwrd(str,m)'15 = t15(t='m')/5'
  'define ratio'subwrd(str,m)'15 = pow((t5'subwrd(str,m)'15),1.5)'
  m = m+1
endwhile

'define ratio15 = (ratiojan15+ratiofeb15+ratiomar15+ratioapr15+ratiomay15+ratiojun15+ratiojul15+ratioaug15+ratiosep15+ratiooct15+rationov15+ratiodec15)'
'define i15 = ratio15'
'define a15 = ((0.49)+(0.0179*i15)-(0.0000771*i15*i15)+(0.000000675*i15*i15))'

m=1
while (m <= 12)
  'define t'subwrd(str,m)'15 = t15(t='m')'
  'define p'subwrd(str,m)'15 = p15(t='m')'
  'define e'subwrd(str,m)'15 = e15(t='m')'
  'define petth'subwrd(str,m)'15 = 1.6*pow(((10*t'subwrd(str,m)'15)/i15),a15)'
  m=m+1
endwhile

'define petth15 = (petthjan15+petthfeb15+petthmar15+petthapr15+petthmay15+petthjun15+petthjul15+petthaug15+petthsep15+petthoct15+petthnov15+petthdec15)/12'

****FAO PENMAN-MONTEITH ETo

*slope of saturation vapour pressure curve
'define deltaa15 = (4098*(0.6108*exp((17.27*ta15)/(ta15+273.3))))/pow((ta15+237.3),2)'
'define deltadjf15 = (4098*(0.6108*exp((17.27*tdjf15)/(tdjf15+273.3))))/pow((tdjf15+237.3),2)'
'define deltamam15 = (4098*(0.6108*exp((17.27*tmam15)/(tmam15+273.3))))/pow((tmam15+237.3),2)'
'define deltajja15 = (4098*(0.6108*exp((17.27*tjja15)/(tjja15+273.3))))/pow((tjja15+237.3),2)'
'define deltason15 = (4098*(0.6108*exp((17.27*tson15)/(tson15+273.3))))/pow((tson15+237.3),2)'

*psychrometric constant
'define gamaa15 = 0.000665*slpa15'
'define gamadjf15 = 0.000665*slpdjf15'
'define gamamam15 = 0.000665*slpmam15'
'define gamajja15 = 0.000665*slpjja15'
'define gamason15 = 0.000665*slpson15'

*wind 2m
'define wind2a15 = ((mag(uaa15,vaa15))*4.87)/log(672.58)'
'define wind2djf15 = ((mag(uadjf15,vadjf15))*4.87)/log(672.58)'
'define wind2mam15 = ((mag(uamam15,vamam15))*4.87)/log(672.58)'
'define wind2jja15 = ((mag(uajja15,vajja15))*4.87)/log(672.58)'
'define wind2son15 = ((mag(uason15,vason15))*4.87)/log(672.58)'

*mean saturation vapour pressure (es)
'define esa15 = 0.6108*exp((17.27*ta15)/(ta15+273.3))'
'define esdjf15 = 0.6108*exp((17.27*tdjf15)/(tdjf15+273.3))'
'define esmam15 = 0.6108*exp((17.27*tmam15)/(tmam15+273.3))'
'define esjja15 = 0.6108*exp((17.27*tjja15)/(tjja15+273.3))'
'define esson15 = 0.6108*exp((17.27*tson15)/(tson15+273.3))'

*actual vapour pressure (ea)
'define eaa15 = rha15*esa15/100'
'define eadjf15 = rhdjf15*esdjf15/100'
'define eamam15 = rhmam15*esmam15/100'
'define eajja15 = rhjja15*esjja15/100'
'define eason15 = rhson15*esson15/100'

*Reference Evapotranspiration - FAO Penman-Monteith method
'define petpma15 = ((0.408*deltaa15*(neta15*0.0864))+(gamaa15*(900/(ta15+273)))*(wind2a15*(esa15-eaa15)))/(deltaa15+(gamaa15*(1+(0.34*wind2a15))))'

'define petpmdjf15 = ((0.408*deltadjf15*(netdjf15*0.0864))+(gamadjf15*(900/(tdjf15+273)))*(wind2djf15*(esdjf15-eadjf15)))/(deltadjf15+(gamadjf15*(1+(0.34*wind2djf15))))'

'define petpmmam15 = ((0.408*deltamam15*(netmam15*0.0864))+(gamamam15*(900/(tmam15+273)))*(wind2mam15*(esmam15-eamam15)))/(deltamam15+(gamamam15*(1+(0.34*wind2mam15))))'

'define petpmjja15 = ((0.408*deltajja15*(netjja15*0.0864))+(gamajja15*(900/(tjja15+273)))*(wind2jja15*(esjja15-eajja15)))/(deltajja15+(gamajja15*(1+(0.34*wind2jja15))))'

'define petpmson15 = ((0.408*deltason15*(netson15*0.0864))+(gamason15*(900/(tson15+273)))*(wind2son15*(esson15-eason15)))/(deltason15+(gamason15*(1+(0.34*wind2son15))))'


'set dfile 3'
'set t 1 12'
'define lh75=ave(fllh,t+0,t=300,12)'
'define sh75=ave(flsh,t+0,t=300,12)'
'define rh75=ave(rha,t+0,t=300,12)'
'define ua75=ave(ua,t+0,t=300,12)'
'define va75=ave(va,t+0,t=300,12)'
'define slp75=ave((slp/1000),t+0,t=300,12)'
'define p75=ave((ppci+ppli)*86400,t+0,t=300,12)'
'define t75=ave((ta-273.75),t+0,t=300,12)'
'define e75=ave(evsps*86400,t+0,t=300,12)'
'define dsw75=ave(dswb,t+0,t=300,12)'
'define usw75=ave(uswb,t+0,t=300,12)'
'define dlw75=ave(dlwb,t+0,t=300,12)'
'define ulw75=ave(ulwb,t+0,t=300,12)'

'modify lh75 seasonal'
'modify sh75 seasonal'
'modify rh75 seasonal'
'modify ua75 seasonal'
'modify va75 seasonal'
'modify slp75 seasonal'
'modify p75 seasonal'
'modify t75 seasonal'
'modify e75 seasonal'
'modify dsw75 seasonal'
'modify usw75 seasonal'
'modify dlw75 seasonal'
'modify ulw75 seasonal'

'set t 1'
'define lha75 = (sum(lh75,t=1,t=12))/12'
'define lhdjf75 = (lh75(t=12)+lh75(t=1)+lh75(t=2))/3'
'define lhmam75 = (lh75(t=3)+lh75(t=4)+lh75(t=5))/3'
'define lhjja75 = (lh75(t=6)+lh75(t=7)+lh75(t=8))/3'
'define lhson75 = (lh75(t=9)+lh75(t=10)+lh75(t=11))/3'

'define sha75 = (sum(sh75,t=1,t=12))/12'
'define shdjf75 = (sh75(t=12)+sh75(t=1)+sh75(t=2))/3'
'define shmam75 = (sh75(t=3)+sh75(t=4)+sh75(t=5))/3'
'define shjja75 = (sh75(t=6)+sh75(t=7)+sh75(t=8))/3'
'define shson75 = (sh75(t=9)+sh75(t=10)+sh75(t=11))/3'

'define rha75 = (sum(rh75,t=1,t=12))/12'
'define rhdjf75 = (rh75(t=12)+rh75(t=1)+rh75(t=2))/3'
'define rhmam75 = (rh75(t=3)+rh75(t=4)+rh75(t=5))/3'
'define rhjja75 = (rh75(t=6)+rh75(t=7)+rh75(t=8))/3'
'define rhson75 = (rh75(t=9)+rh75(t=10)+rh75(t=11))/3'

'define uaa75 = (sum(ua75,t=1,t=12))/12'
'define vaa75 = (sum(va75,t=1,t=12))/12'
'define uadjf75 = (ua75(t=12)+ua75(t=1)+ua75(t=2))/3'
'define uamam75 = (ua75(t=3)+ua75(t=4)+ua75(t=5))/3'
'define uajja75 = (ua75(t=6)+ua75(t=7)+ua75(t=8))/3'
'define uason75 = (ua75(t=9)+ua75(t=10)+ua75(t=11))/3'
'define vadjf75 = (va75(t=12)+va75(t=1)+va75(t=2))/3'
'define vamam75 = (va75(t=3)+va75(t=4)+va75(t=5))/3'
'define vajja75 = (va75(t=6)+va75(t=7)+va75(t=8))/3'
'define vason75 = (va75(t=9)+va75(t=10)+va75(t=11))/3'

'define slpa75=(sum(slp75,t=1,t=12))/12'
'define slpdjf75=(slp75(t=12)+slp75(t=1)+slp75(t=2))/3'
'define slpmam75=(slp75(t=3)+slp75(t=4)+slp75(t=5))/3'
'define slpjja75=(slp75(t=6)+slp75(t=7)+slp75(t=8))/3'
'define slpson75=(slp75(t=9)+slp75(t=10)+slp75(t=11))/3'
'define pa75=(sum(p75,t=1,t=12))/12'
'define pacc75=(sum((p75*30),t=1,t=12))'
'define ta75=(sum(t75,t=1,t=12))/12'
'define pdjf75=(p75(t=12)+p75(t=1)+p75(t=2))/3'
'define pmam75=(p75(t=3)+p75(t=4)+p75(t=5))/3'
'define pjja75=(p75(t=6)+p75(t=7)+p75(t=8))/3'
'define pson75=(p75(t=9)+p75(t=10)+p75(t=11))/3'
'define tdjf75=(t75(t=12)+t75(t=1)+t75(t=2))/3'
'define tmam75=(t75(t=3)+t75(t=4)+t75(t=5))/3'
'define tjja75=(t75(t=6)+t75(t=7)+t75(t=8))/3'
'define tson75=(t75(t=9)+t75(t=10)+t75(t=11))/3'
'define ea75=(sum(e75,t=1,t=12))/12'
'define edjf75=(e75(t=12)+e75(t=1)+e75(t=2))/3'
'define emam75=(e75(t=3)+e75(t=4)+e75(t=5))/3'
'define ejja75=(e75(t=6)+e75(t=7)+e75(t=8))/3'
'define eson75=(e75(t=9)+e75(t=10)+e75(t=11))/3'

'define dswa75=(sum(dsw75,t=1,t=12))/12'
'define uswa75=(sum(usw75,t=1,t=12))/12'
'define dlwa75=(sum(dlw75,t=1,t=12))/12'
'define ulwa75=(sum(ulw75,t=1,t=12))/12'
'define dswdjf75=(dsw75(t=12)+dsw75(t=1)+dsw75(t=2))/3'
'define dswmam75=(dsw75(t=3)+dsw75(t=4)+dsw75(t=5))/3'
'define dswjja75=(dsw75(t=6)+dsw75(t=7)+dsw75(t=8))/3'
'define dswson75=(dsw75(t=9)+dsw75(t=10)+dsw75(t=11))/3'

'define uswdjf75=(usw75(t=12)+usw75(t=1)+usw75(t=2))/3'
'define uswmam75=(usw75(t=3)+usw75(t=4)+usw75(t=5))/3'
'define uswjja75=(usw75(t=6)+usw75(t=7)+usw75(t=8))/3'
'define uswson75=(usw75(t=9)+usw75(t=10)+usw75(t=11))/3'

'define dlwdjf75=(dlw75(t=12)+dlw75(t=1)+dlw75(t=2))/3'
'define dlwmam75=(dlw75(t=3)+dlw75(t=4)+dlw75(t=5))/3'
'define dlwjja75=(dlw75(t=6)+dlw75(t=7)+dlw75(t=8))/3'
'define dlwson75=(dlw75(t=9)+dlw75(t=10)+dlw75(t=11))/3'

'define ulwdjf75=(ulw75(t=12)+ulw75(t=1)+ulw75(t=2))/3'
'define ulwmam75=(ulw75(t=3)+ulw75(t=4)+ulw75(t=5))/3'
'define ulwjja75=(ulw75(t=6)+ulw75(t=7)+ulw75(t=8))/3'
'define ulwson75=(ulw75(t=9)+ulw75(t=10)+ulw75(t=11))/3'

'define neta75 = (dswa75-uswa75)+(dlwa75-ulwa75)'
'define netdjf75 = (dswdjf75-uswdjf75)+(dlwdjf75-ulwdjf75)'
'define netmam75 = (dswmam75-uswmam75)+(dlwmam75-ulwmam75)'
'define netjja75 = (dswjja75-uswjja75)+(dlwjja75-ulwjja75)'
'define netson75 = (dswson75-uswson75)+(dlwson75-ulwson75)'

'define budya75 = neta75/(2260000*(pa75/86400))'
'define budydjf75 = netdjf75/(2260000*(pdjf75/86400))'
'define budymam75 = netmam75/(2260000*(pmam75/86400))'
'define budyjja75 = netjja75/(2260000*(pjja75/86400))'
'define budyson75 = netson75/(2260000*(pson75/86400))'


***calculo da pet thorn e penman
m=1
while (m<=12)
  'define t5'subwrd(str,m)'75 = t75(t='m')/5'
  'define ratio'subwrd(str,m)'75 = pow((t5'subwrd(str,m)'75),1.5)'
  m = m+1
endwhile

'define ratio75 = (ratiojan75+ratiofeb75+ratiomar75+ratioapr75+ratiomay75+ratiojun75+ratiojul75+ratioaug75+ratiosep75+ratiooct75+rationov75+ratiodec75)'
'define i75 = ratio75'
'define a75 = ((0.49)+(0.0179*i75)-(0.0000771*i75*i75)+(0.000000675*i75*i75))'

m=1
while (m <= 12)
  'define t'subwrd(str,m)'75 = t75(t='m')'
  'define p'subwrd(str,m)'75 = p75(t='m')'
  'define e'subwrd(str,m)'75 = e75(t='m')'
  'define petth'subwrd(str,m)'75 = 1.6*pow(((10*t'subwrd(str,m)'75)/i75),a75)'
  m=m+1
endwhile

'define petth75 = (petthjan75+petthfeb75+petthmar75+petthapr75+petthmay75+petthjun75+petthjul75+petthaug75+petthsep75+petthoct75+petthnov75+petthdec75)/12'

****FAO PENMAN-MONTEITH ETo

*slope of saturation vapour pressure curve
'define deltaa75 = (4098*(0.6108*exp((17.27*ta75)/(ta75+273.3))))/pow((ta75+237.3),2)'
'define deltadjf75 = (4098*(0.6108*exp((17.27*tdjf75)/(tdjf75+273.3))))/pow((tdjf75+237.3),2)'
'define deltamam75 = (4098*(0.6108*exp((17.27*tmam75)/(tmam75+273.3))))/pow((tmam75+237.3),2)'
'define deltajja75 = (4098*(0.6108*exp((17.27*tjja75)/(tjja75+273.3))))/pow((tjja75+237.3),2)'
'define deltason75 = (4098*(0.6108*exp((17.27*tson75)/(tson75+273.3))))/pow((tson75+237.3),2)'

*psychrometric constant
'define gamaa75 = 0.000665*slpa75'
'define gamadjf75 = 0.000665*slpdjf75'
'define gamamam75 = 0.000665*slpmam75'
'define gamajja75 = 0.000665*slpjja75'
'define gamason75 = 0.000665*slpson75'

*wind 2m
'define wind2a75 = ((mag(uaa75,vaa75))*4.87)/log(672.58)'
'define wind2djf75 = ((mag(uadjf75,vadjf75))*4.87)/log(672.58)'
'define wind2mam75 = ((mag(uamam75,vamam75))*4.87)/log(672.58)'
'define wind2jja75 = ((mag(uajja75,vajja75))*4.87)/log(672.58)'
'define wind2son75 = ((mag(uason75,vason75))*4.87)/log(672.58)'

*mean saturation vapour pressure (es)
'define esa75 = 0.6108*exp((17.27*ta75)/(ta75+273.3))'
'define esdjf75 = 0.6108*exp((17.27*tdjf75)/(tdjf75+273.3))'
'define esmam75 = 0.6108*exp((17.27*tmam75)/(tmam75+273.3))'
'define esjja75 = 0.6108*exp((17.27*tjja75)/(tjja75+273.3))'
'define esson75 = 0.6108*exp((17.27*tson75)/(tson75+273.3))'

*actual vapour pressure (ea)
'define eaa75 = rha75*esa75/100'
'define eadjf75 = rhdjf75*esdjf75/100'
'define eamam75 = rhmam75*esmam75/100'
'define eajja75 = rhjja75*esjja75/100'
'define eason75 = rhson75*esson75/100'

*Reference Evapotranspiration - FAO Penman-Monteith method
'define petpma75 = ((0.408*deltaa75*(neta75*0.0864))+(gamaa75*(900/(ta75+273)))*(wind2a75*(esa75-eaa75)))/(deltaa75+(gamaa75*(1+(0.34*wind2a75))))'

'define petpmdjf75 = ((0.408*deltadjf75*(netdjf75*0.0864))+(gamadjf75*(900/(tdjf75+273)))*(wind2djf75*(esdjf75-eadjf75)))/(deltadjf75+(gamadjf75*(1+(0.34*wind2djf75))))'

'define petpmmam75 = ((0.408*deltamam75*(netmam75*0.0864))+(gamamam75*(900/(tmam75+273)))*(wind2mam75*(esmam75-eamam75)))/(deltamam75+(gamamam75*(1+(0.34*wind2mam75))))'

'define petpmjja75 = ((0.408*deltajja75*(netjja75*0.0864))+(gamajja75*(900/(tjja75+273)))*(wind2jja75*(esjja75-eajja75)))/(deltajja75+(gamajja75*(1+(0.34*wind2jja75))))'

'define petpmson75 = ((0.408*deltason75*(netson75*0.0864))+(gamason75*(900/(tson75+273)))*(wind2son75*(esson75-eason75)))/(deltason75+(gamason75*(1+(0.34*wind2son75))))'

'set dfile 1'
'set t 1'

'define iau79 = (pa79/petpma79)/mask'
'define iau15 = (pa15/petpma15)/mask'
'define iau75 = (pa75/petpma75)/mask'
'define budy79 = budya79/mask'
'define budy15 = budya15/mask'
'define budy75 = budya75/mask'
'define paccu79 = pacc79/mask'
'define paccu15 = pacc15/mask'
'define paccu75 = pacc75/mask'
