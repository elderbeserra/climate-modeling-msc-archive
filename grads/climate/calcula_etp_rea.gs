* ============================================================================
* Script: calcula_etp_rea.gs
* Purpose: Compute evapotranspiration and related diagnostics from reanalysis/model fields.
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
'sdfopen 'data_root'/agcm20/Brazil/maskTL959.nc'
'sdfopen 'data_root'/obs_proclima/reanalysis/netrea.nc'
'sdfopen 'data_root'/obs_proclima/reanalysis/rh.nc'
'sdfopen 'data_root'/obs_proclima/reanalysis/slp.nc'
'sdfopen 'data_root'/obs_proclima/reanalysis/ta.nc'
'sdfopen 'data_root'/obs_proclima/reanalysis/wnd.nc'
'c'
'set lat -18 -2'
'set lon 312 326'
'set mpdset mresbr'
'set map 1 1 5'
'set gxout shaded'
'set display color white'
'define mask = lterp(ratiol.4(t=1,z=1),ta)'

'set t 1 last'
'define rhrea = lterp(rhum.6(z=1),nlwrs.5(t=1,z=1))'
'define slprea = lterp(slp.7(z=1),nlwrs.5(t=1,z=1))'
'define tarea = lterp(air.8(z=1),nlwrs.5(t=1,z=1))'
'define wndrea = lterp(wspd.9(z=1),nlwrs.5(t=1,z=1))'
str="jan feb mar apr may jun jul aug sep oct nov dec"

'set t 1 12'
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


****************REANALYSIS

'set t 1 12'
'define rhrea79=ave(rhrea,t+0,t=300,12)'
'define wndrea79=ave(wndrea,t+0,t=300,12)'
'define slprea79=ave((slprea/10),t+0,t=300,12)'
'define trea79=ave((tarea-273.15),t+0,t=300,12)'
'define swrea79=ave((nswrs.5(z=1)*-1),t+0,t=300,12)'
'define lwrea79=ave((nlwrs.5(z=1)*-1),t+0,t=300,12)'

'modify rhrea79 seasonal'
'modify wndrea79 seasonal'
'modify slprea79 seasonal'
'modify trea79 seasonal'
'modify swrea79 seasonal'
'modify lwrea79 seasonal'


'set t 1'

'define rhreaa79 = (sum(rhrea79,t=1,t=12))/12'
'define rhreadjf79 = (rhrea79(t=12)+rhrea79(t=1)+rhrea79(t=2))/3'
'define rhreamam79 = (rhrea79(t=3)+rhrea79(t=4)+rhrea79(t=5))/3'
'define rhreajja79 = (rhrea79(t=6)+rhrea79(t=7)+rhrea79(t=8))/3'
'define rhreason79 = (rhrea79(t=9)+rhrea79(t=10)+rhrea79(t=11))/3'

'define wndreaa79 = (sum(wndrea79,t=1,t=12))/12'
'define wndreadjf79 = (wndrea79(t=12)+wndrea79(t=1)+wndrea79(t=2))/3'
'define wndreamam79 = (wndrea79(t=3)+wndrea79(t=4)+wndrea79(t=5))/3'
'define wndreajja79 = (wndrea79(t=6)+wndrea79(t=7)+wndrea79(t=8))/3'
'define wndreason79 = (wndrea79(t=9)+wndrea79(t=10)+wndrea79(t=11))/3'

'define slpreaa79=(sum(slprea79,t=1,t=12))/12'
'define slpreadjf79=(slprea79(t=12)+slprea79(t=1)+slprea79(t=2))/3'
'define slpreamam79=(slprea79(t=3)+slprea79(t=4)+slprea79(t=5))/3'
'define slpreajja79=(slprea79(t=6)+slprea79(t=7)+slprea79(t=8))/3'
'define slpreason79=(slprea79(t=9)+slprea79(t=10)+slprea79(t=11))/3'
'define treaa79=(sum(trea79,t=1,t=12))/12'
'define treadjf79=(trea79(t=12)+trea79(t=1)+trea79(t=2))/3'
'define treamam79=(trea79(t=3)+trea79(t=4)+trea79(t=5))/3'
'define treajja79=(trea79(t=6)+trea79(t=7)+trea79(t=8))/3'
'define treason79=(trea79(t=9)+trea79(t=10)+trea79(t=11))/3'

'define swreaa79=(sum(swrea79,t=1,t=12))/12'
'define lwreaa79=(sum(lwrea79,t=1,t=12))/12'

'define swreadjf79=(swrea79(t=12)+swrea79(t=1)+swrea79(t=2))/3'
'define swreamam79=(swrea79(t=3)+swrea79(t=4)+swrea79(t=5))/3'
'define swreajja79=(swrea79(t=6)+swrea79(t=7)+swrea79(t=8))/3'
'define swreason79=(swrea79(t=9)+swrea79(t=10)+swrea79(t=11))/3'

'define lwreadjf79=(lwrea79(t=12)+lwrea79(t=1)+lwrea79(t=2))/3'
'define lwreamam79=(lwrea79(t=3)+lwrea79(t=4)+lwrea79(t=5))/3'
'define lwreajja79=(lwrea79(t=6)+lwrea79(t=7)+lwrea79(t=8))/3'
'define lwreason79=(lwrea79(t=9)+lwrea79(t=10)+lwrea79(t=11))/3'

'define netreaa79 = (swreaa79+lwreaa79)'
'define netreadjf79 = (swreadjf79+lwreadjf79)'
'define netreamam79 = (swreamam79+lwreamam79)'
'define netreajja79 = (swreajja79+lwreajja79)'
'define netreason79 = (swreason79+lwreason79)'


***calculo da pet thorn e penman
m=1
while (m<=12)
  'define t5rea'subwrd(str,m)'79 = trea79(t='m')/5'
  'define ratiorea'subwrd(str,m)'79 = pow((t5rea'subwrd(str,m)'79),1.5)'
  m = m+1
endwhile

'define ratiorea79 = (ratioreajan79+ratioreafeb79+ratioreamar79+ratioreaapr79+ratioreamay79+ratioreajun79+ratioreajul79+ratioreaaug79+ratioreasep79+ratioreaoct79+ratioreanov79+ratioreadec79)'
'define irea79 = ratiorea79'
'define area79 = ((0.49)+(0.0179*irea79)-(0.0000771*irea79*irea79)+(0.000000675*irea79*irea79))'

m=1
while (m <= 12)
  'define trea'subwrd(str,m)'79 = trea79(t='m')'
  'define petthrea'subwrd(str,m)'79 = 1.6*pow(((10*trea'subwrd(str,m)'79)/irea79),area79)'
  m=m+1
endwhile

'define petthrea79 = (petthreajan79+petthreafeb79+petthreamar79+petthreaapr79+petthreamay79+petthreajun79+petthreajul79+petthreaaug79+petthreasep79+petthreaoct79+petthreanov79+petthreadec79)/12'

****FAO PENMAN-MONTEITH ETo

*slope of saturation vapour pressure curve
'define deltareaa79 = (4098*(0.6108*exp((17.27*treaa79)/(treaa79+273.3))))/pow((treaa79+237.3),2)'
'define deltareadjf79 = (4098*(0.6108*exp((17.27*treadjf79)/(treadjf79+273.3))))/pow((treadjf79+237.3),2)'
'define deltareamam79 = (4098*(0.6108*exp((17.27*treamam79)/(treamam79+273.3))))/pow((treamam79+237.3),2)'
'define deltareajja79 = (4098*(0.6108*exp((17.27*treajja79)/(treajja79+273.3))))/pow((treajja79+237.3),2)'
'define deltareason79 = (4098*(0.6108*exp((17.27*treason79)/(treason79+273.3))))/pow((treason79+237.3),2)'

*psychrometric constant
'define gamareaa79 = 0.000665*slpreaa79'
'define gamareadjf79 = 0.000665*slpreadjf79'
'define gamareamam79 = 0.000665*slpreamam79'
'define gamareajja79 = 0.000665*slpreajja79'
'define gamareason79 = 0.000665*slpreason79'

*wind 2m
'define wind2reaa79 = (wndreaa79*4.87)/log(672.58)'
'define wind2readjf79 = (wndreadjf79*4.87)/log(672.58)'
'define wind2reamam79 = (wndreamam79*4.87)/log(672.58)'
'define wind2reajja79 = (wndreajja79*4.87)/log(672.58)'
'define wind2reason79 = (wndreason79*4.87)/log(672.58)'

*mean saturation vapour pressure (es)
'define esreaa79 = 0.6108*exp((17.27*treaa79)/(treaa79+273.3))'
'define esreadjf79 = 0.6108*exp((17.27*treadjf79)/(treadjf79+273.3))'
'define esreamam79 = 0.6108*exp((17.27*treamam79)/(treamam79+273.3))'
'define esreajja79 = 0.6108*exp((17.27*treajja79)/(treajja79+273.3))'
'define esreason79 = 0.6108*exp((17.27*treason79)/(treason79+273.3))'

*actual vapour pressure (ea)
'define eareaa79 = rhreaa79*esreaa79/100'
'define eareadjf79 = rhreadjf79*esreadjf79/100'
'define eareamam79 = rhreamam79*esreamam79/100'
'define eareajja79 = rhreajja79*esreajja79/100'
'define eareason79 = rhreason79*esreason79/100'

*Reference Evapotranspiration - FAO Penman-Monteith method
'define petpmreaa79 = ((0.408*deltareaa79*(netreaa79*0.0864))+(gamareaa79*(900/(treaa79+273)))*(wind2reaa79*(esreaa79-eareaa79)))/(deltareaa79+(gamareaa79*(1+(0.34*wind2reaa79))))'

'define petpmreadjf79 = ((0.408*deltareadjf79*(netreadjf79*0.0864))+(gamareadjf79*(900/(treadjf79+273)))*(wind2readjf79*(esreadjf79-eareadjf79)))/(deltareadjf79+(gamareadjf79*(1+(0.34*wind2readjf79))))'

'define petpmreamam79 = ((0.408*deltareamam79*(netreamam79*0.0864))+(gamareamam79*(900/(treamam79+273)))*(wind2reamam79*(esreamam79-eareamam79)))/(deltareamam79+(gamareamam79*(1+(0.34*wind2reamam79))))'

'define petpmreajja79 = ((0.408*deltareajja79*(netreajja79*0.0864))+(gamareajja79*(900/(treajja79+273)))*(wind2reajja79*(esreajja79-eareajja79)))/(deltareajja79+(gamareajja79*(1+(0.34*wind2reajja79))))'

'define petpmreason79 = ((0.408*deltareason79*(netreason79*0.0864))+(gamareason79*(900/(treason79+273)))*(wind2reason79*(esreason79-eareason79)))/(deltareason79+(gamareason79*(1+(0.34*wind2reason79))))'

*-------------------------------------------
'define petpma79 = regrid2(petpma79,2)'
'define petpmdjf79 = regrid2(petpmdjf79,2)'
'define petpmmam79 = regrid2(petpmmam79,2)'
'define petpmjja79 = regrid2(petpmjja79,2)'
'define petpmson79 = regrid2(petpmson79,2)'

'define petpmreaa79 = regrid2(petpmreaa79,2)'
'define petpmreadjf79 = regrid2(petpmreadjf79,2)'
'define petpmreamam79 = regrid2(petpmreamam79,2)'
'define petpmreajja79 = regrid2(petpmreajja79,2)'
'define petpmreason79 = regrid2(petpmreason79,2)'


*'define petpma79 = regrid2(petpma79,nlwrs.5(t=1,z=1))'
*'define petpmdjf79 = lterp(petpmdjf79,nlwrs.5(t=1,z=1))'
*'define petpmmma79 = lterp(petpmmam79,nlwrs.5(t=1,z=1))'
*'define petpmjja79 = lterp(petpmjja79,nlwrs.5(t=1,z=1))'
*'define petpmson79 = lterp(petpmson79,nlwrs.5(t=1,z=1))'

